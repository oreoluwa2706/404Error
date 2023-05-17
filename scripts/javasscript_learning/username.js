/*let username = prompt("Enter username not more than 10 alphabeth");

if (username != null) {
  while (!validateUsername(username)) {
    username = prompt("Enter username not more than 10 alphabeth");
  }
}
let password = prompt("Enter password more than 6 length");

if (validateUsername(username)) {
  if (password != null) {
    while (!validatePassword(password)) {
      password = prompt("Enter password more than 6 length");
    }
  }
}

if (validatePassword(password) === true) {
  let confirmPassword = prompt(
    "Enter correct password to confirm your password"
  );
  while (password !== confirmPassword) {
    confirmPassword = prompt("Enter correct password to confirm your password");
  }
}

alert(`Check below to see your details
    Username = ${username}
    password = ${password}`);

function validateUsername(username) {
  if (username === null) {
    return false;
  }
  if (username.length < 10) {
    return true;
  }
  return false;
}

function validatePassword(password) {
  if (password === null) {
    return false;
  }
  if (password.length > 6) {
    return true;
  }
  if (String.includes(username)) {
    return false;
  }
  return false;
}*/

let contain = document.getElementById("container");
contain.innerHTML = "<button onclick='buy()'>BUY</button>";
contain.innerHTML.style.display = "red";

function buy() {
  contain.innerHTML += "<p>THANK YOU FOR YOUR PATRONAGE</p>";
}
