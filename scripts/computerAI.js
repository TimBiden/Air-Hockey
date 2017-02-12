let toBlock = true;
let blockDirection = true;
let blockCheck = true;
let computerYValue = 0;

/**
 * Is the puck heading toward the computer's side?
 * @returns {boolean} // If true AI must move paddle.
 * If false, no movement necessary.
 */
function blockThePuck() {
  console.log('Block the puck!');
  computerYValue = puckYValue - 20;
  // changeComputerY(computerYValue);
  computerTopY = computerYValue;
}

/**
 * Is the puck heading toward the computer's side?
 * Is toBlock = false? This will make the paddle miss.
 * @returns {boolean} // If true AI must move paddle.
 * If false, no movement necessary.
 */
function dontBlockPuck() {
  console.log('The puck shouldnt get blocked.');
  let variant = 1;
  // let computerYValue = 0;
  let randomizer = 0;

  if (blockCheck) {
    randomizer = (Math.floor(Math.random() * 4) + 1);
  }
  blockCheck = false;

  if (randomizer === 0) {
    variant = 0;
  } else if (randomizer === 1) {
    variant = 60;
  } else if (randomizer === 2) {
    variant = 70;
  } else if (randomizer === 3) {
    variant = -20;
  } else {
    variant = -30;
  }

  computerYValue = puckYValue + variant;

  computerTopY = computerYValue

  // changeComputerY(computerYValue);
}

/**
 * Will the computer block the puck?
 * @returns {void}
 * If false, no movement necessary.
 * direction is called from sideCollisionAngle in puck.js
 */
function blockOrNot() {
  const randomizer = (Math.floor(Math.random() * 2) + 1);

  // console.log(`${blockCheck}`);

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
