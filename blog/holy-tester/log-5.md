---
layout: post
title: "Week 5: Enemy Polish & Tactic Systems"
date: "7/30/19"
category: blog
post_id: none

breadcrumbs: 
    - link: "/blog/holy-tester"
      label: "Dev Blog 6: Holy Tester"
---

##### Hourly Breakdown:

- Implemented capability for Tactic switching in Enemy class: 3 hours 
- Enemy bug fixing/merge conflicts: 3 hours
- Asmodeus improvements: 1 hour
- Implement enemy death particle system: 1.5 hours

Total: 8.5 hours

------

I wish I had more time to dedicate this week, but 2 midterms fell on Tuesday so I didn't get as much done as I'd planned. I still made some good progress though! Enemy tactic switching is now (technically) implemented; I've created public methods on the Enemy class that replace the current tactic with a new one. Tactics operate by looping over a set of instructions, so the caller can specify whether to immediately halt and switch to the new tactic, or wait for the current tactic to finish execution. 

<div class="text-center">
    <img src="enemy-tactic-switch.png" class="blog rounded mx-auto d-block" width="70%">
    <p><i>
    I like to write my code like an API, making it as easy as possible for coders to work with my systems.
    </i></p>
</div>

-----

Steamons are now more aggressive; in last week's demo, an animation bug was preventing them from attacking. It's frustrating that one null reference makes the entire enemy break down; I'll have to put in some more defensive try-catch logic to mitigate stuff like this.

The boss enemy, Asmodeus, still needs work. He tends to get stuck walking towards the edge of the room, but at least he attacks sometimes before that.

Playtesters responded really well to the enemy behavior overall! They perceived the enemies as smart and aggressive. Some players thought that enemies try to "ambush" you (actually just the nature of the Surround tactic), or that they got harder as the game progressed (they don't). I'm thrilled that they like the enemies! Combat is driven entirely by the challenges posed by enemies and how the player reacts, so interesting enemy behavior will lead to interesting player behavior. I'm hoping this will lead to players making a conscious choice to use certain abilities/grails to counter enemies.

-----

<div class="text-center">
    <img src="death-smoke-vfx.gif" class="blog rounded mx-auto d-block" width="70%">
</div>

I hooked up a teammate's smoke poof effect to play on enemy deaths. It helps give feedback during gameplay, but it could use a sound to amplify that effect. In fact, we need to put in a lot more sound effect calls in enemy interactions; I've been hyperfocused on the enemy behavior and let that fall to the wayside.

Since there's likely to be lots of little visual effects like this applied to enemies, I created an EnemyVFXComponent class to handle them.

<div class="text-center">
    <img src="enemy-vfx-component.png" class="blog rounded mx-auto d-block" width="70%">
</div>

-----

Next week I'll be working more on Asmodeus and maybe implementing a new enemy? Giving the steamon a projectile attack? Depends if the art team pulls through with animations/models. 

I'd like to tidy up the Enemy code too, as a lack of communication on how to use the various sub-components has led to people dumping functions into the base class to quickly get stuff working. That's partially my fault for not giving them that direction, and partially their fault for not asking, but that's all part of learning to work as a team.

#### [> Week 6: Pathfinding & Enemy Spawning](/blog/holy-tester/log-6)