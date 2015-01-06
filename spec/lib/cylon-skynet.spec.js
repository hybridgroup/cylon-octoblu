// jshint expr:true
"use strict";

var skynet = source("cylon-skynet");

var Adaptor = source("adaptor"),
    Driver = source("driver");

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
