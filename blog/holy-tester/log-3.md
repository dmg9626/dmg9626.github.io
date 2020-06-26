---
layout: post
title: "Week 3: Enemy Prototyping"
date: "7/15/19"
category: blog
post_id: none

breadcrumbs: 
    - link: "/blog/holy-tester"
      label: "Dev Blog 6: Holy Tester"
---

##### Hourly Breakdown:
- Enemy AI prototyping: 8 hours
- Merge resolution: 1 hour
- Applebees business trip: 1 hour

Total: 10 hours

-----

I finally got down to implementing some proof-of-concept enemy behaviors for a more complex AI. I implemented the abstract Enemy class structure. It's driven by the Tactic component, the central "brain" for behaviors, which sends commands to the Enemy's MoveComponent and AttackComponent (whose implementations vary per enemy). 

Below is an interesting result: I was prototyping a Surround Tactic that makes the enemy pick a random position around the player and (once implemented) use attacks. While testing, I made it pick a new position around the player, stop for a second, then do it again. This resulted in a more interesting, erratic movement pattern.

<div class="text-center">
    <img src="/assets/images/blog/holy-tester/log-3/enemy-prototype.gif" class="blog rounded mx-auto d-block" >
    <p><i>
    In this movement pattern, the enemy moves towards a random position near the player, pauses for a second, and repeats.
    </i></p>
</div>

I think it'd be a great fit for the Hellbat to give it a more aggressive pursuit behavior, maintaining a distance from the player while firing projectiles.

Originally I had intended to write a Steamon tactic that has them surround and attack the player from different angles, but I think this tactic can work for both! It's just a proof of concept, but I'm happy with how this turned out. 

Next up will be implementing attacks and integrating enemy animations.

#### [> Week 4: TITLE_HERE](/blog/holy-tester/log-4)