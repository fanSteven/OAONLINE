class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :company_id
      t.string :name
      t.text :desc

      t.timestamps
    end
  end
end
