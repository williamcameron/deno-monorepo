# deno-monorepo

This is a very simple application using Deno workspaces.  It intialises a very simple Vite website application, that consumes an simple "authentication" module.

`deno i`

`deno task dev`

Visit: http://localhost:5173


You can try username `admin` and `password` to simulute logging in.  The authentication is handled by the `simple-login` package, and only uses simple react state.

The main areas to highlight would be:

* The root deno.json `workspace` element, this allows Deno to be aware of all the packages in the monorepo.
* simple-login deno.json has a `name`, this is used to reference the package within "website"
* website `vite.config.ts` has some custom alias resolution specified. This is needed as we are referencing the package bare specifiers locally.

You can find more info here: https://docs.deno.com/runtime/fundamentals/workspaces/
