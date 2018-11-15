[Exploratoria]( http://exploratoria.github.io ) &raquo; [Sandbox]( http://exploratoria.github.io/sandbox/ ) &raquo; [Lib]( http://exploratoria.github.io/sandbox/lib/ ) &raquo;
Code Edit View Read Me
===

<span style=display:none; >[View this Read Me file as a web page]( http://exploratoria.github.io/sandbox/lib/code-edit-view/ "View file as a web page." ) </span>
<input type=button value='View this Read Me file as source code on GitHub' onclick=window.location.href='https://github.com/exploratoria/sandbox/tree/gh-pages/lib/code-edit-view'; />

<span style=display:none>_View as a web page to see the content of this iframe_</span>
<iframe id=view src="http://exploratoria.github.io/sandbox/lib/code-edit-view/dev/index.html#http://exploratoria.github.io/cookbook/samples/code-snippet.html" width=100% height=500px ></iframe>  
Code Edit View - Dev revision / [Full Screen]( http://exploratoria.github.io/sandbox/lib/code-edit-view/dev/index.html#http://exploratoria.github.io/cookbook/samples/code-snippet.html )

Code Edit View - Build revision / [Full Screen]( http://exploratoria.github.io/sandbox/lib/code-edit-view/build/index.html#http://exploratoria.github.io/cookbook/samples/code-snippet.html )

## Concept

Loads an HTML file provided in the location hash in a split view showing both raw code and rendered HTML.

Defaults to local readme.md file.

## Samples

<span style=display:none; >[For the following samples to display view this Read Me file as a web page]( http://exploratoria.github.io/sandbox/lib/code-edit-view/ "View file as a web page." ) </span>

<button onclick=view.src="http://exploratoria.github.io/sandbox/lib/code-edit-view/dev/index.html#http://exploratoria.github.io/cookbook/samples/code-snippet.html"; >code-snippet-threejs.html</button>  
<button onclick=view.src="http://exploratoria.github.io/sandbox/lib/code-edit-view/dev/index.html#http://exploratoria.github.io/cookbook/samples/code-snippet-threejs.html"; >code-snippet-threejs.html</button>  
<button onclick=view.src="http://exploratoria.github.io/sandbox/lib/code-edit-view/dev/index.html#http://exploratoria.github.io/cookbook/samples/markdown.md"; >markdown.md</button>  
<button onclick=view.src="http://exploratoria.github.io/sandbox/lib/code-edit-view/dev/index.html"; >readme.md</button> 

## Features

* Open files via OS file open dialog
* Load files via location.hash from any CORS-enabled source
* Load file via copy and paste
* Save edits to local file
* Update view on demand
* Incorporates [Ace editor]( http://ace.c9.io/ )
* Vertical or horizontal split view adjustable with slider
* View windows displays HTML or Markdown files

## Road Map

* More samples
* Toggle Edit view to full-width
* Toggle View view to full width
* Allow you to slide the vertical separation horizontally
* Prettify the code
* Tidy the code
* Load files via drag and drop
* Transition from embedded to full-screen
	* And back?
* Improve appearance
* Add more library call fixes
	* Separate these out into example file

## Notes 

<!--
Is this a good idea?
-->
In the interest of conciseness the current or build revision does not contain a version number in its title
 



