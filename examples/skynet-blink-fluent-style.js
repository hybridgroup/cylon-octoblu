var cylon = require('cylon');

cylon.robot({
  connections: [
    { name: 'arduino', adaptor: 'firmata', port: '/dev/ttyACM0' },
    { name: 'skynet', adaptor: 'skynet', uuid: "742401f1-87a4-11e3-834d-670dadc0ddbf", token: "xjq9h3yzhemf5hfrme8y08fh0sm50zfr" }
  ],

  device: { name: 'led', driver: 'led', pin: 13, connection: 'arduino' },
})

.on('ready', function(robot) {
    console.log("connected...");
    robot.skynet.on('message', function(data) {
      console.log(data);
      if(data.message.red === 'on') {
        robot.led.turnOn();
      }
      else if(data.message.red === 'off') {
        robot.led.turnOff();
      }
    });
})

.start();
