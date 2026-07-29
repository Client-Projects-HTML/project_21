// ==========================================================================
// FRAME & FABLE - Dashboard Messages / Enquiries Inbox Management
// ==========================================================================

const DashboardMessages = {
  STORAGE_KEY: 'studioMessages',
  messages: [],

  defaultMessages: [
    { id: 'MSG-901', client: 'Charlotte & David', email: 'charlotte@example.com', phone: '+1 555-0111', eventType: 'Wedding', eventDate: '2026-10-10', location: 'Château de Lumière', package: 'Cinematic', dateReceived: '2026-07-26', status: 'Unread', message: 'Hello! We are planning a 150-guest destination wedding in October and would love to check your studio availability for full photography and film coverage.' },
    { id: 'MSG-902', client: 'Nexus Tech Summit', email: 'events@nexustech.org', phone: '+1 555-0155', eventType: 'Corporate Event', eventDate: '2026-09-14', location: 'Downtown Convention Hall', package: 'Signature', dateReceived: '2026-07-25', status: 'Read', message: 'Looking for a 2-photographer team to cover our 2-day keynotes and networking galas.' },
    { id: 'MSG-903', client: 'Isabella Vance', email: 'isabella@example.com', phone: '+1 555-0177', eventType: 'Birthday', eventDate: '2026-08-30', location: 'Private Estate', package: 'Essential', dateReceived: '2026-07-22', status: 'Replied', message: 'Hi team, inquiring about coverage for a 50th anniversary private dinner.' }
  ],

  init() {
    this.loadData();
    this.render();
  },

  loadData() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    if (data) {
      this.messages = JSON.parse(data);
    } else {
      this.messages = [...this.defaultMessages];
      this.saveData();
    }
  },

  saveData() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.messages));
  },

  render() {
    const container = document.getElementById('messages-list');
    if (!container) return;

    if (this.messages.length === 0) {
      container.innerHTML = `
        <div class="py-12 text-center text-neutral-400">
          Your inbox is empty.
        </div>
      `;
      return;
    }

    container.innerHTML = this.messages.map(m => `
      <div class="p-4 border-b border-neutral-100 dark:border-neutral-800 flex flex-col md:flex-row md:items-center justify-between gap-4 ${m.status === 'Unread' ? 'bg-amber-50/30 dark:bg-amber-950/10' : ''} hover:bg-neutral-50 dark:hover:bg-neutral-800/40 transition-colors">
        <div class="flex items-start gap-3">
          <div class="w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${m.status === 'Unread' ? 'bg-amber-500' : m.status === 'Replied' ? 'bg-emerald-500' : 'bg-neutral-300 dark:bg-neutral-700'}"></div>
          <div>
            <div class="flex items-center gap-2">
              <h3 class="font-medium text-neutral-900 dark:text-neutral-100">${m.client}</h3>
              <span class="text-xs px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono">${m.eventType}</span>
            </div>
            <p class="text-xs text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-1">${m.message}</p>
            <div class="text-xs text-neutral-400 font-mono mt-1 flex items-center gap-4">
              <span>Date: ${m.eventDate}</span>
              <span>Received: ${m.dateReceived}</span>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2 self-end md:self-center">
          <button type="button" onclick="DashboardMessages.viewMessage('${m.id}')" class="px-3 py-1.5 text-xs font-medium bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 rounded-md hover:bg-neutral-800 transition-colors">
            View Enquiry
          </button>
          <button type="button" onclick="DashboardMessages.toggleStatus('${m.id}')" class="p-1.5 text-neutral-500 hover:text-neutral-900 dark:hover:text-white" title="Toggle Read Status">
            <i data-lucide="${m.status === 'Unread' ? 'mail-open' : 'mail'}" class="w-4 h-4"></i>
          </button>
          <button type="button" onclick="DashboardMessages.deleteMessage('${m.id}')" class="p-1.5 text-rose-500 hover:text-rose-700" title="Delete">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    `).join('');

    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons();
    }
  },

  viewMessage(id) {
    const msg = this.messages.find(m => m.id === id);
    if (!msg) return;

    if (msg.status === 'Unread') {
      msg.status = 'Read';
      this.saveData();
      this.render();
    }

    const modal = document.getElementById('message-detail-modal');
    const content = document.getElementById('message-detail-content');
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="space-y-4">
        <div class="border-b border-neutral-100 dark:border-neutral-800 pb-3 flex justify-between items-start">
          <div>
            <h3 class="font-serif text-xl font-medium">${msg.client}</h3>
            <p class="text-xs text-neutral-400">${msg.email} • ${msg.phone}</p>
          </div>
          <span class="text-xs px-2.5 py-1 rounded-full font-semibold ${msg.status === 'Replied' ? 'bg-emerald-100 text-emerald-800' : 'bg-neutral-100 text-neutral-800'}">${msg.status}</span>
        </div>

        <div class="grid grid-cols-2 gap-3 text-xs bg-neutral-50 dark:bg-neutral-800/50 p-3 rounded-md">
          <div><strong>Event:</strong> ${msg.eventType}</div>
          <div><strong>Event Date:</strong> ${msg.eventDate}</div>
          <div><strong>Location:</strong> ${msg.location}</div>
          <div><strong>Package Interest:</strong> ${msg.package || 'Custom'}</div>
        </div>

        <div class="pt-2">
          <h4 class="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-1">Message / Request</h4>
          <p class="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed bg-white dark:bg-neutral-900 p-3 rounded border border-neutral-200 dark:border-neutral-800 whitespace-pre-line">${msg.message}</p>
        </div>

        <div class="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex justify-between">
          <button type="button" onclick="DashboardMessages.markReplied('${msg.id}')" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-xs font-medium">
            Mark as Replied
          </button>
          <a href="mailto:${msg.email}" class="px-4 py-2 bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 rounded text-xs font-medium">
            Reply via Email
          </a>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
  },

  markReplied(id) {
    const msg = this.messages.find(m => m.id === id);
    if (msg) {
      msg.status = 'Replied';
      this.saveData();
      this.render();
      showToast(`Enquiry from ${msg.client} marked as Replied`, 'success');
      this.closeModal('message-detail-modal');
    }
  },

  toggleStatus(id) {
    const msg = this.messages.find(m => m.id === id);
    if (msg) {
      msg.status = msg.status === 'Unread' ? 'Read' : 'Unread';
      this.saveData();
      this.render();
    }
  },

  deleteMessage(id) {
    if (confirm('Delete this enquiry permanently?')) {
      this.messages = this.messages.filter(m => m.id !== id);
      this.saveData();
      this.render();
      showToast('Enquiry deleted', 'warning');
    }
  },

  closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('hidden');
  }
};

document.addEventListener('DOMContentLoaded', () => DashboardMessages.init());
