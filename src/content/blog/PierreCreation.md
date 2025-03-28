---
title: "Creating Pierre the AHSRA!"
description: ''
pubDate: 'Aug 10, 2024'
heroImage: '/project-images/project-covers/Pierre1.png'
---

Pierre is a character of mine whose design is actually inspired by a vision I got halfway between being awake and being asleep (this was while I was in bed). 

Right before I dozed off, I saw this image flash in my mind; this robot with 4 strange fangs coming out of their face and a single, large eyeball in the middle. Since I didn't want to forget this character by the time I'd wake up in the morning, I decided to quickly grab my phone and draw them out in an app in a couple minutes.

Here is the original drawing that very closely resembles the original image I got in my head of this character just moments before this drawing was made:

<img src="/project-images/PierreOld.png"/>

This is as rough of a rough draft as it gets...

Since the vision I got only really vaguely resembled the face and the arm pose, I had to design the rest of the body with nothing to go off of, other than a little something called <span class="Rainbow-dynamic">inspiration</span>!

And so, with unconscious inspiration from characters such as Pathfinder from Apex Legends and V1 from ULTRAKILL at the time, I designed Pierre directly within Blender using the pen tool (front view and side view). 

Here are some of those original schematics:

<img src="/project-images/pierreschematic1.png"/>

<img src="/project-images/pierreschematic2.png"/>

<img src="/project-images/pierreschematic3.png"/>

Very quickly I realized I didn't really like the long-ish face / chin of the character so I removed some of it... after a few more tweaks, UV mappings for textures, and added details (such as the 3 wires running through the "spine" of the robot) I would up with this:

<img src="/project-images/pierre4.png"/>

<img src="/project-images/pierre5.png"/>

Next came the rigging process... This was where my expertise ended at the time. Pierre, in fact, was my first ever model I rigged with an armature and my first one to ever have IK bones as well! This process is a lot more intuitive than one would assume; you basically just place the hip bone in the middle of the character and extrude all the bones out from it with the E key inside edit mode. Once you have extruded out all the bones where a bone should be, you're already kind of halway there... The true challenge comes with the weights for each bone.

<img src="/project-images/pierre6.png"/>

At first, I just chose the automatic weights for the bones when I went to link the model and the armature (making the armature its parent). However, this works terribly for a model where you want each limb to move in full (such as a robot, who doesn't have squishy flesh). Hence, I had to go back and parent it with empty weights and set all the weights myself. It's not as crazy as it would seem though, just a bit more time consuming of course. Basically, you select each bone, go to the edit mode, highlight which vertices you want the bone to influence, and then you assign the "1" (aka, the max, it's a scale from 0 to 1) weight in relation to that bone (whatever the vertices surround typically). Repeat this and fine tune the bones until they're where you like em (no weird artifacts or stretching or overlaps). I had to make bones for the giant eyelids as well.

After that comes the IK bones if that interests you (it makes it easier to pose the model and animate them / move their joints in a more natural manner). Basically, you make a new bone that's not connected to any other bone and you will use this bone to influence a group of chained bones. For example, you could make an IK bone that can be used to rotate the elbow towards where the IK is placed, or a hand IK that moves the entire arm based on where you place the hand! I even used an IK so I could easily move around Pierre's eye to look in different directions. They can definitely be really useful for sure; they're so useful for animating too that I went ahead and added the same arm and leg IK setups to Ghoul's armature too.

Finally with the rig done, I could finalize the model. It felt like some extra personality elements were missing for Pierre, so I tapped into my inner <span class="Rainbow-dynamic">inspiration</span> again for some guidance. I figured a sword-weilding, rick-deckard kind of cyberknight AI (who is also non-binary/genderless... because they're a robot... lmao) would be a super sick character and would be a blast to bring to life. So, I decided to add some props now to Pierre, that being a trenchcoat with my unofficial logo (the same star found in the top left corner of this site as of 3/28/2025) and a sword that is directly inspired by my own sword earring(s) that I wear irl. 

After all of this, Pierre the AHSRA (Awakened Humanoid Self-Replicating Automata) was complete!

<img src="/project-images/pierre.gif"/>