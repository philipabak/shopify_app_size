# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
# Rails.application.config.assets.version = '1.0'
# Hack for Shopify & integrity attribute
Rails.application.config.assets.version = ''

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Precompile custom manifest file, if required
# Rails.application.config.assets.precompile += %w(server_rendered.css)