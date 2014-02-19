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

    connect: (callback) ->
      @connector = SkynetLib.createConnection
        "uuid": @uuid,
        "token": @token,
        "protocol": "mqtt"
      
      @connector.on 'ready', ->
        super

      @defineAdaptorEvent eventName: 'message'
