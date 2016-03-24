class CreateRaffles < ActiveRecord::Migration
  def change
    create_table :raffles do |t|
      t.string :code
      t.string :name
      t.string :email
      t.string :location

      t.timestamps null: false
    end
  end
end
