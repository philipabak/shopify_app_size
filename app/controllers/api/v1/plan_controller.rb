# frozen_string_literal: true
require 'httparty'

class Api::V1::PlanController < Api::V1::BaseController
  before_action :fetch_shop
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  include HTTParty


  def_param_group :plan_select do
    param :plan_name, String, "Plan name - either 'paid' or 'free'"
    param :return_url, String, "The URL for merchant to return to, if switching to a paid plan, after accepting or refusing the charge"
  end

  api! 'Select your current payment plan'
  param_group :plan_select
  example JSON.pretty_generate({
    "success": true,
    "message": {
      "confirmation_url": "https://store.myshopify.com/approve_charge?id=123456"
    }
  })
  def select
    shop_from_api = ShopifyAPI::Shop.all[0]
    case params.require(:plan_name)
      when 'free'
        charge = @shop.recurring_charge
        if charge
          # remove charge
          charge.cancel


          # limit number of published size charts, preserving most recent within limit
          if ENV['FREE_TIER_CHART_COUNT_MAX']
            @shop.size_charts
              .published
              .order(updated_at: :desc)
              .offset(ENV['FREE_TIER_CHART_COUNT_MAX'])
              .update_all(status: :draft)
          end

          # remove ref to charge, clear render cache, rebuild charts
          @shop.update_columns(recurring_charge_id: nil)
          @shop.size_charts.update_all(is_render_dirty: true)
          @shop.delay.update_store_script!

          AfterPlanDowngradeJob.perform_later(shop_domain: @shop.shopify_domain)

          render_json_success
        else
          render_json_fail 'No charge to cancel'
        end

      when 'paid'
        @shop.with_shopify_session do
          charge = ShopifyAPI::RecurringApplicationCharge.new()
          charge.name = ENV['RECURRING_CHARGE_NAME']
          charge.price = ENV['RECURRING_CHARGE_AMOUNT'].to_f
          charge.return_url = params.require(:return_url)
          charge.test = ENV['RECURRING_CHARGE_TEST_MODE'] == 'true'

          charge.save!
        end

        @shop.update_columns(recurring_charge_id: charge.id)

        AfterPlanUpgradeJob.perform_later(shop_domain: @shop.shopify_domain)

        render_json_success(confirmation_url: charge.confirmation_url)

     else
        render_json_fail 'Invalid plan name'
    end
  end
end
