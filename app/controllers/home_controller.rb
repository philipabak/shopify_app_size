# frozen_string_literal: true

class HomeController < ApplicationController
  include ShopifyApp::EmbeddedApp
  include ShopifyApp::RequireKnownShop
  include ShopifyApp::ShopAccessScopesVerification

  def settings
    @local_shop = Shop.from_session(@shop)
    @shop_settings = @local_shop.settings || Shop::DEFAULT_SHOP_SETTINGS

    charge = @local_shop.recurring_charge
    @has_premium_access = if charge
      if charge.status == 'active'
        # charge is active
        true
      elsif charge.status == 'accepted'
        # customer just accepted the charge, activate it now
        charge.activate
        # clear render cache, rebuild charts
        @local_shop.size_charts.update_all(is_render_dirty: true)
        @local_shop.delay.update_store_script!
        true
      elsif charge.status == 'pending'
        # a charge was created, but not approved
        false
      elsif charge.status == 'declined'
        # a charge was created, and refused by the merchant
        @local_shop.update_columns(recurring_charge_id: nil)
        false
      elsif charge.status == 'expired'
        # never accepted - create a new one
        false
      elsif charge.status == 'frozen'
        # frozen due to store non-payment, let's pretend it's ok
        true
      end
    else
      false
    end
    @has_premium_access = true if !@has_premium_access && @local_shop.is_in_premium_access_cheat_list
  end

  def import_export
    @local_shop = Shop.from_session(@shop)
    
    charge = @local_shop.recurring_charge
    @has_premium_access = if charge
      if charge.status == 'active'
        # charge is active
        true
      elsif charge.status == 'accepted'
        # customer just accepted the charge, activate it now
        charge.activate
        # clear render cache, rebuild charts
        @local_shop.size_charts.update_all(is_render_dirty: true)
        @local_shop.delay.update_store_script!
        true
      elsif charge.status == 'pending'
        # a charge was created, but not approved
        false
      elsif charge.status == 'declined'
        # a charge was created, and refused by the merchant
        @local_shop.update_columns(recurring_charge_id: nil)
        false
      elsif charge.status == 'expired'
        # never accepted - create a new one
        false
      elsif charge.status == 'frozen'
        # frozen due to store non-payment, let's pretend it's ok
        true
      end
    else
      false
    end
    @has_premium_access = true if !@has_premium_access && @local_shop.is_in_premium_access_cheat_list
  end

  def index
    @local_shop = Shop.from_session(@shop)

    charge = @local_shop.recurring_charge
    @has_premium_access = if charge
      if charge.status == 'active'
        # charge is active
        true
      elsif charge.status == 'accepted'
        # customer just accepted the charge, activate it now
        charge.activate
        # clear render cache, rebuild charts
        @local_shop.size_charts.update_all(is_render_dirty: true)
        @local_shop.delay.update_store_script!
        true
      elsif charge.status == 'pending'
        # a charge was created, but not approved
        false
      elsif charge.status == 'declined'
        # a charge was created, and refused by the merchant
        @local_shop.update_columns(recurring_charge_id: nil)
        false
      elsif charge.status == 'expired'
        # never accepted - create a new one
        false
      elsif charge.status == 'frozen'
        # frozen due to store non-payment, let's pretend it's ok
        true
      end
    else
      false
    end
    @has_premium_access = true if !@has_premium_access && @local_shop.is_in_premium_access_cheat_list
  end
end

