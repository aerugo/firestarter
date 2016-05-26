class AddInstagramLinkToCamps < ActiveRecord::Migration
  def change
    add_column :camps, :instagram_link, :string
  end
end
