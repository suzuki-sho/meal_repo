class AddLikedToReports < ActiveRecord::Migration[6.0]
  def change
    add_column :reports, :liked, :integer
  end
end
