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
    case "+": return add(a, b);
    case "-": return subtract(a, b);
    case "x": return multiply(a, b);
    case "/": return divide(a, b);
    default: return "ERROR";
  }
}

// Variable initialisation
let firstNum = null;
let secondNum = null;
let operator = null;
let operatorState = 0;
let operatorChoices = ["+", "-", "x", "/"];
const calculator = document.querySelector("#calculator");
const screen = calculator.querySelector(".screen");
const numpad = calculator.querySelector(".numpad");
const resetBtn = calculator.querySelector(".reset");
const operators = calculator.querySelector(".operators");
const equalsBtn = calculator.querySelector(".equals");

// Event listeners
numpad.addEventListener("click", (e) => {
  if (e.target.textContent >= 0) {
    screen.textContent == 0 ? screen.textContent = e.target.textContent : screen.textContent += e.target.textContent;
  }
});

operators.addEventListener("click", (e) => {
  if (e.target.textContent != "=") {
    firstNum = parseInt(screen.textContent);
    screen.textContent = 0;
    if (operatorChoices.includes(e.target.textContent)) {
      operator = e.target.textContent;
    }
  }
});

resetBtn.addEventListener("click", () => {
  screen.textContent = 0;
  firstNum = null;
  secondNum = null;
  operator = null;
});

equalsBtn.addEventListener("click", () => {
  secondNum = parseInt(screen.textContent);
  if (firstNum != null && secondNum != null && operator != null) {
    screen.textContent = operate(firstNum, secondNum, operator);
  }
});
