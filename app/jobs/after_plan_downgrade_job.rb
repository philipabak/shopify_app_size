class AfterPlanDowngradeJob < ActiveJob::Base
  def perform(shop_domain:)
    shop = Shop.find_by(shopify_domain: shop_domain)
    begin
      shop_email = nil
      shop.with_shopify_session do
        shop_email = ShopifyAPI::Shop.all(fields: "email")[0].email

        MailchimpApi.update_tag_for_subscriber(
          subscriber_email: shop_email,
          tag_name: 'Premium',
          tag_status: 'inactive'
        )
      end
    rescue => ex
      logger.error(ex)
      logger.error("MAILCHIMP: Failed to set Premium  tag to inactive for shop: #{shop.shopify_domain}, email: #{shop_email}")
    end
  end
end
