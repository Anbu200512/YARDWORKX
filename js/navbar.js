document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const isRtl = document.documentElement.dir === 'rtl';
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const isActive = (p) => path === p || (p === 'dashboards/user-dashboard.html' && path.includes('dashboard'));
  const isAuthPage = path === 'login.html' || path === 'signup.html';

  if (isAuthPage) {
    nav.innerHTML = `
    <nav id="mainNav" class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#E2E4E9] transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center h-16 md:h-20">
          <div class="flex-1 flex justify-start">
            <a href="index.html" class="flex items-center gap-2.5 group">
              <div class="w-9 h-9 rounded-lg bg-[#F97316] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#F97316]/30">
                <i class="fa-solid fa-toolbox text-[#151515] text-sm"></i>
              </div>
              <div>
                <span class="font-black text-xl text-[#F97316]">Yard<span class="text-[#F97316] logo-accent">Workx</span></span>
                <span class="block text-[10px] text-muted tracking-[0.2em] uppercase font-medium">Rental Equipment</span>
              </div>
            </a>
          </div>
          <div class="flex items-center gap-1.5">
            <button id="themeToggle" class="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E4E9] flex items-center justify-center text-muted hover:bg-[#F97316] hover:text-[#151515] hover:border-[#F97316] hover:shadow-sm hover:shadow-[#F97316]/20 transition-all duration-200 active:scale-95" title="Toggle dark mode">
              <i class="fa-solid fa-moon text-sm"></i>
            </button>
            <button id="rtlToggle" class="hidden sm:flex w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E4E9] flex items-center justify-center text-muted hover:bg-[#F97316] hover:text-[#151515] hover:border-[#F97316] hover:shadow-sm hover:shadow-[#F97316]/20 transition-all duration-200 active:scale-95" title="Toggle RTL/LTR">
              <i class="fa-solid fa-arrow-right-arrow-left text-sm"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="h-0.5 bg-[#F97316] relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-[#FBBF24] to-transparent animate-nav-line"></div>
      </div>
    </nav>`;
  } else {
    nav.innerHTML = `
    <nav id="mainNav" class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#E2E4E9] transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center h-16 md:h-20">
          <div class="flex-1 flex justify-start">
            <a href="index.html" class="flex items-center gap-2.5 group">
              <div class="w-9 h-9 rounded-lg bg-[#F97316] flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#F97316]/30">
                <i class="fa-solid fa-toolbox text-[#151515] text-sm"></i>
              </div>
              <div>
                <span class="font-black text-xl text-[#F97316]">Yard<span class="text-[#F97316] logo-accent">Workx</span></span>
                <span class="block text-[10px] text-muted tracking-[0.2em] uppercase font-medium">Rental Equipment</span>
              </div>
            </a>
          </div>
            <div id="desktopNav" class="hidden lg:flex items-center justify-center flex-1 gap-1 -ml-12">
            <div class="relative group">
              <button class="px-3 py-2 rounded-xl text-sm font-semibold text-muted hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all flex items-center gap-1 relative ${path === 'index.html' || path === 'home2.html' ? 'text-[#F97316] bg-[#F97316]/10' : ''}">
                Home <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-200 group-hover:rotate-180"></i>
                <span class="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-[#F97316] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ${path === 'index.html' || path === 'home2.html' ? 'scale-x-100' : ''}"></span>
              </button>
              <div class="absolute top-full left-0 mt-1 w-44 bg-white rounded-2xl border border-[#E2E4E9] shadow-xl opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 py-2 z-50">
                <a href="index.html" class="block px-4 py-2.5 text-sm font-semibold text-muted hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all ${path === 'index.html' ? 'text-[#F97316]' : ''}">Home 1</a>
                <a href="home2.html" class="block px-4 py-2.5 text-sm font-semibold text-muted hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all ${path === 'home2.html' ? 'text-[#F97316]' : ''}">Home 2</a>
              </div>
            </div>
            <a href="about.html" class="px-3 py-2 rounded-xl text-sm font-semibold relative transition-all ${isActive('about.html') ? 'text-[#F97316] bg-[#F97316]/10' : 'text-muted hover:text-[#F97316] hover:bg-[#F97316]/5'}">
              About
              <span class="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-[#F97316] rounded-full scale-x-0 hover:scale-x-100 transition-transform duration-200 ${isActive('about.html') ? 'scale-x-100' : ''}"></span>
            </a>
            <a href="pricing.html" class="px-3 py-2 rounded-xl text-sm font-semibold relative transition-all ${isActive('pricing.html') ? 'text-[#F97316] bg-[#F97316]/10' : 'text-muted hover:text-[#F97316] hover:bg-[#F97316]/5'}">
              Pricing
              <span class="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-[#F97316] rounded-full scale-x-0 hover:scale-x-100 transition-transform duration-200 ${isActive('pricing.html') ? 'scale-x-100' : ''}"></span>
            </a>
            <a href="rentals.html" class="px-3 py-2 rounded-xl text-sm font-semibold relative transition-all ${isActive('rentals.html') ? 'text-[#F97316] bg-[#F97316]/10' : 'text-muted hover:text-[#F97316] hover:bg-[#F97316]/5'}">
              Rentals
              <span class="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-[#F97316] rounded-full scale-x-0 hover:scale-x-100 transition-transform duration-200 ${isActive('rentals.html') ? 'scale-x-100' : ''}"></span>
            </a>
            <a href="safety.html" class="px-3 py-2 rounded-xl text-sm font-semibold relative transition-all ${isActive('safety.html') ? 'text-[#F97316] bg-[#F97316]/10' : 'text-muted hover:text-[#F97316] hover:bg-[#F97316]/5'}">
              Safety
              <span class="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-[#F97316] rounded-full scale-x-0 hover:scale-x-100 transition-transform duration-200 ${isActive('safety.html') ? 'scale-x-100' : ''}"></span>
            </a>
            <a href="gallery.html" class="px-3 py-2 rounded-xl text-sm font-semibold relative transition-all ${isActive('gallery.html') ? 'text-[#F97316] bg-[#F97316]/10' : 'text-muted hover:text-[#F97316] hover:bg-[#F97316]/5'}">
              Gallery
              <span class="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-[#F97316] rounded-full scale-x-0 hover:scale-x-100 transition-transform duration-200 ${isActive('gallery.html') ? 'scale-x-100' : ''}"></span>
            </a>
            <a href="contact.html" class="px-3 py-2 rounded-xl text-sm font-semibold relative transition-all ${isActive('contact.html') ? 'text-[#F97316] bg-[#F97316]/10' : 'text-muted hover:text-[#F97316] hover:bg-[#F97316]/5'}">
              Contact
              <span class="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-[#F97316] rounded-full scale-x-0 hover:scale-x-100 transition-transform duration-200 ${isActive('contact.html') ? 'scale-x-100' : ''}"></span>
            </a>
            <div id="dashboardDropdown" class="relative group mr-6">
              <button class="px-3 py-2 rounded-xl text-sm font-semibold text-muted hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all flex items-center gap-1 relative ${path.includes('dashboard') ? 'text-[#F97316] bg-[#F97316]/10' : ''}">
                Dashboard <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-200 group-hover:rotate-180"></i>
                <span class="absolute -bottom-0.5 left-2 right-2 h-0.5 bg-[#F97316] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ${path.includes('dashboard') ? 'scale-x-100' : ''}"></span>
              </button>
              <div class="absolute top-full left-0 mt-1 w-48 bg-white rounded-2xl border border-[#E2E4E9] shadow-xl opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 py-2 z-50">
                <a href="dashboards/user-dashboard.html" class="block px-4 py-2.5 text-sm font-semibold text-muted hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all ${path === 'user-dashboard.html' ? 'text-[#F97316]' : ''}">User Dashboard</a>
                <a href="dashboards/admin-dashboard.html" class="block px-4 py-2.5 text-sm font-semibold text-muted hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all ${path === 'admin-dashboard.html' ? 'text-[#F97316]' : ''}">Admin Dashboard</a>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-1.5 flex-1 justify-end">
            <button id="themeToggle" class="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E4E9] flex items-center justify-center text-muted hover:bg-[#F97316] hover:text-[#151515] hover:border-[#F97316] hover:shadow-sm hover:shadow-[#F97316]/20 transition-all duration-200 active:scale-95" title="Toggle dark mode">
              <i class="fa-solid fa-moon text-sm"></i>
            </button>
            <button id="rtlToggle" class="hidden sm:flex w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E4E9] flex items-center justify-center text-muted hover:bg-[#F97316] hover:text-[#151515] hover:border-[#F97316] hover:shadow-sm hover:shadow-[#F97316]/20 transition-all duration-200 active:scale-95" title="Toggle RTL/LTR">
              <i class="fa-solid fa-arrow-right-arrow-left text-sm"></i>
            </button>
            <div class="w-px h-6 bg-[#E2E4E9] mx-1.5"></div>
            <a href="login.html" class="bg-[#F97316] hover:bg-[#EA580C] text-[#151515] font-bold px-5 py-2.5 rounded-xl transition-all duration-200 text-sm shadow-sm hover:shadow-md hover:shadow-[#F97316]/30 active:scale-95">Login</a>
            <a href="signup.html" class="bg-[#F97316] hover:bg-[#EA580C] text-[#151515] font-bold px-5 py-2.5 rounded-xl transition-all duration-200 text-sm shadow-sm hover:shadow-md hover:shadow-[#F97316]/30 active:scale-95">Sign Up</a>
            <button id="mobileMenuBtn" class="lg:hidden w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E4E9] flex items-center justify-center text-muted hover:bg-[#F97316] hover:text-[#151515] hover:border-[#F97316] hover:shadow-sm hover:shadow-[#F97316]/20 transition-all duration-200 active:scale-95">
              <i class="fa-solid fa-bars text-sm"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="h-0.5 bg-[#F97316] relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-[#FBBF24] to-transparent animate-nav-line"></div>
      </div>
    </nav>

    <!-- MOBILE MENU OVERLAY -->
    <div id="mobileOverlay" class="fixed inset-0 z-40 bg-black/50 opacity-0 invisible transition-all duration-300 lg:hidden"></div>

    <!-- MOBILE MENU PANEL -->
    <div id="mobilePanel" class="fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl border-l border-[#E2E4E9] translate-x-full transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto">
      <div class="flex items-center justify-between p-4 border-b border-[#E2E4E9]">
        <a href="index.html" class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-[#F97316] flex items-center justify-center">
            <i class="fa-solid fa-toolbox text-[#151515] text-xs"></i>
          </div>
          <div>
            <span class="font-black text-lg text-[#F97316]">Yard<span class="text-[#F97316] logo-accent">Workx</span></span>
            <span class="block text-[9px] text-muted tracking-[0.2em] uppercase font-medium">Rental Equipment</span>
          </div>
        </a>
        <button id="mobileCloseBtn" class="w-8 h-8 rounded-lg bg-[#F8FAFC] border border-[#E2E4E9] flex items-center justify-center text-muted hover:text-[#F97316] transition-all">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="p-4 space-y-1">
        <div class="mb-3 pb-3 border-b border-[#E2E4E9]">
          <p class="text-xs font-semibold text-muted mb-2">Pages</p>
          <button class="mobile-dropdown-toggle w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-muted hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all">
            Home <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-200"></i>
          </button>
          <div class="mobile-dropdown hidden pl-4 space-y-0.5">
            <a href="index.html" class="block px-3 py-2 rounded-lg text-sm font-semibold text-muted hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all ${path === 'index.html' ? 'text-[#F97316] bg-[#F97316]/10' : ''}">Home 1</a>
            <a href="home2.html" class="block px-3 py-2 rounded-lg text-sm font-semibold text-muted hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all ${path === 'home2.html' ? 'text-[#F97316] bg-[#F97316]/10' : ''}">Home 2</a>
          </div>
          <a href="about.html" class="block px-3 py-2.5 rounded-xl text-sm font-semibold ${isActive('about.html') ? 'text-[#F97316] bg-[#F97316]/10' : 'text-muted hover:text-[#F97316] hover:bg-[#F97316]/5'} transition-all">About</a>
          <a href="pricing.html" class="block px-3 py-2.5 rounded-xl text-sm font-semibold ${isActive('pricing.html') ? 'text-[#F97316] bg-[#F97316]/10' : 'text-muted hover:text-[#F97316] hover:bg-[#F97316]/5'} transition-all">Pricing</a>
          <a href="rentals.html" class="block px-3 py-2.5 rounded-xl text-sm font-semibold ${isActive('rentals.html') ? 'text-[#F97316] bg-[#F97316]/10' : 'text-muted hover:text-[#F97316] hover:bg-[#F97316]/5'} transition-all">Rentals</a>
          <a href="safety.html" class="block px-3 py-2.5 rounded-xl text-sm font-semibold ${isActive('safety.html') ? 'text-[#F97316] bg-[#F97316]/10' : 'text-muted hover:text-[#F97316] hover:bg-[#F97316]/5'} transition-all">Safety</a>
          <a href="gallery.html" class="block px-3 py-2.5 rounded-xl text-sm font-semibold ${isActive('gallery.html') ? 'text-[#F97316] bg-[#F97316]/10' : 'text-muted hover:text-[#F97316] hover:bg-[#F97316]/5'} transition-all">Gallery</a>
          <a href="contact.html" class="block px-3 py-2.5 rounded-xl text-sm font-semibold ${isActive('contact.html') ? 'text-[#F97316] bg-[#F97316]/10' : 'text-muted hover:text-[#F97316] hover:bg-[#F97316]/5'} transition-all">Contact</a>
          <button class="mobile-dropdown-toggle w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-muted hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all">
            Dashboard <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-200"></i>
          </button>
          <div class="mobile-dropdown hidden pl-4 space-y-0.5">
            <a href="dashboards/user-dashboard.html" class="block px-3 py-2 rounded-lg text-sm font-semibold text-muted hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all ${path === 'user-dashboard.html' ? 'text-[#F97316] bg-[#F97316]/10' : ''}">User Dashboard</a>
            <a href="dashboards/admin-dashboard.html" class="block px-3 py-2 rounded-lg text-sm font-semibold text-muted hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all ${path === 'admin-dashboard.html' ? 'text-[#F97316] bg-[#F97316]/10' : ''}">Admin Dashboard</a>
          </div>
        </div>
        <div class="pt-3 space-y-2">
          <a href="login.html" class="block w-full text-center px-4 py-2.5 rounded-xl text-sm font-semibold text-muted border border-[#E2E4E9] hover:border-[#F97316] hover:text-[#F97316] transition-all">Login</a>
          <a href="signup.html" class="block w-full text-center px-4 py-2.5 rounded-xl text-sm font-semibold bg-[#F97316] hover:bg-[#EA580C] text-[#151515] transition-all">Sign Up</a>
        </div>
      </div>
    </div>
  `;
  }

  const mainNav = document.getElementById('mainNav');
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileClose = document.getElementById('mobileCloseBtn');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobilePanel = document.getElementById('mobilePanel');

  let mobileOpen = false;

  function openMobile() {
    mobileOpen = true;
    mobilePanel.classList.remove('translate-x-full', '-translate-x-full');
    mobileOverlay.classList.remove('opacity-0', 'invisible');
    document.body.style.overflow = 'hidden';
  }

  function closeMobile() {
    mobileOpen = false;
    const isRtl = document.documentElement.dir === 'rtl';
    mobilePanel.classList.add(isRtl ? '-translate-x-full' : 'translate-x-full');
    mobileOverlay.classList.add('opacity-0', 'invisible');
    document.body.style.overflow = '';
  }

  mobileBtn?.addEventListener('click', openMobile);
  mobileClose?.addEventListener('click', closeMobile);
  mobileOverlay?.addEventListener('click', closeMobile);

  document.querySelectorAll('.mobile-dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const dropdown = btn.nextElementSibling;
      const icon = btn.querySelector('.fa-chevron-down');
      if (dropdown) {
        dropdown.classList.toggle('hidden');
        if (icon) icon.classList.toggle('rotate-180');
      }
    });
  });

  document.getElementById('themeToggle')?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('#themeToggle i');
    if (icon) icon.className = document.body.classList.contains('dark-mode') ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  });

  function applyRtl(dir) {
    const html = document.documentElement;
    const isRtl = dir === 'rtl';
    const flipIcons = document.querySelectorAll('.fa-arrow-right, .fa-arrow-left, .fa-arrow-right-to-bracket, .fa-arrow-left-from-bracket, .fa-chevron-right, .fa-chevron-left, .fa-angle-right, .fa-angle-left');
    flipIcons.forEach(icon => {
      if (icon.classList.contains('fa-arrow-right')) icon.classList.replace('fa-arrow-right', 'fa-arrow-left');
      else if (icon.classList.contains('fa-arrow-left')) icon.classList.replace('fa-arrow-left', 'fa-arrow-right');
      else if (icon.classList.contains('fa-arrow-right-to-bracket')) icon.classList.replace('fa-arrow-right-to-bracket', 'fa-arrow-left-from-bracket');
      else if (icon.classList.contains('fa-arrow-left-from-bracket')) icon.classList.replace('fa-arrow-left-from-bracket', 'fa-arrow-right-to-bracket');
      else if (icon.classList.contains('fa-chevron-right')) icon.classList.replace('fa-chevron-right', 'fa-chevron-left');
      else if (icon.classList.contains('fa-chevron-left')) icon.classList.replace('fa-chevron-left', 'fa-chevron-right');
      else if (icon.classList.contains('fa-angle-right')) icon.classList.replace('fa-angle-right', 'fa-angle-left');
      else if (icon.classList.contains('fa-angle-left')) icon.classList.replace('fa-angle-left', 'fa-angle-right');
    });
    html.style.transition = 'all 0.35s ease';
    html.dir = dir;
    html.setAttribute('lang', isRtl ? 'ar' : 'en');
    document.body.classList.toggle('rtl-mode', isRtl);
    const toggle = document.querySelector('#rtlToggle i');
    if (toggle) toggle.className = 'fa-solid fa-arrow-right-arrow-left';
    localStorage.setItem('yw-rtl', dir);
    const mobilePanel = document.getElementById('mobilePanel');
    if (mobilePanel) {
      if (isRtl) {
        mobilePanel.classList.remove('right-0', 'border-l', 'translate-x-full');
        mobilePanel.classList.add('left-0', 'border-r', '-translate-x-full');
      } else {
        mobilePanel.classList.remove('left-0', 'border-r', '-translate-x-full');
        mobilePanel.classList.add('right-0', 'border-l', 'translate-x-full');
      }
    }
    const desktopNav = document.getElementById('desktopNav');
    if (desktopNav) {
      desktopNav.classList.toggle('-ml-12', !isRtl);
      desktopNav.classList.toggle('-mr-12', isRtl);
    }
    const dashDropdown = document.getElementById('dashboardDropdown');
    if (dashDropdown) {
      dashDropdown.classList.toggle('mr-6', !isRtl);
      dashDropdown.classList.toggle('ml-6', isRtl);
    }
    setTimeout(() => html.style.transition = '', 400);
  }

  const savedRtl = localStorage.getItem('yw-rtl');
  if (savedRtl && savedRtl !== 'ltr') { applyRtl('rtl'); }

  document.getElementById('rtlToggle')?.addEventListener('click', () => {
    const html = document.documentElement;
    applyRtl(html.dir === 'rtl' ? 'ltr' : 'rtl');
  });

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (!mainNav) return;
    if (currentScroll > 20) {
      mainNav.classList.add('shadow-md', 'bg-white/95');
    } else {
      mainNav.classList.remove('shadow-md', 'bg-white/95');
    }
    lastScroll = currentScroll;
  }, { passive: true });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileOpen) closeMobile();
  });
});
