---
layout: post
title:  "Dev Blog 6: Holy Tester"
subtitle: "A peek behind the scenes"
date: "8/27/19"
coverImage: "/assets/images/blog/doom-maps/consumers/consumers-2.png"
category: blog
post_id: none
---

*Note: the following blogs were originally written throughout development from June to August 2019. I have edited them for clarity (and to preserve them before Wix shuts the project site down), but you can view the original posts [here](https://makhodash.wixsite.com/holytester/blog/search/graham) if you wish.*

-----

## Overview

[Holy Tester](/games/holy-tester) is a procedurally-generated roguelike dungeon crawler developed in my Games Workshop II class. It was produced over the course of 20 weeks, 10 of which I spent working on [It's Haunt Time](/games/its-haunt-time) before switching teams. I was challenged with jumping into an existing codebase, redesigning their enemy AI to be more robust while accommodating new enemy types. 

I learned a lot throughout development, mainly that I love game AI programming! I also strived to make my tools easy to use for my teammates (both coders and designers), while leveraging relevant design patterns to allow frequent code reuse. This proved especially helpful when designing a variety of enemies, as their behaviors often had plenty of overlap; for example, the same movement code was utilized for nearly all enemies. Much of what I learned came from messing around on my own, but I also looked to this wonderful AI textbook ([Artificial Intelligence for Games](https://www.amazon.com/Artificial-Intelligence-Games-Ian-Millington/dp/0123747317){:target="_blank"}) for resources and guidance.

----

## Weekly Development Logs

1. [Code Design](/blog/holy-tester/log-1)
2. [Enemy Spawning](/blog/holy-tester/log-2)
3. [Enemy Prototyping](/blog/holy-tester/log-3)
4. [Fleshing out the Enemies](/blog/holy-tester/log-4)
5. [Enemy Polish & Tactic Systems](/blog/holy-tester/log-5)
6. [Pathfinding & Enemy Spawning](/blog/holy-tester/log-6)
7. [Designing the Taurush](/blog/holy-tester/log-7)
8. [Implementing the Taurush](/blog/holy-tester/log-8)
9. [Balancing Enemy Spawning](/blog/holy-tester/log-9)

----

## Post-Mortem

Looking back on my work...

###### Things that went well:
- I wrote very robust code (much better than previous projects)
- My Enemy AI systems held up pretty well (despite not having a Combat Manager, they were designed to function without one)
- I learned to depend on my teammates when needed; you can't make everything on your own

###### Things that didn't go so well:
- I worked myself to death
- I spent too much time refactoring/rewriting sections of our codebase
- I didn't have time to implement a proper Combat Manager as planned


I'm proud of the work I did on this game, but we struggled with maintaining a coherent vision throughout development. Our team had frequent issues with communication; oftentimes leads would fail to communicate tasks clearly to the team, leading to unnecessary feature iterations or situations where 2 people worked on the same task.

Some of our design team was hesitant to work in the game engine, instead choosing to isolate themselves with asset creation. I made great efforts to create simple tools for designers to fine tune and balance enemies, but they really didn't seem interested in touching a game engine. This slowed down the balancing process, but other members who stepped up to use my tools said they were very intuitive.

My main focus, programming enemy behaviors, required me to rewrite all enemy code from scratch. This limited my ability to put in new enemies; after re-implementing the existing enemies, we were only able to create 1 of the 3-4 new ones we had planned. As a result, our artists saw their assets canned after spending hours making them, which is always a shame.

In hindsight, I think this game could have become something much greater if not for 3 things: our lack of a clear vision for the game, our codebase being a mess, and our failure to communicate. However, making a fully-featured game in 10 weeks is a large endeavor, and every project is a learning experience. I'm proud of what I managed to create!