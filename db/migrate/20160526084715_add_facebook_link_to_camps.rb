class AddFacebookLinkToCamps < ActiveRecord::Migration
  def change
    add_column :camps, :facebook_link, :string
  end
end
