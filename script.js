function toggleMusic() {
    const music = document.getElementById('bg-music');
    const playBtn = document.getElementById('play-btn');
    if (music.paused) {
      music.play().catch(() => {});
      playBtn.textContent = '⏸️';
    } else {
      music.pause();
      playBtn.textContent = '▶️';
    }
  }
 
  function adjustVolume() {
    document.getElementById('bg-music').volume = document.getElementById('volume-slider').value;
  }
 
  function toggleWelcomeVibe() {
    document.querySelector('.welcome-gif-btn').classList.toggle('is-on');
  }
 
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = (i * 0.06) + 's';
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
 
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
