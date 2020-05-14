
circuit_diagram_Sparkline = draw2d.shape.diagram.Sparkline.extend({

    NAME : "circuit_diagram_Sparkline",

    init : function(attr)
    {
        this._super(attr)
        this.maxValues = 100

        this.setBackgroundColor("#FF765E")
        this.setRadius(5)
        this.addPort(new DecoratedInputPort())
        this.setDimension(250,50)
    },

    setData:function( data)
    {
        this._super(data)

        this.min = 0
        this.max = 5
        this.padding=4
        this.cache= {}
        this.repaint()
    },


    /**
     * @inheritdoc
     */
    repaint: function (attributes) {
        if (this.repaintBlocked === true || this.shape === null) {
            return
        }

        attributes = attributes || {}

        attributes.fill = "90-#000:5-#4d4d4d:95"

        let padding = this.padding
        let width = this.getWidth() - 2 * padding
        let height = this.getHeight() - 2 * padding
        let length = this.data.length
        let min = this.min
        let max = this.max
        let toCoords = function (value, idx) {
            let step = 1
            // avoid divisionByZero
            if (length > 1) {
                step = (width / (length - 1))
            }

            return {
                y: parseInt(-((value - min) / (max - min) * height) + height + padding),
                x: parseInt(padding + idx * step)
            }
        }

        if (this.svgNodes !== null && (typeof this.cache.pathString === "undefined")) {
            let prev_pt = null
            this.data.forEach((item, idx) => {
                let pt = toCoords(item, idx)
                console.log(JSON.stringify(pt), item, height, min, max)
                if (prev_pt === null) {
                    this.cache.pathString = ["M", pt.x, pt.y].join(" ")
                }
                else {
                    this.cache.pathString = [this.cache.pathString, "L", pt.x, pt.y].join(" ")
                }
                prev_pt = pt
            })

            this.svgNodes.attr({path: this.cache.pathString, stroke: "#f0f0f0"})

        }
        this._super(attributes)

        return this
    },

    /**
     * @method
     *
     * Update the chart with the current value of the input port.
     *
     */
    calculate:function(context)
    {
        let port = this.getInputPort(0)
        let value=port.getValue()
        console.log(value)
        this.data.push(value===null?0:value)
        if(this.data.length>this.maxValues) {
            this.data.shift()
        }
        this.setData(this.data)
    },

    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function( context )
    {
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function( context )
    {
    },

    /**
     * Get the simulator a hint which kind of hardware the shapes requires or supports
     * This helps the simulator to bring up some dialogs and messages if any new hardware is connected/get lost
     * and your are running a circuit which needs this kind of hardware...
     **/
    getRequiredHardware: function(){
        return {
            raspi: false,
            arduino: false
        }
    }
});
