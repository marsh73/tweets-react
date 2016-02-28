var path = require('path');
var webpack = require('webpack')

var config = {
  devtool: 'cheap-module-eval-source-map',
  entry: ['webpack/hot/dev-server', './src/main.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '/bundle.js',
    publicPath: './build/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve : {
    extensions : ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
      loader: 'babel-loader', // The module to load. "babel" is short for "babel-loader"
      query: {
        plugins: ['transform-runtime'],
        presets: ['es2015', 'stage-0', 'react']
      },
      exclude: /node_modules/,
      include: __dirname
    }]
  }
};

module.exports = config;
