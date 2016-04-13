class AddTicketsTable < ActiveRecord::Migration
  def change
    create_table :tickets do |t|
	  	t.text     	:id_code
	  	t.boolean   :id_registered, null: false, default: false
    end
  end
end
