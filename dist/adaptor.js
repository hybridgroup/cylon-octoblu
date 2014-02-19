/*
 * cylon-skynet adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 Tthe Hybrd Group
 * Licensed under the Apache 2.0 license.
*/


(function() {
  "use strict";
  var SkynetLib, namespace,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  require('./cylon-skynet');

  require('./driver');

  SkynetLib = require('skynet');

  namespace = require('node-namespace');

  namespace('Cylon.Adaptors', function() {
    return this.Skynet = (function(_super) {
      __extends(Skynet, _super);

      function Skynet(opts) {
        var extraParams;
        if (opts == null) {
          opts = {};
        }
        Skynet.__super__.constructor.apply(this, arguments);
        extraParams = opts.extraParams || {};
        this.uuid = extraParams.uuid;
        this.token = extraParams.token;
      }

      Skynet.prototype.connect = function(callback) {
        this.connector = SkynetLib.createConnection({
          "uuid": this.uuid,
          "token": this.token,
          "protocol": "mqtt"
        });
        this.connector.on('ready', function() {
          return Skynet.__super__.connect.apply(this, arguments);
        });
        return this.defineAdaptorEvent({
          eventName: 'message'
        });
      };

      return Skynet;

    })(Cylon.Adaptor);
  });

}).call(this);
