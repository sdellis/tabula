var webpack = require('webpack');

module.exports = function(config) {
  config.set({
    plugins: [
      require('karma-webpack'),
      require('karma-tap'),
      require('karma-chrome-launcher'),
      require('karma-phantomjs-launcher')
    ],

    basePath: '',
    frameworks: [ 'tap' ],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'src/models/presentation/test/*.js'
    ],

    preprocessors: {
      'src/models/presentation/test/*.js': [ 'webpack' ]
    },

    webpack: {
      node : {
        fs: 'empty'
      }
    },

    webpackMiddleware: {
      noInfo: true
    },

    reporters: [ 'dots' ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
};
