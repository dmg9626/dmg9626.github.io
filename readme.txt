Drew Graham
9/10/19

README

To build your local Jekyll site:

1. Navigate into the root directory of your local Jekyll site repository.

2. Run your Jekyll site locally:
	
	$ jekyll serve

	(or alternatively:)

	$ jekyll s

	NOTE: ABOVE NO LONGER WORKS ON MY UNIX SETUP
	USE THIS INSTEAD:

	$ bundle exec jekyll serve

3. Preview your local Jekyll site in your web browser at http://localhost:4000.



TROUBLESHOOTING

If running 
	$ bundle exec jekyll serve

gives you the following error:
- ruby_dep-1.5.0 requires ruby version >= 2.2.5, ~> 2.2, which is incompatible with the current version, ruby 3.1.3p185

Try deleting the Gemfile.lock, updating/removing some of the gem version numbers in Gemfile, and run bundle install again

One gem that may be missing is "webrick" - add it as follows:
$ bundle add webrick
(and then run bundle install again)
