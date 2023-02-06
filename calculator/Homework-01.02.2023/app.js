let operator = "";
let num1 = "";
const screen = document.getElementById("screen");

one.addEventListener("click", () => {
  screen.value += "1";
});
two.addEventListener("click", () => {
  screen.value += "2";
});
three.addEventListener("click", () => {
  screen.value += "3";
});
four.addEventListener("click", () => {
  screen.value += "4";
});
five.addEventListener("click", () => {
  screen.value += "5";
});
six.addEventListener("click", () => {
  screen.value += "6";
});
seven.addEventListener("click", () => {
  screen.value += "7";
});
eight.addEventListener("click", () => {
  screen.value += "8";
});
nine.addEventListener("click", () => {
  screen.value += "9";
});
zero.addEventListener("click", () => {
  screen.value += "0";
});
clearAll.addEventListener("click", () => {
  screen.value = "";
});
clear.addEventListener("click", () => {
  screen.value = screen.value.slice(0, -1);
});
dot.addEventListener("click", () => {
  screen.value += ".";
});
plus.addEventListener("click", () => {
  operator = "+";
  num1 = parseFloat(screen.value);
  screen.value = "";
});
minus.addEventListener("click", () => {
  operator = "-";
  num1 = parseFloat(screen.value);
  screen.value = "";
});
divide.addEventListener("click", () => {
  operator = "/";
  num1 = parseFloat(screen.value);
  screen.value = "";
});
multiply.addEventListener("click", () => {
  operator = "*";
  num1 = parseFloat(screen.value);
  screen.value = "";
});

equals.addEventListener("click", () => {
  let num2 = parseFloat(screen.value);
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = num2;
  }
  screen.value = result;
});
