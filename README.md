# Cylon.js For Skynet

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics, physical computing, and the Internet of Things (IoT).

This repository contains the Cylon adaptor for the Skynet ([http://skynet.im](http://skynet.im)) machine to machine instant messaging open source software.

Want to use Ruby on robots? Check out our sister project Artoo (http://artoo.io)

Want to use the Go programming language to power your robots? Check out our sister project Gobot (http://gobot.io).

[![Build Status](https://secure.travis-ci.org/hybridgroup/cylon-skynet.png?branch=master)](http://travis-ci.org/hybridgroup/cylon-skynet) [![Code Climate](https://codeclimate.com/github/hybridgroup/cylon-skynet/badges/gpa.svg)](https://codeclimate.com/github/hybridgroup/cylon-skynet) [![Test Coverage](https://codeclimate.com/github/hybridgroup/cylon-skynet/badges/coverage.svg)](https://codeclimate.com/github/hybridgroup/cylon-skynet)

For more information about Cylon, check out our repo at https://github.com/hybridgroup/cylon

## How to Install

Install the module with:

    $ npm install cylon cylon-skynet

## How to Use

```javascript
var Cylon = require("cylon");

Cylon.robot({
  connections: {
    arduino: { adaptor: "firmata", port: "/dev/tty.usbmodem1411" },
    skynet: { adaptor: "skynet", uuid: "SKYNET_UUID", token: "SKYNET_TOKEN" }
  },

  devices: {
    led: { driver: "led", pin: 13, connection: "arduino" }
  },

  work: function(my) {
    my.skynet.on("message", function(data) {
      console.log(data);

      if (data.payload.red === "on") {
        my.led.turnOn();
      } else if (data.payload.red === "off") {
        my.led.turnOff();
      }
    });
  }
}).start();
```

## How to Connect

First, you need to register a device on the Skynet network. You can do this with a curl command similar to this one:

    $ curl -X POST http://meshblu.octoblu.com/devices

This will return the new registration information for the device, most importantly the `uuid` and `token`:

```json
{"geo":{"range":[1344446976,1344447487],"country":"ES","region":"56","city":"Cornellá De Llobregat","ll":[41.35,2.0833],"metro":0},"ipAddress":"80.34.162.160","online":false,"timestamp":"2015-03-05T14:35:23.638Z","uuid":"db895340-c344-11e4-9f09-df7578d68eac","token":"d0a9f0d7e321657a38d25dd492492ffed0baf773"}
```

## Documentation

We're busy adding documentation to our web site at http://cylonjs.com/ please check there as we continue to work on Cylon.js

Thank you!

## Contributing

For our contribution guidelines, please go to [https://github.com/hybridgroup/cylon/blob/master/CONTRIBUTING.md
](https://github.com/hybridgroup/cylon/blob/master/CONTRIBUTING.md
).

## Release History

For the release history, please go to [https://github.com/hybridgroup/cylon-skynet/blob/master/RELEASES.md
](https://github.com/hybridgroup/cylon-skynet/blob/master/RELEASES.md
).

## License
Copyright (c) 2013-2015 The Hybrid Group. Licensed under the Apache 2.0 license.
