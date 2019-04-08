// Set game to Easy
var level = "Medium";

function difficultyEasy() {
  level = "Easy";

  document
    .getElementById("EasyButton")
    .classList.remove("btn", "btn-secondary");
  document.getElementById("EasyButton").classList.remove("btn", "btn-primary");
  document
    .getElementById("MediumButton")
    .classList.remove("btn", "btn-primary");
  document.getElementById("HardButton").classList.remove("btn", "btn-primary");

  document.getElementById("EasyButton").classList.add("btn", "btn-primary");
}

// Set game to Medium
function difficultyMedium() {
  level = "Medium";

  document
    .getElementById("EasyButton")
    .classList.remove("btn", "btn-secondary");
  document.getElementById("EasyButton").classList.remove("btn", "btn-primary");
  document
    .getElementById("MediumButton")
    .classList.remove("btn", "btn-primary");
  document.getElementById("HardButton").classList.remove("btn", "btn-primary");

  document.getElementById("MediumButton").classList.add("btn", "btn-primary");
}

// Set game to Hard
function difficultyHard() {
  level = "Hard";

  document
    .getElementById("EasyButton")
    .classList.remove("btn", "btn-secondary");
  document.getElementById("EasyButton").classList.remove("btn", "btn-primary");
  document
    .getElementById("MediumButton")
    .classList.remove("btn", "btn-primary");
  document
    .getElementById("HardButton")
    .classList.remove("btn", "btn-secondary");
  document.getElementById("HardButton").classList.remove("btn", "btn-primary");

  document.getElementById("HardButton").classList.add("btn", "btn-primary");
}
