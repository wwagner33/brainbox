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
    //if(!isPi()){
    //  return // silently
    //}

    // =================================================================

    let pins = {
      gpio_1:  new Gpio( 1, {mode: Gpio.OUTPUT} ),
      gpio_2:  new Gpio( 2, {mode: Gpio.OUTPUT} ),
      gpio_3:  new Gpio( 3, {mode: Gpio.OUTPUT} ),
      gpio_4:  new Gpio( 4, {mode: Gpio.OUTPUT} ),
      gpio_5:  new Gpio( 5, {mode: Gpio.OUTPUT} ),
      gpio_6:  new Gpio( 6, {mode: Gpio.OUTPUT} ),
      gpio_7:  new Gpio( 7, {mode: Gpio.OUTPUT} ),
      gpio_8:  new Gpio( 8, {mode: Gpio.OUTPUT} ),

      gpio_9:   new Gpio(  9, { mode: Gpio.INPUT, pullUpDown: Gpio.PUD_DOWN, edge: Gpio.EITHER_EDGE} ),
      gpio_10:  new Gpio( 10, { mode: Gpio.INPUT, pullUpDown: Gpio.PUD_DOWN, edge: Gpio.EITHER_EDGE} ),
      gpio_11:  new Gpio( 11, { mode: Gpio.INPUT, pullUpDown: Gpio.PUD_DOWN, edge: Gpio.EITHER_EDGE} ),
      gpio_12:  new Gpio( 12, { mode: Gpio.INPUT, pullUpDown: Gpio.PUD_DOWN, edge: Gpio.EITHER_EDGE} ),
      gpio_13:  new Gpio( 13, { mode: Gpio.INPUT, pullUpDown: Gpio.PUD_DOWN, edge: Gpio.EITHER_EDGE} ),
      gpio_14:  new Gpio( 14, { mode: Gpio.INPUT, pullUpDown: Gpio.PUD_DOWN, edge: Gpio.EITHER_EDGE} ),
      gpio_15:  new Gpio( 15, { mode: Gpio.INPUT, pullUpDown: Gpio.PUD_DOWN, edge: Gpio.EITHER_EDGE} ),
      gpio_16:  new Gpio( 16, { mode: Gpio.INPUT, pullUpDown: Gpio.PUD_DOWN, edge: Gpio.EITHER_EDGE} )
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
    })

    // Forward GPIO interrupt => Browser (via WebSocket)
    // (not available in the MOCK mode)
    if(pins.gpio_9.on) {
      pins.gpio_9.on("interrupt",  (val) => socketio.sockets.emit("gpio:change", {pin: "gpio_9",  value: val?5.0:0.0}));
      pins.gpio_10.on("interrupt", (val) => socketio.sockets.emit("gpio:change", {pin: "gpio_10", value: val?5.0:0.0}));
      pins.gpio_11.on("interrupt", (val) => socketio.sockets.emit("gpio:change", {pin: "gpio_11", value: val?5.0:0.0}));
      pins.gpio_12.on("interrupt", (val) => socketio.sockets.emit("gpio:change", {pin: "gpio_12", value: val?5.0:0.0}));
      pins.gpio_13.on("interrupt", (val) => socketio.sockets.emit("gpio:change", {pin: "gpio_13", value: val?5.0:0.0}));
      pins.gpio_14.on("interrupt", (val) => socketio.sockets.emit("gpio:change", {pin: "gpio_14", value: val?5.0:0.0}));
      pins.gpio_15.on("interrupt", (val) => socketio.sockets.emit("gpio:change", {pin: "gpio_15", value: val?5.0:0.0}));
      pins.gpio_16.on("interrupt", (val) => socketio.sockets.emit("gpio:change", {pin: "gpio_16", value: val?5.0:0.0}));
    }

    return this;
  }

}
