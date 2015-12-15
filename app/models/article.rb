class Article < ActiveRecord::Base
	extend FriendlyId
  friendly_id :title, use: :slugged
	has_attached_file :image,
										styles: { thumb: "534x648#", large: "1674x618#" },
										default_url: "news-:style.jpg",
										convert_options: { thumb: "-quality 75 -strip", large: "-quality 75 -strip" }
	validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

	def large_image
		self.image(:large)
	end
end
