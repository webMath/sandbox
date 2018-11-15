Moon Rover Dev Notes
===






## Change Log

2015-09-27 ~ Theo

After a few hiccups, the node.js work to split NASA IMG files into PNG files turned out to be quite easy.
The trick was to use jimp and not pngjs2 because the former handles syn writes better (but not perfectly). 
The 64 pixels per degree IMG went from 518 mb to 336 mb of PNG files.
Getting to 128 pixels seems quite doable. Will it fit in just one GitHub repo?

Monday - with luck - should be zooming and panning around to moon.

BTW, this evening there was the 'supermoon' lunar eclipse



2015-09-26 ~ Theo

The script is finally beginning to settle down, be useful and fun to play with

There is a huge and readily available amount of lunar height data.
The next steps will be to access this data and break it down into tile maps that load much more quickly.
The will be carried out using node.js and - most likely - pngjs.
The goal is to create a script that loads in a few seconds and updates in near real-time 


2015-09-15 ~ Theo

* Revised naming system

### Previous Revisions
* [Moon Viewer R4a]( http://exploratoria.github.io/sandbox/astronomy/moon-viewer/moon-viewer-r4.html )
	* 2015-09-09

* [Moon Viewer R3]( http://exploratoria.github.io/sandbox/astronomy/moon-viewer/moon-viewer-r3.html )
* [Moon Viewer R2]( http://exploratoria.github.io/sandbox/astronomy/moon-viewer//moon-viewer-r2.html )
* [Moon Viewer R1]( http://exploratoria.github.io/sandbox/astronomy/moon-viewer//moon-viewer-r1.html )
	* 2015-05-17
