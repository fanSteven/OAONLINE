json.array!(@menus) do |menu|
  json.extract! menu, :name, :level, :desc, :parent_id
  json.url menu_url(menu, format: :json)
end
