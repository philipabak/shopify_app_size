class CcHtmlProcessor
  def self.strip_whitespace(html)
    html.gsub(/\R /, ' ') # remove newline from new-line plus space
        .gsub(/[ ]+/m, ' ') # when more than one space, cut down to one space
        .gsub(/[ ]*$/, '') # remove trailing whitespace
        .gsub(/^[ ]*/, '') # remove leading whitespace
  end

  def self.strip_react_attributes(html)
    html.gsub(/ data-react-[a-z0-9_\-]+="[^"]+"/, '') # remove: data-react-any-name="..."
        .gsub(/ data-hydrate="[^"]+"/, '') # remove data-hydrate="..."
  end

  def self.convert_nohref_to_href(html)
    html.gsub(' data-nohref="true"', ' href="javascript:void(0)"') # convert this attribute to a hash-link for UI
  end
end
