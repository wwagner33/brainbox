const {VideoCapture} =require( 'camera-capture');
const fs = require("fs");

/*
raspivid -t 0 -n -fps 20 -pf baseline -b 700000 -o - | ./ffmpeg -re -i - -c:v copy -bsf dump_extra -an -r 20 -f rtp rtp://0.0.0.0:8004?pkt_size=1300
*/


(async () => {
  try {
    const c = new VideoCapture({mime: 'image/png'})
    c.addFrameListener(imageData => {
      // frame by default is unencoded raw Image Data `{width: 480, height: 320, data: UIntArray}``
      // which is often what image processing / surfaces interfaces expect for fast processing.
      // Use `mime` option to receive it in other formats (see examples below)
      //surface.putImageData(0, 0, frame.width, frame.height, frame.data)
      fs.writeFileSync("test.png",imageData.data)
      fs.writeFileSync("test.txt", "data:image/png;base64,"+imageData.data.toString('base64'))
    })
// pause / resume frame emission (without tunning off the camera)
    setTimeout(() => c.pause(), 1000)
    setTimeout(() => c.resume(), 2000)
// shutdown everything, including, camera, browser, server:
    setTimeout(() => c.stop(), 3000)
    console.log('Capturing camera')
    await c.start() // promise will be resolved only when `stop`
    console.log('Stopping camera capture')

  } catch (e) {
    // Deal with the fact the chain failed
  }
})();
