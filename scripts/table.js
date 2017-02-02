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
  this.paddle.render(x, y, color);
};

/**
 * Puck values
 * @param {int} x X Coordinate.
 * @param {int} y Y Coordinate.
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
  context.strokeStyle = 'black';
  context.beginPath();
  context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.counterClockwise);
  context.lineWidth = 15;
  context.stroke();

  if (inPlay === true) {
    puckAngle();
    this.x += xCoordinate;
    this.y += yCoordinate;
    console.log('In Play!');
  } else {
    this.x = 250;
    this.y = 150;
  }
};

/**
 * Create Goal functions
 * @param {int} xPoint X Coordinate.
 * @returns {void}
 */
function Goal(xPoint) {
  context.fillStyle = '#3B14AF';
  context.fillRect(xPoint, 110, 8, 80);
}

/**
 * Create Center Line
 * @returns {void}
 */
function CenterLine() {
  context.fillStyle = 'black';
  context.fillRect(248, 0, 4, 300);
}

// =============================================================================
//
//   Helper Function Definitions
//
// =============================================================================
//

// Put all of your `function bar() {}` helper function definitions here.


// Make Player paddle update
function update() {
  player.update();
  hockeyPuck.update();
}

// Render created items
function render() {
  player.render(475, this.y, '#00C90D');
  computer.render(10, this.y, '#FF0700');
  CenterLine();
  computerGoal = new Goal(0);
  playerGoal = new Goal(492);
  hockeyPuck.render();
}

// Call render to refresh
function step() {
  context.clearRect(0, 0, 500, 300);
  update();
  render();
  animate(step);
}

// Select animation method
var animate = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  // Otherwise set refresh rate to every 16.667 ms
  function(step) {
    window.setTimeout(step, 1000 / 60);
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
};

/**
 * Make the puck move.
 * @returns {void}
 */
Puck.prototype.update = function() {
  this.x += xCoordinate;
  this.y += yCoordinate;

  console.log(' ');
  console.log(`Puck x coordinate = ${this.x}`);
  console.log(`Puck y coordinate = ${this.y}`);
};

/**
 * Randomizes both puck direction and speed.
 * Drop the puck.
 * @returns {void}
 */
function puckDrop() {
  angle = (Math.floor(Math.random() * 50) + 155); // Randomized angle in degrees. Always shoots at Computer side.
  let side = (Math.floor(Math.random() * 2)); // Randomize side to drop towards.
  // angle += (180 * side); // If 1, shoots to Computer. If 2, shoots to Player.

  if (angle > 360) {
    angle -= 360;
  } // Fix for angle > 360 degrees.

  puckSpeed = (Math.floor(Math.random() * 5) + 3); // Randomized speed of puck.

  inPlay = true;

  console.log(' ');
  console.log('side is ' + side);
  console.log('Angle is ' + angle);
  console.log('Puck speed is ' + puckSpeed);
}

function puckAngle() {
  const rads = angle * Math.PI / 180;
  xCoordinate = Math.cos(rads) * puckSpeed;
  yCoordinate = Math.sin(rads) * puckSpeed;
}

// =============================================================================
//
//   Variable Definitions and Initialization
//
// =============================================================================
//

// Put all of your `var foo = bar;` setup here.

// Allow drawing on canvas
const hockeyCanvas = document.getElementById('hockey');
const context = hockeyCanvas.getContext('2d');

// General variables
const y = 125; // Paddle height begin
let movement = 0; // Move paddles by speed * movement
let inPlay = false; // Sets ability to puckDrop
let puckSpeed = 0; // Set initial speed of puck before puckDrop
let xCoordinate = 0;
let yCoordinate = 0;
let angle = 0;

// New object instances
const player = new Player();
const computer = new Computer();
const hockeyPuck = new Puck();

// =============================================================================
//
//   Application Code
//
// =============================================================================
//

// Put all of your application code here (such as your `window.onload` event
// bindings).

// Listen for arrow-keys to be released.
window.addEventListener('keydown', function(event) {
  if (event.keyCode === 38 || event.keyCode === 39) {
    movement = -1;
  } else if (event.keyCode === 37 || event.keyCode === 40) {
    movement = 1;
  } else if (event.keyCode === 32) {
    if (inPlay === true) {
      console.log('Game is in play. No cheating, fool!');
    } else {
      puckDrop();
      console.log('Center Ice. Puck Drop!!!');
    }
  } else {
    movement = 0;
  }
});

// Original loading of the screen
window.onload = function() {
  animate(step);
};
