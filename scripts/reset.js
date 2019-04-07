function resetGame() {
  playerScore = 0;
  computerScore = 0;
  volume = 0;
  hideHidden();
}

function hideHidden() {
  var div = document.getElementById("reload");
  div.style.visibility = "hidden";
}
