// Create the paddles...
var Paddle = function() {
    this.x = 0;
    this.y = 120;
};

Paddle.prototype.render = function() {
    // What in the world goes here?
};

var player = new Paddle();
var computer = new Paddle();

// Create Center Line
function centerLine(color, xPoint, yPoint, wide, high) {
    var hockeyCanvas = document.getElementById("hockey");
    var hockeyContext = hockeyCanvas.getContext("2d");
    hockeyContext.fillStyle = "black";
    hockeyContext.fillRect(248, 0, 4, 300);
}

centerLine();

// Create Goals
function Goal(xPoint) {
    var hockeyCanvas = document.getElementById("hockey");
    var hockeyContext = hockeyCanvas.getContext("2d");
    hockeyContext.fillStyle = "#3B14AF";
    hockeyContext.fillRect(xPoint, 110, 8, 80);
}

computerGoal = new Goal(0);
playerGoal = new Goal(492);

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

Puck(250, 150);
