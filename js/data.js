let notes = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E','F','F#','G','G#','A','A#','B'],
	songData = {
		WTW: {
		// e4 = 64
		root: 69,
		yOffset: 12,
		audioDelay: 1150,
		speed: 144.8,
		numerator: 4,
		denominator: 4,
		measures: [
			
			// [
			// 	{note: 0, length: 1/24, text:"e"},
			// 	{note: 1, length: 1/24, text:"f"},
			// 	{note: 2, length: 1/24, text:"f#"},
			// 	{note: 3, length: 1/24, text:"g"},
			// 	{note: 4, length: 1/24, text:"g#"},
			// 	{note: 5, length: 1/24, text:"a"},
			// 	{note: 6, length: 1/24, text:"a#"},
			// 	{note: 7, length: 1/24, text:"b"},
			// 	{note: 8, length: 1/24, text:"c"},
			// 	{note: 9, length: 1/24, text:"c#"},
			// 	{note: 10, length: 1/24, text:"d"},
			// 	{note: 11, length: 1/24, text:"d#"},
			// 	{note: 12, length: 1/24, text:"e"},
			// 	{note: 13, length: 1/24, text:"f"},
			// 	{note: 14, length: 1/24, text:"f#"},
			// 	{note: 15, length: 1/24, text:"g"},
			// 	{note: 16, length: 1/24, text:"g#"},
			// 	{note: 17, length: 1/24, text:"a"},
			// 	{note: 18, length: 1/24, text:"a#"},
			// 	{note: 19, length: 1/24, text:"b"},
			// 	{note: 20, length: 1/24, text:"c"},
			// 	{note: 21, length: 1/24, text:"c#"},
			// 	{note: 22, length: 1/24, text:"d"},
			// 	{note: 23, length: 1/24, text:"d#"},
			// ],
			[
				{note: 'rest', length: 1}
			],
			[
				{note: 'rest', length: 1}
			],
			[
				{note: 'rest', length: 1}
			],
			[
				{note: 'rest', length: 1}
			],
			// 5
			[
				{note: 'rest', length: 1/8},
				{note: -5, length: 1/8, text:"I've"},
				{note: 4, length: 1/8, text:'learned'},
				{note: 2, length: 1/8, text:'to'},
				{note: 2, length: 1/8, text:'slam'},
				{note: 0, length: 1/8, text:'on'},
				{note: -1, length: 1/8, text:'the'},
				{note: 0, length: 1/8, text:'breaks.'}
			],
			[
				{note: 'rest', length: 1}
			],
			[
				{note: 'rest', length: 1/8},
				{note: 4, length: 1/8, text:'Be-'},
				{note: 4, length: 1/8, text:'fore'},
				{note: 2, length: 1/8, text:'I'},
				{note: 2, length: 1/4, text:'e-'},
				{note: 0, length: 1/8, text:'ven'},
				{note: 0, length: 3/8, text:'turn'}
			],
			[
				{note: 'rest', length: 1/4}, //  NOT ACTUALLY A REST,
				{note: 2, length: 1/8, text:'the'},
				{note: 2, length: 1/8, text:'key.'},
				{note: 'rest', length: 1/2, text:''},
			],
			// 9
			[
				{note: 'rest', length: 1/8},
				{note: 4, length: 1/8, text:'Be-'},
				{note: 4, length: 1/8, text:'fore'},
				{note: 2, length: 1/8, text:'I'},
				{note: 2, length: 1/8, text:'make'},
				{note: 0, length: 1/8, text:'the'},
				{note: -1, length: 1/8, text:'mis-'},
				{note: 0, length: 1/8, text:'take'},
			],
			[
				{note: 'rest', length: 1}
			],
			[
				{note: 'rest', length: 1/8},
				{note: 4, length: 1/8, text:'Be-'},
				{note: 4, length: 1/8, text:'fore'},
				{note: 2, length: 1/8, text:'I'},
				{note: 2, length: 1/8, text:'lead'},
				{note: 0, length: 1/8, text:'with'},
				{note: -1, length: 1/8, text:'the'},
				{note: 0, length: 3/16, text:'worst'}
			],
			[
				{note: 'rest', length: 1/8}, //  NOT ACTUALLY A REST,
				{note: 0, length: 1/4, text:'of'},
				{note: -1, length: 1/16, text:'me'},
				{note: -3, length: 1/16, text:'-'},
				{note: -5, length: 1/4, text:'-'},
				{note: 'rest', length: 1/4}
			],
			// 13
			[
				{note: 'rest', length: 1/8},
				{note: 4, length: 1/8, text:'Give'},
				{note: 4, length: 1/8, text:'them'},
				{note: 7, length: 1/8, text:'no'},
				{note: 5, length: 1/8, text:'rea-'},
				{note: 4, length: 1/8, text:'son'},
				{note: 0, length: 1/8, text:'to'},
				{note: 2, length: 1/8, text:'stare.'}
			],
			[
				{note: 'rest', length: 1}
			],
			[
				{note: 'rest', length: 1/8},
				{note: 4, length: 1/8, text:'No'},
				{note: 4, length: 1/16, text:'slip-'},
				{note: 2, length: 1/16, text:'ing'},
				{note: 0, length: 1/4, text:'up'},
				{note: -1, length: 1/8, text:'if'},
				{note: 0, length: 1/12, text:'you'},
				{note: 0, length: 5/16, text:'slip'}
			],
			[
				{note: 'rest', length: 1/4}, //  NOT ACTUALLY A REST,
				{note: 0, length: 1/8, text:'a-'},
				{note: 0, length: 1/16, text:'way'},
				{note: -3, length: 1/16, text:'-'},
				{note: -5, length: 1/8, text:'-'},
				{note: 'rest', length: 3/8}
			],
			// 17
			[
				{note: 'rest', length: 1/8},
				{note: 2, length: 1/8, text:'So'},
				{note: 2, length: 1/8, text:'I'},
				{note: 4, length: 1/8, text:'got'},
				{note: 2, length: 1/8, text:'noth-'},
				{note: 0, length: 1/8, text:'ing'},
				{note: 0, length: 1/8, text:'to'},
				{note: -5, length: 1/8, text:'share.'}
			],
			[
				{note: 'rest', length: 1}
			],
			[
				{note: 'rest', length: 1/8},
				{note: 4, length: 1/8, text:'No'},
				{note: 4, length: 1/8, text:'I'},
				{note: 7, length: 1/8, text:'got'},
				{note: 5, length: 1/8, text:'noth-'},
				{note: 4, length: 1/8, text:'ing'},
				{note: 0, length: 1/8, text:'to'},
				{note: 2, length: 4/8, text:'say-'}
			],
			[
				{note: 'rest', length: 3/8},
				{note: 0, length: 3/8, text:'-'}

			],
			// 21  PRE-CHORUS
			[
				{note: 'rest', length: 1/4},
				{note: -5, length: 1/4, text:'Step'},
				{note: -5, length: 1/4, text:'out,'},
				{note: -5, length: 1/4, text:'step'}
			],
			[
				{note: 0, length: 1/8, text:'out'},
				{note: 2, length: 1/8, text:'of'},
				{note: 4, length: 1/8, text:'the'},
				{note: 2, length: 1/8, text:'sun'},
				{note: 'rest', length: 1/8},
				{note: 0, length: 1/8, text:'if'},
				{note: -1, length: 1/8, text:'you'},
				{note: -5, length: 1/4, text:'keep'}
			],
			[
				{note: 'rest', length: 1/8},	
				{note: -5, length: 1/8, text:'get-'},
				{note: -5, length: 1/8, text:'ing'},
				{note: -3, length: 1/4, text:'burned.'}
			],
			[
				{note: 'rest', length: 1}
			],
			// 25  PRE-CHORUS CONTIUED
			[
				{note: 'rest', length: 1/4},
				{note: -5, length: 1/4, text:'Step'},
				{note: -5, length: 1/4, text:'out,'},
				{note: -5, length: 1/4, text:'step'}
			],
			[
				{note: 0, length: 1/8, text:'out'},
				{note: 2, length: 1/8, text:'of'},
				{note: 4, length: 1/8, text:'the'},
				{note: 2, length: 1/8, text:'sun'},
				{note: 'rest', length: 1/4},
				{note: -1, length: 1/8, text:'be-'},
				{note: -5, length: 1/4, text:'cause'}
			],
			[
				{note: 'rest', length: 1/8},
				{note: 0, length: 1/4, text:'you'},
				{note: 0, length: 1/4, text:'learn,'},
				{note: 'rest', length: 1/8},
				{note: -1, length: 1/8, text:'be-'},
				{note: -5, length: 1/4, text:'cause'}
			],
			[
				{note: 'rest', length: 1/8},
				{note: 2, length: 1/4, text:'you'},
				{note: 2, length: 7/8, text:'learn-'}
			],
			// 29  CHORUS
			[
				{note: 'rest', length: 1/4},
				{note: 0, length: 1/4, text:'-'},
				{note: 'rest', length: 1/2},
			],
			[
				{note: 'rest', length: 1/4},
				{note: 4, length: 1/8, text:'On'},
				{note: 7, length: 1/8, text:'the'},
				{note: 7, length: 1/8, text:'out-'},
				{note: 4, length: 1/8, text:'-'},
				{note: 4, length: 1/4, text:'side'},
			],
			[
				{note: 4, length: 1/8, text:'al-'},
				{note: 2, length: 1/8, text:'ways'},
				{note: 2, length: 1/8, text:'look-'},
				{note: 0, length: 1/8, text:'ing'},
				{note: 0, length: 1/4, text:'in,'},
				{note: -3, length: 1/8, text:'will'},
				{note: -5, length: 1/8, text:'I'},
			],
			[
				{note: 'rest', length: 1/4},
				{note: 4, length: 1/8, text:'ev-'},
				{note: 7, length: 1/8, text:'er'},
				{note: 7, length: 1/8, text:'be-'},
				{note: 4, length: 1/8, text:'-'},
				{note: 4, length: 1/4, text:'more'},
			],
			//  33 CHORUS CONTINUED
			[
				{note: 4, length: 1/8, text:'than'},
				{note: 2, length: 1/8, text:"I've"},
				{note: 2, length: 1/8, text:'al-'},
				{note: 0, length: 1/8, text:'ways'},
				{note: 0, length: 1/4, text:'been?'},
				{note: -3, length: 1/8, text:'Cause'},
				{note: -5, length: 1/8, text:"I'm"},
			],
			[
				{note: 4, length: 1/4, text:'tap'},
				{note: 4, length: 1/4, text:'tap'},
				{note: 4, length: 1/8, text:'tap-'},
				{note: 2, length: 1/8, text:'ing'},
				{note: 0, length: 1/8, text:'on'},
				{note: -3, length: 1/4, text:'the'},
			],
			[
				{note: 'rest', length: 1/8},
				{note: 'rest', length: 1/8},
				{note: 0, length: 3/8, text:'glass.'},
				{note: 'rest', length: 1/4},
				{note: 0, length: 1/8, text:"I'm"}
			],
			[
				{note: 11, length: 1/4, text:'wav-'},
				{note: 12, length: 1/4, text:'ing'},
				{note: 4, length: 1/4, text:'through'},
				{note: 4, length: 1/8, text:'a'},
				{note: 4, length: 1/4, text:'win-'}
			],
			//  37 CHORUS CONTINUED
			[
				{note: 'rest', length: 1/8},
				{note: 2, length: 1/4, text:'dow-'},
				{note: 0, length: 3/8, text:'-'},
				{note: 0, length: 1/4, text:'I'}
			],
			[
				{note: 'rest', length: 1/4},
				{note: 4, length: 1/8, text:'try'},
				{note: 7, length: 1/8, text:'to'},
				{note: 7, length: 1/4, text:'speak'},
				{note: 4, length: 1/4, text:'but'}
			],
			[
				{note: 4, length: 1/8, text:'no-'},
				{note: 2, length: 1/8, text:'bo-'},
				{note: 2, length: 1/8, text:'dy'},
				{note: 0, length: 1/8, text:'can'},
				{note: 0, length: 1/4, text:'hear.'},
				{note: -3, length: 1/8, text:'So'},
				{note: -5, length: 1/8, text:'I'}
			],
			[
				{note: 'rest', length: 1/8},
				{note: 7, length: 1/8, text:'wait'},
				{note: 7, length: 1/8, text:'a-'},
				{note: 7, length: 1/8, text:'round-'},
				{note: 9, length: 1/4, text:'-'},
				{note: 4, length: 1/8, text:'for'},
				{note: 4, length: 1/16, text:'an'},
				{note: 4, length: 3/16, text:'ans-'}
			],
			//  41 CHORUS CONTINUED
			[
				{note: 'rest', length: 1/8},
				{note: 5, length: 1/8, text:'wer'},
				{note: 4, length: 1/8, text:'to'},
				{note: 2, length: 1/8, text:'ap-'},
				{note: 2, length: 1/4, text:'pear'},
				{note: 0, length: 1/8, text:'while'},
				{note: 2, length: 1/8, text:"I'm"}
			],
			[
				{note: 4, length: 1/4, text:'watch'},
				{note: 4, length: 1/4, text:'watch'},
				{note: 4, length: 1/8, text:'watch-'},
				{note: 2, length: 1/8, text:'ing'},
				{note: 0, length: 1/8, text:'peo-'},
				{note: -3, length: 1/4, text:'ple'}
			],
			[
				{note: 'rest', length: 1/8},
				{note: 0, length: 3/8, text:'pass.'},
				{note: 'rest', length: 1/4},
				{note: 'rest', length: 1/8},
				{note: 0, length: 1/8, text:"I'm"},
			],
			[
				{note: 11, length: 1/4, text:'wav-'},
				{note: 12, length: 1/4, text:'ing'},
				{note: 4, length: 1/4, text:'through'},
				{note: 4, length: 1/8, text:'a'},
				{note: 4, length: 1/4, text:'win-'}
			],
			//  45
			[
				{note: 'rest', length: 1/8},
				{note: 2, length: 1/4, text:'dow-'},
				{note: 5, length: 1/4, text:'-'},
				{note: 4, length: 1/8, text:'-'},
				{note: 2, length: 1/8, text:'-'},
				{note: 0, length: 1/8, text:'-'}

			],
			[
				{note: 'rest', length: 1/2},
				{note: 'rest', length: 1/4},
				{note: 'rest', length: 1/8},
				{note: 2, length: 1/8, text:'Can'}
			],
			[
				{note: 0, length: 1/4, text:'a-'},
				{note: 2, length: 1/8, text:'ny-'},
				{note: 4, length: 1/4, text:'bo-'},
				{note: 5, length: 1/4, text:'dy'},
				{note: 4, length: 1/8, text:'see?'},
			],
			[
				{note: 'rest', length: 1/4},
				{note: 'rest', length: 1/8},
				{note: 0, length: 1/8, text:'Is'},
				{note: 4, length: 1/8, text:'a-'},
				{note: 7, length: 1/8, text:'ny-'},
				{note: 7, length: 1/8, text:'bo-'},
				{note: 4, length: 1/8, text:'dy'}
			],
			[
				{note: 2, length: 1/8, text:'wav-'},
				{note: 2, length: 1/8, text:'ing'},
				{note: 2, length: 3/4, text:'-'}
			],
			//  50
			[
				{note: 4, length: 1/4, text:'back'},
				{note: 0, length: 1/8, text:'at'},
				{note: 0, length: 3/8, text:'me?'},
				{note: 'rest', length: 1/4},
			],
			[
				{note: 'rest', length: 1}
			],
			[
				{note: 'rest', length: 1}
			],
			[
				{note: 'rest', length: 1}
			],
			//  54
			[
				{note: 'rest', length: 1/4},
				{note: -5, length: 1/8, text:'We'},
				{note: 4, length: 1/8, text:'start'},
				{note: 2, length: 1/8, text:'with'},
				{note: 2, length: 1/4, text:'stars'},
				{note: 0, length: 1/16, text:'in'},
				{note: -1, length: 1/16, text:'our'}
			],
			[
				{note: 0, length: 1/4, text:'eyes.'},
			],
			[
				{note: 'rest', length: 1/4},
				{note: 4, length: 1/8, text:'We'},
				{note: 4, length: 1/8, text:'start'},
				{note: 2, length: 1/8, text:'be-'},
				{note: 2, length: 1/8, text:'liev-'},
				{note: 0, length: 1/8, text:'ing'},
				{note: 0, length: 1/8, text:'that'}
			],
			[
				{note: -1, length: 3/16, text:'we'},
				{note: 0, length: 1/8, text:'be-'},
				{note: 2, length: 1/2, text:'long.'}
			],
			// 58
			[
				{note: 'rest', length: 1/16},
				{note: 4, length: 1/16, text:'But'},
				{note: 4, length: 1/16, text:"ev'-"},
				{note: 2, length: 1/16, text:'ry-'},
				{note: 2, length: 1/8, text:'-'},
				{note: 2, length: 1/4, text:'sun'},
				{note: 0, length: 1/8, text:'does-'},
				{note: 7, length: 1/8, text:"n't"},
				{note: 7, length: 1/8, text:'rise'}
			],
			[
				{note: 7, length: 1/8, text:'-'},
				{note: 4, length: 1/16, text:'-'},
				{note: 2, length: 1/16, text:'-'},
				{note: 2, length: 1/4, text:'-'}
			],
			[
				{note: 'rest', length: 1/8},
				{note: 7, length: 1/8, text:'And'},
				{note: 7, length: 1/8, text:'no'},
				{note: 7, length: 1/8, text:'one'},
				{note: 7, length: 1/8, text:'tells'},
				{note: 0, length: 1/8, text:'you'},
				{note: 0, length: 1/8, text:'where'},
				{note: 5, length: 1/8, text:'you'}
			],
			[
				{note: 5, length: 1/8, text:'-'},
				{note: 4, length: 1/4, text:'went'},
				{note: 4, length: 1/8, text:'wro-'},
				{note: 2, length: 1/8, text:'ng-'},
				{note: 4, length: 1/16, text:'-'},
				{note: 2, length: 1/16, text:'-'},
				{note: 0, length: 1/4, text:'-'}
			],
			//  62  PRECHORUS
			[
				{note: 'rest', length: 1/4},
				{note: -5, length: 1/4, text:'Step'},
				{note: -5, length: 1/4, text:'out,'},
				{note: -5, length: 1/4, text:'step'}
			],
			[
				{note: 0, length: 1/8, text:'out'},
				{note: 2, length: 1/8, text:'of'},
				{note: 4, length: 1/8, text:'the'},
				{note: 2, length: 1/8, text:'sun'},
				{note: 'rest', length: 1/8},
				{note: 0, length: 1/8, text:'if'},
				{note: -1, length: 1/8, text:'you'},
				{note: -5, length: 1/4, text:'keep'}
			],
			[
				{note: 'rest', length: 1/8},	
				{note: -5, length: 1/8, text:'get-'},
				{note: -5, length: 1/8, text:'ing'},
				{note: -3, length: 1/4, text:'burned.'}
			],
			[
				{note: 'rest', length: 1}
			],
			//  66  PRE CHORUS
			[
				{note: 'rest', length: 1/4},
				{note: -5, length: 1/4, text:'Step'},
				{note: -5, length: 1/4, text:'out,'},
				{note: -5, length: 1/4, text:'step'}
			],
			[
				{note: 0, length: 1/8, text:'out'},
				{note: 2, length: 1/8, text:'of'},
				{note: 4, length: 1/8, text:'the'},
				{note: 2, length: 1/8, text:'sun'},
				{note: 'rest', length: 1/4},
				{note: -1, length: 1/8, text:'be-'},
				{note: -5, length: 1/4, text:'cause'}
			],
			[
				{note: 'rest', length: 1/8},
				{note: 0, length: 1/4, text:'you'},
				{note: 0, length: 1/4, text:'learn,'},
				{note: 'rest', length: 1/8},
				{note: 0, length: 1/8, text:'be-'},
				{note: 7, length: 1/4, text:'cause'}
			],
			[
				{note: 'rest', length: 1/8},
				{note: 4, length: 1/4, text:'you'},
				{note: 2, length: 3/8, text:'learn.-'},
				{note: 4, length: 1/16, text:'-'},
				{note: 2, length: 1/16, text:'-'},
				{note: 0, length: 1/8, text:'-'}
			],
			//  70
			[
				{note: 'rest', length: 1/4},
				{note: 4, length: 1/8, text:'On'},
				{note: 7, length: 1/8, text:'the'},
				{note: 7, length: 1/8, text:'out-'},
				{note: 4, length: 1/8, text:'-'},
				{note: 4, length: 1/4, text:'side'},
			],
			[
				{note: 4, length: 1/8, text:'al-'},
				{note: 2, length: 1/8, text:'ways'},
				{note: 2, length: 1/8, text:'look-'},
				{note: 0, length: 1/8, text:'ing'},
				{note: 0, length: 1/4, text:'in,'},
				{note: -3, length: 1/8, text:'will'},
				{note: -5, length: 1/8, text:'I'},
			],
			[
				{note: 'rest', length: 1/4},
				{note: 4, length: 1/8, text:'ev-'},
				{note: 7, length: 1/8, text:'er'},
				{note: 7, length: 1/8, text:'be-'},
				{note: 4, length: 1/8, text:'-'},
				{note: 4, length: 1/4, text:'more'},
			],
			//  73
			[
				{note: 4, length: 1/8, text:'than'},
				{note: 2, length: 1/8, text:"I've"},
				{note: 2, length: 1/8, text:'al-'},
				{note: 0, length: 1/8, text:'ways'},
				{note: 0, length: 1/4, text:'been?'},
				{note: -3, length: 1/8, text:'Cause'},
				{note: -5, length: 1/8, text:"I'm"},
			],
			[
				{note: 4, length: 1/4, text:'tap'},
				{note: 4, length: 1/4, text:'tap'},
				{note: 4, length: 1/8, text:'tap-'},
				{note: 2, length: 1/8, text:'ing'},
				{note: 0, length: 1/8, text:'on'},
				{note: -3, length: 1/4, text:'the'},
			],
			[
				{note: 'rest', length: 1/8},
				{note: 'rest', length: 1/8},
				{note: 0, length: 3/8, text:'glass.'},
				{note: 'rest', length: 1/4},
				{note: 0, length: 1/8, text:"I'm"}
			],
			//  76
			[
				{note: 11, length: 1/4, text:'wav-'},
				{note: 12, length: 1/4, text:'ing'},
				{note: 4, length: 1/4, text:'through'},
				{note: 4, length: 1/8, text:'a'},
				{note: 4, length: 1/4, text:'win-'}
			],
			[
				{note: 'rest', length: 1/8},
				{note: 2, length: 1/4, text:'dow-'},
				{note: 0, length: 3/8, text:'-'},
				{note: 0, length: 1/4, text:'I'}
			],
			[
				{note: 'rest', length: 1/4},
				{note: 4, length: 1/8, text:'try'},
				{note: 7, length: 1/8, text:'to'},
				{note: 7, length: 1/4, text:'speak'},
				{note: 4, length: 1/4, text:'but'}
			],
			[
				{note: 4, length: 1/8, text:'no-'},
				{note: 2, length: 1/8, text:'bo-'},
				{note: 2, length: 1/8, text:'dy'},
				{note: 0, length: 1/8, text:'can'},
				{note: 0, length: 1/4, text:'hear.'},
				{note: -3, length: 1/8, text:'So'},
				{note: -5, length: 1/8, text:'I'}
			],
			// 80
			[
				{note: 'rest', length: 1/8},
				{note: 7, length: 1/8, text:'wait'},
				{note: 7, length: 1/8, text:'a-'},
				{note: 7, length: 1/8, text:'round-'},
				{note: 9, length: 1/4, text:'-'},
				{note: 4, length: 1/8, text:'for'},
				{note: 4, length: 1/16, text:'an'},
				{note: 4, length: 3/16, text:'ans-'}
			],
			[
				{note: 'rest', length: 1/8},
				{note: 5, length: 1/8, text:'wer'},
				{note: 4, length: 1/8, text:'to'},
				{note: 2, length: 1/8, text:'ap-'},
				{note: 2, length: 1/4, text:'pear'},
				{note: 0, length: 1/8, text:'while'},
				{note: 2, length: 1/8, text:"I'm"}
			],
			[
				{note: 4, length: 1/4, text:'watch'},
				{note: 4, length: 1/4, text:'watch'},
				{note: 4, length: 1/8, text:'watch-'},
				{note: 2, length: 1/8, text:'ing'},
				{note: 0, length: 1/8, text:'peo-'},
				{note: -3, length: 1/4, text:'ple'}
			],
			//  83
			[
				{note: 'rest', length: 1/8},
				{note: 0, length: 3/8, text:'pass.'},
				{note: 'rest', length: 1/4},
				{note: 'rest', length: 1/8},
				{note: 0, length: 1/8, text:"I'm"},
			],
			[
				{note: 11, length: 1/4, text:'wav-'},
				{note: 12, length: 1/4, text:'ing'},
				{note: 4, length: 1/4, text:'through'},
				{note: 4, length: 1/8, text:'a'},
				{note: 4, length: 1/4, text:'win-'}
			],
			[
				{note: 'rest', length: 1/8},
				{note: 2, length: 1/4, text:'dow-'},
				{note: 5, length: 1/4, text:'-'},
				{note: 4, length: 1/8, text:'-'},
				{note: 2, length: 1/8, text:'-'},
				{note: 0, length: 1/8, text:'-'}

			],
			[
				{note: 'rest', length: 1/2},
				{note: 'rest', length: 1/4},
				{note: 'rest', length: 1/8},
				{note: 2, length: 1/8, text:'Can'}
			],
			//  87
			[
				{note: 0, length: 1/4, text:'a-'},
				{note: 2, length: 1/8, text:'ny-'},
				{note: 4, length: 1/4, text:'bo-'},
				{note: 5, length: 1/4, text:'dy'},
				{note: 4, length: 1/8, text:'see?'},
			],
			[
				{note: 'rest', length: 1/4},
				{note: 'rest', length: 1/8},
				{note: 0, length: 1/8, text:'Is'},
				{note: 4, length: 1/8, text:'a-'},
				{note: 7, length: 1/8, text:'ny-'},
				{note: 7, length: 1/8, text:'bo-'},
				{note: 4, length: 1/8, text:'dy'}
			],
			[
				{note: 2, length: 1/8, text:'wav-'},
				{note: 2, length: 1/8, text:'ing'},
				{note: 2, length: 1/2, text:'-'},
				{note: 0, length: 1/8, text:'When'},
				{note: 0, length: 1/8, text:"you're"}
			],
			[
				{note: -5, length: 1/16, text:'fal-'},
				{note: -5, length: 1/16, text:'ling'},
				{note: -5, length: 1/8, text:'in'},
				{note: -5, length: 1/8, text:'a'},
				{note: -10, length: 1/8, text:'for-'},
				{note: -12, length: 1/8, text:'est'},
				{note: 'rest', length: 1/4},
				{note: -12, length: 1/16, text:'and'},
				{note: -12, length: 1/16, text:"there's"}
			],
			//  91
			[
				{note: -10, length: 1/8, text:'no-'},
				{note: -10, length: 1/8, text:'bo-'},
				{note: -10, length: 1/8, text:'dy'},
				{note: -8, length: 1/8, text:'a-'},
				{note: -8, length: 1/8, text:'round'},
				{note: 'rest', length: 1/4},
				{note: -8, length: 1/16, text:'do'},
				{note: -8, length: 1/16, text:'you'}
			],
			[
				{note: -8, length: 1/8, text:'e-'},
				{note: -8, length: 1/8, text:'ver'},
				{note: -8, length: 1/8, text:'real-'},
				{note: -7, length: 1/8, text:'ly'},
				{note: -7, length: 1/8, text:'crash'},
				{note: 'rest', length: 1/8},
				{note: -12, length: 1/8, text:'or'},
				{note: -10, length: 1/8, text:'e-'}
			],
			[
				{note: -10, length: 1/8, text:'ven'},
				{note: -10, length: 1/8, text:'make'},
				{note: -12, length: 1/8, text:'a'},
				{note: -12, length: 1/8, text:'sound?'},
				{note: 'rest', length: 1/4},
				{note: -12, length: 1/8, text:'When'},
				{note: -12, length: 1/8, text:"you're"}
			],
			//  94
			[
				{note: -8, length: 1/16, text:'fal-'},
				{note: -8, length: 1/16, text:'ling'},
				{note: -8, length: 1/8, text:'in'},
				{note: -7, length: 1/8, text:'a'},
				{note: -7, length: 1/8, text:'for-'},
				{note: -12, length: 1/8, text:'est'},
				{note: 'rest', length: 1/4},
				{note: -12, length: 1/16, text:'and'},
				{note: -12, length: 1/16, text:"there's"}
			],
			[
				{note: -10, length: 1/8, text:'no-'},
				{note: -10, length: 1/8, text:'bo-'},
				{note: -10, length: 1/8, text:'dy'},
				{note: -5, length: 1/8, text:'a-'},
				{note: -8, length: 1/8, text:'round'},
				{note: 'rest', length: 1/4},
				{note: -12, length: 1/16, text:'do'},
				{note: -12, length: 1/16, text:'you'}
			],
			[
				{note: -5, length: 1/8, text:'e-'},
				{note: -5, length: 1/8, text:'ver'},
				{note: -5, length: 1/8, text:'real-'},
				{note: -8, length: 1/8, text:'ly'},
				{note: -8, length: 1/8, text:'crash'},
				{note: 'rest', length: 1/8},
				{note: -12, length: 1/8, text:'or'},
				{note: -10, length: 1/8, text:'e-'}
			],
			//  97
			[
				{note: -10, length: 1/8, text:'ven'},
				{note: -10, length: 1/8, text:'make'},
				{note: -12, length: 1/8, text:'a'},
				{note: -12, length: 1/8, text:'sound?'},
				{note: 'rest', length: 1/4},
				{note: -5, length: 1/8, text:'When'},
				{note: -5, length: 1/8, text:"you're"}
			],
			[
				{note: 0, length: 1/16, text:'fal-'},
				{note: 0, length: 1/16, text:'ling'},
				{note: 0, length: 1/8, text:'in'},
				{note: 0, length: 1/8, text:'a'},
				{note: -3, length: 1/8, text:'for-'},
				{note: -5, length: 1/8, text:'est'},
				{note: 'rest', length: 1/4},
				{note: -5, length: 1/16, text:'and'},
				{note: -5, length: 1/16, text:"there's"}
			],
			[
				{note: -2, length: 1/8, text:'no-'},
				{note: -2, length: 1/8, text:'bo-'},
				{note: -2, length: 1/8, text:'dy'},
				{note: 0, length: 1/8, text:'a-'},
				{note: 0, length: 1/8, text:'round'},
				{note: 'rest', length: 1/4},
				{note: 0, length: 1/16, text:'do'},
				{note: 0, length: 1/16, text:'you'}
			],
			//  100
			[
				{note: 2, length: 1/8, text:'e-'},
				{note: 4, length: 1/8, text:'ver'},
				{note: 4, length: 1/8, text:'real-'},
				{note: 2, length: 1/8, text:'ly'},
				{note: 2, length: 1/8, text:'crash'},
				{note: 'rest', length: 1/8},
				{note: 0, length: 1/8, text:'or'},
				{note: -1, length: 1/4, text:'e-'}
			],
			[
				{note: 'rest', length: 1/8},
				{note: 0, length: 1/8, text:'ven'},
				{note: 2, length: 1/8, text:'make'},
				{note: 0, length: 1/8, text:'a'},
				{note: 0, length: 1/8, text:'sound?'},
				{note: 'rest', length: 1/8},
				{note: 0, length: 1/16, text:'When'},
				{note: 0, length: 1/16, text:"you're"},
				{note: 7, length: 1/8, text:'fal-'}
			],
			[
				{note: 'rest', length: 1/8},
				{note: 7, length: 1/8, text:'ling'},
				{note: 7, length: 1/8, text:'in'},
				{note: 7, length: 1/8, text:'a'},
				{note: -1, length: 1/8, text:'for-'},
				{note: -3, length: 1/8, text:'est'},
				{note: 'rest', length: 1/8},
				{note: -3, length: 1/16, text:'and'},
				{note: -3, length: 1/16, text:"there's"}
			],
			//  103
			[
				{note: 9, length: 3/16, text:'no-'},
				{note: 7, length: 1/16, text:'bo-'},
				{note: 4, length: 1/8, text:'dy'},
				{note: 5, length: 1/8, text:'a-'},
				{note: 4, length: 1/8, text:'round'},
				{note: 'rest', length: 1/8},
				{note: 0, length: 1/8, text:'do'},
				{note: 0, length: 1/8, text:'you'}
			],
			[
				{note: 4, length: 1/8, text:'e-'},
				{note: 4, length: 1/8, text:'ver'},
				{note: 4, length: 1/8, text:'real-'},
				{note: 4, length: 1/8, text:'ly'},
				{note: 5, length: 3/16, text:'crash'},
				{note: 5, length: 1/16, text:'or'},
				{note: -1, length: 1/8, text:'e-'},
				{note: -1, length: 1/8, text:'ven'}
			],
			[
				{note: -1, length: 1/8, text:'make'},
				{note: 0, length: 1/8, text:'a'},
				{note: 0, length: 1/4, text:'sound?'},
				{note: 'rest', length: 1/4},
				{note: 0, length: 1/8, text:'Did'},
				{note: 0, length: 1/8, text:'I'}
			],
			[
				{note: 7, length: 1/8, text:'e-'},
				{note: 7, length: 1/8, text:'ven'},
				{note: 7, length: 1/8, text:'make'},
				{note: 4, length: 1/8, text:'a'},
				{note: 4, length: 1/8, text:'sound?'},
				{note: 4, length: 1/16, text:'Did'},
				{note: 7, length: 3/16, text:'I'},
				{note: 4, length: 1/4, text:'e-'},
			],
			//  107
			[
				{note: 'rest', length: 1/8},
				{note: 4, length: 1/8, text:'ven'},
				{note: 2, length: 1/8, text:'make'},
				{note: 2, length: 1/8, text:'a'},
				{note: 2, length: 1/8, text:'sound?'},
				{note: 4, length: 1/8, text:"It's"},
				{note: 0, length: 1/8, text:'like'},
				{note: 0, length: 1/8, text:'I'},
			],
			[
				{note: 4, length: 1/8, text:'nev-'},
				{note: 4, length: 1/8, text:'ver'},
				{note: 2, length: 1/8, text:'made'},
				{note: 2, length: 1/8, text:'a'},
				{note: 2, length: 1/8, text:'sound?-'},
				{note: 4, length: 1/16, text:"-"},
				{note: 2, length: 1/16, text:'-'},
				{note: 0, length: 1/8, text:'Did'},
				{note: 0, length: 1/8, text:'I'},
			],
			[
				{note: 2, length: 1/8, text:'e-'},
				{note: 2, length: 1/8, text:'ver'},
				{note: 2, length: 1/8, text:'make'},
				{note: 0, length: 1/8, text:'a'},
				{note: 0, length: 1/8, text:'sound?'},
			],
			//  STUPID KEY CHANGE
			[
				{note: 'rest', length: 1/4},
				{note: 5, length: 1/8, text:'On'},
				{note: 8, length: 1/8, text:'the'},
				{note: 8, length: 1/8, text:'out'},
				{note: 5, length: 1/8, text:'-'},
				{note: 5, length: 1/4, text:'side'},
			],
			//  111
			[
				{note: 5, length: 1/8, text:'al-'},
				{note: 3, length: 1/8, text:'ways'},
				{note: 3, length: 1/8, text:'look-'},
				{note: 1, length: 1/8, text:'ing'},
				{note: 1, length: 1/4, text:'in,'},
				{note: -2, length: 1/8, text:'will'},
				{note: -4, length: 1/8, text:'I'}
			],
			[
				{note: 'rest', length: 1/4},
				{note: 5, length: 1/8, text:'e-'},
				{note: 8, length: 1/8, text:'ver'},
				{note: 8, length: 1/8, text:'be'},
				{note: 5, length: 1/8, text:'-'},
				{note: 5, length: 1/4, text:'more'}
			],
			[
				{note: 5, length: 1/8, text:'than'},
				{note: 3, length: 1/8, text:"I've"},
				{note: 3, length: 1/8, text:'al-'},
				{note: 1, length: 1/8, text:'ways'},
				{note: 1, length: 1/4, text:'been?'},
				{note: -2, length: 1/8, text:'Cause'},
				{note: -4, length: 1/8, text:"I'm"}
			],
			[
				{note: 5, length: 1/4, text:'tap'},
				{note: 5, length: 1/4, text:'tap'},
				{note: 5, length: 1/8, text:'tap-'},
				{note: 3, length: 1/8, text:'ping'},
				{note: 1, length: 1/8, text:'on'},
				{note: -2, length: 1/4, text:'the'},
			],
			//  115
			[
				{note: 'rest', length: 1/8},
				{note: 1, length: 3/8, text:'glass.'}
			],
			[
				{note: 12, length: 1/4, text:'Wav-'},
				{note: 13, length: 1/4, text:'ing'},
				{note: 5, length: 1/4, text:'throug'},
				{note: 5, length: 1/8, text:'a'},
				{note: 5, length: 1/4, text:'win-'}
			],
			[
				{note: 'rest', length: 1/8},
				{note: 1, length: 1/4, text:'dow.'},
				{note: 1, length: 3/8, text:'-'},
				{note: 1, length: 1/4, text:'I'}
			],
			[
				{note: 'rest', length: 1/4},
				{note: 5, length: 1/8, text:'try'},
				{note: 8, length: 1/8, text:'to'},
				{note: 8, length: 1/4, text:'speak'},
				{note: 5, length: 1/4, text:'but'}
			],
			[
				{note: 5, length: 1/8, text:'no-'},
				{note: 3, length: 1/8, text:'bo-'},
				{note: 3, length: 1/8, text:'dy'},
				{note: 1, length: 1/8, text:'can'},
				{note: 1, length: 1/4, text:'hear.'},
				{note: -2, length: 1/8, text:'So'},
				{note: -4, length: 1/8, text:'I'}
			],
			//  120
			[
				{note: 'rest', length: 1/8},
				{note: 8, length: 1/8, text:'wait'},
				{note: 8, length: 1/8, text:'a-'},
				{note: 8, length: 1/8, text:'round-'},
				{note: 10, length: 1/4, text:'-'},
				{note: 5, length: 1/8, text:'for'},
				{note: 5, length: 1/16, text:'an'},
				{note: 5, length: 3/16, text:'ans-'}
			],
			[
				{note: 'rest', length: 1/8},
				{note: 6, length: 1/8, text:'wer'},
				{note: 5, length: 1/8, text:'to'},
				{note: 3, length: 1/8, text:'ap-'},
				{note: 3, length: 1/4, text:'pear'},
				{note: 1, length: 1/8, text:'while'},
				{note: 3, length: 1/8, text:"I'm"}
			],
			[
				{note: 5, length: 1/4, text:'watch'},
				{note: 5, length: 1/4, text:'watch'},
				{note: 5, length: 1/8, text:'watch-'},
				{note: 3, length: 1/8, text:'ing'},
				{note: 1, length: 1/8, text:'peo-'},
				{note: -2, length: 1/4, text:'ple'}
			],
			[
				{note: 'rest', length: 1/8},
				{note: 1, length: 3/8, text:'pass.'}
			],
			//  124
			[
				{note: 12, length: 1/4, text:'Wav-'},
				{note: 13, length: 1/4, text:'ing'},
				{note: 5, length: 1/4, text:'throug'},
				{note: 5, length: 1/8, text:'a'},
				{note: 5, length: 1/4, text:'win-'}
			],
			[
				{note: 'rest', length: 1/8},
				{note: 3, length: 1/4, text:'dow.'},
				{note: 6, length: 1/4, text:'-'},
				{note: 5, length: 1/8, text:'-'},
				{note: 3, length: 1/8, text:'-'},
				{note: 1, length: 1/8, text:'-'}
			],
			[
				{note: 'rest', length: 7/8},
				{note: 3, length: 1/8, text:'Can'}
			],
			[
				{note: 1, length: 1/4, text:'a-'},
				{note: 3, length: 1/8, text:'ny'},
				{note: 5, length: 1/4, text:'bo-'},
				{note: 6, length: 1/4, text:'dy'},
				{note: 5, length: 1/8, text:'see?'}
			],
			[
				{note: 'rest', length: 3/8},
				{note: 1, length: 1/8, text:'Is'},
				{note: 5, length: 1/8, text:'a-'},
				{note: 8, length: 1/8, text:'ny'},
				{note: 8, length: 1/8, text:'bo-'},
				{note: 5, length: 1/8, text:'dy'}
			],
			//  129
			[
				{note: 3, length: 1/8, text:'wa-'},
				{note: 3, length: 1/8, text:'ving'},
				{note: 3, length: 3/4, text:'-'}
			],
			[
				{note: 5, length: 1/4, text:'back'},
				{note: 1, length: 1/8, text:'at'},
				{note: 1, length: 1/8, text:'me?'},
				{note: 1, length: 3/2, text:'-'}
			],
			[
				{note: 'rest', length: 2},
			],
			[
				{note: 'rest', length: 3/8},
				{note: 13, length: 1/4, text:'Is'},
				{note: 13, length: 1/8, text:'a-'},
				{note: 13, length: 1/8, text:'ny'},
				{note: 13, length: 1/8, text:'bo-'},
			],
			[
				{note: 10, length: 1/8, text:'dy'},
				{note: 10, length: 1/8, text:'wa-'},
				{note: 8, length: 1/8, text:'ving'},
				{note: 8, length: 3/8, text:'-'}
			],
			//  134
			[
				{note: 12, length: 1/4, text:'Wa-'},
				{note: 13, length: 1/2, text:'ving'}
			],
			[
				{note: 12, length: 1/4, text:'Wa-'},
				{note: 13, length: 1/2, text:'ving'}
			],
			[
				{note: 12, length: 3/8, text:'Woah'},
				{note: 13, length: 7/8, text:'-'},
			],
			[
				{note: 'rest', length: 5/8},
				{note: 6, length: 1/2, text:'Woah'},
				{note: 5, length: 1/8, text:'-'},
				{note: 3, length: 1/8, text:'-'},
				{note: 1, length: 9/8, text:'-'}
			],
			[
				{note: 'rest', length: 1},
			],
			[
				{note: 1, length: 1, text:'-'}
			],
			[
				{note: 'rest', length: 1},
			],
			[
				{note: 'rest', length: 1},
			],
			[
				{note: 'rest', length: 1},
			],

			


		]
	}
}