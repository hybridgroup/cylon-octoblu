###
 * cylon-skynet adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 Your Name Here
 * Licensed under the Apache 2.0 license.
###

"use strict"

namespace = require 'node-namespace'

require './cylon-skynet'
require './driver'

namespace 'Cylon.Adaptors', ->
  class @Skynet extends Cylon.Adaptor
    constructor: (opts = {}) ->
      super

    connect: (callback) ->
      super
