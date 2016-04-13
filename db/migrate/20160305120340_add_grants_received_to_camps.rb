class AddGrantsReceivedToCamps < ActiveRecord::Migration
  def change
    add_column :camps, :grants_received, :integer
  end
end
