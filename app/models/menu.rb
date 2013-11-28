class Menu < ActiveRecord::Base
  def self.find_menus_items
    Menu.all.each.collect {|item|[item.name,item.id]}
  end
  def self.find_first_level_menu
    @first_menus = Menu.where(:level => 0).all
  end

  def self.find_second_level_menu(parentID)
    Menu.where(:parent_id => parentID).all
  end
end
