

var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    shapes:[],
    drawNode:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var fireSprite = new cc.Sprite("res/firefox.png");
        fireSprite.scale = 0.5;    				
        fireSprite.x = this.width/2;
        fireSprite.y = this.height/2;
        this.addChild(fireSprite);
        
        var firstLabel = new cc.LabelTTF('hihihihihi',  'Times New Roman', 32);
        this.addChild(firstLabel);
        firstLabel.x= 100;
        firstLabel.y = 100;
        
        var textField = new cc.TextFieldTTF("", cc.size(100,50), 
        		cc.TEXT_ALIGNMENT_LEFT,"Arial", 32);
        
        
        /*
        var eventListener = new cc.EventListener.create({
        	event:cc.EventListener.TOUCH_ONE_BY_ONE,
        	swallowTouches:true,
        	onTouchBegan:function(touch,event){
        		cc.log("touched");
        		return true;
        	},
        	onTouchMoved:this.touchMovedListener
        });
        cc.eventManager.addListener(eventListener, this);
        cc.eventManager.addListener({
        	event:cc.EventListener.TOUCH_ONE_BY_ONE,
        	swallowTouches:true,
        	onTouchBegan: function(touch,event){
        		cc.log("touched");
        		return true;
        	},
        	onTouchMoved:this.touchMovedListener
        }, this);
    
        var drawNode = new cc.DrawNode();
        this.addChild(drawNode);
        
        var listener = cc.EventListener.create({
        	event:cc.EventListener.TOUCH_ONE_BY_ONE,
        	swallowTouches:true,
        	onTouchBegan:function(touch,event){
        		cc.log("touched");
        		return true;
        	},
        	onTouchMoved:function(touch,event){
        		//var p1 = touch.getPreviousLocation();
        		//var p2 = touch.getLocation();
        		//drawNode.drawSegment(p1,p2,2,cc.color(160,20,20));
        		return true;
        	},
        	onTouchEnded:function(touch,event){
        		var p1 = touch.getStartLocation();
        		var p2 = touch.getLocation();
        		event.getCurrentTarget().shapes.push(p1,p2);
        		
        		drawNode.drawSegment(p1,p2,2,cc.color(160,20,20));
        		return true;
        	},
        	undo:function(){
        		this.shapes.pop();
        		this.shapes.pop();
        		this.drawNode.clear();
        	}
        });
        cc.eventManager.addListener(listener, this);
        */
       /* onTouchBegan:function(touch, event){
        	var size = event.getCurrentTarget().getContentSize();//get touched object's size
        	var touchPosition = event.getCurrentTarget().convertToNodeSpace(touch.getLocation());
        	if(cc.rectContainsPoint(cc.rect(0,0,size.width, size.height), touchPosition)){
        		cc.log("touched");
        	}
        	return true;
        }*/
        
        return true;
    }
});






var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

