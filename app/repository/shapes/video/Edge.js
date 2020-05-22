// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var video_Edge = CircuitFigure.extend({

   NAME: "video_Edge",
   VERSION: "2.0.119_589",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:80,height:80},attr), setter, getter);
     var port;
     // input_port1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -0.9640000000001692, y: 49.886999999999944 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port1");
     port.setMaxFanOut(20);
     // output_port1
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 100.32506249999983, y: 49.886999999999944 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_port1");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 80;
      this.originalHeight= 80;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L80,0 L80,80 L0,80");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,3Q0,0 3, 0L77,0Q80,0 80, 3L80,77Q80,80 77, 80L3,80Q0,80 0, 77L0,3');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Edge');
       shape.attr({"x":23.228799999999865,"y":66.37877759999992,"text-anchor":"start","text":"Edge","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Circle
       shape = this.canvas.paper.path('M32.63878406783169 39.46429576295304L32.01261272331885 40.87710770827289L31.629134099395742 42.38285615840232L31.5 43.93578970863655L31.629134099395742 45.48872325886896L32.01261272331885 46.99447170900112L32.63878406783169 48.40728365432369L33.48862223348897 49.68423151878687L34.5363053176643 50.786515887693895L35.75 51.68064440829494L37.09282878173144 52.33944943792994L38.523990489830794 52.742913519146896L40 52.87877759999992L41.476009510169206 52.742913519146896L42.90717121826856 52.33944943792994L44.25 51.68064440829494L45.4636946823357 50.786515887693895L46.51137776651103 49.68423151878687L47.36121593216831 48.40728365432369L47.98738727668115 46.99447170900112L48.37086590060426 45.48872325886896L48.5 43.93578970863655L48.37086590060426 42.38285615840232L47.98738727668115 40.87710770827289L47.36121593216831 39.46429576295304L40.31459911433467 23.87877759999992Z');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(81,80,82,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.path('M19.30384757729189 24.195664876622686L18.861844275284056 25.21873559564574L18.591153481925176 26.309105162982632L18.5 27.433643251079957L18.591153481925176 28.55818133918001L18.861844275284056 29.64855090652054L19.30384757729189 30.671621625544503L19.90373334128708 31.596308010154644L20.643274341881806 32.394513932469636L21.49999999999909 33.04198630945393L22.44787914004519 33.51905202057242L23.458110933996068 33.81121566559068L24.5 33.909599999999955L25.541889066003932 33.81121566559068L26.55212085995481 33.51905202057242L27.50000000000091 33.04198630945393L28.356725658118194 32.394513932469636L29.09626665871292 31.596308010154644L29.69615242270811 30.671621625544503L30.138155724715944 29.64855090652054L30.408846518074824 28.55818133918001L30.5 27.433643251079957L30.408846518074824 26.309105162982632L30.138155724715944 25.21873559564574L29.69615242270811 24.195664876622686L24.722069963059766 12.909599999999955Z');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(215,213,217,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.path('M54.70786677729302 35.16484247662174L54.26586347528519 36.187913195645706L53.995172681927215 37.27828276298078L53.90401920000022 38.40282085108174L53.995172681927215 39.527358939181795L54.26586347528519 40.61772850651869L54.70786677729302 41.64079922554447L55.30775254128639 42.56548561015461L56.04729354188021 43.36369153246778L56.90401920000022 44.01116390945481L57.85189834004541 44.488229620569655L58.86213013399902 44.78039326558974L59.90401920000022 44.87877759999992L60.945908266001425 44.78039326558974L61.95614005995503 44.488229620569655L62.90401920000022 44.01116390945481L63.76074485812023 43.36369153246778L64.50028585871405 42.56548561015461L65.10017162270742 41.64079922554447L65.54217492471525 40.61772850651869L65.81286571807323 39.527358939181795L65.90401920000022 38.40282085108174L65.81286571807323 37.27828276298078L65.54217492471525 36.187913195645706L65.10017162270742 35.16484247662174L60.12608916305999 23.87877759999992Z');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(172,170,173,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       

       return this.canvas.paper.setFinish();
   }
});

/**
 * Generated Code for the Draw2D touch HTML5 lib.
 * File will be generated if you save the *.shape file.
 *
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custom code and event handler here.
 *
 * Looks disconcerting - extending my own class. But this is a good method to
 * merge basic code and override them with custom methods.
 */
video_Edge = video_Edge.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);
        this.worker= null;
        this.tmpCanvas = null;
        this.tmpContext = null;
        this.getInputPort("input_port1").setSemanticGroup("Image");
        this.getOutputPort("output_port1").setSemanticGroup("Image");
        this.attr({
            resizeable:false
        });
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @param {Object} context context where objects can store or handover global variables to other objects.
     *  @required
     **/
    calculate:function( context)
    {
        var img = this.getInputPort("input_port1").getValue();
        if(img instanceof HTMLImageElement && this.worker!==null){
            var imageData = this.imageToData(img);
            // Push it to the WebWorker with "Transferable Objects"
            // Passing data by reference instead of structure clone
            //
            this.worker.postMessage(imageData, [imageData.data.buffer]);
        }
    },


    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function( context )
    {
        // the method which runs as WebWorker
        //
        var workerFunction = function(event){
            var imageData = event.data;
            var opaque = true;
            var weights =[  1,   1,  1,  
                            1, 0.7, -1,  
                           -1,  -1, -1 ];
            var side     = Math.round(Math.sqrt(weights.length));
            var halfSide = Math.floor(side/2);

            var src = imageData.data;
            var sw = imageData.width;
            var sh = imageData.height;
            var w = sw;
            var h = sh;
            var dst = new Uint8ClampedArray(w*h*4);
            var alphaFac = opaque ? 1 : 0;

            for (var y=0; y < h; y++) {
              for (var x=0; x < w; x++) {
                var sy = y;
                var sx = x;
                var dstOff = (y*w+x)*4;
                var r=0, g=0, b=0, a=0;
                for (var cy=0; cy<side; cy++) {
                  for (var cx=0; cx<side; cx++) {
                    var scy = Math.min(sh-1, Math.max(0, sy + cy - halfSide));
                    var scx = Math.min(sw-1, Math.max(0, sx + cx - halfSide));
                    var srcOff = (scy*sw+scx)*4;
                    var wt = weights[cy*side+cx];
                    r += src[srcOff] * wt;
                    g += src[srcOff+1] * wt;
                    b += src[srcOff+2] * wt;
                    a += src[srcOff+3] * wt;
                  }
                }
                dst[dstOff] = r;
                dst[dstOff+1] = g;
                dst[dstOff+2] = b;
                dst[dstOff+3] = a + alphaFac*(255-a);
              }
            }
            imageData.data.set(dst);
            self.postMessage(imageData, [imageData.data.buffer]);
        };
        
        // the method which receives the WebWorker result
        //
       var receiverFunction = (event) => {
            var imageData = event.data;
            this.tmpContext.putImageData(imageData,0,0);
            var image = new Image();
            image.onload = () => { this.getOutputPort("output_port1").setValue(image);};
            image.src = this.tmpCanvas.toDataURL();
        };


        // convert a js function to a WebWorker
        //
        this.worker = this.createWorker(workerFunction);
        this.worker.onmessage = receiverFunction;
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function( context )
    {
        this.worker.terminate();
        delete this.worker;
        delete this.tmpContext;
        delete this.tmpCanvas;
        this.worker = null;
        this.tmpCanvas = null;
        this.tmpContext = null;
    },
    

    /**
     *  Helper function to dynamically create Web Workers.
     */
    createWorker: function(fn) {
        var blob = new Blob(["self.onmessage = ", fn.toString()], {
           type: "text/javascript"
        });
        var url = window.URL.createObjectURL(blob);
        return new Worker(url);
    },
    
    imageToData: function(image){
        var width = image.naturalWidth;
        var height= image.naturalHeight;
        // convert the HTMLImageElement to an ImageData object. Required for the WebWorker
        //
        if(this.tmpContext === null ) {
            this.tmpCanvas = document.createElement('canvas');
            this.tmpCanvas.width = width;
            this.tmpCanvas.height = height;
            this.tmpContext = this.tmpCanvas.getContext('2d');
        }
        this.tmpContext.drawImage(image, 0, 0, width, height);
        return this.tmpContext.getImageData(0, 0, width, height);
    }
});