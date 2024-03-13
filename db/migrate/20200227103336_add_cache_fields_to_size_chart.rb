class AddCacheFieldsToSizeChart < ActiveRecord::Migration[6.0]
  def change
    change_table :size_charts do |t|
      t.binary :rendered_html
      t.boolean :is_render_dirty, null: false, default: true
    end
  end
end
