let url = "https://jsonplaceholder.typicode.com/posts";

//document.addEventListener('DocumentContentLoaded', ()=>{
function fetchCall() {
  fetch(url)
    .then((response) => response.json())

    .then((value) => {
      dataConverter(value);
    })
    .catch((err) => controlError(err));
}

fetchCall();

function dataConverter(param) {
  for (const data of param) {
    //arr.push(data)
    console.log(data);
  }
}

function controlError(params) {
  console.log(params);
}
const container = document.createElement("div");
const firstPTag = document.createElement("p");
const secondPTag = document.createElement("p");
const thirdPTag = document.createElement("p");
const fourthTTag = document.createElement("p");

container.className = "container";
firstPTag.className = "firstPTag";
secondPTag.className = "secondPTag";
thirdPTag.className = "thirdPtag";
fourthTTag.className = "fourthTTag";

container.append(firstPTag, secondPTag, thirdPTag, fourthTTag);

document.querySelector(".mainBody").append(container);
container.style.backgroundColor = "red";
firstPTag.style.backgroundColor = "green";
secondPTag.style.backgroundColor = "blue";
thirdPTag.style.backgroundColor = "yellow";
fourthTTag.style.backgroundColor = "orange";

firstPTag.textContent = "first p Tag";
secondPTag.textContent = "second P Tag";
thirdPTag.textContent = "third P Tag";
fourthTTag.textContent = "fourth P Tag";

firstPTag.style.fontSize = "30px";
firstPTag.style.fontSize = "700";
firstPTag.style.color = "blue";

const mainBody = document.querySelector(".mainBody");
mainBody.append(container);
mainBody.style.width = "100%";
mainBody.style.backgroundColor = "black";
