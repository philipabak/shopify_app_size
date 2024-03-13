class AddEmailToShops < ActiveRecord::Migration[6.0]
  def change
    change_table :shops do |t|
      t.string :shop_email
    end
  end
end
