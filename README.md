## Making an artcompiler

### Steps include

* Clone and initialize Graffiticode (https://github.com/graffiticode/graffiticode).
* Clone and initialize the starter artcompiler (L0) as a new language (e.g. L1000).
  * `$ git clone git@github.com:graffiticode/L0.git L1000`
  * `$ cd L1000`
  * `$ npm install`
* Start your compiler as a local service to make sure that all is well.
  * `$ cd ../L1000`
  * `$ make`
* Make sure everything is good.
  * Paste into the code view: `"hello, world!"..`.
  * See "hello, world!" in the form view.
* Design a language that allows you to say things that are interesting and beautiful.
* Edit ./src/lexicon.js to define a vocabulary for that language.
* Edit ./src/compiler.js to translate the ASTs produced from GC into object code that expresses the output of that language.
* Edit ./src/viewer.js to render that object code in an interesting and beautiful way.
* Test your changes.
  * `$ make`
* Start GC as a local server.
  * `$ cd ../graffiticode`
  * `$ make`
* Visit your local GC server (e.g. http://localhost:3000/lang?id=1000) to test.
* Repeat until you are have done something interesting.
