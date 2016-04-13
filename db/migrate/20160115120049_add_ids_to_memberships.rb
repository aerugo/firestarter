class AddIdsToMemberships < ActiveRecord::Migration
  def change
    add_reference :memberships, :user, index: true, foreign_key: true
    add_reference :memberships, :camp, index: true, foreign_key: true
  end
end
