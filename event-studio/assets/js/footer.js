// ==========================================================================
// CAPTURE STUDIO / FRAME & FABLE - Global Unified Footer Component
// Renders the standardized 4-column footer + CTA + Copyright bar on all public pages
// ==========================================================================

const FooterComponent = {
  render() {
    const footerContainer = document.getElementById('site-footer') || document.getElementById('footer-container');
    if (!footerContainer) return;

    footerContainer.className = "bg-brand-ivory text-brand-charcoal border-t border-neutral-200 transition-colors duration-300 mt-auto dark:bg-neutral-950 dark:text-neutral-300 dark:border-neutral-900";
    footerContainer.innerHTML = `
      <!-- PRE-FOOTER CTA SECTION -->
      <div class="border-b border-neutral-200 bg-brand-ivory/95 py-16 px-4 sm:px-6 lg:px-8 text-center dark:border-neutral-900 dark:bg-neutral-900/95">
        <div class="max-w-4xl mx-auto space-y-4">
          <span class="text-xs uppercase tracking-[0.25em] text-brand-accent font-mono">Start Your Experience</span>
          <h2 class="font-serif text-3xl sm:text-4xl font-semibold text-brand-charcoal dark:text-brand-ivory">Let's Create Something Beautiful.</h2>
          <p class="text-neutral-700 text-sm max-w-xl mx-auto font-light leading-relaxed dark:text-neutral-300">
            Have an upcoming wedding, event, or celebration? Let's talk about your vision.
          </p>
          <div class="pt-4">
            <a href="booking.html" class="inline-block px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold bg-brand-charcoal text-brand-ivory rounded shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-brand-ivory dark:text-brand-charcoal">
              Check Availability
            </a>
          </div>
        </div>
      </div>

      <!-- MAIN 4-COLUMN FOOTER CONTENT -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <!-- Column 1: STUDIO BRAND -->
          <div class="space-y-4">
            <a href="index.html" class="flex items-center gap-2 sm:gap-3 group inline-flex">
              <div class="w-7 h-7 sm:w-10 sm:h-10 bg-brand-ivory text-brand-charcoal flex items-center justify-center rounded-full font-serif font-bold text-xs sm:text-xl group-hover:scale-105 transition-transform shadow-sm flex-shrink-0">
                F
              </div>
              <div class="flex flex-col">
                <span class="font-serif text-sm sm:text-xl tracking-wider font-semibold uppercase text-brand-charcoal dark:text-brand-ivory leading-tight sm:leading-normal">Capture Studio</span>
                <span class="text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-neutral-500 dark:text-neutral-400 uppercase font-sans">Frame & Fable</span>
              </div>
            </a>
            <p class="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Capturing authentic moments through photography and cinematic storytelling for weddings, corporate events, birthdays, and special occasions.
            </p>
            
            <!-- Social Media Buttons with Crisp Vector Icons -->
            <div class="flex items-center gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500" aria-label="Instagram">
                <svg class="w-4 h-4 fill-current text-neutral-300" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500" aria-label="Facebook">
                <svg class="w-4 h-4 fill-current text-neutral-300" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500" aria-label="YouTube">
                <svg class="w-4 h-4 fill-current text-neutral-300" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-300 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500" aria-label="Pinterest">
                <svg class="w-4 h-4 fill-current text-neutral-300" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

          <!-- Column 2: QUICK LINKS -->
          <div class="space-y-4">
            <h3 class="font-serif text-brand-charcoal dark:text-brand-ivory text-base font-medium border-b border-neutral-200 dark:border-neutral-800 pb-2">Quick Links</h3>
            <ul class="space-y-2.5 text-xs text-neutral-700 dark:text-neutral-300">
              <li><a href="index.html" class="transition-colors">Home</a></li>
              <li><a href="about.html" class="transition-colors">About</a></li>
              <li><a href="services.html" class="transition-colors">Services</a></li>
              <li><a href="services.html#packages" class="font-semibold transition-colors">Experience Packages</a></li>
              <li><a href="portfolio.html" class="transition-colors">Portfolio</a></li>
              <li><a href="contact.html" class="transition-colors">Contact</a></li>
              <li><a href="booking.html" class="transition-colors">Check Availability</a></li>
            </ul>
          </div>

          <!-- Column 3: SERVICES -->
          <div class="space-y-4">
            <h3 class="font-serif text-brand-charcoal dark:text-brand-ivory text-base font-medium border-b border-neutral-200 dark:border-neutral-800 pb-2">Services & Offerings</h3>
            <ul class="space-y-2.5 text-xs text-neutral-700 dark:text-neutral-300">
              <li><a href="services.html#wedding-photography" class="transition-colors">Wedding Photography</a></li>
              <li><a href="services.html#wedding-videography" class="transition-colors">Wedding Videography</a></li>
              <li><a href="services.html#corporate-events" class="transition-colors">Corporate Events</a></li>
              <li><a href="services.html#birthday-events" class="transition-colors">Birthday Photography</a></li>
              <li><a href="services.html#event-videography" class="transition-colors">Event Videography</a></li>
              <li><a href="services.html#cinematic-films" class="transition-colors">Cinematic Films</a></li>
              <li><a href="coming-soon.html" class="transition-colors">Drone Aerial Videography</a></li>
              <li><a href="404.html" class="transition-colors">Live Event Streaming</a></li>
            </ul>
          </div>

          <!-- Column 4: STUDIO CONTACT -->
          <div class="space-y-4">
            <h3 class="font-serif text-brand-charcoal dark:text-brand-ivory text-base font-medium border-b border-neutral-200 dark:border-neutral-800 pb-2">Studio Contact</h3>
            <ul class="space-y-3 text-xs text-neutral-700 dark:text-neutral-300">
              <li class="flex items-start gap-3">
                <svg class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>123 Creative Avenue,<br>Hyderabad, India</span>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <a href="tel:+919876543210" class="transition-colors">+91 98765 43210</a>
              </li>
              <li class="flex items-center gap-3">
                <svg class="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href="mailto:hello@capturestudio.com" class="transition-colors">hello@capturestudio.com</a>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>Mon - Sat<br>9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <!-- FOOTER BOTTOM BAR -->
        <div class="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
          <div class="text-center sm:text-left rtl:sm:text-right">
            <p>&copy; 2026 Capture Studio. All rights reserved.</p>
          </div>
          <div class="text-center sm:text-right">
            <p class="text-neutral-400 font-medium">Developed by Abhivorn Technologies Pvt. Ltd.</p>
          </div>
        </div>
      </div>
    `;

    if (typeof renderAllIcons === 'function') {
      renderAllIcons();
    } else if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons();
    }
  }
};

document.addEventListener('DOMContentLoaded', () => FooterComponent.render());
