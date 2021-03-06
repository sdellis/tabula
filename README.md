![tabula icon](tabula.png?raw=true) Tabula
=============================================================================
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

_"Show, don't tell."_

Tabula is a "starter kit" for native web applications (aka, "single-page apps") that make use of the IIIF Presentation API.

## About tabula
Tabula organizes code in an MVC-like way, so developers who are used to Ruby on Rails (and similar frameworks) will find the approach familiar.  The data modeling extends the ever popular and enduring Backbone models and collections. Tabula keeps code simple by adhering to the concepts put forth in [Human Javascript](http://read.humanjavascript.com/), and much credit is due to [Henrik Joreteg](https://joreteg.com/) and the folks at [&yet](https://andyet.com/) in the development of this approach.  Read more at [Ampersand.js](https://ampersandjs.com/).

### Get Started
```
npm install
npm start
```

### Demo
You can [log in with your GitHub username](https://tabula.surge.sh) to play with _tabula_.  The demo is in a rudimentary state and is set up as a simple slide show app, although not fully functional yet.  It shows basic integration with GitHub repos (as potential annotation stores) and a Presentation library. This will be completed before the first release.

## Features

### Manifesto Integration
If you are just building a "read-only" application, you can take advantage of the wonderful [Manifesto](http://blog.edsilv.com/manifesto/) library, developed by the Universal Viewer lead developer, Ed Silverton (Digerati).  Once you have retrieved your manifests using ```fetch()```, you have access to all the Manifesto methods.  Here's a usage example for printing out a label:

```
this.manifest.getLabel()
```

### Manifest Authoring
One reason why Tabula does not make Manifesto more central to the core library is because it does not provide any "setter" methods.  This may change in the future, but it has been more expedient, practical, and simple to use the Backbone/Ampersand architecture and all of the "freebies" that come with it, including authoring (setter) features. Authoring is under development.

### Persistence
The Tabula demo uses [Repono](https://github.com/sdellis/repono) (formerly Manifesto) as it's storage mechanism. Repono is a simple express.js server with a mongodb data store.  Local storage could also be used without too much configuration.  Other endpoints can easily be configured, but you will likely only be able to "read" and not write to them.

### React and Hot Loading
Tabula uses a [React](https://facebook.github.io/react/) view layer, which helps with managing state and performance.  It also uses the react-hot-loader, so that code changes happen instantaneously in the browser, making for easy development.  It also uses [Stylus](https://learnboost.github.io/stylus/) as a CSS pre-processor, which offers lots of power with utmost simplicity.

### Authentication
Tabula provides an example of authenticating with [GitHub's OAuth implementation](https://developer.github.com/v3/oauth/).  This is a [simple helper](https://github.com/sdellis/tabula/blob/master/src/helpers/github-mixin.js) that should serve as an example for mixing in other types of authentication schemes.

### GitHub as an Annotation "Server"/Endpoint
One reason we have gone with GitHub as an authentication example is because GitHub can be used, with some facade-pattern-based middleware (currently vaporware), as an annotation endpoint.  The current options for annotation servers with authentication is sparse, and can be hard to configure.  GitHub provides a fairly simple API that can be used to create annotations.  While one may authenticate using GitHub credentials, the ability to use it as an annotation store is still under development.

### Contributing
Contributions will be welcome after the initial release.  Tabula uses [Standard](http://standardjs.com/) to enforce a simple code style.  Unit tests are coming! They are the last step before official release of 1.0.0.  All pull requests will need to pass tests and adhere to the Standard style guide.

## Roadmap
As a "starter kit", Tabula seeks to be a simple reference application for the IIIF Presentation API.  The name _Tabula_ (latin for slate or tablet) was selected as a possible "namespace" for a suite of similar applications because it is a tablet with many possibilities.  The notion of _tabula rasa_ ("clean state" or "blank tablet") connotes a view of mind as originally blank, on which experience leaves marks.  This notion is the basis of Empiricism and ultimately, the scientific method.  Plans for instruction-oriented slide show (Tabula Eruditio) and musical "fakebook" (Tabula Musica) extension apps are already under way.
