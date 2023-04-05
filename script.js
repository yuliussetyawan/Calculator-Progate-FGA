const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator-screen");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const clearButton = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");

let prevNumber = "";
let currentNumber = "0";
let calculationOperator = "";

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    inputNumber(e.target.value);
    updateScreen(currentNumber);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    inputOperator(e.target.value);
    console.log("prev number: " + prevNumber);
  });
});

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
  console.log("current number: " + currentNumber);
};

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";
};

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    default:
      return;
  }
  currentNumber = result;
  calculationOperator = "";
};

const clearAll = () => {
  prevNumber = "";
  currentNumber = "0";
  calculationOperator = "";
};

clearButton.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

const inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

decimal.addEventListener("click", (e) => {
  inputDecimal(e.target.value);
  updateScreen(currentNumber);
});

const inputPercentage = (percentage) => {
  if (currentNumber.includes("%")) {
    return;
  }
  currentNumber = currentNumber / 100;
};

const percentage = document.querySelector(".percentage");
percentage.addEventListener("click", (event) => {
  inputPercentage(event.target.value);
  updateScreen(currentNumber);
});
