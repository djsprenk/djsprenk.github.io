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
  navLinks.querySelector('a').focus();
}

function closeMenu() {
  navLinks.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.hidden = false;
  closeBtn.hidden = true;
  toggle.focus();
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

// ── Submenu keyboard support ────────────────────────────────────────────────

const submenuItems = document.querySelectorAll('.has-submenu');

function openSubmenu(item, trigger) {
  item.classList.add('open');
  trigger.setAttribute('aria-expanded', 'true');
}

function closeSubmenu(item, trigger) {
  item.classList.remove('open');
  trigger.setAttribute('aria-expanded', 'false');
}

submenuItems.forEach((item) => {
  const trigger = item.querySelector(':scope > a');
  const submenu = item.querySelector('.submenu');
  const submenuLinks = () => Array.from(submenu.querySelectorAll('a'));

  // ArrowDown on trigger: open submenu and focus first item
  trigger.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      openSubmenu(item, trigger);
      submenuLinks()[0]?.focus();
    }
  });

  // Arrow keys within submenu, Escape to close
  submenu.addEventListener('keydown', (e) => {
    const links = submenuLinks();
    const idx = links.indexOf(document.activeElement);

    if (e.key === 'Escape') {
      closeSubmenu(item, trigger);
      trigger.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      links[(idx + 1) % links.length]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      links[(idx - 1 + links.length) % links.length]?.focus();
    }
  });
});

// Close any open submenu when focus moves outside it
document.addEventListener('focusin', () => {
  submenuItems.forEach((item) => {
    if (!item.contains(document.activeElement)) {
      const trigger = item.querySelector(':scope > a');
      closeSubmenu(item, trigger);
    }
  });
});

// Close any open submenu on outside click
document.addEventListener('click', (e) => {
  submenuItems.forEach((item) => {
    if (!item.contains(e.target)) {
      const trigger = item.querySelector(':scope > a');
      closeSubmenu(item, trigger);
    }
  });
});
