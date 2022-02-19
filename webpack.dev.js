const path = require('path')
const WebpackBar = require('webpackbar')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const template = require('./template')

const mode = process.env.NODE_ENV || 'development'
const output = path.resolve(__dirname, './build')
const port = process.env.PORT || 9000

module.exports = {
  mode,
  entry: {
    client: path.resolve(__dirname, './src/client.js')
  },
  output: {
    path: output,
    filename: 'bundle.js'
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  },
  plugins: [
    new WebpackBar(),
    new HtmlWebpackPlugin({
      templateContent: template({
        scripts: '<script src="./client.js"></script>'
      })
    })
  ],
  devServer: {
    port,
    open: true
  }
}
