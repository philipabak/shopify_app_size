require "./lib/mailchimp_api.rb"

class AppUninstalledJob < ActiveJob::Base
  extend ShopifyAPI::Webhooks::Handler

  class << self
    def handle(topic:, shop:, body:)
      perform_later(topic: topic, shop_domain: shop, webhook: body)
    end
  end

  def perform(topic:, shop_domain:, webhook:)
    shop = Shop.find_by(shopify_domain: shop_domain)

    return if shop.shop_email.nil?

    MailchimpApi.update_tag_for_subscriber(
      subscriber_email: shop.shop_email,
      tag_name: 'uninstalled', 
      tag_status: 'active'
    )

    #shop.destroy!
  end
end
