"use strict";

source('adaptor');

describe('Cylon.Adaptors.Skynet', function() {
  var skynet = new Cylon.Adaptors.Skynet;

  it("exposes a 'connect' method to connect to Skynet", function() {
    expect(skynet.connect).to.be.a('function');
  });

	it("needs more tests");
});
