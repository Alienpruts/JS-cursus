/* definieer functie */
function doTheThing() {
    alert('This is the thing!');
}

/*definieer variabele met het element in */
var elem = document.getElementById("about");

/*zet  een event listener op het element */
elem.addEventListener("click", doTheThing, false);