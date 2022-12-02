
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
function getMilk (bottles) {   
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

    //EXAMPLE
    //Creating the Function
//function gestMilk (bottles) {
    var cost = bottles * 1.5;
    //do something with cost
}

    //Calling the function
    // getMilk (2); The input 2 gets bounded to the input of the function

// For example, if you want to know how many bottles the robot can buy with a certain amount of money, for example, 10 and the cos
//of the bottle is 1.5 you´ll do:

function getMilk (money) {
    var numberOfBottles = money/ 1.5;
    console.log("buy" + numberOfBottles + "bottles of milk")
}

money(10);

//LIFE IN WEEKS EXERCISE
function lifeInWeeks (age) {
    var yearsRemaining = 90 - age;
    var days = yearsRemaining *365;
    var weeks = yearsRemaining *52;
    var months = yearsRemaining * 12;

    console.log("you have" + days + "weeks" + weeks + "months" + months + " left.");
}

lifeInWeeks(38);

//when you log this in the console you get that (in this case) you have18980weeks2704months624 left.

// Modulo % gives the remainder. Example: var e = 9 % 6 // 3 its an extraction

// OUTPUTS AND RETURN VALUES

// In adition to take inputs, this function can give outputs by writing return (input) loquesea;

//BMI CALCULATOR

function bmiCalculator (weight, height) {
    var bmi =  weight / (height * height);  //Or math.pow(heigth, 2); to make the exponent  //this function has to calculate the value of bmi
    return math.round(bmi); /// To get a runded result math.round
}

//RANDOM NUMBER GENERATION

var n = math.random();
console.log();

//Dice exercise

var n = math.random();
n = n * 6;
n = math-floor() + 1;
console.log();

//Using IF ELSE conditionals and logic. Lovescore calculator

prompt ("What is your name?");
prompt ("What is their name?");

var loveScore = math.random() * 100;
loveScore = math.floor(loveScore) + 1;

if (loveScore > 70) {
    alert("Your love score is " + loveScore + "%" + "You love each other like Kanye loves Kanye.")
}
else {
    alert("Your love score is " + loveScore + "%.")
}

//