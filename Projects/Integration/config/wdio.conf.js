const master = require("../../../wdio.conf")
const baseURL = require('../baseURLs');
require ('../../../config/index')

exports.config = Object.assign(master.config, {
  baseUrl: process.env.MICHONNE_ENV ? baseURL[process.env.MICHONNE_ENV]:'https://localhost.next.cnn.com:8080/',
  daltonHost: process.env.DALTON_URL,
  specs: ["./Projects/Integration/specs/**/*.test.js"],
  exclude: [],
  logLevel: 'error',
  suites: {
    smoke: [
      "./Projects/Integration/specs/**/*.test.js",
    ],
  },
  waitforTimeout: 60000,
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 90000,
  // Default request retries count
  connectionRetryCount: 3,
  reporters: ["spec"],
  before: function (capabilities, specs) {
    // const chai = require("chai");
    // global.expect = chai.expect;
  },
})
