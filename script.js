console.log("idk.js is connected!");

// Example functionality for the contact button
document.querySelector('.contact-btn').addEventListener('click', () => {
    alert('Contact feature coming soon!');
});

// Smooth scrolling for 'Go Back to Top'
document.querySelectorAll('a[href="#top"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
