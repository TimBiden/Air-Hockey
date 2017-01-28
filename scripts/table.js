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
  hockeyContext.fillStyle = color;
  hockeyContext.fillRect(this.x, this.y, this.width, this.height);
};

// Create Player and Computer functions
// Render prototypes of Player and Computer
/**
 * Create Player function
 * @returns {void}
 */
function Player() {
  this.paddle = new Paddle(475, y, '#00C90D');
}

Player.prototype.render = function(x, y, color) {
  this.paddle.render(x, y, color);
};

function Computer() {
  this.paddle = new Paddle(10, y, '#FF0700');
}

Computer.prototype.render = function(x, y, color) {
  this.paddle.render(x, y, color);
};

/**
 * Puck values
 * @returns {void}
 */
function Puck() {
  // Puck values
  this.radius = 8;
  this.startAngle = 0 * Math.PI;
  this.endAngle = 2 * Math.PI;
  this.counterClockwise = false;
  this.speed = 25;
}

// Puck prototype
Puck.prototype.render = function(x, y) {
  hockeyContext.strokeStyle = 'black';
  hockeyContext.beginPath();
  hockeyContext.arc(x, y, this.radius, this.startAngle, this.endAngle, this.counterClockwise);
  hockeyContext.lineWidth = 15;
  hockeyContext.stroke();
};

// Create Goals
function Goal(xPoint) {
  hockeyContext.fillStyle = '#3B14AF';
  hockeyContext.fillRect(xPoint, 110, 8, 80);
}

// Create Center Line
function CenterLine() {
  hockeyContext.fillStyle = 'black';
  hockeyContext.fillRect(248, 0, 4, 300);
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
}

// Render created items
function render() {
  player.render(475, this.y, '#00C90D');
  computer.render(10, this.y, '#FF0700');
  CenterLine();
  computerGoal = new Goal(0);
  playerGoal = new Goal(492);
  puck.render(250, 150);
}

// Call render to refresh
function step() {
  hockeyContext.clearRect(0, 0, 500, 300);
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
Puck.prototype.move = function puckMove() {};

// Left off here. Creating puckDrop.

/**
 * Randomizes both puck direction and speed.
 * Drop the puck.
 * @returns {void}
 */
function puckDrop() {
  const angle = (Math.floor(Math.random() * 120) + 120); // Randomized angle in degrees
  const angleRad = angle * (Math.PI / 180); // angle in radians
  this.x = ((this.x + this.speed) * Math.cos(angleRad));
  this.y = ((this.y + this.speed) * Math.sin(angleRad));

  const speed = (Math.floor(Math.random() * 15) + 10); // Randomized speed of puck.

  inPlay = true;

  console.log(' ');
  console.log('Angle is ' + angle);
  console.log('Puck speed is ' + speed);
}

// =============================================================================
//
//   Variable Definitions and Initialization
//
// =============================================================================
//

// Put all of your `var foo = bar;` setup here.

// Allow drawing on canvas
let hockeyCanvas = document.getElementById('hockey');
let hockeyContext = hockeyCanvas.getContext('2d');

// General variables
let movement = 0;
let y = 125; // Paddle height begin
let inPlay = false;

// New object instances
const player = new Player();
const computer = new Computer();
const puck = new Puck();

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
      console.log(' ');
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
