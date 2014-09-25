/*
 * cylon-skynet adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Skynet = require('skynet'),
    Cylon = require('cylon');

var Adaptor = module.exports = function Adaptor(opts) {
  if (opts == null) {
    opts = {};
  }
  Adaptor.__super__.constructor.apply(this, arguments);

  var extraParams = opts.extraParams || {};
  this.uuid = extraParams.uuid;
  this.token = extraParams.token;
  this.host = extraParams.host || "http://skynet.im";
  this.portNumber = extraParams.portNumber || 80;

  var forceNewSet = extraParams.hasOwnProperty('forceNew');
  this.forceNew = forceNewSet ? extraParams.forceNew : true;
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.commands = ['message', 'subscribe'];

Adaptor.prototype.connect = function(callback) {
  this.connector = Skynet.createConnection({
    uuid: this.uuid,
    token: this.token,
    host: this.host,
    port: this.portNumber,
    forceNew: this.forceNew
  });

  this.connector.once('notReady', function(data) {
    Cylon.Logger.error("Connecting to Skynet adaptor: '" + this.name + "' FAILED...");
    Cylon.Logger.error("Check UUID and Token are correct and try again");
    callback(null);
    this.connection.emit('notReady', data);
  }.bind(this));

  this.connector.once('ready', function(data) {
    callback(null);
    this.connection.emit('ready', data);
  }.bind(this));

  this.connector.on('message', function(data){
    Cylon.Logger.info('Message Received');
    this.connection.emit('message', data);
  }.bind(this));
};

Adaptor.prototype.disconnect = function(callback) {
  callback();
};

Adaptor.prototype.message = function(data) {
  return this.connector.message(data);
};

Adaptor.prototype.subscribe = function(data) {
  return this.connector.subscribe(data);
};
