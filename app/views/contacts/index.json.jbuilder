json.array!(@contacts) do |contact|
  json.extract! contact, :id, :fullname, :email, :phones, :address, :city, :zip_code, :country, :birthday, :gender, :comments, :subscribed_to_mailing_list
  json.url contact_url(contact, format: :json)
end
