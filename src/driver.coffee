###
 * cylon-skynet driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 Your Name Here
 * Licensed under the Apache 2.0 license.
###

'use strict'

require './cylon-skynet'
require './adaptor'

namespace = require 'node-namespace'

namespace "Cylon.Drivers", ->
  class @Skynet extends Cylon.Driver
    start: (callback) ->
      super
