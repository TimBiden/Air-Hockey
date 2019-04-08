// Set game to Easy
var level = "Medium";

// Remove all "btn-primary" classes.
function removeAllPrimaries() {
  document.getElementById("EasyButton").classList.remove("btn", "btn-primary");
  document
    .getElementById("MediumButton")
    .classList.remove("btn", "btn-primary");
  document.getElementById("HardButton").classList.remove("btn", "btn-primary");
}

// Set game to Easy
function difficultyEasy() {
  level = "Easy";

  removeAllPrimaries();

  document
    .getElementById("EasyButton")
    .classList.remove("btn", "btn-secondary");

  document.getElementById("EasyButton").classList.add("btn", "btn-primary");
}

// Set game to Medium
function difficultyMedium() {
  level = "Medium";

  removeAllPrimaries();

  document
    .getElementById("MediumButton")
    .classList.remove("btn", "btn-secondary");

  document.getElementById("MediumButton").classList.add("btn", "btn-primary");
}

// Set game to Hard
function difficultyHard() {
  level = "Hard";

  removeAllPrimaries();

  document
    .getElementById("HardButton")
    .classList.remove("btn", "btn-secondary");

  document.getElementById("HardButton").classList.add("btn", "btn-primary");
}
