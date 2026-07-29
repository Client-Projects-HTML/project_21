// ==========================================================================
// FRAME & FABLE - Availability Calendar & Booking Form Handler
// ==========================================================================

const BookingModule = {
  currentDate: new Date(),
  selectedDateStr: null,
  
  // Sample Demo Availability Data
  availabilityMap: {
    // Format YYYY-MM-DD
    available: ["2026-08-08", "2026-08-12", "2026-08-15", "2026-08-19", "2026-08-26", "2026-09-05", "2026-09-12"],
    limited: ["2026-08-22", "2026-08-23", "2026-09-19"],
    unavailable: ["2026-08-01", "2026-08-02", "2026-08-29", "2026-08-30", "2026-09-26"]
  },

  init() {
    this.renderCalendar();
    this.setupCalendarNavigation();
    this.setupFormValidation();
    this.parseURLPackage();
  },

  parseURLPackage() {
    const urlParams = new URLSearchParams(window.location.search);
    const pkgParam = urlParams.get('package');
    if (pkgParam) {
      const packageSelect = document.getElementById('package-select');
      if (packageSelect) {
        const formatted = pkgParam.charAt(0).toUpperCase() + pkgParam.slice(1).toLowerCase();
        for (let opt of packageSelect.options) {
          if (opt.value.toLowerCase() === formatted.toLowerCase() || opt.value.toLowerCase().includes(formatted.toLowerCase())) {
            packageSelect.value = opt.value;
            break;
          }
        }
      }
    }
  },

  renderCalendar() {
    const calendarGrid = document.getElementById('calendar-grid');
    const monthYearHeading = document.getElementById('calendar-month-year');
    if (!calendarGrid || !monthYearHeading) return;

    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    monthYearHeading.textContent = `${monthNames[month]} ${year}`;

    calendarGrid.innerHTML = '';

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Fill blank cells for day offset
    for (let i = 0; i < firstDay; i++) {
      const emptyDiv = document.createElement('div');
      emptyDiv.className = 'p-2 text-center text-neutral-300 dark:text-neutral-700';
      calendarGrid.appendChild(emptyDiv);
    }

    const todayStr = new Date().toISOString().split('T')[0];

    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      
      let statusClass = 'hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200';
      let statusBadge = '';

      if (this.availabilityMap.available.includes(dateStr)) {
        statusClass = 'bg-emerald-50 text-emerald-900 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60 font-semibold';
        statusBadge = '<span class="w-1.5 h-1.5 rounded-full bg-emerald-500 block mx-auto mt-1"></span>';
      } else if (this.availabilityMap.limited.includes(dateStr)) {
        statusClass = 'bg-amber-50 text-amber-900 border border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/60 font-semibold';
        statusBadge = '<span class="w-1.5 h-1.5 rounded-full bg-amber-500 block mx-auto mt-1"></span>';
      } else if (this.availabilityMap.unavailable.includes(dateStr)) {
        statusClass = 'bg-rose-50 text-rose-400 border border-rose-100 line-through dark:bg-rose-950/20 dark:text-rose-600 dark:border-rose-900/30 cursor-not-allowed';
      }

      if (this.selectedDateStr === dateStr) {
        statusClass += ' ring-2 ring-neutral-900 dark:ring-neutral-100 font-bold';
      }

      const dayCell = document.createElement('button');
      dayCell.type = 'button';
      dayCell.className = `p-2 rounded-md text-sm transition-all flex flex-col items-center justify-center min-h-[44px] ${statusClass}`;
      dayCell.innerHTML = `<span>${day}</span>${statusBadge}`;
      
      if (!this.availabilityMap.unavailable.includes(dateStr)) {
        dayCell.addEventListener('click', () => this.selectDate(dateStr));
      }

      calendarGrid.appendChild(dayCell);
    }
  },

  setupCalendarNavigation() {
    const prevBtn = document.getElementById('calendar-prev');
    const nextBtn = document.getElementById('calendar-next');

    prevBtn?.addEventListener('click', () => {
      this.currentDate.setMonth(this.currentDate.getMonth() - 1);
      this.renderCalendar();
    });

    nextBtn?.addEventListener('click', () => {
      this.currentDate.setMonth(this.currentDate.getMonth() + 1);
      this.renderCalendar();
    });
  },

  selectDate(dateStr) {
    this.selectedDateStr = dateStr;
    this.renderCalendar();

    const dateInput = document.getElementById('event-date');
    if (dateInput) {
      dateInput.value = dateStr;
      this.clearFieldError('event-date');
    }

    const statusDisplay = document.getElementById('date-status-message');
    if (statusDisplay) {
      statusDisplay.classList.remove('hidden');
      if (this.availabilityMap.available.includes(dateStr)) {
        statusDisplay.className = 'mt-3 p-3 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 dark:bg-emerald-950/50 dark:border-emerald-800 dark:text-emerald-300 text-sm flex items-center gap-2';
        statusDisplay.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i> Date <strong>${dateStr}</strong> is fully available for booking!`;
      } else if (this.availabilityMap.limited.includes(dateStr)) {
        statusDisplay.className = 'mt-3 p-3 rounded-md bg-amber-50 border border-amber-200 text-amber-800 dark:bg-amber-950/50 dark:border-amber-800 dark:text-amber-300 text-sm flex items-center gap-2';
        statusDisplay.innerHTML = `<i data-lucide="alert-triangle" class="w-4 h-4 text-amber-600"></i> Date <strong>${dateStr}</strong> has limited studio capacity remaining.`;
      } else {
        statusDisplay.className = 'mt-3 p-3 rounded-md bg-neutral-100 border border-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 text-sm flex items-center gap-2';
        statusDisplay.innerHTML = `<i data-lucide="info" class="w-4 h-4 text-neutral-500"></i> Selected date: <strong>${dateStr}</strong>. Submitting will check team availability.`;
      }
      if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
    }
  },

  setupFormValidation() {
    const bookingForm = document.getElementById('booking-form');
    if (!bookingForm) return;

    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;
      const fields = [
        { id: 'full-name', rules: ['required'] },
        { id: 'email', rules: ['required', 'email'] },
        { id: 'phone', rules: ['required', 'phone'] },
        { id: 'event-type', rules: ['required'] },
        { id: 'event-date', rules: ['required', 'future'] },
        { id: 'event-location', rules: ['required'] }
      ];

      fields.forEach(field => {
        const input = document.getElementById(field.id);
        if (!input) return;
        const val = input.value.trim();

        if (field.rules.includes('required') && !val) {
          this.showFieldError(field.id, 'This field is required');
          isValid = false;
        } else if (field.rules.includes('email') && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
          this.showFieldError(field.id, 'Please enter a valid email address');
          isValid = false;
        } else if (field.rules.includes('phone') && val && val.length < 7) {
          this.showFieldError(field.id, 'Please enter a valid phone number');
          isValid = false;
        } else if (field.rules.includes('future') && val) {
          const selectedDate = new Date(val);
          const today = new Date();
          today.setHours(0,0,0,0);
          if (selectedDate < today) {
            this.showFieldError(field.id, 'Event date cannot be in the past');
            isValid = false;
          } else {
            this.clearFieldError(field.id);
          }
        } else {
          this.clearFieldError(field.id);
        }
      });

      if (isValid) {
        // Collect form data
        const formData = {
          id: 'MSG-' + Math.floor(1000 + Math.random() * 9000),
          client: document.getElementById('full-name').value,
          email: document.getElementById('email').value,
          phone: document.getElementById('phone').value,
          eventType: document.getElementById('event-type').value,
          eventDate: document.getElementById('event-date').value,
          location: document.getElementById('event-location').value,
          package: document.getElementById('package-select')?.value || 'Signature',
          videography: document.getElementById('video-required')?.checked ? 'Yes' : 'No',
          message: document.getElementById('message')?.value || '',
          dateReceived: new Date().toISOString().split('T')[0],
          status: 'Unread'
        };

        // Save to localStorage so admin messages/bookings update live
        const existingMsgs = JSON.parse(localStorage.getItem('studioMessages') || '[]');
        existingMsgs.unshift(formData);
        localStorage.setItem('studioMessages', JSON.stringify(existingMsgs));

        // Show Success Modal State
        const successModal = document.getElementById('booking-success-modal');
        if (successModal) {
          successModal.classList.remove('hidden');
        } else {
          showToast('Availability request received! We will contact you shortly.', 'success');
        }
        bookingForm.reset();
        this.selectedDateStr = null;
        this.renderCalendar();
      }
    });
  },

  showFieldError(fieldId, errorMsg) {
    const errorEl = document.getElementById(`${fieldId}-error`);
    const inputEl = document.getElementById(fieldId);
    if (inputEl) {
      inputEl.classList.add('border-rose-500', 'focus:ring-rose-500');
    }
    if (errorEl) {
      errorEl.textContent = errorMsg;
      errorEl.classList.remove('hidden');
    }
  },

  clearFieldError(fieldId) {
    const errorEl = document.getElementById(`${fieldId}-error`);
    const inputEl = document.getElementById(fieldId);
    if (inputEl) {
      inputEl.classList.remove('border-rose-500', 'focus:ring-rose-500');
    }
    if (errorEl) {
      errorEl.classList.add('hidden');
    }
  }
};

document.addEventListener('DOMContentLoaded', () => BookingModule.init());
