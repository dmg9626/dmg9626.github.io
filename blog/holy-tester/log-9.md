---
layout: post
title: "Week 9: Balancing Enemy Spawning"
date: "8/27/19"
category: blog
post_id: none

breadcrumbs: 
    - link: "/blog/holy-tester"
      label: "Dev Blog 6: Holy Tester"
---

##### Hourly Breakdown:

- Improved enemy spawning: 3 hours

Total: 3 hours

------

Our last week of work! Unfortunately, the programming team didn't have much time to spend, as we all had a CS 451 project due on Tuesday. Despite that, I think my changes helped bring a last bit of needed polish to the game, so I'm happy.

I made improvements to enemy spawning: we can now configure how many of each enemy spawn in a room. This gives designers greater control over spawning, allowing us to balance rooms even better now. For example, we can ensure that only 1 Taurush enemy spawns in a room, or that 2-3 hellbats/steamons spawn alongside Asmodeus.

<div class="text-center">
    <img src="/assets/images/blog/holy-tester/log-9/enemy-spawn-settings.png" class="blog rounded mx-auto d-block" width="50%">
    <p><i>
    We can use the Max Number field to control how many of each enemy to spawn in a room (in addition to overall enemy count)
    </i></p>
</div>

I also went and converted these spawn settings into ScriptableObjects! They used to be a set of manually-configured parameters on each Room class, but it became tedious to modify the values on each individual Room prefab when many rooms shared similar enemy variants. Now multiple rooms sharing the same spawn settings can just reference the same ScriptableObject. This will save us a lot of time preparing the remaining levels for gameplay, as we won't have to specify enemy spawn settings on each Room (of which there's about 40).

<div class="text-center">
    <img src="/assets/images/blog/holy-tester/log-9/scriptable-objects.png" class="blog rounded mx-auto d-block" width="75%">
    <p><i>
    Lots of tedious work saved, thanks to ScriptableObjects!
    </i></p>
</div>

This was my first opportunity to make my own ScriptableObjects, and I wish I'd tried them out earlier (they'd work great for each Tactic instance).

