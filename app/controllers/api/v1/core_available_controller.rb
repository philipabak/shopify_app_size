# frozen_string_literal: true

class Api::V1::CoreAvailableController < Api::V1::BaseController
  before_action :fetch_shop 

  def show
    app_installation_id = @shop.get_app_installation_id
    available = @shop.get_conditional_core(app_installation_id)

    has_script_tag = nil
    @shop.with_shopify_session do
        tags = ShopifyAPI::ScriptTag.all
        has_script_tag = tags.length > 0
    end

    render json: {
      success: true,
      available: available,
      hasScriptTag: has_script_tag
    }
  rescue => e
    render_json_fail("Failed to get core enabled: #{e.message}")
  end

end
