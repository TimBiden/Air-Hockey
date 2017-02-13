let toBlock = true;
let blockDirection = true;
let blockCheck = true;
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
  let computerYValue = 0;
  randomizer = 0;

  if (blockCheck) {
    randomizer = (Math.floor(Math.random() * 5) + 1);
  }
  blockCheck = false;

  if (randomizer === 1) {
    variant = 0;
  } else if (randomizer === 2) {
    variant = -30;
  } else if (randomizer === 3) {
    variant = -40;
  } else if (randomizer === 4) {
    variant = 30;
  } else {
    variant = 40;
  }

  computerTopY = puckYValue * variant;
  console.log(`variant = ${variant}`);
  console.log(`computerTopY = ${computerTopY}`);

}

/**
 * Will the computer block the puck?
 * @returns {void}
 * If false, no movement necessary.
 * direction is called from sideCollisionAngle in puck.js
 */
function blockOrNot() {
  const randomizer = (Math.floor(Math.random() * 2) + 1);

  console.log(`${blockCheck}`);

  if (randomizer === 1) {
    blockCheck = true;
    toBlock = true;
  } else {
    toBlock = false;
    dontBlockPuck();
  }
}

/**
 * Is the puck hearing toward the computer's side?
 * @returns {void}
 */
function puckDirection() {
  if (angle > 90 && angle < 270) {
    blockDirection = true;
    blockOrNot();
  } else {
    blockDirection = false;
  }
}

function runOncePerSiceCollision() {
  puckVariance();
}
