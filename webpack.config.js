const path = require('path')
const WebpackBar = require('webpackbar')

const mode = process.env.NODE_ENV || 'development'
const output = path.resolve(__dirname, './build')
const port = process.env.PORT || 9000

module.exports = {
  mode,
  entry: {
    client: path.resolve(__dirname, './src/client.js'),
    server: path.resolve(__dirname, './src/server.js')
  },
  output: {
    path: output,
    filename: '[name].js'
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  },
  plugins: [new WebpackBar()],
  devServer: {
    compress: true,
    port,
    open: true
  }
}
