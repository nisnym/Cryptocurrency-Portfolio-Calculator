Rails.application.routes.draw do
  root 'pages#home'
  post 'search', to: 'pages#search'
  post 'calculate', to: 'pages#calculate'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
