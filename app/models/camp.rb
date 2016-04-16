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

	filterrific(
	default_filter_params: { sorted_by: 'created_at_desc' },
	available_filters: [
	  :sorted_by,
	  :search_query,
	  :not_fully_funded,
	  :not_min_funded,
	  :not_seeking_funding
	]
	)
	# Scope definitions. We implement all Filterrific filters through ActiveRecord
	# scopes. In this example we omit the implementation of the scopes for brevity.
	# Please see 'Scope patterns' for scope implementation details.
	scope :search_query, lambda { |query| }

	scope :sorted_by, lambda { |sort_key| }

	scope :not_fully_funded, lambda { |flag|
		return nil  if '0' == flag # checkbox unchecked
		where(fullyfunded: false)
	}

	scope :not_min_funded, lambda { |flag|
		return nil  if '0' == flag # checkbox unchecked
		where(minfunded: false)
	}

	scope :not_seeking_funding, lambda { |flag|
		return nil  if '0' == flag # checkbox unchecked
		where(grantingtoggle: true)
	}

end
