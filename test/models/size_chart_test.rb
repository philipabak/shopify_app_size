require 'test_helper'

class SizeChartTest < ActiveSupport::TestCase
  test "should not save size chart without name" do
    size_chart = size_charts(:good_size_chart)
    size_chart.name = nil
    assert_not size_chart.save
  end

  test "should not save size chart without status" do
    size_chart = size_charts(:good_size_chart)
    size_chart.status = nil
    assert_not size_chart.save
  end

  test "should not save size chart without state" do
    size_chart = size_charts(:good_size_chart)
    size_chart.state_store = nil
    assert_not size_chart.save
  end

  test "should not save size chart without shop" do
    size_chart = size_charts(:good_size_chart)
    size_chart.shop = nil
    assert_not size_chart.save
  end

  test "self.published_in_display_priority_order should order things correct" do
    SizeChart.create!(name: 'ORDERTEST0', shop: shops(:regular_shop), status: :published, state_store: { conditions: { collections: [1], products: [] } })
    SizeChart.create!(name: 'ORDERTEST1', shop: shops(:regular_shop), status: :published, state_store: { conditions: { collections: [1], products: [] } })
    SizeChart.create!(name: 'ORDERTEST2', shop: shops(:regular_shop), status: :published, state_store: { conditions: { collections: [], products: [1] } })
    SizeChart.create!(name: 'ORDERTEST3', shop: shops(:regular_shop), status: :published, state_store: { conditions: { collections: [], products: [1] } })
    SizeChart.create!(name: 'ORDERTEST4', shop: shops(:regular_shop), status: :published, state_store: { conditions: { collections: [], products: [] } })
    SizeChart.create!(name: 'ORDERTEST5', shop: shops(:regular_shop), status: :published, state_store: { conditions: { collections: [], products: [] } })
    SizeChart.create!(name: 'ORDERTEST6', shop: shops(:regular_shop), status: :published, state_store: { conditions: { collections: [1], products: [1] } })
    SizeChart.create!(name: 'ORDERTEST7', shop: shops(:regular_shop), status: :published, state_store: { conditions: { collections: [1], products: [1] } })
    SizeChart.create!(name: 'ORDERTEST8', shop: shops(:regular_shop), status: :draft, state_store: { conditions: { collections: [1], products: [] } })

    assert_equal(
      [
        3, 2, 7, 6, 1, 0, 5, 4
      ].map{ |n| "ORDERTEST#{n}" },
      SizeChart.where('name LIKE "ORDERTEST%"').published_in_display_priority_order.map{ |c| c.name }
    )
  end
end
