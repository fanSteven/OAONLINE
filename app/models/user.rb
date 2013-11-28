class User < ActiveRecord::Base
  has_many :roles

  def self.login(name, password)
    find(:first,
         :conditions => ["name = ? and password = ?",
                         name, password])
  end

end
