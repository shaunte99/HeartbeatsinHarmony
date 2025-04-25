 // Smooth fade-in audio
window.addEventListener('DOMContentLoaded', () => {
    const audio = document.querySelector('audio');
    audio.volume = 0;
    const fadeAudioIn = setInterval(() => {
      if (audio.volume < 1) {
        audio.volume += 0.05;
      } else {
        clearInterval(fadeAudioIn);
      }
    }, 200);
  });
  
  // Confirmation popup on form submission
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    setTimeout(() => {
      alert("🔥 Thanks for preordering! We’ll be in touch with more fire soon.");
    }, 300); // Slight delay after submitting
  });
  
  // Display song title under audio
  const songTitle = document.createElement('p');
  songTitle.textContent = '🎵 Now Playing: "Sinner"';
  songTitle.style.color = '#c89b62';
  songTitle.style.marginTop = '0.5rem';
  document.querySelector('audio').after(songTitle);
  