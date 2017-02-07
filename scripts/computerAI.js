/**
 * Is the puck heading toward the computer's side?
 * @returns {boolean} // If true AI must move paddle.
 * If false, no movement necessary.
 */
function blockThePuck() {
  const computerYValue = puckYValue - 32;
  Computer.update(computerYValue);
}

/**
 * Will the computer block the puck?
 * @returns {void}
 * If false, no movement necessary.
 * direction is called from sideCollisionAngle in puck.js
 */
function blockOrNot() {
  randomizer();
  if (randomizer === 1) {
    console.log(' ');
    console.log('Block the puck');
    console.log(' ');
    blockThePuck();
  } else {
    console.log(' ');
    console.log('Dont Block the puck');
    console.log(' ');
    // dontBlockPuck();
  }
}

/**
 * Is the puck hearing toward the computer's side?
 * @returns {void}
 */
function puckDirection() {
  if (angle > 90 && angle < 270) {
    console.log('Check if the puck will be blocked');
    console.log(`Angle = ${angle}.`);
    blockOrNot();
  } else {
    console.log('Heading to Player.');
  }
}

/**
 * This will decide things like whether or not the puck will be blocked,
 * whether the paddle is too high or too low...
 * @returns {int} // Returns a value of either 1 or 2.
 */
let randomizer = function willItBlockThePuck() {
  const fifty50 = (Math.floor(Math.random() * 2));
};
