"use strict";

var Adaptor = require("./lib/adaptor");

module.exports = {
  adaptors: ["octoblu"],

  adaptor: function(opts) {
    return new Adaptor(opts);
  }
};
