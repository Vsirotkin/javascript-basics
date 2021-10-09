/* Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
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

let a = 4;
let b = 2;

console.log(sum(a, b));
console.log(deductions(a, b));
console.log(multiply(a, b));
console.log(divide(a, b));
