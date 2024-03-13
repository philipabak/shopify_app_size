Apipie.configure do |config|
  config.app_name                = "Size Charts by Clean Canvas"
  config.api_base_url            = "/api"
  config.doc_base_url            = "/apipie"
  config.default_version         = "1"
  config.validate                = false # it can't handle enums properly
  # where is your API defined?
  config.api_controllers_matcher = "#{Rails.root}/app/controllers/api/**/*.rb"
end
