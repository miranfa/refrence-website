// This function is called with the Start test button is clicked
function start() {
  drawCircle(100, 50, 25, "pink");
  drawCircle(100, 1600, 25, "purple");
  drawCircle(100, getWidth()/2-100, 25, "green");
  drawSquare();
}


// Problem #3 analyze the drawCircle() function below then modify it to take another parameter to specify the color of the circle
function drawCircle(radius, xPos, yPos, color) {
  // Create a <div> element
  var circle = document.createElement("div");
  // Set its position to absolute so we can position it with top and left
  circle.style.position = "absolute";
  // Round over the corners to make it a circle
  circle.style.borderRadius = "100%";
  // Set the size of the element using the radius parameter. The width and height of the element will be the diameter of the circle
  circle.style.minWidth = radius * 2 + "px";
  // Width and height (diameter) are the same for a circle
  circle.style.minHeight = radius * 2 + "px";
  // Set the color
  circle.style.backgroundColor = color;
  // Set the y-position
  circle.style.top = yPos + "px";
  // Set the x-position
  circle.style.left = xPos + "px";
  // Add the element to the graphic container section
  graphicsWindow.appendChild(circle);
}

// Problem #4 Implement the draw square function below
function drawSquare(width, xPos, yPos, color){
  var square = document.createElement("div");
  square.style.position = "absolute";
  square.style.minWidth = width + "px";
  square.style.minHeight = height + "px";
  square.style.top = ypos + "px";
  square.style.left = xpos + "px";
  square.style.backgroundColor = color;
  graphicsWindow.appendChild(circle);
}

// Problem #5 Define the drawRect() function below


// Problem #6 Define the randomeCircles() function below






/********************* LOOK BUT DO NOT MODIFY ANYTHING BELOW THIS LINE ******************************************************/
// This is a variable to hold the element we will be using to add graphical components
const graphicsWindow = document.getElementById("graphic-container");

// These functions get the width and heigth of the graphics window
function getWidth(){
  return graphicsWindow.offsetWidth;
}
function getHeight(){
  return graphicsWindow.offsetHeight;
}