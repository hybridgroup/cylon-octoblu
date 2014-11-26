var cylon = require('cylon');

cylon.robot({
  connections:  {
    arduino: { adaptor: 'firmata', port: '/dev/ttyACM0', module: 'cylon-firmata' },
    skynet: {
      adaptor: 'skynet',
      uuid: "742401f1-87a4-11e3-834d-670dadc0ddbf",
      token: "xjq9h3yzhemf5hfrme8y08fh0sm50zfr",
      module: "cylon-skynet"
    }
  },

  devices: {
    led: { driver: 'led', pin: 13, connection: 'arduino' }
  }
})

.on('ready', function(robot) {
    console.log("connected...");
    robot.skynet.subscribe({
      uuid: "742401f1-87a4-11e3-834d-670dadc0ddbf",
      token: "xjq9h3yzhemf5hfrme8y08fh0sm50zfr",
    });

    robot.skynet.on('message', function(data) {
      console.log(data);
      if(data.payload.red === 'on') {
        robot.led.turnOn();
      }
      else if(data.payload.red === 'off') {
        robot.led.turnOff();
      }
    });
})

.start();
