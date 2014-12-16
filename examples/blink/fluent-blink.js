var Cylon = require('cylon');

Cylon
  .robot()
  .connection("arduino", { adaptor: 'firmata', port: '/dev/ttyACM0', module: 'cylon-firmata' })
  .connection("skynet", {
    adaptor: 'skynet',
    uuid: "742401f1-87a4-11e3-834d-670dadc0ddbf",
    token: "xjq9h3yzhemf5hfrme8y08fh0sm50zfr",
    module: "cylon-skynet"
  })
  .device("led", { driver: 'led', pin: 13, connection: 'arduino' })
  .on('ready', function(bot) {
    console.log("connected...");

    bot.skynet.subscribe({
      uuid: "742401f1-87a4-11e3-834d-670dadc0ddbf",
      token: "xjq9h3yzhemf5hfrme8y08fh0sm50zfr",
    });

    bot.skynet.on('message', function(data) {
      console.log(data);

      if (data.payload.red === 'on') {
        bot.led.turnOn();
      } else if (data.payload.red === 'off') {
        bot.led.turnOff();
      }
    });
  });

Cylon.start();
