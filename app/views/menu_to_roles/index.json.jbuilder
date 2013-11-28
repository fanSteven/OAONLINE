json.array!(@menu_to_roles) do |menu_to_role|
  json.extract! menu_to_role, :role_id, :menu_id
  json.url menu_to_role_url(menu_to_role, format: :json)
end
