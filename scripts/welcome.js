let welcomeEl = document.getElementById("welcome-el");
console.log(welcomeEl);
let firstName = "Oreoluwa";
let lastName = "Olaniyi";
let fullName = lastName + " " + firstName;
let greeting = "Hi there";
let myPoints = 3;
console.log(fullName);

function createGreet() {
  let myName = greeting + ", " + fullName + "!";
  console.log(myName);
}
function point() {
  myPoints += 3;
  myPoints -= 1;
  console.log(myPoints);
}

createGreet();
point();

let checkError = document.getElementById("error");
console.log(checkError);

function errorMessage() {
  console.log("button clicked");
  checkError.innerHTML = "Something went wrong, please try again";
}

let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").innerHTML = num1;
document.getElementById("num2-el").innerHTML = num2;
let sumEl = document.getElementById("sum-el");
let subEl = document.getElementById("subtract-el");
let multiplyEl = document.getElementById("multiply-el");
console.log(sumEl);
console.log(subEl);
console.log(multiplyEl);

function addTogether() {
  console.log("add clicked");
  let add = num1 + num2;
  sumEl.innerHTML += add;
}
function subtractFrom() {
  console.log("subtract clicked");
  let sub = num1 - num2;
  sumEl.innerHTML += sub;
}
function divideBy() {
  console.log("divide clicked");
  let divBy = num1 / num2;
  sumEl.innerHTML += divBy;
}
function multiplyBy() {
  console.log("multiply clicked");
  let multiplyBy = num1 * num2;
  sumEl.innerHTML += multiplyBy;
}
