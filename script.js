let playing = false;

function toggleMusic() {
  const music = document.getElementById("bg-music");
  if (!playing) {
    music.play();
  } else {
    music.pause();
  }
  playing = !playing;
}
