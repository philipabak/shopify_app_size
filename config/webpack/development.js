process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const path = require("path");

const environment = require('./environment')
const server_rendered_css_config = require('./server_rendered_css')

const config = environment.toWebpackConfig();

config.output = {
  path: path.resolve('./public/packs'),
  publicPath: '/packs',
}

config.devServer = {
  port: 3035,
}

module.exports = [
  server_rendered_css_config,
  environment.toWebpackConfig()
]

