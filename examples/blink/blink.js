"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    arduino: { adaptor: "firmata", port: "/dev/ttyACM0" },
    skynet: { adaptor: "skynet", uuid: "UUID", token: "TOKEN" }
  },

  devices: {
    led: { driver: "led", pin: 13, connection: "arduino" }
  },

  work: function(my) {
    my.skynet.subscribe({
      uuid: "DEVICE_UUID",
      token: "TOKEN"
    });

    my.skynet.on("message", function(data) {
      console.log("data: ", data);
      if(data.payload.red === "on") {
        my.led.turnOn();
      } else if(data.payload.red === "off") {
        my.led.turnOff();
      }
    });
  }
}).start();
