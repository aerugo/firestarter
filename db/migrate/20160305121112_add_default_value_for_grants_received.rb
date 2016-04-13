class AddDefaultValueForGrantsReceived < ActiveRecord::Migration
  def change
    change_column :camps, :grants_received, :integer, { :default => 0 }
  end
end
