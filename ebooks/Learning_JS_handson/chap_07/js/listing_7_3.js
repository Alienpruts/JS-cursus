//function as an eventlistener

var button = document.getElementById("btn");

function alertMessage(){
    alert('clicked the button');
}

//roep de functie aan in de EventListener let op volgende zaken
//geen () bij functieaanroep
//() bij functieaanroep betekent : VOER MIJ NU UIT
button.addEventListener('click', alertMessage, false);

