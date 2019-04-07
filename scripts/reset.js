function resetGame() {
  playerScore = 0;
  computerScore = 0;
  audioLevel = 0.0;
  inPlay = false;
  hideHidden();
}

function hideHidden() {
  var div = document.getElementById("reload");
  div.style.visibility = "hidden";
}
