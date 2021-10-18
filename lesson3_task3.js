/* 3 Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15% */


const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

console.log("old price:");
console.log(products);

// price increase
increasePrice = 15 / 100;

// add a price increase to the old price
products.forEach((product) => (product.price += product.price * increasePrice));

console.log("new price:");
console.log(products);


// Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

let basketPrice = 0;

// initial basket
let basket = [
  {
    name: "Тыква",
    price: 60,
    amount: 10,
  },
  {
    name: "Капуста",
    price: 35,
    amount: 20,
  },
  {
    name: "Яблоки",
    price: 60,
    amount: 25,
  },
];

// add an item to the basket
basket.push({ name: "Груши", price: 50, amount: 10 });

// sum of the prices in basket
function countBasketPrice(arr) {
  for (i = 0; i < basket.length; i++) {
    basketPrice += basket[i].price;
  }
  return basketPrice;
}

console.log(basket);
console.log(`total basket price: ${countBasketPrice(basket)}`);

