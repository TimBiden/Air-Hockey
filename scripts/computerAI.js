/**
 * Is the puck heading toward the computer's side?
 * @returns {boolean} // If true AI must move paddle.
 * If false, no movement necessary.
 */
function blockThePuck() {
  let computerYValue = 0;
  if (randomizer) { // Block the puck
    computerYValue = puckYValue - 32;
  } else { // Don't block the puck
    computerYValue = puckYValue - 32;
  }
  Computer.update(computerYValue);
}

/**
 * Is the puck heading toward the computer's side?
 * @returns {void}
 * If false, no movement necessary.
 * direction is called from sideCollisionAngle in puck.js
 */
let direction = function detectDirection(puckAngle) {
  if (puckAngle > 90 && puckAngle < 270) {
    blockThePuck();
  }
};

/**
 * This will decide things like whether or not the puck will be blocked,
 * whether the paddle is too high or too low...
 * @returns {int} // Returns a value of either 1 or 2.
 */
let randomizer = function willItBlockThePuck() {
  const fifty50 = (Math.floor(Math.random() * 2));

  if (fifty50 === 2){
    return true;
  } else {
    return false;
  }
};
