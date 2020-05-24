const { Gpio } = require( 'onoff' );
const isPi = require('detect-rpi');

module.exports = {

  connect: function(socketio){
    if(!isPi()){
      return // silently
    }

    // =================================================================

    let pins = {
      gpio_1:  new Gpio( 1, 'out' ),
      gpio_2:  new Gpio( 2, 'out' ),
      gpio_3:  new Gpio( 3, 'out' ),
      gpio_4:  new Gpio( 4, 'out' ),
      gpio_5:  new Gpio( 5, 'out' ),
      gpio_6:  new Gpio( 6, 'out' ),
      gpio_7:  new Gpio( 7, 'out' ),
      gpio_8:  new Gpio( 8, 'out' ),

      gpio_9:   new Gpio(  9, 'in', 'both' ),
      gpio_10:  new Gpio( 10, 'in', 'both' ),
      gpio_11:  new Gpio( 11, 'in', 'both' ),
      gpio_12:  new Gpio( 12, 'in', 'both' ),
      gpio_13:  new Gpio( 13, 'in', 'both' ),
      gpio_14:  new Gpio( 14, 'in', 'both' ),
      gpio_15:  new Gpio( 15, 'in', 'both' ),
      gpio_16:  new Gpio( 16, 'in', 'both' )
    }

    // Browser => GPIO output pin
    //
    socketio.on('connection', socket => {
      socket.on('gpio:set',  msg => {
        let pin = pins[msg.pin]
        pin.writeSync(msg.value>1.2?1:0)
      })
      socket.on('gpio:pwm',  msg => {
        let pin = pins[msg.pin]
        // for servos the frequency is 50Hz and the duty cycle is between 2% and 12% which is mapped
        // within the servo to 0° and 180° depending on the servo type. (0° - 270° is possible as well)
        // map [0..5] => [2..12]
        let dutyCyle= 10/5*parseFloat(msg.value)+2
        pin.writeSync(dutyCycle)
      })
    })

    // GPIO input pin => Browser
    //
    pins.gpio_9.watch ( (err, val) => socketio.sockets.emit("gpio:change", {pin: "gpio_9",  value: val?5.0:0.0}));
    pins.gpio_10.watch( (err, val) => socketio.sockets.emit("gpio:change", {pin: "gpio_10", value: val?5.0:0.0}));
    pins.gpio_11.watch( (err, val) => socketio.sockets.emit("gpio:change", {pin: "gpio_11", value: val?5.0:0.0}));
    pins.gpio_12.watch( (err, val) => socketio.sockets.emit("gpio:change", {pin: "gpio_12", value: val?5.0:0.0}));
    pins.gpio_13.watch( (err, val) => socketio.sockets.emit("gpio:change", {pin: "gpio_13", value: val?5.0:0.0}));
    pins.gpio_14.watch( (err, val) => socketio.sockets.emit("gpio:change", {pin: "gpio_14", value: val?5.0:0.0}));
    pins.gpio_15.watch( (err, val) => socketio.sockets.emit("gpio:change", {pin: "gpio_15", value: val?5.0:0.0}));
    pins.gpio_16.watch( (err, val) => socketio.sockets.emit("gpio:change", {pin: "gpio_16", value: val?5.0:0.0}));

    return this;
  }

}
