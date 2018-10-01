class Cover {
	constructor() {};
	update() {
		// console.log(_mouse)
		if(_mouse.pressed
		&& _mouse.x > 10
		&& _mouse.x < 110
		&& _mouse.y > 100
		&& _mouse.y < 150)
			app.setState('2');
	};
	render() {
		//  FILL BACKGROUND
		_ctx = app.canvas.ctx;
		_ctx.fillStyle = '#141414';
		_ctx.fillRect(0,0,innerWidth,innerHeight);
		//  WRITE 'VOCIFEROUS'
		_ctx.fillStyle = 'red';
		_ctx.font = '40px futura';
		_ctx.fillText('Vociferous',10,60);
		
		if(app.audioContext) {
			//  DRAW SINGALONG BUTTON
			_ctx.fillStyle = '#31a2f2';
			_ctx.fillRect(10,100,100,50);
			_ctx.fillStyle = 'red';
			_ctx.fillText('WTW',10,140);
		} else {
			//  WRITE CLICK ME
			_ctx.fillStyle = 'red';
			_ctx.fillText('click anywhere to start',10,140);
		};
	};
}