---
layout: post
title: "Week 2: Enemy Spawning"
date: "7/9/19"
category: blog
post_id: none

breadcrumbs: 
    - link: "/blog/holy-tester"
      label: "Dev Blog 6: Holy Tester"
---

##### Hourly Breakdown:
- Randomize enemies in rooms: 7 hours
- Code meeting: 2 hours
- Late night merge conflicts: 2.5 hours
- Tested build for bugs: .5 hours

Total: 12 hours

-----

This week I worked on a system that spawns (pseudo) random enemies in each room, according to parameters that can be tweaked by designers. 

Shown below are a collection of spawn locations in a room:

<div class="text-center">
    <img src="spawn-locations.png" class="blog rounded mx-auto d-block" width="85%" height="auto">
    <p><i>
    Imagine a bunch of spawn positions shown in the room on the right (Unity makes visualizing this a pain)
    </i></p>
</div>

These spawn locations are referenced in the Enemy Spawn Settings, along with the amount/types of enemies that can spawn in this room.

<div class="text-center">
    <img src="spawn-settings.png" class="blog rounded mx-auto d-block" >
    <p><i>
    Lots of stuff for the designers to play with here. Empower the designers!
    </i></p>
</div>

This should help our designers craft rooms with interesting encounters for the player. They can even reuse the same room layout and make different enemies spawn!

Next week I'm going all in on enemy AI. I'll be implementing a proof-of-concept enemy based on the design I drafted up last week.

#### [> Week 3: Enemy Prototyping](/blog/holy-tester/log-3)