class AddAppChargeId < ActiveRecord::Migration[6.0]
  def change
    change_table :shops do |t|
      t.integer :recurring_charge_id
    end
  end
end
