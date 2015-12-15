class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :title
      t.string :subtitle
      t.text :text
      t.string :technical_info
      t.string :cutting
      t.string :age
      t.string :alcohol

      t.timestamps null: false
    end
  end
end
