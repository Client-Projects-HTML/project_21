// ==========================================================================
// FRAME & FABLE - Portfolio Gallery & Lightbox
// ==========================================================================

const PortfolioModule = {
  items: [],
  currentIndex: 0,

  init() {
    this.setupFilterButtons();
    this.setupLightbox();
  },

  setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
    const items = document.querySelectorAll('.portfolio-item');

    if (!filterButtons.length || !items.length) return;

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');

        // Active state style
        filterButtons.forEach(b => {
          b.classList.remove('bg-neutral-900', 'text-white', 'dark:bg-neutral-100', 'dark:text-neutral-900');
          b.classList.add('bg-neutral-100', 'text-neutral-600', 'dark:bg-neutral-800', 'dark:text-neutral-300');
          b.setAttribute('aria-selected', 'false');
        });

        btn.classList.remove('bg-neutral-100', 'text-neutral-600', 'dark:bg-neutral-800', 'dark:text-neutral-300');
        btn.classList.add('bg-neutral-900', 'text-white', 'dark:bg-neutral-100', 'dark:text-neutral-900');
        btn.setAttribute('aria-selected', 'true');

        // Filter elements
        items.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            item.style.display = '';
            item.classList.add('animate-fadeIn');
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  },

  setupLightbox() {
    const items = Array.from(document.querySelectorAll('.portfolio-item'));
    if (!items.length) return;

    this.items = items.map(item => {
      const img = item.querySelector('img');
      const title = item.querySelector('.portfolio-title')?.textContent || 'Studio Project';
      const category = item.querySelector('.portfolio-category')?.textContent || 'Gallery';
      return {
        src: img ? img.src : '',
        alt: img ? img.alt : '',
        title: title,
        category: category
      };
    });

    items.forEach((item, index) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        this.openLightbox(index);
      });
    });

    // Create Modal DOM if not existing
    if (!document.getElementById('lightbox-modal')) {
      const modalHtml = `
        <div id="lightbox-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-opacity duration-300" role="dialog" aria-modal="true" aria-label="Image Lightbox">
          <button id="lightbox-close" type="button" class="absolute top-6 right-6 z-50 text-white/80 hover:text-white p-2 focus:outline-none focus:ring-2 focus:ring-white rounded-full" aria-label="Close Lightbox">
            <i data-lucide="x" class="w-8 h-8"></i>
          </button>
          
          <button id="lightbox-prev" type="button" class="absolute left-6 z-50 text-white/80 hover:text-white p-3 focus:outline-none focus:ring-2 focus:ring-white rounded-full bg-black/40 hover:bg-black/70 transition-colors" aria-label="Previous Image">
            <i data-lucide="chevron-left" class="w-6 h-6 rtl-icon-flip"></i>
          </button>

          <button id="lightbox-next" type="button" class="absolute right-6 z-50 text-white/80 hover:text-white p-3 focus:outline-none focus:ring-2 focus:ring-white rounded-full bg-black/40 hover:bg-black/70 transition-colors" aria-label="Next Image">
            <i data-lucide="chevron-right" class="w-6 h-6 rtl-icon-flip"></i>
          </button>

          <div class="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center text-center">
            <img id="lightbox-img" src="" alt="" class="max-h-[75vh] max-w-full object-contain rounded-md shadow-2xl transition-all duration-300">
            <div class="mt-4 text-white">
              <span id="lightbox-category" class="text-xs uppercase tracking-widest text-neutral-400 block mb-1"></span>
              <h3 id="lightbox-title" class="font-serif text-2xl font-medium"></h3>
            </div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', modalHtml);
    }

    const modal = document.getElementById('lightbox-modal');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');

    closeBtn?.addEventListener('click', () => this.closeLightbox());
    prevBtn?.addEventListener('click', () => this.prevImage());
    nextBtn?.addEventListener('click', () => this.nextImage());

    modal?.addEventListener('click', (e) => {
      if (e.target === modal) this.closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!modal || modal.classList.contains('hidden')) return;
      if (e.key === 'Escape') this.closeLightbox();
      if (e.key === 'ArrowLeft') {
        if (document.documentElement.dir === 'rtl') this.nextImage();
        else this.prevImage();
      }
      if (e.key === 'ArrowRight') {
        if (document.documentElement.dir === 'rtl') this.prevImage();
        else this.nextImage();
      }
    });
  },

  openLightbox(index) {
    this.currentIndex = index;
    const modal = document.getElementById('lightbox-modal');
    const img = document.getElementById('lightbox-img');
    const title = document.getElementById('lightbox-title');
    const category = document.getElementById('lightbox-category');

    if (!modal || !this.items[index]) return;

    const data = this.items[index];
    img.src = data.src;
    img.alt = data.alt;
    title.textContent = data.title;
    category.textContent = data.category;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons();
    }
  },

  closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  },

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.openLightbox(this.currentIndex);
  },

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.openLightbox(this.currentIndex);
  }
};

document.addEventListener('DOMContentLoaded', () => PortfolioModule.init());
