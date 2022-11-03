


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