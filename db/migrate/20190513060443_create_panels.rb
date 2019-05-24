class CreatePanels < ActiveRecord::Migration[5.2]
  def change
    create_table :panels do |t|
      t.text :ramdom_panel
      t.text :wall
      t.text :panel_color

      t.timestamps
    end
  end
end
