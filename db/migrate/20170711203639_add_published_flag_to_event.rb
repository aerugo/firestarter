class AddPublishedFlagToEvent < ActiveRecord::Migration
  def change
    add_column :camps, :published, :boolean
  end
end
