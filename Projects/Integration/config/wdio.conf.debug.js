const master = require('./wdio.conf');

exports.config = Object.assign(master.config, {
    runner: 'local',
    maxInstances: 10,
    capabilities: [
    //   {
    //       browserName: 'chrome',
    //       'goog:chromeOptions': {
    //           args: ['--disable-gpu', '--disable-infobars'],
    //       },
    //   },
      {
        browserName: 'firefox',
  
    },
    ],
    logLevel: 'silent',
    coloredLogs: true,
    deprecationWarnings: false,
    bail: 0,
    waitforTimeout: 30000,
    services: ['chromedriver', 'firefox-profile','intercept'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 120 * 1000,
    },
    before() {},
});
