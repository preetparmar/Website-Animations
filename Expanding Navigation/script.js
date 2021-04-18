// DECLARING VARIABLES
const headerContainer = document.getElementById("headerContainer");
const navToggle = document.getElementById("navToggle");
const body = document.querySelector("body");

// EVENT LISTENER
navToggle.addEventListener("click", toggleActiveClass);

// CUSTOM FUNCTION
function toggleActiveClass() {
  headerContainer.classList.toggle("active");
  body.classList.toggle("active");
}
