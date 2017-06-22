class AddPowerAndRentToCamp < ActiveRecord::Migration
  def change
    add_column :camps, :need_electricity, :boolean
    add_column :camps, :need_tent, :boolean
  end
end