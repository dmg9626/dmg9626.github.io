---
layout: post
title:  "Dev Blog 5: Doom Mapping"
coverImage: "/assets/images/blog/doom-maps/cover.jpg"
category: blog
post_id: doom-maps
---

This is something I've always wanted to do. 

DOOM is the seminal, genre-defining first-person shooter developed by iD Software in 1993. To me, it's a testament to how games should be made: with a tightly-knit team, active collaboration between engineers and designers, and focus on core pillars of gameplay. To others, it's an ongoing challenge to get it running on obscure devices like [ATMs](https://www.youtube.com/watch?v=PW5ELKTivbE) and [printers](https://www.youtube.com/watch?v=XLHx3vO7KJM). But to the largest and oldest modding community of all time, it's an undying platform for creating sprawling mapsets like [Back to Saturn X](https://www.moddb.com/mods/back-to-saturn-x), and experimental games like this [Sonic racing mod built from a platformer mod of DOOM](https://www.youtube.com/watch?v=0_QMNNKe75Q).

Today I'm happy to join that community by releasing my own maps for DOOM II.

-----

### Map 1: Consumers

My start in Doom mapping came from an interesting assignment prompt in my Experimental Games course:

> Using an existing game as a base, create "game art" that makes a statement about the games industry.<br>
> It can be a mod, something created in a game's level editor, etc. as long as you build some sort of experience from an existing game.

At first I was stumped. We'd learned in class about the concept of "game art", artistic experiences created using games as a toolset for communicating some message. Kind of like [photobashing](https://conceptartempire.com/photobashing/) but with video games. Then our professor showed two examples that really grabbed me: a DOOM WAD set in an art museum where you shoot snobby prominent art critics, and an abstract Wolfenstein 3D mod that replaced all textures/sprites with disorienting black/white pixelation.

That week I'd been reading about the [binary-space-partitioning](https://pdfs.semanticscholar.org/c496/61c65c1780053dcc1ccd71abec5f244af2c9.pdf) method used by John Carmack to render 3D environments in DOOM. I was interested in the architectural limitations imposed by the game engine, and how level designers overcame them with creative solutions. This seemed like a wonderful opportunity to ~~shoehorn my personal interests into another assignment~~ make something interesting in an obscure medium!

Here's a gameplay video. Make sure to watch in 1080p; YouTube is currently throttling video quality (because COVID-19), so you have to set it manually.

<div class="iframe-container">
    <iframe width="720" height="auto" src="https://www.youtube-nocookie.com/embed/iqGvDaWMp94" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>
</div>

Short and sweet.

In case it isn't clear, the statement made here is that gamers can be a toxic bunch with little respect for the people making the games they love. Finding a successful career in game development is a herculean task, and you face strong opposition from your consumers. While it may (or may not) be a small vocal minority that net the reputation, it's tough to keep a clear head when you're being [harrassed with death threats and antisemitism for choosing one store over another](https://medium.com/@perplamps/regarding-whats-been-happening-3af0f27d863c).

As for the development process, it took quite some time to figure out what I was doing here. I started working in SLADE, a DOOM editor with support for macOS and Windows, and followed [this wonderful tutorial](https://eev.ee/blog/2015/12/19/you-should-make-a-doom-level-part-1/) written by a blogger named Eevee. It took several days to get comfortable with the tools, but I'm very proud of what I put together!

The level architecture in DOOM is constructed as a collection of "sectors", which are made up of "linedefs", which are connected by vertices. You can 

Most of the assets used in my maps are borrowed from the DOOM II WAD itself (WADs are what you store the game data on); because of that, you'll need a copy of `DOOM2.WAD` to play my maps, as they need to be loaded together. However, I did make a few custom textures for this level:

<img src="/assets/images/blog/doom-maps/consumers/banner-screenshot.png" class="blog rounded mx-auto d-block" width="75%">

The grungy banner messages shown in the hallway were created as simple 128x64 textures (actual size shown below). Every pixel counts here!

<img src="/assets/images/blog/doom-maps/consumers/banner.png" class="blog rounded mx-auto d-block">