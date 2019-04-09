// Invert angles upon collisionDetect
function invertAngle() {
  angle = 180 - angle;
  if (angle < 0) {
    angle += 360;
  } else if (angle >= 360) {
    angle -= 360;
  }
}

// Randomize angles
function randomizeAngle() {
  let randomizer = Math.floor(Math.random() * 10) + 5;
  // console.log(randomizer);

  const positiveNegative = Math.floor(Math.random() * 2) + 1;

  if (positiveNegative === 2) {
    randomizer *= -1;
  }

  angle += randomizer;
}

function angleIn360() {
  if (angle < 0) {
    angle = 1;
  } else if (angle > 360) {
    angle = 359;
  }
}

// Changes puck direction after side collisions.
function sideCollisionAngle(puckX, puckY) {
  if (puckX > 485) {
    puckX = 483;
  } else if (puckX > 454) {
    puckX = 452;
  }

  if (puckX < 15) {
    puckX = 17;
  } else if (puckX < 25) {
    puckX = 27;
  }

  invertAngle();
  randomizeAngle();
  angleIn360();
  runOncePerSideCollision();
}

// Changes puck direction after side collisions.
function paddleCollisionAngle(puckX, puckY) {
  if (puckX > 460) {
    puckX = 458;
  }

  if (puckX < 25) {
    puckX = 27;
  }

  invertAngle();
  randomizeAngle();
  angleIn360();
  runOncePerSideCollision();
}

// Changes puck direction after top/bottom collisions.
function topBottomCollisionAngle(puckX, puckY) {
  angle *= -1;

  if (angle < 0) {
    angle += 360;
  }

  if (angle > 255 && angle <= 270) {
    angle -= 30;
  } else if (angle >= 271 && angle < 285) {
    angle += 30;
  }

  angleIn360();

  if (puckX > 485) {
    puckX = 483;
  }

  if (puckX < 15) {
    puckX = 18;
  }
}

// Detects collisions with walls, paddles, and scoring.
function collisionDetect(puckX, puckY) {
  // Detect sides.
  if (puckX <= buffer) {
    // Detect left side collisions
    if (puckY >= 110 && puckY <= 190) {
      playerScore += 1; // Defined in score.js
      score(); // Defined in score.js
    } else {
      sideCollisionAngle(puckX, puckY);
    }
  } else if (puckX >= 485) {
    // Detect right side collisions
    if (puckY >= 110 && puckY <= 190) {
      computerScore += 1; // Defined in score.js
      score(); // Defined in score.js
    } else {
      sideCollisionAngle(puckX, puckY);
    }
  }

  // Detect Player Paddle Front
  if (puckX >= playerLeftX && puckY >= playerTopY && puckY <= playerBottomY) {
    paddleCollisionAngle(puckX, puckY);
  }

  // Detect Computer Paddle Front
  if (
    puckX <= 40 &&
    puckY >= computerTopY - buffer &&
    puckY <= computerBottomY + buffer
  ) {
    paddleCollisionAngle(puckX, puckY);
  }

  // Detect top & bottom collisions
  if (puckY <= buffer) {
    // Detect Top collisions
    topBottomCollisionAngle();
  } else if (puckY >= 300 - buffer) {
    // Detect Bottom collisions
    topBottomCollisionAngle();
  }

  // Detect player paddle bottom puck collisions
  if (angle > 180 && angle < 360) {
    if (
      puckX >= 460 &&
      puckY <= playerBottomY + buffer &&
      puckY >= playerBottomY
    ) {
      topBottomCollisionAngle(puckX, puckY);
    }
  }

  // Detect player paddle top puck collisions
  if (angle > 0 && angle < 180) {
    if (puckX >= 460 && puckY >= playerTopY - buffer && puckY <= playerTopY) {
      topBottomCollisionAngle(puckX, puckY);
    }
  }

  // Detect Computer paddle bottom puck collisions
  if (angle > 180 && angle < 360) {
    if (
      puckX <= 40 &&
      puckY <= computerBottomY + buffer &&
      puckY >= computerBottomY
    ) {
      topBottomCollisionAngle(puckX, puckY);
    }
  }

  // Detect Computer paddle top puck collisions
  if (angle > 0 && angle < 180) {
    if (
      puckX <= 40 &&
      puckY >= computerTopY - buffer &&
      puckY <= computerTopY
    ) {
      topBottomCollisionAngle(puckX, puckY);
    }
  }
}
