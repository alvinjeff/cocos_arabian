var INITIALIZED = false;

var HelloWorldLayer = cc.Layer.extend({
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

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("Valve Kabahan ka na!", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 300;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);
    
        var sprite = new cc.Sprite.create(res.dolphin_png);
        sprite.setAnchorPoint(cc.p(0.5, 0.5));
        sprite.setPosition(cc.p(size.width / 2, size.height / 2));
    
        var menuItem1 = new cc.MenuItemFont("Storm Spirit", storm);
        var menuItem2 = new cc.MenuItemFont("Crystal Maiden", maiden);
        var menuItem3 = new cc.MenuItemFont("Lion", lion);
        var menuItem4 = new cc.MenuItemImage(res.start_default, res.start_clicked, imageFunc);
        var menu = new cc.Menu(menuItem1, menuItem2, menuItem3, menuItem4);
        menu.alignItemsVerticallyWithPadding(20);
        this.addChild(menu);
        
        // cc.audioEngine.playEffect(res.test_sound, false);
        
        return true;
    },  
});

var storm = function()
{
    cc.audioEngine.playEffect(res.storm, false);
    // var scene = new PlayScene();
    // cc.director.pushScene(scene);
}
var maiden = function()
{
	cc.audioEngine.playEffect(res.maiden, false);
}

var lion = function()
{
	cc.audioEngine.playEffect(res.lion, false);
}

var imageFunc = function()
{
	cc.log("Image item has been pressed");
}
var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        if ('keyboard' in cc.sys.capabilities) {
            cc.eventManager.addListener({
                event: cc.EventListener.KEYBOARD,
                onKeyPressed: function (key, event) {
                    console.log("Pressed Key: " + key);
                }
            }, this);
        } 

        if (cc.sys.capabilities.hasOwnProperty('mouse')) {
            cc.eventManager.addListener(
            {
                event: cc.EventListener.MOUSE,
                    onMouseDown: function(event)
                    {   
                        if (event.getButton() == cc.EventMouse.BUTTON_LEFT)
                        {
                            cc.log("Left mouse button pressed at " + event.getLocationX());
                        }
                        
                        if (event.getButton() == cc.EventMouse.BUTTON_RIGHT)
                        {
                            cc.log("Right mouse button pressed at " + event.getLocationX());
                        }
                    },
                    
                    onMouseUp: function(event)
                    {
                        if (event.getButton() == cc.EventMouse.BUTTON_LEFT)
                        {
                            cc.log("Left mouse button released at " + event.getLocationX());
                        }
                        
                        if (event.getButton() == cc.EventMouse.BUTTON_RIGHT)
                        {
                            cc.log("Right mouse button released at " + event.getLocationX());
                        }
                    },

            }, this);
        }
        
        if (INITIALIZED == false) {
            INITIALIZED = true;
            
            var layer = new HelloWorldLayer();
            this.addChild(layer);
        }
    }
});

