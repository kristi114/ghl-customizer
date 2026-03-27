(function () {
  'use strict';

  /* ==========================================================
     CONFIG  ← The only section you need to edit regularly
     ==========================================================
     Set any value to false to disable that feature entirely.
     ========================================================== */

  const CONFIG = {

    /* --- Branding --- */
    branding: {
      enabled:        true,

      /* URL to your hosted YachtWay logo.
         Recommended: SVG or PNG, transparent background, min 60px tall.
         Dark-background version preferred (white wordmark). */
      logoUrl:        'https://github.com/kristi114/ghl-customizer/blob/32e6000cdd75f79f832ac9b942aea71ceb6aed5d/Logo_White.svg',

      /* Text shown in the browser tab */
      pageTitle:      'YachtWay Portal',

      /* Replace the GHL dashboard heading text.
         Set to null to leave it unchanged. */
      dashboardTitle: 'Welcome to YachtWay',
    },

    /* --- Typography --- */
    typography: {
      enabled: true,

      /* Google Fonts stylesheet URL.
         Poppins (headings) + Figtree (body) — matches brand guidelines.
         Swap this URL if you self-host fonts. */
      fontsUrl: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Figtree:wght@400;500;600&display=swap',
    },

    /* --- UI tweaks --- */
    ui: {
      enabled: true,

      /* Removes the default GHL favicon and replaces it with YachtWay's */
      replaceFavicon:   true,
      faviconUrl:       'https://yachtway.com/favicon-32x32.png',

      /* Hides the GHL "Powered by HighLevel" footer badge */
      hidePoweredBy:    true,

      /* Hides the GHL version / environment indicator in the corner */
      hideVersionBadge: true,
    },

  };


  /* ==========================================================
     INTERNALS — Edit below only if you know what you are doing
     ========================================================== */

  /* ----------------------------------------------------------
     Utility: Wait for a DOM element to appear, then run a
     callback. Retries up to maxAttempts × intervalMs.
     ---------------------------------------------------------- */
  function waitFor(selector, callback, intervalMs, maxAttempts) {
    intervalMs   = intervalMs   || 200;
    maxAttempts  = maxAttempts  || 25;
    var attempts = 0;

    var timer = setInterval(function () {
      var el = document.querySelector(selector);
      attempts++;

      if (el) {
        clearInterval(timer);
        callback(el);
      } else if (attempts >= maxAttempts) {
        clearInterval(timer);
        console.warn('[YachtWay GHL] Element not found after ' + maxAttempts + ' attempts: ' + selector);
      }
    }, intervalMs);
  }

  /* ----------------------------------------------------------
     Utility: Inject a <link> stylesheet if not already present
     ---------------------------------------------------------- */
  function injectStylesheet(href) {
    if (document.querySelector('link[href="' + href + '"]')) return;
    var link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }

  /* ----------------------------------------------------------
     Utility: Inject a <style> block with an id guard
     ---------------------------------------------------------- */
  function injectStyle(id, css) {
    if (document.getElementById(id)) return;
    var style = document.createElement('style');
    style.id        = id;
    style.textContent = css;
    document.head.appendChild(style);
  }

  /* ----------------------------------------------------------
     Utility: Replace favicon
     ---------------------------------------------------------- */
  function replaceFavicon(url) {
    var existing = document.querySelector('link[rel~="icon"]');
    if (existing) existing.parentNode.removeChild(existing);
    var link = document.createElement('link');
    link.rel  = 'icon';
    link.href = url;
    document.head.appendChild(link);
  }


  /* ==========================================================
     MODULE: Branding
     ========================================================== */

  function applyBranding() {
    if (!CONFIG.branding.enabled) return;

    /* Page title */
    if (CONFIG.branding.pageTitle) {
      document.title = CONFIG.branding.pageTitle;
    }

    /* Logo replacement.
       GHL renders logos inside several possible wrappers.
       We try the most common selectors. */
    if (CONFIG.branding.logoUrl) {
      var logoSelectors = [
        '.hl-header-logo img',
        '.navbar-brand img',
        '[class*="logo"] img',
        '[class*="brand"] img',
      ];

      logoSelectors.forEach(function (sel) {
        waitFor(sel, function (el) {
          el.src = CONFIG.branding.logoUrl;
          el.alt = 'YachtWay';
        });
      });
    }

    /* Dashboard heading */
    if (CONFIG.branding.dashboardTitle) {
      var titleSelectors = [
        '.hl-dashboard-title',
        '[class*="dashboard-title"]',
        '[class*="page-title"]',
      ];

      titleSelectors.forEach(function (sel) {
        waitFor(sel, function (el) {
          el.textContent = CONFIG.branding.dashboardTitle;
        });
      });
    }
  }


  /* ==========================================================
     MODULE: Typography
     ========================================================== */

  function applyTypography() {
    if (!CONFIG.typography.enabled) return;

    /* Inject Google Fonts */
    if (CONFIG.typography.fontsUrl) {
      injectStylesheet(CONFIG.typography.fontsUrl);
    }

    /* Safety net: if the external CSS file fails to load for any
       reason, this inline block guarantees the fonts still apply. */
    injectStyle('yw-typography-fallback', [
      'body, input, textarea, select, button {',
      "  font-family: 'Figtree', sans-serif !important;",
      '}',
      'h1, h2, h3, h4, h5, h6,',
      '[class*="title"], [class*="heading"] {',
      "  font-family: 'Poppins', sans-serif !important;",
      '  font-weight: 600 !important;',
      '}',
    ].join('\n'));
  }


  /* ==========================================================
     MODULE: UI Tweaks
     ========================================================== */

  function applyUiTweaks() {
    if (!CONFIG.ui.enabled) return;

    /* Favicon */
    if (CONFIG.ui.replaceFavicon && CONFIG.ui.faviconUrl) {
      replaceFavicon(CONFIG.ui.faviconUrl);
    }

    /* Hide "Powered by HighLevel" badge */
    if (CONFIG.ui.hidePoweredBy) {
      injectStyle('yw-hide-powered-by', [
        '[class*="powered-by"],',
        '[class*="powered_by"],',
        '[class*="hl-powered"],',
        'a[href*="gohighlevel.com"][class*="brand"] {',
        '  display: none !important;',
        '}',
      ].join('\n'));
    }

    /* Hide version badge */
    if (CONFIG.ui.hideVersionBadge) {
      injectStyle('yw-hide-version', [
        '[class*="version-badge"],',
        '[class*="env-badge"],',
        '[id*="version-badge"] {',
        '  display: none !important;',
        '}',
      ].join('\n'));
    }
  }


  /* ==========================================================
     INIT — Runs everything in the right order
     ========================================================== */

  function init() {
    applyTypography(); /* fonts first — no FOUT */
    applyBranding();
    applyUiTweaks();
    console.log('[YachtWay GHL] Customizer loaded.');
  }

  /* Run after DOM is ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* GHL is a SPA — re-run branding on route change */
  var _pushState = history.pushState;
  history.pushState = function () {
    _pushState.apply(history, arguments);
    setTimeout(applyBranding, 400);
  };
  window.addEventListener('popstate', function () {
    setTimeout(applyBranding, 400);
  });

})();
