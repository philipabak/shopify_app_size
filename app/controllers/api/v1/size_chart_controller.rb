# frozen_string_literal: true
require 'httparty'
require "./lib/mailchimp_api.rb"

class Api::V1::SizeChartController < Api::V1::BaseController
  before_action :fetch_shop, except: [:report_increment]
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  include HTTParty

  skip_before_action :verify_authenticity_token, only: [:report_increment]
  skip_before_action :login_again_if_different_user_or_shop, only: [:report_increment]
  #skip_around_action :shopify_session, only: [:report_increment]

  def_param_group :size_chart do
    param :name, String, "Name"
    param :status, Enumerator, "The published status of the size chart"
    param :state_store, Object, "Contains all data for displaying this size chart, in JSON"
  end

  def_param_group :handle do
    param :handle, String, "Handle"
  end

  api! 'A list of all of your size charts'
  example JSON.pretty_generate({
    total: 1,
    results: [
      SizeChart.api_dummy.as_json
    ]
  })
  def index

    size_charts = @shop.size_charts
    size_charts = size_charts.where(status: params[:status]) if params[:status]
    total = size_charts.count

    tags = :fetch_tags
    puts "tags = "
    puts tags
    size_charts = size_charts.limit(params[:limit]) if params[:limit]
    size_charts = size_charts.offset(params[:offset]) if params[:offset]

    render json: {
      total: total,
      tags: tags,
      results: size_charts.map do |chart|
        chart.attrs_for_api_list
      end
    }
  end

  api! 'get a productID by handle'
  example JSON.pretty_generate(SizeChart.api_dummy.as_json)
  def pidbyhandle
    product = ShopifyAPI::Product.find(:all, :params=>{ :handle => params.require(:id)})
    #product ="[{'pid':7890}]"
    render json: product
  end

  api! 'get shop Info'
  example JSON.pretty_generate(SizeChart.api_dummy.as_json)
  def shopinfo

    shop = ShopifyAPI::Shop.all
    render json: shop
  end

  api! 'Fetch a specific size chart'
  example JSON.pretty_generate(SizeChart.api_dummy.as_json)
  def show
    size_chart = @shop.size_charts.find(params.require(:id))
    render json: size_chart.attrs_for_api_get
  end

  api! 'Create a new size chart'
  param_group :size_chart
  example JSON.pretty_generate({ success: true })
  def create
    new_size_chart = @shop.size_charts.create(params.permit(
      :name,
      :status,
      state_store: {}
    ))
    if new_size_chart.persisted?
      @shop.delay.update_store_script!
      if @shop.size_charts.count == 1
        begin
        @shop.with_shopify_session do
          shop_email = ShopifyAPI::Shop.all(fields: "email")[0].email

          MailchimpApi.update_tag_for_subscriber(
            subscriber_email: shop_email,
            tag_name: 'First Chart',
            tag_status: 'active'
         )
        end
        rescue => ex
          logger.error(ex)
          logger.error("MAILCHIMP: Failed to set tag First Chart to active for shop: #{@shop.shopify_domain}, email: #{shop_email}")
        end
      end

      render json: {
        success: true,
        id: new_size_chart.id
      }
    else
      render_json_fail('Failed to create. ' + new_size_chart.errors.full_messages.join('. '))
    end
  end

  api! 'Create a new size chart as copy'
  param_group :size_chart
  example JSON.pretty_generate(SizeChart.api_dummy.as_json)
  def duplicate
    size_chart = @shop.size_charts.find(params.require(:id))

    puts(size_chart)

    #new_size_chart = @shop.size_charts.create(params.permit(
    # :name,
    # :status,
    # state_store: {}
    #))

    new_size_chart = @shop.size_charts.create(
      name:size_chart.name + " (copy)",
      status:size_chart.status,
      state_store: size_chart.state_store

    )

    if new_size_chart.persisted?
      @shop.delay.update_store_script!
      render json: {
        success: true,
        id: new_size_chart.id
      }
    else
      render_json_fail('Failed to create. ' + new_size_chart.errors.full_messages.join('. '))
    end
  end

  api! 'Update an existing size chart'
  param_group :size_chart
  example JSON.pretty_generate({ success: true })
  def update
    size_chart = @shop.size_charts.find(params.require(:id))
    if size_chart.update(params.permit(
        :name,
        :status,
        state_store: {}
      ))
      @shop.delay.update_store_script!
      render_json_success
    else
      render_json_fail('Failed to update. ' + size_chart.errors.full_messages.join('. '))
    end
  end

  api! 'Destroy a size chart'
  example JSON.pretty_generate({ success: true })
  def destroy
    size_chart = @shop.size_charts.find(params.require(:id))
    if size_chart.destroy
      @shop.delay.update_store_script!
      render_json_success
    else
      render_json_fail('Failed to destroy. ' + size_chart.errors.full_messages.join('. '))
    end
  end

  api! 'Increment stat on a size chart'
  example %q{
    POST:
    {
      activity: 'link_impression'
    }

    POST:
    {
      activity: 'link_click'
    }

    RESPONSE:
    {
      success: true
    }
  }
  def report_increment
    if params[:activity] == 'link_impression'
      begin
        ActiveRecord::Base.connection.execute(
          ActiveRecord::Base.send(
            :sanitize_sql_array,
            [
              "UPDATE size_charts SET link_impressions = 1 + (SELECT link_impressions FROM size_charts WHERE id = ?) WHERE id = ?",
              params.require(:id).to_i,
              params.require(:id).to_i
            ]
          )
        )
        render_json_success
      rescue => exception
        render_json_fail('Failed to update link_impressions. ' + exception.to_s)
        logger.error('Failed to update link_impressions. ' + exception.to_s)
      end
    elsif params[:activity] == 'link_click'
      begin
        ActiveRecord::Base.connection.execute(
          ActiveRecord::Base.send(
            :sanitize_sql_array,
            [
              "UPDATE size_charts SET link_clicks = 1 + (SELECT link_clicks FROM size_charts WHERE id = ?) WHERE id = ?",
              params.require(:id).to_i,
              params.require(:id).to_i
            ]
          )
        )
        render_json_success
      rescue => exception
        render_json_fail('Failed to update link_clicks. ' + exception.to_s)
        logger.error('Failed to update link_clicks. ' + exception.to_s)
      end
    else
      render_json_fail("Invalid activity: #{params[:activity]}")
    end
  end
end
