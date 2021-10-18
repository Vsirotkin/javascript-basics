"use strict";

// while loop
// let num_count = 0;

// while (num_count <= 100) {
//   console.log(num_count);
//   num_count++;
// }

// for loop
for (let i = 0; i <= 100; i++) {
  if (i === 0) {
    console.log(`${i} - это ноль`);
  } else if (i % 2 === 0) {
    console.log(`${i} - это четное число`);
  } else {
    console.log(`${i} - это нечетное число`);
  }
}
