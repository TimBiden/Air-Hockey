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
  this.paddle = new Paddle(475, y, "#00C90D");
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
  this.paddle = new Paddle(10, y, "#FF0700");
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
  playerMovement += movement * this.paddle.speed;
  movement = 0;

  let paddleBuffer = 0;
  if ((passX < 15 && passY < 20) || (passY > 15 && passY > 280)) {
    paddleBuffer = 35;
    if (this.paddle.y < 33) {
      this.paddle.y = paddleBuffer;
    }
  }

  if (playerMovement > 2) {
    this.paddle.y += 3;
    playerMovement -= 3;
  } else if (playerMovement < -2) {
    this.paddle.y -= 3;
    playerMovement += 3;
  } else if (this.paddle.y > 250 - paddleBuffer) {
    playerMovement = 0;
  } else if (this.paddle.y < 50 + paddleBuffer) {
    playerMovement = 0;
  }

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
  let paddleBuffer = 40;

  if (!inPlay) {
    variant = -25;
  }

  if (inPlay) {
    if (passX < 40) {
      if (passY < 20 || passY > 280) {
        // console.log(' ');
        // console.log(`this.paddle.y = ${this.paddle.y}`);
        playerMovement = 0;
        // console.log('Enemy territory');
        // console.log(`passX = ${passX}`);
        // console.log(`passY = ${passY}`);
        // console.log(`this.paddle.y = ${this.paddle.y}`);
        if (this.paddle.y < 33) {
          this.paddle.y = paddleBuffer;
        } else if (this.paddle.y > 215) {
          this.paddle.y -= paddleBuffer;
        }
      }
    } else {
      this.paddle.y = puckYValue + variant;
    }
    // console.log(`this.paddle.y = ${this.paddle.y}`);
  }

  if (this.paddle.y < 0) {
    this.paddle.y = 0;
  } else if (this.paddle.y > 250) {
    this.paddle.y = 250;
  }
  // console.log(`this.paddle.y = ${this.paddle.y}`);
};

// =============================================================================
//
//   Helper Function Definitions
//
// =============================================================================
//

// Put all of your `function bar() {}` helper function definitions here.
