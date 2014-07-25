# Blade and Shade

This project contains the static site for [http://www.bladeandshade.ch](http://www.bladeandshade.ch), the preview is available at [http://kitsane.github.io/bladeandshade/](http://kitsane.github.io/bladeandshade/) and
makes use of the following tools:

* [Middleman](http://middlemanapp.com/) to generate the static web page.

## Installation

The be able to build and run the website locally, make changes and deploy it to [S3](https://aws.amazon.com/s3/), you
need to have the following software on your computer:

### Git

[Git](http://git-scm.com/) is used as version control system to manage the source code and a GUI GitHub client can be
installed from:

* [GitHub for Mac](http://mac.github.com/)

Please have a look at the client help page on how to checkout the project locally to your computer.

### Ruby

[Ruby](https://www.ruby-lang.org/) needs to be installed on your Machine. It's already pre installed on a Mac

[Bundler](http://bundler.io/) needs also be present, you can install it on the command line with:

```Bash
$ gem install bundler
```

## Prepare

To install all dependencies, bundle the project:

```Bash
$ bundle
```

## Run

To run the project, start middleman an open your browser at [http://localhost:4567](http://localhost:4567)

```
$ bundle exec middleman
```

## Build

To build the final site:

```Bash
$ bundle exec middleman build
```

The site will be generated to the `build` directory.
