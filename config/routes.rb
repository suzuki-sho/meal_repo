Rails.application.routes.draw do
  devise_for :users
  root to: "reports#index"
  resources :users, only: [:edit, :update, :destroy]
  resources :rooms, only: [:new, :create] do
    resources :reports, only: [:index, :new, :create]
  end
end
