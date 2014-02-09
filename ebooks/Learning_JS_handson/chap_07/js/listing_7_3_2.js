//verwijderen van een Event Listener

var button = document.getElementById('btn');

function alertMessage() {
    alert('clicked the button');
}


//we gebruiken dus een callback function waar we wel een argument kunnen meegeven
button.addEventListener('click', alertMessage,false);



//verwijderen, we moeten object detection toepassen

if(button.removeEventListener){
    
    button.removeEventListener('click',alertMessage,false);
} else {
    
    //code voor oude browsers gebruiken
    button.detachEvent('click',alertMessage);
}