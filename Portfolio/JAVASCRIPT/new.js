console.log("print");

// document.write("Get the script")

var userName = "John";
var age = 23
console.log("Welcome " + userName +" and you are " + age + " years old.");

var names = ["John", "Joseph", "Joe"]
console.log(names);
console.log(names[2]);

document.write("Hi !");
var car = {brand: "BMW",color: "Red"};
console.log(car.color);
console.log(names.length + " names");

var a = 2;
var b = 4;
// a + b = a
a-=b;
console.log(a);
console.log(b);

console.log("Girls dey gist fire ...Jesus!!");
console.log("So f*cking annoying");

document.write(12345)

//console.log(4 % 3);

// a++
// console.log(a);
// a--
// console.log(a);
var a = "4";
// console.log(a===b ? "It is true": "It is false");


var age = 18;
var haveTicket = true;

console.log(age >= 18 && haveTicket ===true ? "It is true" : "It is false");

// var heading = document.getElementById("hell");
// console.log(heading);
// heading.style.color = "black";
// heading.style.backgroundColor = "red";

heading.classList.add("test");


function changecolor(){
    var heading = document.getElementById("hell");
    heading.classList.toggle('meun');
}
