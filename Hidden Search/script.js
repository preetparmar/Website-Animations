// VARIABLES
const btn = document.getElementById("btn");
const searchBar = document.getElementById("searchBar");
const input = document.querySelector("input");
let inputValue = input.getAttribute("value");

// EVENT LISTENERS
btn.onclick = toggleActiveClass;

// CUSTOM FUNCTIONS
function toggleActiveClass() {
  searchBar.classList.toggle("active");
  input.focus();
}
