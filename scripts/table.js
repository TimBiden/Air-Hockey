// Create the paddles...
function Paddle(x, y, color) {
    // Values
    this.x = x;
    this.y = y;
    this.color = color;
    this.height = 50;
    this.width = 15;
}

Paddle.prototype.render = function(x, y, color) {
    // Make Paddles
    var hockeyCanvas = document.getElementById("hockey");
    var hockeyContext = hockeyCanvas.getContext("2d");
    hockeyContext.fillStyle = color;
    hockeyContext.fillRect(this.x, this.y, this.width, this.height);
};

var player = new Player();
var computer = new Computer();

function Player() {
    this.paddle = new Paddle(10, 125, "#FF0700");
}

function Computer() {
    this.paddle = new Paddle(475, 125, "#00C90D");
}

Player.prototype.render = function() {
    this.paddle.render();
};

Computer.prototype.render = function() {
    this.paddle.render();
};

// Create Center Line
function centerLine(color, xPoint, yPoint, wide, high) {
    var hockeyCanvas = document.getElementById("hockey");
    var hockeyContext = hockeyCanvas.getContext("2d");
    hockeyContext.fillStyle = "black";
    hockeyContext.fillRect(248, 0, 4, 300);
}

// Create Goals
function Goal(xPoint) {
    var hockeyCanvas = document.getElementById("hockey");
    var hockeyContext = hockeyCanvas.getContext("2d");
    hockeyContext.fillStyle = "#3B14AF";
    hockeyContext.fillRect(xPoint, 110, 8, 80);
}

var Puck = function(x, y) {
    // variables
    var canvas = document.getElementById('hockey');
    var context = canvas.getContext('2d');
    var radius = 8;
    var startAngle = 0 * Math.PI;
    var endAngle = 2 * Math.PI;
    var counterClockwise = false;

    // Call it all
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.lineWidth = 15;

    // line color
    context.strokeStyle = 'black';
    context.stroke();
};

var render = function() {
    player.render();
    computer.render();
    centerLine();
    computerGoal = new Goal(0);
    playerGoal = new Goal(492);
    Puck(250, 150);
}

window.onload = function() {
    render();
};
