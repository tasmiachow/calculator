const screen = document.querySelector("#screen");
const clear = document.querySelector("#clear");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");

let firstNumber = "";
let firstOperator = "";
let secondNumber = "";
let secNumberInputted = false;
let justCalculated = false;

// Clear button
clear.addEventListener("click", () => {
  screen.textContent = "";
  firstNumber = "";
  secondNumber = "";
  firstOperator = "";
  secNumberInputted = false;
  justCalculated = false;
  console.log("cleared");
});

function display_numbers(result) {
  firstNumber = result.toString();
  secondNumber = "";
  secNumberInputted = false;
  screen.textContent = firstNumber;
  justCalculated = true;
}

function operate(op, a, b) {
  let a_num = Number(a);
  let b_num = Number(b);
  let result = 0;

  switch (op) {
    case "+":
      result = a_num + b_num;
      break;
    case "-":
      result = a_num - b_num;
      break;
    case "*":
      result = a_num * b_num;
      break;
    case "/":
      result = Math.round((a_num / b_num) * 1e7) / 1e7;
      break;
  }

  display_numbers(result);
}

function populateDisplay(e) {
  if (justCalculated && !secNumberInputted) {
    // Start fresh only if no operator was selected
    screen.textContent = "";
    firstNumber = "";
    justCalculated = false;
  }

  screen.textContent += e.target.textContent;

  if (!secNumberInputted) {
    firstNumber += e.target.textContent;
  } else {
    secondNumber += e.target.textContent;
  }
}

numbers.forEach((button) => {
  button.addEventListener("click", populateDisplay);
});

function storeOp(e) {
  if (firstOperator && secNumberInputted && secondNumber !== "") {
    operate(firstOperator, firstNumber, secondNumber);
  }

  firstOperator = e.target.textContent;
  secNumberInputted = true;
  justCalculated = false;
  screen.textContent = "";
}

operators.forEach((button) => {
  button.addEventListener("click", storeOp);
});

equal.addEventListener("click", () => {
  if (secNumberInputted && secondNumber !== "") {
    operate(firstOperator, firstNumber, secondNumber);
    firstOperator = "";
    justCalculated = true;
  }
});
