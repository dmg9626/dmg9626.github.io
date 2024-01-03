---
layout: post
title:  "Dev Blog 7: Passing the AAA Game Programming Interview"
coverImage: "/blog/passing-the-interview/images/pepe-silvia-1.avif"
category: blog
post_id: passing-the-interview
---

This is a guide written for a post-undergrad game developer who's struggling to get past (or even reach) the interview stage for a AAA game programming position. It's tough out there, and a lot of it (far too much) comes down to "did you attend an Ivy League school." But I managed to get there; I work at [Disbelief](https://disbelief.com/), a studio regularly contracted to work on a plethora of AAA games you've probably played and certainly seen. I was in your shoes once, and you can do it too!

----

## 1: Getting your foot in the door
What you need is a solid portfolio to demonstrate your experience and prove you can hit the ground running. Different studios look for different things, but this is what I learned from the studios I targeted and interviewed with.

### Get experience making games in C++
This is important. The mistake I made in my job hunt was to assume that, if I just make sufficiently cool stuff in Unity and pass their C++ tests, they'll see I'm a good fit, right? In practice, this often ends up with your resume tossed in the trash, robbing you of the chance to prove your C++ capabilities.

There is a sentiment among industry game programmers that Unity is a walled garden, a bowling lane with bumpers allowing you to ignore your runtime exceptions until it's time to ship your game. In some respects this is true, but I'd argue that it's unfair to assume incompetency from the tool of choice. Unfortunately, these are the stubborn lot you have to appease to earn the privilege of arguing about this at happy hour after work.

If you don't have much experience in C++, I'd start by solving problems on [LeetCode](https://leetcode.com/) or [HackerRank](https://www.hackerrank.com/) every day or so until you feel comfortable with the language. It also helps to read about various little ways to make your code more efficient and readable. Some simple ones:
* Marking a non-static function as `const` can allow the compiler to make optimizations (with the constraint of the function not producing any side effects)
* When iterating over a list of elements, always make sure to iterate via pointer or reference (to avoid unnecessary memory copy)
* If your code performs the same task a multitude of times, multithreading it can make it run leagues faster (you'll have to architect the program with this in mind, though)

I would suggest making something simple in Unreal or Godot, for the sake of both proving you can operate in C++ land and developing skill in an engine you may end up using in your role. For that latter reason, I would recommend Unreal over Godot, along with the fact that it's a more finely honed tool from decades of development. Feel free to ignore me and pick whichever one you prefer to get a project on your portfolio.

### Work on appealing projects
While there isn't really a "wrong" type of project for a portfolio, it can be smart to gear your work towards a specific type of role or skillset. Maybe you want to learn more about graphics programming (make a walking sim with fancy shaders/post proc), or you're feeling sour after getting burned in an interview with Insomniac Games (make your own Spider Man-like platformer)*.

It can be overwhelming to start any project, but what helped me was to find a game jam and scope my work around the time constraints. Some jams provide a vague prompt around which you can brainstorm your idea. In the best case scenario, you can find a friend or two in a similar situation that are willing to work together. And don't be afraid to use asset store artwork for your game! That's what my group did for [Flashback](/games/flashback), which placed #11 in the Brackeys Game Jam.

_\* This project helped me get hired at Disbelief, actually. I'll have to make a blog post about that too sometime._

### Present them in a fancy way
Remember, the recruiter looking at your application is going through hundreds of these a day. You want to make it as seamless and simple as possible for them to see what makes you stand out. That's the whole reason I made this personal website! Most of the project entries on [my resume](/assets/pdf/resume.pdf) link back to pages here that describe what I did in more detail, accompanied by pictures and even a playable verison in the browser. 

It's easy to put together a simple little portfolio page on [Wordpress](wordpress.com) or [itch.io](itch.io), but I'm a cheap bastard and cobbled this site together with blood sweat and [Bootstrap](https://getbootstrap.com/) + [Github Pages](https://pages.github.com/) so I only have to pay $2 a month in AWS upkeep.

### Tuning your applications
Now you've got your portfolio of projects and your C++ experience, and it's time to apply for those jobs. My application process was honed for over a year, and went as follows:
* Pick a company to apply for
* Find a position on their website that sounds right for me
* Carefully read the job description
* Tweak my resume to match the criteria as much as possible
* Write a cover letter that demonstrates how I'm a fit for the job (more on this later)
    * Bonus points: address it to a specific recruiter at the company, if you can find one on Linkedin
* Send it off ~~and perform another blood sacrifice~~

Your cover letter is more important than you think it is. While I doubted that it was even being read by anyone, my boss at Disbelief says my cover letter stood out and made a great impression. You'll want to structure it something like this:
1. (intro) I'm a kickass programmer and I want to do awesome stuff for you
2. (body) Look: I worked on these projects/teams that demanded the specific skills called for in the job description
3. (closer) Therefore, I think I am a great fit for this role and am looking forward to my first step in the industry

This sounds incredibly demanding, but you'll find that different positions often describe very similar criteria. If you save all of your cover letters, you'll be able to grab snippets from here and there, slapping them together with a profreeding pass to the same effect as writing one from the ground up. It also helps to express your passion for the games they make. This fits neatly into sections 1 and 3, making them read more sincere than clinically professional.

[Click here](pdf/cover_letter_example.pdf) to see a cover letter I wrote for a position at Ubisoft.

---

## 2: Passing the interview
Hooray! You've been selected by a recruiter as prospective candidate #17 and you're jumping for joy. But what does the interview process look like? It varies, but this is what I've seen most commonly:

1. A take-home programming test for you to solve over the next week
2. An HR screen to make sure you're not a white supremacist
3. A call with an engineer who asks you various questions on your experience, how you'd go about solving hypothetical problems, maybe a whiteboard problem
4. Final boss battle: the 5 hour panel where you prove your skills once and for all

Getting this far is very valuable, even if the steps ahead feel like a marathon. The concept of the take home test is, in my opinion, criminal (spend 10+ hours doing uncompensated work!), but if you can prove your mettle here, you'll be in a good spot for the remaining legs of the race. Worst case scenario, you fail and now have a better idea of the caliber of problem to expect. In that case, you can (and should) reach out to ask for any feedback on your work, so you can better learn from your mistakes.

Sadly, I don't really have any secret advice or tricks for succeeding in the actual interview. Like your favorite roguelikes, it's a gauntlet that you find yourself in again and again, pushing a little further than the last attempt, crawling through miles of glass on your hands and knees to that elusive finish line. Between 2020 and 2021 I found myself reaching various stages of this process about 5-6 times before finally getting my first offer. It was agonizing to get past the final interview, only to be punted all the way back to the start because I'm *just* not good enough. 

<img src="images/jobland.gif" class="blog rounded mx-auto d-block">

It's tough, but you have to persevere with the knowledge that making games isn't some god-given talent; it's a skill you develop with years of hard work. All the people you're interviewing have been in your shoes (except the Ivy Leagues, theirs were comfier), and once you managed to climb over this barbed wire fence you're in the club! Once you've got job experience, you'll have an easier time passing interviews and getting offers, due to both gained experience and perceived competency.

The most frustrating part is that, in retrospect, I'm not sure exactly how I'd improve the process. You want to be sure the engineers you're hiring are up to snuff, rather than find out months down the line that they're just not gonna make it. You need to watch them work on the spot so you know they're not just paying some other guy to pass tests for them. Maybe that's the problem, though - is this implicit lack of trust one of those rotten American traits seeping its way into an already-arduous process? Is it just due diligence? It's hard to say for sure.

---

Anyway, that's all I've got to offer. Hopefully this helps give you an idea of what you're up against, and provides a path to securing your dream position. If you work at it long enough, with time and effort you'll eventually you will find yourself there.