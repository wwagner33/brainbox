var i2cBus = require("i2c-bus");
var Pca9685Driver = require("pca9685").Pca9685Driver;
Gpio = require('pigpio').Gpio

var options = {
    i2c: i2cBus.openSync(1),
    address: 0x40,
    frequency: 60,
    debug: true
};

gpio_1= new Gpio( 17, {mode: Gpio.OUTPUT} );
gpio_2= new Gpio( 27, {mode: Gpio.OUTPUT} );

gpio_1.digitalWrite(1);
gpio_2.digitalWrite(1);


pwm = new Pca9685Driver(options, function(err) {
    if (err) {
        console.error("Error initializing PCA9685");
        process.exit(-1);
    }
    pwm.channelOn(4);
    pwm.channelOn(5);
    gpio_1.digitalWrite(1);
    gpio_2.digitalWrite(1);

    // Turn on channel 3 (100% power)
    pwm.setPulseLength(4, 200)
    pwm.setPulseLength(5, 1500)
    pwm.setDutyCycle(4, 1.0)
    pwm.setDutyCycle(5,1.50)
  //  sleep.msleep(10000)
    pwm.channelOff(4);
    pwm.channelOff(5);
});
