let toBlock = true;
let blockDirection = true;

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
  const randomizer = (Math.floor(Math.random() * 2) + 1);
  if (randomizer === 1) {
    let variant = 1.1;
  } else {
    let variant = 0.9;
  }

  let computerYValue = puckYValue * variant;
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
    console.log('Heading to computer.');
    blockDirection = true;
    blockOrNot();
  } else {
  blockDirection = false;
    console.log('Heading to Player.');
  }
}
