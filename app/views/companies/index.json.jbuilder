json.array!(@companies) do |company|
  json.extract! company, :name, :phone, :address, :email, :fax, :description, :level
  json.url company_url(company, format: :json)
end
