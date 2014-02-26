(function() {
  'use strict';
  var driver;

  driver = source("driver");

  describe("Cylon.Drivers.Skynet", function() {
    var module;
    module = new Cylon.Drivers.Skynet({
      device: {
        connection: 'connect'
      }
    });
    return it("needs tests");
  });

}).call(this);
