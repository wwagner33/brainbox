const Gpio = require('pigpio').Gpio;

const motor = new Gpio(7, {mode: Gpio.OUTPUT});

let pulseWidth = 1000;
let increment = 10;

setInterval(() => {
  motor.servoWrite(pulseWidth);

  pulseWidth += increment;
  if (pulseWidth >= 2500) {
    increment = -10;
  } else if (pulseWidth <= 500) {
    increment = 10;
  }
}, 5);
