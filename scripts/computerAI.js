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
 * Will the computer block the puck?
 * @returns {void}
 * If false, no movement necessary.
 * direction is called from sideCollisionAngle in puck.js
 */
function blockOrNot() {
  const randomizer = (Math.floor(Math.random() * 2) + 1);

  if (randomizer === 1) {
    console.log(' ');
    console.log('Block the puck.');
    blockThePuck();
  } else {
    console.log(' ');
    console.log('Dont block the puck.');
    // dontBlockPuck();
  }
}

/**
 * Is the puck hearing toward the computer's side?
 * @returns {void}
 */
function puckDirection() {
  if (angle > 90 && angle < 270) {
    console.log('Heading to computer.');
    blockOrNot();
  } else {
    console.log('Heading to Player.');
  }
}
