class SizeChart < ActiveRecord::Base
  belongs_to :shop
  default_scope { order(created_at: :desc) }
  enum status: [
    :draft,
    :published,
    :deleted
  ]
  validates :name, :status, :state_store, presence: true
  validates :status, inclusion: { in: SizeChart.statuses.keys }
  before_update :assess_render_dirty

  def self.to_csv
    attributes = %w{id name}

    CSV.generate(headers: true) do |csv|
      csv << attributes

      all.find_each do |size_chart|
        csv << attributes.map { |attr| size_chart.send(attr) }
      end
    end
  end

  def self.bulk_csv_update(csv)
    csv_text = File.read(csv)
    parsed_csv = CSV.parse(csv_text, headers: true)

    update_attributes = parsed_csv.to_h do |row|
      row_hash = row.to_h
      [row_hash["id"], row_hash.except("id")]
    end

    all.update(update_attributes.keys, update_attributes.values)
  end

  def assess_render_dirty
    self.is_render_dirty = true if self.state_store_changed?
  end

  def attrs_for_api_list
    {
      id: self.id,
      name: self.name,
      status: self.status,

      state_store: {
        settings: {
          position: state_store_value('settings', 'position'),
          overlayColor: state_store_value('settings', 'overlayColor'),
          backgroundColor: state_store_value('settings', 'backgroundColor')
        },
        conditions:{
          products: state_store_value('conditions', 'products'),
          collections: state_store_value('conditions', 'collections'),
          tags: state_store_value('conditions', 'tags'),
          vendors: state_store_value('conditions', 'vendors'),
          types: state_store_value('conditions', 'myTypes'),
        }
      },
      created_at: self.created_at.strftime('%FT%T%:z'),
      updated_at: self.updated_at.strftime('%FT%T%:z'),
      link_impressions: self.link_impressions,
      link_clicks: self.link_clicks
    }
  end

  def attrs_for_api_get
    {
      id: self.id,
      name: self.name,
      status: self.status,
      state_store: self.state_store,
      created_at: self.created_at.strftime('%FT%T%:z'),
      updated_at: self.updated_at.strftime('%FT%T%:z'),
      link_impressions: self.link_impressions,
      link_clicks: self.link_clicks
    }
  end

  def self.published_in_display_priority_order
    # sort in this order:
    # products only
    # products and collections
    # collections only
    # most recently updated
    published.to_a.sort do |x, y|
      x_has_products = x.state_store['conditions']['products'].length > 0
      y_has_products = y.state_store['conditions']['products'].length > 0
      if x_has_products && !y_has_products
        -1
      elsif !x_has_products && y_has_products
        1
      else # products alone cannot be used to determine order
        x_has_collections = x.state_store['conditions']['collections'].length > 0
        y_has_collections = y.state_store['conditions']['collections'].length > 0
        if x_has_products && y_has_products
          # both have products, prioritise those without collections
          if x_has_collections && !y_has_collections
            1
          elsif !x_has_collections && y_has_collections
            -1
          else
            y.updated_at <=> x.updated_at
          end
        else # !x_has_products && !y_has_products
          # neither have products, prioritise those with collections
          if x_has_collections && !y_has_collections
            -1
          elsif !x_has_collections && y_has_collections
            1
          else
            y.updated_at <=> x.updated_at
          end
        end
      end
    end
  end

  def self.api_dummy
    new(
      id: 1,
      name: 'Size Chart',
      status: :draft,
      state_store: { foo: 'bar' },
      created_at: Time.now,
      updated_at: Time.now
    )
  end

  protected

  def state_store_value(key1, key2)
    if state_store && state_store[key1] && state_store[key1][key2]
      state_store[key1][key2]
    else
      nil
    end
  end
end
