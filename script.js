// function sleep(name) {
//   console.log(name + "is sleeping at 10 pm");
// }
// sleep("josim ");
// sleep("nayem ");
// sleep("hasan ");

// const car = {
//   name: "BMW",
//   weight: "950kg",
//   color: "red",
//   speed: function () {
//     console.log("This car is 120");
//     this.start();
//   },
//   start: function () {
//     console.log("car has been started");
//   },
// };

// console.log(car.speed());

// const x = 5;
// const y = new Number(5);
// console.log(x, y);
const hk = function () {
  document.getElementById("time").innerHTML = new Date();
};

// const text = "shjsdushedbhuhdujuuw";
// console.log(text.length);

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);

// console.log(text);
// console.log(part);

// console.log(text.split(" "));

// const a = "hasan";
// const b = "nader";

//////////////////////////////////////
//Number
const x = 500;
const y = new Number(500);

// console.log(y);

let m = new Number(120);
const newM = m.toString();
const fixed = m.toFixed();
const parseInT = parseInt(newM);

// console.log(typeof newM);
// console.log(typeof parseInT);
//////////////////////////////////////

/*
//////////////////////////////////////
//array
// const cars = new Array(["Saab", "Volvo", "BMW", "Audi"]);
// cars[4] = "Audi";
// console.log(cars.indexOf("BMW"));
// console.log(cars[cars.length - 1]);

// const myFunc = function (value) {
//   console.log(value);
// };
// cars.forEach(function (value) {
//   console.log(value);
// });

// for (let i = 0; i < cars.length; i++) {
//   const element = cars[i];
//   console.log(element);
// }

// const fruits = ["apple", "mango", "banana", "lemon"];
// console.log(fruits.toString());
// console.log(fruits.join(" * "));

// const a = fruits.pop();
// console.log(a);
// const j = fruits.splice(2, 0, "lichi", "tree");
// console.log(fruits, j);
// const cut = fruits.splice(0, 1);
// console.log(cut);

// const myGirls = ["Cecile", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myFruits = ["apple", "mango", "banana", "lemon"];

// const myChildren = myGirls.concat(myBoys, myFruits);
// console.log(myChildren);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const sortFruits = fruits.sort();
// console.log(sortFruits);

// const sortReverse = fruits.reverse();
// console.log(sortReverse);

// const cars = [
//   { type: "Volvo", year: 2016 },
//   { type: "Saab", year: 2001 },
//   { type: "BMW", year: 2010 },
// ];

// const hm = cars.sort(function (a, b) {
//   return a.year - b.year;
// });
// console.log(hm);

const numbers = [45, 4, 9, 16, 25];

const myFunc = function (value, index, array) {
  // return value > 10;
  return value > 20;
  // console.log("value:", value * 2);
  // console.log("index:", index);
  // console.log("array:", array);
};

//forEach
numbers.forEach(myFunc);

//mapping
const newMap = numbers.map(myFunc);
console.log(newMap);

//filter
const newFilter = numbers.filter(myFunc);
console.log(newFilter);

//reduce
// const number2 = [45, 4, 9, 16, 25];

// const myFunc2 = function (total, value, index, array) {
//   return total + value;
// };

// const reduceTotal = number2.reduce(myFunc2, 10);
// console.log(reduceTotal);

//every
const newEvery = numbers.every(myFunc);
console.log(newEvery);

//some
const newSome = numbers.some(myFunc);
console.log(newSome);

//find
const newFindIndex = numbers.findIndex(myFunc);
console.log(newFindIndex);
//////////////////////////////////////
*/
