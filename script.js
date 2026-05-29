document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll(
        '.timeline-item, .project-card, .community-card, .about-grid, .edu-card, .award-item'
    );

    elements.forEach(el => el.classList.add('fade-in'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    elements.forEach(el => observer.observe(el));

    const nav = document.getElementById('nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 100) {
            nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
        } else {
            nav.style.boxShadow = 'none';
        }
        lastScroll = currentScroll;
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
