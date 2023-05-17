//console.log("Thank You")
function getData(url, good, bad) {
  if (url === null) {
    return;
  }
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      //...
      good(xhr.responseText);
    } else {
      //..
      bad(xhr.status);
    }
  };
}

function success(response) {
  console.log("Successful");
  console.log(response);
}
function notSuccessful(message) {
  console.log("Failed");
  console.log(`The status of this resulted to: ${message}`);
}

let url = prompt("Enter a Url");
getData(url, success, notSuccessful);
