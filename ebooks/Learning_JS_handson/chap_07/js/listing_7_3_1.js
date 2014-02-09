//zonder haakjes kun je geen argumenten meegeven met de functie in EventListener
//zo kun je dit wel doen

var button = document.getElementById('btn');

function alertMessage(message) {
    alert(message);
}


//we gebruiken dus een callback function waar we wel een argument kunnen meegeven
button.addEventListener('click', function() {
    
    alertMessage('clicked the button');
},false);