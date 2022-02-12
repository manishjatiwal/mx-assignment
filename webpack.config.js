const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')

const mode = process.env.NODE_ENV || 'development'
const entry = path.resolve(__dirname, './src/index.js')
const output = path.resolve(__dirname, './build')
const port = process.env.NODE_ENV || 9000

module.exports = {
  mode,
  entry,
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
      filename: 'client.html',
      template: path.resolve(__dirname, './public/index.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'server.html',
      template: path.resolve(__dirname, './public/index.html'),
      inject: false
    })
  ],
  devServer: {
    compress: true,
    port,
    open: true
  }
}
