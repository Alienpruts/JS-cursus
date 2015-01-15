/**
 * Created by bert on 1/12/15.
 */
var location1 = Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (Enter a number between 0 and 6");

    if (guess < 0 || guess > 6 ) {
        alert("Please enter a number between 0 - 6");
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("HIT!");

            if (hits == 3) {
                isSunk = true;
                alert("You sunk my battleship!");
            }
        } else {
            alert("MISS!");
        }
    }
}

var stats = "You sunk my battleships in " + guesses + " guesses. Your accuracy was : " + (3 / guesses) * 100 + " %";
alert(stats);