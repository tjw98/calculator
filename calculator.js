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
const resetBtn = calculator.querySelector(".reset");
const additionBtn = calculator.querySelector(".addition");
const subtractionBtn = calculator.querySelector(".subtraction");
const multiplicationBtn = calculator.querySelector(".multiplication");
const divisionBtn = calculator.querySelector(".division");
const equalsBtn = calculator.querySelector(".equals");

zeroBtn.addEventListener("click", () => {
  screen.textContent == 0 ? screen.textContent = 0 : screen.textContent += 0;
});
oneBtn.addEventListener("click", () => {
  screen.textContent == 0 ? screen.textContent = 1 : screen.textContent += 1;
});
twoBtn.addEventListener("click", () => {
  screen.textContent == 0 ? screen.textContent = 2 : screen.textContent += 2;
});
threeBtn.addEventListener("click", () => {
  screen.textContent == 0 ? screen.textContent = 3 : screen.textContent += 3;
});
fourBtn.addEventListener("click", () => {
  screen.textContent == 0 ? screen.textContent = 4 : screen.textContent += 4;
});
fiveBtn.addEventListener("click", () => {
  screen.textContent == 0 ? screen.textContent = 5 : screen.textContent += 5;
});
sixBtn.addEventListener("click", () => {
  screen.textContent == 0 ? screen.textContent = 6 : screen.textContent += 6;
});
sevenBtn.addEventListener("click", () => {
  screen.textContent == 0 ? screen.textContent = 7 : screen.textContent += 7;
});
eightBtn.addEventListener("click", () => {
  screen.textContent == 0 ? screen.textContent = 8 : screen.textContent += 8;
});
nineBtn.addEventListener("click", () => {
  screen.textContent == 0 ? screen.textContent = 9 : screen.textContent += 9;
});
resetBtn.addEventListener("click", () => {
  screen.textContent = 0;
});
additionBtn.addEventListener("click", () => {
  firstNum = parseInt(screen.textContent);
  screen.textContent = 0;
  operator = "add";
});
subtractionBtn.addEventListener("click", () => {
  firstNum = parseInt(screen.textContent);
  screen.textContent = 0;
  operator = "subtract";
});
multiplicationBtn.addEventListener("click", () => {
  firstNum = parseInt(screen.textContent);
  screen.textContent = 0;
  operator = "multiply";
});
divisionBtn.addEventListener("click", () => {
  firstNum = parseInt(screen.textContent);
  screen.textContent = 0;
  operator = "divide";
});

equalsBtn.addEventListener("click", () => {
  secondNum = parseInt(screen.textContent);
  screen.textContent = operate(firstNum, secondNum, operator);
});
