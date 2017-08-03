var webpack = require('webpack');
var path = require('path');

var buildPath = path.resolve(__dirname, 'public', 'build');

module.exports = {
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    path: buildPath,
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
  }
};