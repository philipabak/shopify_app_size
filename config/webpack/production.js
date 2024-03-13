process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const environment = require('./environment')
const server_rendered_css_config = require('./server_rendered_css')

module.exports = [
  server_rendered_css_config,
  environment.toWebpackConfig()
]
