---
title: Holy Tester
layout: game
game_id: holy-tester
youtube: "https://www.youtube-nocookie.com/embed/Q0JVphhA64c"
download_link: "https://makhodash.wixsite.com/holytester/play-the-game"
links:
    - label: "Development Blog"
      URL: "/blog/holy-tester/"
---
### Description

The Holy Grail has been shattered into mere fragments, breaking an ancient seal and unleashing minions of hell! Each fragment has reformed into its own grail, manifesting a sliver of the Holy Grail's true power with various abilities. For example, the Everfrost Grail lets you throw ice spears, while the Mech Grail shoots a wide spread of gears at your enemies.

You'll need these grails to contend with a variety of fearsome foes. The Hellbat darts around the room and spits fireballs, while the Taurush charges at you head-on with a stun attack. Choose your grails wisely, as no playthrough is quite the same. Explore a randomly-generated dungeon and gather all fragments to assemble the shattered Holy Grail!

--- 

### Background

This game was developed in my Games Workshop II class as a moderately fleshed out game prototype.

After being lead programmer for our last project, [Its Haunt Time!](/games/its-haunt-time), I was happy to let someone else lead for this game. I focused on the enemy AI programming and developed a robust Enemy Tactic System that gave each enemy unique behaviors. This allowed me to design enemies using the same basic components for movement/attacking, while giving them Tactics that delegated instructions to those components.

I strived to make my tools easy to use for my teammates (both coders and designers). I also made sure to leverage any useful programming patterns I'd learned in Software Design. I'm not sure if my Tactic system strictly followed any established design pattern, but it seems to make use of the Template and Strategy Patterns.

Working on this project led me to discover how much I love AI programming! I dove into a dusty textbook I'd "borrowed" from the Computer Science building, 
[Artificial Intelligence for Games](https://www.amazon.com/Artificial-Intelligence-Games-Ian-Millington/dp/0123747317){:target="_blank"}, 
and learned clever ways to develop various intelligent behaviors like crowd simulation, collision avoidance, and decision trees. I recognized a few techniques as things I'd discovered on my own (obviously more refined by the writers), as well as those I couldn't imagine designing on my own.

Through reading and experimentation, the biggest lesson I learned in AI programming is that complex behaviors are best designed by combining simpler behaviors. As with programming in general, break down the problem into trivial steps to find your solution.

[Visit our webpage](https://makhodash.wixsite.com/holytester/){:target="_blank"} for more information, including development blogs from the team.

--- 

#### [Gitlab Repo](https://gitlab.com/yunatatski/holy-tester-backup){:target="_blank"}
#### [Development Blog](/blog/holy-tester)