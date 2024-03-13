require 'test_helper'

class CcHtmlProcessorTest < ActiveSupport::TestCase
  test "strip_whitespace" do
    input = %{
      <div class="test
                  class
                  for
                  this"></div>

      <div class="test    class   in-here
            ohyes"></div>
    }

    output = %{<div class="test class for this"></div>
<div class="test class in-here ohyes"></div>}

    assert_equal output, CcHtmlProcessor.strip_whitespace(input)
  end

  test "strip_react_attributes" do
    input = %{
      <div class="h1" data-react-attr="{}" data-react-attr-2="..."></div>
      <div data-react-attr="{}" data-react-attr-three-four="..."></div>
    }

    output = %{
      <div class="h1"></div>
      <div></div>
    }

    assert_equal output, CcHtmlProcessor.strip_react_attributes(input)
  end

  test "convert_nohref_to_href" do
    input = %{
      <a data-nohref="true">Link 1</a>
      <a data-nohref="true">Link 2</a>
    }

    output = %{
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
    }

    assert_equal output, CcHtmlProcessor.convert_nohref_to_href(input)
  end
end
