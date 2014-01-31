var test = document.querySelector("#header");

var test2 = document.querySelector(".dropcap");

var test3 = document.querySelectorAll(".dropcap");

var test4 = document.querySelectorAll(".dropcap, .huge");

var test5 = document.querySelectorAll("p[class]");

console.log(test,test2,test3,test4,test5);

//attribute elements

//eerst kijken we of het element met id testattr een attr class heeft
if(document.getElementById("testattr").hasAttribute("class")) {
    
    //nu bekijken we de waarde van dat attribuut
    var test6 = document.getElementById("testattr").getAttribute("class");
    
    console.log(test6);
} else {
    alert("Er is geen element met de opgegegeven ID");
}

//hier zetten we een attribute met setattribute.

document.getElementById("testattr").setAttribute("class", "test");
document.getElementById("testattr").setAttribute("title", "testtitle");

//verwijderen van een attribuut
document.getElementById("testattr").removeAttribute("class");
