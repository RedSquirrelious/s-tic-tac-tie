var webpack = require('webpack');


module.exports = {
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    path: './',
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