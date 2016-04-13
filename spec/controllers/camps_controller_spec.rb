require 'rails_helper'
require 'faker'

describe CampsController do  
  describe "camp creation" do

    let(:camp_leader) { Faker::Name.name }

    let(:camp_attributes){
      {
        name: 'Burn something',
        description: 'We will build something and then burn it',
        size_of_necessary_space: 'Big enough for a big fire',
        camp_necessities: 'There sill be need of good ventilation',
        number_of_members: '2 to build and 3 to burn',
        noise_level: 'The fire consumes everything',
        safety_risks: 'Well - it will burn....',
        contact_email: 'burn@example.com',
        contact_name: camp_leader
      }
    }

    let(:email) { Faker::Internet.email }

    let(:user) { User.create! email: email, password: Faker::Internet.password }

    before do
      sign_in user
    end

    it 'got a form' do
      get :new

      expect(response).to have_http_status(:success)
    end

    it 'creates a camp' do
      post :create, camp: camp_attributes

      c = Camp.find_by_contact_name camp_leader

      expect( c.name ).to eq 'Burn something'
    end
  end
end
