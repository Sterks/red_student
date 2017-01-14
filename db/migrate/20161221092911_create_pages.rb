class CreatePages < ActiveRecord::Migration[5.0]
  def change
    create_table :pages do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :work

      t.timestamps
    end
  end
end
