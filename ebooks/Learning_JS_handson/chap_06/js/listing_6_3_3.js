//retourneren van data in een functie

function sayHello(message) {
    
    return message + '!!!!';
}

//retourneren van meerdere data

function sayHello2(greeting, exitStatement) {
    
    var newGreeting = greeting + '!!!!';
    var newExitStatement = exitStatement + '!!!!';
    
    //we retourneren de data in een array-vorm, we konden dit ook eerst declareren
    
    return [newGreeting, newExitStatement];
}

//we gebruiken het resultaat van sayHello2 om nieuwe functie te gebruiken

function startle(polite, rude) {
    
    //call sayhello2 functie
    
    var greeting = sayHello2(polite, rude)[0];
    var exit = sayHello2(polite, rude)[1];
    
    //bekijk wat er in die var's zit
    
    alert(greeting + '-------' + exit);
}

//roep de functie aan met twee argumenten

startle('Yoooooo','Miljaarde');
