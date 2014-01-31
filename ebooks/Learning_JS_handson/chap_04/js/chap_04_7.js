// store the target area to a variable to keep things neat
var targetArea = document.getElementById("target-area");

// create our <p> element and our text element
// LET op : hier creer je ze nog niet fysiek, ze moeten nog geappend worden
var p = document.createElement("p");
var text = document.createTextNode("this was a generated paragraph");

// create a text node inside the <p>, note that we’re using a variable “p” here
var snippet = p.appendChild(text);

//insert our generated paragraph into the DOM
targetArea.appendChild(snippet);


//removing a node

var tagline = document.getElementById("tagline");

targetArea.removeChild(tagline);