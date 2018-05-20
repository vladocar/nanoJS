function docJS(d, n) {
    var keys = Object.keys(d).sort().reverse();
    var i = keys.length;
    var list = "";
    var list1 = "";
    var numOfLines = "";
    var numOfCharacters = "";
    var numOfArguments = 0;
    var x = 0;
    var pp = (typeof prettyPrintOne === 'function');
    while (i--) {
        if (typeof d[keys[i]] === "object") {
            x += 0;
            numOfLines = "undefined";
            numOfCharacters = "undefined";
            numOfArguments = 0;
        } else if (typeof d[keys[i]] === "function") {
            x += d[keys[i]].toString().length;
            numOfLines = d[keys[i]].toString().split('\n').length;
            numOfCharacters = d[keys[i]].toString().length;
            numOfArguments = d[keys[i]].length;
        } else {
            x += d[keys[i]].toString().length;
            numOfLines = d[keys[i]].toString().split('\n').length;
            numOfCharacters = d[keys[i]].toString().length;
            numOfArguments = 0;
        }
        list1 += "<li><a href='#" + keys[i] + "'>- " + keys[i] + "</a></li>";
        list += "<li class='l' id=" + keys[i] + "><h3>" + keys[i] + ":<i> ( lines: " + numOfLines + " characters: " + numOfCharacters + " arguments: " + numOfArguments + " )</i></h3><br><pre>  " + (pp ? prettyPrintOne(String(d[keys[i]]).replace(/\n/g, '<br/>'), 'js', false) : d[keys[i]]) + "</pre></li>";
    }
    document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeEnd",'<div id="sidebar"><h3 id="o">' + n + '</h3><ul id="links">' + list1 + '</ul></div><ul id="a">' + list + '</ul>');
    console.log(x / 1024 + " Kb - It doesn't calculate nested objects");
}
