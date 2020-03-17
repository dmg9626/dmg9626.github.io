---
layout: post
title:  "Dev Blog 3: Super Mario AI"
# coverImage: "/assets/images/games/surface-tension/cover.png"
category: blog
post_id: mario-ai
---

***Foreword:** I don't claim any ownership to the Super Mario Bros sprites, game, idea, etc. Please don't sue me I am a very small boy and I'm doing my best.*

This was a fun assignment from my Game AI course. I was tasked with implementing a behavior-tree Mario agent that runs through randomly-generated levels, killing enemies and collecting coins along the way.

<img src="/assets/images/blog/mario-ai/clip_2.gif" class="blog rounded mx-auto d-block" width="75%">
*(Ignore the enemies stuck in the ground, I didn't write the proc-gen code)*

As you can see, it does a pretty decent job of it too! While it could surely be improved upon (collecting powerups from blocks, getting coins above platforms), the assignmenet was meant to show us the strengths and limits of using behavior trees. Eventually it becomes too complex to easily extend the behavior tree without restructuring the tree to accommodate.

We were provided a Java implementation of the game (documentation found [here](https://sites.google.com/a/marioai.com/www/marioai-benchmark/overview){:target="_blank"}), which included the level generation and an abstract Agent class to extend. 

***Note:** course materials have not been updated for some time now, and it appears a much newer version of the codebase can be found [here](http://marioai.org/){:target="_blank"}.*

----

<img src="/assets/images/blog/mario-ai/clip_1.gif" class="blog rounded mx-auto d-block" width="75%">



I spent about 3 days working on my agent, and I'm very proud of how it turned out. My behavior tree is very simple, but it gets the job done. The basic algorithm is something like this:

- jump over enemies/obstacles ahead
- shoot fireballs at enemies ahead/below
- jump over pits

Mario runs through levels of increasing difficulty, and manages to complete the first few without issue. It begins to break down when jumping enemies and frequent pits enter the levels, as you can see here:

<img src="/assets/images/blog/mario-ai/clip_3.gif" class="blog rounded mx-auto d-block" width="75%">
