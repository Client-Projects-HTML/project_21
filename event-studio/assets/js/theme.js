// ==========================================================================
// FRAME & FABLE - Global Theme Management (Light / Dark Mode)
// Handles document root theme toggling with studioTheme persistence.
// ==========================================================================

const ThemeManager = {
  STORAGE_KEY: 'studioTheme',

  init() {
    const savedTheme = localStorage.getItem(this.STORAGE_KEY);
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      this.setTheme('dark');
    } else {
      this.setTheme('light');
    }

    // Attach click listeners to all theme toggle buttons across pages
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      if (!btn.getAttribute('type')) {
        btn.setAttribute('type', 'button');
      }
      btn.setAttribute('aria-label', 'Toggle theme');
      btn.setAttribute('title', 'Toggle theme');

      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.toggleTheme();
      });
    });

    // Listen to system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(this.STORAGE_KEY)) {
        this.setTheme(e.matches ? 'dark' : 'light');
      }
    });
  },

  setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem(this.STORAGE_KEY, 'dark');
      this.updateIcons('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem(this.STORAGE_KEY, 'light');
      this.updateIcons('light');
    }
  },

  toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';
    this.setTheme(newTheme);
    if (typeof showToast === 'function') {
      showToast(`Switched to ${newTheme} mode`, 'info');
    }
  },

  updateIcons(theme) {
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      const sunIcon = btn.querySelector('.theme-sun');
      const moonIcon = btn.querySelector('.theme-moon');
      if (sunIcon && moonIcon) {
        if (theme === 'dark') {
          sunIcon.classList.remove('hidden');
          moonIcon.classList.add('hidden');
        } else {
          sunIcon.classList.add('hidden');
          moonIcon.classList.remove('hidden');
        }
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => ThemeManager.init());
