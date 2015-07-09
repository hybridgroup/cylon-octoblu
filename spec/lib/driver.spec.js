"use strict";

var Cylon = require("cylon");

var Driver = lib("driver");

describe("Cylon.Drivers.Skynet", function() {
  var driver = new Driver({ adaptor: {} });

  it("subclasses Cylon.Driver", function() {
    expect(driver).to.be.an.instanceOf(Cylon.Driver);
    expect(driver).to.be.an.instanceOf(Driver);
  });
});
