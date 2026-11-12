/**
 * QuickSnipe Sales & Knowledge Portal Client Script
 * - Interactive Profit & Margin Simulator (9 Platforms)
 * - Live Listing Quality Scorecard (LQS) & Byte Meter
 * - Visual Showcase Carousel
 * - Instant FAQ Search
 * - Theme Switcher (Cyber Dark / Light Glass)
 * - Sticky Install Bar
 */

(function () {
  'use strict';

  // 1. Theme Management
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const savedTheme = localStorage.getItem('qs_portal_theme');

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('qs_portal_theme', theme);
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
      themeToggleBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme(prefersDark.matches ? 'dark' : 'light');
  }

  themeToggleBtn?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });

  // 1b. Accessible Navigation (Dropdowns & Mobile Menu Drawer)
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const mobileNavBackdrop = document.getElementById('mobile-nav-backdrop');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');

  function openMobileNav() {
    if (!mobileNavDrawer) return;
    mobileNavDrawer.hidden = false;
    void mobileNavDrawer.offsetWidth; // Force reflow for CSS transition
    mobileNavDrawer.classList.add('is-open');
    if (mobileMenuBtn) {
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
      mobileMenuBtn.setAttribute('aria-label', 'Close navigation menu');
    }
    document.body.style.overflow = 'hidden';
    mobileMenuCloseBtn?.focus();
  }

  function closeMobileNav() {
    if (!mobileNavDrawer) return;
    mobileNavDrawer.classList.remove('is-open');
    if (mobileMenuBtn) {
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileMenuBtn.setAttribute('aria-label', 'Open navigation menu');
    }
    document.body.style.overflow = '';
    setTimeout(() => {
      if (!mobileNavDrawer.classList.contains('is-open')) {
        mobileNavDrawer.hidden = true;
      }
    }, 280);
    mobileMenuBtn?.focus();
  }

  mobileMenuBtn?.addEventListener('click', () => {
    const isOpen = mobileNavDrawer?.classList.contains('is-open');
    if (isOpen) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  });

  mobileMenuCloseBtn?.addEventListener('click', closeMobileNav);
  mobileNavBackdrop?.addEventListener('click', closeMobileNav);

  // Close mobile nav when clicking any link inside
  mobileNavDrawer?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // Accessible Desktop Dropdowns
  const dropdownToggles = document.querySelectorAll('.nav-dropdown-btn');

  dropdownToggles.forEach(btn => {
    const menuId = btn.getAttribute('aria-controls');
    const menu = menuId ? document.getElementById(menuId) : btn.nextElementSibling;

    function toggleDropdown(open) {
      const willOpen = open !== undefined ? open : btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      if (menu) {
        menu.classList.toggle('is-open', willOpen);
      }
    }

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDropdown();
    });

    btn.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleDropdown(true);
        const firstLink = menu?.querySelector('a');
        firstLink?.focus();
      } else if (e.key === 'Escape') {
        toggleDropdown(false);
        btn.focus();
      }
    });

    menu?.addEventListener('keydown', (e) => {
      const items = Array.from(menu.querySelectorAll('a'));
      const currentIndex = items.indexOf(document.activeElement);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % items.length;
        items[nextIndex]?.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        items[prevIndex]?.focus();
      } else if (e.key === 'Escape') {
        toggleDropdown(false);
        btn.focus();
      }
    });
  });

  // Global keydown listeners (Escape to close mobile nav/dropdowns, Tab trap in mobile drawer)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileNavDrawer?.classList.contains('is-open')) {
        closeMobileNav();
      }
      dropdownToggles.forEach(btn => {
        btn.setAttribute('aria-expanded', 'false');
        const menuId = btn.getAttribute('aria-controls');
        const menu = menuId ? document.getElementById(menuId) : btn.nextElementSibling;
        menu?.classList.remove('is-open');
      });
    }

    // Trap focus inside mobile drawer if open
    if (e.key === 'Tab' && mobileNavDrawer?.classList.contains('is-open')) {
      const focusableEls = mobileNavDrawer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (focusableEls.length === 0) return;
      const firstEl = focusableEls[0];
      const lastEl = focusableEls[focusableEls.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    dropdownToggles.forEach(btn => {
      const container = btn.closest('.nav-item-dropdown');
      if (container && !container.contains(e.target)) {
        btn.setAttribute('aria-expanded', 'false');
        const menuId = btn.getAttribute('aria-controls');
        const menu = menuId ? document.getElementById(menuId) : btn.nextElementSibling;
        menu?.classList.remove('is-open');
      }
    });
  });

  // 2. Interactive Fee & Profit Margin Simulator
  const platformFeeFormulas = {
    etsy: {
      name: 'Etsy',
      calc: (price, shippingCharged, cogs, itemShipping) => {
        const gross = price + shippingCharged;
        const txFee = gross * 0.065;
        const procFee = gross * 0.03 + 0.25;
        const listFee = 0.20;
        const totalFees = txFee + procFee + listFee;
        const netProfit = gross - totalFees - cogs - itemShipping;
        const margin = gross > 0 ? (netProfit / gross) * 100 : 0;
        const breakeven = (cogs + itemShipping + 0.20 + 0.25) / (1 - 0.065 - 0.03);
        return { totalFees, netProfit, margin, breakeven };
      }
    },
    amazon: {
      name: 'Amazon FBA / FBM',
      calc: (price, shippingCharged, cogs, itemShipping) => {
        const gross = price + shippingCharged;
        const refFee = gross * 0.15;
        const totalFees = refFee;
        const netProfit = gross - totalFees - cogs - itemShipping;
        const margin = gross > 0 ? (netProfit / gross) * 100 : 0;
        const breakeven = (cogs + itemShipping) / (1 - 0.15);
        return { totalFees, netProfit, margin, breakeven };
      }
    },
    ebay: {
      name: 'eBay',
      calc: (price, shippingCharged, cogs, itemShipping) => {
        const gross = price + shippingCharged;
        const fvFee = gross * 0.1325 + 0.30;
        const totalFees = fvFee;
        const netProfit = gross - totalFees - cogs - itemShipping;
        const margin = gross > 0 ? (netProfit / gross) * 100 : 0;
        const breakeven = (cogs + itemShipping + 0.30) / (1 - 0.1325);
        return { totalFees, netProfit, margin, breakeven };
      }
    },
    shopify: {
      name: 'Shopify DTC',
      calc: (price, shippingCharged, cogs, itemShipping) => {
        const gross = price + shippingCharged;
        const procFee = gross * 0.029 + 0.30;
        const totalFees = procFee;
        const netProfit = gross - totalFees - cogs - itemShipping;
        const margin = gross > 0 ? (netProfit / gross) * 100 : 0;
        const breakeven = (cogs + itemShipping + 0.30) / (1 - 0.029);
        return { totalFees, netProfit, margin, breakeven };
      }
    },
    poshmark: {
      name: 'Poshmark',
      calc: (price, shippingCharged, cogs, itemShipping) => {
        const gross = price;
        const fee = price < 15 ? 2.95 : price * 0.20;
        const totalFees = fee;
        const netProfit = gross - totalFees - cogs - itemShipping;
        const margin = gross > 0 ? (netProfit / gross) * 100 : 0;
        const breakeven = price < 15 ? (cogs + itemShipping + 2.95) : (cogs + itemShipping) / 0.8;
        return { totalFees, netProfit, margin, breakeven };
      }
    },
    depop: {
      name: 'Depop',
      calc: (price, shippingCharged, cogs, itemShipping) => {
        const gross = price + shippingCharged;
        const procFee = gross * 0.033 + 0.45;
        const totalFees = procFee;
        const netProfit = gross - totalFees - cogs - itemShipping;
        const margin = gross > 0 ? (netProfit / gross) * 100 : 0;
        const breakeven = (cogs + itemShipping + 0.45) / (1 - 0.033);
        return { totalFees, netProfit, margin, breakeven };
      }
    },
    mercari: {
      name: 'Mercari',
      calc: (price, shippingCharged, cogs, itemShipping) => {
        const gross = price + shippingCharged;
        const procFee = gross * 0.029 + 0.50;
        const totalFees = procFee;
        const netProfit = gross - totalFees - cogs - itemShipping;
        const margin = gross > 0 ? (netProfit / gross) * 100 : 0;
        const breakeven = (cogs + itemShipping + 0.50) / (1 - 0.029);
        return { totalFees, netProfit, margin, breakeven };
      }
    },
    walmart: {
      name: 'Walmart Marketplace',
      calc: (price, shippingCharged, cogs, itemShipping) => {
        const gross = price + shippingCharged;
        const refFee = gross * 0.15;
        const totalFees = refFee;
        const netProfit = gross - totalFees - cogs - itemShipping;
        const margin = gross > 0 ? (netProfit / gross) * 100 : 0;
        const breakeven = (cogs + itemShipping) / (1 - 0.15);
        return { totalFees, netProfit, margin, breakeven };
      }
    },
    grailed: {
      name: 'Grailed Luxury',
      calc: (price, shippingCharged, cogs, itemShipping) => {
        const gross = price + shippingCharged;
        const commFee = gross * 0.09;
        const procFee = gross * 0.0349 + 0.49;
        const totalFees = commFee + procFee;
        const netProfit = gross - totalFees - cogs - itemShipping;
        const margin = gross > 0 ? (netProfit / gross) * 100 : 0;
        const breakeven = (cogs + itemShipping + 0.49) / (1 - 0.09 - 0.0349);
        return { totalFees, netProfit, margin, breakeven };
      }
    }
  };

  function updateCalculator() {
    const platform = document.getElementById('calc-platform')?.value || 'etsy';
    const salePrice = parseFloat(document.getElementById('calc-sale-price')?.value) || 0;
    const shippingCharged = parseFloat(document.getElementById('calc-shipping-charged')?.value) || 0;
    const cogs = parseFloat(document.getElementById('calc-cogs')?.value) || 0;
    const itemShipping = parseFloat(document.getElementById('calc-shipping-cost')?.value) || 0;

    const formula = platformFeeFormulas[platform] || platformFeeFormulas.etsy;
    const res = formula.calc(salePrice, shippingCharged, cogs, itemShipping);

    const elFees = document.getElementById('calc-result-fees');
    const elProfit = document.getElementById('calc-result-profit');
    const elMargin = document.getElementById('calc-result-margin');
    const elBreakeven = document.getElementById('calc-result-breakeven');

    if (elFees) elFees.textContent = `$${Math.max(0, res.totalFees).toFixed(2)}`;
    if (elProfit) {
      elProfit.textContent = `$${res.netProfit.toFixed(2)}`;
      elProfit.style.color = res.netProfit >= 0 ? 'var(--accent-emerald)' : 'var(--accent-rose)';
    }
    if (elMargin) elMargin.textContent = `${res.margin.toFixed(1)}%`;
    if (elBreakeven) elBreakeven.textContent = `$${Math.max(0, res.breakeven).toFixed(2)}`;
  }

  ['calc-platform', 'calc-sale-price', 'calc-shipping-charged', 'calc-cogs', 'calc-shipping-cost'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', updateCalculator);
    document.getElementById(id)?.addEventListener('change', updateCalculator);
  });
  updateCalculator();

  // 3. Interactive Listing Quality Scorecard (LQS) Sandbox
  const lqsInput = document.getElementById('lqs-title-input');
  const lqsPlatformSelect = document.getElementById('lqs-platform-select');
  const lqsGradeBadge = document.getElementById('lqs-grade-badge');
  const lqsCharCount = document.getElementById('lqs-char-count');
  const lqsByteCount = document.getElementById('lqs-byte-count');
  const lqsAdviceText = document.getElementById('lqs-advice-text');
  const lqsMeterFill = document.getElementById('lqs-meter-fill');

  const platformTitleLimits = {
    etsy: { max: 140, idealMin: 80, idealMax: 135, name: 'Etsy' },
    amazon: { max: 200, idealMin: 120, idealMax: 195, name: 'Amazon' },
    ebay: { max: 80, idealMin: 65, idealMax: 80, name: 'eBay' },
    poshmark: { max: 50, idealMin: 35, idealMax: 50, name: 'Poshmark' },
    shopify: { max: 100, idealMin: 50, idealMax: 90, name: 'Shopify' },
    walmart: { max: 178, idealMin: 90, idealMax: 170, name: 'Walmart' }
  };

  function auditTitle() {
    const text = lqsInput?.value || '';
    const platform = lqsPlatformSelect?.value || 'etsy';
    const limit = platformTitleLimits[platform] || platformTitleLimits.etsy;

    const charLen = text.length;
    const byteLen = new TextEncoder().encode(text).length;

    if (lqsCharCount) lqsCharCount.textContent = `${charLen} / ${limit.max} chars`;
    if (lqsByteCount) lqsByteCount.textContent = `${byteLen} bytes (Amazon limit: 249B)`;

    const fillPct = Math.min(100, (charLen / limit.max) * 100);
    if (lqsMeterFill) {
      lqsMeterFill.style.width = `${fillPct}%`;
      lqsMeterFill.style.background = charLen > limit.max ? 'var(--accent-rose)' : 'var(--grad-primary)';
    }

    let grade = 'F';
    let gradeClass = 'grade-c';
    let advice = 'Start typing a title draft to test length and search limits...';

    if (charLen === 0) {
      grade = '-';
      gradeClass = '';
      advice = 'Type or paste your listing draft above to test length guidelines and search visibility.';
    } else if (charLen > limit.max) {
      grade = 'F';
      gradeClass = 'grade-c';
      advice = `⚠️ Too long for ${limit.name} by ${charLen - limit.max} characters. Buyers won't see the end of your title, so trim the least important words.`;
    } else if (charLen >= limit.idealMin && charLen <= limit.idealMax) {
      grade = 'S';
      gradeClass = 'grade-s';
      advice = `✨ Perfect length! Your title fits neatly in ${limit.name} search results on phones and computers.`;
    } else if (charLen >= limit.idealMin - 20) {
      grade = 'A';
      gradeClass = 'grade-a';
      advice = `👍 Good title. Add 1 or 2 more descriptive words (color, size, material) to show up in even more searches.`;
    } else {
      grade = 'C';
      gradeClass = 'grade-b';
      advice = `Your title is a bit short (${charLen} characters). Longer, descriptive titles get found more often. Try adding brand, size, color or material.`;
    }

    if (lqsGradeBadge) {
      lqsGradeBadge.textContent = grade;
      lqsGradeBadge.className = `lqs-grade-badge ${gradeClass}`;
    }
    if (lqsAdviceText) lqsAdviceText.textContent = advice;
  }

  lqsInput?.addEventListener('input', auditTitle);
  lqsPlatformSelect?.addEventListener('change', auditTitle);
  auditTitle();

  // 3b. Interactive USPS 16 oz Shipping Ounce Trap Radar Simulator
  const sotWeightInput = document.getElementById('sot-weight-input');
  const sotStatusBadge = document.getElementById('sot-status-badge');
  const sotRateTier = document.getElementById('sot-rate-tier');
  const sotEstCost = document.getElementById('sot-est-cost');
  const sotSavingsVal = document.getElementById('sot-savings-val');
  const sotAdviceText = document.getElementById('sot-advice-text');
  const sotMeterFill = document.getElementById('sot-meter-fill');

  function auditShippingWeight() {
    const weight = parseFloat(sotWeightInput?.value) || 0;
    const cliff = 15.99;
    const maxScale = 32.0;
    const fillPct = Math.min(100, Math.max(0, (weight / maxScale) * 100));

    if (sotMeterFill) {
      sotMeterFill.style.width = `${fillPct}%`;
      sotMeterFill.style.background = weight > cliff ? 'var(--accent-rose)' : 'var(--accent-emerald)';
    }

    if (weight <= 0) {
      if (sotStatusBadge) {
        sotStatusBadge.textContent = 'Enter Weight';
        sotStatusBadge.className = 'badge-tag';
      }
      if (sotRateTier) sotRateTier.textContent = '—';
      if (sotEstCost) sotEstCost.textContent = '$0.00';
      if (sotSavingsVal) sotSavingsVal.textContent = '$0.00';
      if (sotAdviceText) sotAdviceText.textContent = 'Enter the packed weight in ounces to see if you are under the 1 lb price jump.';
      return;
    }

    if (weight <= 15.99) {
      const estMin = 4.15 + (weight / 16) * 1.30;
      if (sotStatusBadge) {
        sotStatusBadge.textContent = '✅ Under 16 oz';
        sotStatusBadge.style.background = 'rgba(16, 185, 129, 0.15)';
        sotStatusBadge.style.color = 'var(--accent-emerald)';
        sotStatusBadge.style.borderColor = 'rgba(16, 185, 129, 0.4)';
      }
      if (sotRateTier) sotRateTier.textContent = 'Under 1 lb (cheapest tier)';
      if (sotEstCost) sotEstCost.textContent = `~$${estMin.toFixed(2)}`;
      if (sotSavingsVal) {
        sotSavingsVal.textContent = '+$4.20 Saved';
        sotSavingsVal.style.color = 'var(--accent-emerald)';
      }
      const marginBuffer = (15.99 - weight).toFixed(1);
      if (sotAdviceText) {
        sotAdviceText.innerHTML = `✨ <strong>You're in the cheap zone!</strong> You have <strong>${marginBuffer} oz</strong> to spare before the 16 oz price jump. Staying under 1 lb saves about $3.60–$5.50 per label.`;
      }
    } else {
      const overOz = (weight - 15.99).toFixed(1);
      const estJump = 8.85 + Math.floor((weight - 16) / 16) * 1.50;
      const penalty = estJump - 5.45;

      if (sotStatusBadge) {
        sotStatusBadge.textContent = `⚠️ Over 1 lb (+${overOz} oz)`;
        sotStatusBadge.style.background = 'rgba(244, 63, 94, 0.18)';
        sotStatusBadge.style.color = 'var(--accent-rose)';
        sotStatusBadge.style.borderColor = 'rgba(244, 63, 94, 0.5)';
      }
      if (sotRateTier) sotRateTier.textContent = 'Over 1 lb (pricier tier)';
      if (sotEstCost) sotEstCost.textContent = `~$${estJump.toFixed(2)}`;
      if (sotSavingsVal) {
        sotSavingsVal.textContent = `-$${penalty.toFixed(2)} extra cost`;
        sotSavingsVal.style.color = 'var(--accent-rose)';
      }
      if (sotAdviceText) {
        sotAdviceText.innerHTML = `🚨 <strong>Heads up!</strong> You're just <strong>${overOz} oz</strong> over 1 lb, which adds about <strong>$${penalty.toFixed(2)}</strong> to your label. Quick fix: switch from a box to a poly mailer or trim the packaging.`;
      }
    }
  }

  sotWeightInput?.addEventListener('input', auditShippingWeight);
  auditShippingWeight();

  // 4. Feature Showcase Carousel
  const carouselTabs = document.querySelectorAll('.carousel-tab-btn');
  const carouselSlides = document.querySelectorAll('.carousel-slide');
  let currentSlide = 0;
  let autoSlideTimer = null;

  function setSlide(index) {
    currentSlide = (index + carouselSlides.length) % carouselSlides.length;
    carouselSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlide);
    });
    carouselTabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === currentSlide);
    });
  }

  carouselTabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      setSlide(idx);
      restartCarouselTimer();
    });
  });

  function startCarouselTimer() {
    if (carouselSlides.length === 0) return;
    autoSlideTimer = setInterval(() => {
      setSlide(currentSlide + 1);
    }, 6000);
  }

  function restartCarouselTimer() {
    if (autoSlideTimer) clearInterval(autoSlideTimer);
    startCarouselTimer();
  }
  startCarouselTimer();

  // 5. FAQ Accordion & Instant Search Filter
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(el => el.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  const faqSearchInput = document.getElementById('faq-search');
  faqSearchInput?.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    faqItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      const matches = !query || text.includes(query);
      item.style.display = matches ? 'block' : 'none';
      if (query && matches) {
        item.classList.add('open');
      } else if (!query) {
        item.classList.remove('open');
      }
    });
  });

  // 6. Sticky Bottom Install Bar on Scroll
  const stickyBar = document.getElementById('sticky-install-bar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 480) {
      stickyBar?.classList.add('visible');
    } else {
      stickyBar?.classList.remove('visible');
    }
  }, { passive: true });

  // 7. Toast Notification Utility
  const toastNotice = document.getElementById('portal-toast');
  window.showPortalToast = function (msg) {
    if (!toastNotice) return;
    toastNotice.textContent = msg;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 2800);
  };

  // Copy buttons
  document.querySelectorAll('[data-copy-target]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const targetId = btn.getAttribute('data-copy-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const text = targetEl.innerText || targetEl.value;
        try {
          await navigator.clipboard.writeText(text);
          window.showPortalToast('✓ Copied to clipboard!');
        } catch {
          window.showPortalToast('Failed to copy.');
        }
      }
    });
  });

})();
