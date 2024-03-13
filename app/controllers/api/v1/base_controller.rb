class Api::V1::BaseController < AuthenticatedController
  #prepend_before_action :check_for_session_param

  resource_description do
    api_version "1"
    formats 'json'
  end

  protected

  def fetch_shop
    @shop = Shop.from_session(@current_shopify_session)
  end

  def fetch_tags
    @tags = Shop.collect_mdata(@current_shopify_session)
  end



  def render_json_success(message = nil)
    render(
      json: {
        success: true
      }.tap do |h|
        h[:message] = message unless message.blank?
      end
    )
  end

  def render_json_fail(message)
    render(
      json: {
        success: false,
        message: message
      },
      status: 400
    )
  end

  def record_not_found
    render(
      json: {
        success: false,
        message: 'Record not found'
      },
      status: 404
    )
  end

  def check_for_session_param
    # if the session is passed in through an http header, use that instead of the cookie
    # fixes issue with two stores open at once, on the same domain
    if request.headers['Session']
      decrypted_session = verify_and_decrypt_session_cookie(request.headers['Session'])
      decrypted_session.each{ |key, value| session[key] = value }
    end
  end

  # specific to Rails 6
  def verify_and_decrypt_session_cookie(cookie, secret_key_base = Rails.application.secret_key_base)
    config = Rails.application.config
    salt = config.action_dispatch.authenticated_encrypted_cookie_salt
    encrypted_cookie_cipher = config.action_dispatch.encrypted_cookie_cipher || 'aes-256-gcm'
    serializer = ActionDispatch::Cookies::JsonSerializer

    key_generator = ActiveSupport::KeyGenerator.new(secret_key_base, iterations: 1000)
    key_len = ActiveSupport::MessageEncryptor.key_len(encrypted_cookie_cipher)
    secret = key_generator.generate_key(salt, key_len)
    encryptor = ActiveSupport::MessageEncryptor.new(secret, cipher: encrypted_cookie_cipher, serializer: serializer)

    session_key = config.session_options[:key].freeze
    encryptor.decrypt_and_verify(cookie, purpose: "cookie.#{session_key}")
  end
end
