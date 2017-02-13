let toBlock = true;
let blockDirection = true;
let blockCheck = true;
let computerYValue = 0;
let toComputer = true;
// let variant = 0;

/**
 * Is the puck heading toward the computer's side?
 * @returns {boolean} // If true AI must move paddle.
 * If false, no movement necessary.
 */
function blockThePuck() {
  // console.log('Block the puck!');
  computerYValue = puckYValue - 20;
  // changeComputerY(computerYValue);
  computerTopY = computerYValue;
}

function missBy() {
  let randomizer = 0;

  randomizer = (Math.floor(Math.random() * 4) + 1);

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

  console.log(`variant = ${variant}`);
  dontBlockPuck(variant);
}

/**
 * Is the puck heading toward the computer's side?
 * Is toBlock = false? This will make the paddle miss.
 * @returns {boolean} // If true AI must move paddle.
 * If false, no movement necessary.
 */
function dontBlockPuck(variant) {

  // console.log('Block the puck!');
  computerYValue = puckYValue + variant;
  // changeComputerY(computerYValue);
  computerTopY = computerYValue;
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
  if (inPlay) {
    if (randomizer === 1) {
      toBlock = true;
    } else {
      toBlock = false;
    }
  }
}

// /**
//  * Is the puck hearing toward the computer's side?
//  * @returns {void}
//  */
// let puckDirection = function puckDirection(nothing) {
//   if (angle > 90 && angle < 270) {
//     toComputer = true;
//   } else {
//     toComputer = false;
//   }
// }

function runOncePerSideCollision() {
  // puckDirection();

  // if (toComputer){
  blockOrNot();
  missBy();
  // }
}
