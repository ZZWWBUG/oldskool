(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Slide_001_BG_Sun_Ani = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F2AA3D").ss(20,1,1).p("AAAuDIAAFYIAAIrIAAAAIAAAAIAAAAInhEWIkqCtAAAAAIAAAAIAAAAIEWHiICtEpAAAAAIAAAAIABAAIgBAAAAAAAIAAAAAAAAAIAAAAAAAAAIAAAAIAAAAIkVHiIisEpAABAAIIqAAIFZAAAHCsKIisEpIkWHhAMLnBIkpCsInhEVAnBsKICsEpIEVHhAuDAAIFZAAIIqAAAsKnBIEpCrIHhEWAAAAAIAAIqIAAFaAAAAAIHiEWIEpCs");
	this.shape.setTransform(90,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F2AA3D").s().p("AkVHiIEVnhIAAIqQiZAAh8hJgAAAABInhEWQhJh8AAibIIqAAInhkVIHhEVIoqAAQAAiZBJh8QAkg9A2g2QA1g1A9gkIEVHhIAAAAIAAABIAAAAIABAAIAAAAIAAAAIAAgBIAAAAIEVnhIkVHhIgBAAIkVnhQB8hJCZAAIAAIqIAAoqQCaAAB8BJQA9AkA1A1QA2A2AkA9QBJB8AACZIoqAAIHhkVInhEVIIqAAQAACbhJB8InhkWIEVHhQh8BJiaAAgAABABIHhEWQgkA8g2A2Qg1A1g9AkgAkVHiQg9gkg1g1Qg2g2gkg8IHhkWIkVHhIAAAAgAAAABgAAAABIAAgBIAAAAIAAABIABAAIgBAAgAABABIgBgBIABAAIAAABgAABABgAABAAIAAAAIAAABgAABABgAAAABIAAgBIABABgAIrAAgAABAAgAABAAgAoqAAgAkVnhgAAAoqg");
	this.shape_1.setTransform(90,89.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide_001_BG_Sun_Ani, new cjs.Rectangle(-10,-10,200,200), null);


(lib.Slide_001_BG_Land = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AC792B").s().p("EhP6AKMQjIAAAAjIIAAqnQAAjIDIAAUA3LgInA3mAMjQY4nlYMDpQDIAAAADIIAAKnQAADIjIAAg");
	this.shape.setTransform(531.45,65.2267);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide_001_BG_Land, new cjs.Rectangle(0,0,1062.9,130.5), null);


(lib.Button_Click = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.Button_001 = new cjs.Text("CLICK HERE", "normal 700 28px 'Roboto'", "#FFFFFF");
	this.Button_001.name = "Button_001";
	this.Button_001.textAlign = "center";
	this.Button_001.lineHeight = 39;
	this.Button_001.lineWidth = 176;
	this.Button_001.parent = this;
	this.Button_001.setTransform(0,-12.55);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.Button_001);
	}

	this.timeline.addTween(cjs.Tween.get(this.Button_001).wait(4));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009966").s().p("AtPD6Qg/AAgtg+Qgsg+AAhYIAAhKQAAhZAsg9QAtg/A/AAIafAAQA/AAAtA/QAsA9AABZIAABKQAABYgsA+QgtA+g/AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AtPD6Qg/AAgtg+Qgsg+AAhYIAAhKQAAhZAsg9QAtg/A/AAIafAAQA/AAAtA/QAsA9AABZIAABKQAABYgsA+QgtA+g/AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-25,200,90.8);


(lib.Slide_001_BG_Sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Slide_001_BG_Sun_Ani();
	this.instance.setTransform(0,0,1,1,0,0,0,90,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:60.0001},29).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.6,-136.6,273.2,273.2);


(lib.Slide_001_BG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Slide_001_BG_Sun();
	this.instance.setTransform(111,111,2,2,0,0,0,55.5,55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.Bg_Land = new lib.Slide_001_BG_Land();
	this.Bg_Land.name = "Bg_Land";
	this.Bg_Land.setTransform(486.55,242.75,1,1,0,0,0,531.5,65.2);

	this.timeline.addTween(cjs.Tween.get(this.Bg_Land).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6496CA").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide_001_BG, new cjs.Rectangle(-200,-200,1218,508), null);


(lib.Button_Go = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Button_Click();
	this.instance.setTransform(0,0,1,1,0,0,0,100,25);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Button_Click(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Button_Go, new cjs.Rectangle(-200,-50,200,90.8), null);


(lib.Slide_001 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// buttons
	this.instance = new lib.Button_Go();
	this.instance.setTransform(1070,250,1,1,0,0,0,130,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// text_slogan
	this.Slogan_001 = new cjs.Text("Make you want to move your dancing feet", "normal 700 28px 'Roboto'");
	this.Slogan_001.name = "Slogan_001";
	this.Slogan_001.lineHeight = 39;
	this.Slogan_001.lineWidth = 894;
	this.Slogan_001.parent = this;
	this.Slogan_001.setTransform(32,82);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.Slogan_001);
	}

	this.timeline.addTween(cjs.Tween.get(this.Slogan_001).wait(1));

	// text_header
	this.Header_001 = new cjs.Text("Sun is shining the weather is sweet", "normal 700 44px 'Roboto'", "#FFFFFF");
	this.Header_001.name = "Header_001";
	this.Header_001.lineHeight = 60;
	this.Header_001.lineWidth = 894;
	this.Header_001.parent = this;
	this.Header_001.setTransform(32,22);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.Header_001);
	}

	this.timeline.addTween(cjs.Tween.get(this.Header_001).wait(1));

	// bg
	this.instance_1 = new lib.Slide_001_BG();
	this.instance_1.setTransform(485,125,1,1,0,0,0,485,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slide_001, new cjs.Rectangle(-200,-200,1218,508), null);


// stage content:
(lib._970x250multilanguagebanner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Win_001
	this.instance = new lib.Slide_001();
	this.instance.setTransform(485,125,1,1,0,0,0,485,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(285,-75,733,383);
// library properties:
lib.properties = {
	id: '22E16DA7A016AC4E8BADE7DB01406CDA',
	width: 970,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['22E16DA7A016AC4E8BADE7DB01406CDA'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;