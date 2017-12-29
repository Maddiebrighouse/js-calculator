<<<<<<< HEAD

window.onload = function (){
document.getElementById("0").addEventListener("click", display);
}
let display = [];
let equation = [];

// Show equation on screen
function buttonFunction(){
  let display = "help im a fish"
  document.getElementById("entry").innerHTML = display;
=======
let equation = "";
let display = 0;

function start() {
  var buttons = document.getElementsById('button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', getButton);

  }
}

function calculate() {
  result= eval(equation);
  console.log(display);
  document.getElementById("result").innerHTML = "<p>" + result + "</p>";
>>>>>>> 7f2ded0f9ddb1a52446668b3a5ad4303b53b309d
}



//clear entry

//clear all
