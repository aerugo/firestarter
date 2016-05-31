class AddInfoToCamps < ActiveRecord::Migration
  def change
    add_column :camps, :address, :string, default: ""
    add_column :camps, :start_time, :string, default: ""
    add_column :camps, :end_time, :string, default: ""
    add_column :camps, :organizer, :string, default: ""
    add_column :camps, :benefit, :string, default: ""
  end
end
