"use strict";

var Cylon = require('cylon');

var Driver = source('driver');

describe('Cylon.Drivers.Skynet', function() {
  var driver = new Driver({ device: { connection: {} } });

  it("subclasses Cylon.Driver", function() {
    expect(driver).to.be.an.instanceOf(Cylon.Driver);
    expect(driver).to.be.an.instanceOf(Driver);
  });
});
