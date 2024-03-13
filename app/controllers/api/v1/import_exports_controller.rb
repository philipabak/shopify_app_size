class Api::V1::ImportExportsController < Api::V1::BaseController
  before_action :fetch_shop
  rescue_from ActiveRecord::RecordNotFound, with: :id_mismatch
  rescue_from ActiveModel::UnknownAttributeError, with: :unknown_attribute
  rescue_from ArgumentError, with: :invalid_setting

  def show
    respond_to do |format|
      format.csv { 
        send_data @shop.size_charts.to_csv, 
        type: 'text/csv',
        disposition: "attachment; filename=size_charts.csv"       
      }
    end 
  end

  def create
    @shop.size_charts.bulk_csv_update(import_export_params)
    
    render_json_success
  end

  private

    def id_mismatch
      render_json_success({ 
        title: "ID Mismatch", 
        description: "One or more of the ID's specified do not match a valid size chart id. Do not modify the CSV ID column."
      })
    end

    def unknown_attribute
      render_json_success({
        title: "Unknown Header", 
        description: "One or more of the column headings is incorrect. Do not modify headings or add columns"
      })
    end

    def invalid_setting
      render_json_success({
        title: "Invalid Setting", 
        description: "One or more of the settings provided is invalid."
      })
    end
    
    def import_export_params
      params.require(:csv)
    end
end