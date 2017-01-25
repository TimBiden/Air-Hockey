// Allow drawing on canvas
var hockeyCanvas = document.getElementById("hockey");
var hockeyContext = hockeyCanvas.getContext("2d");
var movement = 0;
y = 125; // Paddle height begin
var player = new Player();
var computer = new Computer();

// Paddle values
function Paddle(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.height = 50;
    this.width = 15;
    this.speed = 15;
}

// Paddle prototypes //
// Render prototype
Paddle.prototype.render = function(x, y, color) {
    hockeyContext.fillStyle = color;
    hockeyContext.fillRect(this.x, this.y, this.width, this.height);
};

// Create Paddle functions for Player and Computer
function Player() {
    this.paddle = new Paddle(475, y, "#00C90D");
}

function Computer() {
    this.paddle = new Paddle(10, y, "#FF0700");
}

// Render prototypes of Player and Computer
Player.prototype.render = function(x, y, color) {
    this.paddle.render(x, y, color);
};

Computer.prototype.render = function(x, y, color) {
    this.paddle.render(x, y, color);
};

// Listen for arrow-keys to be released.
window.addEventListener("keydown", function(event) {
    if (event.keyCode === 38 || event.keyCode === 39) {
        movement = -1;
        console.log("Up.");
    } else if (event.keyCode === 37 || event.keyCode === 40) {
        movement = 1;
        console.log("Down.");
    } else {
        movement = 0;
        console.log("No movement.");
    }
});

// Make Player move
Player.prototype.update = function() {
    this.paddle.y += movement * this.paddle.speed;
    movement = 0;

    if (this.paddle.y < 0){
        this.paddle.y = 0
    } else if (this.paddle.y > 250) {
        this.paddle.y = 250
    }
};

// Make update
function update() {
    player.update(this.y);
}

// Puck values
function Puck(x, y) {
    // Puck values
    this.radius = 8;
    this.startAngle = 0 * Math.PI;
    this.endAngle = 2 * Math.PI;
    this.counterClockwise = false;
}

// Puck prototype
Puck.prototype.render = function(x, y) {
    hockeyContext.strokeStyle = "black";
    hockeyContext.beginPath();
    hockeyContext.arc(x, y, this.radius, this.startAngle, this.endAngle, this.counterClockwise);
    hockeyContext.lineWidth = 15;
    hockeyContext.stroke();
};

var puck = new Puck();

// Create non-moving parts //
//
// Create Center Line
function centerLine() {
    hockeyContext.fillStyle = "black";
    hockeyContext.fillRect(248, 0, 4, 300);
}

// Create Goals
function Goal(xPoint) {
    hockeyContext.fillStyle = "#3B14AF";
    hockeyContext.fillRect(xPoint, 110, 8, 80);
}

// Render created items
var render = function() {
    player.render(475, this.y, "#00C90D");
    computer.render(10, this.y, "#FF0700");
    centerLine();
    computerGoal = new Goal(0);
    playerGoal = new Goal(492);
    puck.render(250, 150);
};

// Original loading of the screen
window.onload = function() {
    animate(step);
};

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

// Call render to refresh
var step = function() {
    hockeyContext.clearRect(0, 0, 500, 300);
    update();
    render();
    animate(step);
};
