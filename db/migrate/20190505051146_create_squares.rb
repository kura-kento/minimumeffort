class CreateSquares < ActiveRecord::Migration[5.2]
  def change
    create_table :squares do |t|
      t.text :line_1
      t.text :line_2
      t.text :line_3
      t.text :line_4
      t.text :line_5
      t.text :line_6
      t.text :line_7
      t.text :line_8
      t.text :line_9
      t.text :line_10
      t.text :line_11
      t.text :line_12
      t.text :line_13
      t.text :line_14
      t.text :line_15
      t.text :line_16

      t.timestamps
    end
  end
end
