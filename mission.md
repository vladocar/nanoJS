# nanoJS Mission & Philosophy

Many developers asked: why not use vanillaJS?

If that works for you use vanillaJS. The problem is you will encounter the same problems over and over again like constant selector declaring or CSS injections. Don't repeat yourself. Probably the next step will be you will build some custom JS function that will help you dealing with vanillaJS.

What kind of syntax will you use for your custom functions?

Probably something that works for you, but why not use the syntax that most of the developers are familiar -> jQuery syntax. That is the origin story of nanoJS.

Other important thing every method should be independent (standalone) of other methods. With that you can add or remove methods without compromising the integrity of the library. That means more code redundancy but also more customisable library directly from the main code.

All methods should use native JavaScript if possible.

All methods should have readable and clear syntax.

Code readability has advantage over browser support. We need to push web technology forward. Currently almost all the library works in IE9. Some methods will not work in IE9 and that is fine.

Most of JS libraries are “black box” meaning you shouldn’t interact with them directly. Not this one. We encourage  you to interact with nanoJS.js directly and change whatever you like, add or remove methods, change the names of the methods .. go crazy make your own library :)
