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
      advice = `⚠️ Title exceeds ${limit.name} maximum cutoff by ${charLen - limit.max} characters. Search results will cut off important keywords.`;
    } else if (charLen >= limit.idealMin && charLen <= limit.idealMax) {
      grade = 'S';
      gradeClass = 'grade-s';
      advice = `✨ Great length optimization. Fits cleanly within ${limit.name} desktop and mobile search viewports without wasted space.`;
    } else if (charLen >= limit.idealMin - 20) {
      grade = 'A';
      gradeClass = 'grade-a';
      advice = `Great keyword density. Consider adding 1 or 2 high-converting descriptive tags to maximize reach up to ~${limit.idealMax} chars.`;
    } else {
      grade = 'C';
      gradeClass = 'grade-b';
      advice = `Title is too short (${charLen} chars). Search algorithms rank keyword-dense titles significantly higher. Expand with materials, style, and use cases.`;
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
