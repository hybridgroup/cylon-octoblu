/*
 * cylon-octoblu adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2016 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Octoblu = require("meshblu"),
    Cylon = require("cylon");

var Adaptor = module.exports = function Adaptor(opts) {
  Adaptor.__super__.constructor.apply(this, arguments);
  opts = opts || {};

  this.uuid = opts.uuid;
  this.token = opts.token;
  this.host = opts.host || "http://meshblu.octoblu.com";
  this.portNumber = opts.portNumber || 80;

  var forceNewSet = opts.hasOwnProperty("forceNew");
  this.forceNew = forceNewSet ? opts.forceNew : true;

  this.events = [
    /**
     * Emitted when Octoblu has received a new message
     *
     * @event message
     * @value data
     */
    "message"
  ];
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.commands = [
  "message",
  "subscribe",
  "register",
  "unregister",
  "update",
  "whoami",
  "status"
];

/**
 * Connects to Octoblu
 *
 * @param {Function} callback to be triggered when connected
 * @return {void}
 */
Adaptor.prototype.connect = function(callback) {
  this.connector = Octoblu.createConnection({
    uuid: this.uuid,
    token: this.token,
    host: this.host,
    port: this.portNumber,
    forceNew: this.forceNew
  });

  this.connector.once("notReady", function(data) {
    Cylon.Logger.log("Failed to connect to Octoblu: '" + this.name + "'");
    Cylon.Logger.log("Check UUID and Token are correct and try again");
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
 * Disconnects from Octoblu
 *
 * @param {Function} callback to be triggered when disconnected
 * @return {void}
 */
Adaptor.prototype.disconnect = function(callback) {
  callback();
};

/**
 * Posts a message to Octoblu
 *
 * @param {Object} data to be posted
 * @return {void}
 * @publish
 */
Adaptor.prototype.message = function(data) {
  return this.connector.message(data);
};

/**
 * Subscribes to data from Octoblu
 *
 * @param {Object} opts what to subscribe to
 * @return {void}
 * @publish
 */
Adaptor.prototype.subscribe = function(opts) {
  return this.connector.subscribe(opts);
};

/**
 * Register a device on Octoblu
 *
 * @param {Object} opts device data
 * @return {void}
 * @publish
 */
Adaptor.prototype.register = function(opts) {
  return this.connector.register(opts);
};

/**
 * Unregister a device on Octoblu
 *
 * @param {Object} opts device data
 * @return {void}
 * @publish
 */
Adaptor.prototype.unregister = function(opts) {
  return this.connector.unregister(opts);
};

/**
 * Update a device on Octoblu
 *
 * @param {Object} data device data to update
 * @return {void}
 * @publish
 */
Adaptor.prototype.update = function(data) {
  return this.connector.update(data);
};

/**
 * Get device info for current device from Octoblu
 *
 * @param {Object} opts device data
 * @param {Function} callback to be triggered with device info
 * @return {void}
 * @publish
 */
Adaptor.prototype.whoami = function(opts, callback) {
  return this.connector.whoami(opts, callback);
};

/**
 * Get network status from Octoblu
 *
 * @param {Function} callback to be triggered with network info
 * @return {void}
 * @publish
 */
Adaptor.prototype.status = function(callback) {
  return this.connector.status(callback);
};
