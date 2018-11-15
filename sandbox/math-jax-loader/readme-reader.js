var content;

init();

function init() {

	document.body.style.cssText = ' font: 12pt monospace; left: 0; margin: 0 auto; max-width: 900px; position: absolute; right: 0; ';

	var reader = document.body.appendChild( document.createElement( 'script' ) );
	reader.onload = function() {

		var mathJax = document.body.appendChild( document.createElement( 'script' ) );
		mathJax.onload = function() {

				hashChange();

		}

		mathJax.src = 'http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML';

	}

	reader.src = 'http://cdnjs.cloudflare.com/ajax/libs/showdown/1.2.3/showdown.min.js';

	content = document.body.appendChild( document.createElement( 'div' ) );

	window.addEventListener( 'hashchange', hashChange, false );

}

function hashChange() {

	var fileName = location.hash ? location.hash.split( '#' )[1] : 'readme.md';

	document.title = document.title ? document.title : fileName;

	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open( 'GET', fileName, true );
	xmlHttp.onreadystatechange = function() {

		content.innerHTML = xmlHttp.readyState === 4 ? new showdown.Converter().makeHtml( xmlHttp.responseText ) : '';

	};

	xmlHttp.send( null );

}
