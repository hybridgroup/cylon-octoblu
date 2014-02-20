###
 * cylon-skynet adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 Tthe Hybrd Group
 * Licensed under the Apache 2.0 license.
###

"use strict"

require './cylon-skynet'
require './driver'

SkynetLib = require('skynet')

namespace = require 'node-namespace'

namespace 'Cylon.Adaptors', ->
  class @Skynet extends Cylon.Adaptor
    constructor: (opts = {}) ->
      super
      extraParams = opts.extraParams or {}
      @uuid = extraParams.uuid
      @token = extraParams.token
      @host = extraParams.host or "http://skynet.im"
      @portNumber = extraParams.portNumber or 80

    connect: (callback) ->
      @connector = SkynetLib.createConnection
        "uuid": @uuid,
        "token": @token,
        "protocol": "mqtt",
        "host": @host,
        "port": @portNumber
      
      @connector.on 'ready', =>
        Logger.info "Connecting to adaptor '#{@name}'..."
        (callback)(null)
        @connection.emit 'connect'

      @defineAdaptorEvent eventName: 'message'
