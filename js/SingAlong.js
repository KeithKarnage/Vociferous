const noteH = 24,
	measureH = 13*noteH,
	measureW = 300,
	_font = '16px futura',
	topOffset = 50;

let pitch = 0;

class SingAlong {
	constructor() {
		this.song = 'WTW';
		this.data = songData[this.song];
		this.userPitch = [];

		this.paused = false;
		this._pausing = false;

		this.songTime = 0;
		this.measureTime = 60000 / this.data.speed * this.data.denominator;
		// console.log( )
		// this.measureLength = this.measureTime * measureW;
		this.measureOffset = 0;
		this.measureIndex = 0;

		this.drawMeasures(this.data);
		
		this.audio = new Audio('audio/WavingThroughAWindow.mp3');
		app.pitchDetector = new PitchDetector(app.audioContext,() => {
			
			setTimeout(()=>{
				this.audio.play();
				setTimeout( () => {
					app.singAlong.paused = false;
				},this.data.audioDelay);	
			},500);
			
			
		});
		

		// startAudio();
	};
	back() {
		this.pause();
		// console.log(this.audio.currentTime ,this.measureTime)
		this.audio.currentTime = this.audio.currentTime - this.measureTime/1000;
		this.songTime -= this.measureTime;
		this.measureIndex--;
		this.measureOffset -= measureW;
		this.pause();
	};
	forward() {
		this.pause();
		// console.log(this.audio.currentTime ,this.measureTime)
		this.audio.currentTime = this.audio.currentTime + this.measureTime/1000;
		this.songTime += this.measureTime;
		this.measureIndex++;
		this.measureOffset += measureW;
		this.pause();
	};
	getAverage(n) {
		if(this.paused)
			return n;
		// console.log(n)
		if(n && n>0) {
			if(this.userPitch[this.userPitch.length-1])
				return (this.userPitch[this.userPitch.length-1] + n)/2;
			else return n;
		} else return this.userPitch[this.userPitch.length-1];
		
		
		// console.log(n,avg)
	};
	update(ts) {
		

		//  IF WE'RE NOT PAUSED
		if(!this.paused) {
			//  MOVE THE SONG ALONG
			this.songTime += ts;
			this.measureOffset = this.songTime/this.measureTime*measureW - this.measureIndex*measureW;
			if(this.measureOffset > measureW + innerWidth/4) {
				this.measureOffset -= measureW;
				this.measureIndex++;
				//  END CASE
				if(this.measureIndex === this.data.measures.length) {
					this.measureIndex = 0;
					this.songTime = 0;
					this.pause();
				}
			}
			// console.log(this.audio.currentTime)
		}

		//  PROCESS AUDIO
		if(app.pitchDetector
		&& app.pitchDetector.isPlaying) {
			app.pitchDetector.processAudio();
			pitch = this.getAverage(app.pitchDetector.audioData.noteNum);
			if(!this.paused)
				this.userPitch.push(pitch);
		}
		
		this.updateMouse()
		
	};
	render() {
		_ctx = app.canvas.ctx;

		//  FILL BACKGROUND
		_ctx.fillStyle = '#1b2632';
		_ctx.fillRect(0,0,innerWidth,innerHeight);



		//  RENDER MEASURES
		for(_i=5; _i>=0; _i--) {

			_x = innerWidth/4 + _i*measureW - this.measureOffset;
			//  REUSING _y,  DOES NOT REPRESENT Y AXIS HERE
			//  MEASURE NUMBER BEING DRAWN
			_y = _i+this.measureIndex%this.data.measures.length;
			//  IF IT EXISTS DRAW IT
			if(app.images.measures[_y])
				_ctx.drawImage(app.images.measures[_y], _x, topOffset);

			//  DRAW THE PLAYHEAD
			_ctx.fillStyle = 'rgba(255,0,0,0.5)';
			_ctx.fillRect(innerWidth/4,0,2,innerHeight);
			
		};
		//  WRITE 'PAUSED' IN THE CORNER WHEN PAUSED
		if(this.paused) {
			_ctx.fillStyle = 'red';
			_ctx.fillText('paused',10,40);
		// } else 
			
		}
		if(app.pitchDetector) {
			_ctx.fillStyle = 'red';
			_ctx.strokeStyle = 'red';

			
			//  _n USED TO POSITION _y
			_n = pitch;
			//  _y USED TO POSITION PITCH INPUT HEAD
			_y = topOffset + measureH - ((_n+12+this.data.yOffset)%24 )*noteH/2 - noteH/2;

			//  DRAW PITCH INPUT
			_ctx.beginPath();
			_ctx.moveTo(innerWidth/4,_y);
			_n = innerWidth/4;
			for(_i=2,_iL=52; _i<_iL; _i++) {
				_l = topOffset + measureH - ((this.userPitch[this.userPitch.length-_i]+12+this.data.yOffset) % 24)*noteH/2 - noteH/2;
				// console.log(innerWidth/4 - _l[0],innerWidth/4 , _l[0])
				// _n -= _l;
				_ctx.lineTo(innerWidth/4-(_i-1)*1000/60 /this.measureTime * measureW,_l);
			}
			_ctx.stroke();

			// _y = 100;
			_ctx.fillRect(innerWidth/4-4,_y-4,8,8);
			// _ctx.fillText(app.pitchDetector.audioData.noteName,innerWidth/4+10,_y);
			// console.log(Math.round(this.userPitch[this.userPitch.length-1]));
			_ctx.fillText(notes[Math.round(pitch)%12],innerWidth/4+10,_y);

		}

	};

	pause() {
		//  PAUSE OR UNPAUSE
		if(this.paused) {
			this.audio.play();
			this.paused = false;
		} else {
			this.audio.pause();
			this.paused = true;
		}
	};

	updateMouse() {
		//  WHILE THE MOUSE IS DEPRESSED
		if(_mouse.pressed) {

			//  IF WE HAVEN'T PAUSED OR UNPAUSED IT YET
			if(!this._pausing) {
				//  NOW WE ARE
				this._pausing = true;
				this.pause();
			}
		//  IF THE MOUSE ISN'T PRESSED AND WE WERE PAUSING
		} else if(this._pausing)
			//  NOW WE ARE DONE PAUSING
			this._pausing = false;
	};

	drawMeasures(data) {
		//  CLEAR OUT ANY OLD IMAGES IN app.images.measures
		app.images.measusures = [];
		//  FOR EACH MEASURE IN THIS SONG
		data.measures.forEach((M,i) => {
			//  EACH MEASURE GETS IT'S OWN CANVAS
			_cnv = Canvas(1024,measureH);
			app.images.measures.push(_cnv);
			_ctx = _cnv.ctx;
			// console.log(app)

			//  COLOUR CANVAS WHITEISH LINES
			for(_i=0; _i<(measureH/noteH)|0; _i++) {
				_ctx.fillStyle = _i%2 === 0 ? '#eee' : '#ddd';
				_ctx.fillRect(0,_i*noteH,measureW,noteH);
			}
			_ctx.fillStyle = 'black';
			_ctx.fillText(i+1,40,40);
			_x = 0;

			//  BLACK BAR TO SEPARATE MEASURES
			_ctx.fillRect(0,0,4,measureH);

			//  TIME SIGNATURE LINES
			_ctx.fillStyle = '#141414';
			for(_j=0,_jL=this.data.numerator; _j<_jL; _j++)
				_ctx.fillRect(_x+_j*measureW/_jL, 0, 1, measureH);

			//  DRAW EACH NOTE
			M.forEach(note => {
				
				if(note.note !== 'rest') {
					//  0-23  MODULO-ED NOTE MIDI NUMBER
					_n = (note.note+data.root)%24;
					_y = measureH - ((_n+this.data.yOffset)%24 )*noteH/2 - noteH;

					_ctx.fillStyle = 'blue';
					_ctx.strokeStyle = 'black';
					_ctx.fillRect(_x,_y,note.length*measureW,noteH);
					_ctx.strokeRect(_x,_y,note.length*measureW,noteH);
					_ctx.font = _font;
					_ctx.fillStyle = 'black';
					_ctx.fillText(notes[_n],_x+4,_y+12);
					_ctx.fillStyle = 'white';
					_ctx.fillText(note.text,_x+noteH,_y+12);

				}
				//  ADD THIS NOTE'S LENGTH TO THE STACK
				_x += note.length * measureW;
				// console.log(note.note,_x)

			})
		})
	}
};
