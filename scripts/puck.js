// =============================================================================
//
//   Variable Definitions and Initialization
//
// =============================================================================
//

const hockeyPuck = new Puck(); // Used in table.js
let inPlay = false; // Sets ability to puckDrop
let puckSpeed = 0; // Set initial speed of puck before puckDrop
let xCoordinate = 0;
let yCoordinate = 0;
let passX = 0;
let passY = 0;
let angle = 0;
let puckYValue = 0;
const buffer = 15;
const playerLeftX = 460; // Player Paddle coordinates
const computerRightX = 25; // Player Paddle coordinates

// =============================================================================
//
//   Object Constructor Definitions
//
// =============================================================================
//

// Puck values
function Puck() {
  this.radius = 8;
  this.startAngle = 0 * Math.PI;
  this.endAngle = 2 * Math.PI;
  this.counterClockwise = false;
  this.speed = 0;
}

// Render Puck prototype
// Check if game is in play. If it is, puck to center ice.
// Otherwise, puck is at location dictated by speed and direction.
Puck.prototype.render = function(x, y) {
  if (inPlay) {
    puckAngle();
    this.x += xCoordinate;
    this.y += yCoordinate;
    passX = this.x;
    passY = this.y;
    pauseAudio(organ);
    playAudio(background);
  } else {
    this.x = 250;
    this.y = 150;
    if (!muted) {
      pauseAudio(background);
      playAudio(organ);
    }
  }

  puckYValue = this.y;

  context.strokeStyle = "black";
  context.beginPath();
  context.arc(
    this.x,
    this.y,
    this.radius,
    this.startAngle,
    this.endAngle,
    this.counterClockwise
  );
  context.lineWidth = 15;
  context.stroke();
};

// Make the puck move.
Puck.prototype.update = function() {
  this.x += xCoordinate; // To move puck
  this.y += yCoordinate; // To move puck

  if (this.x > 485) {
    // Eliminate quiver action.
    this.x = 485;
  }
  if (this.x < buffer) {
    this.x = buffer;
  }
  if (this.y > 285) {
    // Eliminate quiver action.
    this.y = 285;
  }
  if (this.y < buffer) {
    this.y = buffer;
  }

  collisionDetect(this.x, this.y);
};

// =============================================================================
//
//   Helper Function Definitions
//
// =============================================================================
//

// Randomizes both puck direction and speed.
// Drop the puck.
function puckDrop() {
  // Called in table.js
  if (gameOver === false) {
    angle = Math.floor(Math.random() * 50) + 155;
    // Randomized angle in degrees. Always shoots at Computer side.
    const side = Math.floor(Math.random() * 2);
    // Randomize side to drop towards.
    angle += 180 * side;
    // If 1, shoots to Computer. If 2, shoots to Player.

    if (angle > 360) {
      angle -= 360;
    } // Fix for angle > 360 degrees.

    // angle = 320; // Delete after testing.

    puckSpeed = Math.floor(Math.random() * 3) + 3; // Randomized speed of puck.

    // puckSpeed = 2; // Delete after testing.

    inPlay = true;
  }
}

// Takes angle and speed to calculate X & Y coordinates.
function puckAngle() {
  const rads = (angle * Math.PI) / 180;
  xCoordinate = Math.cos(rads) * puckSpeed;
  yCoordinate = Math.sin(rads) * puckSpeed;
}
