class CreateDepartments < ActiveRecord::Migration
  def change
    create_table :departments do |t|
      t.string :name
      t.integer :company_id
      t.integer :chargeuserid
      t.text :desc

      t.timestamps
    end
  end
end
