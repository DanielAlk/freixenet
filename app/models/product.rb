class Product < ActiveRecord::Base
	has_attached_file :file, default_url: ""
	has_attached_file :image,
										styles: { large: "1800x1118#" },
										default_url: "products-1.jpg",
										convert_options: { large: "-quality 75 -strip" }
	validates_attachment_content_type :file, content_type: /\Aapplication\/pdf\Z/
	validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end