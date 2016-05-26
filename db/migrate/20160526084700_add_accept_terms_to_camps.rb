class AddAcceptTermsToCamps < ActiveRecord::Migration
  def change
    add_column :camps, :accept_terms, :boolean
  end
end
