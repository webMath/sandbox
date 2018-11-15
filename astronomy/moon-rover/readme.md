[Exploratoria]( http://exploratoria.github.io ) &raquo; [Sandbox]( http://exploratoria.github.io/sandbox/ ) &raquo; [Astronomy]( http://exploratoria.github.io/sandbox/astronomy/ ) &raquo;

[Moon Rover Read Me]( ./index.html )
===

<span style=display:none; >[You are now in GitHub source code view - click here to view Read Me file as a web page]( http://exploratoria.github.io/sandbox/astronomy/moon-rover/index.html "View file as a web page." ) </span>
<input type=button value='You are now in GitHub web page view - Click here to view Read Me file as source code' onclick=window.location.href='https://github.com/exploratoria/sandbox/tree/gh-pages/astronomy/moon-rover/'; />

<iframe src="http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://exploratoria.github.io/sandbox/astronomy/moon-rover/moon-rover-v-0-1-6.html" width=100% height=500px ></iframe>  
_Moon Viewer - Dev revision - Code Edit View_ /  [Fullscreen]( http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://exploratoria.github.io/sandbox/astronomy/moon-rover/moon-rover-v-0-1-6.html )

[Moon Rover - Dev revision - Demo ]( http://exploratoria.github.io/sandbox/astronomy/moon-rover/dev/index.html )

[Moon Rover - Build revision - Demo ]( http://exploratoria.github.io/sandbox/astronomy/moon-rover/duild/index.html )


## Concept

### Issue

We 'see' the moon as a flat one-sided disk. We know it is a 3D orb with a surface full of complexity

## Mission

To provide a way of flying over the sphere of the moon in 3D and to see its craters and rills in detail



## Things to Do

* Edit the delta variable to change the speed of cursor movements
* Edit heighPlacard to move the location signboards up or down
* Edit the default height scale



## Features

* 5760 x 2880 terrain data points with heights at 1 meter intervals
* 'Travel' over the moon in 3D faster than any satellite
	* Use cursor keys to move around
	* Cursor keys 'wrap' to adjacent side a 0 and 180 degrees latitude and stop at 90 and -90 degrees latitude 
* Gazetteer takes you to 9,116 locations
	* All locations available via a drop-down list
		* Clicking a location in the drop-down takes you to the location
	* Locations with a radius greater than 50 have placards created at load time
	* Locations with a radius under 50 have placards created as and when selected from drop-down list 
* 'Zoom All' and 'Zoom In' buttons
* Slider to adjust vertical scale in real-time
* Camera position follows cursor keys
	* Latest camera position is used to control camera position when using cursor keys 

<!--
* Select first person or orbit camera controls
-->

## Issues

* Takes too long to load / No progress indicators
	* The next series of revisions will be dealing with loading heightmaps. 
	* The intention is that the script loads fast enough so that no progress indicators are required
* A few too many presses of the cursor keys causes a serious WebGL crash



## Road Map

* Click on a placard to go there
* Permalinks to set target and camera positions
* Sunlight and shadows
* Textures and materials to 3D terrain
* 3D models of lunar landers in their locations

## Sources

Many thanks to:

Gazetteer data sources:

* [Gazetteer of Planetary Nomenclature]( http://planetarynames.wr.usgs.gov/Page/MOON/target )
* [Lunar 100]( http://the-moon.wikispaces.com/Lunar+100 )

Lunar height data source:

[Lunar Reconnaissance Orbiter Camera]( http://wms.lroc.asu.edu/lroc/view_rdr/WAC_GLD100 )


<hr>




