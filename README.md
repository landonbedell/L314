## Making an artcompiler

### Steps include

* Clone and initialize the starter artcompiler (L0) as a new language (e.g. L1000).
  * `$ git clone git@github.com:graffiticode/L0.git L1000`
  * `$ cd L1000`
  * `$ npm install`
* Clone the GC repo.
  * `$ git clone git@github.com:graffiticode/graffiticode.git`
  * `$ cd ../graffiticode`
  * `$ npm install`
* Create local Postgres database (Install Postgres if needed).
  * `$ psql -c "create database localgcdb"`
  * `$ psql -d localgcdb -f tools/initgcdb.sql`
  * `$ export DATABASE_URL_LOCAL="postgres://localhost/localgcdb"`.
* Design a language that allows you to say things that are interesting and beautiful.
* Edit ./src/lexicon.js to define a vocabulary for that language.
* Edit ./src/compiler.js to translate the ASTs produced from GC into object code that expresses the output of that language.
* Edit ./src/viewer.js to render that object code in an interesting and beautiful way.
* Start your compiler as a local service.
  * `$ cd ../L1000`
  * `$ make`
* Start GC as a local server.
  * `$ cd ../graffiticode`
  * `$ make`
* Visit your local GC server (e.g. http://localhost:3000/lang?id=1000) to test.
* Repeat until you are have done something interesting.
