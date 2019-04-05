let toBlock = true;
let blockDirection = true;
let blockCheck = true;
let variant = 0;

// Is the puck heading toward the computer's side?
// If true AI must move paddle.
function blockThePuck() {
  let computerYValue = puckYValue - 20;
}

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
}

// Will the computer block the puck?
function blockOrNot() {
  const randomizer = Math.floor(Math.random() * 2) + 1;

  if (randomizer === 1) {
    blockCheck = true;
    toBlock = true;
  } else {
    toBlock = false;
    dontBlockPuck();
  }
}

function runOncePerSiceCollision() {
  puckVariance();
}
