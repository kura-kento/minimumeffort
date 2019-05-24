class RenameTitreColumnToPanels < ActiveRecord::Migration[5.2]
  def change
    rename_column :panels, :ramdom_panel, :random_panel
  end
end
