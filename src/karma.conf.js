// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-sonarqube-reporter'), // This one
    ],
    coverageReporter: {
      type: 'lcov',
      dir: require('path').join(__dirname, 'coverage/house-billing'),
      subdir: '.',
      fixWebpackSourcePaths: true
    },
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    sonarqubeReporter: {
      basePath: ".", // test files folder
      filePattern: '**/*spec.ts', // test files glob pattern
      encoding: 'utf-8', // test files encoding
      outputFolder: 'reports', // report destination
      legacyMode: false, // report for Sonarqube < 6.2 (disabled)
      reportName: function (metadata) {
        // report name callback, but accepts also a
        // string (file name) to generate a single file
        /**
         * Report metadata array:
         * - metadata[0] = browser name
         * - metadata[1] = browser version
         * - metadata[2] = plataform name
         * - metadata[3] = plataform version
         */
        return 'sonarqube_report.xml';
      },
    },
    // coverageIstanbulReporter: {
    //   dir: require('path').join(__dirname, '../coverage/argon-dashboard-pro-angular'),
    //   reports: ['html', 'lcovonly', 'text-summary'],
    //   fixWebpackSourcePaths: true
    // },

    reporters: ['coverage', 'sonarqube', 'progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'ChromeHeadless'],
    singleRun: false,
    restartOnFileChange: true
  });
};
