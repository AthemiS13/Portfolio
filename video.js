document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.card-video');

    videos.forEach(video => {
        // Set a random frame for each video
        video.addEventListener('loadedmetadata', () => {
            const duration = video.duration || 10; // Default to 10 seconds if duration is not available
            const randomTime = Math.random() * duration;
            video.currentTime = randomTime;

            // Pause the video at the random frame
            video.pause();
        });

        // Set the playback rate to 0.6
        video.playbackRate = 1;

        // Play the video from the current frame on hover
        video.parentElement.addEventListener('mouseenter', () => {
            video.style.opacity = '1'; // Ensure the video is fully visible
            video.play();
        });

        // Pause the video when the mouse leaves the card
        video.parentElement.addEventListener('mouseleave', () => {
            video.style.opacity = '0.7'; // Fade out the video but keep it visible
            video.pause();
        });
    });
});