// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var video_Grayscale = CircuitFigure.extend({

   NAME: "video_Grayscale",
   VERSION: "2.0.119_589",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:80.125,height:82.63839999999982},attr), setter, getter);
     var port;
     // input_port1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -0.9429953198129615, y: 48.29425545509114 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port1");
     port.setMaxFanOut(20);
     // output_port1
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 100.18804992199671, y: 48.29425545509114 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_port1");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 80.125;
      this.originalHeight= 82.63839999999982;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L80.125,0 L80.125,82.63839999999982 L0,82.63839999999982");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0.015625,3Q0.015625,0 3.015625, 0L77.015625,0Q80.015625,0 80.015625, 3L80.015625,77Q80.015625,80 77.015625, 80L3.015625,80Q0.015625,80 0.015625, 77L0.015625,3');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Grayscale');
       shape.attr({"x":4,"y":70.13839999999982,"text-anchor":"start","text":"Grayscale","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Circle
       shape = this.canvas.paper.path('M32.65440906783169 39.46429576295304L32.02823772331885 40.87710770827289L31.644759099395742 42.38285615840232L31.515625 43.93578970863655L31.644759099395742 45.48872325886896L32.02823772331885 46.99447170900112L32.65440906783169 48.40728365432369L33.50424723348897 49.68423151878687L34.5519303176643 50.786515887693895L35.765625 51.68064440829494L37.10845378173144 52.33944943792994L38.539615489830794 52.742913519146896L40.015625 52.87877759999992L41.491634510169206 52.742913519146896L42.92279621826856 52.33944943792994L44.265625 51.68064440829494L45.4793196823357 50.786515887693895L46.52700276651103 49.68423151878687L47.37684093216831 48.40728365432369L48.00301227668115 46.99447170900112L48.38649090060426 45.48872325886896L48.515625 43.93578970863655L48.38649090060426 42.38285615840232L48.00301227668115 40.87710770827289L47.37684093216831 39.46429576295304L40.33022411433467 23.87877759999992Z');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(81,80,82,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.path('M19.31947257729189 24.195664876622686L18.877469275284056 25.21873559564574L18.606778481925176 26.309105162982632L18.515625 27.433643251079957L18.606778481925176 28.55818133918001L18.877469275284056 29.64855090652054L19.31947257729189 30.671621625544503L19.91935834128708 31.596308010154644L20.658899341881806 32.394513932469636L21.51562499999909 33.04198630945393L22.46350414004519 33.51905202057242L23.473735933996068 33.81121566559068L24.515625 33.909599999999955L25.557514066003932 33.81121566559068L26.56774585995481 33.51905202057242L27.51562500000091 33.04198630945393L28.372350658118194 32.394513932469636L29.11189165871292 31.596308010154644L29.71177742270811 30.671621625544503L30.153780724715944 29.64855090652054L30.424471518074824 28.55818133918001L30.515625 27.433643251079957L30.424471518074824 26.309105162982632L30.153780724715944 25.21873559564574L29.71177742270811 24.195664876622686L24.737694963059766 12.909599999999955Z');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(215,213,217,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Circle");
       
       // Circle
       shape = this.canvas.paper.path('M54.72349177729302 35.16484247662174L54.28148847528519 36.187913195645706L54.010797681927215 37.27828276298078L53.91964420000022 38.40282085108174L54.010797681927215 39.527358939181795L54.28148847528519 40.61772850651869L54.72349177729302 41.64079922554447L55.32337754128639 42.56548561015461L56.06291854188021 43.36369153246778L56.91964420000022 44.01116390945481L57.86752334004541 44.488229620569655L58.87775513399902 44.78039326558974L59.91964420000022 44.87877759999992L60.961533266001425 44.78039326558974L61.97176505995503 44.488229620569655L62.91964420000022 44.01116390945481L63.77636985812023 43.36369153246778L64.51591085871405 42.56548561015461L65.11579662270742 41.64079922554447L65.55779992471525 40.61772850651869L65.82849071807323 39.527358939181795L65.91964420000022 38.40282085108174L65.82849071807323 37.27828276298078L65.55779992471525 36.187913195645706L65.11579662270742 35.16484247662174L60.14171416305999 23.87877759999992Z');
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
video_Grayscale = video_Grayscale.extend({

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
            var pixels = imageData.data;
            for( let x = 0; x < pixels.length; x += 4 ) {
                // CIE luminance for the RGB
                // The human eye is bad at seeing red and blue, so we de-emphasize them.
                let average = 0.2126*pixels[x] + 0.7152*pixels[x+1] + 0.0722*pixels[x+2];
                //let average = (pixels[x] + pixels[x+1] +pixels[x+2]) / 3;
    
                pixels[x]     = average;
                pixels[x + 1] = average;
                pixels[x + 2] = average;
            }
            self.postMessage(imageData, [imageData.data.buffer]);
        };
        
        // the method which receives the WebWorker result
        //
       var receiverFunction = (event) => {
            var imageData = event.data;
            this.tmpContext.putImageData(imageData,0,0);
            var image = new Image();
            image.onload = () => {
                this.getOutputPort("output_port1").setValue(image);
            }
            image.src = this.tmpCanvas.toDataURL();
        };
        
        // convert a js function to a WebWorker
        //
        this.worker = this.createWorker(workerFunction);
        this.worker.onmessage = receiverFunction
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