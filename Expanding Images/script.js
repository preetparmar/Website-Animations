const panels = document.querySelectorAll(".panel");

// Adding an Event listener on each panel
panels.forEach((panel) => {
  panel.addEventListener("click", () => toggleActiveClass(panel));
});

function toggleActiveClass(panel) {
  removeActiveClasses();
  panel.classList.toggle("active");
}

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
