// task 1 from gb site:

const max = 999;
let digit = {
  number:
    (Math.round(Math.random() * max), +prompt("Введите число от 0 до 999")),
  hundreds: [],
  tens: [],
  ones: [],
};
if (digit.number > 0 && digit.number <= 9) {
  digit.ones = digit.number;
} else if (digit.number > 0 && digit.number >= max) {
  digit.ones = Math.floor(digit.number % 10);
  digit.tens = Math.floor((digit.number / 10) % 10);
  digit.hundreds = Math.floor((digit.number / 100) % 10);
} else {
  console.log("Вы ввели число за диапазоном 0 - 999");  // не смог реализовать нового введения числа. пытался через while - не получилось. буду благодарен, если сможете подсказать, как это сделать. Виктор
}
console.log(digit);    

// 1.1 es05

/* const Product = function (options) {
  this.name = options.name;
  this.price = options.price;
};

Product.prototype.make25PercentDiscount = function () {
  console.log(
    `Discount for this ${this.name} is ${
      this.price * 0.25
    } tugriks. New price is: ${this.price - this.price * 0.25} tugriks.`
  );
};

const computer = new Product({ name: "Dell", price: 200 });

console.log(computer);
computer.make25PercentDiscount(); */

// es06

class Product {
  constructor(options) {
    this.name = options.name;
    this.price = options.price;
  }
}

const computer = new Product({ name: "Dell", price: 200 });
Object.prototype.make25PercentDiscount = function () {
  console.log(
    `Discount for this ${this.name} is ${
      this.price * 0.25
    } tugriks. New price is: ${this.price - this.price * 0.25} tugriks.`
  );
};

console.log(computer);
computer.make25PercentDiscount();
