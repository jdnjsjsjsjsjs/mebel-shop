const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

const overlay = document.createElement('div');
overlay.className = 'nav-overlay';

mainNav.parentNode.insertBefore(overlay, mainNav);

function toggleMenu() {
    const isOpen = mainNav.classList.contains('active');

    menuToggle.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', String(!isOpen));

    mainNav.classList.toggle('active');
    overlay.classList.toggle('active');

    document.body.style.overflow = isOpen ? '' : 'hidden';
}

menuToggle.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
