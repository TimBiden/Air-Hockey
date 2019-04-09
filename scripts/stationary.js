// Create Goal functions
function Goal(xPoint) {
  context.fillStyle = "#3B14AF";
  context.fillRect(xPoint, 110, 8, 80);
}

// Create Center Line
function CenterLine() {
  context.fillStyle = "red";
  context.fillRect(248, 0, 4, 300);
}

// Create Left Line
function LeftLine() {
  context.fillStyle = "blue";
  context.fillRect(160, 0, 4, 300);
}

// Create Line Line
function RightLine() {
  context.fillStyle = "blue";
  context.fillRect(328, 0, 4, 300);
}

// Create Line Line
function CenterCircle() {
  context.beginPath();
  context.lineWidth = 5;
  context.arc(250, 150, 40, 0, 2 * Math.PI);
  context.strokeStyle = "blue";
  context.stroke();
}
