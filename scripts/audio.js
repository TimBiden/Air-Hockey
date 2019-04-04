var background = document.getElementById("BgAudio");
var organ = document.getElementById("Organ");
var audioLevel = 0.0;

// Audio Play & Pause
function playAudio(audioTrack) {
  audioTrack.play(audioTrack);
}

function pauseAudio(audioTrack) {
  audioTrack.pause(audioTrack);
}

var slider = document.getElementById("soundLevel");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  audioLevel = this.value / 100;
  console.log("soundLevel = " + audioLevel);
};

background.volume = audioLevel;
organ.volume = audioLevel;
