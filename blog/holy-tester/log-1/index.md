---
layout: post
title:  "Week 1: Code Design"
date: "7/1/19"
category: blog
post_id: none

breadcrumbs: 
    - link: "/blog/holy-tester"
      label: "Dev Blog 6: Holy Tester"
---

Wow I did way too much work this week but here we go:

##### Hourly Breakdown:
- Reworked sound code to use my SoundController from last term's project: 5 hours
- Drafted up Enemy AI systems redesign to replace current code: 5 hours
- Met with teammates to review/flesh out system: 3 hours
- Met with teammates to go over existing codebase: 2 hours

Total: 15 hours

------

Before doing any work of my own, I met with the coding team to familarize myself with the existing codebase. They weren't happy with how the enemies behaved in the game, and I was excited to dive in and see what I could improve. I don't have much experience with AI, but I'm looking to challenge myself and learn something new.

Most of my energy was spent designing a high-level UML for the enemy AI. I'm happy with what I've come up with, and the other programmers seem fairly confident that it will work. While I'm nervous that it might be too complex a system, the combat in our game's design demands a complex solution, so I won't let that discourage me!

The system I've drafted should allow for high-level tactics to be created (ex. Cautious Tactic: move around the player and fire projectiles at him from a distance), all of which consist of moving and/or attacking. However, different enemies could carry out these tactics in different ways; for example, a HellBat might move around the player in a zig-zag motion, and shoot a spread of projectiles. Another enemy implementing this tactic (let's say we want the Steamon to use projectile attacks sometimes too) might move in a simpler circular path around the player, and shoot a 3-round burst of projectiles. These tactics can be assigned and switched at runtime as well; if an enemy has low health, we could (in theory) give them a Retreat tactic that tells it to distance itself from the player and slowly heal itself over time.

-----

Here's the high-level UML I've come up with so far - the circles are abstract classes, while boxes are concrete:

<img src="combat-manager-UML.png" class="blog rounded mx-auto d-block" width="100%" height="auto">

Hopefully I'm not in way over my head.

#### [> Week 2: Enemy Spawning](/blog/holy-tester/log-2)