class Camp < ActiveRecord::Base
  belongs_to :creator, class_name: 'User', foreign_key: 'user_id'

  has_many :memberships
  has_many :users, through: :memberships
  has_many :images

  validates :creator, presence: true
  validates :name, presence: true
  validates :subtitle, presence: true
  validates :contact_email, presence: true
  validates :contact_name, presence: true
end
