'use strict'

driver = source("driver")

describe "Cylon.Drivers.Skynet", ->
  module = new Cylon.Drivers.Skynet
    device: { connection: 'connect' }

  it "needs tests"
