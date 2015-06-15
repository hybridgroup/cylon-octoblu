"use strict";

var skynet = lib("cylon-skynet");

var Adaptor = lib("adaptor"),
    Driver = lib("driver");

describe("cylon-skynet", function() {
  describe("#adaptors", function() {
    it("is an array of supplied adaptors", function() {
      expect(skynet.adaptors).to.be.eql(["skynet"]);
    });
  });

  describe("#drivers", function() {
    it("is an array of supplied drivers", function() {
      expect(skynet.drivers).to.be.eql(["skynet"]);
    });
  });

  describe("#adaptor", function() {
    it("returns a new instance of the Adaptor class", function() {
      expect(skynet.adaptor()).to.be.an.instanceOf(Adaptor);
    });
  });

  describe("#driver", function() {
    it("returns a new instance of the Driver class", function() {
      expect(skynet.driver({ adaptor: {} })).to.be.an.instanceOf(Driver);
    });
  });
});
