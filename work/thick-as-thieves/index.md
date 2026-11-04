---
title: Thick as Thieves
layout: work
game_id: thick-as-thieves
---

### Description

Thick as Thieves is a stealth-action heist game, playable solo or with a partner in crime in co-op multiplayer. Master the art of thievery through cunning gameplay across a 4-hour campaign in this dynamic new take on stealth. 

In the shadow-draped streets of Kilcairn, fortune favours the bold. As a member of the Thieves' Guild, you'll undertake daring heists to claim precious heirlooms and uncover arcane secrets hidden within this alternate-history 1910s Scottish city, where magic and early technology have begun to collide. 

---

### My involvement
<br>

#### Scalable, navigable UI

I spent much of the first 2 years building user interfaces for the game. This ranged from HUD elements on screen providing information as you play the game (eg. health, ammo) to interactive menus navigable with both keyboard/mouse and gamepad.

The latter proved to be the most challenging, serving as a crash course in the internal workings of Unreal’s UMG and the Slate infrastructure underpinning it. I would often receive a ticket like “Player cannot navigate from the menu tabs back to the grid below” and probe into the navigation code, observing how the hit-test grid steps incrementally across the screen in the direction of user input to find the “next” element to navigate to. 

Armed with more knowledge, I’d find the setting that makes the menus “just work” via the hit-test grid (the correct way) rather than writing bespoke code to handle each of these edge cases as they crop up (the naive way).

#### Gameplay over a network
This project was where I cut my teeth on building game features that replicate efficiently and reliably over a network. The Gameplay Ability System is a framework of tools that let you fine-tune how your code executes for clients on a server.

In practice, that means building your code to tolerate a slow client/server connection, making design choices like:
* We want the server to replicate this data to a client. What is the smallest form we can pack it into to use the minimum bandwidth possible?
* This data needs to be sent from the client to the server for a gameplay outcome. How can we prevent a player from sending fake data to gain an unfair advantage?
* How should we handle an event (eg. player damage, spawned VFX) replicating to a player later than expected?

An ideal solution ensures that a player with a bad connection can still have a good time. As someone who grew up playing Call of Duty in the Xbox 360 days where the server was hosted by whichever player had the best connection (giving them an unfair advantage at best, and the ability to inject hacks at worst), I know how getting this right can be critical to a player’s experience.

#### Prototype to shippable feature

Building the melee combat with the design team was one of the most satisfying challenges I experienced on the project. We singled out Sea of Thieves as a reference due to its snappy execution of dodging, blocking, and parrying. After spending hours in-game slapping skeletons to scrutinize these systems – the forward-lunge accompanying a charge attack, the clever usage of combined `Block` + `Jump` inputs to perform a dodge, shoving a player to disrupt their block – I put together a technical design document to be audited by fellow engineers before implementation.

As the design team iterated towards finding the fun, I built plenty of other game mechanics: powered electrical systems, drawing on surfaces with a “magic” laser pointer, lockpicking, stealing loot, and plenty more I struggle to remember. They all followed this systemic approach to game design, which I came to appreciate greatly.