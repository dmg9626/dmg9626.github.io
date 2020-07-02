---
layout: post
title: "Week 6: Pathfinding & Enemy Spawning"
date: "8/6/19"
category: blog
post_id: none

breadcrumbs: 
    - link: "/blog/holy-tester"
      label: "Dev Blog 6: Holy Tester"
---

##### Hourly Breakdown:

- Made asmodeus more aggressive/engaging: 1.5 hours 
- Implemented active path correction for enemies: .5 hours
- Implemented enemy spawning (VFX, spawn on enter room): 5 hours
- Fixed LevelBuilder bug preventing Level 2 from generating: 1 hour 
- Developer meeting: 1 hour 

Total: 9 hours

-----

This week was tough since I moved into a new apartment over the weekend, but considering that I still managed to get a lot done!

I fixed the pathfinding issues with Asmodeus and made him faster; the result is a much more aggressive and engaging boss fight. I still think it could use some work; a more interesting room to fight in (with obstacles to path around) and some additional enemies as distractions could help make it more intense.

-----

<div class="text-center">
    <img src="/assets/images/blog/holy-tester/log-6/spawn-vfx.gif" class="blog rounded mx-auto d-block" width="75%">
</div>

When the player enters the room, enemies now spawn in with Harrison's fancy particle effect. It looks nice and should improve performance significantly, as now enemies are only active in the player's room (rather than all around the level).

-----

I also implemented the ability for enemies to adjust their path towards the player to account for his movement. This was necessary to make Asmodeus engage the player more directly, but should also prove useful if we end up implementing the Rush Demon. I tried applying this to the other enemies, but it actually made them seem dumber somehow! The unpredictable way they surround the player is due to the absence of path correction; when I add it in, they just kite along with the player's movement. 


<div class="text-center">
    <img src="/assets/images/blog/holy-tester/log-6/apply-path-correction.jpg" class="blog rounded mx-auto d-block" width="100%">
    <p><i>
    This method allows enemies to update their current path if the player moves beyond some threshold (configurable on a per-tactic/enemy basis)
    </i></p>
</div>

I ended up applying a *very* small amount of path correction to the Steamon and Hellbat; enough to keep them in the general area of the player, without making them hone in on them directly.

-----

Next week would ideally be spent implementing a new boss, but it may be too late for that. I know we've reached beta, but Mike's boss enemies aren't in the game and it'd be a shame if I couldn't get in just one more of them. The leads are planning on having a meeting to decide what goes in the beta, so I'll see what they say.

#### [> Week 7: Designing the Taurush](/blog/holy-tester/log-7)