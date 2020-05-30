var i2cBus = require("i2c-bus");
var Pca9685Driver = require("pca9685").Pca9685Driver;
var sleep = require('sleep');
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

const SERVO_MAX = 4000;
const SERVO_MIN = 400;
const SERVO_DELAY_M = 1;
const SERVO_INCREMENT = 100;

pwm = new Pca9685Driver(options, function(err) {
    if (err) {
        console.error("Error initializing PCA9685");
        process.exit(-1);
    }
    console.log("Initialization done");
    /*
    for (i = 0; i < SERVO_MAX; i+=SERVO_INCREMENT) {
        // Set the pulse length to 1500 microseconds for channel 2
        pwm.setPulseLength(0, SERVO_MIN+i, 0, function() { 
            sleep.msleep(SERVO_DELAY_M);
            if (err){
                console.log('Could not set servo');
            }
        });
    }
    for (i = SERVO_MAX; i > 0; i-=SERVO_INCREMENT) {
        // Set the pulse length to 1500 microseconds for channel 2
        pwm.setPulseLength(0, SERVO_MIN+i, 0, function() { 
            sleep.msleep(SERVO_DELAY_M);
            if (err){
                console.log('Could not set servo');
            }
        });
    }    
    */ 
    console.log("------")   
    console.log((SERVO_MIN+SERVO_MAX)/2)
    pwm.channelOn(4);
    pwm.channelOn(5);
    gpio_1.digitalWrite(1);
    gpio_2.digitalWrite(1);

    // Turn on channel 3 (100% power)
    pwm.setPulseLength(4, 200)
    pwm.setPulseLength(5, 1500)
pwm.setDutyCycle(4, 1.0)
    pwm.setDutyCycle(5,1.50)
     //    sleep.msleep(10000)
        pwm.channelOff(4);
        pwm.channelOff(5);
});