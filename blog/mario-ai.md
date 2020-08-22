---
layout: post
title:  "Dev Blog 3: Super Mario AI"
# coverImage: "/assets/images/games/surface-tension/cover.png"
category: blog
post_id: mario-ai
---

***Foreword:** I don't claim any ownership to the Super Mario Bros sprites, game, idea, etc. Please don't sue me I am a very small boy and I'm doing my best.*

This was a fun assignment from my Game AI course. I was tasked with implementing a behavior-tree Mario agent that runs through randomly-generated levels, killing enemies and collecting coins along the way.

<img src="/blog/mario-ai/images/clip_2.gif" class="blog rounded mx-auto d-block" width="75%">
*(Ignore the enemies stuck in the ground, I didn't write the proc-gen code)*

As you can see, it does a pretty decent job of it too! While it could surely be improved upon (collecting powerups from blocks, getting coins above platforms), the assignmenet was meant to show us the strengths and limits of using behavior trees. Eventually it becomes too complex to easily extend the behavior tree without restructuring the tree to accommodate.

We were provided a Java implementation of the game (documentation found [here](https://sites.google.com/a/marioai.com/www/marioai-benchmark/overview){:target="_blank"}), which included the level generation and an abstract Agent class to extend. 

***Note:** course materials have not been updated for some time now, and it appears a much newer version of the codebase can be found [here](http://marioai.org/){:target="_blank"}.*

----

<img src="/blog/mario-ai/images/clip_1.gif" class="blog rounded mx-auto d-block" width="75%">

My behavior tree is very simple, but it gets the job done. The basic algorithm is something like this:

- jump over enemies/obstacles ahead
- shoot fireballs at enemies ahead/below
- jump over pits (gaps with a depth of 3 tiles or more)

So basically a rough approximation of a human player's behavior.

The full behavior tree looks something like this:

<img src="/blog/mario-ai/images/behavior_tree.png" class="blog rounded mx-auto d-block" width="75%">

Mario runs through levels of increasing difficulty, and manages to complete the first few without issue. The agent begins to break down in more vertical levels featuring jumping enemies and pits:

<img src="/blog/mario-ai/images/clip_3.gif" class="blog rounded mx-auto d-block" width="75%">

Given that I spent about 3 days working on my agent, I'm very happy with how it turned out! Here's a longer video of the agent running through levels:

<div class="iframe-container">
    <iframe width="720" height="auto" src="https://www.youtube-nocookie.com/embed/T-xuZN2Qcfw" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>
</div>

If I were to revisit this with a different approach, I'd probably use a reinforcement-learning technique and reward the agent based on distance traveled without taking damage, enemies killed, coins collected, and time taken to complete level. I'm sure there's a lot of different directions I could take it!

----
    
You can view the code [here in my course repository](https://github.com/dmg9626/CS387/tree/master/Assignments/HW3){:target="_blank"}.