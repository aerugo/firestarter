class AddUserToCamps < ActiveRecord::Migration
  def change
    add_reference :camps, :user, index: true, foreign_key: true
  end
end
