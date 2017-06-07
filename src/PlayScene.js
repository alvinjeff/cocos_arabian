var INITIALIZED_2 = false;

var PlaySceneLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
  
        var sprite = new cc.Sprite.create(res.dolphin_png);
        sprite.setAnchorPoint(cc.p(0.5, 0.5));
        sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        this.addChild(sprite, 0);
        
        var menuItem1 = new cc.MenuItemFont("BACK", play);
        var menu = new cc.Menu(menuItem1);
        menu.alignItemsVertically();
        this.addChild(menu);
        
        return true;
    },     
});

var play = function()
{
    var scene = new HelloWorldScene();
    cc.director.pushScene(scene);
}

var PlayScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
                
        if (INITIALIZED_2 == false) {
            INITIALIZED_2 = true;
            var layer = new PlaySceneLayer();
            this.addChild(layer);
        }        
    }
});