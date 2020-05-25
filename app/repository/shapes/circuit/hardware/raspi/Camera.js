// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var circuit_hardware_raspi_Camera = CircuitFigure.extend({

   NAME: "circuit_hardware_raspi_Camera",
   VERSION: "local-version",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:90,height:85},attr), setter, getter);
     var port;
     // output_port1
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 98.78472222221818, y: 52.949029872945495 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_port1");
     port.setMaxFanOut(1);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 90;
      this.originalHeight= 85;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L90,0 L90,85 L0,85");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M89.9937281586122,17.067437371045315Q89.99354350956855,15.067437379569128 89.99354350956855, 13.067437379569128L89.99354350956855,2Q89.99354350956855,0 87.9935519880414, 0.005823557293633486L1.99999152152715,0.25621883190854555Q0,0.26204238920217904 0.007970959933697841, 2.262026505088528L0.32975315477993955,83.00001588411365Q0.3377241147136374,85 2.3377241147136374, 85L88,85Q90,85 89.99981535095635, 83.00000000852381L89.9937281586122,17.067437371045315');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Camera');
       shape.attr({"x":23.65625,"y":15.788525392002157,"text-anchor":"start","text":"Camera","font-family":"\"Arial\"","font-size":12,"stroke":"#000000","fill":"#BD2466","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       

       return this.canvas.paper.setFinish();
   }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
circuit_hardware_raspi_Camera = circuit_hardware_raspi_Camera.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

        this.TRANSPARENT_PIXEL = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
   
        this.img = new draw2d.shape.basic.Image({
            width: this.getWidth()-6, 
            height: this.getHeight()/4*3 -6,
            path: this.TRANSPARENT_PIXEL
        });
        this.img.hitTest = ()=>false;
        this.add(this.img, new draw2d.layout.locator.XYAbsPortLocator({x:3,y:3}));

        
        this.processing = false;
        
        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
        this.getOutputPort("output_port1").attr({
            semanticGroup:"Image",
            bgColor:"#ff0000",
            diameter:15
        });

    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @required
     **/
    calculate:function( context)
    {
        if(this.processing === false){
            var image = new Image();
            image.onload = () => {
                this.getOutputPort("output_port1").setValue(image);
                this.processing = false;
            };
            this.processing = true;
            image.src = hardware.camera.image();
        }
    },
    
    
    onStart: function(context ){
        this.processing = false;
        hardware.camera.start();
    },
    
    
    onStop: function(context){
        this.processing = false;
        hardware.camera.stop();
    },
    
    getPersistentAttributes: function () 
    {
       let currentImage = this.img.attr("path");
       this.img.attr("path", this.TRANSPARENT_PIXEL);
    
       let memento = this._super()
    
       this.img.attr("path", currentImage);

       return memento
    },
    
    setPersistentAttributes: function (memento) {
        this._super(memento)
        
        this.img = this.getChildren().find( child => child instanceof draw2d.shape.basic.Image)
        this.img.hitTest = ()=>false
        
        this.getOutputPort("output_port1").attr({
            semanticGroup:"Image",
            bgColor:"#ff0000",
            diameter:15
        })
    }
    
});