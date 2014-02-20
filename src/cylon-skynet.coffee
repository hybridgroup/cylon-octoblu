###
 * cylon-skynet
 * http://cylonjs.com
 *
 * Copyright (c) 2013 Your Name Here
 * Your License Here
###

'use strict'

namespace = require 'node-namespace'

require 'cylon'
require './adaptor'
require './driver'

module.exports =
  adaptor: (args...) ->
    # Provide a function that's an instance of your adaptor here. For example,
    # the Sphero adaptor creates a new instance of the Sphero adaptor class:
    #
    # new Cylon.Adaptors.Sphero(args...)
    new Cylon.Adaptors.Skynet(args...)

  driver: (args...) ->
    # Provide a function that's an instance of your driver here. For example,
    # the Sphero adaptor creates a new instance of the Sphero driver class:
    #
    # new Cylon.Drivers.Sphero(args...)
    new Cylon.Drivers.Skynet(args...)

  register: (robot) ->
    # Bootstrap your adaptor here. For example, with a Sphero, you would call
    # the registerAdaptor and registerDriver functions as follows:
    #
    robot.registerAdaptor 'cylon-skynet', 'skynet'
    robot.registerDriver 'cylon-skynet', 'skynet'
