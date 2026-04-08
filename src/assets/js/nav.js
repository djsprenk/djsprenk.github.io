const toggle = document.querySelector('.nav-toggle');
const closeBtn = document.querySelector('.nav-close');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header');

function setHeaderHeight() {
  document.documentElement.style.setProperty(
    '--header-height',
    header.offsetHeight + 'px'
  );
}

// Use ResizeObserver so we react to font/content changes, not just window resize
const headerObserver = new ResizeObserver(setHeaderHeight);
headerObserver.observe(header);

function openMenu() {
  navLinks.classList.add('open');
  toggle.setAttribute('aria-expanded', 'true');
  toggle.hidden = true;
  closeBtn.hidden = false;
}

function closeMenu() {
  navLinks.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.hidden = false;
  closeBtn.hidden = true;
}

toggle.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

// Delegated listener — handles all current and future nav links in one handler
navLinks.addEventListener('click', (e) => {
  if (e.target.closest('a')) closeMenu();
});

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navLinks.classList.contains('open')) closeMenu();
});
