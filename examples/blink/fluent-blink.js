"use strict";

var Cylon = require("cylon");

Cylon
  .robot()
  .connection("arduino", { adaptor: "firmata", port: "/dev/tty.usbmodem1411" })
  .connection("skynet", {
    adaptor: "skynet",
    uuid: "SKYNET_UUID",
    token: "SKYNET_TOKEN"
  })
  .device("led", { driver: "led", pin: 13, connection: "arduino" })
  .on("ready", function(my) {
    my.skynet.on("message", function(data) {
      console.log(data);

      if (data.payload.red === "on") {
        my.led.turnOn();
      } else if (data.payload.red === "off") {
        my.led.turnOff();
      }
    });
  })
  .start();
