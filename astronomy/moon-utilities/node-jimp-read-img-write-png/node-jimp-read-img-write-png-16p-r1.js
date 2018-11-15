
	var fs = require( 'fs' );
// https://github.com/oliver-moran
	var Jimp = require( '../node_modules/jimp' );

	var startTime = Date.now();

//	var fileName = 'c:/temp/WAC_GLD100_E000N1800_064P.IMG';
	var fileName = 'c:/temp/WAC_GLD100_E000N1800_016P.IMG';

	var dirName = '/16p'

	var widthSource = 5760;
	var heightSource = 2880;

	var widthDestination = 5760;
	var heightDestination = 2880;

	var widthDestination = 180;
	var heightDestination = 180;

	var byteArray;
	var bitmap;

	var tilesX = widthSource / widthDestination;
	var tilesY = heightSource / heightDestination;

	var tileX = 0;
	var tileY = 0;

	init();

	function init() {


		if ( !fs.existsSync( __dirname + dirName ) ) {

			 fs.mkdirSync( __dirname + dirName );

		}

console.log( '__dirname: ', __dirname + dirName );

		fs.readFile( fileName, callbackReadFile );

	}

	function callbackReadFile( error, buffer ) {

		if ( error ) {

			throw console.log( error, buffer );

		}

// http://stackoverflow.com/questions/8609289/convert-a-binary-nodejs-buffer-to-javascript-arraybuffer

		var arrayBuffer = new Uint8Array( buffer).buffer;
		byteArray = new Int16Array( arrayBuffer );



console.log( '\nfileName: ', fileName );
console.log( 'byteArray.length: ', byteArray.length );

		for ( var x = 0; x < tilesX; x++ ) {

			if ( !fs.existsSync( __dirname + dirName + '/' + x ) ) {

				 fs.mkdirSync( __dirname + dirName + '/' + x );

			}

		}

		processTiles();

	}

	function processTiles() {

//console.log( 'tx', tileX, 'ty', tileY, 's', tilesX, tilesY);

		if ( tileY < tilesY && tileX < tilesX ) {

			tileY++;

			writePNG( tileX, tileY - 1 );


		} else if ( tileX < tilesX - 1 ) {

			tileX++;
			tileY = 0;

			processTiles();

		} else {

console.log(  'end of story' );

		}

	}

	function writePNG( tX, tY ) {

		var image = new Jimp( widthDestination, heightDestination, function( error, image ) {

			this.rgba( false ); // make smaller files

			var index = 0;

			var yStart = heightDestination * tY;
			var yFinish = yStart + heightDestination;
			var xStart = widthDestination * tX;
			var xFinish = xStart + widthDestination;

			min = 100000
			max = 0;

			for ( var y = yStart; y < yFinish; y++ ) {
				for ( var x = xStart; x < xFinish; x++ ) {

					elevation = byteArray[ y * widthSource + x ] + 10000;

					min = elevation < min ? elevation : min;
					max = elevation > max ? elevation : max;

					this.bitmap.data[ index++ ] = ( elevation & 0x0000ff );
					this.bitmap.data[ index++ ] = ( elevation & 0x00ff00 ) >> 8;
					this.bitmap.data[ index++ ] = ( elevation & 0xff0000 ) >> 16;
					this.bitmap.data[ index++ ] = 255;

				}
			}

			name = '16p-' + tX + '-' + tY + '.png';

		}).write( __dirname + dirName + '/' + tX + '/' + name, callbackWrite( name, min, max ) );

	}

	function callbackWrite( txt, min, max ) {

console.log(  'write: ', txt );
//console.log( 'min: ', min, 'max: ', max );
//console.log( 'time', Date.now() - startTime, tileX, tileY );

		processTiles();

	}

