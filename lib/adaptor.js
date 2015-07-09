/*
 * cylon-skynet adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Skynet = require("meshblu"),
    Cylon = require("cylon");

var Adaptor = module.exports = function Adaptor(opts) {
  Adaptor.__super__.constructor.apply(this, arguments);
  opts = opts || {};

  this.uuid = opts.uuid;
  this.token = opts.token;
  this.host = opts.host || "http://skynet.im";
  this.portNumber = opts.portNumber || 80;

  var forceNewSet = opts.hasOwnProperty("forceNew");
  this.forceNew = forceNewSet ? opts.forceNew : true;

  this.events = [
    /**
     * Emitted when Skynet has received a new message
     *
     * @event message
     * @value data
     */
    "message"
  ];
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.commands = ["message", "subscribe"];

/**
 * Connects to Skynet
 *
 * @param {Function} callback to be triggered when connected
 * @return {void}
 */
Adaptor.prototype.connect = function(callback) {
  this.connector = Skynet.createConnection({
    uuid: this.uuid,
    token: this.token,
    host: this.host,
    port: this.portNumber,
    forceNew: this.forceNew
  });

  this.connector.once("notReady", function(data) {
    Cylon.Logger.error("Failed to connect to Skynet: '" + this.name + "'");
    Cylon.Logger.error("Check UUID and Token are correct and try again");
    this.emit("notReady", data);
    callback(null);
  }.bind(this));

  this.connector.once("ready", function(data) {
    this.connector.on("message", function(msg) {
      this.emit("message", msg);
    }.bind(this));

    this.emit("ready", data);

    callback(null);
  }.bind(this));
};

/**
 * Disconnects from Skynet
 *
 * @param {Function} callback to be triggered when disconnected
 * @return {void}
 */
Adaptor.prototype.disconnect = function(callback) {
  callback();
};

/**
 * Posts a message to Skynet
 *
 * @param {Object} data to be posted
 * @return {void}
 * @publish
 */
Adaptor.prototype.message = function(data) {
  return this.connector.message(data);
};

/**
 * Subscribes to data from Skynet
 *
 * @param {Object} data what to subscribe to
 * @return {void}
 * @publish
 */
Adaptor.prototype.subscribe = function(data) {
  return this.connector.subscribe(data);
};
