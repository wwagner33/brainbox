const isPi = require('detect-rpi')

let Gpio = null

if(isPi()) {
  Gpio = require('pigpio').Gpio
}
else {
  Gpio = require('pigpio-mock').Gpio
}

module.exports = {

  connect: function(socketio){
    if(!isPi()){
      console.log("Running on a non RaspberryPi. GPIO is in emulation mode only available.")
    }

    // =================================================================

    let pins = {
      gpio_5:  new Gpio( 5,  {mode: Gpio.OUTPUT} ),
      gpio_6:  new Gpio( 6,  {mode: Gpio.OUTPUT} ),
      gpio_7:  new Gpio( 7,  {mode: Gpio.OUTPUT} ),
      gpio_8:  new Gpio( 8,  {mode: Gpio.OUTPUT} ),
      gpio_9:  new Gpio( 9,  {mode: Gpio.OUTPUT} ),
      gpio_10: new Gpio( 10, {mode: Gpio.OUTPUT} ),
      gpio_11: new Gpio( 11, {mode: Gpio.OUTPUT} ),
      gpio_12: new Gpio( 12, {mode: Gpio.OUTPUT} ),
      gpio_13: new Gpio( 13, {mode: Gpio.OUTPUT} ),
      gpio_16: new Gpio( 16, {mode: Gpio.OUTPUT} ),
      gpio_17: new Gpio( 17, {mode: Gpio.OUTPUT} ),
      gpio_18: new Gpio( 18, {mode: Gpio.OUTPUT} ),
      gpio_19: new Gpio( 19, {mode: Gpio.OUTPUT} ),
      gpio_20: new Gpio( 20, {mode: Gpio.OUTPUT} ),
      gpio_21: new Gpio( 21, {mode: Gpio.OUTPUT} ),
      gpio_22: new Gpio( 22, {mode: Gpio.OUTPUT} ),
      gpio_23: new Gpio( 23, {mode: Gpio.OUTPUT} ),
      gpio_24: new Gpio( 24, {mode: Gpio.OUTPUT} ),
      gpio_25: new Gpio( 25, {mode: Gpio.OUTPUT} ),
      gpio_26: new Gpio( 26, {mode: Gpio.OUTPUT} ),
      gpio_27: new Gpio( 27, {mode: Gpio.OUTPUT} ),

    }

    // Browser => GPIO output pin
    //
    socketio.on('connection', socket => {

      socket.on('gpio:set',  msg => {
        let pin = pins[msg.pin]
        pin.digitalWrite  (msg.value>1.2?1:0)
      })

      socket.on('gpio:pwm',  msg => {
        let pin = pins[msg.pin]
        // for servos the frequency is 50Hz and the duty cycle is between 500..2500 which is mapped
        // within the servo to 0° and 180° depending on the servo type. (0° - 270° is possible as well)
        // map [0..5] => [500..2500]
        let dutyCycle= (2000/5*parseFloat(msg.value)+500)|0
        pin.servoWrite(dutyCycle)
      })

      socket.on('gpio:mode',  msg => {
        let pin = pins[msg.pin]
        let mode = msg.mode
        if(pin){
          if(mode === "INPUT"){
            // Forward GPIO interrupt => Browser (via WebSocket)
            // (not available in the MOCK mode)
            if(pins.gpio_9.on) {
              pin.removeAllListeners("interrupt")
              pin.mode(Gpio.INPUT)
              pin.pullUpDown(Gpio.PUD_DOWN)
              pin.enableInterrupt(Gpio.EITHER_EDGE)
              pin.on("interrupt",  (val) => socketio.sockets.emit("gpio:change", {pin: msg.pin,  value: val?5.0:0.0}));
            }
          }
          else{
            if(pins.gpio_9.off) {
              pin.removeAllListeners("interrupt")
              pin.mode(Gpio.OUTPUT)
            }
          }
        }
        else{
          console.log("unknown GPIO pin '"+msg.pin+"' to set the INPUT/OUTPUT mode. Ignored")
        }
      })
    })

    return this;
  }

}
