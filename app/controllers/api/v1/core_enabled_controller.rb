# frozen_string_literal: true

class Api::V1::CoreEnabledController < Api::V1::BaseController
  before_action :fetch_shop 

  def show
    disabled = true
    @shop.with_shopify_session do
      published_theme = ShopifyAPI::Theme.all.select { |theme| theme.role == 'main' }.first
      config = ShopifyAPI::Asset.all(theme_id: published_theme.id, asset: { "key" => "config/settings_data.json" }).first
      parsed = JSON.parse(config.value())
      if !parsed.nil?
        begin
          block = parsed["current"]["blocks"].values().find { |b| b["type"].include? "#{ENV['APP_HANDLE']}/blocks/core" }
          disabled = block["disabled"]
        rescue => error
          logger.error("Core Enabled Error: #{error}")
        end
      end
    end
    render json: {
      success: true,
      enabled: !disabled
    }
  rescue => e
    render_json_fail("Failed to get core enabled: #{e.message}")
  end

end
