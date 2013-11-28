json.array!(@departments) do |department|
  json.extract! department, :name, :cid, :chargeuserid, :desc
  json.url department_url(department, format: :json)
end
