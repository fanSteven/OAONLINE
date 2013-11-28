json.array!(@users) do |user|
  json.extract! user, :post_id, :name, :seniority, :level, :did, :role_id, :desc
  json.url user_url(user, format: :json)
end
