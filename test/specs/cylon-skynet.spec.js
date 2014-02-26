"use strict";

var namespace = require('node-namespace'),
    skynet = source("cylon-skynet");

describe("Cylon.Skynet", function() {
  it("can register the adaptor and driver", function() {
    skynet.register.should.be.a('function');
  });

  it("can create adaptor", function() {
    skynet.adaptor.should.be.a('function');
    expect(skynet.adaptor()).to.be.a('object');
  });

  it("can create driver", function() {
    skynet.driver.should.be.a('function');
    expect(skynet.driver({ device: {} })).to.be.a('object');
  });
});
