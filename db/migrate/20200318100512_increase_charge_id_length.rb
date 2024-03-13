class IncreaseChargeIdLength < ActiveRecord::Migration[6.0]
  def change
    change_column :shops, :recurring_charge_id, :bigint
  end
end
