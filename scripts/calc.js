const display = document.querySelector("#display");
const lastOperation = document.querySelector("#last-operatoin");
// получаем кнопки цифр
const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eigth = document.querySelector(".eigth");
const nine = document.querySelector(".nine");
const dot = document.querySelector(".dot");
// кнопки очистки дисплея
const clear = document.querySelector(".clear");
const clearAll = document.querySelector(".clear-all");
// кнопки мат. операторов
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const division = document.querySelector(".division");
const equalsBtn = document.querySelector(".equals");

let arrNumbers = [0];
let number = "";
let lastOperationStr = "";
let lastOperator = "";
let isDot = false;

// передаем цифры для получения числа и выводим их на дисплей
zero.addEventListener("click", () => {
  printNumber(zero);
});
one.addEventListener("click", () => {
  printNumber(one);
});
two.addEventListener("click", () => {
  printNumber(two);
});
three.addEventListener("click", () => {
  printNumber(three);
});
four.addEventListener("click", () => {
  printNumber(four);
});
five.addEventListener("click", () => {
  printNumber(five);
});
six.addEventListener("click", () => {
    printNumber(six);
});
seven.addEventListener("click", () => {
    printNumber(seven);
});
eigth.addEventListener("click", () => {
    printNumber(eigth);
});
nine.addEventListener("click", () => {
    printNumber(nine);
});
dot.addEventListener("click", () => {
  for (let i = 0; i < number.length; i++) {
    if (number[i] === ".") {
      isDot = true;
      break;
    }
    isDot = false;
  }
  if (!isDot) {
    printNumber(dot);
  }
});

// чистим поля
clear.addEventListener("click", () => {
  number = number.slice(0, number.length - 1);
  display.textContent = number === "" ? "0" : number;
});
clearAll.addEventListener("click", () => {
  lastOperation.textContent = display.textContent;
  arrNumbers = [0];
  display.textContent = "0";
  number = "";
  lastOperator = "";
});

// проводим мат операции
plus.addEventListener("click", () => {
  equals(lastOperator);
  lastOperator = "+";
  saveMathOperator(plus);
});
minus.addEventListener("click", () => {
  equals(lastOperator);
  lastOperator = "-";
  saveMathOperator(minus);
});
multiply.addEventListener("click", () => {
  equals(lastOperator);
  lastOperator = "*";
  saveMathOperator(multiply);
});
division.addEventListener("click", () => {
  equals(lastOperator);
  lastOperator = "/";
  saveMathOperator(division);
});
equalsBtn.addEventListener("click", () => {
  equals(lastOperator);
  lastOperation.textContent =
    arrNumbers[arrNumbers.length - 3] +
    lastOperator +
    number +
    equalsBtn.textContent;
  display.textContent = arrNumbers[arrNumbers.length - 1];
});

// получаем цифру и добавляем ее к числу на дисплее
function printNumber(btn){
    number += btn.textContent;
    display.textContent = number;
}
// запоминаем мат. операции
function saveMathOperator(btn) {
  display.textContent = "0";
  number = "";
  lastOperationStr = arrNumbers[arrNumbers.length - 1] + btn.textContent;
  lastOperation.textContent = lastOperationStr;
}

// вычисляем
function equals(operator) {
  if (operator === "+" || operator === "")
    arrNumbers.push((arrNumbers[arrNumbers.length - 1] += +number));
  else if (operator === "-")
    arrNumbers.push((arrNumbers[arrNumbers.length - 1] -= +number));
  else if (operator === "*")
    arrNumbers.push((arrNumbers[arrNumbers.length - 1] *= +number));
  else if (operator === "/")
    arrNumbers.push((arrNumbers[arrNumbers.length - 1] /= +number));
}
