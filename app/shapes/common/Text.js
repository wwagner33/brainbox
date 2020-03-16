var common_Text= draw2d.shape.basic.Text.extend({

    NAME:"common_Text",
    VERSION: "1.0.0",

    init:function()
    {
        this._super({text:"The quick brown fox $ jumps over the lazy dog", bold:false, fontFamily:"Verdana", fontSize:10, bgColor:"#fafafa"});
    }
});
