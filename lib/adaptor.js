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
  Adaptor.__super__.constructor.apply(this, arguments);
  opts = opts || {};

  this.uuid = opts.uuid;
  this.token = opts.token;
  this.host = opts.host || "http://skynet.im";
  this.portNumber = opts.portNumber || 80;

  var forceNewSet = opts.hasOwnProperty('forceNew');
  this.forceNew = forceNewSet ? opts.forceNew : true;
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
    this.emit('notReady', data);
    callback(null);
  }.bind(this));

  this.connector.once('ready', function(data) {
    this.connector.on('message', function(data){
      this.emit('message', data);
    }.bind(this));

    this.emit('ready', data);

    callback(null);
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
