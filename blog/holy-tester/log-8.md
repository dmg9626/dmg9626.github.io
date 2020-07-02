---
layout: post
title: "Week 8: Implementing the Taurush"
date: "8/20/19"
category: blog
post_id: none

breadcrumbs: 
    - link: "/blog/holy-tester"
      label: "Dev Blog 6: Holy Tester"
---

##### Hourly Breakdown:

- Dev Meetings: 2 hours 
- Worked w/ Kat on Taurush: 4 hours 
- Debugging/fixing broken navmesh agents: 4.5 hours
- Created enemy spawn positions for new levels: 1 hour
- Started work on Asmodeus ground-pound attack: 1 hour

Total: 12.5 hours

-----

Sorry, not much to show here in terms of gifs/screenshots. Most of my work were boring (but necessary) tasks.

I spent a good chunk of my time this week assisting Kat with her implementation of the Taurush. I'd planned to do it myself, but I was running out of steam this week and Kat wanted to get her hands in the Enemy/Tactic code so I left it to her. She did a great job! We're both very stubborn, so we spent entirely too much time ~~arguing~~ debating about code design, his functionality, and what to focus on for this week's prototype build. I decided to leave most of the decisions to her, as she was the one making it and I was getting tunnel vision from exhaustion at this point.

We're starting to playtest the Taurush, and it's definitely a powerhouse of an enemy. It's clear that he (it?) feels better in some room layouts than others, and adding several of them to a room can quickly overwhelm the player. There's a good chance I'll have to rework the enemy spawn code so we can specify how many of a specific enemy can spawn; for example, we might want 5-7 enemies in a room, but only 2 of them can be Taurushs.

-----

Besides that, it was lots of small tasks for me this week:

We ran into a frustrating bug that broke the NavMesh enemy pathfinding in our new levels. 4 hours later, it turned out to be a missing Layer tag on the NavMeshSurface game object.

I started work on Asmodeus' ground-pound attack. The animation doesn't play yet (it has to be re-exported with proper settings), but the functionality is there.

I also created enemy spawn points for the new levels. I'm not sure which levels will be playable in the build, but they should all be ready to be populated.

-----

Next week I'll most likely be doing maintenance on our existing enemies: balancing the Taurush demon, tweaking enemy spawn settings, and finishing Asmodeus' ground-pound attack.

#### [> Week 9: Balancing Enemy Spawning](/blog/holy-tester/log-9)