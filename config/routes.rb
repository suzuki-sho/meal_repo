Rails.application.routes.draw do
  devise_for :users
  get 'reports/index'
  resources :reports, only: [:index, :new]
  resources :users, only: [:edit, :update]
end
