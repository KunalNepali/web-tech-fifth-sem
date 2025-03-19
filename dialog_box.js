// Alert dialog
alert("This is an alert dialog box!");

// Confirm dialog
let userResponse = confirm("Do you want to proceed?");
if (userResponse) {
  console.log("User chose to proceed.");
} else {
  console.log("User canceled.");
}

// Prompt dialog
let userName = prompt("What is your name?");
if (userName) {
  console.log("Hello, " + userName + "!");
} else {
  console.log("No name entered.");
}
// Prompt the user for the first number
let firstNumber = prompt("Enter the first number:");
// Prompt the user for the second number
let secondNumber = prompt("Enter the second number:");

// Convert input to numbers and multiply
let result = Number(firstNumber) * Number(secondNumber);

// Show the result
alert("The result of multiplication is: " + result);
console.log("The result of multiplication is: " + result);
