var background = document.getElementById("BgAudio");
var organ = document.getElementById("Organ");
var audioLevel = 0.0;
var muted = true;

// Audio Play & Pause
function playAudio(audioTrack) {
  background.volume = audioLevel;
  organ.volume = audioLevel;
  audioTrack.play(audioTrack);
}

function pauseAudio(audioTrack) {
  if (audioTrack.id === "Organ") {
    audioTrack.currentTime = 0;
  }

  audioTrack.pause(audioTrack);
}

var slider = document.getElementById("soundLevel");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  muted = false;
  audioLevel = this.value / 100;
};
