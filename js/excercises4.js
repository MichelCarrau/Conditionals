//Resumen de lo visto
// Ejercicio 1: Comprobar si el usuario es mayor de edad para conducir
let age = prompt("Enter your age:");
let num = Number(age);

if (num >= 18) {
    console.log("You are old enough to drive");
} else if (num > 0) {
    console.log("You are left with " + (18 - num) + " years to drive");
} else {
    console.log("Entered value was not a number");
}

// Ejercicio 2: Comparar edades
const myAge = 25; 
let yourAge = Number(prompt("Enter your age:"));

if (yourAge > myAge) {
    console.log("You are " + (yourAge - myAge) + " years older than me.");
} else if (yourAge < myAge) {
    console.log("I am " + (myAge - yourAge) + " years older than you.");
} else {
    console.log("We are the same age.");
}

// Ejercicio 3: Comparar valores de a y b
let a = 5;
let b = 3;

if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is less than b");
}

let comparisonResult = (a > b) ? "a is greater than b" : "a is less than b";
console.log(comparisonResult);

// Ejercicio 4: Estación del año
let month = prompt("Enter the month:").toLowerCase();

switch (month) {
    case "september":
    case "october":
    case "november":
        console.log("The season is Autumn");
        break;
    case "december":
    case "january":
    case "february":
        console.log("The season is Winter");
        break;
    case "march":
    case "april":
    case "may":
        console.log("The season is Spring");
        break;
    case "june":
    case "july":
    case "august":
        console.log("The season is Summer");
        break;
    default:
        console.log("Entered value is not a valid month");
}

// Ejercicio 5
let score = Number(prompt("Enter your score:"));

if (score >= 80 && score <= 100) {
    console.log("Your grade is A");
} else if (score >= 70 && score <= 79) {
    console.log("Your grade is B");
} else if (score >= 60 && score <= 69) {
    console.log("Your grade is C");
} else if (score >= 50 && score <= 59) {
    console.log("Your grade is D");
} else if (score >= 0 && score < 50) {
    console.log("Your grade is F");
} else {
    console.log("Entered value is not a valid score");
}


// IF ELSEEEE
let isRaining = true;
if (isRaining) {
    console.log("You need a rain coat");
} else {
    console.log("No need for a rain coat");
}

// EL OTRO IF ELSE IF ELSEE
let weather = "sunny";
if (weather === "rainy") {
    console.log("You need a rain coat");
} else if (weather === "cloudy") {
    console.log("It might be cold, you need a jacket");
} else if (weather === "sunny") {
    console.log("Go out freely");
} else {
    console.log("Do you need a rain coat?");
}

// SWITCH
let dayUserInput = prompt("What day is today?");
let day = dayUserInput.toLowerCase();
switch (day) {
    case "monday":
        console.log("Today is Monday");
        break;
    case "tuesday":
        console.log("Today is Tuesday");
        break;
    case "wednesday":
        console.log("Today is Wednesday");
        break;
    case "thursday":
        console.log("Today is Thursday");
        break;
    case "friday":
        console.log("Today is Friday");
        break;
    case "saturday":
        console.log("Today is Saturday");
        break;
    case "sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("It is not a weekday");
}

// SWITCH CONDITIONS
let number = Number(prompt("Enter a number:"));
switch (true) {
    case number > 0:
        console.log("Number is positive");
        break;
    case number === 0:
        console.log("Number is zero");
        break;
    case number < 0:
        console.log("Number is negative");
        break;
    default:
        console.log("Entered value was not a number");
}
