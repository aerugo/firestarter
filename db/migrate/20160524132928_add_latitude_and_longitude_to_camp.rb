class AddLatitudeAndLongitudeToCamp < ActiveRecord::Migration
  def change
    add_column :camps, :latitude, :float
    add_column :camps, :longitude, :float
  end
end
