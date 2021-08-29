<h4>This is a basic following of a the documentation behind the @hapi/glue server composition tool.  It sets up a basic Hapi Server, but allows for a more fluid registration of plugsin, which I have yet to explore.  It took me a while to figure out that it had @hapi/hapi installed by default and thusly utilized it's syntax after instantiating its Glue server once it had taken in a manifest object.</h4>

You can install @hapi/glue through the npm:

`npm install @hapi/glue`

<p>The documentation for @hapi/glue can be found <a href="https://hapi.dev/module/glue/">here</a></p>

_Note that you do not need to install @hapi/hapi when installing @hapi/glue as it is simply a syntactically sweetened version of @hapi/hapi._
