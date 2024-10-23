function add (a, b) {
  return a + b
}

function subtract (a, b) {
  return a - b
}

function multiply (a, b) {
  return a * b
}

function divide (a, b) {
  return a / b
}

function operate (a, b, operator) {
  switch (operator) {
    case "add": return add(a, b);
    case "subtract": return subtract(a, b);
    case "multiply": return multiply(a, b);
    case "divide": return divide(a, b);
    default: return "ERROR";
  }
}

function displayScreen() {
  
}


// Variable initialisation
let firstNum = 0;
let secondNum = 0;
let operator = "";
const calculator = document.querySelector("#calculator");
const screen = calculator.querySelector(".screen");
const zeroBtn = calculator.querySelector(".zero");
const oneBtn = calculator.querySelector(".one");
const twoBtn = calculator.querySelector(".two");
const threeBtn = calculator.querySelector(".three");
const fourBtn = calculator.querySelector(".four");
const fiveBtn = calculator.querySelector(".five");
const sixBtn = calculator.querySelector(".six");
const sevenBtn = calculator.querySelector(".seven");
const eightBtn = calculator.querySelector(".eight");
const nineBtn = calculator.querySelector(".nine");

zeroBtn.addEventListener("click", () => {
  screen.textContent += 0;
});
