---
layout: post
title:  "Dev Blog 1: Wu-Trump"
subtitle: "Make America Swarm Again"
# coverImage: "/assets/images/games/surface-tension/cover.png"
category: blog
post_id: wu-trump
---

***Foreword:** This is not any sort of endorsement for President Trump. I know I have two Trump-related things on my site now (see: 
[This Is Trump](/games/this-is-trump)): he's an easy target and apparently a great source of inspiration for side projects.*

I was sitting on the couch one day listening to Wu-Tang Clan and it hit me: I should write a bot that reads in Wu-Tang lyrics and Donald Trump's tweets and generates its own tweets based off the two!

<blockquote class="twitter-tweet tw-align-center" data-dnt="true">
<p lang="en" dir="ltr">Nancy Pelosi and the fat ass, Wanna get on it like a eighteen wheeler</p>&mdash; donald trump tweets mixed with wu tang lyrics (@wutrump) <a href="https://twitter.com/wutrump/status/1182816805208784896">October 12, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center" data-dnt="true">
<p lang="en" dir="ltr">Money over bimbos, that&#39;s what we are MAKING AMERICA GREAT AGAIN! Erupts your brain from the Brooklyn Zoo!<br><br>John will be interviewed by Jeanine Pirro at 9:00 P.M. on <a href="https://twitter.com/FoxNews">@FoxNews</a> at 2:00 P.M. and 7:00 P.M.</p>&mdash; donald trump tweets mixed with wu tang lyrics (@wutrump) <a href="https://twitter.com/wutrump/status/1094695081355952129">February 10, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


Ok I don't remember exactly how the idea came to be, but it was something like that. 

This was a wacky side-project that drew on my experiences in previous classes. A few years ago in Advanced Programming Techniques, we learned how to develop a Markov Chain that reads in a bunch of sample text, constructs a rudimentary language syntax, and generates simple (usually nonsensical) sentences. Later on I took Web and Mobile Development, where we learned to leverage REST APIs and make simple GET/POST requests.

For this project I used a simple open-source Markov Chain implementation in Python, [Markovify](https://github.com/jsvine/markovify). It let me control stuff like sentence length, so I could ensure the tweets generated wouldn't exceed Twitter's 280 character limit. If you're interested in learning more about the algorithm, check out [this article](https://drmysterian.com/how-to-code-a-python-markov-chain-text-generator/); I read it before starting this project, and it was helpful to see how it works in depth. 

I tested it out by feeding it some Wu-Tang; the lyrics from each song on Enter The 36 Chambers were easy to find on Genius.com. I had to clean up/cut a bit of the text in the lyrics text files, as RZA threw in lots of random conversational bits and Genius added a bunch of annotations.

<!-- Lyrics before/after cleaning up -->
<div class="row text-center">
    <img src="/assets/images/blog/wu-trump/raw_lyrics.png" class="blog text-center" width="50%">
    <img src="/assets/images/blog/wu-trump/cleaned_up_lyrics.png" class="blog text-center" width="50%">
</div>


After cleaning up the input, I was able to start generating some Wu-Tang lyrics:

<!-- Image of generated Wu-Tang tweets -->
<img src="/assets/images/blog/wu-trump/generated_lyrics.png" class="blog text-center" width="75%">

Not my goal, but an enjoyable milestone.

The next step was to pull tweets from Donald Trump's twitter. I found a Twitter API named [Tweepy](https://www.tweepy.org/) and set up a public/private pair of consumer keys and access tokens. I was able to start pulling Trump's tweets fairly easily, so I set it to pull his most recent 1000 tweets and write them to a file:

<!-- CODE BLOCK -->
```python
## Authenticate using API keys...

# Open file (create if doesn't exist)
f = open(filename,"w+")

i = 0
limit = 1000

# fetch tweets
for status in tweepy.Cursor(api.user_timeline, count=limit, screen_name='@realDonaldTrump', tweet_mode='extended').items():
    
    # skip retweets
    if hasattr(status, 'retweeted_status'):
        continue
    
    # get full text and parse symbols correctly (ex. &amp -> &)
    full_text = status._json['full_text']
    tweet = HTMLParser.HTMLParser().unescape(full_text)

    # write tweet text to file (make sure to encode as UTF-8 to avoid encode error when writing)
    f.write(tweet.encode('utf-8') + "\n")
    
    # stop if reached limit
    i += 1
    if i >= limit:
        break

print "wrote",i,"tweets to",filename
f.close()
```

<!-- Image of fetching tweets -->
<img src="/assets/images/blog/wu-trump/fetching_tweets.png" class="blog text-center" width="75%">


Then all I had to do was write a simple script that fed all the Wu-Tang lyrics and Trump tweets into Markovify and generated sentences for tweets:


<!-- CODE BLOCK -->
```python
def ReadFolder(folder_name):
    ## read in text from each file in folder...

# Read in Wu tang lyrics and trump tweets
wutang = ReadFolder("WuTang")
trump = ReadFolder("Trump")

# Put them together and build the model
text = wutang + trump
text_model = markovify.NewlineText(text)

# Print 10 randomly-generated sentences of no more than 140 characters
for i in range(10):
    print(text_model.make_short_sentence(280))
```


Running this spits out a handful of sentences generated from both text sources.

<!-- Image of generated tweets -->
<img src="/assets/images/blog/wu-trump/generated_tweets.png" class="blog text-center" width="100%">


You can see that all of them are essentially gibberish sentences, and some clearly draw more from the Wu-Tang text from the Trump tweets (and visa versa for others). There's also a very neat unintended side-effect of this program though: some sentences include hashtage and even quote-tweets used in Donald's tweets. Twitter seems to handle these elements of tweets as raw text in the tweet body, which get represented as embedded conetent when viewed on Twitter. I didn't expect this to happen at all, but it was really entertaining to see some of these tweets be targeted at random accounts from Donald's tweets.

<blockquote class="twitter-tweet tw-align-center" data-dnt="true">
<p lang="en" dir="ltr">And I&#39;m about to blow up a negotiation. The Taliban has never had such support! <a href="https://t.co/t7hWZ555sy">https://t.co/t7hWZ555sy</a></p>&mdash; donald trump tweets mixed with wu tang lyrics (@wutrump) <a href="https://twitter.com/wutrump/status/1182818363405299715">October 12, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Unfortunately I couldn't find a reliable way to automate the process of turning these sentences into tweets. In theory I could set it up to automatically generate a sentence and tweet it every day or so, but I wanted to make sure that each tweet had a good balance of Tang and Trump. More importantly, each tweet had to be funny! I decided to just cherry-pick my favorite sentences generated by the program and manually tweet them on the associated twitter account.

<blockquote class="twitter-tweet tw-align-center" data-dnt="true">
<p lang="en" dir="ltr">The only &quot;Collusion&quot; is that the President was a nigga who try to run game on a nigga</p>&mdash; donald trump tweets mixed with wu tang lyrics (@wutrump) <a href="https://twitter.com/wutrump/status/1100873637958160385">February 27, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

This was a fun project to work on outside of my work at Night Kitchen. My friends, coworkers, and even professors really enjoyed it! In fact, the professor who teaches the class where I learned this stuff asked to share it with his students as motivation for the Markov Chain assignment. I'm glad I could use what I've learned to make something fun and cool with swear words and computer science.

<blockquote class="twitter-tweet tw-align-center" data-dnt="true">
<p lang="en" dir="ltr">THANK YOU you Dallas, Texas - I love gats, if rap was a gun, you wouldn&#39;t bust back</p>&mdash; donald trump tweets mixed with wu tang lyrics (@wutrump) <a href="https://twitter.com/wutrump/status/1191577561186361344">November 5, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>