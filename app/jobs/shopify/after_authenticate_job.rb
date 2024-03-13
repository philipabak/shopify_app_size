# frozen_string_literal: true

module Shopify
  class AfterAuthenticateJob < ActiveJob::Base
    def perform(shop_domain:)
      shop = Shop.find_by(shopify_domain: shop_domain)

      shop.with_shopify_session do
        shop.set_conditional_core_on
        shop_from_api = ShopifyAPI::Shop.all(
          fields: "email, address1, address2, city, province_code, zip, country_code, domain, myshopify_domain, shop_owner, plan_name, name, phone")[0]
        MailchimpApi.add_or_update_subscriber_to_list(
          subscriber_email: shop_from_api.email,
          address1: shop_from_api.address1 || "",
          address2: shop_from_api.address2 || "",
          city: shop_from_api.city || "",
          state: shop_from_api.province_code || "",
          country: shop_from_api.country_code || "",
          shop_owner: shop_from_api.shop_owner,
          zip: shop_from_api.zip || "",
          domain: shop_from_api.domain,
          shopify_plan_name: shop_from_api.plan_name,
          myshopify_domain: shop_from_api.myshopify_domain,
          shop_name: shop_from_api.name,
          phone: shop_from_api.phone || "",
          install_date: shop.created_at,
          plan_name: shop.has_premium_access ? "Premium" : "Free"
        )

        shop.shop_email = shop_from_api.email
        shop.save!
      end
    end
  end
end
