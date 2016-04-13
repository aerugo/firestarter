class Membership < ActiveRecord::Base
  belongs_to :camp
  belongs_to :user
end
