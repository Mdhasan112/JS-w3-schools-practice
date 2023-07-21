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
// const str = "Hello, world!";
// const result = str.indexOf("world");
// console.log(result);

// const sentence =
//   "I love JavaScript. JavaScript is the best programming language.";
// const targetString = "JavaScript";

// // Split the sentence into an array of words
// const words = sentence.split(" ");
// console.log(words);

// // Filter the array to keep only the words that match the targetString
// const matches = words.filter((word) => word === targetString);
// console.log(matches);

// // Get the count of matches
// const count = matches.length;

// console.log(
//   `The string "${targetString}" appears ${count} times in the sentence.`
// );

// const str = "I have 3 apples and 5 oranges.";
// const number = 5;

// // Create a regular expression to match the number
// const regex = new RegExp(number, "g");

// // Use the search() method with the regex to find the index of the number
// const index = str.search(regex);

// if (index !== -1) {
//   console.log(`Number ${number} found at index ${index}`);
// } else {
//   console.log(`Number ${number} not found`);
// }
///////////////////////////////////////
//object advanced
// const person = {
//   fname: " John",
//   lname: " Doe ",
//   age: 25,
// };

// person.nationality = " Bangladeshi";
// delete person.age;

// // object property uses for in loop
// let text = "";
// for (const x in person) {
//   text += person[x];
// }

// console.log(text);

//object property
// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
//     { name: "BMW", models: ["320", "X3", "X5"] },
//     { name: "Fiat", models: ["500", "Panda"] },
//   ],
// };

// for (const x in myObj.cars) {
//   console.log(myObj.cars[x]);
// }

// console.log(myObj.cars[0].name);

//Object method
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
// };

// person.fullName = function () {
//   return this.firstName + " " + this.lastName;
// };
// console.log(person.fullName());

//Display object
// const person = {
//   name: "John ",
//   age: 30,
//   city: " New York",
// };

// text = "";
// for (const x in person) {
//   text += person[x];
// }
// document.getElementById("demo").innerHTML = text;

// Object constructor function and prototype
// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
//   this.fullName = function () {
//     return this.firstName + " " + this.lastName;
//   };
// }

// Person.prototype.address = function () {
//   return "I am from  Gopalganj";
// };

// const hasan = new Person("Hasan", "Khan", 25, "black");
// const sumit = new Person("sumit", "shaha", 32, "brown");
// const milon = new Person("milon", "molla", 30, "black");

// hasan.result = "3.75";

// console.log(hasan.address());
// console.log(hasan.result);

// console.log(hasan);
// console.log(sumit);
// console.log(milon);

//iterable
//const numbers = [1, 2, 3]; //iterable
// const nums = {
//   one: 1,
//   two: 2,
//   three: 3,
// };

// const numIterator = numbers[Symbol.iterator]();
// console.log(numIterator.next());
// console.log(numIterator.next());
// console.log(numIterator.next());
// console.log(numIterator.next());
// console.dir(nums);

//sets
// const letters = new Set(["a", "b", "c"]);

// letters.forEach(function (value) {
//   console.log(value);
// });

// const letterIterator = letters.values();

// for (const x of letters) {
//   console.log(x);
// }

// Create a Map
// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200],
// ]);

// fruits.set("jack-fruits", 600);
// console.log(fruits.get("apples"));

// console.log(fruits);

// fruits.forEach(function (value, key) {
//   console.log(key, "=", value);
// });

///////////////////////////////////////
//function

//function declaration
// function a() {
//   console.log("I am function declaration");
// }

// //function expression
// const b = function () {
//   console.log("I am function expression");
// };

//invoked function or self called function
// (function a() {
//   console.log("I am function invoke");
// })();

// Arrow function
// const c = (x, y) => x * y;
// const arrowNew = c(5, 6);
// console.log(arrowNew);

// function myFunction(x) {
//   x.one = 5;
//   console.log(x.one + x.two);
// }

// const m = {
//   one: 1,
//   two: 2,
// };
// myFunction(m);

//this manually set
//array call
// const person = {
//   fullName: function (city, country) {
//     return this.firstName + " " + this.lastName + " " + city + " " + country;
//   },
// };
// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };
// const person2 = {
//   firstName: "Mary",
//   lastName: "Doe",
// };

// const newPerson = person.fullName.call(person1, "Dhaka", "Bangladesh");
// console.log(newPerson);

//array apply
// const person = {
//   fullName: function (city, country) {
//     return this.firstName + " " + this.lastName + " " + city + " " + country;
//   },
// };
// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };
// const person2 = {
//   firstName: "Mary",
//   lastName: "Doe",
// };

// const newPerson = person.fullName.apply(person1, ["Dhaka", "Bangladesh"]);
// console.log(newPerson);
// console.log(person);

// const maxValue = Math.max.apply(null, [5, 6, 7]);
// console.log(maxValue);

//Closer
// let a = 4;
// function myFunction() {
//   return a * a;
// }

// Initiate counter
//let counter = 0;

// Function to increment counter
// function add() {
//   console.log((counter += 1));
// }
// add();
// add();
// add();

// function add() {
//   let counter = 0;
//   return function plus() {
//     counter += 1;
//   };
// }
///////////////////////////////////////
//class
// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   run(speed) {
//     console.log("Car is running in " + speed);
//   }
// }
// const bmw = new Car("BMW", 2015);
// console.log(bmw);
// bmw.run("120 km per hour");

//class inheritance
// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return "I have a " + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ", it is a " + this.model;
//   }
// }

// let myCar = new Model("Ford", "Mustang");

// console.log(myCar);
// console.log(myCar.show());
///////////////////////////////////////
//Async await
//Callback

// function myDisplay(some) {
//   console.log(some);
// }
// function myCalculator(num1, num2, Callback) {
//   const sum = num1 + num2;
//   Callback(sum);
// }

// myCalculator(10, 5, function (result) {
//   console.log(result);
// });

//asynchronous
// console.log("Line 1 code");

// setTimeout(function () {
//   console.log("line 2 code");
// }, 1000);

// console.log("Line 3 code");
/////////////////
//Callback Pattern
// const paymentsuccess = true;
// const marks = 70;

// function enroll(callback) {
//   console.log("Course enrollment is in  progress");

//   setTimeout(function () {
//     if (paymentsuccess) {
//       callback();
//     } else {
//       console.log("Your payment is failed");
//     }
//   }, 2000);
// }

// function progress(callback) {
//   console.log("Course on progress...");

//   setTimeout(function () {
//     if (marks >= 80) {
//       callback();
//     } else {
//       console.log("You did't get the certifictad");
//     }
//   }, 3000);
// }

// function certificate() {
//   console.log("Welcome! You got the certificate");
// }

// enroll(function () {
//   progress(certificate);
// });

///////////////////
//promise
// const taskSuccess = true;

// console.log("Task 1 done");

// //promise defination
// const promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     if (taskSuccess) {
//       resolve("task 2 done");
//     } else {
//       reject("failed");
//     }
//   }, 2000);
// });

// //promise call
// promise
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// console.log("Task 3 done");

/////////////////

const paymentsuccess = true;
const marks = 90;

function enroll() {
  console.log("Course enrollment is in  progress");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (paymentsuccess) {
        resolve();
      } else {
        reject("Your payment is failed");
      }
    }, 2000);
  });

  return promise;
}
function progress() {
  console.log("Course on progress...");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (marks >= 80) {
        resolve();
      } else {
        reject("You did't get the certifictad");
      }
    }, 3000);
  });

  return promise;
}
function getCertificate() {
  console.log("Preparing your certificate");

  const promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Congrats!, You got the certificate");
    }, 1000);
  });

  return promise;
}

// //promise;
// enroll()
//   .then(progress)
//   .then(getCertificate)
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

///////////////
// //Async Await
// async function course() {
//   try {
//     await enroll();
//     await progress();
//     const result = await getCertificate();

//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

// course();
///////////////////////////////////////
//form
const element = document.getElementById("demo");
element.innerHTML = `Today's date is: ${new Date()} `;

// function validateForm() {
//   const form = document.forms["myForm"];
//   const value = form["fname"].value;

//   if (value === "") {
//     alert("You must input a name");
//     return false;
//   }
// }
////////////////

// function changeEvent() {
//   const title = document.getElementById("title");
//   title.innerHTML = "hello world";
// }

// const button = document.getElementById("title");
// button.addEventListener(
//   "click",
//   function () {
//     console.log("Hello World!");
//   },
//   true
// );

// const container = document.getElementById("container");
// container.addEventListener(
//   "click",
//   function () {
//     console.log("Hello div!");
//   },
//   true
// );
//////////////////

// const myID = document.getElementById("myId");
// const random = document.getElementById("random");
// myID.addEventListener("mousemove", myFunc);

// function myFunc() {
//   random.innerHTML = Math.random();
// }

// function removeHandler() {
//   myID.removeEventListener("mousemove", myFunc);
// }
//////////////////

// const demo2 = document.getElementById("demo2");

// const way1 = demo2.innerHTML;
// const way2 = demo2.firstChild.nodeValue;
// const way3 = demo2.childNodes[0].nodeValue;

// console.log(way3);
/////////////////
//create HTML element
// const para = document.createElement("p");
// const node = document.createTextNode("HELLO WORLD");

// para.appendChild(node);

// const newDiv = document.getElementById("div1");
// newDiv.appendChild(para);

// const p1 = document.getElementById("p1");
// newDiv.insertBefore(para, p1);

//Remmove HTML element
// const p2 = document.getElementById("p2");
// p2.remove();

//or browser frienddly
// const p2 = document.getElementById("p2");

// newDiv.removeChild(p2);

//Replacing HTML Elements
// const p2 = document.getElementById("p2");

// newDiv.replaceChild(para, p2);
////////////////////////////////////////
//BOM
const id1 = document.getElementById("id1");
const id2 = document.getElementById("id2");

function showAlert() {
  window.alert("Hello World");
}

function showConfirm() {
  let txt;
  if (confirm("Your message goes here")) {
    txt = "You pressed ok!";
  } else {
    txt = "You pressed cancel!";
  }
  id1.innerHTML = txt;
}

function showPrompt() {
  const person = prompt("Please enter your name", "hasan");

  let txt;
  if (person === null || person === "") {
    txt = "User cancelled then prompt";
  } else {
    txt = person;
  }
  id2.innerHTML = txt;
}

////////////////////////////////////
let time;
function createSetTimeout() {
  time = setTimeout(function () {
    id1.innerHTML = "2 seconds over";
  }, 2000);
}

function removeSetTimeout() {
  clearTimeout(time);
}

let liveTime;
function createSetInterval() {
  liveTime = setInterval(function () {
    id2.innerHTML = new Date().toLocaleTimeString();
  }, 1000);
}
function removeSetInterval() {
  clearInterval(liveTime);
}
