//Grouping functions in an object
//functions in an object are called methods

var addressBookMethods = {
    
    sayHello: function(message) {
        
        return message;
    },
    
    startle: function() {
        
        alert(addressBookMethods.sayHello('Hey There, I\'m called from within a method'));
    }
}

//call the function

addressBookMethods.startle();

