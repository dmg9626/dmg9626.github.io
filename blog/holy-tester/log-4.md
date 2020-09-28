---
layout: post
title: "Week 4: Fleshing out the Enemies"
date: "7/23/19"
category: blog
post_id: none

breadcrumbs: 
    - link: "/blog/holy-tester"
      label: "Dev Blog 6: Holy Tester"
---

##### Hourly Breakdown:

- Reviewing design of Enemy AI systems with teammates: 2 hours
- Implementing attacking/animation systems for enemies: 12 hours
- Dev meeting: 1 hour 

Total: 15 hours

------

Wow I actually managed to implement enemy attacks and animations within a week! It was a sprint to get it in by the Saturday deadline, but I've implemented the Steamon/Hellbat enemies in my new combat system. Steamons surround you up close and attack, while Hellbats dart around you and fire projectiles from a distance.

<div class="text-center">
    <img src="enemy-components.png" class="blog rounded mx-auto d-block" >
    <p><i>
    Here's an example of all the configurable options on an enemy. I tried to make it as easy as possible for designers to tweak settings, but there's still more work to be done here.
    </i></p>
</div>

There's still some polish to be done; hellbats don't check to see if they can hit the player before firing projectiles, and they fire them entirely too much. Steamons wait too long before attacking you, and their attack hitboxes are too small. I'm just glad I got this implemented in time. Next week I'll focus on polishing our current enemies, and maybe implementing the boss in our new system.

#### [> Week 5: Enemy Polish & Tactic Systems](/blog/holy-tester/log-5)