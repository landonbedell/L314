## Making an Artcompiler

### Steps include

* Clone this repo which contains a prototypical art compiler into a renamed repo (e.g. L201).
* Clone the GC repo (https://github.com/graffiticode/graffiticode).
* Populate the postgres database (e.g. 'pgsql < dev/init_data.dump').
  * `$ psql -c "drop database localgcdb"`
  * `$ psql -c "create database localgcdb"`
  * `$ psql -d localgcdb -f tools/initgcdb.sql`
* Set environment variable to `DATABASE_URL_LOCAL="postgres://localhost/localgcdb"`.
* Design a language that allows you to say things that are interesting and beautiful.
* Edit ./src/lexicon.js to define a vocabulary for that language.
* Edit ./src/compiler.js to translate the ASTs produced from GC into object code that expresses the output of that language.
* Edit ./src/viewer.js to render that object code in an interesting and beautiful way.
* Start your compiler as a local service (make).
* Start GC as a local server (node app).
* Visit your local GC server (e.g. http://localhost:3000/lang?id=201) and test.
* Repeat until you are have done something interesting.
