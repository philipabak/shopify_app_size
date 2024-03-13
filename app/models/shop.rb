class Shop < ActiveRecord::Base
  #include ShopifyAPI
  include ShopifyApp::ShopSessionStorage

  has_many :size_charts, dependent: :delete_all

  DEFAULT_SHOP_SETTINGS = { customCss: '', enableAnalytics: false }

  def self.from_session(shop_session)
    Shop.where(
      shopify_domain: shop_session.shop,
      shopify_token: shop_session.access_token
    ).take
  end

  def collect_mdata(shop_session)
    # load the current session with SessionUtils.load_current_session
    #session = ShopifyAPI::Utils::SessionUtils.load_current_session(auth_header: <auth-header>, cookies: <cookies>, is_online: <true|false>)

    # initalize the client
    client = ShopifyAPI::Clients::Graphql::Admin.new(session: shop_session)

    # make the GraphQL query string
    query =<<~QUERY
  {
    products(first: 10) {
      edges {
        cursor
        node {
          id
          title
          onlineStoreUrl
        }
      }
    }
  }
    QUERY

    response = client.query(query: query)
    return response
  end

  def get_app_installation_id()
    client = ShopifyAPI::Clients::Graphql::Admin.new(session: ShopifyAPI::Context.active_session)
    app_installation_query = <<~QUERY
      {
        currentAppInstallation {
          id
        }
      }
    QUERY

    response = client.query(query: app_installation_query)
    return response.body["data"]["currentAppInstallation"]["id"]
  end

  def set_app_metafield(app_installation_id, metafields_set)
    client = ShopifyAPI::Clients::Graphql::Admin.new(session: ShopifyAPI::Context.active_session)

    query = <<~QUERY
    mutation metafieldsSet($metafields: [MetafieldsSetInput!]!) {
      metafieldsSet(metafields: $metafields) {
        metafields {
          id
        }
        userErrors {
          field
          message
        }
      }
    }
    QUERY
    variables = { metafields: metafields_set }

    response = client.query(query: query, variables: variables)
    errors = response.body.fetch('errors', [])
    if errors.length > 0
      logger.error("ERROR unable to set app metafield #{metafields_set}: #{errors}")
      raise "Unable to set metafield"
    end
  end

  def set_script_location_metafield(app_installation_id, location)
    metafields_set = [{
      namespace: "script",
      key: "location",
      ownerId: app_installation_id,
      type: "url",
      value: location
    }]

    set_app_metafield(app_installation_id, metafields_set)
  end

  def set_conditional_core_on()
    app_installation_id = get_app_installation_id
    metafields_set = [{
      namespace: "conditional",
      key: "core",
      ownerId: app_installation_id,
      type: "boolean",
      value: "true"
    }]
    set_app_metafield(app_installation_id, metafields_set)
  end

  def delete_app_metafield(id)
    client = ShopifyAPI::Clients::Graphql::Admin.new(session: ShopifyAPI::Context.active_session)

    query = <<~QUERY
      mutation metafieldDelete($input: MetafieldDeleteInput!) {
        metafieldDelete(input: $input) {
          deletedId
          userErrors {
            field
            message
          }
        }
      }
    QUERY
    variables = { input: { id: id } }

    response = client.query(query: query, variables: variables)
    errors = response.body.fetch('errors', [])
    if errors.length > 0
      logger.error("ERROR unable to delete app metafield #{id}: #{errors}")
      raise "Unable to delete metafield"
    end
  end

  def get_app_metafield(app_installation_id, namespace, key)
    client = ShopifyAPI::Clients::Graphql::Admin.new(session: ShopifyAPI::Context.active_session)

    query = <<~QUERY
      query conditionalCoreMetaField($appInstallationId: ID, $namespace: String!, $key: String!) {
        appInstallation(id: $appInstallationId) {
          metafield(namespace: $namespace, key: $key) {
            id
            value
          }
        }
      }
    QUERY
    variables = { appInstallationId: app_installation_id, namespace: namespace, key: key }

    response = client.query(query: query, variables: variables)
    metafield = response.body.fetch("data", {})
      .fetch("appInstallation", {})
      .fetch("metafield", {})

    return metafield
  end

  def get_app_metafield_value(app_installation_id, namespace, key)
    metafield = get_app_metafield(app_installation_id, namespace, key)
    if metafield.nil?
      return nil
    else
      return metafield.fetch("value", nil)
    end
  end

  def get_app_metafield_id(app_installation_id, namespace, key)
    metafield = get_app_metafield(app_installation_id, namespace, key)
    if metafield.nil?
      return nil
    else
      return metafield.fetch("id", nil)
    end
  end

  def get_conditional_core(app_installation_id)
    result = get_app_metafield_value(app_installation_id, "conditional", "core")
    return result == "true"
  end

  def api_version
    ShopifyApp.configuration.api_version
  end

  def recurring_charge
    with_shopify_session do
      self.recurring_charge_id ? ShopifyAPI::RecurringApplicationCharge.find(id: self.recurring_charge_id) : false
    end
  end

  def is_in_premium_access_cheat_list
    (ENV['PREMIUM_ACCESS_STORES'] || '').split(',').include?(self.shopify_domain)
  end

  def has_premium_access
    if self.is_in_premium_access_cheat_list
      return true
    else
      charge = self.recurring_charge
      return charge && charge.status == 'active'
    end
  end

  def update_store_theme!

    with_shopify_session do
      tags = ShopifyAPI::ScriptTag.all
      if tags.length == 0
        logger.debug "No script tags, skipping theme update."
        return
      end
    end

    logger.debug "Starting theme update."

    # check if we need to add code to output the current product's collections
    product_collection_theme_code_required = size_charts.published.to_a.any? do |chart|
      !chart.state_store['conditions'].blank?  #['collections'].blank? || !chart.state_store['conditions']['tags'].blank? || !chart.state_store['conditions']['vendors'].blank? || !chart.state_store['conditions']['myTypes'].blank? # matches nil & empty array
    end

    puts(product_collection_theme_code_required )
    # get the file to alter
    # published_theme = ShopifyAPI::Theme.find(:first, params: { role: 'main', fields: 'id, name, role' })
    published_theme = nil

    with_shopify_session do
      published_theme = ShopifyAPI::Theme.all.select { |theme| theme.role == 'main' }.first
    end

    ##  create a snippet to use as inline trigger
    start_comment = '<!--CCSizeChartLaunchLocationBefore-->'
    end_comment = '<!--CCSizeChartLaunchLocationAfter-->'

    with_shopify_session do
      new_asset = ShopifyAPI::Asset.new()
      new_asset.theme_id = published_theme.id
      new_asset.key = 'snippets/clean-size-chart-trigger.liquid'
      new_asset.value = "#{start_comment}\\0#{end_comment}"
      new_asset.save!
    end

    layout_file = nil
    with_shopify_session do
      layout_file = ShopifyAPI::Asset.all(theme_id: published_theme.id, asset: { "key" => "layout/theme.liquid"}).first
    end

    current_layout_liquid = layout_file.value

    if product_collection_theme_code_required
      code_to_add = [
        "{%- comment -%}Start of Clean Canvas Size Chart App code{%- endcomment -%}",
        "{% if product %}",
        "<script>ccPops=window.ccPops||{};ccPops.sizeChart=ccPops.sizeChart||{};ccPops.sizeChart.collections={{ product.collections | map: 'id' | json }};ccPops.sizeChart.tags={{product.tags|json}};ccPops.sizeChart.vendors={{product.vendor|json}};ccPops.sizeChart.myTypes={{product.type|json}};</script>",
        "{% endif %}",
        "{%- comment -%}End of Clean Canvas Size Chart App code{%- endcomment -%}"
      ].join('')

      # check if code exists in this format already
      if layout_file.value.include?(code_to_add)
        # exists! do nothing
      else
        # remove prior versions of it
        layout_file.value = remove_theme_code_from_liquid(layout_file.value)

        # add it
        layout_file.value = layout_file.value.gsub('</head>', code_to_add + "\n</head>")
        layout_file.save
      end
    else
      # remove the code, if it exists
      layout_file.value = remove_theme_code_from_liquid(layout_file.value)
      layout_file.save if current_layout_liquid != layout_file.value
    end

    # check if we need to add hooks around the product description
    product_description_theme_code_required = size_charts.published.to_a.any? do |chart|
      chart.state_store['trigger'] && chart.state_store['trigger']['placementSelected'] == 'description'
    end

    begin

    product_template = nil
    with_shopify_session do
      product_template = ShopifyAPI::Asset.all(theme_id: published_theme.id, asset: { "key" => "templates/product.liquid"}).first
    end


    # if !defined?(product_template)
    #  product_template = ShopifyAPI::Asset.find('sections/main-product.liquid', params: { theme_id: published_theme.id })
    # end

    assets_containing_product_description = get_included_assets_containing(product_template, published_theme, /\{\{-? ?product\.description ?-?\}\}/)

    start_comment = '<!--CCSizeChartLaunchLocationBefore-->'
    end_comment = '<!--CCSizeChartLaunchLocationAfter-->'
    both_comments = [start_comment, end_comment]
    assets_containing_product_description.each do |asset|
      if product_description_theme_code_required
        # if start comment does not exist, insert it
        asset_changed = false
        if !asset.value.include?(start_comment) || !asset.value.include?(end_comment)
          asset.value.gsub!(start_comment, '')
          asset.value.gsub!(end_comment, '')
          asset.value.gsub!(/\{\{-? ?product\.description ?-?\}\}/, "#{start_comment}\\0#{end_comment}")
          asset_changed = true
        end
        asset.save if asset_changed
      else
        # if comments exist, remove comments
        asset_changed = false
        both_comments.each do |comment|
          if asset.value.include?(comment)
            asset.value.gsub!(comment, '')
            asset_changed = true
          end
        end
        asset.save if asset_changed
      end
    end

      rescue

    # might as well cover our bases for themes 2.0
    puts("***ASSET ACQUIRED**")

    myasset = nil
    with_shopify_session do
      myasset = ShopifyAPI::Asset.all(theme_id: published_theme.id, asset: { "key" => "sections/main-product.liquid"}).first
    end
    puts(myasset)
    puts("***ASSET ACQUIRED**")

    start_comment = '<!--CCSizeChartLaunchLocationBefore-->'
    end_comment = '<!--CCSizeChartLaunchLocationAfter-->'
    both_comments = [start_comment, end_comment]
    if product_description_theme_code_required
      # if start comment does not exist, insert it
      asset_changed = false
      if !myasset.value.include?(start_comment) || !myasset.value.include?(end_comment)
        myasset.value.gsub!(start_comment, '')
        myasset.value.gsub!(end_comment, '')
        myasset.value.gsub!(/\{\{-? ?product\.description ?-?\}\}/, "#{start_comment}\\0#{end_comment}")
        asset_changed = true
      end
      myasset.save if asset_changed
    else
      # if comments exist, remove comments
      asset_changed = false
      both_comments.each do |comment|
        if myasset.value.include?(comment)
          myasset.value.gsub!(comment, '')
          asset_changed = true
        end
      end
      myasset.save if asset_changed
    end

    ensure
      #nothing to ensure here
      end
  end

  def get_included_assets_containing(asset, published_theme, term, assets = [])
    # add if asset matches term regex
    assets << asset if asset.value =~ term

    # do same with any assets included by this
    [
      [/{%-? ?section ['"]([^'"]+)['"] ?-?%}/, 'sections'],
      [/{%-? ?include ['"]([^'"]+)['"] ?-?%}/, 'snippets'],
      [/{%-? ?render ['"]([^'"]+)['"] ?-?%}/, 'snippets']
    ].each do |search_type|
      child_regex, asset_path_prefix = search_type
      match_data = child_regex.match(asset.value)
      match_data[1..-1].each do |m|
        child_asset = ShopifyAPI::Asset.find("#{asset_path_prefix}/#{m}.liquid", params: { theme_id: published_theme.id })
        get_included_assets_containing(child_asset, published_theme, term, assets)
      end if match_data
    end
    return assets
  end

  def update_store_script!
    return if Rails.env.test? # not testing this method yet

    logger.debug "Store update begun for #{ self.shopify_domain }"
    timer_all_start = Time.now

    self.with_shopify_session do
      rendered_size_charts = []
      has_premium_access_cached = self.has_premium_access

      app_installation_id = get_app_installation_id
      has_conditional_core = get_conditional_core(app_installation_id)
      logger.debug "Theme app embed available: #{ has_conditional_core }"

      if size_charts.published.exists?
        timer_render_all_charts_start = Time.now
        size_charts.published_in_display_priority_order.each do |size_chart|
          timer_render_chart_start = Time.now

          # render popup component using view
          if size_chart.is_render_dirty
            chart_html = ApplicationController.render(
              assigns: {
                state_store: size_chart.state_store,
                has_premium_access: has_premium_access_cached,
                shop_settings: self.settings
              },
              template: 'render/size_chart',
              layout: false
            )

            # strip unnecessary markup
            chart_html = CcHtmlProcessor.strip_whitespace(chart_html)
            chart_html = CcHtmlProcessor.strip_react_attributes(chart_html)
            chart_html = CcHtmlProcessor.convert_nohref_to_href(chart_html)
            size_chart.update(rendered_html: chart_html, is_render_dirty: false)
          else
            chart_html = size_chart.rendered_html
          end

          rendered_size_charts.push({
            id: size_chart.id,
            name: size_chart.name,
            countryCode: size_chart.state_store['settings']['countryCode'],
            conditions: size_chart.state_store['conditions'],
            trigger: {
                linkType: size_chart.state_store['trigger']['linkType'] ? size_chart.state_store['trigger']['linkType'] : nil,
                placementSelected: size_chart.state_store['trigger']['placementSelected'] ? size_chart.state_store['trigger']['placementSelected'] : nil,
                placementProductForm: size_chart.state_store['trigger']['placementProductForm'] ? size_chart.state_store['trigger']['placementProductForm'] : nil,
                placementProductDescription: size_chart.state_store['trigger']['placementProductDescription'] ? size_chart.state_store['trigger']['placementProductDescription'] : nil,
                placementCssSelector: size_chart.state_store['trigger']['placementCssSelector'] ? size_chart.state_store['trigger']['placementCssSelector'] : nil,
                placementOptionText: size_chart.state_store['trigger']['placementOptionText'] ? size_chart.state_store['trigger']['placementOptionText'] : nil,
                placementAlignment: size_chart.state_store['trigger']['placementAlignment'] ? size_chart.state_store['trigger']['placementAlignment'] : nil,
            CssSelector: size_chart.state_store['trigger']['CssSelector'] ? size_chart.state_store['trigger']['CssSelector'] : nil
            },
            html: chart_html
          })

          output_timing("Rendered chart #{ size_chart.name }", timer_render_chart_start)
        end
        output_timing('Rendered all charts', timer_render_all_charts_start)

        # fetch css
        timer_render_css = Time.now
        rendered_css = self.render_css
        output_timing('Generated CSS', timer_render_css)

        timer_generate_js = Time.now
        # fetch template script (force UTF8 read, required on Heroku's OS)
        script_template = File.open('public/cc-render-popup.js', 'r:UTF-8', &:read)
        script_digest = Digest::MD5.hexdigest(script_template)

        if script_digest == self.rendered_script_digest
          # use cached version if it exists
          script_template = self.rendered_script
        else
          # uglify before mergin in extra data, while file is smaller
          script_template = Uglifier.compile(script_template, harmony: true)
          self.update({
            rendered_script: script_template,
            rendered_script_digest: script_digest
          })
        end

        # combine
        script_template.gsub!('[[INJECTED_CSS]]', rendered_css.to_json);
        script_template.gsub!('[[INJECTED_POPUP_JS]]', rendered_size_charts.to_json);
        script_template.gsub!('[[APP_HOST]]', ENV['APP_HOST']);
        output_timing('Generated popup js', timer_generate_js)

        # store file
        timer_save_script = Time.now
        script_url = save_store_script(script_template)
        output_timing('Stored script', timer_save_script)

        # add cache-buster to url
        cache_key = Time.now.strftime('%Y%m%d%H%M%S')
        script_url << (script_url.include?('?') ? '&' : '?') << "v=#{cache_key}"

        # update store with API
        timer_update_tag = Time.now

        if has_conditional_core
          logger.debug "Theme app embed available; removing script tags."
          # make sure to remove any old script tags
          ShopifyAPI::ScriptTag.all.each { |t| t.delete }
          set_script_location_metafield(app_installation_id, script_url)
        else
          logger.debug "Theme app embed unavailable; continuing with script tags."
          tags = ShopifyAPI::ScriptTag.all
          if tags.length > 0
            # update existing tag
            tags[0].src = script_url
            tags[0].save

            # if more than one, delete the rest
            tags[1..-1].each { |t| t.destroy }
          else
            # No tag? Create one
            tag = ShopifyAPI::ScriptTag.new
            tag.src = script_url
            tag.event = 'onload'
            tag.cache = true
            tag.save!
          end
        end

        output_timing('Updated tag via API', timer_update_tag)
      else
        # no published size charts - remove any script tags
        ShopifyAPI::ScriptTag.all.each { |t| t.delete }

        if has_conditional_core
          script_location_metafield_id = get_app_metafield_id(app_installation_id, "script", "location")
          if !script_location_metafield_id.nil?
            logger.debug("Removing script location metafield")
            delete_app_metafield(script_location_metafield_id)
          end
        end
      end

      if !has_conditional_core
        logger.debug "Theme app embed unavailable; updating theme."
        # also update theme code
        timer_update_store_theme = Time.now
        update_store_theme!
        output_timing('update_store_theme!', timer_update_store_theme)
      else
        logger.debug "Theme app embed available; not updating theme."
      end
    end

    output_timing('Complete store update', timer_all_start)

  end


  protected

  def output_timing(what, start_time)
    logger.debug "Timing: #{ what } - #{ self.shopify_domain } - #{ (Time.now - start_time).in_milliseconds.to_i }ms"
  end

  def remove_theme_code_from_liquid(liquid)
    liquid.gsub(/{%- comment -%}Start of Clean Canvas Size Chart App code{%- endcomment -%}.*{%- comment -%}End of Clean Canvas Size Chart App code{%- endcomment -%}/, '')
  end

  def render_css
    # force UTF8 read, for Heroku's OS
    File.open('public/packs/custom_css/server_rendered.css', 'r:UTF-8', &:read)
  end

  # save script to storage and return url
  def save_store_script(content)
    if Rails.env.production? || ENV['AWS_ON_DEV_ENABLED'] == 'true'
      # use aws s3
      s3 = Aws::S3::Resource.new

      # create gzip file in string
      sio = StringIO.new
      gz = Zlib::GzipWriter.new(sio)
      gz.write(content)
      gz.close

      # init the object to upload
      s3_subdir = 'store-scripts'
      filename = Rails.env.development? ? "dev-cc-sizecharts-#{id}.js" : "cc-sizecharts-#{id}.js"
      obj = s3.bucket(ENV['AWS_BUCKET']).object("#{s3_subdir}/#{filename}")

      # Upload it
      obj.put({
        body: sio.string,
        acl: 'public-read',
        content_encoding: 'gzip',
        content_type: 'text/javascript; charset=UTF-8',
        cache_control: 'public, max-age=31557600' # 1 year cache
      })

      return "https://#{ENV['AWS_CLOUDFRONT_DOMAIN']}/#{s3_subdir}/#{filename}"
    else
      # local file
      asset_directory = 'assets/sizecharts_app'
      local_directory = "public/#{asset_directory}"
      filename = "store-#{id}.js"
      full_local_filepath = "#{local_directory}/#{filename}"
      FileUtils.mkdir_p(local_directory) # make dir
      begin
        File.delete(full_local_filepath) # delete prior file
      rescue
      end
      File.open(full_local_filepath, "w+") do |f| # write new file
        f.write(content)
      end
      return "https://#{ENV['APP_HOST']}/#{asset_directory}/#{filename}"
    end
  end


end
