/* In this example, we will write a function called doubleNumber() that will take one number 
as a parameter, double it, then print the result an alert or in the console. Then we will test 
it by calling the function with several different values for the parameter.*/

// Start function for Example 1 will run when the button is clicked
function example() {
  doubledNumber(7);
  doubledNumber(12);
}

function doubledNumber(num) {
  var doubledNum = num * 2;
  console.log(doubledNum);
}



/* Problem #1: Write a function named square() that takes in a parameter and squares it. Squaring a number 
means multiplying it by itself. Then make several calls to that function in your start function 
to test it out. Does it work for all arguments? */

// Start function for problem 1
function problem1() {
square(2);
square(6);
}

function square(num) {
  var squaredNum = num * num;
  console.log(squaredNum);
}



/* Problem #2: Write a function called triple() that triples a number and prints it out. Then in your start 
function, make several calls to the triple function to test it out.*/

// Start function from problem 2
function problem2() {
triple(3);
triple(2);
}

function triple(num) {
  var tripledNum = num * num * num;
  console.log(tripledNum);
}