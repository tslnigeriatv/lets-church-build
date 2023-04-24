module.exports = async function() {
    TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());
    TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());
    TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.stop());
    TrackPlayer.addEventListener('remote-seek', (event) => {
      if (event.position) {
        TrackPlayer.seekTo(event.position);
      }
    });
  
    // Add more event listeners and custom logic here as needed
  
    return Promise.resolve();
  };
  