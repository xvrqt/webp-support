const isDocker = require('is-docker')();

console.log(isDocker);

module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: ['test/**/*.js'],
    reporters: ['progress'],
    webpack: {},
    webpackMiddleware: {
      stats: 'errors-only'
    },
    preprocessors: {
        'test/**/*.js': ['webpack']
    },
    customLaunchers: {
      ChromeCustom: {
        base: 'ChromeHeadless',
        flags: isDocker ? ['--no-sandbox'] : []
      }
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeCustom'],
    autoWatch: false,
    concurrency: Infinity,
    plugins:[
      require('karma-webpack'),
      ('karma-chai'),
      ('karma-mocha'),
      ('karma-chrome-launcher')
    ]
  })
}