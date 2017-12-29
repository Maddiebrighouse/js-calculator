var entryField = document.getElementById("entry");
var answerField = document.getElementById("equation");

var operators = ["+", "-", "*", "/"];
/*window.onload = function (){
document.getElementByValue("0").addEventListener("click", display);
}
let display = [];
let equation = [];

// Show equation on screen
function buttonFunction(){
  let display = "help im a fish"
  document.getElementById("entry").innerHTML = display;
}*/
// Setup entry to show 0
window.onload = function () {
  document.getElementById("entry").innerHTML = "0";
}




function buttInput(value) {

  var newDisplay;

  //Determine input pathway
  if (value === '.') {
    newDisplay = addDecimal(value);
  } else if (operators.includes(value)) {
    newDisplay = addOperator(value);
  } else if (value.parseInt !== NaN) {
    newDisplay = addInteger(value);
  }

  console.log(newDisplay);

  document.getElementById("entry").innerHTML = newDisplay;
}



/* HELPER FUNCTIONS */
//
function addOperator(value) {
  // Check if last chracter of array is operator
  if (!operators.includes(document.getElementById("entry").innerHTML.slice(-1))) {
    return document.getElementById("entry").innerHTML + value;
  } else {
    return document.getElementById("entry").innerHTML;
  }
}
//
function addInteger(value) {

  if (document.getElementById("entry").innerHTML === "0") {
    document.getElementById("entry").innerHTML = "";
  }

  return document.getElementById("entry").innerHTML + value;
}
//
function addDecimal(value) {
  // Split string into array with values, analyse most recent value to see if a decimal is present
  var valueArray = document.getElementById("entry").innerHTML.split(/[+\-\/*]/);

  // Get last value in array and check if contains decimal place
  if (!valueArray[valueArray.length - 1].includes('.')) {
    document.getElementById("entry").innerHTML += value;
  }
}



/* CLEAR */

function erase() {
  document.getElementById("entry").innerHTML = "0";
  document.getElementById("equation").innerHTML = "";
}

function eraseLatestEntry() {
  document.getElementById("entry").innerHTML = "0";
}



/* EXECUTE */

function execute() {
  var equation = document.getElementById("entry").innerHTML;

  document.getElementById("equation").innerHTML = eval(equation);
}
//clear entry

//clear all
