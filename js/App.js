//  CACHED VARIABLES
let _cnv,  //  CANVAS VARIABLE
	_ctx,  //  CONTEXT VARIBLE
	_mouse = {x:0,y:0,pressed:false},  //  MOUSE TRACKING
	_i,_iL,  //  ITERATING VARIABLES
	_j,_jL,
	_x,_y,
	_n,_l;


class App {
	constructor() {
		//  THE AUDIO CONTEXT
		this.audioContext = null;

		//  THE PITCH DETECTOR
		this.pitchDetector = null;

		//  SET UP AND APPEND CANVAS TO DOCUMENT
		this.canvas = Canvas();
		document.body.appendChild(this.canvas);

		//  DEBUG DRAW BLUE CANVASS
		_ctx = this.canvas.ctx;
		_ctx.fillStyle = 'cornflowerblue';
		_ctx.fillRect(0,0,innerWidth,innerHeight);

		//  DRAW SPRITE SHEETS
		this.images = {
			measures: []
		};
		this.drawSprites();

		//  SET UP STATE SYSTEM
		this.state = 0;
		this.states = [
			'COVER',
			'SINGALONGMENU',
			'SINGALONG'
		];

		//  THE STATE WE ARE CURRENTLY RUNNING
		this.cover = new Cover();
		this.singAlong;

		//  SET UP AND START MAIN LOOP
		MainLoop.setUpdate(this.update,this);
		MainLoop.setDraw(this.render,this);
		MainLoop.start();

	};
	drawSprites() {
		this.images.measure = Canvas(512,256);
		_ctx = this.images.measure.ctx;
		_ctx.fillStyle = '#eee';
		_ctx.fillRect(0,0,512,256);
		_ctx.fillStyle = '#141414';
		_ctx.fillRect(0,0,4,256);
	};
	setState(state) {

		this.state = state;
		switch(this.state) {
			case '0':
				this.cover = new Cover();
			break;
			case '2':
				if(!this.singAlong) {
					console.log('singAlong')
					this.cover = null;
					this.singAlong = new SingAlong()
					
				}
			break;
		}
	};
	update(ts) {
		// if(this.pitchDetector
		// && this.pitchDetector.isPlaying)
		// 	this.pitchDetector.processAudio();

		// switch(this.state) {
			// case 0:
			if(this.cover)
				this.cover.update(ts);
			// break;
			// case 2:
				if(this.singAlong)
					this.singAlong.update(ts);
			// break;
		// }
		
	};
	render() {
		// switch(this.state) {
			// case 0:
			if(this.cover)
				this.cover.render();
			// break;
			// case 2:
				if(this.singAlong) {
					this.singAlong.render();
				}
			// break;
		// }
	};

};


let Canvas = (w=innerWidth, h=innerHeight) => {
	_cnv = document.createElement('canvas');
	_cnv.ctx = _cnv.getContext('2d');
	_cnv.width = w;
	_cnv.height = h;
	return _cnv;
};

let startAudio = () => {
	console.log('start audio')
	// if(app.audioContext === null) {
		// console.log('wtf',AudioContext)
		// app.canvas.onclick = stopAudio;
		// app.audioContext = new (window.AudioContext || window.webkitAudioContext)();
		// console.log('wtf2',app.audioContext)

	
		testAudio();
		

	// }
}, stopAudio = () => {
	console.log('stop audio')
	app.pitchDetector.stop();
	// app.pitchDetector = null;
	// app.canvas.onclick = startAudio;
	// app.audioContext.close();
	// app.audioContext = null;

};

let testAudio = () => {
	if(app.audioContext) {
		_ctx = app.audioContext;
		let osc = _ctx.createOscillator(),
			gain = _ctx.createGain();
		osc.connect(gain);
		osc.frequency.value = 220;
		gain.connect(_ctx.destination);
		gain.gain.value = 0.1;
		osc.start();
		setTimeout(()=>{osc.stop()},100);
	}
};


let mouseHandler = e => {
		if(!app.audioContext) {
			app.audioContext = new (window.AudioContext || window.webkitAudioContext)();
			startAudio();
		};
		e.preventDefault();
		
		switch(e.type) {
			
			case 'touchstart':
				_mouse.x = e.touches[0].clientX;
				_mouse.y = e.touches[0].clientY;
				_mouse.pressed = true;
			break;
			case 'mousedown':
				_mouse.x = e.clientX;
				_mouse.y = e.clientY;
				_mouse.pressed = true;
			break;
			case 'mouseup':
			case 'touchend':
				_mouse.pressed = false;
			break;
		}

		// if(!app.pitchDetector)
		// 	startAudio();
		// else stopAudio();
	},
	keyHandler = e => {
		// console.log('keypressed')
		if(!app.audioContext) {
			app.audioContext = new (window.AudioContext || window.webkitAudioContext)();
			startAudio();
		};
		e.preventDefault();
		switch(e.keyCode) {
			//  SPACE BAR
			case 32:
			// console.log(this.singAlong)
				if(app.singAlong && app.singAlong.started)
					app.singAlong.pause();
			break;
			//  LEFT ARROW
			case 37:
				if(app.singAlong && app.singAlong.started) {
					app.singAlong.back();
				}
			break;
			//  RIGHT ARROW
			case 39:
				if(app.singAlong && app.singAlong.started)
					app.singAlong.forward();
			break;
		}
	};

addEventListener('touchstart',mouseHandler,false);
addEventListener('touchend',mouseHandler,false);
addEventListener('mousedown',mouseHandler,false);
addEventListener('mouseup',mouseHandler,false);

addEventListener('keydown',keyHandler,false);


let app = new App();