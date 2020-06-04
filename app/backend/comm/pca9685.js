const isPi = require('detect-rpi')
const Pca9685Driver = require("pca9685").Pca9685Driver


let pwm = null

module.exports = {

  connect: function(socketio){
    if(!isPi()){
      console.log("Running on a non RaspberryPi. PCA9685 is in emulation mode only available.")
      pwm = {
        channelOn: (channel)=> console.log("ChannelOn", channel),
        channelOff: (channel)=> console.log("ChannelOff", channel),
        setDutyCycle: (channel, dutyCycle)=> console.log("setDutyCycle", channel, dutyCycle)
      }
    }
    else{
      const i2cBus = require("i2c-bus")
      let options = {
        i2c: i2cBus.openSync(1),
        address: 0x40,
        frequency: 60,
        debug: true
      }

      pwm = new Pca9685Driver(options, function(err) {
        if (err) {
          console.error("Error initializing PCA9685", err)
        }
      })
    }

    // Browser => GPIO output pin
    //
    socketio.on('connection', client => {
      client.on('pca9685:pwm', msg => {
        let channel = msg.channel
        // for servos the frequency is 50Hz and the duty cycle is between 500..2500 which is mapped
        // within the servo to 0° and 180° depending on the servo type. (0° - 270° is possible as well)
        // map [0..5] => [0..1]
        let dutyCycle = (parseInt((1.0 / 5.0 * parseFloat(msg.value))*1000))/1000
        pwm.setDutyCycle(channel, dutyCycle)
      })
      client.on('pca9685:set', msg => {
        let channel = msg.channel
        //    0               => off
        // everything else    => on
        if (msg.value) {
          pwm.channelOn(channel)
        } else {
          pwm.channelOff(channel)
        }
      })
    })
  }
}

