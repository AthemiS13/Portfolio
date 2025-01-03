document.addEventListener('DOMContentLoaded', () => {
    console.log("script.js is connected!");

    // Smooth scrolling for 'Go Back to Top'
    document.querySelectorAll('a[href="#top"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Menu button functionality
    const menuIcon = document.querySelector('.menu-icon');
    const menuOverlay = document.getElementById('menu-overlay');
    const closeMenu = document.getElementById('close-menu');

    if (menuIcon && menuOverlay && closeMenu) {
        menuIcon.addEventListener('click', () => {
            console.log('Menu icon clicked');
            menuOverlay.style.display = 'flex';
            document.body.style.overflowY = 'hidden'; // Disable vertical scroll
        });

        closeMenu.addEventListener('click', (e) => {
            e.preventDefault();
            menuOverlay.style.display = 'none';
            document.body.style.overflowY = 'auto'; // Re-enable vertical scroll
        });
    }

    // Only run availability code on pages that have the elements
    if (document.getElementById('status-available') && document.getElementById('status-unavailable')) {
        function updateAvailabilityStatus() {
            const availableStatus = document.getElementById('status-available');
            const unavailableStatus = document.getElementById('status-unavailable');
            const currentHour = new Date().getHours();

            // Hide both initially
            availableStatus.style.visibility = 'hidden';
            unavailableStatus.style.visibility = 'hidden';

            // Wait for 500ms before showing status
            setTimeout(() => {
                if (currentHour >= 8 && currentHour < 23) {
                    availableStatus.style.visibility = 'visible';
                    availableStatus.classList.add('status-visible');
                } else {
                    unavailableStatus.style.visibility = 'visible';
                    unavailableStatus.classList.add('status-visible');
                }
            }, 500);
        }

        // Update availability status on page load
        updateAvailabilityStatus();
    }
});