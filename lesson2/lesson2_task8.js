/* С помощью рекурсии организовать функцию возведения числа в степень.
Формат: function power(val, pow), где val – заданное число, pow – степень.*/

function power(val, pow) {
  if (pow > 0) {
    return val * power(val, pow - 1);
  } else if (pow < 0) {
    return val * power(val, pow + 1);
  } else return 1;
}

result = power(3, 6);
console.log(result);
