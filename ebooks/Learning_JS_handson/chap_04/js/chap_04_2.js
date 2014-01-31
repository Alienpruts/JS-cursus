var test = document.getElementsByTagName("p");
console.log(test);

console.log(test.length);

if (test.length > 0) {
    alert("T'is in orde!");
} else {
    alert("T'er is ier etwa serieus verkeerd");
}

//uit een Nodelist specifieke items halen

//met item method
var item1 = test.item(0);
//met array index
var item2 = test[1];


var item3 = test.item(2);

console.log(item1,item2,item3);