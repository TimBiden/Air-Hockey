let playerScore = 0;
let computerScore = 0;
let gameOver = false;

function score() {
  // playAudio(organ);
  inPlay = false;
  render();
}

function showScore() {
  context.font = "40px Verdana";
  context.fillStyle = "#FF0700";
  context.fillText("Computer!", 15, 80);
  context.fillText(`${computerScore}`, 100, 170);

  context.fillStyle = "#00C90D";
  context.fillText("Player!", 310, 80);
  context.fillText(`${playerScore}`, 350, 170);

  if (playerScore >= 11) {
    context.fillStyle = "#00C90D";
    context.fillText("You Won!", 285, 230);
    context.fillStyle = "#FF0700";
    context.fillText("Lost.", 70, 230);
    gameOver = true;
    showhidden();
  }

  if (computerScore >= 11) {
    context.fillStyle = "#00C90D";
    context.fillText("You lost.", 280, 230);
    context.fillStyle = "#FF0700";
    context.fillText("Won.", 75, 230);
    gameOver = true;
    showhidden();
  }
}

function showhidden() {
  var div = document.getElementById("reload");
  div.style.visibility = "visible";
}
