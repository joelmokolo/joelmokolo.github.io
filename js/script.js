// ===== ELEMENTS: connect JavaScript to the matching HTML elements =====
const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const navToggle = document.querySelector('[data-nav-toggle]');

// ===== MOBILE MENU: open and close the navigation =====
const closeMenu = () => {
  nav?.classList.remove('is-open');
  navToggle?.setAttribute('aria-expanded', 'false');
};

navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(open));
});

// Close the menu when someone chooses a page section.
document.querySelectorAll('[data-nav] a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// ===== HEADER: change its appearance after scrolling =====
window.addEventListener('scroll', () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 20);
}, { passive: true });

// ===== REVEAL: show page sections as they enter the screen =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => {
  observer.observe(element);
});

// ===== FOOTER: keep the copyright year current =====
document.querySelector('[data-year]').textContent = new Date().getFullYear();
