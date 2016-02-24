/*
 * cylon-octoblu driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2016 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require("cylon");

var Driver = module.exports = function Driver() {
  Driver.__super__.constructor.apply(this, arguments);
};

Cylon.Utils.subclass(Driver, Cylon.Driver);

/**
 * Starts the driver
 *
 * @param {Function} callback to be triggered when started
 * @return {void}
 */
Driver.prototype.start = function(callback) {
  callback();
};

/**
 * Stops the driver
 *
 * @param {Function} callback to be triggered when halted
 * @return {void}
 */
Driver.prototype.halt = function(callback) {
  callback();
};
