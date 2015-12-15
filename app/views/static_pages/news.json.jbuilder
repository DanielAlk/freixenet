json.array!(@articles) do |article|
  json.extract! article, :id, :title, :subtitle, :text, :large_image
  json.url article_url(article)
end