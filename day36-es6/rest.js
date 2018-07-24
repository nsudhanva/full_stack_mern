let fruits = ['apple', 'banana', 'mango', 'orange', 'watermelon'];

//es5

let f1 = fruits[0];

let f2 = [];

f2 = fruits.slice(1);

console.log(f1);
console.log(f2);

//es6

let[fruit1, fruit2, ...rest] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(rest);
// console.log(Array.isArray(rest));

//skipped values from fruits
let[, , ,...others] = fruits;
console.log(others);
