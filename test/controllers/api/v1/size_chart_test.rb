require 'test_helper'
require 'action_controller'
require 'action_controller/base'
require 'action_view/testing/resolvers'

class ArticlesControllerTest < ActionDispatch::IntegrationTest
  setup do
    shop = shops(:regular_shop)
    OmniAuth.config.test_mode = true
    OmniAuth.config.add_mock(
      :shopify,
      provider: 'shopify',
      uid: shop.shopify_domain,
      credentials: { token: shop.shopify_token }
    )
    Rails.application.env_config["omniauth.auth"] = OmniAuth.config.mock_auth[:shopify]
    get "/auth/shopify"
    follow_redirect!
    ShopifyAPI::Shop.stubs(:current).returns(shop)
  end

  test "should get all size charts at index" do
    get api_v1_size_chart_index_url
    assert_response :success
    parsed_results = JSON.parse(@response.body)['results']
    good_result = parsed_results.detect{ |r| r['name'] == size_charts(:good_size_chart).name }
    assert good_result
    assert good_result['state_store']
    assert_not good_result['state_store']['conditions']
    assert_equal "1", good_result['state_store']['settings']['position']
    assert_equal "#333", good_result['state_store']['settings']['overlayColor']
    assert_equal "#fff", good_result['state_store']['settings']['backgroundColor']
  end

  test "should fetch size charts ordered by created_date desc by default" do
    get api_v1_size_chart_index_url
    parsed_results = JSON.parse(@response.body)['results']

    (parsed_results.size - 1).times do |iter|
      assert parsed_results[iter]['created_at'] > parsed_results[iter + 1]['created_at']
    end
  end

  test "should include state_store when fetching size chart" do
    get api_v1_size_chart_url(size_charts(:good_size_chart))
    assert_response :success
    assert @response.body.include? 'state_store'
  end

  test "should return size chart with exactly the specified fields" do
    get api_v1_size_chart_url(size_charts('Size chart API attribute test'))
    assert_response :success
    parsed = JSON.parse(@response.body)
    assert_equal parsed['name'], 'Size chart for API test'
    assert_equal parsed['status'], 'draft'
    assert_equal parsed['state_store'], { 'foo' => 'bar', 'nested' => { 'far' => 'boo' } }
    assert_equal parsed['created_at'], Time.parse('1985-01-21 12:34').strftime('%FT%T%:z')
    assert_equal parsed['updated_at'], Time.parse('1985-01-22 01:23').strftime('%FT%T%:z')
  end

  test "should fail to show if size chart is not found" do
    get api_v1_size_chart_url(id: -1)
    assert_response :not_found
  end

  test "should create size chart" do
    post api_v1_size_chart_index_url(
      name: 'Size chart',
      status: :draft,
      state_store: { foo: 'bar' }
    )
    assert_response :success
    assert_respond_to SizeChart, :create
  end

  test "should create size chart and return id" do
    new_state_store = { 'funky_data' => 'taylor swift rulez', 'nested_data' => { 'katy_perry' => 'is better' } }
    post api_v1_size_chart_index_url(
      name: 'New size chart',
      status: 'draft',
      state_store: new_state_store
    )
    assert_response :success
    assert_respond_to SizeChart, :create
    assert_equal JSON.parse(@response.body)['id'], SizeChart.reorder(id: :asc).last.id
    assert_equal SizeChart.find(JSON.parse(@response.body)['id']).state_store, new_state_store
  end

  test "should return error message if size chart create called with invalid data" do
    new_attrs = size_charts(:good_size_chart).attributes
    new_attrs['name'] = nil
    post api_v1_size_chart_index_url(new_attrs)
    assert_response :bad_request
  end

  test "should update size chart name" do
    size_chart = size_charts(:good_size_chart)
    new_name = "NEW NAME"
    assert_not_equal new_name, size_chart.name
    put api_v1_size_chart_url(size_charts(:good_size_chart)), params: { name: new_name }
    assert_response :success
    assert_respond_to size_charts(:good_size_chart), :update
  end

  test "should update size chart state_store" do
    size_chart = size_charts(:good_size_chart)
    new_state_store = { 'funky_data' => 'taylor swift rulez', 'nested_data' => { 'katy_perry' => 'is better' } }
    assert_not_equal new_state_store, size_chart.state_store
    put api_v1_size_chart_url(size_charts(:good_size_chart)), params: { state_store: new_state_store }
    assert_response :success
    assert_respond_to size_charts(:good_size_chart), :update
    assert_equal size_chart.reload.state_store, new_state_store
  end

  test "should fail to update if size chart is missing" do
    put api_v1_size_chart_url(id: -1), params: { name: 'Dummy' }
    assert_response :not_found
  end

  test "should destroy size chart" do
    delete api_v1_size_chart_url(size_charts(:good_size_chart))
    assert_response :success
    assert_respond_to size_charts(:good_size_chart), :destroy
  end

  test "should increment impression count" do
    size_chart = size_charts(:good_size_chart)
    expected_value = size_chart.link_impressions + 1
    post reports_increment_api_v1_size_chart_url(
      id: size_chart.id,
      activity: 'link_impression'
    )
    assert_response :success
    assert_equal size_chart.reload.link_impressions, expected_value
  end

  test "should increment click count" do
    size_chart = size_charts(:good_size_chart)
    expected_value = size_chart.link_clicks + 1
    post reports_increment_api_v1_size_chart_url(
      id: size_chart.id,
      activity: 'link_click'
    )
    assert_response :success
    assert_equal size_chart.reload.link_clicks, expected_value
  end

  test "should fail with invalid activity" do
    post reports_increment_api_v1_size_chart_url(
      id: size_charts(:good_size_chart).id,
      activity: 'frostpunk'
    )
    assert_response :bad_request
  end
end
