var controls_Slider = draw2d.shape.widget.Slider.extend({

    NAME: "controls_Slider",
    VERSION: "1.0.0",

    init: function () {
        this._super({bold: false, fontFamily: "Verdana", fontSize: 10, bgColor: "#fafafa"});

        this.persistPorts = false

        this.outputPort = new DecoratedOutputPort()
        this.outputPort.setName("output")
        this.addPort(this.outputPort)

        this.on("change:userData.value", (figure, event) => {
            this.setValue(parseInt(event.value))
        })

        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

        this.on("change:value", (element, event) => {
            var value = parseInt(event.value); // 0..100
            value = 5 / 100 * value;             // 0..5
            this.getOutputPort(0).setValue(value);
        });

    },

    calculate: function (context) {
    },

    onStart: function (context) {
    },

    onStop: function (context) {
    },


    getPersistentAttributes: function ()
    {
        let memento = this._super()
        memento.value = this.getValue()
        return memento
    },

    setPersistentAttributes: function (memento)
    {
        this._super(memento)
        if(memento.value){
            this.setValue(parseInt(memento.value))
        }
    }

});

