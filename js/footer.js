document.addEventListener('DOMContentLoaded', () => {
  const footer = document.getElementById('footer');
  if (!footer) return;
  footer.innerHTML = `
    <div class="relative overflow-hidden">
      <div class="h-[4px] bg-gradient-to-r from-transparent via-[#F97316] via-[#EA580C] to-transparent bg-[length:200%_100%] animate-slide"></div>
    </div>
    <footer class="bg-white relative">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <div class="grid sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          <div class="lg:col-span-4">
            <div class="flex items-center gap-3 mb-5">
              <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F97316] to-[#EA580C] flex items-center justify-center shadow-lg shadow-[#F97316]/25">
                <i class="fa-solid fa-toolbox text-[#151515] text-base"></i>
              </div>
              <div>
                <span class="font-black text-xl text-[#F97316] tracking-tight">Yard<span class="text-[#F97316]">Workx</span></span>
                <span class="block text-[10px] text-muted tracking-[0.2em] uppercase font-medium">Rental Equipment</span>
              </div>
            </div>
            <p class="text-sm text-muted leading-relaxed max-w-xs">Local tool and heavy equipment rental hub trusted by contractors and DIYers nationwide.</p>
            <div class="flex items-center gap-3 mt-5">
              <a href="tel:+15551234567" class="flex items-center gap-2 text-sm text-muted hover:text-[#F97316] transition-colors">
                <i class="fa-solid fa-phone text-[#F97316] text-xs"></i>
                <span>(555) 123-4567</span>
              </a>
            </div>
            <div class="flex items-center gap-3 mt-3">
              <a href="mailto:info@yardworkx.com" class="flex items-center gap-2 text-sm text-muted hover:text-[#F97316] transition-colors">
                <i class="fa-solid fa-envelope text-[#F97316] text-xs"></i>
                <span>info@yardworkx.com</span>
              </a>
            </div>
            <div class="flex gap-2.5 mt-6">
              <a href="#" class="w-9 h-9 rounded-lg bg-[#F8FAFC] border border-[#E2E4E9] flex items-center justify-center text-muted hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all duration-300"><i class="fa-brands fa-facebook-f text-xs dark-text-black"></i></a>
              <a href="#" class="w-9 h-9 rounded-lg bg-[#F8FAFC] border border-[#E2E4E9] flex items-center justify-center text-muted hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all duration-300"><i class="fa-brands fa-instagram text-xs dark-text-black"></i></a>
              <a href="#" class="w-9 h-9 rounded-lg bg-[#F8FAFC] border border-[#E2E4E9] flex items-center justify-center text-muted hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all duration-300"><i class="fa-brands fa-x-twitter text-xs dark-text-black"></i></a>
              <a href="#" class="w-9 h-9 rounded-lg bg-[#F8FAFC] border border-[#E2E4E9] flex items-center justify-center text-muted hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all duration-300"><i class="fa-brands fa-linkedin-in text-xs dark-text-black"></i></a>
            </div>
          </div>
          <div class="lg:col-span-2">
            <h4 class="font-bold text-[#F97316] text-sm mb-6 relative inline-block">
              Equipment
              <span class="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-[#F97316] rounded-full"></span>
            </h4>
            <ul class="space-y-3.5 text-sm">
              <li><a href="categories.html" class="text-muted hover:text-[#F97316] transition-colors duration-200 flex items-center gap-2.5"><i class="fa-solid fa-chevron-right text-[10px] text-[#F97316] dark-text-black"></i>Heavy Equipment</a></li>
              <li><a href="categories.html" class="text-muted hover:text-[#F97316] transition-colors duration-200 flex items-center gap-2.5"><i class="fa-solid fa-chevron-right text-[10px] text-[#F97316] dark-text-black"></i>Power Tools</a></li>
              <li><a href="categories.html" class="text-muted hover:text-[#F97316] transition-colors duration-200 flex items-center gap-2.5"><i class="fa-solid fa-chevron-right text-[10px] text-[#F97316] dark-text-black"></i>Hand Tools</a></li>
              <li><a href="categories.html" class="text-muted hover:text-[#F97316] transition-colors duration-200 flex items-center gap-2.5"><i class="fa-solid fa-chevron-right text-[10px] text-[#F97316] dark-text-black"></i>Landscaping</a></li>
              <li><a href="categories.html" class="text-muted hover:text-[#F97316] transition-colors duration-200 flex items-center gap-2.5"><i class="fa-solid fa-chevron-right text-[10px] text-[#F97316] dark-text-black"></i>Safety Gear</a></li>
            </ul>
          </div>
          <div class="lg:col-span-3">
            <h4 class="font-bold text-[#F97316] text-sm mb-6 relative inline-block">
              Company
              <span class="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-[#F97316] rounded-full"></span>
            </h4>
            <ul class="space-y-3.5 text-sm">
              <li><a href="about.html" class="text-muted hover:text-[#F97316] transition-colors duration-200 flex items-center gap-2.5"><i class="fa-solid fa-chevron-right text-[10px] text-[#F97316] dark-text-black"></i>About Us</a></li>
              <li><a href="contact.html" class="text-muted hover:text-[#F97316] transition-colors duration-200 flex items-center gap-2.5"><i class="fa-solid fa-chevron-right text-[10px] text-[#F97316] dark-text-black"></i>Contact</a></li>
              <li><a href="support.html" class="text-muted hover:text-[#F97316] transition-colors duration-200 flex items-center gap-2.5"><i class="fa-solid fa-chevron-right text-[10px] text-[#F97316] dark-text-black"></i>Support</a></li>
              <li><a href="#" class="text-muted hover:text-[#F97316] transition-colors duration-200 flex items-center gap-2.5"><i class="fa-solid fa-chevron-right text-[10px] text-[#F97316] dark-text-black"></i>Careers</a></li>
              <li><a href="#" class="text-muted hover:text-[#F97316] transition-colors duration-200 flex items-center gap-2.5"><i class="fa-solid fa-chevron-right text-[10px] text-[#F97316] dark-text-black"></i>Locations</a></li>
            </ul>
          </div>

          <div class="lg:col-span-3">
            <h4 class="font-bold text-[#F97316] text-sm mb-6 relative inline-block">
              Stay Updated
              <span class="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-[#F97316] rounded-full"></span>
            </h4>
            <p class="text-xs text-muted mb-5 leading-relaxed">Get deals and new equipment alerts.</p>
            <form class="flex flex-col gap-3">
              <input type="email" placeholder="Your email" class="px-4 py-2.5 rounded-xl bg-white border border-[#E2E4E9] text-sm text-[#F97316] outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] placeholder:text-muted transition-all">
              <button class="px-4 py-2.5 rounded-xl bg-[#F97316] text-white text-sm font-semibold hover:bg-[#EA580C] transition-all shadow-lg shadow-[#F97316]/20">
                Subscribe <i class="fa-solid fa-paper-plane ml-1.5 text-xs"></i>
              </button>
            </form>
            <div class="flex items-center gap-2 mt-4">
              <i class="fa-regular fa-clock text-muted text-xs"></i>
              <span class="text-[10px] text-muted">Mon–Sat 7AM–6PM</span>
            </div>
          </div>
        </div>
        <div class="mt-10 pt-6 border-t border-[#E2E4E9] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-4 text-xs text-muted">
            <p>&copy; 2026 YardWorkx. All rights reserved.</p>
            <span class="hidden sm:inline w-px h-3 bg-[#E2E4E9]"></span>
            <a href="#" class="hover:text-[#F97316] transition-colors">Privacy</a>
            <span class="w-px h-3 bg-[#E2E4E9]"></span>
            <a href="#" class="hover:text-[#F97316] transition-colors">Terms</a>
          </div>
          <div class="flex items-center gap-3">
            <div class="flex items-center gap-2.5">
              <span class="text-xs text-muted">We accept</span>
              <i class="fa-brands fa-cc-visa text-lg text-[#1A1F71]"></i>
              <i class="fa-brands fa-cc-mastercard text-lg text-[#EB001B]"></i>
              <i class="fa-brands fa-cc-amex text-lg text-[#2E77BC]"></i>
              <i class="fa-brands fa-cc-paypal text-lg text-[#003087]"></i>
            </div>
            <span class="w-px h-5 bg-[#E2E4E9] mx-1"></span>
            <button onclick="window.scrollTo({top:0,behavior:'smooth'})" class="w-9 h-9 rounded-xl bg-[#F8FAFC] border border-[#E2E4E9] flex items-center justify-center text-muted hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all duration-300" aria-label="Back to top">
              <i class="fa-solid fa-arrow-up text-xs dark-text-black"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  `;
});
