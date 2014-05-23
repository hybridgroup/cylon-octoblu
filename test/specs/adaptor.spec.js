"use strict";

var Adaptor = source('adaptor');

describe('Cylon.Adaptors.Skynet', function() {
  var skynet = new Adaptor();

  it("exposes a 'connect' method to connect to Skynet", function() {
    expect(skynet.connect).to.be.a('function');
  });

  it("needs more tests");
});
