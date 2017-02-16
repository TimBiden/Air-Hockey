let variant = 0;

/**
 * Is the puck heading toward the computer's side?
 * @returns {boolean} // If true AI must move paddle.
 * If false, no movement necessary.
 */
function blockThePuck() {
  let computerYValue = puckYValue - 20;
}

/**
 * Is the puck heading toward the computer's side?
 * Is toBlock = false? This will make the paddle miss.
 * @returns {boolean} // If true AI must move paddle.
 * If false, no movement necessary.
 */
function puckVariance() {
  // let computerYValue = 0;
  let randomizer = -25;

  randomizer = (Math.floor(Math.random() * 6));

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

function runOncePerSiceCollision() {
  puckVariance();
}
