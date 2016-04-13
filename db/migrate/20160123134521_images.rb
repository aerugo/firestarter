class Images < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.column :image, :binary, limit: 1.megabytes
      t.column :user_id, :integer
      t.column :camp_id, :integer
      t.timestamps
    end
  end
end
