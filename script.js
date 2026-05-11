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

// Simple interactivity for the welcome photo placeholder
function toggleWelcomeVibe() {
  const btn = document.querySelector('.about-welcome-photo');
  if (!btn) return;

  const isOn = btn.classList.toggle('is-on');
  btn.textContent = isOn ? '✨ Welcome!' : 'Welcome Photo';
}

