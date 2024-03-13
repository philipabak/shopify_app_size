class AddImpressionsToSizeCharts < ActiveRecord::Migration[6.0]
  def change
    change_table :size_charts do |t|
      t.integer :link_impressions, null: false, default: 0
      t.integer :link_clicks, null: false, default: 0
    end
  end
end
