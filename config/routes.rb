Rails.application.routes.draw do
  get "/" => "game#top"
  get "start" => "game#start"
  post ":place_1/start_processing" => "game#start_processing"
  post "random_color" => "game#random_color"
  post "random_square" => "game#random_square"
  post "square_reset" => "game#square_reset"
  post "random_panel" => "game#random_panel"



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
