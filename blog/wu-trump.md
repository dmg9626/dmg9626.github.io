---
layout: post
title:  "Wu-Trump: Make America Swarm Again"
subtitle: "A twitter bot that generates tweets based on Wu-Tang lyrics and Donald Trump's tweets."
# coverImage: "/assets/images/games/surface-tension/cover.png"
category: blog
post_id: wu-trump
---

***Foreword:** This is not any sort of endorsement for President Trump. I know I have two Trump-related things on my site now (see: 
[This Is Trump](/games/this-is-trump)): he's an easy target and apparently a great source of inspiration for side projects.*


I was sitting on the couch one day listening to Wu Tang Clan and it hit me: I should write a bot that reads in Wu-Tang lyrics and Donald Trump's tweets, creates it's own "language" based on the two, and generates tweets!

Ok I'm not exactly sure how the idea came to be, but it was something like that. This was a hilarious side-project that drew on my experiences in previous classes. A few years ago in Advanced Programming Techniques, we learned how to develop a Markov Chain that, when fed a large amount of sample text, constructs a rudimentary language syntax and generates simple (usually nonsensical) sentences. Later on I took Web and Mobile Development, where we learned to leverage REST APIs and make simple GET/POST requests.

I started by finding a simple open-source Markov Chain implementation in Python, [Markovify](https://github.com/jsvine/markovify). It let me control stuff like sentence length, so I could ensure the tweets generated wouldn't exceed Twitter's 280 character limit. I tested it out by feeding it some Wu-Tang; the lyrics from each song on Enter The 36 Chambers were easy to find on Genius.com. I had to clean up/cut a bit of the text in the lyrics text files, as RZA threw in lots of random conversational bits and Genius added a bunch of annotations.


<!-- ![My helpful screenshot](/assets/images/blog/wu-trump/raw_lyrics.png) -->

<!-- Lyrics before/after cleaning up -->
<div class="row text-center">
    <img src="/assets/images/blog/wu-trump/raw_lyrics.png" class="text-center" width="50%">
    <img src="/assets/images/blog/wu-trump/cleaned_up_lyrics.png" class="text-center" width="50%">
</div>

<br>

After cleaning up the input, I was able to start generating some Wu-Tang lyrics:

<!-- Image of generated Wu-Tang tweets -->
<img src="/assets/images/blog/wu-trump/generated_lyrics.png" class="text-center" width="75%">

Not my goal, but an enjoyable milestone.

The next step was to pull tweets from Donald Trump's twitter. I found a Twitter API named Tweepy and set up a public/private pair of consumer keys and access tokens. I was able to start pulling Trump's tweets fairly easily, so I set it to pull his most recent 1000 tweets and write them to a file:

<!-- Image of fetching tweets -->
<img src="/assets/images/blog/wu-trump/fetching_tweets.png" class="text-center" width="75%">

Now all that's left was to write a simple script that read in all the text from the Wu-Tang lyrics files and the Trump tweets file.


<!-- CODE BLOCK -->
{% highlight python %}
def ReadFolder(folder_name):
    # read in text from each file in folder...

# Read in Wu tang lyrics and trump tweets
wutang = ReadFolder("WuTang")
trump = ReadFolder("Trump")

# Put them together and build the model
text = wutang + trump
text_model = markovify.NewlineText(text)

# Print 10 randomly-generated sentences of no more than 140 characters
for i in range(10):
    print(text_model.make_short_sentence(280))
{% endhighlight %}
<!-- CODE BLOCK -->

Running this spits out a handful of sentences generated from both text sources.

<!-- Image of generated tweets -->
<img src="/assets/images/blog/wu-trump/generated_tweets.png" class="text-center" width="100%">