---
title: "Gh☆ul's Sanctum"
description: 'Java/JOGL + OpenGL Engine & Models created in Blender 4.1'
pubDate: 'Mar 14 2025'
heroImage: '/project-images/project-covers/GhoulSanctum.gif'
---

<h3 class="Rainbow-right">Overview</h3>

Happy Pi day! >:3

This was genuinely one of the most enjoyable and rewarding projects I've ever made; from essentially scratch, I had to create not only this entire world, but its engine as well!

Without getting into insane detail, I will go over a few key parts of my process on the development side of this project.

The engine and the game itself is a mixture of Java/JOGL/JOML & OpenGL. From scratch, I needed to organize many different VBOs (vertex buffer objects, can be used to store a ton of vertices for an object for example), create and manage a Camera class, handle the importing of multiple models (created by yours truly), utilize the GPU's texture units in order to map textures onto models based off each vertex's texture coordinates, animated the different objects based off the FPS, and everything else in between.

<h3 class="Rainbow-right">Models and Textures</h3>

All of the models in this scene are created entirely from scratch by myself as well! All the textures are also done by me aside from the flooring (https://www.poliigon.com/texture/square-slate-raw-tile-texture-black/7657) since I was required for my project to use at least one texture from the web & credit it.

The models were done in Blender 4.1 and majority of them didn't take that much time at all to model (if you know what you're doing); the model for Ghoul however I had already done and had already rigged the custom armature for months ago (and with IK bones too for easy posing) so it was extremely easy and fast to pose them as well.

<h3 class="Rainbow-right">Some Java Details</h3>

For the Key Listener, I simply utilized the one built into Java; however, for my other class using an engine also built off OpenGL, I used JInput instead for that (which I will showcase on this site eventually as well as my planned game using OpenGL as a prototype for the main game I will be creating).

Frame by frame I also kept track of the time elapsed since the previous frame (calculating the difference between the time of the current frame and the time of the previous frame) in order to make animations based on the FPS and have a consistent speed across all computers running it (if animations weren't based on FPS, they'd be based on clock speed instead, meaning faster computers might make the animations look crazy fast, whereas slower computers might run extremely sluggish and take 10 minutes for the same animation to finish).

<h3 class="Rainbow-right">Camera Management</h3>

Managing the Camera was likely the most tedious part of this entire project. Essentially, you will have to implement methods for moving and rotating the camera all whilst you adjust what you render on screen based on those values.

When it comes to rendering things properly on screen in respect to the Camera's position, a decent amount of math is involved (especially matrix multiplication). There are a few different matrices you will need to make this possible: a model matrix (that maps a model's local vertices to the world space), a view matrix (that moves/orientates the world in respect to the camera), and a perspective matrix (making farther-away things look smaller and closer things looking larger).

The model matrix is unique for each model and based on how you want that specific object to be rotated / positioned in your world. The view matrix, however, is a matrix applied across every single thing in the world at the current frame (the view matrix also must be updated every frame if you are updating the camera's position/orientation). Lastly, the perspective matrix is calculated at the start of the program and is based off the FOV and the near/far clipping planes.

To position and orient the camera, you will need 4 different variables: the camera's position (typically you would want to make this its local position so you could add a parent and make it based off the parent's position too, but for this simple program I just did its world location to be stored in the Camera class), its U (right) vector, its V (up/"vertical") vector, and its N (forward/"north") vector. In order to make the camera turn to the right for example, you'd rotate the U and N vectors about the V (up / Y) axis. 

<h3 class="Rainbow-right">Model Importing</h3>

Lastly, I will discuss the details of importing a model (specifically of type .OBJ). Essentially, all .OBJ files will consist of 4 different variable types at the least; vertex (v), vertex texture coordinate (vt), vertex normal vector (vn), and face (f). 

The v variables will hold 3 different values, that is for the x, y, and z positions (e.g. "v 0.00 -2.48 1.99"). 

The vt variables will hold 2 values: s and t. S and t are basically no different than x and y, however, it is used specifically for the location pulled from a 2D image/texture to map to a vertex rather than a position in the literal 2D/3D space of your world (e.g. "vt 0.5 1.0"). 

The vn variable is for a normal vector, which in 3D space will have 3 values as well similar to the vertex variables (they will also be x, y, and z; e.g. "vn 0.0 1.0 0.0"). Normal vectors are primarily used for lighting the object, with the vectors pointing out perpendicular to the surface and relative to each vertex and its position in respect to the local origin point of the model. 

Finally, the f variable takes all 3 of the previously mentioned variables and links them together. For example, one of the f variables may look like the following: "f 1/3/2 1/1/1 1/1/1." The f here means "face," and the 1/3/2 means take the 1st listed vertex (v), connect it to the 3rd listed vertex, and lastly to the 2nd vertex (forming a triangle - in some models, however, they may have "quads," which is simply 4 vertices instead of 3 as shown here). Following this is the "1/1/1" which simply means link each of the 3 vertices mentioned before to the first (1) listed texture coordinate variable in the file (link texture coordinate variable 1 to vertex 1, 3, and 2; if it was e.g. 3/7/2 instead for the texture coordinate variables picked, it would be 3 to vertex 1, 7 to vertex 3, and 2 to vertex 2 in this example of 3/7/2 and 1/3/2). The final "1/1/1" means link each vertex to the first (1) listed normal vector variable (all of these variables will have the normal vector which is perpendicular to their surface, aka the triangle they now form).

After all of this, you've successfully now formatted a single triangle in the .OBJ format! From here, you can model literally anything (but of course, this would be insanely tedious to do by hand, hence why tools like Blender exist).

In order to import a model into your program now, you simply just go down every line in the file and parse the data based on what the line starts with (v/vt/vn/f and other possible variable types that .OBJ supports) and store them into arrays (or however you wish to store them).

<h3 class="Rainbow-right">Conclusion</h3>

Despite the tedious parts of this project, it was so worth it in the end and I learned so much along the way; I now also have this dope scene to show for it too!

If this kind of stuff at all interests you, I would heavily recommend just jumping right into it! There are so many videos on platforms such as YouTube and documentation around the web that are free for you to use and there's no time like the present; I only learned how to model at all with Blender for example just last summer, and that all happened just because I figured "hey, I got this hour long Blender beginner's tutorial in my YouTube feed... I'll click on it and see what's up" with no idea how far it'd even take me or if I'd even stick to it!

At the time too I was struggling with my initiation skills (aka, just starting on the things I'm passionate on), and even still, I somehow managed to make it this far. If I can make it this far, so can you! I know that's super cliche; but it's cliche for a reason, and that's because it's so true that it's said universally again and again and with its repetition wearing down its impact and meaning to some (and really, it won't have the full meaning until you've already come to realize its truth firsthand through experience and critically thinking on that experience, aka self-reflection). 

Anyways... go do it! And if you got some free time, go do it right <b class="Rainbow-right">NOW</b>! I'll even link you the video that got me started in Blender, as well as my personal notes!

Here is the video: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/sbCW0Cs7aI8?si=I2VnVKd9BzqYODjJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Also, here are my own personal notes (including in-detail notes from this video!)

(Feel free to copy all of these notes and put em in a .txt file on your desktop - that's what works best for me for quick reference anyways)

<h3 class="Rainbow-right"> General UI </h3>

- Use numpad to rotate around an object, go to front view, side view; can set numbers on main part of keyboard
to emulate numpad if you don't have a numpad

- Can hold Ctrl and then press 1 on numpad to get the *back* view

- Middle mouse click to rotate around, shift middle mouse to pan, scroll middle mouse to zoom

- N when object selected: brings up transform tab

- G when object selected: moves the object where ur mouse is, can hold X, Y, or Z with G to limit to that axis too

- R: rotation mode 

- S: scale mode

- Alt Z for X-ray

- Shift + D: Duplicate

- R + Z + 90 to rotate 90 degrees around Z axis for example

- Shift + A: Add menu

- 3D cursor is anchor point looking thing, where things get placed by default in scene, and can use as point to rotate around

- If need to reset cursor or other things, can bring up menu with Shift + S

- After doing Shift + A to add an object, in the bottom right it'll show a menu where you can adjust properties of the object,
for example you can lower the vertices count to get a more low poly look
-- Changing to "Nothing" Fill Type will make the caps be empty

- If you hold ctrl and select multiple objects in object mode and do Shift + J, you can join them together into a single object, all modifiers will also join,
hence you can join a hand to a mirror arm object and then the hand will be mirrored too.

- Press Z to bring up the render menu, you can then change it to be Render mode and it'll show your materials you've changed for the object
-- Material Preview is a mix between Render Mode and Solid Mode

- Numpad 0 allows you to go into active camera view, touble tap R to rotate the camera

- Selecting things in the object hierarchy, you can press M on the keyboard to go and create new collection with those objects
-- Can then untick the collection to turn them off, not deleted tho, but out of the way, good organization

- Can do Ctrl + B, then drag a box over just ur camera view to limit that to what your computer renders to take off the load

- Can adjust Max Sample amount under Render settings to be down to something like 80, because the default of 4096 will take ages to render

- Can press N, then click lock camera to view, press 0 on numpad and camera will follow view

- Ctrl + Alt + Numpad0

- You can use the annotation tool to outline what you want to sculpt; hold in ctrl to delete

- After using Ctrl + J to join meshes together, you can go to the modifier tab, and add remesh, which will remesh the object
so there's nothing inside one another for example - Change voxel to like .03, then drop down and click apply


<h3 class="Rainbow-right">  Edit Mode </h3>

- To adjust geometry of object, enter Edit Mode

- Whatever you have selected previously in object mode (can be multiple objects), will be what you can edit when you go into edit mode

- If you offcenter the object in Edit Mode, it doesn't change the origin point so when rotated in Obj Mode it'll be off

- Can select points like icons on ur desktop too with a box

- Can press Tab to go into Edit Mode

- You can change select modes in Edit Mode to select faces instead of vertices for example

- E is the shortcut to Extrude in Edit Mode, basically stretching out the face of an object

- R you can use to rotate these faces as well

- P: separates selected vertices in edit mode

- S you can scale any edge, face, vertex

- Ctrl + R when hovering over an edge to split the edge in half and make new edges / vertices

- Shift + Alt then left click to select a "whole loop" of edges, or can hold shift and select multiple edges/faces/vertices you want to alter

- Can select and delete half the vertices so you're only working on one side to mirror; can add mirror modifier in the modifier
tab (the one with the wrench icon) and it will be applied to that object
-- When using mirror mode, you can also use eye dropper under mirror object to change what object it's in reference to,
aka the anchor point / centers around that object

- With mirror modifier, if you move it apart it'll get cut in half, however if you check Clipping toggle then it'll fill the space between
-- You don't need clipping when the 2 objects aren't meant to be touching (separate, like legs for example)

- Can pres 7 on numpad to look at top view, Ctrl + R to split it in half again, then can move corner vertices inwards
to make the object more spherical / other

- X: brings up delete menu

- Can continue to use E to extrude, Ctrl + R to split, S to scale / R to rotate / G to move (Combining with X, Y, or Z to limit to those axes if need be)

- If you do Ctrl + R and click once an edge, you can then move the mouse to place where the split is.
-- You can ALSO scroll on the mouse wheel to increase the number of edges you cut with Ctrl + R

- If you do Alt + S instead of just S, it will scale based on the *normals*, the normals are basically the directions
in which the faces point, whereas if you do normal scale it won't do it based on the directions they were facing but instead
equal to all of them in reference to once another, essentially

- Proportional Editing mode (The circle in the top middle) when enabled will "drag" other vertices around the point you're
dragging based on the weight factor / other settings (scroll the mouse wheel to change the weight of the effect)

- Can double tap R to rotate in more than just the axis you're viewing from (etc. in front / side ortho view)

- Can do Shift + D on vertices too to duplicate them 

- If you select a vertice and do Shift + L it'll select everything connected to that vertice that is "loose"

- A: selects all the geometry of the object

- Smooth tool is a useful tool found on the left, it has a purple sphere icon

- Can double Tap A to deselect everything

- Can press C, brings up select tool, you can adjust size with mouse wheel, and you can hold left click over things you want to select in edit mode
-- Right click to get out of the select mode

- Press P to bring up seperation menu, so you can make things you have selected to be a new object for example

- If you select 3 separate vertices, and press F, it'll create a new face (a triangle) between those 3 points!

- Solidify Modifier adds thickness to the mesh in realtime!

- If the normals of the faces become flipped inside out at some part of the mesh, can do Alt + N to then 
recalculate the normals to be corrected (outside / inside / etc)

- Can select faces, then go into material menu and add new / select whatever material you want to use, and click "Assign"

- Can do Ctrl + Numpad+ to grow the selection

- Ctrl + B allows you to create a bevel on an edge when selected in Edit Mode
-- Can scroll the mouse wheel to add in more segments

- Ctrl + I to select everything but what you have currently selected

- Ctrl + T to triangulate faces

<h3 class="Rainbow-right">  Sculpt Mode </h3>

- Make sure to turn on Dynamic Topology (Dyntopo) before sculpting or else it'll just manipulate currently existing
topology instead of adding new topology

- Can enable symmetry right under dyntopo in settings for any axis

- Relative Detail in Dyntopo means that the more zoomed in you are, the smaller the detail of the brush strokes

- Holding in Ctrl when doing a brush stroke will invert the brush (erase)

- Holding in Shift with any brush will make it the same as the Smooth brush, no need to go between the two

- Hold F to adjust brush size, Hold Shift + F to adjust the brush strength

- Do Ctrl + A -> Scale in case the brush in Sculpt mode is an oval

- Can use grab tool in front ortho mode to shape things like noses better than trying to place clay

- You can right click objects in layout and do Shade Smooth to smooth it out


<h3 class="Rainbow-right">  PSX-Look </h3>

- PS1 used 16x16, 32x32, 64x64, and 128x128 texture sizes

- Shading Tab is where you add textures

- Turn specular to 0, and Roughness to 1 so no reflections

- Change texture filtering to closest instead of linear

- Go to UV editor and go into edit mode, be in face select mode

- Select all faces, scale up in UV editor on the left so that it matches six of texture

- Can also select *individual* faces and change shape in UV editor on left to be whatever you want

- Crash was made not with texture images, but with vertex colors

- Go to tab in bottom right of scene view, under color attributes, press new and press OK with defaults

- Go to shading tab, add new material, add node called Color Attribute, plug Color to Surface
then select the color option

- Then go back into Layout tab and select in the mode tab in top left, Vertex Paint mode, then start painting object

- PS1 would also fake shading with vertex colors

- Can go back to shading tab, add new color, then add Color Attribute node, then a Mix node to mix with texture
plug both to A and B and set blending mode to Multiply, output goes to Material output, set Factor to 1

- Good for scene lighting, bc shading is normally disabled (ambient occlusion, bloom, screen space reflections, motion blur)
all should be disabled at all times in scene settings

- Vertex snapping/wobbling: VertexSnap_v1_2.py where PS1 didn't have decimal places for vertex placement so was off

- Setup camera and use plugin to apply to entire camera view

- Import add-on by going into preferences under Edit then install, then click the check mark, then press N in layout mode
and go to the PSX Vertex Snap tab

- Good size for grid is 200, but can go up to 406, then click add

- Add grid into scene and drag it over all the objects you want to manipulate

- Then click the object you want to manipulate and in the same add-on tab, click add modifier

- To make vertices wobble with camera as you move it, select grid, then do Ctrl + A and All transforms so it's centered,
then go to constraint tab on the right (Looks kinda like steam logo), then add damped track and set the target to the camera
and finally set track axis to X.

- Important settings: go into scene settings down to color management and set view transform to standard,
then go to Film tab and set Filter size to 0.01px - this will remove a lot of antialiasing, aka sharp edges
-- Then go into format tab (printer icon) and set FPS anywhere below 30, for stylized look 12 is a good option,
for accuracy put between 24 and 30 (what they'd usually run at)

- Compositing tab for pixelated low res effect: go into format tab, and you can legit type in like 1920/4 to divide by
four (do for Y too) for the effect, or if you want to keep 1080p then go into compositing tab and add a Scale
node, a Pixelate after the Scale, and another Scale after the pixelated node; set first scale to 0.250,
and second scale for both values as well to 4.0

- Final effects: Dithering (Can use AE in post or use https://blendermarket.com/products/dripspsxefx---lofi-playstation-1-effects)


<h3 class="Rainbow-right">  Animation </h3>

- If you go to timeline, add markers, and select a camera, then do marker -> bind camera to markers, you can
switch between cameras in the animation this way

- Can right click objects and set origins to center of mass

- Can highlight keyframes and do Shift + E, then set them to be cyclic and it'll LOOP the animation!

- Shift + C to reset 3D Cursor

- Ctrl + Alt + NP0 to lock camera to view


<h3 class="Rainbow-right"> Armatures </h3>

- Ctrl + P: Parent selected bones, offset or connected - can deform with automatic weights (when not in edit mode)

- Alt + P: Unparent bones

- Ctrl + Tab to go into Pose Mode to test the bones

- Select armature and object in object mode and then in the drop down menu in top left, you can select weight paint
to adjust the weights for bones (whatever is more Red it'll have more effect on from that bone)

- Select bones, can do Ctrl + F2 to batch rename, .L to suffix under set name for all bones on left side of body and then 
can also do right click names -> auto name left/right, can also then right click and symmetrize selected bones


<h3 class="Rainbow-right">  Shading </h3>

 Ctrl+ G after selecting nodes to make a node group

