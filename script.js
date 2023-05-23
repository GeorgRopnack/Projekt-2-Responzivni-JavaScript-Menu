const dropdown = document.querySelector(".dropdown");
const openToggle = document.querySelector(".open-toggle");
const closeToggle = document.querySelector(".close-toggle");
const ul = document.querySelector("ul");

ul.classList.add("hidden");

dropdown.addEventListener("click", () => {
  openToggle.classList.toggle("hidden");
  closeToggle.classList.toggle("hidden");
  ul.classList.toggle("hidden");
});
