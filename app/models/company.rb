class Company < ActiveRecord::Base
  has_many :departments

  def self.login(enterprise,password)
    find(:first,
         :conditions => ["username = ? and password = ?",
                         enterprise, password])
  end
end
