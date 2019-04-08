// Set game to Easy
var level = "Medium";

// Remove all "btn-primary" classes.
function removeAllPrimaries() {
  document.getElementById("EasyButton").classList.remove("btn-primary");
  document.getElementById("MediumButton").classList.remove("btn-primary");
  document.getElementById("HardButton").classList.remove("btn-primary");

  document.getElementById("EasyButton").classList.add("btn-secondary");
  document.getElementById("MediumButton").classList.add("btn-secondary");
  document.getElementById("HardButton").classList.add("btn-secondary");
}

// Set game to Easy
function difficultyEasy() {
  level = "Easy";

  removeAllPrimaries();

  document.getElementById("EasyButton").classList.remove("btn-secondary");

  document.getElementById("EasyButton").classList.add("btn-primary");
}

// Set game to Medium
function difficultyMedium() {
  level = "Medium";

  removeAllPrimaries();

  document.getElementById("MediumButton").classList.remove("btn-secondary");

  document.getElementById("MediumButton").classList.add("btn-primary");
}

// Set game to Hard
function difficultyHard() {
  level = "Hard";

  removeAllPrimaries();

  document.getElementById("HardButton").classList.remove("btn-secondary");

  document.getElementById("HardButton").classList.add("btn-primary");
}
