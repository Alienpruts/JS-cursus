//ready methode in JQUERY is al load event, maar script wordt op 'pauze' gezet
//totdat DOM geconstrueerd is : load event laadt eerst ALLES voordat script doorgaat
$(document).ready(function() {

//$ betekent dat je wil overstappen naar jQuery
//dit is een voorbeeld van een selector

    var container = document.getElementById('container');
    var container2 = document.querySelector('#container');

//dit is de jQuery manier
    var container3 = $('#container');


//idem voor de manier waarop class names geselecteerd worden

    var module1 = document.getElementsByClassName('module');
    var module2 = document.querySelector('.module');
    var module3 = document.querySelectorAll('.module');

//dit is de jQuery manier
    var module4 = $('.module');
    console.log(module1, module2, module3, module4);

//jQuery heeft ook methodes om door de DOM te reizen
//Ook methode addClass wordt gebruikt

//Ga 1 niveau naar boven
    $('.module').parent().addClass('module-parent');

//ga meerdere niveau's naar boven
    $('.module').parents('#container').addClass('p-parents');

//ga naar beneden (zoek)
    $('#container').find('.module').addClass('container-find');

//ga zijdelings (siblings opzoeken)
    $('.module').siblings('.module').addClass('module-siblings');

//eerste module vinden
    $('.module').first().addClass('first-module');

//volgende module vinden
    $('.module').first().next().addClass('second-module');

//laatste module vinden
    $('.module').last().addClass('last-module');

//vorige module vinden
    $('.module').last().prev().addClass('second-to-last-module');

//je KAN css toevoegen via jQuery, maar om scheiding presentatie en code
//te behouden is het aan te raden dit niet te doen
    $('.module').css({
        'height': '300px',
        'color': 'red'
    });
});





