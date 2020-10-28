class Report < ApplicationRecord
  belongs_to :room
  belongs_to :user
  has_one_attached :picture

  validates :picture, presence: true
end
