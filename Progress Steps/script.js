// --- DECLARING VARIABLES ---
const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");
var currentActive = 1;

// --- ADDING EVENT LISTENERS ----
next.addEventListener("click", increaseCurrentActive);
prev.addEventListener("click", reduceCurrentActive);

// --- CUSTOM FUNCTIONS ----
// Function to increase current active
function increaseCurrentActive() {
  if (currentActive < circles.length) {
    currentActive++;
  }
  update();
}

// Function to reduce current active
function reduceCurrentActive() {
  if (currentActive > 1) {
    currentActive--;
  }
  update();
}

// Function to update components of progress bar
function update() {
  // Handling Enable and Disable of Buttons
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }

  // Updating Circle Border and Bar
  circles.forEach(updateActiveClasses);

  // Handling Progress Bar
  let actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
}

function updateActiveClasses(circle, idx) {
  // Handling Circle Border
  if (idx < currentActive) {
    circle.classList.add("active");
  } else {
    circle.classList.remove("active");
  }
}
