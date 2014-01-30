/* zet de elementen in een variabele voor gebruik */
var button = document.getElementById("hide"),
        target = document.getElementById("target");

/* definieer de te gebruiken functie, zet class = "hide" erbij */
function hide() {
    target.setAttribute("class", "hide");
}

/* zet een eventlistener op de button die de functie uitvoert bij click */
button.addEventListener("click", hide, false);


