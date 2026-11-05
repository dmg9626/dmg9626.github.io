---
layout: about
title: About Me
permalink: /about/
---
## About Me

Hello! I'm a game programmer in Cambridge, MA working at [Disbelief](https://disbelief.com/). I graduated from Drexel University in 2020, with a Bachelor's in Computer Science and a concentration in Game Development and AI.

As a game developer with over 10 years of experience in writing code for gameplay, network, and user interface, I empower teams to ship AAA titles. I work closely with designers, combining my creative and technical intuition to turn their ideas into playable experiences.

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
