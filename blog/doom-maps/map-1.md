---
layout: post
title:  "Map 1: Consumers"
coverImage: "/assets/images/blog/doom-maps/consumers/consumers-3.png"
category: blog
post_id: doom-maps
breadcrumbs: 
    - link: "/blog/doom-maps"
      label: "Dev Blog 5: Doom Mapping"

links:
    - label: "Download (requires DOOM II to play)"
      URL: "/assets/files/wads/consumers.wad"
---

My start in Doom mapping came from an interesting assignment prompt in my Experimental Games course:

> Using an existing game as a base, create "game art" that makes a statement about the games industry.<br>
> It can be a mod, something created in a game's level editor, etc. as long as you build some sort of experience from an existing game.

At first I was stumped. We'd learned in class about the concept of "game art", artistic experiences created using games as a toolset for communicating some message. Kind of like [photobashing](https://conceptartempire.com/photobashing/) but with video games. Our professor showed us some [more artsy](https://vimeo.com/16539686), [less gamey](https://www.youtube.com/watch?v=fCmAD0TwGcQ) examples that removed all obstacles from Super Mario Bros. Then we saw two examples that really grabbed me: a [DOOM WAD set in an art museum](https://www.youtube.com/watch?v=w9r_f8un3NE) where you shoot snobby prominent art critics, and an [abstract Wolfenstein 3D mod](https://www.youtube.com/watch?v=24KQiy0U_Uk) that replaced all textures/sprites with disorienting black/white pixelation.

<div class="row">
    <div class="col-md-6">
        <div class="iframe-container">
            <iframe width="720" height="auto" src="https://www.youtube-nocookie.com/embed/w9r_f8un3NE" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen>
            </iframe>
        </div>
    </div>
    <div class="col-md-6">
        <div class="iframe-container">
            <iframe width="720" height="auto" src="https://www.youtube-nocookie.com/embed/24KQiy0U_Uk?start=20" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen>
            </iframe>
        </div>
    </div>
</div>

That week I'd been reading about the [binary-space-partitioning](https://pdfs.semanticscholar.org/c496/61c65c1780053dcc1ccd71abec5f244af2c9.pdf) method used by John Carmack to render 3D environments in DOOM. I was interested in the architectural limitations imposed by the game engine, and how level designers overcame them with creative solutions. This seemed like a wonderful opportunity to ~~shoehorn my personal interests into another assignment~~ make something interesting in an unconventional medium!

Here's a gameplay video. Make sure to watch in 1080p; YouTube is currently throttling video quality (because COVID-19), so you have to set it manually.

<!-- Gameplay video -->
<div class="iframe-container">
    <iframe width="720" height="auto" src="https://www.youtube-nocookie.com/embed/iqGvDaWMp94" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>
</div>

Short and sweet.

In case it isn't clear, the statement made here is that gamers can be a toxic bunch with little respect for the people making the games they love. Finding a successful career in game development is already a herculean task, so it doesn't help when you face strong opposition from your consumers. While it may (or may not) be a small vocal minority that nets the reputation, it's tough to keep that in mind when you're [being called a kike and sent death threats because you chose one store over another](https://medium.com/@perplamps/regarding-whats-been-happening-3af0f27d863c).

As for the development process, it took quite some time to figure out what I was doing here. I started working in SLADE, a DOOM editor with support for macOS and Windows, and followed [this wonderful tutorial](https://eev.ee/blog/2015/12/19/you-should-make-a-doom-level-part-1/) written by a blogger named Eevee. It took several days to get comfortable with the tools, but I'm very proud of what I put together! Thanks Eevee!

The level architecture in DOOM is constructed as a collection of "sectors", which are made up of "linedefs", which are connected by vertices. Basically, you can draw these flat sectors and mess with their heights to form whatever you want.

<!-- Editor screenshots/gifs -->
<div class="row">
    <div class="col-lg-6">
        <img src="/assets/images/blog/doom-maps/consumers/editor_window-sector_topdown.png" class="blog rounded mx-auto d-block" width="100%" height="auto">
    </div>
    <div class="col-lg-6">
        <img src="/assets/images/blog/doom-maps/consumers/editor_sector_heights.gif" class="blog rounded mx-auto d-block" width="100%" height="auto">
    </div>
</div>

The keyword here is **flat**: everything in (vanilla) DOOM is flat! The engine doesn't support slopes, so you'll have to settle for stairs or an elevator instead.

Most of the assets used in my maps are borrowed from the DOOM II WAD itself (WADs are what you store the game data on); because of that, you'll need a copy of `DOOM2.WAD` to play my maps, as they need to be loaded together. However, I did make a few custom textures for this level:

<!-- Banner texture (in-game) -->
<img src="/assets/images/blog/doom-maps/consumers/banner-screenshot.png" class="blog rounded mx-auto d-block" width="100%" height="auto">

The grungy banner messages in the hallway were created as simple 128x64 textures (actual size below). Every pixel counts here!

<!-- Raw banner texture (keep it actual-size) -->
<img src="/assets/images/blog/doom-maps/consumers/banner.png" class="blog rounded mx-auto d-block">

This was a simple level for me to experiment with, and I had fun learning to work with the engine. Also, by sheer coincidence the map layout ended up looking like a sweet guitar!

<img src="/assets/images/blog/doom-maps/consumers/consumers_map.png" class="blog rounded mx-auto d-block" width="100%">

For my next map, I built upon what I'd learned here to create a more intricate, complex map. Click below to check it out!

#### [> Map 2: Complex](/blog/doom-maps/map-2)