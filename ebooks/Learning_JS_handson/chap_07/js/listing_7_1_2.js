//hier gebruiken we een event Listener om acties uit te voeren op een DOM object

(function() {
    //variable met de button erin
    var button = document.getElementById("btn");

    //eerst kijken of addEventListener bestaat anders attachEvent() gebruiken IE9-

    if (button.addEventListener) {
        //eventlistener 'click' op de button zetten
        button.addEventListener('click', function() {

            alert('Clicked the button');
        }, false);
        //else code voor oudere browsers gebruiken
    } else {
        button.attachEvent('click', function() {

            alert('Clicked the button');
        });
    }
})();

