//We gieten alle code uit 8_1 nu in één reusable AJAX function
//voor meer uitleg over individuele blokken, zie 8_1 
//we voegen een 'loading... ' message toe aan de output om te tonen zolang de output
//niet geheel geladen is

function getHTTPObject() {
    var xhr;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject('Msxm112.XMLHTTP');
    }

    return xhr;
}

function ajaxCall(dataURL, outputElement, callback) {
    var request = getHTTPObject();
    
    //hier plaatsen we de tekst loading in het outputelement
    outputElement.innerHTML = "Loading ...";
    
    request.onreadystatechange = function() {

        if (request.readyState === 4 && request.status === 200) {

            //we slaan de response op in een var, we converteren de string
            //die geretourneerd wordt door responseText naar een JSON object
            var contacts = JSON.parse(request.responseText);
            
            //kijk eerst of de callback idd een functie is
            if(typeof callback === "function") {
                
                callback(contacts);
            }
        }
        ;
    };
    request.open('GET', dataURL, true);
    request.send(null);
}

//hier maken we het request object met onze ajaxCall functie, we geven de URL mee
ajaxCall('data/contacts.json', result, function(data) {
    
    // hier komt de code die we willen uitvoeren met onze data
    console.log(data);
    
    
});
