var numPlayers = 1;

// Play against the computer
function players1() {
  numPlayers = 1;
  showScore();
  console.log("1 Player");

  document.getElementById("1-Player").classList.add("btn-primary");
  document.getElementById("1-Player").classList.remove("btn-secondary");
  document.getElementById("2-Player").classList.add("btn-secondary");
  document.getElementById("2-Player").classList.remove("btn-primary");
}

// Play against another person
function players2() {
  numPlayers = 2;
  showScore();
  console.log("2 Players");

  document.getElementById("1-Player").classList.remove("btn-primary");
  document.getElementById("1-Player").classList.add("btn-secondary");
  document.getElementById("2-Player").classList.remove("btn-secondary");
  document.getElementById("2-Player").classList.add("btn-primary");
}
