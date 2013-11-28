class CreateMenus < ActiveRecord::Migration
  def change
    create_table :menus do |t|
      t.string :name
      t.integer :level
      t.text :desc
      t.integer :parent_id

      t.timestamps
    end
  end
end
