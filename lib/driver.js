/*
 * cylon-skynet driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var Cylon = require('cylon');

var Driver = module.exports = function Driver(opts) {
  Driver.__super__.constructor.apply(this, arguments);
};

subclass(Driver, Cylon.Driver);

// Public: Starts the driver
//
// Returns null.
Driver.prototype.start = function(callback) {
  return Driver.__super__.start.apply(this, arguments);
};
