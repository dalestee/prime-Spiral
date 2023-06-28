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

function isPrime(number) {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function changeCanvasSize() {
  var canvas = document.getElementById("canvas");
  canvas.width = screen.width;
  canvas.height = screen.height;
}
function drawPointAtCoordinates(x,y){
  var pointSize = 3; // Change according to the size of the point.
  var ctx = document.getElementById("canvas").getContext("2d");


  ctx.fillStyle = "#ff2626"; // Red color

  ctx.beginPath(); //Start path
  ctx.arc(x, y, pointSize, 0, Math.PI * 2, true); // Draw a point using the arc function of the canvas with a point structure.
  ctx.fill(); // Close the path and fill.
}

function getCenterOfCanvas() {
  var canvas = document.getElementById("canvas");
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;

  return [centerX, centerY];
}

document.addEventListener('DOMContentLoaded', function() {
  changeCanvasSize();
  var canvasCenter = getCenterOfCanvas();
  var xCenter = canvasCenter[0];
  var yCenter = canvasCenter[1];
  
  for (var i = 0; i < number; i++) {
    var x = i * Math.cos(i);
    var y = i * Math.sin(i);
    drawPointAtCoordinates(xCenter + x, yCenter + y*1000);
  }
});