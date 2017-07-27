const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
});

var DashboardPlugin = require('webpack-dashboard/plugin');


module.exports = {
  entry: './index.jsx',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\js$/,
        exclude: '/node-modules',
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\jsx$/,
        exclude: '/node-modules',
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  },
  plugins: [new DashboardPlugin(), HtmlWebpackPluginConfig]
}