class ChangeCacheStoreTypes < ActiveRecord::Migration[6.0]
  def up
    Shop.update_all({ rendered_script: nil, rendered_script_digest: nil })
    change_column :shops, :rendered_script, :text

    SizeChart.update_all({ rendered_html: nil, is_render_dirty: false })
    change_column :size_charts, :rendered_html, :text
  end

  def down
    Shop.update_all({ rendered_script: nil, rendered_script_digest: nil })
    change_column :shops, :rendered_script, :binary

    SizeChart.update_all({ rendered_html: nil, is_render_dirty: false })
    change_column :size_charts, :rendered_html, :binary
  end
end

# RETROACTIVE COMMENT:
# you also need to clear the associated digest/dirty fields, otherwise the app won't know these cache inputs are empty!
