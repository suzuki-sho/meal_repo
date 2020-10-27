class RoomUser < ApplicationRecord
  belongs_to :room
  belongs_to :user

  validates :user_id, uniqueness: true

end
