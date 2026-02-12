let playing = false;

function toggleMusic() {
  const music = document.getElementById("bg-music");
  const playBtn = document.getElementById("play-btn");
  if (!playing) {
    music.play();
    playBtn.textContent = "⏸️";
  } else {
    music.pause();
    playBtn.textContent = "▶️";
  }
  playing = !playing;
}

function adjustVolume() {
  const music = document.getElementById("bg-music");
  const volumeSlider = document.getElementById("volume-slider");
  music.volume = volumeSlider.value;
}
