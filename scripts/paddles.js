// =============================================================================
//
//   Variable Definitions and Initialization
//
// =============================================================================
//

// Put all of your `var foo = bar;` setup here.

const player = new Player(); // Used in table.js
const computer = new Computer(); // Used in table.js
let movement = 0; // Move paddles by speed * movement
let playerTopY = 0;
let playerBottomY = 0;
let computerTopY = 125;
let computerBottomY = 175;

// =============================================================================
//
//   Object Constructor Definitions
//
// =============================================================================
//

// Put all of your `function Foo() {}` object constructor and prototype method
// definitions here.

/**
 * Configures variables for Paddles.
 * @param {int} x X Coordinate.
 * @param {int} y Y Coordinate.
 * @param {string} color sets the color of the paddle.
 * @returns {void}
 */
function Paddle(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.height = 50;
  this.width = 15;
  this.speed = 15;
}

/**
 * Render Paddle prototype
 * @param {int} x X Coordinate.
 * @param {int} y Y Coordinate.
 * @param {string} color sets the color of the paddle.
 * @returns {void}
 */
Paddle.prototype.render = function(x, y, color) {
  context.fillStyle = color;
  context.fillRect(this.x, this.y, this.width, this.height);
};

/**
 * Create Player function
 * @returns {void}
 */
function Player() {
  this.paddle = new Paddle(475, y, '#00C90D');
}

/**
 * Render Player prototype
 * @param {int} x X Coordinate.
 * @param {int} y Y Coordinate.
 * @param {string} color Sets color for Player.
 * @returns {void}
 */
Player.prototype.render = function(x, y, color) {
  this.paddle.render(x, y, color);
};

/**
 * Create Computer function
 * @returns {void}
 */
function Computer() {
  if (inPlay === false) {
    y = 125;
  } else {
    y = computerYValue;
  }
  this.paddle = new Paddle(10, y, '#FF0700');
}

/**
 * Render Computer prototype
 * @param {int} x X Coordinate.
 * @param {int} y Y Coordinate.
 * @param {string} color Sets color for Computer.
 * @returns {void}
 */
Computer.prototype.render = function(x, y, color) {
  this.paddle.render(x, y, color);

  // computerTopY = this.paddle.y - 8; // Buffer for puck.
  computerBottomY = computerTopY + 64; // Buffer for puck.
};

// Make Player move
Player.prototype.update = function() {
  this.paddle.y += movement * this.paddle.speed;
  movement = 0;

  if (this.paddle.y < 0) {
    this.paddle.y = 0;
  } else if (this.paddle.y > 250) {
    this.paddle.y = 250;
  }

  playerTopY = this.paddle.y - 8; // Buffer for puck.
  playerBottomY = playerTopY + 64; // Buffer for puck.
};

function changeComputerY(computerYValue) {
  computerTopY = computerYValue;
}

// Make Computer move
Computer.prototype.update = function updateTheComputerPaddle() {
  if (toBlock && blockDirection) {
    blockThePuck();
  } else {

  }
  this.paddle.y = computerTopY;

  if (this.paddle.y < 0) {
    this.paddle.y = 0;
  } else if (this.paddle.y > 250) {
    this.paddle.y = 250;
  }

  // playerTopY = this.paddle.y - 8; // Buffer for puck.
  // playerBottomY = playerTopY + 64; // Buffer for puck.
};

// =============================================================================
//
//   Helper Function Definitions
//
// =============================================================================
//

// Put all of your `function bar() {}` helper function definitions here.
