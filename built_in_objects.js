// Window Object
alert("Welcome to the Built-in Objects Demo!");

// String Object
let stringExample = "JavaScript is fun!";
console.log("String Length:", stringExample.length);
console.log("Uppercase:", stringExample.toUpperCase());

// Number Object
let numberExample = Number("123");
console.log("Converted Number:", numberExample);
console.log("Is it an integer?", Number.isInteger(numberExample));

// Boolean Object
let booleanExample = Boolean(1); // Converts to true
console.log("Boolean Example:", booleanExample);

// Date Object
let currentDate = new Date();
console.log("Current Date and Time:", currentDate);
console.log("Day of the Month:", currentDate.getDate());

// Math Object
let randomNumber = Math.random(); // Generates a random number between 0 and 1
console.log("Random Number:", randomNumber);
console.log("Square Root of 16:", Math.sqrt(16));

// RegExp Object
let regexExample = /JavaScript/i; // Case-insensitive search for "JavaScript"
console.log("Regex Test:", regexExample.test("I love javascript!"));

// Form Object (from HTML)
function validateForm() {
    let userName = document.forms["myForm"]["username"].value;
    if (userName === "") {
        alert("Name must be filled out!");
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}
