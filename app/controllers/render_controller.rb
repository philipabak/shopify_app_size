# frozen_string_literal: true

class RenderController < AuthenticatedController
  before_action :fetch_shop
  layout false

  def size_chart
    # this is not currently used except for testing - the rendering is usually done in shop.rb
    @state_store = @shop.size_charts.last.state_store
    @has_premium_access = @shop.has_premium_access
    @shop_settings = @shop.settings
  end

  protected

  def fetch_shop
    @shop = Shop.from_session(@current_shopify_session)
  end
end
