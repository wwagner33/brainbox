// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var draw2d_circuit_alu_HalfAdder = CircuitFigure.extend({

   NAME: "draw2d_circuit_alu_HalfAdder",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:70,height:65},attr), setter, getter);
     var port;
     // output_s
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 101.17942857142874, y: 21.634615384615387 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_s");
     port.setMaxFanOut(20);
     // output_c
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator({x: 102.60800000000017, y: 82.11430769230692 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_c");
     port.setMaxFanOut(20);
     // input_a
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -1.3188571428573985, y: 20.096153846153847 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_a");
     port.setMaxFanOut(20);
     // input_b
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -2.747428571428827, y: 83.46153846153847 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_b");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 70;
      this.originalHeight= 65;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L70,0 L70,65 L0,65");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,5.14010000000053Q0,4.14010000000053 1, 4.14010000000053L69,4.14010000000053Q70,4.14010000000053 70, 5.14010000000053L70,63.14010000000053Q70,64.14010000000053 69, 64.14010000000053L1,64.14010000000053Q0,64.14010000000053 0, 63.14010000000053L0,5.14010000000053');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Half');
       shape.attr({"x":21.65625,"y":22.625,"text-anchor":"start","text":"Half","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Adder');
       shape.attr({"x":20.717000000000553,"y":32.874299999999494,"text-anchor":"start","text":"Adder","font-family":"\"Arial\"","font-size":10,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'A');
       shape.attr({"x":5,"y":12.9375,"text-anchor":"start","text":"A","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'B');
       shape.attr({"x":5,"y":52.0625,"text-anchor":"start","text":"B","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'S');
       shape.attr({"x":52.34375,"y":12.9375,"text-anchor":"start","text":"S","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Label
       shape = this.canvas.paper.text(0,0,'C');
       shape.attr({"x":52.34375,"y":52.0625,"text-anchor":"start","text":"C","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
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
draw2d_circuit_alu_HalfAdder = draw2d_circuit_alu_HalfAdder.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);

        this.attr({resizeable:false});
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @required
     **/
    calculate:function()
    {
        var a = this.getInputPort("input_a").getValue();
        var b = this.getInputPort("input_b").getValue();
        
        // s = a XOR b
        this.getOutputPort("output_s").setValue(( a ? !b : b ));
        
        // c = a AND b
        this.getOutputPort("output_c").setValue(( a & b ));
    },


    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function()
    {
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function()
    {
    }
});