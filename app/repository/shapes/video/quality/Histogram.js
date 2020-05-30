// Generated Code for the Draw2D touch HTML5 lib.
// File will be generated if you save the *.shape file.
//
// created with http://www.draw2d.org
//
//
var video_quality_Histogram = CircuitFigure.extend({

   NAME: "video_quality_Histogram",
   VERSION: "2.0.247_920",

   init:function(attr, setter, getter)
   {
     var _this = this;

     this._super( $.extend({stroke:0, bgColor:null, width:81.13504999999986,height:80.87877759999992},attr), setter, getter);
     var port;
     // input_port1
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator({x: -0.9505139887140474, y: 49.34495943717131 }));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("input_port1");
     port.setMaxFanOut(20);
     // output_port1
     port = this.addPort(new DecoratedOutputPort(), new draw2d.layout.locator.XYRelPortLocator({x: 98.92155116685083, y: 49.34495943717131 }));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("output_port1");
     port.setMaxFanOut(20);
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 81.13504999999986;
      this.originalHeight= 80.87877759999992;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();
       var shape = null;
       // BoundingBox
       shape = this.canvas.paper.path("M0,0 L81.13504999999986,0 L81.13504999999986,80.87877759999992 L0,80.87877759999992");
       shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
       shape.data("name","BoundingBox");
       
       // Rectangle
       shape = this.canvas.paper.path('M0,3Q0,0 3, 0L77,0Q80,0 80, 3L80,77Q80,80 77, 80L3,80Q0,80 0, 77L0,3');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(255,255,255,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Label
       shape = this.canvas.paper.text(0,0,'Histogram');
       shape.attr({"x":4.228799999999865,"y":68.37877759999992,"text-anchor":"start","text":"Histogram","font-family":"\"Arial\"","font-size":16,"stroke":"#000000","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
       shape.data("name","Label");
       
       // Rectangle
       shape = this.canvas.paper.path('M4.315424000003077,7.770740800002386Q4.315424000003077,3.770740800002386 8.315424000003077, 3.770740800002386L71.31542400000308,3.770740800002386Q75.31542400000308,3.770740800002386 75.31542400000308, 7.770740800002386L75.31542400000308,51.770740800002386Q75.31542400000308,55.770740800002386 71.31542400000308, 55.770740800002386L8.315424000003077,55.770740800002386Q4.315424000003077,55.770740800002386 4.315424000003077, 51.770740800002386L4.315424000003077,7.770740800002386');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(237,237,237,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Rectangle");
       
       // Shadow
       shape = this.canvas.paper.path('M38.31898911823282,51.06235109342106Q38.31898911823282,53.06235109342106 40.3188720499583, 53.083990395468334L51.31910618650734,53.20301605706851Q53.31898911823282,53.224655359115786 52.92678092918581, 51.26348919164184L50.04794261238581,36.86837846676326Q49.6557344233388,34.90721229928931 49.593293360294865, 34.2401812930475L49.593293360294865,34.2401812930475Q49.53085229725093,33.573150286805685 49.3454263482231, 32.9263866801557L49.3454263482231,32.9263866801557Q49.16000039919527,32.27962307350572 48.85722363781406, 31.67277845135368L48.85722363781406,31.67277845135368Q48.55444687643285,31.06593382920164 48.1435190213806, 30.51744685832L48.1435190213806,30.51744685832Q47.73259116632835,29.96895988743836 47.225998052541854, 29.49549606688106L47.225998052541854,29.49549606688106Q46.71940493875536,29.02203224632376 46.13253914164852, 28.63797753470044L46.13253914164852,28.63797753470044Q45.54567334454168,28.25392282307712 44.896366484390455, 27.97094652845726L44.896366484390455,27.97094652845726Q44.24705962423923,27.687970233837405 43.5550405614249, 27.51467044774381L43.5550405614249,27.51467044774381Q42.86302149861058,27.341370661650217 42.14931688217757, 27.283013010383L42.14931688217757,27.283013010383Q41.43561226574457,27.224655359115786 40.72190764931156, 27.283013010383L40.72190764931156,27.283013010383Q40.008203032878555,27.341370661650217 39.31618397006423, 27.51467044774381L39.31618397006423,27.51467044774381Q38.624164907249906,27.687970233837405 38.47157701274136, 27.75447000404165L38.47157701274136,27.75447000404165Q38.31898911823282,27.820969774245896 38.31898911823282, 29.820969774245896L38.31898911823282,51.06235109342106');
       shape.attr({"stroke":"rgba(48,48,48,1)","stroke-width":1,"fill":"rgba(199,29,61,1)","dasharray":null,"stroke-dasharray":null,"opacity":0.2});
       shape.data("name","Shadow");
       
       // TOP_Circle
       shape = this.canvas.paper.path('M38.67362344960475 25.032379674180447L39.00903935568749 25.122254095344033L40.57187295468975 25.25898431823407L42.13470655369201 25.122254095344033L43.65005424462106 24.71621790530753L45.07187295468975 24.053212952294416L46.35696144186841 23.15338430630527L47.46627294276095 22.044072805412725L48.3661015887501 20.75898431823407L49.02910654176321 19.337165608165378L49.435142731799715 17.82181791723633L49.57187295468975 16.25898431823407L49.435142731799715 14.69615071923181L49.02910654176321 13.180803028302762L48.3661015887501 11.75898431823407L47.46627294276095 10.473895831055415L46.35696144186841 9.36458433016287L45.07187295468975 8.464755684173724L43.65005424462106 7.80175073116061L42.13470655369201 7.395714541124107L40.57187295468975 7.25898431823407L39.00903935568749 7.395714541124107L38.67362344960475 7.485588962287693L38.67362344960475 25.032379674180447Z');
       shape.attr({"stroke":"rgba(27,27,27,1)","stroke-width":1,"fill":"rgba(199,29,61,1)","dasharray":null,"stroke-dasharray":null,"opacity":0.15});
       shape.data("name","TOP_Circle");
       
       // TOP_Circle
       shape = this.canvas.paper.ellipse();
       shape.attr({"rx":8.16442848176873,"ry":8.16442848176873,"cx":39.50000000000025,"cy":16.4234128000028,"stroke":"none","stroke-width":0,"fill":"rgba(199,29,61,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","TOP_Circle");
       
       // TOP_Body
       shape = this.canvas.paper.path('M29.462567472217447,46.776768974949896Q28.81898911823282,50.724655359115786 32.81880873597436, 50.762642534977275L46.90091030048609,50.89638338325396Q50.900729918227626,50.93437055911545 50.01211395841982, 47.03432419067637L48.22418747803842,39.18729409867167Q47.33557151823061,35.28724773023259 47.27480253027943, 34.71745662722515L47.27480253027943,34.71745662722515Q47.21403354232825,34.1476655242177 47.03357301342339, 33.5951872355472L47.03357301342339,33.5951872355472Q46.85311248451853,33.0427089468767 46.558443616512704, 32.52433024577522L46.558443616512704,32.52433024577522Q46.263774748506876,32.005951544673735 45.86385090584463, 31.537423105665766L45.86385090584463,31.537423105665766Q45.46392706318238,31.068894666657798 44.97089972945241, 30.66445248927039L44.97089972945241,30.66445248927039Q44.47787239572244,30.26001031188298 43.906721956976526, 29.931943167022382L43.906721956976526,29.931943167022382Q43.33557151823061,29.603876022161785 42.70365209153351, 29.36215206401357L42.70365209153351,29.36215206401357Q42.07173266483642,29.120428105865358 41.39824480220159, 28.972391994582267L41.39824480220159,28.972391994582267Q40.72475693956676,28.824355883299177 40.03016422889914, 28.77450562120748L40.03016422889914,28.77450562120748Q39.33557151823152,28.724655359115786 38.64097880756344, 28.77450562120748L38.64097880756344,28.77450562120748Q37.94638609689537,28.824355883299177 37.27289823426054, 28.972391994582267L37.27289823426054,28.972391994582267Q36.59941037162571,29.120428105865358 35.96749094492861, 29.36215206401357L35.96749094492861,29.36215206401357Q35.33557151823152,29.603876022161785 34.7644210794856, 29.931943167022382L34.7644210794856,29.931943167022382Q34.193270640739684,30.26001031188298 33.700243307009714, 30.66445248927039L33.700243307009714,30.66445248927039Q33.207215973279745,31.068894666657798 32.8072921306175, 31.537423105665766L32.8072921306175,31.537423105665766Q32.40736828795525,32.005951544673735 32.11269941994942, 32.52433024577522L32.11269941994942,32.52433024577522Q31.818030551943593,33.0427089468767 31.637570023038734, 33.5951872355472L31.637570023038734,33.5951872355472Q31.457109494133874,34.1476655242177 31.396340506182696, 34.71745662722515L31.396340506182696,34.71745662722515Q31.335571518231518,35.28724773023259 30.69199316424689, 39.235134114398484L29.462567472217447,46.776768974949896');
       shape.attr({"stroke":"none","stroke-width":0,"fill":"rgba(199,29,61,1)","dasharray":null,"stroke-dasharray":null,"opacity":1});
       shape.data("name","TOP_Body");
       
       // Line
       shape = this.canvas.paper.path('M38.69640448001155 4.038881344014044L38.864176640010555,55.044239424005355');
       shape.attr({"stroke-linecap":"round","stroke-linejoin":"round","stroke":"rgba(26,12,112,1)","stroke-width":1,"stroke-dasharray":null,"opacity":1});
       shape.data("name","Line");
       

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
video_quality_Histogram = video_quality_Histogram.extend({

    init: function(attr, setter, getter){
        this._super(attr, setter, getter);
        this.worker= null;
        this.tmpCanvas = null;
        this.tmpContext = null;
        this.processing = false;
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
        if(img instanceof HTMLImageElement && this.worker!==null && this.processing===false){
            var imageData = this.imageToData(img);
            // Push it to the WebWorker with "Transferable Objects"
            // Passing data by reference instead of structure clone
            //
            this.processing = true;
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
            const  HISTOGRAM_SIZE = 256; // for 8-bit image
            const  MAX_VALUE = 255;      // max value in 8-bit image

            var imageData = event.data;
            var pixels = imageData.data;
            var width  = imageData.width;
            var height = imageData.height;
            var imageSize = width * height;
            var scale = MAX_VALUE / imageSize;    // scale factor ,so the values in LUT are from 0 to MAX_VALUE
            var lutR   = new Uint8Array(HISTOGRAM_SIZE);
            var lutG   = new Uint8Array(HISTOGRAM_SIZE);
            var lutB   = new Uint8Array(HISTOGRAM_SIZE);
            var histR  = new Uint32Array(HISTOGRAM_SIZE);
            var histG  = new Uint32Array(HISTOGRAM_SIZE);
            var histB  = new Uint32Array(HISTOGRAM_SIZE);
            histR.fill(0);
            histG.fill(0);
            histB.fill(0);
            
            // collect the distribution of the RGB values 
            //
            for (var index=0; index < pixels.length; index+=4) {
                histR[pixels[index  ]]++; // red
                histG[pixels[index+1]]++; // green
                histB[pixels[index+2]]++; // blue
            }

            var sumR = 0;
            var sumG = 0;
            var sumB = 0;
            var i = 0;
            while(i < HISTOGRAM_SIZE)
            {
                // cumulative sum is used as LUT
                sumR += histR[i];
                sumG += histG[i];
                sumB += histB[i];
       
                // build look-up table
                lutR[i] = (sumR * scale+0.5)|0;
                lutG[i] = (sumG * scale+0.5)|0;
                lutB[i] = (sumB * scale+0.5)|0;
                ++i;
            }

            // re-map input pixels by using LUT
            for (index=0; index < pixels.length; index+=4) {
                pixels[index  ] = lutR[pixels[index  ]];
                pixels[index+1] = lutG[pixels[index+1]];
                pixels[index+2] = lutB[pixels[index+2]];
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
                this.processing = false;
            };
            image.src = this.tmpCanvas.toDataURL();
        };


        // convert a js function to a WebWorker
        //
        this.worker = this.createWorker(workerFunction);
        this.worker.onmessage = receiverFunction;
        this.processing = false;
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function( context )
    {
        if(this.worker) this.worker.terminate();
        delete this.worker;
        delete this.tmpContext;
        delete this.tmpCanvas;
        this.worker = null;
        this.tmpCanvas = null;
        this.tmpContext = null;
        this.processing = false;
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

        if(this.tmpContext !==null && this.tmpContext.width!== width){
            delete this.tmpContext;
            delete this.tmpCanvas;
            this.tmpCanvas = null;
            this.tmpContext = null;
        }

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