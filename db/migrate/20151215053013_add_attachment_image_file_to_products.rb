class AddAttachmentImageFileToProducts < ActiveRecord::Migration
  def self.up
    change_table :products do |t|
      t.attachment :image
      t.attachment :file
    end
  end

  def self.down
    remove_attachment :products, :image
    remove_attachment :products, :file
  end
end
