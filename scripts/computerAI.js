let variant = 0;
let missPuck = 0;
let randomizer = 0;

// Is the puck heading toward the computer's side?
// If true AI must move paddle.
function puckVariance() {
  // let computerYValue = 0;
  let randomizer = -25;
  randomizer = Math.floor(Math.random() * 6);

  if (randomizer === 1) {
    variant = -72;
  } else if (randomizer === 2) {
    variant = -77;
  } else if (randomizer === 3) {
    variant = 16;
  } else if (randomizer === 4) {
    variant = 20;
  } else {
    variant = -25;
  }

  console.log("variant = " + variant);
}

// Likelihood of computer missing puck
function missOrNot() {
  if (level === "Easy") {
    missPuck = 3;
  } else if (level === "Hard") {
    missPuck = 10;
  } else {
    missPuck = 6;
  }

  randomizer = Math.floor(Math.random() * missPuck);
}

// Should it miss or not, and by how much?
function runOncePerSideCollision() {
  missOrNot();
  if (randomizer === 1) {
    puckVariance();
  }
}
