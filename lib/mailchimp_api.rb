require "MailchimpMarketing"
require "digest"

module MailchimpApi

  def self.add_or_update_subscriber_to_list(subscriber_email:, address1:, address2:, city:, state:, country:, shop_owner:,
                                            zip:, domain:, shopify_plan_name:, myshopify_domain:, shop_name:, phone:, install_date:, plan_name:)

    if !ENV.has_key?('MAILCHIMP_LIST_ID')
      return
    end

    subscriber_hash = Digest::MD5.hexdigest subscriber_email.downcase

    response = mailchimp_client.lists.set_list_member(
      ENV['MAILCHIMP_LIST_ID'],
      subscriber_hash, {
        email_address: subscriber_email,
        status_if_new: "subscribed",
        merge_fields: {
          FNAME: shop_owner.split(" ")[0],
          LNAME: shop_owner.split(" ")[1],
          ADDRESS: {
              addr1: address1,
              addr2: address2,
              city: city,
              state: state,
              zip: zip,
              country: country
          },
          PHONE: phone,
          MMERGE5: shop_name,
          MMERGE6: myshopify_domain,
          MMERGE7: shopify_plan_name,
          MMERGE8: install_date,
          MMERGE9: plan_name
        }
      })
    puts response
  end

  def self.update_tag_for_subscriber(subscriber_email:, tag_name:, tag_status:)
    if !ENV.has_key?('MAILCHIMP_LIST_ID')
      return
    end

    subscriber_hash = Digest::MD5.hexdigest subscriber_email.downcase
    response = mailchimp_client.lists.update_list_member_tags ENV['MAILCHIMP_LIST_ID'], subscriber_hash, {
      tags: [{
        name: tag_name,
        status: tag_status
      }]
    }
    puts response
  end

  def self.ping
    puts mailchimp_client.ping.get
  end

  def self.mailchimp_client
    return MailchimpMarketing::Client.new(
      {
        :api_key => ENV['MAILCHIMP_API_KEY'],
        :server => ENV['MAILCHIMP_SERVER_PREFIX']
      }
    )
  end
end
