---
layout: post
title: "Week 7: Designing the Taurush"
date: "8/13/19"
category: blog
post_id: none

breadcrumbs: 
    - link: "/blog/holy-tester"
      label: "Dev Blog 6: Holy Tester"
---

##### Hourly Breakdown:

- Implemented new EnemyMoveComponent for Taurush (doesn't use NavMesh): 3.5 hours
- Taught Kat how the Enemy systems work: 1.5 hours 
- Code review: .5 hours 
- Sell Presentation: .5 hours 

Total: 6 hours 

-----

This week was light on development, as we had to prepare our Sell Presentation (a pitch we'd give to potential producers). However, I did manage get some work on the Taurush (we argued a lot about this name).

While it's nowhere near worthy of showing in a GIF yet, I started laying the groundwork for its unique movement-based behavior. The Taurush will charge at the player in a line, forcing the player to dodge out of the way. Two things are important here: the player must be able to evade its attacks, and it should continue past the player until it hits a wall/obstacle. The impact will leave it dazed momentarily, giving the player a chance to attack.

<div class="text-center">
    <img src="speedon-drawing.jpg" class="blog rounded mx-auto d-block" width="50%">
    <p><i>
    a crude artistic representation
    </i></p>
</div>

This means we can't use our previous player-following pathfinding approach! Rather than following the player's movement, the Taurush should draw a line from itself towards the player and follow it until colliding with the player or an obstacle. 

----

Additionally, it means we can't use an approach using NavMesh-based collision avoidance, as colliding with obstacles in the level is exactly what we want!

<div class="row">
    <img src="speedon-drawing-2.jpg" class="blog rounded mx-auto d-block" width="50%" height="auto">
    <img src="speedon-drawing-3.jpg" class="blog rounded mx-auto d-block" width="50%" height="auto">
</div>
<div class="text-center">
    <p><i>
    We want the Taurush to crash into obstacles, rather than avoid them
    </i></p>
</div>

So I went and created a new SimpleEnemyMoveComponent that just moves in a straight line towards its destination.

<div class="text-center">
    <img src="simple-move-component.png" class="blog rounded mx-auto d-block" width="75%">
</div>

-----

Next week me and my teammate Kat will be working together to implement the Taurush, so I sat with her to walk her through the enemy codebase in depth. Doing this helped me realize that I forgot how some parts work, and found some others to be obsolete. I wish I had more time to clean up my work, but we're nearing the 10 week deadline so I'll have to work with what we have.

#### [> Week 8: Implementing the Taurush](/blog/holy-tester/log-8)