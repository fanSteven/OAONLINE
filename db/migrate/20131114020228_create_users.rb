class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :post_id
      t.string :name
      t.integer :seniority
      t.integer :level
      t.integer :did
      t.integer :role_id
      t.text :desc

      t.timestamps
    end
  end
end
