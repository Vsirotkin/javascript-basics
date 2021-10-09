/* Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции. В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch).
 */

function sum(a, b) {
  // сложение
  return a + b;
}

function deductions(a, b) {
  // вычитание
  return a - b;
}

function multiply(a, b) {
  // умножение
  return a * b;
}

function divide(a, b) {
  // деление
  return a / b;
}

function mathOperation(arg1, arg2, operation) {
  let result = false;

  switch (operation) {
    case "sum":
      result = sum(arg1, arg2);
      break;
    case "deductions":
      result = deductions(arg1, arg2);
      break;
    case "multiply":
      result = multiply(arg1, arg2);
      break;
    case "divide":
      result = divide(arg1, arg2);
      break;
  }
  return result;
}

console.log(mathOperation(4, 2, "sum"));
console.log(mathOperation(4, 2, "deductions"));
console.log(mathOperation(4, 2, "multiply"));
console.log(mathOperation(4, 2, "divide"));
