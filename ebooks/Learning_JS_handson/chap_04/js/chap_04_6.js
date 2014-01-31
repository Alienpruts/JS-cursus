//ga naar de parent node van het element met id "about"
var test = document.getElementById("about").parentNode;

//zet daar een attribute op
test.setAttribute("class", "active");

//zet attribuut op de twee siblings van test
//PROBLEEM : deze targeten een 'whitespace node"
/*Gecko-based browsers insert text nodes into a document to represent whitespace
in the source markup. Therefore a node obtained, for example, using Node.firstChild or Node.previousSibling 
may refer to a whitespace text node rather than the actual element the author intended to get.*/
//dit werkt dus niet in FF, wel in Chrome
var vorige = test.previousSibling;
var volgende = test.nextSibling;

//dit geeft een textnode met /n in
console.log(vorige, volgende);


//werken met firstChild en lastChild
//ook hier problemen met whitespace elements

var firstchild = document.getElementById("nav").firstChild;
var lastchild = document.getElementById("nav").lastChild;

console.log(firstchild, lastchild);





