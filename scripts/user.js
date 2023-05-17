/*console.log(document.body.firstElementChild);
console.log(document.body.children[1]);
console.log(document.body.children[1].lastElementChild.innerHTML);

let div = document.createElement("div");
let p = document.createElement("p");
let p1 = document.createElement("p1");
p.append("This is a p tag");
p1.append(" \n this is the second p tag");
div.append(p);
div.append(p1);
//div.append("Added");
//console.log(document.body.appendChild(div));
console.log(document.body.prepend(div));
//console.log(document.body.children[1].lastElementChild.innerHTML.append(p));

let hasSolvedChallenged = false;
let hasHintsLeft = false;

if (hasSolvedChallenged === false && hasHintsLeft === false) {
  showsolution();
}

function showsolution() {
  console.log("Showing the soution....");
}
/*
let person = {
  name: "Oreoluwa",
  age: 31,
  country: "Nigeria",
};

function logData() {
  return (
    person.name +
    " is " +
    person.age +
    "years old and lives in " +
    person.country
  );
}

let myData = logData();
console.log(myData);

*/ /*

function price(age) {
  if (age < 6) {
    return "free";
  } else if (age < 18) {
    return "child discount";
  } else if (age < 27) {
    return "student discount";
  } else if (age < 67) {
    return "full price";
  } else {
    return "senior citizen discount";
  }
}

console.log(price(25));
*/ /*
let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];
console.log("The 5 largest countries in the world:");
for (i in largeCountries) {
  console.log("-" + largeCountries[i]);
}
*/ /*
let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
largeCountries.pop();
largeCountries.push("Pakistan");
largeCountries.shift();
largeCountries.unshift("China");
console.log(largeCountries);
*/
/*
let dayOfMonth = 18;
let weekday = "Friday";

function check() {
  if (dayOfMonth === 13 && weekday === "Friday") {
    return "ahha";
  }
}
console.log(check());
*/ /*
let hands = ["rock", "paper", "scissor"];

function getHand() {
  let rand = Math.floor(Math.random() * 3);
  return hands[rand];
}
console.log(getHand());
*/

let fruit = ["apple", "orange", "apple", "apple", "orange"];
let appleShelf = document.getElementById("apple_shelf");
let orangeShelf = document.getElementById("orange_shelf");

function fruity() {
  for (i in fruit) {
    if (fruit[i] === "orange") {
      orangeShelf.textContent += "orange" + " ";
    } else if (fruit[i] === "apple") {
      appleShelf.textContent += "apple" + " ";
    }
  }
}
console.log(fruity());
