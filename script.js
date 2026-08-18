// Initialize Animations
AOS.init({ duration: 1200, once: true });

// Typing Animation
new Typed('#role-typing', {
    strings: ['FullStack Developer', 'UI/UX Designer', ''],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    backDelay: 2000
});

// 3D Scroll Animation Logic
window.addEventListener('scroll', () => {
    const scrollElements = document.querySelectorAll('.scroll-3d-element');
    const scrollValue = window.scrollY;

    scrollElements.forEach(el => {
        // Rotates the image slightly based on scroll position
        const rotation = scrollValue * 0.05;
        el.style.transform = `perspective(1000px) rotateY(${rotation}deg) rotateX(${rotation * 0.2}deg)`;
    });
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    themeIcon.className = html.classList.contains('dark') ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});

// Apply saved theme
if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
    themeIcon.className = 'fas fa-sun';
}
