// ==========================================================================
// FRAME & FABLE - Core Main UI Scripts
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons if available
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }

  // 2. Header Scroll Effect
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('shadow-md');
      } else {
        header.classList.remove('shadow-md');
      }
    });
  }

  // 2.1 Active Navigation Link Highlighting
  function hydrateActiveNavLinks() {
    const currentUrl = new URL(window.location.href);
    const navLinks = document.querySelectorAll('.site-header nav a, #mobile-menu-drawer nav a');
    navLinks.forEach(link => {
      const linkUrl = new URL(link.href, window.location.origin);
      const samePage = linkUrl.pathname === currentUrl.pathname;
      const sameHash = linkUrl.hash === currentUrl.hash;
      const hasHash = linkUrl.hash !== '';
      const isRootLink = !hasHash && samePage && currentUrl.hash === '';

      link.classList.remove('nav-link-active', 'border-b-2', 'border-brand-charcoal', 'dark:border-brand-ivory', 'pb-0.5', 'text-brand-charcoal', 'dark:text-brand-ivory');
      if (samePage && (sameHash || isRootLink)) {
        link.classList.add('nav-link-active');
      }
    });
  }

  hydrateActiveNavLinks();
  window.addEventListener('hashchange', hydrateActiveNavLinks);

  // 3. Mobile Navigation Drawer
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');

  function openMobileMenu() {
    if (mobileMenuDrawer) {
      mobileMenuDrawer.classList.remove('translate-x-full', '-translate-x-full');
      mobileMenuDrawer.classList.remove('hidden');
      if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'true');
    }
  }

  function closeMobileMenu() {
    if (mobileMenuDrawer) {
      const isRTL = document.documentElement.dir === 'rtl';
      if (isRTL) {
        mobileMenuDrawer.classList.add('-translate-x-full');
      } else {
        mobileMenuDrawer.classList.add('translate-x-full');
      }
      setTimeout(() => {
        mobileMenuDrawer.classList.add('hidden');
      }, 300);
      if (mobileMenuOverlay) mobileMenuOverlay.classList.add('hidden');
      document.body.style.overflow = '';
      if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      if (isOpen) closeMobileMenu();
      else openMobileMenu();
    });
  }

  if (mobileMenuCloseBtn) {
    mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
  }

  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
  }

  // Close mobile drawer on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenuBtn && mobileMenuBtn.getAttribute('aria-expanded') === 'true') {
      closeMobileMenu();
    }
  });

  // Close mobile menu when clicking nav links
  document.querySelectorAll('#mobile-menu-drawer a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
});

// Toast Notification System
function showToast(message, type = 'info', duration = 3500) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let iconName = 'info';
  if (type === 'success') iconName = 'check-circle';
  if (type === 'warning') iconName = 'alert-triangle';
  if (type === 'error') iconName = 'alert-circle';

  toast.innerHTML = `
    <i data-lucide="${iconName}" class="w-5 h-5 flex-shrink-0"></i>
    <span class="text-sm font-medium leading-tight">${message}</span>
    <button type="button" class="ml-auto text-neutral-400 hover:text-white transition-colors" aria-label="Close notification" onclick="this.parentElement.remove()">
      <i data-lucide="x" class="w-4 h-4"></i>
    </button>
  `;

  container.appendChild(toast);
  
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, duration);
}
