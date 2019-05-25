class AddSquareToExchange < ActiveRecord::Migration[5.2]
  def change
    add_column :squares, :exchange, :text
  end
end
