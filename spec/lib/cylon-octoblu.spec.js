"use strict";

var octoblu = lib("../");

var Adaptor = lib("adaptor"),
    Driver = lib("driver");

describe("cylon-octoblu", function() {
  describe("#adaptors", function() {
    it("is an array of supplied adaptors", function() {
      expect(octoblu.adaptors).to.be.eql(["octoblu"]);
    });
  });

  describe("#drivers", function() {
    it("is an array of supplied drivers", function() {
      expect(octoblu.drivers).to.be.eql(["octoblu"]);
    });
  });

  describe("#adaptor", function() {
    it("returns a new instance of the Adaptor class", function() {
      expect(octoblu.adaptor()).to.be.an.instanceOf(Adaptor);
    });
  });

  describe("#driver", function() {
    it("returns a new instance of the Driver class", function() {
      expect(octoblu.driver({ adaptor: {} })).to.be.an.instanceOf(Driver);
    });
  });
});
