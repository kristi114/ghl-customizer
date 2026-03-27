(function () {
  'use strict';

  const CONFIG_URL =
    'https://cdn.jsdelivr.net/gh/kristi114/ghl-customizer@main/agency-config.json';

  // ─── STYLE INJECTION ─────────────────────────────────────────────────────────
  // Runs immediately (before config loads) to prevent flash of GHL default styles.
  function injectStyles() {
    if (document.getElementById('yw-brand-css')) return;

    const css = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Figtree:wght@300;400;500;600;700&display=swap');

/* ── YachtWay design tokens ──────────────────────────────── */
:root {
  --yw-brand:        #4b0ea3;
  --yw-brand-hover:  #36076d;
  --yw-brand-tint:   #f3edfb;
  --yw-brand-mid:    #e6dcf4;
  --yw-text:         #22222d;
  --yw-text-2:       #22222d;
  --yw-text-3:       #727279;
  --yw-text-4:       #8c8c92;
  --yw-white:        #ffffff;
  --yw-bg-page:      #f9fafb;
  --yw-bg-soft:      #f1f1f2;
  --yw-border:       #dcdcde;
  --yw-border-2:     #c1c1c4;
  --yw-shadow-sm:    0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --yw-shadow-lg:    0 12px 16px -4px rgba(0,0,0,0.12), 0 4px 6px -2px rgba(0,0,0,0.06);
  --yw-r:            8px;
  --yw-r-sm:         6px;
  --yw-r-lg:         12px;
  --yw-r-xl:         16px;
  --yw-r-full:       9999px;
}

/* ── Fonts ───────────────────────────────────────────────── */
html body,
html body * {
  font-family: 'Figtree', 'Helvetica Neue', Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
}
html body h1, html body h2, html body h3,
html body h4, html body h5, html body h6 {
  font-family: 'Poppins', 'Helvetica Neue', Arial, sans-serif !important;
  color: var(--yw-text) !important;
  font-weight: 600 !important;
  letter-spacing: -0.015em !important;
}

/* ── Page background ─────────────────────────────────────── */
html body,
#app,
.hl_wrapper,
.hl_wrapper--inner,
#settings,
.font-sans.hl-wrapper-container {
  background: var(--yw-bg-page) !important;
}

/* ══════════════════════════════════════════════════════════
   SIDEBAR  —  actual GHL v2 selectors from DOM inspection
   Sidebar root: aside#sidebar-v2
   ══════════════════════════════════════════════════════════ */
aside#sidebar-v2,
#sidebar-v2 {
  background-color: var(--yw-white) !important;
  background: var(--yw-white) !important;
  border-right: 1px solid var(--yw-border) !important;
  box-shadow: var(--yw-shadow-sm) !important;
}

/* Logo container */
aside#sidebar-v2 .agency-logo-container {
  background: var(--yw-white) !important;
}

/* Location switcher */
#location-switcher-sidbar-v2 {
  background-color: var(--yw-brand) !important;
  border-radius: var(--yw-r-sm) !important;
  margin: 0 8px !important;
}

/* Go Back button */
#backButtonv2 {
  color: var(--yw-text-3) !important;
  font-size: 13px !important;
}
#backButtonv2:hover {
  color: var(--yw-brand) !important;
  background: var(--yw-brand-tint) !important;
}

/* Section title ("Settings") */
aside#sidebar-v2 .menu-title {
  color: var(--yw-text-3) !important;
  font-size: 11px !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.06em !important;
  padding-top: 8px !important;
  padding-bottom: 4px !important;
}

/* Nav links — GHL uses Tailwind utility classes on <a> tags */
aside#sidebar-v2 nav a {
  color: var(--yw-text) !important;
  background: transparent !important;
  font-size: 13.5px !important;
  font-weight: 500 !important;
  border-radius: var(--yw-r-sm) !important;
  text-decoration: none !important;
  opacity: 1 !important;              /* override GHL's opacity-70 */
  transition: background 0.12s, color 0.12s !important;
}
aside#sidebar-v2 nav a:hover {
  background: var(--yw-brand-tint) !important;
  color: var(--yw-brand) !important;
}
/* Active state — GHL adds .active and .exact-active */
aside#sidebar-v2 nav a.active,
aside#sidebar-v2 nav a.exact-active,
aside#sidebar-v2 nav a.router-link-active {
  background: var(--yw-brand-tint) !important;
  color: var(--yw-brand) !important;
  font-weight: 600 !important;
  opacity: 1 !important;
}

/* ══════════════════════════════════════════════════════════
   HEADER  —  header.hl_header.--agency
   ══════════════════════════════════════════════════════════ */
header.hl_header,
header.hl_header.--agency {
  background: var(--yw-white) !important;
  border-bottom: 1px solid var(--yw-border) !important;
  box-shadow: var(--yw-shadow-sm) !important;
}

/* ══════════════════════════════════════════════════════════
   NAIVEUI COMPONENT OVERRIDES
   GHL uses NaiveUI; it injects colors via inline CSS vars.
   We override the variables at the :root level so they beat
   the inline style specificity for *new* component instances,
   and we also patch rendered elements directly.
   ══════════════════════════════════════════════════════════ */

/* Override NaiveUI primary color tokens at root */
:root {
  --n-color-primary:         var(--yw-brand) !important;
  --n-ripple-color:          var(--yw-brand) !important;
}

/* ── Tabs bar / active tab ───────────────────────────────── */
.n-tabs-bar {
  background: var(--yw-brand) !important;
  height: 2px !important;
  border-radius: var(--yw-r-full) !important;
}
.n-tabs-tab--active .n-tabs-tab__label,
.n-tabs-tab--active {
  color: var(--yw-brand) !important;
  font-weight: 600 !important;
}
.n-tabs-tab:hover .n-tabs-tab__label {
  color: var(--yw-brand) !important;
}

/* ── Buttons — PRIMARY ───────────────────────────────────── */
/* Override the inline --n-color, --n-border, etc. vars on the element */
.n-button--primary-type {
  --n-color:           var(--yw-brand) !important;
  --n-color-hover:     var(--yw-brand-hover) !important;
  --n-color-pressed:   var(--yw-brand) !important;
  --n-color-focus:     var(--yw-brand-hover) !important;
  --n-color-disabled:  var(--yw-brand) !important;
  --n-ripple-color:    var(--yw-brand) !important;
  --n-border:          1px solid var(--yw-brand) !important;
  --n-border-hover:    1px solid var(--yw-brand-hover) !important;
  --n-border-pressed:  1px solid var(--yw-brand) !important;
  --n-border-focus:    1px solid var(--yw-brand-hover) !important;
  --n-border-disabled: 1px solid var(--yw-brand) !important;
  --n-border-radius:   var(--yw-r) !important;
  background-color: var(--yw-brand) !important;
  border-color: var(--yw-brand) !important;
  border-radius: var(--yw-r) !important;
  font-weight: 600 !important;
}
.n-button--primary-type:hover {
  background-color: var(--yw-brand-hover) !important;
  border-color: var(--yw-brand-hover) !important;
  box-shadow: 0 0 0 4px rgba(75,14,163,0.16) !important;
}
/* Disabled primary keeps brand color but reduced opacity */
.n-button--primary-type.n-button--disabled {
  background-color: var(--yw-brand) !important;
  border-color: var(--yw-brand) !important;
  opacity: 0.5 !important;
}

/* ── Buttons — SECONDARY / DEFAULT ──────────────────────── */
.n-button--default-type {
  --n-ripple-color:      var(--yw-brand) !important;
  --n-text-color-hover:  var(--yw-brand) !important;
  --n-border-hover:      1px solid var(--yw-brand) !important;
  --n-border-pressed:    1px solid var(--yw-brand) !important;
  --n-border-focus:      1px solid var(--yw-brand) !important;
  --n-border-radius:     var(--yw-r) !important;
  border-radius: var(--yw-r) !important;
}
.n-button--default-type:hover {
  border-color: var(--yw-brand) !important;
  color: var(--yw-brand) !important;
  background: var(--yw-brand-tint) !important;
}

/* ── Inputs ──────────────────────────────────────────────── */
.n-input {
  --n-border-radius: var(--yw-r) !important;
  --n-caret-color:   var(--yw-brand) !important;
  --n-border-hover:  1px solid var(--yw-brand) !important;
  --n-border-focus:  1px solid var(--yw-brand) !important;
  --n-box-shadow-focus: 0 0 0 3px rgba(75,14,163,0.12) !important;
  --n-loading-color: var(--yw-brand) !important;
  border-radius: var(--yw-r) !important;
}
.n-input--focus,
.n-input__input-el:focus {
  box-shadow: 0 0 0 3px rgba(75,14,163,0.12) !important;
}

/* ── Switch / Toggle ─────────────────────────────────────── */
.n-switch.n-switch--active,
.n-switch--active .n-switch__rail {
  background-color: var(--yw-brand) !important;
  --n-rail-color-active: var(--yw-brand) !important;
}
.n-switch {
  --n-rail-color-active: var(--yw-brand) !important;
  --n-loading-color:     var(--yw-brand) !important;
  --n-box-shadow-focus:  0 0 0 2px rgba(75,14,163,0.2) !important;
}

/* ── Checkboxes ──────────────────────────────────────────── */
.n-checkbox--checked .n-checkbox__box {
  background-color: var(--yw-brand) !important;
  border-color: var(--yw-brand) !important;
}

/* ── Dropdowns / Selects ─────────────────────────────────── */
.n-base-select-menu,
.n-dropdown-menu,
.n-popover {
  border-radius: var(--yw-r-lg) !important;
  border: 1px solid var(--yw-border) !important;
  box-shadow: var(--yw-shadow-lg) !important;
  background: var(--yw-white) !important;
  overflow: hidden !important;
}
.n-base-select-option:hover,
.n-dropdown-option:hover {
  background: var(--yw-brand-tint) !important;
  color: var(--yw-brand) !important;
}
.n-base-select-option--selected {
  background: var(--yw-brand-tint) !important;
  color: var(--yw-brand) !important;
  font-weight: 600 !important;
}

/* ── Pagination ──────────────────────────────────────────── */
.n-pagination-item--active {
  background: var(--yw-brand) !important;
  border-color: var(--yw-brand) !important;
  color: var(--yw-white) !important;
  border-radius: var(--yw-r) !important;
}

/* ── Modals / Dialogs ────────────────────────────────────── */
.n-modal,
.n-dialog {
  border-radius: var(--yw-r-xl) !important;
  box-shadow: var(--yw-shadow-lg) !important;
  background: var(--yw-white) !important;
}
.n-dialog__title {
  font-family: 'Poppins', sans-serif !important;
  font-weight: 600 !important;
  color: var(--yw-text) !important;
}

/* ── Cards (hl-card) ─────────────────────────────────────── */
.hl-card {
  background: var(--yw-white) !important;
  border-radius: var(--yw-r-lg) !important;
  box-shadow: var(--yw-shadow-sm) !important;
}

/* ── Tables ──────────────────────────────────────────────── */
table { border-collapse: separate !important; border-spacing: 0 !important; }
thead th,
.n-data-table-th {
  font-size: 11px !important;
  font-weight: 600 !important;
  color: var(--yw-text-3) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.06em !important;
  background: var(--yw-bg-page) !important;
  border-bottom: 1px solid var(--yw-border) !important;
  padding: 10px 16px !important;
}
tbody td,
.n-data-table-td {
  font-size: 14px !important;
  color: var(--yw-text) !important;
  border-bottom: 1px solid var(--yw-bg-soft) !important;
  padding: 12px 16px !important;
}
tbody tr:hover td,
.n-data-table-tr:hover .n-data-table-td {
  background: var(--yw-brand-tint) !important;
}

/* ── Pipeline / Kanban cards ─────────────────────────────── */
[class*="opportunity-card"],
[class*="pipeline-card"],
[class*="kanban-card"] {
  background: var(--yw-white) !important;
  border: 1px solid var(--yw-border) !important;
  border-radius: var(--yw-r-lg) !important;
  box-shadow: var(--yw-shadow-sm) !important;
}

/* ── Links ───────────────────────────────────────────────── */
a:not(.n-button):not([class*="btn"]):not(#sidebar-v2 nav a) {
  color: var(--yw-brand) !important;
  text-decoration: none !important;
}
a:not(.n-button):not([class*="btn"]):not(#sidebar-v2 nav a):hover {
  color: var(--yw-brand-hover) !important;
  text-decoration: underline !important;
}

/* ── Scrollbar ───────────────────────────────────────────── */
::-webkit-scrollbar { width: 5px; height: 5px; }
::-webkit-scrollbar-track { background: var(--yw-bg-page); }
::-webkit-scrollbar-thumb { background: var(--yw-border-2); border-radius: var(--yw-r-full); }
::-webkit-scrollbar-thumb:hover { background: var(--yw-brand); }
::selection { background: var(--yw-brand-tint); color: var(--yw-brand); }

/* ── Prevent card bleed onto chrome elements ─────────────── */
#location-switcher-sidbar-v2,
#backButtonv2,
.menu-title,
[class*="page-title"],
[class*="page-header"],
[class*="section-header"],
[class*="content-header"] {
  border-radius: 0 !important;
}
`;

    const el = document.createElement('style');
    el.id = 'yw-brand-css';
    el.textContent = css;
    document.head.appendChild(el);
  }

  // ─── OVERRIDE NAIVEUI INLINE CSS VARS ────────────────────────────────────────
  // NaiveUI injects colors via inline style attributes on individual elements.
  // CSS classes can't beat inline styles, so we patch them directly in the DOM.
  function patchNaiveUIColors() {
    const BRAND = '#4b0ea3';
    const BRAND_HOVER = '#36076d';
    const BRAND_TINT = '#f3edfb';
    const BRAND_FOCUS_SHADOW = '0 0 0 2px rgba(75,14,163,0.2)';

    // Patch every element that has NaiveUI primary color inline vars
    document.querySelectorAll('[style]').forEach(el => {
      const s = el.style;

      // Replace blue primary with YachtWay brand purple
      const primaryProps = [
        '--n-bar-color',
        '--n-tab-text-color-active',
        '--n-tab-text-color-hover',
        '--n-caret-color',
        '--n-border-hover',
        '--n-border-focus',
        '--n-rail-color-active',
        '--n-loading-color',
        '--n-ripple-color',
        '--n-dot-color-active',
        '--n-button-border-color-active',
        '--n-button-text-color-active',
        '--n-button-text-color-hover',
        '--n-button-box-shadow-focus',
      ];

      primaryProps.forEach(prop => {
        const val = s.getPropertyValue(prop);
        if (val && (val.includes('#155EEF') || val.includes('#004EEB') || val.includes('21, 94, 239'))) {
          if (prop.includes('shadow') || prop.includes('box-shadow')) {
            s.setProperty(prop, BRAND_FOCUS_SHADOW, 'important');
          } else if (prop.includes('hover') || prop.includes('active')) {
            s.setProperty(prop, BRAND_HOVER, 'important');
          } else {
            s.setProperty(prop, BRAND, 'important');
          }
        }
      });

      // Specifically fix --n-color for primary buttons
      if (el.classList.contains('n-button--primary-type')) {
        s.setProperty('--n-color', BRAND, 'important');
        s.setProperty('--n-color-hover', BRAND_HOVER, 'important');
        s.setProperty('--n-color-pressed', BRAND, 'important');
        s.setProperty('--n-color-focus', BRAND_HOVER, 'important');
        s.setProperty('--n-color-disabled', BRAND, 'important');
        s.setProperty('--n-border', `1px solid ${BRAND}`, 'important');
        s.setProperty('--n-border-hover', `1px solid ${BRAND_HOVER}`, 'important');
        s.setProperty('--n-border-focus', `1px solid ${BRAND_HOVER}`, 'important');
        s.setProperty('--n-ripple-color', BRAND, 'important');
      }

      // Fix tabs --n-bar-color and active text color
      if (el.classList.contains('n-tabs')) {
        s.setProperty('--n-bar-color', BRAND, 'important');
        s.setProperty('--n-tab-text-color-active', BRAND, 'important');
        s.setProperty('--n-tab-text-color-hover', BRAND, 'important');
      }

      // Fix switch --n-rail-color-active
      if (el.classList.contains('n-switch')) {
        s.setProperty('--n-rail-color-active', BRAND, 'important');
        s.setProperty('--n-box-shadow-focus', BRAND_FOCUS_SHADOW, 'important');
      }
    });
  }

  // ─── BRANDING ────────────────────────────────────────────────────────────────
  function applyBranding(b) {
    if (b.logoUrl) {
      // Actual GHL v2 sidebar logo selector from DOM inspection
      const logoSelectors = [
        'aside#sidebar-v2 .agency-logo-container img',
        'aside#sidebar-v2 img.agency-logo',
        '.agency-logo-container img',
        'img.agency-logo',
      ];
      logoSelectors.forEach(sel =>
        document.querySelectorAll(sel).forEach(img => {
          img.src = b.logoUrl;
          img.alt = 'YachtWay';
          img.style.cssText = 'max-height:40px;width:auto;max-width:80%;object-fit:contain;';
        })
      );
    }
    if (b.faviconUrl) {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = b.faviconUrl;
    }
  }

  // ─── HEADER BUTTONS ──────────────────────────────────────────────────────────
  function applyHeaderButtons(buttons) {
    if (!buttons?.length) return;
    // Actual GHL header controls area from DOM inspection
    const navSelectors = [
      'header.hl_header .hl_header--controls',
      'header.hl_header .container-fluid',
      'header.hl_header',
    ];
    let nav = null;
    for (const sel of navSelectors) {
      nav = document.querySelector(sel);
      if (nav) break;
    }
    if (!nav) return;

    nav.querySelectorAll('.yw-nav-btn').forEach(el => el.remove());
    buttons.forEach(btn => {
      const a = document.createElement('a');
      a.className = 'yw-nav-btn';
      a.href = btn.url || '#';
      a.textContent = btn.label;
      a.style.cssText = [
        'display:inline-flex',
        'align-items:center',
        'gap:6px',
        'padding:6px 12px',
        'border-radius:8px',
        'font-size:14px',
        'font-weight:500',
        'color:#22222d',
        'text-decoration:none',
        'background:transparent',
        'border:none',
        'cursor:pointer',
        'transition:background 0.12s,color 0.12s',
        'white-space:nowrap',
        'font-family:Figtree,sans-serif',
      ].join(';');
      a.onmouseenter = () => { a.style.background = '#f3edfb'; a.style.color = '#4b0ea3'; };
      a.onmouseleave = () => { a.style.background = 'transparent'; a.style.color = '#22222d'; };
      if (btn.external) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
      nav.insertBefore(a, nav.firstChild);
    });
  }

  // ─── USER MENU ───────────────────────────────────────────────────────────────
  function applyUserMenu(items) {
    if (!items?.length) return;
    // Actual GHL dropdown menu from DOM inspection
    const menuSelectors = [
      'header.hl_header .dropdown-menu',
      '.hl_header--dropdown .dropdown-menu',
    ];
    let menu = null;
    for (const sel of menuSelectors) {
      menu = document.querySelector(sel);
      if (menu) break;
    }
    if (!menu) return;

    menu.querySelectorAll('.yw-menu-item').forEach(el => el.remove());
    items.forEach(item => {
      const divider = document.createElement('hr');
      divider.className = 'dropdown-divider yw-menu-item';
      menu.appendChild(divider);

      const a = document.createElement('a');
      a.className = 'py-2 dropdown-item yw-menu-item';
      a.href = item.url || '#';
      a.textContent = item.label;
      if (item.external) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
      menu.appendChild(a);
    });
  }

  // ─── WIDGETS ─────────────────────────────────────────────────────────────────
  function applyWidgets(widgets) {
    widgets?.forEach(w => {
      const el = document.querySelector(`.hl-widget-${w.name.toLowerCase()}`);
      if (el) el.style.display = w.isVisible ? '' : 'none';
    });
  }

  // ─── SPA MUTATION OBSERVER ───────────────────────────────────────────────────
  // GHL is a Vue SPA; re-apply branding whenever the DOM changes significantly.
  function observeSPA(config) {
    let timer = null;
    new MutationObserver(() => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (config.branding)      applyBranding(config.branding);
        if (config.headerButtons) applyHeaderButtons(config.headerButtons);
        if (config.userMenu)      applyUserMenu(config.userMenu);
        patchNaiveUIColors();
      }, 350);
    }).observe(document.body, { childList: true, subtree: true });
  }

  // ─── BOOTSTRAP ───────────────────────────────────────────────────────────────
  // 1. Inject CSS immediately (no FOUC)
  injectStyles();

  // 2. Wait for DOM then patch NaiveUI inline vars
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', patchNaiveUIColors);
  } else {
    patchNaiveUIColors();
  }

  // 3. Fetch config and apply dynamic customizations
  fetch(CONFIG_URL)
    .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(config => {
      if (config.branding)      applyBranding(config.branding);
      if (config.headerButtons) applyHeaderButtons(config.headerButtons);
      if (config.userMenu)      applyUserMenu(config.userMenu);
      if (config.widgets)       applyWidgets(config.widgets);
      patchNaiveUIColors();
      observeSPA(config);
    })
    .catch(err => console.error('[YachtWay GHL] Config error:', err));

})();
