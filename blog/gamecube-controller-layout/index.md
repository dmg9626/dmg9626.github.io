---
layout: post
title:  "The Gamecube controller button layout is kinda sick"
# doesn't really need a cover image
# coverImage: "/blog/gamecube-controller-layout/images/youtube-thumbnail.png"
category: blog
post_id: gamecube-controller-layout
---

I was up late at night (12:14 AM), looking in the not-very-targeted Recommended sidebar of Youtube after watching [a video](https://www.youtube.com/watch?v=DILdviilVKs), and I saw this video thumbnail:

<div id="images">
    <img src="/blog/gamecube-controller-layout/images/youtube-thumbnail.png" 
    alt="A Youtube thumbnail by Shivering Pixel titled: Why Are the Gamecube Controller's Buttons Shaped Like That?" 
    class="blog rounded mx-auto d-block" width="60%">
</div>

I didn't click the video, but I stopped to think about it myself... The layout is distinctly different from the now-standard + layout in which we find our face buttons on modern controllers:

<div class="row" id="images">
    <div class="col-md-4">
        <img src="/blog/gamecube-controller-layout/images/xbox-controller-layout.webp" class="blog rounded mx-auto d-block" width="100%" height="auto">
    </div>
    <div class="col-md-4">
        <img src="/blog/gamecube-controller-layout/images/ps5-controller-layout.webp" class="blog rounded mx-auto d-block" width="100%" height="auto">
    </div>
    <div class="col-md-4">
        <img src="/blog/gamecube-controller-layout/images/joycon-controller-layout.jpg" class="blog rounded mx-auto d-block" width="100%" height="auto">
    </div>
</div>

Now here's a closer look at the GameCube controller's face buttons, with some example controls overlaid (it seems to be Crazy Taxi?):
<div id="images">
    <img src="/blog/gamecube-controller-layout/images/gamecube-example-input-layout.jpeg" 
    alt="The gamecube controller's face button layout, with controls labeled as such: (A: Accelerate) (B: Brake) (Y: Reverse) (X: Item)?" 
    class="blog rounded mx-auto d-block" width="60%">
</div>

Notice how the big circular A and B buttons are bound to consistent active-verbs, "go forward" and "stop" (you are using these all the time in a racing game). Then you have the funky bean-shaped X and Y buttons bound to more contextual actions, "use item" and "reverse" (you use these sometimes, but not nearly as often). The size and shape of the buttons provide them a clear hierarchy of importance (listed from highest to lowest):
1. A
2. B
3. X/Y

A designer can easily assign input bindings based on their priority:
1. (A: Go Forward)
2. (B: Stop)
3. (X: Go Forward) (Y: Reverse)

Acceleration and braking make up much of your movement kit, the backbone of a racing game. You wanna go forward real fast in a racing game so that gets the top priority (A). When you're rounding a turn or on a collision course you might want to brake, so that gets the next priority down (B). X and Y are handed the less common actions, and hey look at that you have an intuitive input scheme!

If you never felt like you had to look down and read the button labels, it's because your brain isn't really processing their labels as much as distinguishing them via their natural shape language. Since A is the highest priority button, it belongs in the middle of the others and should be the biggest and most attractive one to rest your thumb on. Other buttons are just a short hop away. It's brilliant and I don't know why we strayed from the path.

I've found that one of the most mind bending puzzles of game design is binding inputs for a gamepad. Keyboards provide an ocean of keys to slap stuff on, but most modern gamepads only have:
* 2 thumbsticks (axes almost universally used for movement/camera control)
* 10 face buttons (2 triggers, 2 bumpers, 4 face buttons, Start + Select/Back/Options*)
* 2 click buttons on the thumbsticks
* 1 D-pad (provides 4 input buttons)

\* Nobody can figure out what to name this thing!

So about 16 buttons. Some games have way more verbs than that! You have to get creative with context-sensitive inputs like buttons the player can reconfigure to a large selection of tools/abilties, or "modes" that toggle different behaviors for buttons. Supporting input on a gamepad is a whole endeavor that is largely unappreciated and taken for granted!




<div  id="images">
    <img src="/blog/gamecube-controller-layout/images/joycon-sideways-1.jpg" 
    alt="A Youtube thumbnail by Shivering Pixel titled: Why Are the Gamecube Controller's Buttons Shaped Like That?" 
    class="blog rounded mx-auto d-block" width="60%">
</div>
This looks weird, man! I hope they revisit this shape language in their next system's controller.