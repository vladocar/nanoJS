# nanoJS
Minimal standalone JS library for DOM manipulation

nanoJS is around 100 lines of code (1.2 Kb compressed) JavaScript library for basic DOM manipulation. It has jQuery like syntax and supports chaining.

Syntax demos:

```javascript

$(".someClass").css("background-color:green;").html("Hello World");

$('#c').animate('2.3', '1.2','0','1','1','0','0', '0','0','1').css('background-color:red').text('Hello');

$("#a").on("click", function(){

  $("#someDiv").css("background-color:green;color:#fff;");

})

```

It works in IE9 and later.

Read more here:

[https://vladocar.github.io/nanoJS/](https://vladocar.github.io/nanoJS/)
