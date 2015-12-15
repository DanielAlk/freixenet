json.array!(@articles) do |article|
  json.extract! article, :id, :title, :subtitle, :text, :image
  json.url article_url(article, format: :json)
end
