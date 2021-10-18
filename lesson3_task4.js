/* Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1 Получить все товары, у которых есть фотографии
2 Отсортируйте товары по цене (от низкой цены к высокой) */

const products = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

const productsWithPhoto = products.filter((product) => {
  if (product.photos != null && product.photos[0] != undefined) {
    return true;
  }
});
console.log(productsWithPhoto); // exclude null and underfined

products.sort((item1, item2) => {
  upList = item1.price - item2.price;
  return upList;
});

console.log(products); // uplist for prices

// a) Организовать массив для хранения товаров в корзине

var shopItems = [
  {
    id: 1,
    itemName: "bananas",
    itemPrice: 100,
    itemStock: 10,
  },
  {
    id: 2,
    itemName: "apples",
    itemPrice: 12,
  },
  {
    id: 3,
    itemName: "oranges",
    itemPrice: 140,
    itemStock: 8,
  },
  {
    id: 4,
    itemName: "prunes",
    itemPrice: 160,
    itemStock: 6,
  },
];
/* b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/

function countBasketPrice(totalPrice) {
  for (let i = 0; i < shopItems.length; i++) {
    totalPrice += shopItems[i].itemPrice;
    return totalPrice;
  }
}

countBasketPrice(shopItems);
