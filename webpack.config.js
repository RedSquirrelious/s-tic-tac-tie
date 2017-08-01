const path = require('path');
var webpack = require('webpack');
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: ['babel-polyfill', './public/js/app.js'],
  output: {
    path: path.resolve(__dirname, 'public/build'),
    filename: 'app.bundle.js'
  },
    module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'source-map',
  // devServer: {
  //   contentBase: './',
  //   historyApiFallback: true,
  //   hot: true,
  //   inline: true,
  //   port: 8081
  // },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    }),
    new DashboardPlugin()
  ],
  target: 'node'
};