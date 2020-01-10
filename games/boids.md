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

Before implementing these 3 behaviors, I first had to get boids to detect each other when nearby. I implemented this as a cone-shaped field of vision made up of raycasts. As you can see below, this approach allowed me to optimize performance by tweaking the cone's width, range, and number of raycasts.

<img src="/assets/images/games/boids/boids_debug.gif" class="blog rounded mx-auto d-block" width="100%">

Now boids could sense their neighbors. Time to start programming the flocking behaviors.

```c#
void Update()
{
    // Default to movement in straight line
    Vector3 forward = transform.up;

    // Get nearby boids
    List<Boid> boids = BoidDetection.Instance.NearbyBoids(this);

    // Get separation/alignment/cohesion vectors
    Vector3 separation = BoidDetection.Instance.GetSeparation(this, boids).normalized;
    Vector3 alignment = BoidDetection.Instance.GetAlignment(this, boids).normalized;
    Vector3 cohesion = BoidDetection.Instance.GetCohesion(this, boids).normalized;

    // Sum each vector together
    Vector3 sum = (forward + separation + alignment + cohesion).normalized;

    // Apply resulting rotation to boid
    RotateTowards(sum);

    // Move forward in direction of new rotation (scaled by movement speed)
    transform.position += transform.up * moveSpeed * Time.fixedDeltaTime;
}
```

<img src="/assets/images/games/boids/boids_slow.gif" class="blog rounded mx-auto d-block" width="80%">

I was now getting proper boid behavior! Unfortunately I was also getting about 15-25 frames per second on my laptop. Normally this is where I'd stop and move development to my desktop, but I knew there was still some optimizations I could make. Lowering the number of raycasts performed during detection helped a bit, but I was still getting lousy performance. I decided to look at the the code where I was performing the raycasts:

```c#
public List<Boid> NearbyBoids(Boid self)
{
    List<Boid> nearbyBoids = new List<Boid>();
            
    // Perform each raycast around the vision cone
    for(int i = 0; i < raycastCount; i++) {
        /// Create ray with current angle... (some code omitted)
        Ray ray = new Ray(self.transform.position, direction);

        /// Perform raycast, store results in hits (some code omitted)
        RaycastHit[] hits = Physics.RaycastAll(ray, range);

        // Add any hits returned to list
        foreach(RaycastHit hit in hits) {
            if(hit.transform.TryGetComponent(out Boid otherBoid)) {
                nearbyBoids.Add(otherBoid);
            }
        }
    }

    return nearbyBoids;
}
```

On closer inspection, I realized it was allocating a new RaycasttHit[] array for every raycast performed! This could be the bottleneck.

While searching online, I saw someone suggest using a method called RaycastNonAlloc() instead of RaycastAll(). It performs the same work, but without generating garbage; rather than generating a new array on each call, it fills a pre-allocated with the RaycastHit results.

```c#
public List<Boid> NearbyBoids(Boid self)
{
    List<Boid> nearbyBoids = new List<Boid>();
    
    // Don't store more than 2 hits per raycast - helps performance in large clusters
    int hitsPerRaycast = 2;

    // Instantiate array to hold hits returned by each raycast (required for Physics.RaycastNonAlloc)
    RaycastHit[] hits = new RaycastHit[hitsPerRaycast];

    // Perform each raycast around the vision cone
    for(int i = 0; i < raycastCount; i++) {
        /// Create ray with current angle... (some code omitted)
        Ray ray = new Ray(self.transform.position, direction);

        /// Perform raycast, store results in hits (some code omitted)
        int numHits = Physics.RaycastNonAlloc(ray, hits, range);

        // Add any hits returned to list
        for(int j = 0; j < numHits; j++) {
            RaycastHit hit = hits[j];
            if(hit.transform.TryGetComponent(out Boid otherBoid)) {
                nearbyBoids.Add(otherBoid);
            }
        }
    }

    return nearbyBoids;
}
```

After this small change, the performance quadrupled to around 60 frames per second! I was overjoyed and immediately plunked another hundred boids into the simulation, with no noticeable performance dips.

<img src="/assets/images/games/boids/boids.gif" class="blog rounded mx-auto d-block" width="80%">

---

Now that I was happy with performance, I wanted to expand on the demo's functionality a bit by letting the user control the priority assigned to separation/alignment/cohesion during steering.

<img src="/assets/images/games/boids/boids_settings.gif" class="blog rounded mx-auto d-block" width="75%">

I referenced my new copy of [AI for Games](https://www.amazon.com/AI-Games-Third-Ian-Millington/dp/1138483974/ref=dp_ob_image_bk) (awesome book by the way) and used a Weighted Blending approach to incorporating each of the 3 behaviors into the boid's movement. This allowed me to expose those weights to the user, allowing them to fine-tune the boids' movement patterns to mimic a flock of birds, a school of fish, a herd of cows, or even a swarm of bees.

I'm very happy with how this came out! This could be a very useful tool for quickly implementing some fauna in a game (might come in handy on an upcoming project...). It could also be used as a nice interactive tool for teaching others how the Boid flocking pattern works. Maybe I can make it work in 3D space! Either way, I had fun making it and I'm looking forward to using it in the future!