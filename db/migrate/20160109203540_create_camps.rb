class CreateCamps < ActiveRecord::Migration
  def change
    create_table :camps do |t|
      t.string   :name, :limit => 64, null: false
      t.string   :subtitle, :limit => 255, null: false
      t.string   :contact_email, :limit => 64, null: false
      t.string   :contact_name, :limit => 64, null: false
      t.string   :contact_phone, :limit => 64
      t.text     :description, :limit => 4096
      t.text     :electricity, :limit => 255
      t.text     :light, :limit => 512
      t.text     :fire, :limit => 512
      t.text     :noise, :limit => 255
      t.text     :nature, :limit => 255
      t.text     :moop, :limit => 512
      t.text     :plan, :limit => 1024
      t.text     :cocreation, :limit => 1024
      t.text     :neighbors, :limit => 512
      t.text     :budgetplan, :limit => 1024
      t.integer  :minbudget
      t.integer  :maxbudget
      t.boolean  :seeking_members
    end
  end
end
