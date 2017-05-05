// index.js
// ------------------------------------------------------------------
//
// main entry point for apigee-sample-module
//
// last saved: <2017-May-05 13:21:14>

var sprintf = require('sprintf-js').sprintf;

module.exports = {
  hello : function (name) {
    return sprintf('Hello, %s', name);
  }
};
