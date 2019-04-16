# L314
This is a language for building pie charts.

## Making an artcompiler

### Steps include

* Get, build and start the Graffiticode host app (https://github.com/graffiticode/graffiticode).
* Clone and initialize the starter artcompiler (L314) as a new language (e.g. L314).
  * `$ git clone git@github.com:landonbedell/L314.git`
  * `$ cd L314`
  * `$ npm install`
* Start your compiler as a local service to make sure that all is well.
  * `$ cd ../L314`
  * `$ make`
* Make sure everything is good.
  * Visit your local GC server (e.g. http://localhost:3000/lang?id=314) to test.
  * Paste into the code view: `"hello, world!"..`.
  * See "hello, world!" in the form view.
* Design a language that allows you to say things that are interesting and beautiful.
* Edit ./src/lexicon.js to define a vocabulary for that language.
* Edit ./src/compiler.js to translate the ASTs produced from GC into object code that expresses the output of that language.
* Edit ./src/viewer.js to render that object code in an interesting and beautiful way.
* Test your changes.
  * `$ make`
  * Edit the code in the code view.
* Repeat to taste.

## Example Code
### Basic Donut Graph
`
pie "Test" [
  slice "A" 7 "#f00", 
    slice "B" 5 "#00f",
    slice "C" 10 "#0f0",
] {width:600, height:400, donut:true}..
`
