class AddMarketingToCamps < ActiveRecord::Migration
  def change
    add_column :camps, :marketing, :string, default: ""
  end
end
