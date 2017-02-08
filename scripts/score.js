let playerScore = 0;
let computerScore = 0;

function score() {
  console.log(' ');
  console.log(`computerScore = ${computerScore}`);
  console.log(`playerScore = ${playerScore}`);
  inPlay = false;
  render();
}

function showScore() {
  context.font = '40px Verdana';
  context.fillStyle = '#FF0700';
  context.fillText('Computer!', 15, 80);
  context.fillText(`${computerScore}`, 100, 170);

  context.fillStyle = '#00C90D';
  context.font = '40px Verdana';
  context.fillText('Player!', 310, 80);
  context.fillText(`${playerScore}`, 350, 170);
}
