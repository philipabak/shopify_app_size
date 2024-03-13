# frozen_string_literal: true
require 'httparty'
class Api::V1::ReportController < ApplicationController
  #before_action :fetch_shop, except: [:report_increment]
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  include HTTParty

  skip_before_action :verify_authenticity_token, only: [:report_increment]
  #skip_before_action :login_again_if_different_user_or_shop, only: [:report_increment]
  #skip_around_action :shopify_session, only: [:report_increment]

  def_param_group :size_chart do
    param :name, String, "Name"
    param :status, Enumerator, "The published status of the size chart"
    param :state_store, Object, "Contains all data for displaying this size chart, in JSON"
  end

  def_param_group :handle do
    param :handle, String, "Handle"
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
