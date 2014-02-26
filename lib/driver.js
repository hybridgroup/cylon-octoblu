/*
 * cylon-skynet driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var namespace = require('node-namespace');

require('./cylon-skynet');

namespace("Cylon.Drivers", function() {
  this.Skynet = (function(klass) {
    subclass(Skynet, klass);

    function Skynet(opts) {
      Skynet.__super__.constructor.apply(this, arguments);
    }

    // Public: Starts the driver
    //
    // Returns null.
    Skynet.prototype.start = function(callback) {
      return Skynet.__super__.start.apply(this, arguments);
    };

    return Skynet;

  })(Cylon.Driver);
});

