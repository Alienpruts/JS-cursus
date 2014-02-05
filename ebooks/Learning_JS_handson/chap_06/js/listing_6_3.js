/* set up your anonymous function */

(function () {
    
    //define var in function
    var greeting = "Hello";
    
    //access var in this function
    alert('in scope: ' + greeting);
    
})(); //again, notice the (); at the end!!!!

if (typeof(greeting) !== "undefined") {
    alert('greeting var is defined!!! that should not happen');
} else {
    alert("as expected : greeting var is not accessible outside scope");
}
