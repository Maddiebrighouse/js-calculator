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
}
