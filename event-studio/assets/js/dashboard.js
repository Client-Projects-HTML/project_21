// ==========================================================================
// FRAME & FABLE - Admin Dashboard Core & Analytics Renderer
// ==========================================================================

const DashboardModule = {
  init() {
    this.setupSidebarDrawer();
    this.renderRevenueChart();
    this.renderBookingsChart();
  },

  setupSidebarDrawer() {
    const sidebarToggleBtn = document.getElementById('dashboard-sidebar-toggle');
    const sidebar = document.getElementById('dashboard-sidebar');
    const sidebarOverlay = document.getElementById('dashboard-sidebar-overlay');

    if (!sidebarToggleBtn || !sidebar) return;

    sidebarToggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('-translate-x-full');
      if (sidebarOverlay) sidebarOverlay.classList.toggle('hidden');
    });

    if (sidebarOverlay) {
      sidebarOverlay.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
        sidebarOverlay.classList.add('hidden');
      });
    }
  },

  renderRevenueChart() {
    const chartContainer = document.getElementById('revenue-chart');
    if (!chartContainer) return;

    // Monthly revenue demo data
    const data = [12400, 14200, 11800, 16500, 18450, 22100, 19800, 24500, 21000, 26400, 28900, 31200];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const maxVal = Math.max(...data);
    const height = 180;
    const width = 600;

    // SVG Line chart generator
    const points = data.map((val, idx) => {
      const x = (idx / (data.length - 1)) * width;
      const y = height - (val / maxVal) * (height - 30) - 15;
      return `${x},${y}`;
    }).join(' ');

    const areaPoints = `0,${height} ${points} ${width},${height}`;

    chartContainer.innerHTML = `
      <div class="relative w-full overflow-hidden">
        <svg viewBox="0 0 ${width} ${height}" class="w-full h-44 overflow-visible">
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#C5A059" stop-opacity="0.3"/>
              <stop offset="100%" stop-color="#C5A059" stop-opacity="0.0"/>
            </linearGradient>
          </defs>
          <!-- Grid Lines -->
          <line x1="0" y1="${height * 0.25}" x2="${width}" y2="${height * 0.25}" stroke="currentColor" class="text-neutral-200 dark:text-neutral-800" stroke-dasharray="4"/>
          <line x1="0" y1="${height * 0.5}" x2="${width}" y2="${height * 0.5}" stroke="currentColor" class="text-neutral-200 dark:text-neutral-800" stroke-dasharray="4"/>
          <line x1="0" y1="${height * 0.75}" x2="${width}" y2="${height * 0.75}" stroke="currentColor" class="text-neutral-200 dark:text-neutral-800" stroke-dasharray="4"/>

          <!-- Area -->
          <polygon points="${areaPoints}" fill="url(#chartGradient)"/>
          
          <!-- Smooth Line -->
          <polyline points="${points}" fill="none" stroke="#C5A059" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          
          <!-- Data Points -->
          ${data.map((val, idx) => {
            const x = (idx / (data.length - 1)) * width;
            const y = height - (val / maxVal) * (height - 30) - 15;
            return `<circle cx="${x}" cy="${y}" r="4" class="fill-neutral-900 dark:fill-neutral-100 stroke-amber-500 stroke-2 hover:r-6 transition-all cursor-pointer">
              <title>${months[idx]}: $${val.toLocaleString()}</title>
            </circle>`;
          }).join('')}
        </svg>
        <div class="flex justify-between text-xs text-neutral-400 mt-2">
          ${months.map(m => `<span>${m}</span>`).join('')}
        </div>
      </div>
    `;
  },

  renderBookingsChart() {
    const container = document.getElementById('bookings-chart');
    if (!container) return;

    // Category distribution data
    const categories = [
      { name: 'Weddings', count: 18, color: 'bg-neutral-900 dark:bg-neutral-100' },
      { name: 'Corporate', count: 12, color: 'bg-amber-600' },
      { name: 'Private Events', count: 8, color: 'bg-emerald-600' }
    ];

    const total = categories.reduce((sum, c) => sum + c.count, 0);

    container.innerHTML = `
      <div class="space-y-4">
        <div class="h-4 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden flex">
          ${categories.map(c => {
            const pct = ((c.count / total) * 100).toFixed(1);
            return `<div class="${c.color} h-full" style="width: ${pct}%" title="${c.name}: ${c.count} (${pct}%)"></div>`;
          }).join('')}
        </div>
        <div class="grid grid-cols-3 gap-2 text-xs">
          ${categories.map(c => {
            const pct = ((c.count / total) * 100).toFixed(1);
            return `
              <div class="flex flex-col">
                <span class="flex items-center gap-1.5 text-neutral-500">
                  <span class="w-2.5 h-2.5 rounded-full ${c.color}"></span> ${c.name}
                </span>
                <span class="font-bold text-neutral-900 dark:text-neutral-100 text-sm mt-0.5">${c.count} (${pct}%)</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }
};

document.addEventListener('DOMContentLoaded', () => DashboardModule.init());
