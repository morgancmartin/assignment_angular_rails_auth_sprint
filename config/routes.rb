Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users
  root to: "static_pages#index"
  resources :static_pages, only: [ :index ]

  scope :api do
    scope :v1 do
    end
  end
end
