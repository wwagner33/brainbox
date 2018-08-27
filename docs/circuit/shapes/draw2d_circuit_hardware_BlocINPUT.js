// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var draw2d_circuit_hardware_BlocINPUT = draw2d.SetFigure.extend({

   NAME: "draw2d_circuit_hardware_BlocINPUT",

   init:function(attr, setter, getter)
   {
     var _this = this;
     this.tooltip = null;
     this.tooltipTimer = -1;

     this._super( $.extend({stroke:0, bgColor:null, width:56,height:70.15312500000073},attr), setter, getter);
     var port;
     // output_01
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(102.32785714285748, 47.039957236402024));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_01");
     port.setMaxFanOut(20);
     this.persistPorts=false;
     this.zoomCallback = $.proxy(this.positionTooltip,this);

     this.on("dragstart", function() {
      _this.hideTooltip(true)
    })

    this.on("mouseenter", function() {
      _this.tooltipTimer = window.setTimeout(function() {
        _this.tooltipTimer = -1
        _this.showTooltip()
      }, 500)
    })

    this.on("mouseleave", function(){
      _this.hideTooltip()
    })

    this.on("move", function(){
      _this.positionTooltip()
    })

   },

    setCanvas: function(canvas)
    {
        if(this.canvas !==null) this.canvas.off(this.zoomCallback);
        this._super(canvas);
        if(this.canvas !==null) this.canvas.on("zoom",this.zoomCallback);
    },

    hideTooltip: function (fast) {
      if (this.tooltipTimer !== -1) {
        window.clearTimeout(this.tooltipTimer)
        this.tooltipTimer = -1
      }
      else if(this.tooltip!==null){
        if(fast) {
          this.tooltip.remove()
        }
        else{
          this.tooltip.fadeOut(500, function () {
            $(this).remove()
          })
        }
        this.tooltip = null
      }
    },

    showTooltip:function()
    {
        this.tooltip= $('<div class="draw2d_tooltip">BlocINPUT</div>')
            .appendTo('body')
            .hide()
            .fadeIn(1000);
        this.positionTooltip();
    },


    positionTooltip: function()
    {
        if( this.tooltip===null){
            return;
        }

        var width =  this.tooltip.outerWidth(true);
        var pos = this.canvas.fromCanvasToDocumentCoordinate(
                this.getAbsoluteX()+this.getWidth()/2-width/2+8,
                this.getAbsoluteY()+this.getHeight() + 10);

        // remove the scrolling part from the tooltip because the tooltip is placed
        // inside the scrolling container
        pos.x +=this.canvas.getScrollLeft();
        pos.y +=this.canvas.getScrollTop();

        this.tooltip.css({'top': pos.y, 'left': pos.x});
    },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 56;
      this.originalHeight= 70.15312500000073;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L56,0 L56,70.15312500000073 L0,70.15312500000073");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,8Q0,0 8, 0L48,0Q56,0 56, 8L56,58Q56,66 48, 66L8,66Q0,66 0, 58L0,8');
       shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // indicator
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":5,"ry":5,"cx":7.977199999999357,"cy":57.5,"stroke":"#999999","stroke-width":1,"fill":"none","dasharray":null,"opacity":1});
       shape.data("name","indicator");
       
       // Label
       shape = this.canvas.paper.text(0,0,'bloc');
       shape.attr({"x":16.328125,"y":57.21562500000073,"text-anchor":"start","text":"bloc","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#8C8C8C","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       

       return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
   },

   layerGet: function(name, attributes)
   {
      if(this.svgNodes===null) return null;

      var result=null;
      this.svgNodes.some(function(shape){
         if(shape.data("name")===name){
            result=shape;
         }
         return result!==null;
      });

      return result;
   },

   layerAttr: function(name, attributes)
   {
     if(this.svgNodes===null) return;

     this.svgNodes.forEach(function(shape){
             if(shape.data("name")===name){
                  shape.attr(attributes);
             }
     });
   },

   layerShow: function(name, flag, duration)
   {
      if(this.svgNodes===null) return;

      if(duration){
        this.svgNodes.forEach(function(node){
            if(node.data("name")===name){
                if(flag){
                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                }
                else{
                    node.animate({ opacity : 0 }, duration, function () { this.hide() });
                }
            }
        });
      }
      else{
          this.svgNodes.forEach(function(node){
              if(node.data("name")===name){
                   if(flag){node.show();}
                   else{node.hide();}
               }
           });
      }
   },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    getParameterSettings: function()
    {
        return [];
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
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
draw2d_circuit_hardware_BlocINPUT = draw2d_circuit_hardware_BlocINPUT.extend({

    init: function(attr, setter, getter){
        var _this = this;
        this._super(attr, setter, getter);

        this.attr({
            resizeable:false,
            "userData.blockID":"-unset-"
        });
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
        this.on("added",function(){

            if(hardware.bloc.isConnected(_this.getUserData().blocId)){
               _this.layerAttr("indicator",{fill:"#00FF00"});
            }
            else{
               _this.layerAttr("indicator",{fill:"#FF0000"});
            }
            hardware.bloc.on("bloc:register",function(device){
                var blockId = _this.getUserData().blocId;
                if(blockId === device.blocId){
                   _this.layerAttr("indicator",{fill:"#00FF00"});
                }
            });
            hardware.bloc.on("bloc:unregister",function(device){
                var blockId = _this.getUserData().blocId;
                if(blockId === device.blocId){
                   _this.layerAttr("indicator",{fill:"#FF0000"});
                }
            });            
        });
        this.on("removed",function(){
            hardware.bloc.off("bloc:register");
            hardware.bloc.off("bloc:unregister");            
        });
        
    },
    
    /**
     * called every '10 [ms]' from the application.
     * 
     **/
    calculate:function()
    {
        var blocValue = hardware.bloc.get(this.getUserData().blocId);
        
       this.getOutputPort(0).setValue(blocValue);
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
    },
    
    getParameterSettings: function()
    {
        return [
        {
            name:"blocId",
            label:"Bloc Id",
            property:{
                type: "blocid"
        }
        
        }];
    }
});