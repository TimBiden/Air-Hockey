// =============================================================================
//
//   Variable Definitions and Initialization
//
// =============================================================================
//

// Put all of your `var foo = bar;` setup here.

const hockeyPuck = new Puck(); // Used in table.js
let inPlay = false; // Sets ability to puckDrop
let puckSpeed = 0; // Set initial speed of puck before puckDrop
let xCoordinate = 0;
let yCoordinate = 0;
let angle = 0;
let puckYValue = 0;
const playerLeftX = 460; // Player Paddle coordinates
const computerRightX = 25; // Player Paddle coordinates

// =============================================================================
//
//   Object Constructor Definitions
//
// =============================================================================
//

// Put all of your `function Foo() {}` object constructor and prototype method
// definitions here.

/**
 * Puck values
 * @returns {void}
 */
function Puck() {
  this.radius = 8;
  this.startAngle = 0 * Math.PI;
  this.endAngle = 2 * Math.PI;
  this.counterClockwise = false;
  this.speed = 0;
}

/**
 * Render Puck prototype
 * @param {int} x X Coordinate.
 * @param {int} y Y Coordinate.
 * @returns {void}
 */
Puck.prototype.render = function(x, y) {
  // Check if game is in play. If it is, puck to center ice.
  // Otherwise, puck is at location dictated by speed and direction.
  if (inPlay === true) {
    puckAngle();
    this.x += xCoordinate;
    this.y += yCoordinate;
  } else {
    this.x = 250;
    this.y = 150;
  }

  puckYValue = this.y;

  context.strokeStyle = 'black';
  context.beginPath();
  context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.counterClockwise);
  context.lineWidth = 15;
  context.stroke();
};

/**
 * Make the puck move.
 * @returns {void}
 */
Puck.prototype.update = function() {
  this.x += xCoordinate; // To move puck
  this.y += yCoordinate; // To move puck

  if (this.x > 485) { // Eliminate quiver action.
    this.x = 485;
  }
  if (this.x < 15) {
    this.x = 15;
  }
  if (this.y > 285) { // Eliminate quiver action.
    this.y = 285;
  }
  if (this.y < 15) {
    this.y = 15;
  }

  collisionDetect(this.x, this.y);
};

// =============================================================================
//
//   Helper Function Definitions
//
// =============================================================================
//

// Put all of your `function bar() {}` helper function definitions here.

/**
 * Randomizes both puck direction and speed.
 * Drop the puck.
 * @returns {void}
 */
function puckDrop() { // Called in table.js
  angle = (Math.floor(Math.random() * 50) + 155);
  // Randomized angle in degrees. Always shoots at Computer side.
  const side = (Math.floor(Math.random() * 2));
  // Randomize side to drop towards.
  angle += (180 * side);
  // If 1, shoots to Computer. If 2, shoots to Player.

  if (angle > 360) {
    angle -= 360;
  } // Fix for angle > 360 degrees.

  puckSpeed = (Math.floor(Math.random() * 5) + 3); // Randomized speed of puck.

  inPlay = true;
}

/**
 * Takes angle and speed to calculate X & Y coordinates.
 * @returns {void}
 */
function puckAngle() {
  const rads = (angle * Math.PI) / 180;
  xCoordinate = Math.cos(rads) * puckSpeed;
  yCoordinate = Math.sin(rads) * puckSpeed;
}

/**
 * Changes puck direction after side collisions.
 * @returns {void}
 */
function sideCollisionAngle() {
  angle = 180 - angle;
  if (angle < 0) {
    angle += 360;
  } else if (angle >= 360) {
    angle -= 360;
  }

  let randomizer = (Math.floor(Math.random() * 15) + 5);

  const positiveNegative = (Math.floor(Math.random() * 2) + 1);

  if (positiveNegative === 2) {
    randomizer *= -1;
  }

  angle += randomizer;

  puckDirection(angle); // Defined and used in computerAI.js
}

/**
 * Changes puck direction after top/bottom collisions.
 * @returns {void}
 */
function topBottomCollisionAngle() {
  angle *= -1;

  if (angle > 255 && angle <= 270) {
    angle -= 30;
  } else if (angle >= 271 && angle < 285) {
    angle += 30;
  }
}

/**
 * Detects collisions with walls, paddles, and scoring.
 * @param {int} puckX Puck's X Coordinate.
 * @param {int} puckY Puck's Y Coordinate.
 * @returns {void}
 */
function collisionDetect(puckX, puckY) {
  // Detect sides.
  if (puckX <= 15) { // Detect left side collisions
    if (puckY >= 110 && puckY <= 190) {
      playerScore += 1; // Defined in score.js
      score(); // Defined in score.js
    } else {
      sideCollisionAngle();
    }
  } else if (puckX >= 485) { // Detect right side collisions
    if (puckY >= 110 && puckY <= 190) {
      computerScore += 1; // Defined in score.js
      score(); // Defined in score.js
    } else {
      sideCollisionAngle();
    }
  } else if (puckY <= 15) { // Detect Top collisions
    topBottomCollisionAngle();
  } else if (puckY >= 285) { // Detect Bottom collisions
    topBottomCollisionAngle();
  }

  // Detect Player Paddle Front
  if (puckX >= playerLeftX && puckY >= playerTopY && puckY <= playerBottomY) {
    sideCollisionAngle();
  }

  // Detect Computer Paddle Front
  if (puckX <= (computerRightX + 8) && puckY >= (computerTopY + 8) && puckY <= (computerBottomY + 8)) {
    sideCollisionAngle();
  }
}
