class AddScriptDigestToShops < ActiveRecord::Migration[6.0]
  def change
    change_table :shops do |t|
      t.binary :rendered_script
      t.string :rendered_script_digest
    end
  end
end
