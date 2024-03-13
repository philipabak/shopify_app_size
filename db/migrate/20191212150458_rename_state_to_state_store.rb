class RenameStateToStateStore < ActiveRecord::Migration[6.0]
  def change
    rename_column :size_charts, :state, :state_store
  end
end
