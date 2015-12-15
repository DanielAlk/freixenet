class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :fullname
      t.string :email
      t.string :phones
      t.string :address
      t.string :city
      t.string :zip_code
      t.string :country
      t.date :birthday
      t.string :gender
      t.text :comments
      t.boolean :subscribed_to_mailing_list

      t.timestamps null: false
    end
  end
end
