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
let computerTopY = 125;
let playerMovement = 0;

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
  y = 125;
  this.paddle.render(x, y, color);

  computerTopY = this.paddle.y;
  computerBottomY = computerTopY + 50;
};

// Make Player move
Player.prototype.update = function() {
  playerMovement += (movement * this.paddle.speed);
  movement = 0;

  const y = this.paddle.y;
  this.paddle.y = movePlayerPaddle(y);

  if (this.paddle.y < 0) {
    this.paddle.y = 0;
  } else if (this.paddle.y > 250) {
    this.paddle.y = 250;
  }

  playerTopY = this.paddle.y; // Buffer for puck.
  playerBottomY = playerTopY + 50; // Buffer for puck.
};

// Make Computer move
Computer.prototype.update = function updateTheComputerPaddle() {
  if (!inPlay) {
    variant = -25;
  }

  this.paddle.y = newYValue();

  this.paddle.y = computerBoundary();
};

// =============================================================================
//
//   Helper Function Definitions
//
// =============================================================================
//

// Put all of your `function bar() {}` helper function definitions here.

let newYValue = function preventCornerMashUps() {
  // Prevent paddle from repeatedly smashing puck when in corners.

  let paddleBuffer = 40; // How much buffer to give puck

  if (inPlay) { // Don't activate if the puck isn't in play.
    if (passX < 40) { // Don't activate if the puck isn't past the paddle.
      if (passY < 20 || passY > 280) { // Is the puck either at the top or bottom corner?
        // playerMovement = 0; // Stop paddle from moving
        if (computerTopY < 33) {
          // Paddle is too high. Give the puck some buffer space.
          computerTopY = paddleBuffer;
        } else if (computerTopY > 215) {
          // Paddle is too low. Give the puck some buffer space.
          computerTopY -= paddleBuffer;
        }
      }
    } else {
      // If not in the corners, act normally.
      computerTopY = puckYValue + variant;
    }
  }
  return computerTopY;
};

let computerBoundary = function dontPassZero() {
  // Prevent paddles from going outside bounds of playing surface.
  if (computerTopY < 0) {
    computerTopY = 0;
  } else if (computerTopY > 250) {
    computerTopY = 250;
  }
  return computerTopY;
};

let movePlayerPaddle = function playerMovementFunction(y) {
  if (playerMovement > 2) {
    y += 3;
    playerMovement -= 3;
  } else if (playerMovement < -2) {
    y -= 3;
    playerMovement += 3;
  } else if (y > 250) {
    playerMovement = 0;
  } else if (y < 50) {
    playerMovement = 0;
  }
  return y;
}
