const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", (e) => {
  nav.classList.toggle("active");
});

const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const productName = button.dataset.product;
    alert(`A customer has added ${productName} to their cart!`);
  });
});
