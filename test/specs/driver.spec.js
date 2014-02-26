"use strict";

source('driver');

describe('Cylon.Drivers.Skynet', function() {
  var skynet = new Cylon.Drivers.Skynet({ device: {} });

  it("exposes a 'commands' method exposing all available commands");
});
