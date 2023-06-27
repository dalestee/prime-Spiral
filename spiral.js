import methods from "./methods.js";

var range = prompt("Enter the range of numbers (0 to 1000)");

// Parse the input as an integer
var number = parseInt(range);

// Check if the input is a number and within the specified range
while (isNaN(number) || number < 0 || number > 1000) {
  // Invalid input or outside the range
  console.log("Invalid range entered");
  var range = prompt("Enter the range of numbers (0 to 1000)");

  // Parse the input as an integer
  var number = parseInt(range);
}

console.log("Valid range entered: " + number);

var array = methods.createArray(number);

methods.initializeArray(array);

methods.gridCreationInHtml(array);
