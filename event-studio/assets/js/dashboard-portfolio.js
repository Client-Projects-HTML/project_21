// ==========================================================================
// FRAME & FABLE - Dashboard Portfolio Management (CRUD)
// ==========================================================================

const DashboardPortfolio = {
  STORAGE_KEY: 'studioPortfolio',
  projects: [],

  defaultProjects: [
    { id: 'PF-1', title: 'The Coastal Romance', category: 'Weddings', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80', date: '2026-06-12', featured: true },
    { id: 'PF-2', title: 'Global Tech Gala 2026', category: 'Corporate', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80', date: '2026-05-20', featured: true },
    { id: 'PF-3', title: 'Vesper Private Soirée', category: 'Birthdays', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80', date: '2026-04-18', featured: false },
    { id: 'PF-4', title: 'Sunset Sanctuary', category: 'Pre-Wedding', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80', date: '2026-03-30', featured: true },
    { id: 'PF-5', title: 'A Timeless Union', category: 'Films', image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=80', date: '2026-02-14', featured: false }
  ],

  init() {
    this.loadData();
    this.setupListeners();
    this.render();
  },

  loadData() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (data) {
      this.projects = JSON.parse(data);
    } else {
      this.projects = [...this.defaultProjects];
      this.saveData();
    }
  },

  saveData() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.projects));
  },

  setupListeners() {
    const form = document.getElementById('add-project-form');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const newProj = {
        id: 'PF-' + Date.now(),
        title: document.getElementById('proj-title').value,
        category: document.getElementById('proj-category').value,
        image: document.getElementById('proj-image').value || 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
        date: new Date().toISOString().split('T')[0],
        featured: document.getElementById('proj-featured').checked
      };

      this.projects.unshift(newProj);
      this.saveData();
      this.render();
      this.closeModal('add-project-modal');
      form.reset();
      showToast('New portfolio project published!', 'success');
    });
  },

  render() {
    const container = document.getElementById('portfolio-management-grid');
    if (!container) return;

    if (this.projects.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-12 text-center text-neutral-400">
          No portfolio projects found. Click "Add Project" to upload one.
        </div>
      `;
      return;
    }

    container.innerHTML = this.projects.map(p => `
      <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden flex flex-col">
        <div class="aspect-photo relative overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover">
          <span class="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">
            ${p.category}
          </span>
          ${p.featured ? '<span class="absolute top-3 right-3 bg-amber-500 text-black text-xs px-2 py-0.5 rounded font-bold">Featured</span>' : ''}
        </div>
        <div class="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="font-serif text-lg font-medium text-neutral-900 dark:text-neutral-100">${p.title}</h3>
            <p class="text-xs text-neutral-400 font-mono mt-1">Date: ${p.date}</p>
          </div>
          <div class="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex justify-between items-center">
            <button type="button" onclick="DashboardPortfolio.toggleFeatured('${p.id}')" class="text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white">
              ${p.featured ? 'Unfeature' : 'Feature'}
            </button>
            <button type="button" onclick="DashboardPortfolio.deleteProject('${p.id}')" class="text-xs text-rose-500 hover:text-rose-700 font-medium">
              Delete
            </button>
          </div>
        </div>
      </div>
    `).join('');
  },

  toggleFeatured(id) {
    const p = this.projects.find(x => x.id === id);
    if (p) {
      p.featured = !p.featured;
      this.saveData();
      this.render();
      showToast(`Updated featured status for "${p.title}"`, 'info');
    }
  },

  deleteProject(id) {
    if (confirm('Are you sure you want to remove this project?')) {
      this.projects = this.projects.filter(p => p.id !== id);
      this.saveData();
      this.render();
      showToast('Project removed', 'warning');
    }
  },

  closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('hidden');
  }
};

document.addEventListener('DOMContentLoaded', () => DashboardPortfolio.init());
