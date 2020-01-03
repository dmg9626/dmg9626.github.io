---
title: Boids!
layout: game
game_id: boids
playable: true
---

*Note: Performance is dependent on your machine's processing power. I managed to simulate 200 boids at a stable 60fps on my 2015 Macbook Pro, so it should run well on most modern computers.*

### Description

This is a flocking simulation I've created in Unity. It models the movement patterns of a flock of birds, or a school of fish. The agents themselves are called "boids," originally defined in [Craig Reynolds' 1987 paper on flocking patterns](http://www.cs.toronto.edu/~dt/siggraph97-course/cwr87/){:target="_blank"}.

Each boid moves according to 3 simple rules:
1. **Separation** - Steer to collision with nearby boids
2. **Alignment** - Steer to move in the same direction as nearby boids
3. **Cohesion** - Steer towards the average position ("center of mass") of nearby boids

You can click the screen to add more boids to the simulation, or adjust the settings on the bottom right to alter the weights for each of the 3 behaviors.

---

### Background

This was a weekend side-project I worked on over my winter break. I was inspired by [this video](https://www.youtube.com/watch?v=bqtqltqcQhw) on Sebastian Lague's Youtube channel, and decided to try and implement my own version from scratch. It ended up being much easier than I'd anticipated, although separation was a bit of a challenge at first. 

I referenced my new copy of [AI for Games](https://www.amazon.com/AI-Games-Third-Ian-Millington/dp/1138483974/ref=dp_ob_image_bk) and used a Weighted Blending approach to incorporate each of the 3 behaviors into the boid's movement. This allowed me to expose those weights to the user so they can adjust the weights, fine-tuning the boids' movement patterns to mimic a flock of birds, a school of fish, a herd of cows, or even a swarm of bees.

