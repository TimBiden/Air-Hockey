// Draw rectangles
function rectangle(color, xPoint, yPoint, wide, high) {
    var hockeyCanvas = document.getElementById("hockey");
    var hockeyContext = hockeyCanvas.getContext("2d");
    hockeyContext.fillStyle = color;
    hockeyContext.fillRect(xPoint, yPoint, wide, high);
}

// draw puck
function puck(x, y) {
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
}

function render() {
    // Call functions
    // centerLine = new rectangle("#000000", 248, 0, 4, 300);
    // computerGoal = new rectangle("#3B14AF", 0, 110, 8, 80);
    // playerGoal = new rectangle("#3B14AF", 492, 110, 8, 80);
    player = new rectangle("#FF0700", 10, 125, 15, 50);
    computer = new rectangle("#00C90D", 475, 125, 15, 50);
    puck(100, 250);
}

window.onload = function() {
    render();
};
