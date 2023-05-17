//console.log("Thank You")
function getData(url, good, bad) {
  return new Promise((resolve, reject) => {
    if (url === null) {
      return;
    }
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status === 200) {
        //...
        resolve(xhr.responseText);
      } else {
        //..
        reject(xhr.status);
      }
    };
  });
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
getData(url)
  .then((res) => {
    console.log("Successful 1", res);
    return getData("https://reqres.in/api/users?page=2");
  })
  .then((res) => {
    console.log("Successful 2", res);
    return getData("https://reqres.in/api/users?page=2");
  })
  .then((res) => {
    console.log("Successful 3", res);
    return getData("https://reqres.in/api/users?page=2");
  })
  .then((res) => {
    console.log("Successful 4", res);
    return getData("https://reqres.in/api/users?page=2");
  })
  .catch((res) => {
    notSuccessful(res);
  });
