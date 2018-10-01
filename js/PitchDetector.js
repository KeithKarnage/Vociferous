/*
The MIT License (MIT)

Copyright (c) 2014 Chris Wilson
Stolen and altered: 2018 Keith Karding

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/


class PitchDetector {
	constructor(audioContext,onStart) {
		// console.log('pitch detector')
		this.audioContext = audioContext;
		this.onStart = onStart;
		this.audioBuffer = new Float32Array( 512 );
		this.mediaStreamSource = null;
		this.isPlaying = false;
		// this.sourceNode = null;
		this.analyser = null;
		this.audioData = {
				frequency:null,
				noteNum: 0,
				noteName: ''
			};
		// this.toggleInput();
		this.start();

	};
	// error(e) {
	//     alert('Stream generation failed.',e);
	// };
	getUserMedia(dictionary) {
	    try {
	        // navigator.mediaDevices.getUserMedia = 
	        	// navigator.mediaDevices.getUserMedia ||
	        	// navigator.mediaDevices.webkitGetUserMedia ||
	        	// navigator.mediaDevices.mozGetUserMedia;
	        // navigator.getUserMedia(dictionary, callback, error);
	        navigator.mediaDevices.getUserMedia(dictionary)
	        .then( stream => {
				_ctx = this.audioContext;
			    // Create an AudioNode from the stream.
			    this.mediaStreamSource = _ctx.createMediaStreamSource(stream);
			    
			    // Connect it to the destination.
			    this.analyser = _ctx.createAnalyser();
			    this.analyser.fftSize = 512;
			    this.mediaStreamSource.connect( this.analyser );
			    this.isPlaying = true;
			    this.onStart();
	        }).catch( err => {
	        	console.log('Stream generation failed.',err);
	        });
	    } catch (err) {
	        alert('getUserMedia threw exception :' + err);
	    }
	};
	stop() {
		if(this.isPlaying) {
			console.log('toggle off')
	        //stop playing and return
	        // this.mediaStreamSource.stop( 0 );
	        this.mediaStreamSource.disconnect(this.analyser);
	        // this.sourceNode.stop( 0 );
	        // this.sourceNode = null;
	        this.analyser = null;
	        this.isPlaying = false;
	        return;
	    }
	};
	start() {
	    this.getUserMedia(
	    	{
	            'audio':true
	        });
	};

	processAudio() {
		this.analyser.getFloatTimeDomainData(this.audioBuffer);
		// console.log(amdf(this.audioBuffer)|0,dynamicWavelet(this.audioBuffer)|0,macloed(this.audioBuffer).freq|0);
		this.noteFromPitch(amdf(this.audioBuffer));
	};
	noteFromPitch( frequency ) {
		this.audioData.frequency = frequency;
		var noteNum = 12 * (Math.log( frequency / 440 )/Math.log(2) );
		this.audioData.noteNum = roundToTwoPlaces(noteNum) + 69;
		this.audioData.noteName = notes[Math.round(this.audioData.noteNum)%12];
		// console.log(this.audioData.noteNum);

		// this.centsOffFromPitch(frequency,Math.round(noteNum)+69);
		// this.audioData.noteName = notes[Math.round(this.audioData.noteNum) % 12];

		// return Math.round( noteNum ) + 69;
	};
};
let roundToTwoPlaces = (value) => {
	return Math.round(value*100)/100;
};










