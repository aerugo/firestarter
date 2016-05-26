class AddTwitterLinkToCamps < ActiveRecord::Migration
  def change
    add_column :camps, :twitter_link, :string
  end
end
