class AddUserTicketIdField < ActiveRecord::Migration
  def change
  	change_table :users do |t|
  		t.text	:ticket_id
  	end
  end
end
