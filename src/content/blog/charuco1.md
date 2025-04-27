---
title: 'Testing own ChArUco board w/ FreeMoCap OS'
description: 'My process in trying to get open source'
pubDate: 'Mar 8, 2025'
heroImage: '/project-images/project-covers/charuco_board_image.png'
---

Hello again :)

Lately I've been attempting to get the FreeMoCap Open Source software off GitHub to work properly so that I may bring my 3D characters even more to life (and be able to make way more animations way faster as a solo developer / animator)!

In order to get this to properly work, however, I had to create and order my own ChArUco board from Staples (which took a bit before it finally arrived). Essentially, with the ChArUco board you want to try and position it between 2 or more cameras (in different angles) and within both their lines of sight at the same time in order to use its position in frame to sync up the cameras. Moreover, it will allow the software to tell how far apart the cameras physically are in the real world from one another, allowing it to then use that information of their positions and orientations to record subsequent shots and convert my bone positions (using AI) to an actual 3D model and exported to Blender!

After this, I can add constraints to each of my character's bones to map to each of the bones within the sample model now imported from FreeMoCap. After some tedious work to refine the mappings and ensure the animation looks just like it does for the sample model, it has been done!

My main issue in this project as of right now, however, is not the ChArUco board nor the software, but instead my actual camera and lighting setup itself. Needless to say, trying to record high-precision animations using an AI software based solely on the input taken from your cameras is not going to do too well if you're just recording yourself using multiple webcams inside your room! 

Thus, I am very likely going to try and get better cameras as well as tripods for each of them. After I get a better supply of cameras, I'll have to see what I can do about lighting; the budget approach for me is likely just doing it outside when it's noontime and in an open area and with no shade (I'd also have to, unfortunately, sync all of the cameras in post instead of having them all linked to e.g. my desktop where I can just hit record and they'd all start up at the same time).

Realistically speaking, until I get a better setup I will just have to animate by hand or use my previous mocap setup (which is nowhere near as precise as I would like it to be); alas, I'll continue sharing my progress on here with the more-precise mocap setup!
