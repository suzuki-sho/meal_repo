class Report < ApplicationRecord
  belongs_to :room
  belongs_to :user

  validates :body, presence: true
  validates :image, presence: true
end
