class AddPasswordToCompanies < ActiveRecord::Migration
  def change
    add_column :companies, :password, :string
  end
end
