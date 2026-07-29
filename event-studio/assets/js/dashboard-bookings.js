// ==========================================================================
// FRAME & FABLE - Dashboard Booking Management (CRUD + Search & Filter)
// ==========================================================================

const DashboardBookings = {
  STORAGE_KEY: 'studioBookings',
  bookings: [],
  currentFilter: 'all',
  searchQuery: '',

  defaultBookings: [
    { id: 'BK-1001', client: 'Sophia & Alexander', event: 'Luxury Wedding', date: '2026-08-15', package: 'Cinematic', location: 'Grand Plaza Estate', status: 'Confirmed', email: 'sophia@example.com', phone: '+1 555-0192' },
    { id: 'BK-1002', client: 'Apex Tech Corp', event: 'Annual Summit', date: '2026-08-22', package: 'Signature', location: 'Metropolitan Center', status: 'Pending', email: 'events@apextech.com', phone: '+1 555-0144' },
    { id: 'BK-1003', client: 'Elena Rostova', event: '30th Private Soirée', date: '2026-09-05', package: 'Essential', location: 'Sunset Villa', status: 'Confirmed', email: 'elena@example.com', phone: '+1 555-0188' },
    { id: 'BK-1004', client: 'Marcus & Clara', event: 'Pre-Wedding Shoot', date: '2026-09-12', package: 'Signature', location: 'Coastal Cliffs', status: 'Completed', email: 'marcus@example.com', phone: '+1 555-0167' },
    { id: 'BK-1005', client: 'Vanguard Media', event: 'Brand Launch', date: '2026-09-19', package: 'Cinematic', location: 'Studio 404', status: 'Cancelled', email: 'info@vanguard.com', phone: '+1 555-0123' }
  ],

  init() {
    this.loadData();
    this.setupListeners();
    this.render();
  },

  loadData() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (data) {
      this.bookings = JSON.parse(data);
    } else {
      this.bookings = [...this.defaultBookings];
      this.saveData();
    }
  },

  saveData() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.bookings));
  },

  setupListeners() {
    // Search input
    const searchInput = document.getElementById('booking-search');
    searchInput?.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.toLowerCase();
      this.render();
    });

    // Status filter buttons
    const filterBtns = document.querySelectorAll('.booking-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-status');
        this.currentFilter = filter;
        
        filterBtns.forEach(b => {
          b.classList.remove('bg-neutral-900', 'text-white', 'dark:bg-neutral-100', 'dark:text-neutral-900');
          b.classList.add('bg-neutral-100', 'text-neutral-600', 'dark:bg-neutral-800', 'dark:text-neutral-300');
        });
        btn.classList.remove('bg-neutral-100', 'text-neutral-600', 'dark:bg-neutral-800', 'dark:text-neutral-300');
        btn.classList.add('bg-neutral-900', 'text-white', 'dark:bg-neutral-100', 'dark:text-neutral-900');

        this.render();
      });
    });

    // Add New Booking modal form submission
    const addForm = document.getElementById('add-booking-form');
    addForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const newBk = {
        id: 'BK-' + Math.floor(1000 + Math.random() * 9000),
        client: document.getElementById('new-client').value,
        email: document.getElementById('new-email').value,
        phone: document.getElementById('new-phone').value,
        event: document.getElementById('new-event').value,
        date: document.getElementById('new-date').value,
        package: document.getElementById('new-package').value,
        location: document.getElementById('new-location').value,
        status: document.getElementById('new-status').value
      };
      this.bookings.unshift(newBk);
      this.saveData();
      this.render();
      this.closeModal('add-booking-modal');
      addForm.reset();
      showToast('New booking added successfully!', 'success');
    });
  },

  render() {
    const tbody = document.getElementById('bookings-table-body');
    if (!tbody) return;

    let filtered = this.bookings.filter(b => {
      const matchFilter = (this.currentFilter === 'all') || (b.status.toLowerCase() === this.currentFilter.toLowerCase());
      const matchSearch = !this.searchQuery || 
        b.client.toLowerCase().includes(this.searchQuery) ||
        b.event.toLowerCase().includes(this.searchQuery) ||
        b.location.toLowerCase().includes(this.searchQuery) ||
        b.id.toLowerCase().includes(this.searchQuery);
      return matchFilter && matchSearch;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" class="px-6 py-12 text-center text-neutral-400">
            No bookings matching your criteria.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = filtered.map(b => `
      <tr class="border-b border-neutral-100 dark:border-neutral-800 hover:bg-neutral-50/50 dark:hover:bg-neutral-800/40 transition-colors">
        <td class="px-6 py-4">
          <div class="font-medium text-neutral-900 dark:text-neutral-100">${b.client}</div>
          <div class="text-xs text-neutral-400">${b.email}</div>
        </td>
        <td class="px-6 py-4 text-sm text-neutral-700 dark:text-neutral-300">${b.event}</td>
        <td class="px-6 py-4 text-sm text-neutral-700 dark:text-neutral-300 font-mono">${b.date}</td>
        <td class="px-6 py-4 text-sm text-neutral-700 dark:text-neutral-300">${b.package}</td>
        <td class="px-6 py-4 text-sm text-neutral-700 dark:text-neutral-300">${b.location}</td>
        <td class="px-6 py-4">
          ${this.getStatusBadge(b.status)}
        </td>
        <td class="px-6 py-4 text-right space-x-2 space-x-reverse">
          <button type="button" onclick="DashboardBookings.viewDetails('${b.id}')" class="p-1.5 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white" aria-label="View booking details">
            <i data-lucide="eye" class="w-4 h-4"></i>
          </button>
          <button type="button" onclick="DashboardBookings.deleteBooking('${b.id}')" class="p-1.5 text-rose-500 hover:text-rose-700" aria-label="Delete booking">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </td>
      </tr>
    `).join('');

    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons();
    }
  },

  getStatusBadge(status) {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return '<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">Confirmed</span>';
      case 'pending':
        return '<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300">Pending</span>';
      case 'completed':
        return '<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300">Completed</span>';
      case 'cancelled':
        return '<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300">Cancelled</span>';
      default:
        return `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800">${status}</span>`;
    }
  },

  viewDetails(id) {
    const booking = this.bookings.find(b => b.id === id);
    if (!booking) return;

    const modal = document.getElementById('view-booking-modal');
    const content = document.getElementById('view-booking-content');
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="space-y-4">
        <div class="flex justify-between items-start border-b border-neutral-100 dark:border-neutral-800 pb-3">
          <div>
            <span class="text-xs font-mono text-neutral-400">${booking.id}</span>
            <h3 class="font-serif text-xl font-medium">${booking.client}</h3>
          </div>
          ${this.getStatusBadge(booking.status)}
        </div>
        <div class="grid grid-cols-2 gap-4 text-sm">
          <div><strong class="block text-xs text-neutral-400 uppercase">Event Type</strong> ${booking.event}</div>
          <div><strong class="block text-xs text-neutral-400 uppercase">Date</strong> ${booking.date}</div>
          <div><strong class="block text-xs text-neutral-400 uppercase">Package</strong> ${booking.package}</div>
          <div><strong class="block text-xs text-neutral-400 uppercase">Location</strong> ${booking.location}</div>
          <div><strong class="block text-xs text-neutral-400 uppercase">Email</strong> ${booking.email || 'N/A'}</div>
          <div><strong class="block text-xs text-neutral-400 uppercase">Phone</strong> ${booking.phone || 'N/A'}</div>
        </div>
        <div class="pt-3 border-t border-neutral-100 dark:border-neutral-800">
          <label class="block text-xs font-semibold uppercase text-neutral-500 mb-1">Update Status</label>
          <select id="update-status-select" onchange="DashboardBookings.updateStatus('${booking.id}', this.value)" class="w-full px-3 py-2 border rounded-md dark:bg-neutral-800 dark:border-neutral-700">
            <option value="Confirmed" ${booking.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
            <option value="Pending" ${booking.status === 'Pending' ? 'selected' : ''}>Pending</option>
            <option value="Completed" ${booking.status === 'Completed' ? 'selected' : ''}>Completed</option>
            <option value="Cancelled" ${booking.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
          </select>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
  },

  updateStatus(id, newStatus) {
    const booking = this.bookings.find(b => b.id === id);
    if (booking) {
      booking.status = newStatus;
      this.saveData();
      this.render();
      showToast(`Booking ${id} status updated to ${newStatus}`, 'success');
    }
  },

  deleteBooking(id) {
    if (confirm(`Are you sure you want to delete booking ${id}?`)) {
      this.bookings = this.bookings.filter(b => b.id !== id);
      this.saveData();
      this.render();
      showToast(`Booking ${id} deleted`, 'warning');
    }
  },

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('hidden');
  }
};

document.addEventListener('DOMContentLoaded', () => DashboardBookings.init());
