class CreateSizeCharts < ActiveRecord::Migration[6.0]
  def change
    create_table :size_charts do |t|
      t.integer :shop_id, null: false
      t.string :name, null: false
      t.integer :status, null: false
      t.json :state, null: false
      t.timestamps
    end

    add_foreign_key :size_charts, :shops
  end
end
