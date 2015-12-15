json.array!(@products) do |product|
  json.extract! product, :id, :title, :subtitle, :text, :technical_info, :cutting, :age, :alcohol, :image, :file
  json.url product_url(product, format: :json)
end
