let toBlock = true;
let blockDirection = true;
let blockCheck = true;

/**
 * Is the puck heading toward the computer's side?
 * @returns {boolean} // If true AI must move paddle.
 * If false, no movement necessary.
 */
function blockThePuck() {
  let computerYValue = puckYValue - 20;
  changeComputerY(computerYValue);
}

/**
 * Is the puck heading toward the computer's side?
 * Is toBlock = false? This will make the paddle miss.
 * @returns {boolean} // If true AI must move paddle.
 * If false, no movement necessary.
 */
function dontBlockPuck() {
  let variant = 1;
  let computerYValue = 0;
  randomizer = 0;

  if (blockCheck) {
    randomizer = (Math.floor(Math.random() * 4) + 1);
  }
  blockCheck = false;

  if (randomizer === 0) {
    variant = 1;
  } else if (randomizer === 1) {
    variant = 0.8;
  } else if (randomizer === 2) {
    variant = 0.9;
  } else if (randomizer === 3) {
    variant = 1.1;
  } else {
    variant = 1.2;
  }

  if (computerYValue <= (puckYValue - 5) || computerYValue >= (puckYValue + 50)) {
    computerYValue = puckYValue * variant;
  }

  changeComputerY(computerYValue);
}

/**
 * Will the computer block the puck?
 * @returns {void}
 * If false, no movement necessary.
 * direction is called from sideCollisionAngle in puck.js
 */
function blockOrNot() {
  const randomizer = (Math.floor(Math.random() * 2) + 1);

  if (randomizer === 1) {
    blockCheck = true;
    toBlock = true;
  } else {
    toBlock = false;
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
