/**
 * YardWorkx - Main Navbar Controller
 * Handles responsive navigation, mobile menu, theme, RTL, and dropdowns.
 * Version: 2.0.0
 */

(function() {
  'use strict';

  // ─── DOM References ──────────────────────────────────────────────────────────
  const nav = document.getElementById('navbar');
  if (!nav) return;

  const path = window.location.pathname.split('/').pop() || 'index.html';
  const isAuthPage = ['login.html', 'signup.html'].includes(path);

  // ─── Utility Helpers ──────────────────────────────────────────────────────
  const isActive = (p) => {
    if (p === 'dashboards/user-dashboard.html') {
      return path.includes('dashboard');
    }
    return path === p;
  };

  // ─── Inject Navbar Styles (once) ──────────────────────────────────────────
  if (!document.getElementById('navbar-styles')) {
    const styleTag = document.createElement('style');
    styleTag.id = 'navbar-styles';
    styleTag.textContent = `
      .mobile-dropdown {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.35s ease, opacity 0.3s ease, padding 0.3s ease;
        opacity: 0;
        padding-top: 0;
        padding-bottom: 0;
      }
      .mobile-dropdown.open {
        max-height: 400px;
        opacity: 1;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
      }
      
      /* RTL styles - only affects text direction, not layout */
      body.rtl-mode {
        direction: rtl;
        text-align: right;
      }
      body.ltr-mode {
        direction: ltr;
        text-align: left;
      }
      
      /* Mobile panel always stays on right side */
      .mobile-panel {
        right: 0 !important;
        left: auto !important;
        transform: translateX(100%) !important;
        border-left: 1px solid #E2E4E9 !important;
        border-right: none !important;
      }
      
      .mobile-panel.open {
        transform: translateX(0) !important;
      }
      
      /* RTL content adjustments - only for text, not layout */
      .rtl-mode .mobile-panel {
        direction: rtl;
        text-align: right;
      }
      
      .rtl-mode .mobile-panel .flex {
        direction: rtl;
      }
      
      .rtl-mode .mobile-panel .flex-row {
        flex-direction: row-reverse;
      }
      
      /* Fix for icon rotations in RTL */
      .rtl-mode .fa-chevron-right,
      .rtl-mode .fa-chevron-left,
      .rtl-mode .fa-arrow-right,
      .rtl-mode .fa-arrow-left,
      .rtl-mode .fa-arrow-right-to-bracket,
      .rtl-mode .fa-arrow-left-from-bracket,
      .rtl-mode .fa-right-to-bracket,
      .rtl-mode .fa-left-to-bracket,
      .rtl-mode .fa-arrow-right-from-bracket,
      .rtl-mode .fa-arrow-left-to-bracket,
      .rtl-mode .fa-right-from-bracket,
      .rtl-mode .fa-left-from-bracket {
        transform: scaleX(-1);
      }
      .rtl-mode .fa-arrow-right-arrow-left {
        transform: rotate(0deg);
      }
      
      /* small screen tweaks */
      @media (max-width: 640px) {
        .nav-actions .nav-btn { width: 2.25rem; height: 2.25rem; }
      }
    `;
    document.head.appendChild(styleTag);
  }

  // ─── Build Navbar HTML ────────────────────────────────────────────────────
  const buildNavbar = () => {
    if (isAuthPage) {
      return `
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
                <button id="rtlToggle" class="flex w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E4E9] items-center justify-center text-muted hover:bg-[#F97316] hover:text-[#151515] hover:border-[#F97316] hover:shadow-sm hover:shadow-[#F97316]/20 transition-all duration-200 active:scale-95" title="Toggle RTL/LTR">
                  <i class="fa-solid fa-arrow-right-arrow-left text-sm"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="h-0.5 bg-[#F97316] relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-[#FBBF24] to-transparent animate-nav-line"></div>
          </div>
        </nav>
      `;
    }

    // ─── Full Navbar (all pages except auth) ──────────────────────────────
    return `
      <nav id="mainNav" class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#E2E4E9] transition-all duration-300">
        <div class="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div class="flex items-center h-14 sm:h-16 md:h-20">
            <!-- Logo -->
            <div class="flex items-center flex-1">
              <a href="index.html" class="flex items-center gap-2 sm:gap-3 group">
                <div class="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-[#F97316] to-[#EA580C] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#F97316]/25 transition-transform duration-300 group-hover:scale-105">
                  <i class="fa-solid fa-toolbox text-sm sm:text-base text-[#151515]"></i>
                </div>
                <div>
                  <span class="font-black text-base sm:text-lg md:text-xl text-[#F97316] tracking-tight leading-none">Yard<span class="text-[#F97316]">Workx</span></span>
                  <span class="block text-[9px] sm:text-[10px] text-muted tracking-[0.2em] uppercase font-medium leading-tight">Rental Equipment</span>
                </div>
              </a>
            </div>

            <!-- Desktop Navigation -->
            <div id="desktopNav" class="hidden xl:flex items-center justify-center gap-1 lg:gap-1.5 xl:gap-2">
              <!-- Home Dropdown -->
              <div class="relative group">
                <button class="px-1.5 lg:px-2 xl:px-3 py-2 rounded-xl text-xs lg:text-sm font-semibold text-muted hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all flex items-center gap-1 relative ${path === 'index.html' || path === 'home2.html' ? 'text-[#F97316] bg-[#F97316]/10' : ''}">
                  Home <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-200 group-hover:rotate-180"></i>
                  <span class="absolute -bottom-0.5 left-1.5 lg:left-2 right-1.5 lg:right-2 h-0.5 bg-[#F97316] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ${path === 'index.html' || path === 'home2.html' ? 'scale-x-100' : ''}"></span>
                </button>
                <div class="absolute top-full left-0 mt-1 w-44 bg-white rounded-2xl border border-[#E2E4E9] shadow-xl opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 py-2 z-50">
                  <a href="index.html" class="block px-4 py-2.5 text-sm font-semibold text-muted hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all ${path === 'index.html' ? 'text-[#F97316]' : ''}">Home 1</a>
                  <a href="home2.html" class="block px-4 py-2.5 text-sm font-semibold text-muted hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all ${path === 'home2.html' ? 'text-[#F97316]' : ''}">Home 2</a>
                </div>
              </div>

              <!-- Static Links -->
              ${['about', 'pricing', 'rentals', 'safety', 'gallery', 'contact'].map(page => `
                <a href="${page}.html" class="px-1.5 lg:px-2 xl:px-3 py-2 rounded-xl text-xs lg:text-sm font-semibold relative transition-all ${isActive(`${page}.html`) ? 'text-[#F97316] bg-[#F97316]/10' : 'text-muted hover:text-[#F97316] hover:bg-[#F97316]/5'}">
                  ${page.charAt(0).toUpperCase() + page.slice(1)}
                  <span class="absolute -bottom-0.5 left-1.5 lg:left-2 right-1.5 lg:right-2 h-0.5 bg-[#F97316] rounded-full scale-x-0 hover:scale-x-100 transition-transform duration-200 ${isActive(`${page}.html`) ? 'scale-x-100' : ''}"></span>
                </a>
              `).join('')}

              <!-- Dashboard Dropdown -->
              <div id="dashboardDropdown" class="relative group">
                <button class="px-1.5 lg:px-2 xl:px-3 py-2 rounded-xl text-xs lg:text-sm font-semibold text-muted hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all flex items-center gap-1 relative ${path.includes('dashboard') ? 'text-[#F97316] bg-[#F97316]/10' : ''}">
                  Dashboard <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-200 group-hover:rotate-180"></i>
                  <span class="absolute -bottom-0.5 left-1.5 lg:left-2 right-1.5 lg:right-2 h-0.5 bg-[#F97316] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ${path.includes('dashboard') ? 'scale-x-100' : ''}"></span>
                </button>
                <div class="absolute top-full left-0 mt-1 w-48 bg-white rounded-2xl border border-[#E2E4E9] shadow-xl opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 py-2 z-50">
                  <a href="dashboards/user-dashboard.html" class="block px-4 py-2.5 text-sm font-semibold text-muted hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all ${path === 'user-dashboard.html' ? 'text-[#F97316]' : ''}">User Dashboard</a>
                  <a href="dashboards/admin-dashboard.html" class="block px-4 py-2.5 text-sm font-semibold text-muted hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all ${path === 'admin-dashboard.html' ? 'text-[#F97316]' : ''}">Admin Dashboard</a>
                </div>
              </div>
            </div>

            <!-- Desktop Right Actions -->
            <div class="hidden xl:flex items-center justify-end gap-1.5 flex-1 nav-actions">
              <button id="themeToggle" class="nav-btn w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E4E9] flex items-center justify-center text-muted hover:bg-[#F97316] hover:text-[#151515] hover:border-[#F97316] hover:shadow-sm hover:shadow-[#F97316]/20 transition-all duration-200 active:scale-95" title="Toggle dark mode">
                <i class="fa-solid fa-moon text-sm"></i>
              </button>
              <button id="rtlToggle" class="nav-btn w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E4E9] flex items-center justify-center text-muted hover:bg-[#F97316] hover:text-[#151515] hover:border-[#F97316] hover:shadow-sm hover:shadow-[#F97316]/20 transition-all duration-200 active:scale-95" title="Toggle RTL/LTR">
                <i class="fa-solid fa-arrow-right-arrow-left text-sm"></i>
              </button>
              <div class="w-px h-6 bg-[#E2E4E9] mx-1.5"></div>
              <a href="login.html" class="inline-flex border-2 border-[#F97316] text-[#F97316] hover:text-[#151515] hover:bg-[#F97316] font-bold px-5 py-2 rounded-xl transition-all duration-200 text-sm active:scale-95">Login</a>
              <a href="signup.html" class="inline-flex bg-[#F97316] hover:bg-[#EA580C] text-[#151515] font-bold px-7 py-2.5 rounded-xl transition-all duration-200 text-sm shadow-sm hover:shadow-md hover:shadow-[#F97316]/30 active:scale-95">SignUp</a>
            </div>
            <!-- Mobile Hamburger -->
            <div class="xl:hidden flex items-center justify-end flex-1">
              <button id="mobileMenuBtn" class="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E4E9] flex items-center justify-center text-muted hover:bg-[#F97316] hover:text-[#151515] hover:border-[#F97316] hover:shadow-sm hover:shadow-[#F97316]/20 transition-all duration-200 active:scale-95">
                <i class="fa-solid fa-bars text-sm"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="h-0.5 bg-[#F97316] relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-[#FBBF24] to-transparent animate-nav-line"></div>
        </div>
      </nav>

      <!-- Mobile Overlay -->
      <div id="mobileOverlay" class="fixed inset-0 z-40 bg-black/50 opacity-0 invisible transition-all duration-300 xl:hidden"></div>

      <!-- Mobile Panel -->
      <div id="mobilePanel" class="mobile-panel fixed top-0 right-0 z-50 h-full w-72 max-w-[85vw] bg-white shadow-2xl border-l border-[#E2E4E9] translate-x-full transition-transform duration-300 ease-in-out xl:hidden overflow-y-auto">
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
            <!-- Home Dropdown (mobile) -->
            <button class="mobile-dropdown-toggle w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-muted hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all">
              Home <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-200"></i>
            </button>
            <div class="mobile-dropdown pl-4 space-y-0.5">
              <a href="index.html" class="block px-4 py-2.5 rounded-lg text-sm font-semibold text-muted hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all ${path === 'index.html' ? 'text-[#F97316] bg-[#F97316]/10' : ''}">Home 1</a>
              <a href="home2.html" class="block px-4 py-2.5 rounded-lg text-sm font-semibold text-muted hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all ${path === 'home2.html' ? 'text-[#F97316] bg-[#F97316]/10' : ''}">Home 2</a>
            </div>
            ${['about', 'pricing', 'rentals', 'safety', 'gallery', 'contact'].map(page => `
              <a href="${page}.html" class="block px-4 py-3 rounded-xl text-sm font-semibold ${isActive(`${page}.html`) ? 'text-[#F97316] bg-[#F97316]/10' : 'text-muted hover:text-[#F97316] hover:bg-[#F97316]/5'} transition-all">
                ${page.charAt(0).toUpperCase() + page.slice(1)}
              </a>
            `).join('')}
            <!-- Dashboard Dropdown (mobile) -->
            <button class="mobile-dropdown-toggle w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-muted hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all">
              Dashboard <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-200"></i>
            </button>
            <div class="mobile-dropdown pl-4 space-y-0.5">
              <a href="dashboards/user-dashboard.html" class="block px-4 py-2.5 rounded-lg text-sm font-semibold text-muted hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all ${path === 'user-dashboard.html' ? 'text-[#F97316] bg-[#F97316]/10' : ''}">User Dashboard</a>
              <a href="dashboards/admin-dashboard.html" class="block px-4 py-2.5 rounded-lg text-sm font-semibold text-muted hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all ${path === 'admin-dashboard.html' ? 'text-[#F97316] bg-[#F97316]/10' : ''}">Admin Dashboard</a>
            </div>
          </div>
          <div class="flex items-center gap-2 pt-3 pb-2">
            <button class="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-muted border border-[#E2E4E9] hover:border-[#F97316] hover:text-[#F97316] transition-all mobile-theme-toggle">
              <i class="fa-solid fa-moon text-sm"></i> <span>Dark</span>
            </button>
            <button class="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-muted border border-[#E2E4E9] hover:border-[#F97316] hover:text-[#F97316] transition-all mobile-rtl-toggle">
              <i class="fa-solid fa-arrow-right-arrow-left text-sm"></i> <span>RTL</span>
            </button>
          </div>
          <div class="flex items-center gap-2">
            <a href="login.html" class="flex-1 block text-center px-4 py-3 rounded-xl text-sm font-semibold text-muted border border-[#E2E4E9] hover:border-[#F97316] hover:text-[#F97316] transition-all">Login</a>
            <a href="signup.html" class="flex-1 block text-center px-4 py-3 rounded-xl text-sm font-semibold text-muted border border-[#E2E4E9] hover:border-[#F97316] hover:text-[#F97316] transition-all">Sign Up</a>
          </div>
        </div>
      </div>
    `;
  };

  // ─── Render Navbar ──────────────────────────────────────────────────────────
  nav.innerHTML = buildNavbar();

  // ─── DOM Refs after render ──────────────────────────────────────────────────
  const mainNav = document.getElementById('mainNav');
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileClose = document.getElementById('mobileCloseBtn');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobilePanel = document.getElementById('mobilePanel');

  // ─── Mobile Menu State ─────────────────────────────────────────────────────
  let mobileOpen = false;

  const openMobile = () => {
    mobileOpen = true;
    mobilePanel.classList.remove('translate-x-full');
    mobilePanel.classList.add('translate-x-0', 'open');
    mobileOverlay.classList.remove('opacity-0', 'invisible');
    document.body.style.overflow = 'hidden';
  };

  const closeMobile = () => {
    mobileOpen = false;
    mobilePanel.classList.remove('translate-x-0', 'open');
    mobilePanel.classList.add('translate-x-full');
    mobileOverlay.classList.add('opacity-0', 'invisible');
    document.body.style.overflow = '';
  };

  // ─── Event Listeners ──────────────────────────────────────────────────────
  mobileBtn?.addEventListener('click', openMobile);
  mobileClose?.addEventListener('click', closeMobile);
  mobileOverlay?.addEventListener('click', closeMobile);

  // Mobile dropdown toggles
  document.querySelectorAll('.mobile-dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const dropdown = this.nextElementSibling;
      const icon = this.querySelector('.fa-chevron-down');
      if (dropdown) {
        dropdown.classList.toggle('open');
        if (icon) icon.classList.toggle('rotate-180');
      }
    });
  });

  // ─── Theme Toggle ──────────────────────────────────────────────────────────
  const themeToggle = document.getElementById('themeToggle');
  themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    if (icon) {
      icon.className = document.body.classList.contains('dark-mode')
        ? 'fa-solid fa-sun'
        : 'fa-solid fa-moon';
    }
    // Update mobile theme buttons
    document.querySelectorAll('.mobile-theme-toggle i').forEach(mobileIcon => {
      mobileIcon.className = document.body.classList.contains('dark-mode') 
        ? 'fa-solid fa-sun' 
        : 'fa-solid fa-moon';
    });
  });

  // ─── Mobile Toggles ──────────────────────────────────────────────────────
  document.querySelectorAll('.mobile-theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const icon = btn.querySelector('i');
      if (icon) icon.className = document.body.classList.contains('dark-mode') ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
      // Sync desktop theme button
      const desktopIcon = themeToggle?.querySelector('i');
      if (desktopIcon) desktopIcon.className = document.body.classList.contains('dark-mode') ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    });
  });

  // ─── RTL / LTR Toggle ────────────────────────────────────────────────────
  const applyRtl = (dir) => {
    const isRtl = dir === 'rtl';

    // Update body classes - only affects text direction
    document.body.classList.toggle('rtl-mode', isRtl);
    document.body.classList.toggle('ltr-mode', !isRtl);

    // Update RTL toggle button (desktop)
    const rtlToggleBtn = document.getElementById('rtlToggle');
    if (rtlToggleBtn) {
      rtlToggleBtn.classList.toggle('bg-[#F97316]', isRtl);
      rtlToggleBtn.classList.toggle('text-[#151515]', isRtl);
      rtlToggleBtn.classList.toggle('border-[#F97316]', isRtl);
      rtlToggleBtn.classList.toggle('bg-[#F8FAFC]', !isRtl);
      rtlToggleBtn.classList.toggle('text-muted', !isRtl);
      rtlToggleBtn.classList.toggle('border-[#E2E4E9]', !isRtl);
      const icon = rtlToggleBtn.querySelector('i');
      if (icon) {
        icon.className = isRtl
          ? 'fa-solid fa-arrow-right-arrow-left'
          : 'fa-solid fa-arrow-right-arrow-left';
      }
    }

    // Update mobile RTL toggle button
    document.querySelectorAll('.mobile-rtl-toggle').forEach(btn => {
      btn.classList.toggle('bg-[#F97316]', isRtl);
      btn.classList.toggle('text-[#151515]', isRtl);
      btn.classList.toggle('border-[#F97316]', isRtl);
      btn.classList.toggle('text-muted', !isRtl);
      btn.classList.toggle('border-[#E2E4E9]', !isRtl);
      const span = btn.querySelector('span');
      if (span) span.textContent = isRtl ? 'LTR' : 'RTL';
      const icon = btn.querySelector('i');
      if (icon) {
        icon.className = isRtl
          ? 'fa-solid fa-arrow-right-arrow-left'
          : 'fa-solid fa-arrow-right-arrow-left';
      }
    });

    // Mobile panel stays on the right side always
    if (mobilePanel) {
      mobilePanel.style.right = '0';
      mobilePanel.style.left = 'auto';
      mobilePanel.style.borderLeft = '1px solid #E2E4E9';
      mobilePanel.style.borderRight = 'none';
      if (mobileOpen) {
        mobilePanel.classList.remove('translate-x-full');
        mobilePanel.classList.add('translate-x-0', 'open');
      } else {
        mobilePanel.classList.remove('translate-x-0', 'open');
        mobilePanel.classList.add('translate-x-full');
      }
    }

    // Save preference
    localStorage.setItem('yw-rtl', dir);
  };

  // Restore saved RTL preference
  const savedRtl = localStorage.getItem('yw-rtl');
  if (savedRtl === 'rtl') {
    applyRtl('rtl');
  }

  // Desktop RTL toggle
  document.getElementById('rtlToggle')?.addEventListener('click', () => {
    const currentRtl = document.body.classList.contains('rtl-mode');
    applyRtl(currentRtl ? 'ltr' : 'rtl');
  });

  // Mobile RTL toggle
  document.querySelectorAll('.mobile-rtl-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const currentRtl = document.body.classList.contains('rtl-mode');
      applyRtl(currentRtl ? 'ltr' : 'rtl');
    });
  });

  // ─── Scroll Shadow Effect ──────────────────────────────────────────────────
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (mainNav) {
      if (currentScroll > 20) {
        mainNav.classList.add('shadow-md', 'bg-white/95');
      } else {
        mainNav.classList.remove('shadow-md', 'bg-white/95');
      }
    }
    lastScroll = currentScroll;
  }, { passive: true });

  // ─── Close mobile on Escape ───────────────────────────────────────────────
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileOpen) closeMobile();
  });

  // ─── Handle window resize: close mobile on large screens ─────────────────
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth >= 1280 && mobileOpen) {
        closeMobile();
      }
    }, 200);
  });

})();