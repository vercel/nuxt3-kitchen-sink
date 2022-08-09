# Middleware

There are three kinds of route middleware:

1. Anonymous route middleware, which are defined directly in the pages where they are used.
2. Named route middleware, which are placed in the middleware/ directory and will be automatically loaded via asynchronous import when used on a page.
3. Global route middleware, which are placed in the middleware/ directory (with a .global suffix) and will be automatically run on every route change.
