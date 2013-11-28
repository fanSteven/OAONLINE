class CreateMenuToRoles < ActiveRecord::Migration
  def change
    create_table :menu_to_roles do |t|
      t.decimal :role_id
      t.decimal :menu_id

      t.timestamps
    end
  end
end
