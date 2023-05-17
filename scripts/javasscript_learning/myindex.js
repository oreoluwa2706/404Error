/*console.log("working");
let height = 34;
let firstname = "Oreoluwa";
var age = 4;

const API_KEY = "123KYJjsnON992";

console.log(firstname);

(firstname = "lydia"), (lastname = "ola");
console.log(lastname);
console.log(age);

//alert(firstname + " " + lastname);
let maxSize = Infinity;
let minSize = -Infinity;

console.log(typeof maxSize);
console.log(`${firstname} ${lastname}`);
console.log(firstname.charAt(2));
console.log(firstname.repeat(3));
console.log(typeof firstname);
let user = {
  id: "SKU-1234",
  surName: "Olaniyi",
  firstName: "Olani",
  phoneNumber: "07032615350",
};

console.log(user.id);
console.log(user);
console.log(Object.values(user));
console.log(Object.keys(user));

let user1 = {
  id: "",
  surName: "",
  firstName: "",
  phoneNumber: "",
};

//let user1Id = prompt("What is your id");
//user1.id = user1Id;
//let user1surName = prompt("Enter your surname");
//user1.surName = user1surName;
//let user1FirstName = prompt("Enter your firstName");
//user1.firstName = user1FirstName;
//let user1PhoneNumber = prompt("Enter your phone Number");
//user1.phoneNumber = user1PhoneNumber;

//console.log(user1);
//alert(` ${user1.id}\n${user1.surName}\n${user1.firstName}\n${user1.phoneNumber}`);

console.log(2 ** 2);
console.log("3" === 3);
console.log("3" == 3);

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
for (let i of numbers) {
  console.log(i);
}
console.log(numbers[5]);

function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

let sub = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

let add = (firstNumber, secondNumber) => firstNumber + secondNumber;

function alltogether(add1, add2) {
  return add1(2, 3) + add2(4, 5);
}

console.log(sum(1, 2));
console.log(sub(5, 3));
console.log(add(5, 6));
console.log(alltogether(sum, add));

console.log("ola");
setTimeout(() => console.log("Ore"), 4000);
console.log("niti");

function sum(x, y) {
  return x + y;
}

console.log(sum(2, 3));

let add1 = function (x, y) {
  return x + y;
};

console.log(add1(5, 6));

let sub1 = (x, y) => {
  return x + y;
};
nativeNames = ["Ore", "Micheal", "Richard", "Glory", "Jude"];
//nativeNames.forEach((nativeName) ={console.log(nativeName) Ore, Micheal
//}

let sum1 = (param1, param2) => {
  x = param1 + 1;
  return param2(param1, x);
};

function fetchApi() {
  fetch("https://pokeapi.co/api/v2/berry/5/")
    .then((response) => response.json())
    .then((data) => cb(data));
}

//fetch()
*/
/*
function callbackFunction(element, index, array) {
  const isNotString = typeof element !== "string";
  if (isNotString) {
    return;
  }

  const isItUpperCaseLetters = /^[A-Z]{3}$/.test(element);
  if (!isItUpperCaseLetters) {
    return;
  }

  const allDifferentCharacters =
    element[0] !== element[1] &&
    element[0] !== element[2] &&
    element[1] !== element[2];

  if (!allDifferentCharacters) {
    return;
  }

  const isItFirstAppearance = array.indexOf(element) === index;

  if (!isItFirstAppearance) {
    return;
  }
  return true;
}
*/

function myDisplayer(something) {
  document.getElementById("demo").innerHTML = something;
}

function myCalculator(num1, num2, myCallBack) {
  let sum = num1 + num2;
  myCallBack(sum);
}

setTimeout(myFunction, 3000);
setTimeout(youngFunction, 7000);
function myFunction() {
  document.getElementById("demo2").innerHTML = "I love You!!";
}
function youngFunction() {
  document.getElementById("demo2").innerHTML += "You are Great";
}

setTimeout(function () {
  myFunct("I love ya!!!");
}, 3000);

function myFunct(value) {
  document.getElementById("demo3").innerHTML = value;
}

setInterval(myFu, 1000);

function myFu() {
  let d = new Date();
  document.getElementById("demo4").innerHTML =
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
