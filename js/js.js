
// HAY UNA LISTA CON TODAS LAS VARIABLES QUE PUEDES USAR, SI HAY ALGO QUE NO SABES COMO CONSEGUIR BUSCAR AHI

//1 create a var that stores the name that the user enters via prompt.

var names = prompt("what is your name");

//2 Capitalise the first letter of their name

// A: Isolate the first char

var firstChar = names.slice(0,1);

// B: Turn the first char to uppercase

var upperCaseFirstChar = firstChar.toUpperCase();

// C: Isolate the rest of the name (usanmos .length para que cuente el resto tenga los caracteres que tenga)

var restOfName = names.slice(1,names.length);

// D: Concactenate the first char with the rest of the char

var capitalisedName = upperCaseFirstChar + restOfName;

//3 We use the capitalise version of their name to greet them using an alert

alert("Hello, " + capitalisedName);

//Hello, Angela. 

// CALCULATE DOG YEARS FROM HUMAN YEARS AND SEND AN ALERT TO THE USER WITH THE ANSWER

var dogAge = prompt("What is your human age?");

var humanAge = ((dogAge - 2)*4)+21;

alert("Your dog is " + humanAge + " years old in human years.")

// NUMBERS
//INCREMENT EXPRESSION

var x = 5;

x = x + 1;

//gives the same result if you write 

x++; 

//DECREMENT EXPRESSION

var x = 5;

x = x - 1;

//same result if

x--;

//TO INCREMENT OR DECREMENT THE VALUE TO MORE THAN ONE

var x = 5;

x+= 2;
x-= 3;

//TO ADD OR DECREMENT THE VALUE BY ANOTHER VARIABLE

var x = 5;
var y = 3;

x+= y;

//FUNCTIONS

// If you have more that one alert that you want to have displayed and executed, you can write console.log instead. BUT the important
//diference between ALERT and CONSOLE.LOG is that the ALERT is something that the user can see. 

//Function main
function getMilk() {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    }
