/*
 * cylon-skynet
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var namespace = require('node-namespace');

require('cylon');
require('./adaptor');
require('./driver');

module.exports = {
  adaptor: function(opts) {
    return new Cylon.Adaptors.Skynet(opts);
  },

  driver: function(opts) {
    return new Cylon.Drivers.Skynet(opts);
  },

  register: function(robot) {
    Logger.info("Registering Skynet adaptor for " + robot.name);
    robot.registerAdaptor('cylon-skynet', 'skynet');

    Logger.info("Registering Skynet driver for " + robot.name);
    return robot.registerDriver('cylon-skynet', 'skynet');
  }
};
