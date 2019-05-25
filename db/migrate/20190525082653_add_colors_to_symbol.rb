class AddColorsToSymbol < ActiveRecord::Migration[5.2]
  def change
    add_column :colors, :symbol, :text
  end
end
