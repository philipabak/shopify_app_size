class AddSettingsToShop < ActiveRecord::Migration[6.0]
  def change
    change_table :shops do |t|
      t.json :settings
    end
  end
end
