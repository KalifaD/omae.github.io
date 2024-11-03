// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Accordion functionality for expandable sections
document.querySelectorAll('.accordion > p:first-child').forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        const content = toggle.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
