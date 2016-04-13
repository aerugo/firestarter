class AddClassToUsers < ActiveRecord::Migration
  def change
  	change_table :users do |t|
  		t.boolean	:guide, default: false
  		t.boolean	:admin, default: false
  	end
  end
end
