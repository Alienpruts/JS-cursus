
//creating code that fails quickly

function pizzaParty(totalSlices, peopleCount) {
    "use strict";

    var fairness = totalSlices / peopleCount;

    return fairness;
}

(function() {

    "use strict";


    var body = document.getElementsByTagName('body')[0];
    var partyStarter = "Starlen";
    var peopleCount = 10;
    var pizzaCount = 4;
    var sliceCount = pizzaCount * 8;

    //test of er mensen zijn EN dat er pizza besteld werd
    if (peopleCount > 0 && pizzaCount > 0) {

        body.innerHTML = '<p>Dear ' + partyStarter + ', Each person can have ' + pizzaParty(sliceCount, peopleCount)
                + ' pieces of pizza.';
    } else {
        body.innerHML += '<p>Je moet mensen inviteren en/of pizza bestellen</p>';
    }
})();


