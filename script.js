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
// const x = 500;
// const y = new Number(500);

// // console.log(y);

// let m = new Number(120);
// const newM = m.toString();
// const fixed = m.toFixed();
// const parseInT = parseInt(newM);

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

/*
//////////////////////////////////////
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomValue = getRndInteger(10, 20);
console.log(randomValue);

//////////////////////////////////////
//Problem solving
//1.
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRndInteger(1, 6));

//2.
const students = ["nayem", "asad", "rakib", "nayan"];
console.log(students.sort());

//3.
const numbers = [5, 2, 10, 1, 8];

// Sorting the array in ascending order
const roll_numbers = numbers.sort(function (a, b) {
  return a - b;
});
console.log(roll_numbers);

//4.
const isLeapYear = function (year) {
  if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
};
isLeapYear(2016);

//5.
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

const countVowels = function (sentence) {
  count = 0;
  const letters = Array.from(sentence);

  letters.forEach(function (value, index, array) {
    if (vowels.includes(value)) {
      count++;
    }
  });

  return count;
};

console.log(countVowels("I love Bangladesh"));

//6.
const array = [1, 2, 3, 4, 4, 5, 6, 6];

const duplicates = array.filter(function (value, index, array) {
  return array.indexOf(value) !== index;

  //unique value
  //return array.indexOf(value) === index;
});

console.log(duplicates);

// function extractDuplicates(array) {
//   const duplicates = [];
//   const uniqueValues = new Set();

//   array.forEach(function (value) {
//     if (uniqueValues.has(value)) {
//       duplicates.push(value);
//     } else {
//       uniqueValues.add(value);
//     }
//   });
//   return duplicates;
// }

// const array = [1, 2, 3, 4, 4, 5, 6, 6];
// const duplicateElements = extractDuplicates(array);
// console.log(duplicateElements);
//////////////////////////////////////
*/

// let age = "skdjg";

// if (age >= 18) {
//   console.log("you are adult");
// } else {
//   console.log("You are picci");
// }

// const result =
//   age >= 18
//     ? age < 30
//       ? "You are adult"
//       : "you are buira"
//     : "You are not adult";
// console.log(result);

// age = Number(age);

// if (isNaN(age)) {
//   console.log("Input is not a number");
// } else {
//   console.log(age <= 18 ? "you  are young" : "you are too old");
// }

//else if conditions
////////////////////////////////////

// let age = 30;

// age = Number(age);

// if (age < 18) {
//   console.log("you are young");
// } else if (age == 18) {
//   console.log("welcome adult");
// } else if (age > 18 && age < 30) {
//   console.log("you are matured");
// } else {
//   console.log("you are too old");
// }
////////////////////////////////////

//loop for in
// const person = { fname: "John", lname: "Doe", age: 25 };
// for (const key in person) {
//   console.log(person[key]);
// }

// //loop for of
// const names = "hasan";

// for (const name of names) {
//   console.log(name);
// }
////////////////////////////////////
// //break
// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(`number is ${i}`);
// }

//continue
// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(`number is ${i}`);
// }
////////////////////////////////////

// //set
// const mySet = new Set();

// mySet.add("hasan");
// mySet.add("Raja");
// mySet.add("Delmar");
// console.log(mySet);

// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// function myFunction(item) {
//   sum += item;
// }

// console.log(sum);

////////////////////////////////////
//maps
// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200],
// ]);

// fruits.set("malta", 200);
// console.log(fruits);
// console.log(fruits.size);
// console.log(fruits.get("apples"));
// console.log(fruits.has("apples"));

// fruits.forEach(function (value, key) {
//   console.log(key, "=", value);
// });

////////////////////////////////////
// let x = 12;
// try {
//   // if (x.trim() == "") throw "empty";
//   if (isNaN(x)) throw "not a number";
//   x = Number(x);
//   if (x < 5) throw "too low";
//   if (x > 10)
//     throw {
//       message: "too high",
//       name: "highError",
//     };
// } catch (err) {
//   console.log(err);
// }
////////////////////////////////////
//Hoisting
// x = 5;
// console.log(x, y);
// var x;
// var y = 7;
////////////////////////////////////
//this
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
//   getFullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// person2 = {
//   firstName: "Hasan",
//   lastName: "Khan",
// };
// console.log(person.getFullName.call(person2));
////////////////////////////////////
//js classes

// class Car {
//   constructor(name, model) {
//     this.name = name;
//     this.model = model;
//   }
//   carFeatures(brand) {
//     console.log(`${this.name} is a adventures ${brand}`);
//   }
// }

// const car1 = new Car("BMW", "X5");
// const car2 = new Car("Audi", "f51");
// const car3 = new Car("Suzuki", "C1");
// console.log(car2);

// car1.carFeatures("brand");
// car2.carFeatures("brand");
// car3.carFeatures("brand");
////////////////////////////////////
//json to obj
// let text =
//   '{ "employees" : [' +
//   '{ "firstName":"John" , "lastName":"Doe" },' +
//   '{ "firstName":"Anna" , "lastName":"Smith" },' +
//   '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// const obj = JSON.parse(text);
// console.log(obj.employees[0].firstName);

// //obj to json
// const text2 = {
//   name: "hasan khan",
//   age: 25,
//   profession: "web developer",
// };

// console.log(JSON.stringify(text2));
////////////////////////////////////
