process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  name: 'serverRenderedCSSConfig',
  mode: process.env.NODE_ENV,
  entry: path.resolve('./app/javascript/components/popup_builder/scss/server_rendered.scss'),
  output: {
    filename: 'server_rendered.js',
    path: path.resolve('./public/packs/custom_css'),
    publicPath: '/packs/custom_css',
    pathinfo: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'server_rendered.css'
    })
  ],
  module: {
    rules: [
      {
        test: path.resolve('./app/javascript/components/popup_builder/scss/server_rendered.scss'),
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
}
