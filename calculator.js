const add = (a, b) => Number(a) + Number(b)

const subtract = (a, b) => a - b
 
const multiply = (a, b) => a * b

const divide = (a, b) => a / b

function operate (a, b, operator) {
  switch (operator) {
    case "+": return add(a, b);
    case "-": return subtract(a, b);
    case "x": return multiply(a, b);
    case "/": return divide(a, b);
    default: return "ERROR";
  }
}

function getFirstNum(e, firstNum) {
  let array = [];
  array.push(firstNum);
  array.push(e.target.textContent);
  screen.setAttribute("data-display-state", "first-num");
  return array.join("")
  }

function getSecondNum(e, secondNum) {
  let array = [];
  array.push(secondNum);
  array.push(e.target.textContent);
  screen.setAttribute("data-display-state", "second-num");
  return array.join("")
}

function getAnswer(e) {
  let answer = 0;
  if (firstNum != null && secondNum != null && operator != null) {
    answer = operate(firstNum, secondNum, operator);
    firstNum = answer;
    if (operatorChoices.includes(e.target.textContent) || e.target.textContent == "=") {
      secondNum = [];
    }
    operators.setAttribute("data-operator-state", "1");
    screen.setAttribute("data-display-state", "answer-num");
  }
  return answer
}

function displayScreen(textToDisplay) {
  screen.textContent = textToDisplay;
}

// VARIABLE INITIALISATION
let firstNum = null;
let secondNum = null;
let operator = null;
let operatorChoices = ["+", "-", "x", "/"];
let answer = 0;
const calculator = document.querySelector("#calculator");
const calcBody = calculator.querySelector(".calc-body");
const screen = calculator.querySelector(".screen");
const numpad = calculator.querySelector(".numpad");
const resetBtn = calculator.querySelector(".reset");
const operators = calculator.querySelector(".operators");
const equalsBtn = calculator.querySelector(".equals");

// ON NUMPAD PRESS
numpad.addEventListener("click", (e) => {
  if (e.target.textContent >= 0) {
    operators.getAttribute("data-operator-state") == "0" ? firstNum = getFirstNum(e, firstNum) : secondNum = getSecondNum(e, secondNum);
  }
});

operators.addEventListener("click", (e) => {
  if (operatorChoices.includes(e.target.textContent)) {
      operators.setAttribute("data-operator-state", parseInt(operators.getAttribute("data-operator-state")) + 1);
  }

  if (operators.getAttribute("data-operator-state") == "2") {
    answer = getAnswer(e);
  }

  operator = e.target.textContent;
});

// ON RESET BUTTON PRESS
resetBtn.addEventListener("click", () => {
  firstNum = null;
  secondNum = null;
  operator = null;
  operators.setAttribute("data-operator-state", "0");
  displayScreen(0);
});

// ON EQUALS BUTTON PRESS
equalsBtn.addEventListener("click", (e) => {
  answer = getAnswer(e);
  console.log(typeof answer);
  operators.setAttribute("data-operator-state", "0");
});

// ON CALCULATOR PRESS
calcBody.addEventListener("click", () => {
  switch (screen.getAttribute("data-display-state")) {
  case "first-num": displayScreen(firstNum);
  break;
  case "second-num": displayScreen(secondNum);
  break;
  case "answer-num": displayScreen(answer);
  break;
  default: displayScreen("0");
  }
});