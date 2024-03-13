# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  apipie
  root :to => 'home#index'

  get '/settings' => 'home#settings'
  get '/import_export' => 'home#import_export'

  mount ShopifyApp::Engine, at: '/'

  namespace :api do
    namespace :v1 do
      resources 'size-chart', as: :size_chart, controller: :size_chart, only: [:index, :show, :create, :update, :patch, :destroy, :duplicate, :pidbyhandle] do
        member do
          post 'reports/increment' => 'report#report_increment'
        end
      end

      resource 'shop_settings', as: :shop_settings, controller: :shop_settings, only: [:create]
      resource 'import_export', only: [:show, :create]
      resource 'core_available', as: :core_available, controller: :core_available, only: [:show]
      resource 'core_enabled', as: :core_enabled, controller: :core_enabled, only: [:show]

      post 'plan/select' => 'plan#select'

      get 'size-chart/shopinfo' => 'size_chart#shopinfo'

      get 'size-chart/duplicate/(:id)' => 'size_chart#duplicate'
      get 'size-chart/pidbyhandle/(:id)' => 'size_chart#pidbyhandle'
    end
  end

  get '/render/size-chart' => 'render#size_chart', as: 'render_size_chart'
  match "*path", to: "shopify_app/webhooks#receive", via: [:post]
end
