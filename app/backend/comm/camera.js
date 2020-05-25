var NodeWebcam = require( "node-webcam" );

//Default options

var opts = {

  //Picture related
  width: 640,
  height: 480,


  // Number of frames to capture
  // More the frames, longer it takes to capture
  // Use higher framerate for quality. Ex: 60
  frames: 1,

  //Delay in seconds to take shot
  //if the platform supports miliseconds
  //use a float (0.1)
  //Currently only on windows
  delay: 0,

  //Save shots in memory
  saveShots: false,

  // [jpeg, png] support varies
  // Webcam.OutputTypes
  output: "png",

  //Which camera to use
  //Use Webcam.list() for results
  //false for default device
  device: false,

  // [location, buffer, base64]
  // Webcam.CallbackReturnTypes
  callbackReturn: "base64",

  //Logging
  verbose: false
};


//Creates webcam instance

var camera = NodeWebcam.create( opts );

var running = false

module.exports = {

  connect: async function (socketio) {

    function capture(){
      try {
        console.log("...")
        camera.capture("", function( err, data ) {
          socketio.sockets.emit("camera:capture", {data: data});
          if (running) {
            setTimeout(capture, 10)
          }
        });
      }
      catch(e){
        // ignore silently
      }
    }
    socketio.on('connection', socket => {
      socket.on('camera:start', () => {
        running = true
        capture()
      })
      socket.on('camera:stop', msg => {
        running = false
      })
    })


    return this;
  }
}

