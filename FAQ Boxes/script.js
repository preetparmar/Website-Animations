// DECLARING VARIABLES
const toggleBtns = document.querySelectorAll(".faq-toggle");
const faqBox = document.querySelectorAll(".faq");

// EVENT LISTENER
toggleBtns.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentNode.classList.toggle("active");
  });
});
