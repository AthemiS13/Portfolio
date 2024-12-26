document.addEventListener('DOMContentLoaded', () => {
    console.log("idk.js is connected!");

    // Example functionality for the contact button
    document.querySelector('.contact-btn').addEventListener('click', () => {
        window.location.href = 'contact.html';
    });

    // Smooth scrolling for 'Go Back to Top'
    document.querySelectorAll('a[href="#top"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Menu button functionality
    document.querySelector('.menu-icon').addEventListener('click', () => {
        document.getElementById('menu-overlay').style.display = 'flex';
    });

    document.getElementById('close-menu').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('menu-overlay').style.display = 'none';
    });

    // Availability status functionality
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
});