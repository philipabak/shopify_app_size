# frozen_string_literal: true

ShopifyApp.configure do |config|
  config.application_name = 'Size Charts by Clean Canvas'
  config.api_key = ENV['SHOPIFY_API_KEY']
  config.secret = ENV['SHOPIFY_API_SECRET']
  config.old_secret = ''
  config.scope = 'read_products, read_script_tags, write_script_tags, read_themes, write_themes' # Consult this page for more scope options: https://help.shopify.com/en/api/getting-started/authentication/oauth/scopes
  config.embedded_app = true
  config.after_authenticate_job = { job: "Shopify::AfterAuthenticateJob", inline: false }
  config.api_version = '2023-01'
  config.shop_session_repository = 'Shop'
  config.myshopify_domain = 'myshopify.com'
  config.webhooks = [
    { topic: 'themes/publish', path: 'webhooks/themes_publish', format: 'json' },
    { topic: 'shop/redact', path: 'webhooks/shop_redact', format: 'json' },
    { topic: 'customers/redact', path: 'webhooks/customers_redact', format: 'json' },
    { topic: 'customers/data_request', path: 'webhooks/customers_data_request', format: 'json' },
    { topic: 'app/uninstalled', path: 'webhooks/app_uninstalled', format: 'json' }
  ]
end

Rails.application.config.after_initialize do
  if ShopifyApp.configuration.api_key.present? && ShopifyApp.configuration.secret.present?
    ShopifyAPI::Context.setup(
      api_key: ShopifyApp.configuration.api_key,
      api_secret_key: ShopifyApp.configuration.secret,
      api_version: ShopifyApp.configuration.api_version,
      host_name: URI(ENV.fetch("HOST", "")).host || "",
      scope: ShopifyApp.configuration.scope,
      is_private: !ENV.fetch("SHOPIFY_APP_PRIVATE_SHOP", "").empty?,
      is_embedded: ShopifyApp.configuration.embedded_app,
      session_storage: ShopifyApp::SessionRepository,
      logger: Rails.logger,
      private_shop: ENV.fetch("SHOPIFY_APP_PRIVATE_SHOP", nil),
      user_agent_prefix: "ShopifyApp/#{ShopifyApp::VERSION}"
    )

    ShopifyApp::WebhooksManager.add_registrations
  end
end
