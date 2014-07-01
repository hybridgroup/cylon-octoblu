"use strict";

var Cylon = require('cylon'),
    Skynet = require('skynet'),
    EventEmitter = require('events').EventEmitter;

var Adaptor = source('adaptor');

describe('Cylon.Adaptors.Skynet', function() {
  var adaptor;

  beforeEach(function() {
    adaptor = new Adaptor();
  });

  it("subclasses Cylon.Adaptor", function() {
    expect(adaptor).to.be.an.instanceOf(Cylon.Adaptor);
    expect(adaptor).to.be.an.instanceOf(Adaptor);
  });

  describe("#constructor", function() {
    var custom;

    beforeEach(function() {
      custom = new Adaptor({
        extraParams: {
          uuid: 'uuid',
          token: 'token',
          host: 'host',
          portNumber: 3000,
          forceNew: false
        }
      });
    });

    it("sets @uuid to the provided value", function() {
      expect(custom.uuid).to.be.eql('uuid');
    });

    it("sets @token to the provided value", function() {
      expect(custom.token).to.be.eql('token');
    });

    it("sets @host to the provided value", function() {
      expect(custom.host).to.be.eql('host');
    });

    it("defaults @host to skynet.im", function() {
      expect(adaptor.host).to.be.eql('http://skynet.im');
    });

    it("sets @portNumber to the provided value", function() {
      expect(custom.portNumber).to.be.eql(3000);
    });

    it("defaults @portNumber to 80", function() {
      expect(adaptor.portNumber).to.be.eql(80);
    });

    it("sets @forceNew to the provided value", function() {
      expect(custom.forceNew).to.be.eql(false);
    });

    it("defaults @forceNew to 80", function() {
      expect(adaptor.forceNew).to.be.eql(true);
    });
  });

  describe("#commands", function() {
    it("is an array of Skynet commands", function() {
      var commands = adaptor.commands;
      expect(commands).to.be.a('array');

      commands.forEach(function(command) {
        expect(command).to.be.a('string');
      });
    });
  });

  describe("#connect", function() {
    var connector, callback;

    beforeEach(function() {
      adaptor = new Adaptor({
        extraParams: {
          uuid: 'uuid',
          token: 'token',
          host: 'host',
          portNumber: 3000,
          forceNew: false
        }
      });

      adaptor.connection = { emit: spy() };

      connector = new EventEmitter();
      callback = spy();

      stub(Skynet, 'createConnection').returns(connector);
      adaptor.connect(callback);
    });

    afterEach(function() {
      Skynet.createConnection.restore();
    });

    it("creates a Skynet connection", function() {
      expect(Skynet.createConnection).to.be.calledWith({
        uuid: 'uuid',
        token: 'token',
        host: 'host',
        port: 3000,
        forceNew: false
      });
    });

    it("attaches a #notReady listener", function() {
      expect(connector.listeners('notReady').length).to.be.eql(1);
    });

    it("attaches a #ready listener", function() {
      expect(connector.listeners('ready').length).to.be.eql(1);
    });

    it("attaches a #message listener", function() {
      expect(connector.listeners('message').length).to.be.eql(1);
    });

    describe("triggering the 'notReady' listener", function() {
      beforeEach(function() {
        connector.emit('notReady', 'data');
      });

      it("emits the 'notReady' event", function() {
        expect(adaptor.connection.emit).to.be.calledWith('notReady', 'data');
      });

      it("triggers the callback", function() {
        expect(callback).to.be.called;
      });

      it("removes the notReady listener", function() {
        expect(connector.listeners('notReady').length).to.be.eql(0);
      });
    });

    describe("triggering the 'ready' listener", function() {
      beforeEach(function() {
        connector.emit('ready', 'data');
      });

      it("emits the 'ready' event", function() {
        expect(adaptor.connection.emit).to.be.calledWith('ready', 'data');
      });

      it("triggers the callback", function() {
        expect(callback).to.be.called;
      });

      it("removes the ready listener", function() {
        expect(connector.listeners('ready').length).to.be.eql(0);
      });
    });

    describe("triggering the 'message' listener", function() {
      beforeEach(function() {
        connector.emit('message', 'data');
      });

      it("emits the 'message' event", function() {
        expect(adaptor.connection.emit).to.be.calledWith('message', 'data');
      });
    });
  });

  describe("#message", function() {
    it("passes the provided data to the connector's #message method", function() {
      adaptor.connector = { message: spy() };
      adaptor.message("data");
      expect(adaptor.connector.message).to.be.calledWith("data");
    });
  });

  describe("#subscribe", function() {
    it("passes the provided data to the connector's #subscribe method", function() {
      adaptor.connector = { subscribe: spy() };
      adaptor.subscribe("data");
      expect(adaptor.connector.subscribe).to.be.calledWith("data");
    });
  });
});
