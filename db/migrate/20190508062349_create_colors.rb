class CreateColors < ActiveRecord::Migration[5.2]
  def change
    create_table :colors do |t|
      t.text :color
      t.integer :number

      t.timestamps
    end
  end
end
