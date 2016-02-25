"use strict";

var octoblu = lib("../");

var Adaptor = lib("adaptor");

describe("cylon-octoblu", function() {
  describe("#adaptors", function() {
    it("is an array of supplied adaptors", function() {
      expect(octoblu.adaptors).to.be.eql(["octoblu"]);
    });
  });

  describe("#adaptor", function() {
    it("returns a new instance of the Adaptor class", function() {
      expect(octoblu.adaptor()).to.be.an.instanceOf(Adaptor);
    });
  });
});
