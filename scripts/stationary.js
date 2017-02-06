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
