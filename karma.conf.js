var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};
webpackConfig.devtool = 'inline-source-map';
webpackConfig.plugins = [];

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    files: [
      'tests.webpack.js',
    ],
    reporters: ['coverage','progress'],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    coverageReporter: {
      reporters: [
        {type: 'html', dir: 'coverage/'}
      ]
    },
    webpack: webpackConfig,
    colors: true,
    node: {
      fs: "empty"
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },
    singleRun:false
  });
};
