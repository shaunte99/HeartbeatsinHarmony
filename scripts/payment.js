 // Smooth fade-in audio
window.addEventListener('DOMContentLoaded', () => {
    const audio = document.querySelector('audio');
    if (audio) {
      audio.volume = 0;
      const fadeAudioIn = setInterval(() => {
        if (audio.volume < 1) {
          audio.volume += 0.05;
        } else {
          clearInterval(fadeAudioIn);
        }
      }, 200);
  
      // Display song title under audio
      const songTitle = document.createElement('p');
      songTitle.textContent = '🎵 Now Playing: "Sinner"';
      songTitle.style.color = '#c89b62';
      songTitle.style.marginTop = '0.5rem';
      audio.after(songTitle);
    }
  });
  
  // Confirmation popup on form submission
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      setTimeout(() => {
        alert("🔥 Thanks! We'll be in touch soon.");
      }, 300);
    });
  }
  