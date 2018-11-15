[Exploratoria]( http://exploratoria.github.io ) &raquo; [Exhibits]( http://exploratoria.github.io/exhibits/ ) &raquo;
[Waves & Resonance]( http://exploratoria.github.io/exhibits/waves/ ) &raquo;

<center>
# Spherical Wave
</center>

<span style=display:none>_View as a web page to see the content of this iframe_</span>
<iframe src=http://exploratoria.github.io/lib/code-edit-view/code-edit-view.html#http://exploratoria.github.io/exhibits/waves/spherical-wave/spherical-wave.html width=100% height=500px></iframe>

A <a href=http://scienceworld.wolfram.com/physics/SphericalWave.html>spherical wave</a> is
is an oscillatory motion of all particles along a fixed direction, in this case the <i>x</i> axis. Since all particles move back and forth in the same direction the wave consists of parallel planes. A plane wave is a solution to the <a href=https://en.wikipedia.org/wiki/Wave_equation#Scalar_wave_equation_in_one_space_dimension>wave equation</a> with one dimension of space.

A plane wave is a mathematical idealization because infinite parallel planes do not exist in reality.
### Things to Try

* Rotate the graphic by holding down your mouse and dragging to see that the waves looks the same from all directions

* Click "random" to see the wave traveling through a random distribution of particles

* Change the variable named "amplitude" in the displacement() function to alter the size of the oscillations

* Change the code in the displacement() function to distort the spherical nature of the wave
 
### About the Code

Since it is easier to modify a geometry in Three.js rather than recreate it, the updateScene() function moves the vertices of the geometry. Clicking "lattice" moves them to the orderly positions of the lattice array, while clicking "random" moves them to arbitrary positions. The variable named "balls" is one less than the number of particles along each edge of the geometry.

<span style=display:none; >[You are now in GitHub source code view - Click here to view as a web page]( http://exploratoria.github.io/exhibits/waves/spherical-wave/index.html "View file as a web page." ) </span>
<input type=button value='You are now in GitHub web page view - Click here to view as source code' onclick=window.location.href='https://github.com/exploratoria/exploratoria.github.io/tree/master/exhibits/waves/spherical-wave/'; />

### A Little Math

Plane waves are described by circular functions, sines and cosines, and so can be written as the functions

\\[ \sin ( kx \pm \omega t ) \hspace{.5in} \text{or} \hspace{.5in} \cos ( kx \pm \omega t ) \\]

where <i>k</i> is the wave number and &omega; is the frequency of the wave. The first function is used in the code, with a wave number of one and a frequency equal to the variable named "speed". The plus part of the plus-or-minus symbol indicates a wave traveling to the left and the minus part a wave traveling to the right.
