class AddVideoLinkToCamps < ActiveRecord::Migration
  def change
    add_column :camps, :video_link, :string
  end
end
