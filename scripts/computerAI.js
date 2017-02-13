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
  // let computerYValue = 0;
  let randomizer = -25;

  randomizer = (Math.floor(Math.random() * 6));

  console.log(' ');

  if (randomizer === 1) {
    variant = -72;
    console.log(`Miss the puck.`);
  } else if (randomizer === 2) {
    variant = -77;
    console.log(`Miss the puck.`);
  } else if (randomizer === 3) {
    variant = 16;
    console.log(`Miss the puck.`);
  } else if (randomizer === 4) {
    variant = 20;
    console.log(`Miss the puck.`);
  } else {
    variant = -25;
  }

  // Miss it by going under
  // variant = 15;

  // Miss it by going over
  // variant = -70;

  // computerTopY = puckYValue + variant;
  // console.log(`puck`);
  console.log(`variant = ${variant}`);
  // console.log(`computerTopY = ${computerTopY}`);

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

// /**
//  * Is the puck hearing toward the computer's side?
//  * @returns {void}
//  */
// function puckDirection() {
//   if (angle > 90 && angle < 270) {
//     blockDirection = true;
//     blockOrNot();
//   } else {
//     blockDirection = false;
//   }
// }

function runOncePerSiceCollision() {
  puckVariance();
}
