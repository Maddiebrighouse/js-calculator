var entryField = document.getElementById("entry");
var answerField = document.getElementById("equation");
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

  var operators = ["+", "-", "*", "/"];
  var newDisplay;

  //Determine input pathway
  if (operators.includes(value)) {
    newDisplay = addOperator(value);
  } else if (value.parseInt !== NaN) {
    newDisplay = addInteger(value);
  } else if (value === ".") {
    newDisplay = addDecimal(value);
  }

console.log(newDisplay);

  document.getElementById("entry").innerHTML = newDisplay;
}



/* HELPER FUNCTIONS */

function addOperator(value) {
  return document.getElementById("entry").innerHTML + value;
}

function addInteger(value) {
  return document.getElementById("entry").innerHTML + value;
}

function addDecimal(value) {
  if (!(document.getElementById("entry").innerHTML.includes("."))) {
    document.getElementById("entry").innerHTML += value;
  }
}



/* CLEAR */

function clear() {
  document.getElementById("entry").innerHTML = "0";
  document.getElementById("equation").innerHTML = "";
}



/* EXECUTE */

function execute() {
  var equation = document.getElementById("entry").innerHTML;

  document.getElementById("equation").innerHTML = eval(equation);
}
//clear entry

//clear all
