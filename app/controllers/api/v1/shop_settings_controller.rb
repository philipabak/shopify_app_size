# frozen_string_literal: true

require 'httparty'

class Api::V1::ShopSettingsController < Api::V1::BaseController
  before_action :fetch_shop
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  include HTTParty

  skip_before_action :verify_authenticity_token
  skip_before_action :login_again_if_different_user_or_shop

  api! 'Creates or Updates shop settings'
  example JSON.pretty_generate({ success: true })
  def create
    current_settings = @shop.settings || Shop::DEFAULT_SHOP_SETTINGS

    current_settings[:customCss] = params[:customCss]
    current_settings[:enableAnalytics] = params[:enableAnalytics]

    @shop.settings = current_settings
    @shop.save!

    @shop.size_charts.update_all(is_render_dirty: true)
    @shop.delay.update_store_script!

    render_json_success
  rescue => e
    render_json_fail("Failed to save shop settings: #{e.message}")
  end
end
