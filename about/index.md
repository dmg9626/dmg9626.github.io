---
layout: about
title: About Me
permalink: /about/
---
## About Me

Hello! I'm a game programmer in Cambridge, MA working at [Disbelief](https://disbelief.com/). I graduated from Drexel University in 2020, with a Bachelor's in Computer Science and a concentration in Game Development and AI.

Games were a big part of my life growing up, and I'm lucky enough to enjoy a career making them. Nothing thrills me more than watching someone else enjoy a game I worked on!

When I'm not working on/playing games, I can be found skateboarding with friends, enjoying the weather, or watching a movie.

----

## I'm looking forward to:
<div class="row">
    <!-- generate cards from about.yml -->
    {% for item in site.data.about.looking-forward-to %}
        {% include enjoying_card.html %}
    {% endfor %}
</div>

## I'm currently enjoying:

<div class="row">
    <!-- generate cards from about.yml -->
    {% for item in site.data.about.currently-enjoying %}
        {% include enjoying_card.html %}
    {% endfor %}
</div>

----

## I've recently enjoyed:

<div class="row">
    <!-- generate cards from about.yml -->
    {% for item in site.data.about.recently-enjoyed %}
        {% include enjoying_card.html %}
    {% endfor %}
</div>
