//hier gebruiken we een eventhandler om acties uit te voeren op een DOM object

(function(){
    //variable met de button erin
    var button = document.getElementById("btn");
    
    //eventhandler op de button zetten
    button.onclick = function() {
        
        alert('Clicked the button');
    };
})();

