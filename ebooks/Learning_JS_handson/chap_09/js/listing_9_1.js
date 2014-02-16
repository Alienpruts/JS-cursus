
function pizzaParty(totalSlices,peopleCount) {
    "use strict";
    
    //partyStarter var is niet beschikbaar want in scope van anon function
    
    var fairness = totalSlices / peopleCount;
    
    return fairness;
}

(function () {
    
    "use strict";
    
    
    var body = document.getElementsByTagName('body')[0];
    //global var
    var partyStarter = "Starlen";
    
    body.innerHTML = '<p>Dear ' + partyStarter + ', Each person can have ' + pizzaParty(32, 10)
    + ' pieces of pizza.';
    
    // hier kun je bvb de var fairness niet gebruiken, is in scope van pizzaPary functie
})();


