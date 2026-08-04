// Universal SVG Fallbacks for Icons & Logos
const SYSTEM_SVG_ICONS = {
  'sun': '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
  'moon': '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>',
  'arrow-left-right': '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg>',
  'map-pin': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  'mail': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  'phone': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  'clock': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  'video': '<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L4.442 8.761C3.867 6.586 3.125 5.5 2.213 5.5c-.211 0-.943.444-2.197 1.332L0 5.534C1.35 4.347 2.684 3.16 4.004 1.974c1.821-1.571 3.208-2.392 4.161-2.463 2.253-.178 3.642 1.36 4.166 4.614.563 3.5 1.157 5.679 1.782 6.536.625.856 1.309 1.284 2.052 1.284.978 0 2.053-.615 3.228-1.846 1.174-1.231 1.796-2.428 1.865-3.593.141-2.072-.942-3.109-3.249-3.109-.979 0-1.996.22-3.05.661 2.003-6.551 5.811-9.67 11.424-9.359 2.261.127 3.327 1.542 3.197 4.247z"/></svg>',
  'menu': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
  'x': '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  'check': '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
  'minus': '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><line x1="5" x2="19" y1="12" y2="12"/></svg>',
  'navigation': '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>',
  'copy': '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
  'chevron-down': '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>',
  'layout-template': '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',
  'newspaper': '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>',
  'camera': '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>',
  'layout-dashboard': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>',
  'crown': '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M2 4l3 12h14l3-12-6 7-4-5-4 5-6-7z"/><path d="M3 20h18"/></svg>',
  'arrow-right': '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  'log-out': '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>',
  'loader-2': '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>',
  'search': '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  'info': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
  'check-circle': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  'alert-triangle': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>',
  'alert-circle': '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>'
};

function renderAllIcons() {
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
  
  document.querySelectorAll('i[data-lucide]').forEach(el => {
    const iconName = el.getAttribute('data-lucide');
    if (SYSTEM_SVG_ICONS[iconName] && el.tagName.toLowerCase() === 'i') {
      const wrapper = document.createElement('span');
      wrapper.innerHTML = SYSTEM_SVG_ICONS[iconName];
      const svg = wrapper.firstElementChild;
      if (svg) {
        el.classList.forEach(cls => svg.classList.add(cls));
        el.replaceWith(svg);
      }
    }
  });
}

renderAllIcons();
document.addEventListener('DOMContentLoaded', renderAllIcons);
window.addEventListener('load', renderAllIcons);

document.addEventListener('DOMContentLoaded', () => {

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
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const currentHash = window.location.hash || '';
    const navLinks = document.querySelectorAll('.site-header nav a, #mobile-menu-drawer nav a');
    
    // Check if any anchor link specifically matches the current path and hash
    const hasHashMatch = Array.from(navLinks).some(link => {
      const rawHref = link.getAttribute('href') || '';
      const [linkPath, linkHash] = rawHref.split('#');
      return linkHash && linkPath === currentPath && currentHash === '#' + linkHash;
    });

    navLinks.forEach(link => {
      const rawHref = link.getAttribute('href') || '';
      const [linkPath, linkHash] = rawHref.split('#');

      link.classList.remove('nav-link-active', 'border-b-2', 'border-brand-charcoal', 'dark:border-brand-ivory', 'pb-0.5', 'text-brand-charcoal', 'dark:text-brand-ivory', 'bg-neutral-100', 'dark:bg-neutral-800');

      let isMatch = false;
      if (linkHash) {
        // Anchor link (e.g., services.html#packages): only highlight if exact hash matches
        isMatch = (linkPath === currentPath) && (currentHash === '#' + linkHash);
      } else {
        // Main page link (e.g., services.html): highlight only if no specific hash link matched
        isMatch = (linkPath === currentPath && !hasHashMatch) || ((currentPath === '' || currentPath === 'index.html') && linkPath === 'index.html' && !hasHashMatch);
      }

      if (isMatch) {
        link.classList.add('nav-link-active');
        if (link.classList.contains('dropdown-item')) {
          link.classList.add('bg-neutral-100', 'dark:bg-neutral-800');
          const parentBtn = link.closest('.dropdown-container')?.querySelector('.nav-dropdown-btn');
          if (parentBtn) {
            parentBtn.classList.add('text-brand-charcoal', 'dark:text-brand-ivory', 'font-semibold');
          }
        } else {
          link.classList.add('border-b-2', 'border-brand-charcoal', 'dark:border-brand-ivory', 'pb-0.5', 'text-brand-charcoal', 'dark:text-brand-ivory');
        }
      }
    });
  }

  hydrateActiveNavLinks();
  window.addEventListener('hashchange', hydrateActiveNavLinks);

  // 2.2 Dropdown Navigation Controls (Touch & Accessibility Support)
  const dropdownContainers = document.querySelectorAll('.dropdown-container');
  dropdownContainers.forEach(container => {
    const btn = container.querySelector('.nav-dropdown-btn');
    const menu = container.querySelector('.nav-dropdown-menu');

    if (btn && menu) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = menu.classList.contains('dropdown-menu-open');
        
        // Close all other dropdowns
        document.querySelectorAll('.nav-dropdown-menu').forEach(m => m.classList.remove('dropdown-menu-open'));
        document.querySelectorAll('.nav-dropdown-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));

        if (!isOpen) {
          menu.classList.add('dropdown-menu-open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // Mobile Accordion Toggle for Home Dropdown in Mobile Drawer
  const mobileHomeToggle = document.getElementById('mobile-home-dropdown-toggle');
  const mobileHomeSubmenu = document.getElementById('mobile-home-submenu');
  if (mobileHomeToggle && mobileHomeSubmenu) {
    mobileHomeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      mobileHomeSubmenu.classList.toggle('hidden');
      const icon = mobileHomeToggle.querySelector('.mobile-dropdown-icon');
      if (icon) icon.classList.toggle('rotate-180');
    });
  }

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown-container')) {
      document.querySelectorAll('.nav-dropdown-menu').forEach(m => m.classList.remove('dropdown-menu-open'));
      document.querySelectorAll('.nav-dropdown-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
    }
  });

  // Touch Feedback Event Listener for Mobile Cards
  const touchCards = document.querySelectorAll('.touch-card, .touch-tap-active');
  touchCards.forEach(card => {
    card.addEventListener('touchstart', () => card.classList.add('is-tapped'), { passive: true });
    card.addEventListener('touchend', () => setTimeout(() => card.classList.remove('is-tapped'), 200), { passive: true });
    card.addEventListener('touchcancel', () => card.classList.remove('is-tapped'), { passive: true });
  });

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

  // Close mobile drawer or dropdowns on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileMenuBtn && mobileMenuBtn.getAttribute('aria-expanded') === 'true') {
        closeMobileMenu();
      }
      document.querySelectorAll('.nav-dropdown-menu').forEach(m => m.classList.remove('dropdown-menu-open'));
      document.querySelectorAll('.nav-dropdown-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
    }
  });

  // Close mobile menu when clicking nav links
  document.querySelectorAll('#mobile-menu-drawer a:not(#mobile-home-dropdown-toggle)').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
  // 4. Showreel Cinema Lightbox Modal Controls
  const openShowreelBtn = document.getElementById('open-showreel-btn');
  const closeShowreelBtn = document.getElementById('close-showreel-btn');
  const showreelModal = document.getElementById('showreel-modal');

  if (openShowreelBtn && showreelModal) {
    openShowreelBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showreelModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      if (typeof showToast === 'function') {
        showToast('Loading Cinema Showreel Video...', 'info');
      }
    });
  }

  if (closeShowreelBtn && showreelModal) {
    closeShowreelBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showreelModal.classList.add('hidden');
      document.body.style.overflow = '';
    });
  }

  if (showreelModal) {
    showreelModal.addEventListener('click', (e) => {
      if (e.target === showreelModal) {
        showreelModal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  }

  // 5. Portfolio Filtering Logic
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const filterItems = document.querySelectorAll('.portfolio-item, [data-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const filterValue = btn.getAttribute('data-filter') || 'all';

      filterBtns.forEach(b => {
        b.classList.remove('bg-brand-charcoal', 'text-white', 'dark:bg-brand-ivory', 'dark:text-brand-charcoal');
        b.classList.add('bg-neutral-100', 'text-neutral-600', 'dark:bg-neutral-800', 'dark:text-neutral-300');
        b.setAttribute('aria-selected', 'false');
      });

      btn.classList.remove('bg-neutral-100', 'text-neutral-600', 'dark:bg-neutral-800', 'dark:text-neutral-300');
      btn.classList.add('bg-brand-charcoal', 'text-white', 'dark:bg-brand-ivory', 'dark:text-brand-charcoal');
      btn.setAttribute('aria-selected', 'true');

      filterItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category') || '';
        if (filterValue === 'all' || itemCategory.toLowerCase().includes(filterValue.toLowerCase())) {
          item.style.display = '';
          item.classList.remove('hidden');
        } else {
          item.style.display = 'none';
          item.classList.add('hidden');
        }
      });

      if (typeof showToast === 'function') {
        showToast(`Filtered projects by: ${btn.textContent.trim()}`, 'info');
      }
    });
  });

  // 6. Interactive Form Handling (Newsletter, Contact, Inquiry, Notify)
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : '';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin inline-block mr-2"></i> Submitting...`;
        if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
        }
        form.reset();
        if (typeof showToast === 'function') {
          showToast('Thank you! Your request has been submitted successfully.', 'success');
        }
      }, 1200);
    });
  });

  // 7. Universal Fallback Button Delegate (Ensures every button across the site has active functionality)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;

    // Skip handled toggle & navigation buttons
    if (
      btn.classList.contains('theme-toggle-btn') ||
      btn.classList.contains('rtl-toggle-btn') ||
      btn.classList.contains('nav-dropdown-btn') ||
      btn.classList.contains('portfolio-filter-btn') ||
      btn.id === 'mobile-menu-btn' ||
      btn.id === 'mobile-menu-close' ||
      btn.id === 'mobile-home-dropdown-toggle' ||
      btn.id === 'open-showreel-btn' ||
      btn.id === 'close-showreel-btn' ||
      btn.getAttribute('type') === 'submit'
    ) {
      return;
    }

    // Interactive feedback for general utility/action buttons
    const btnLabel = btn.textContent.trim() || btn.getAttribute('aria-label') || btn.getAttribute('title') || 'Button';
    if (typeof showToast === 'function') {
      showToast(`Clicked: ${btnLabel}`, 'info');
    }
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
