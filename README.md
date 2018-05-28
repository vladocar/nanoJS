# nanoJS

[![License MIT](https://img.shields.io/badge/licence-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)
[![Gzip Size](https://img.badgesize.io/https://unpkg.com/@vladocar/nanojs@1.0.1/src/nanoJS.min.js?compression=gzip)](https://unpkg.com/@vladocar/nanojs@1.0.0/src/nanoJS.min.js)
[![npm](https://img.shields.io/npm/v/@vladocar/nanojs.svg)](https://www.npmjs.com/package/@vladocar/nanojs)


Minimal standalone JS library for DOM manipulation

nanoJS is around 100 lines of code (0.6 Kb compressed) JavaScript library for basic DOM manipulation. It has jQuery like syntax and supports chaining.

Syntax demos:

```javascript

$(".someClass").css("background-color:green;").html("Hello World");

$('#c').animate('2.3', '1.2','0','1','1','0','0', '0','0','1').css('background-color:red').text('Hello');

$("#a").on("click", function(){

  $("#someDiv").css("background-color:green;color:#fff;");

})

```

[You can find it here some basic examples.](docs.md)


It works in IE9 and later. (some methods addClass, removeClass and toggleClass will not work in IE9)

Read more here:

[https://vladocar.github.io/nanoJS/](https://vladocar.github.io/nanoJS/)

or on my blog:

[http://www.vcarrer.com/2018/05/nanojs-javascript-for-dom-manipulation.html](http://www.vcarrer.com/2018/05/nanojs-javascript-for-dom-manipulation.html)


You can use direct download or:
  
```sh
npm i @vladocar/nanojs
```

```sh
bower install nanoJS
```

```html
<script src="https://unpkg.com/@vladocar/nanojs@1.0.1/src/nanoJS.min.js"></script>
```
