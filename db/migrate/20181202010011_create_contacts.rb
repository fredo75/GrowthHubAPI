class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.string :firstName
      t.integer :lastName
      t.string :email
      t.string :company

      t.timestamps
    end
  end
end
