// ==========================================================================
// FRAME & FABLE - RTL Layout Toggle Management
// CRITICAL: Must ONLY toggle document direction between 'ltr' and 'rtl'.
// Must NOT navigate, open modals, trigger forms, or trigger secondary buttons.
// Button is strictly ICON-ONLY with aria-label="Toggle RTL" and tooltip.
// ==========================================================================

const RTLManager = {
  STORAGE_KEY: 'studioRTL',

  init() {
    const savedRTL = localStorage.getItem(this.STORAGE_KEY);
    if (savedRTL === 'true' || savedRTL === 'rtl') {
      this.setDirection('rtl');
    } else {
      this.setDirection('ltr');
    }

    // Attach click handlers to all RTL toggle buttons across the DOM
    document.querySelectorAll('.rtl-toggle-btn').forEach(btn => {
      if (!btn.getAttribute('type')) {
        btn.setAttribute('type', 'button');
      }

      btn.setAttribute('aria-label', 'Toggle RTL');
      btn.setAttribute('title', 'Toggle RTL');

      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.toggleDirection();
      });
    });
  },

  setDirection(dir) {
    const isRTL = dir === 'rtl';
    document.documentElement.dir = dir;
    localStorage.setItem(this.STORAGE_KEY, isRTL ? 'rtl' : 'ltr');
    
    // Update button accessibility states
    document.querySelectorAll('.rtl-toggle-btn').forEach(btn => {
      btn.setAttribute('aria-pressed', isRTL ? 'true' : 'false');
      btn.setAttribute('aria-label', 'Toggle RTL');
      btn.setAttribute('title', 'Toggle RTL');
    });
  },

  toggleDirection() {
    const currentDir = document.documentElement.dir || 'ltr';
    const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
    this.setDirection(newDir);
    if (typeof showToast === 'function') {
      showToast(`Text direction set to ${newDir.toUpperCase()}`, 'info');
    }
  }
};

document.addEventListener('DOMContentLoaded', () => RTLManager.init());
