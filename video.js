document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.card-video');

    videos.forEach(video => {
        // Add error handling
        video.addEventListener('error', (e) => {
            console.warn(`Video load error: ${e.message}`);
            // Optionally set a fallback background
            video.parentElement.style.backgroundColor = '#161616';
        });

        // Check if video exists before trying to play
        if (video.readyState > 0) {
            handleVideo(video);
        } else {
            video.addEventListener('loadedmetadata', () => handleVideo(video));
        }
    });

    function handleVideo(video) {
        try {
            const duration = video.duration || 10;
            const randomTime = Math.random() * duration;
            video.currentTime = randomTime;
            video.pause();
            video.playbackRate = 1;

            // Add loading state
            video.parentElement.addEventListener('mouseenter', async () => {
                try {
                    video.style.opacity = '1';
                    await video.play();
                } catch (err) {
                    console.warn('Video play failed:', err);
                }
            });

            video.parentElement.addEventListener('mouseleave', () => {
                video.style.opacity = '0.7';
                video.pause();
            });
        } catch (err) {
            console.warn('Video handling error:', err);
        }
    }
});