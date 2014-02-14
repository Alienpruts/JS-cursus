//feature detection in een functie

function getHTTPObject() {
    var xhr;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject('Msxm112.XMLHTTP');
    }
    
    return xhr;
}

// open het Ajax object
var request = getHTTPObject();

//open het object, haal de data eruit
request.open('GET', 'data/contacts.json', true);

//initiatie van de call
request.send(null);

// OF

//initieer met data, bvb voor filter
//request.send('hallo data');
//request.send('searchterm=hill');

//er is een event onreadystatechange die je kan gebruiken om iets te doen als 
//readystate verandert naar 4 (ie. als data volledig geladen is)
//we controleren extra op status === 200 (server status code - all is well)
request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        result.innerHTML += '<p>Readystate 4 has been reached and statuscode 200 (fully loaded)';
        
        //bekijk wat we teruggekregen hebben (responseText OF responseXML
        console.log(request.responseText);
    };
};

//vars om mee te testen
var result = document.getElementById('result');
var rState = request['readyState'];

//initieer de content van de resultContent variabele
resultContent = '<p>ReadyState is : ' + rState + ' </p>';

//een switch die naargelang de readyState uitleg geeft over de readystate
switch (rState) {
    case 0:
        resultContent += '<p>The open method hasn’t been called (uninitialized)</p>';
        break;
    case 1:
        resultContent += '<p>The open method has been called, but the send method has not (loading)</p>';
        break;
    case 2:
        resultContent += '<p>The send method has been called and the request is being sent (loaded)</p>';
        break;
    case 3:
        resultContent += '<p>The response has started to come back (interacting)</p>';
        break;
    case 4:
        resultContent += '<p>The request is complete (complete)</p>';
        break;
    default:
        resultContent += '<p>Something went terrible, terribly wrong!</p>';
        break;
}

//de result div bevolken met de resultContent via innerHTML
result.innerHTML = resultContent;
