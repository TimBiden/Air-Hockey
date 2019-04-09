// Make Player paddle update
function update() {
  player.update();
  computer.update();
  hockeyPuck.update();
}

// Render created items
function render() {
  player.render(475, this.y, "#00C90D");
  computer.render(10, this.y, "#FF0700");
  CenterLine();
  LeftLine();
  RightLine();
  CenterCircle();
  computerGoal = new Goal(0);
  playerGoal = new Goal(492);
  hockeyPuck.render();
  showScore();
}

// Call render to refresh
function step() {
  context.clearRect(0, 0, 500, 300);
  update();
  render();
  animate(step);
}

// Select animation method
var animate =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  // Otherwise set refresh rate to every 16.667 ms
  function(step) {
    window.setTimeout(step, 1000 / 60);
  };

// =============================================================================
//
//   Variable Definitions and Initialization
//
// =============================================================================
//

// Put all of your `var foo = bar;` setup here.

// Allow drawing on canvas
const hockeyCanvas = document.getElementById("hockey");
const context = hockeyCanvas.getContext("2d");

// General variables
let y = 125; // Paddle height begin

// New object instances

// =============================================================================
//
//   Application Code
//
// =============================================================================
//

// Put all of your application code here (such as your `window.onload` event
// bindings).

// Listen for arrow-keys to be released.
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 38 || event.keyCode === 39) {
    movement = -1;
  } else if (event.keyCode === 37 || event.keyCode === 40) {
    movement = 1;
  } else if (event.keyCode === 32) {
    if (inPlay !== true) {
      puckDrop();
    }
  } else {
    movement = 0;
  }
});

// Original loading of the screen
window.onload = function() {
  animate(step);
};
