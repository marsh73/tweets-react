var path = require('path');
var webpack = require('webpack')
var port = process.env.PORT || 8080;
var webpackPort = process.env.WEBPACK_PORT || 8090;

var config = {
  devServer: {
    historyApiFallback:true,
    contentBase: 'build'
  },
  port: port,
  webpackPort: webpackPort,
  devtool: 'sourcemap',
  entry: {
    app: ['webpack/hot/dev-server', './src/main.js'],
    vendors: ['react', 'redux']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '/app.js',
    publicPath: './build/'
  },
  node: {
    fs: "empty"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ],
  resolve : {
    extensions : ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.js|jsx$/, // A regexp to test the require path. accepts either js or jsx
      loader: 'babel-loader', // The module to load. "babel" is short for "babel-loader"
      exclude: /node_modules/
    },
    {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  }
};

module.exports = config;
