/**
 * YachtWay GHL Customizer
 * Built directly from YachtWay Design System tokens (Figma).
 *
 * Key design decisions (sourced from resolved BASIC Colors collection):
 *  - White sidebar & header — matches YachtWay.com light, clean UI
 *  - Primary text:    #2f2f39  (text-primary)
 *  - Brand purple:    #4b0ea3  (bg-brand-solid)
 *  - Brand hover:     #36076d  (border-brand_hover)
 *  - Brand tint:      #f3edfb  (bg-brand-tertiary) — hover/selected bg
 *  - Page bg:         #f9fafb  (bg-tertiary_subtle)
 *  - Borders:         #dcdcde  (border-primary)
 *  - Radius:          6px / 8px / 12px / 16px
 *  - Headings:        Poppins
 *  - Body:            Figtree
 */

(function () {
  'use strict';

  const CONFIG_URL =
    'https://cdn.jsdelivr.net/gh/kristi114/ghl-customizer@main/agency-config.json';

  // ─── DESIGN TOKENS ───────────────────────────────────────────────────────────
  const T = {
    brand:           '#4b0ea3',
    brandHover:      '#36076d',
    brandSecondary:  '#6430b0',
    brandTint:       '#f3edfb',
    brandTintMid:    '#e6dcf4',
    brandTintSubtle: '#faf6fe',
    brandDisabled:   '#ccb9e7',

    textPrimary:     '#2f2f39',
    textSecondary:   '#3c3c46',
    textTertiary:    '#727279',
    textQuaternary:  '#8c8c92',
    textDisabled:    '#a6a6ab',
    textPlaceholder: '#727279',
    textWhite:       '#ffffff',

    bgWhite:         '#ffffff',
    bgHover:         '#f6f6f7',
    bgPage:          '#f9fafb',
    bgTertiary:      '#f1f1f2',
    bgDark:          '#22222d',

    borderSubtle:    '#f1f1f2',
    borderDefault:   '#dcdcde',
    borderMedium:    '#c1c1c4',

    rSm:   '6px',
    rMd:   '8px',
    rLg:   '10px',
    rXl:   '12px',
    r2xl:  '16px',
    rFull: '9999px',

    fontHeading: "'Poppins', 'Helvetica Neue', Arial, sans-serif",
    fontBody:    "'Figtree', 'Helvetica Neue', Arial, sans-serif",

    shadowSm: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
    shadowMd: '0 4px 8px -2px rgba(0,0,0,0.10), 0 2px 4px -2px rgba(0,0,0,0.06)',
    shadowLg: '0 12px 16px -4px rgba(0,0,0,0.10), 0 4px 6px -2px rgba(0,0,0,0.05)',
  };

  // ─── CSS ─────────────────────────────────────────────────────────────────────
  function injectStyles() {
    if (document.getElementById('yw-brand-css')) return;

    const css = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Figtree:wght@300;400;500;600;700&display=swap');

:root {
  --yw-brand:           ${T.brand};
  --yw-brand-hover:     ${T.brandHover};
  --yw-brand-secondary: ${T.brandSecondary};
  --yw-brand-tint:      ${T.brandTint};
  --yw-brand-tint-mid:  ${T.brandTintMid};
  --yw-brand-disabled:  ${T.brandDisabled};
  --yw-text-primary:    ${T.textPrimary};
  --yw-text-secondary:  ${T.textSecondary};
  --yw-text-tertiary:   ${T.textTertiary};
  --yw-text-disabled:   ${T.textDisabled};
  --yw-text-white:      ${T.textWhite};
  --yw-bg-white:        ${T.bgWhite};
  --yw-bg-hover:        ${T.bgHover};
  --yw-bg-page:         ${T.bgPage};
  --yw-bg-tertiary:     ${T.bgTertiary};
  --yw-bg-dark:         ${T.bgDark};
  --yw-border:          ${T.borderDefault};
  --yw-border-subtle:   ${T.borderSubtle};
  --yw-border-medium:   ${T.borderMedium};
  --yw-r-sm:   ${T.rSm};
  --yw-r-md:   ${T.rMd};
  --yw-r-xl:   ${T.rXl};
  --yw-r-2xl:  ${T.r2xl};
  --yw-r-full: ${T.rFull};
  --yw-shadow-sm: ${T.shadowSm};
  --yw-shadow-md: ${T.shadowMd};
  --yw-shadow-lg: ${T.shadowLg};
}

/* ── Fonts ── */
*, body, input, button, select, textarea {
  font-family: ${T.fontBody} !important;
}
h1, h2, h3, h4, h5, h6,
[class*="heading"], [class*="title"], .hl-dashboard-title {
  font-family: ${T.fontHeading} !important;
  color: var(--yw-text-primary) !important;
  font-weight: 600 !important;
  letter-spacing: -0.01em !important;
}

/* ── Sidebar — WHITE, light, matches YachtWay.com ── */
.hl-sidebar, aside, nav[class*="side"], [class*="sidebar"] {
  background: var(--yw-bg-white) !important;
  border-right: 1px solid var(--yw-border) !important;
  box-shadow: var(--yw-shadow-sm) !important;
}
.hl-sidebar a, .hl-sidebar li, .hl-sidebar button, .hl-sidebar span,
nav[class*="side"] a, nav[class*="side"] li,
.n-menu-item__content, [class*="nav-item"], [class*="menu-item"] {
  color: var(--yw-text-secondary) !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  border-radius: var(--yw-r-md) !important;
  transition: background 0.12s, color 0.12s !important;
}
.hl-sidebar a:hover, nav[class*="side"] a:hover,
.n-menu-item:hover .n-menu-item__content,
[class*="nav-item"]:hover, [class*="menu-item"]:hover {
  background: var(--yw-brand-tint) !important;
  color: var(--yw-brand) !important;
}
.hl-sidebar a.active, .hl-sidebar a[aria-current="page"],
nav[class*="side"] a.router-link-active,
.n-menu-item--selected .n-menu-item__content,
[class*="nav-item--active"], [class*="menu-item--active"], [class*="active-nav"] {
  background: var(--yw-brand-tint) !important;
  color: var(--yw-brand) !important;
  font-weight: 600 !important;
}
.hl-sidebar svg, nav[class*="side"] svg { color: inherit !important; }
[class*="sidebar-logo"], [class*="sidebar-header"] {
  background: var(--yw-bg-white) !important;
  border-bottom: 1px solid var(--yw-border) !important;
  padding: 16px 20px !important;
}
.n-submenu-children, [class*="submenu"], [class*="sub-menu"] {
  background: var(--yw-bg-page) !important;
}

/* ── Header ── */
.hl-header, header, [class*="top-bar"], [class*="topbar"],
[class*="header-nav"], [class*="top-navigation"] {
  background: var(--yw-bg-white) !important;
  border-bottom: 1px solid var(--yw-border) !important;
  box-shadow: var(--yw-shadow-sm) !important;
}
.hl-header-logo img, [class*="header-logo"] img, header img[alt*="logo"] {
  max-height: 32px !important;
  width: auto !important;
  object-fit: contain !important;
}

/* ── Primary Button ── */
.n-button--primary-type, button[class*="primary"],
[class*="btn-primary"], .hl-btn-primary {
  background: var(--yw-brand) !important;
  border: 1px solid var(--yw-brand) !important;
  color: var(--yw-text-white) !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  border-radius: var(--yw-r-md) !important;
  transition: background 0.12s, box-shadow 0.12s !important;
}
.n-button--primary-type:hover, button[class*="primary"]:hover,
[class*="btn-primary"]:hover {
  background: var(--yw-brand-hover) !important;
  border-color: var(--yw-brand-hover) !important;
  box-shadow: 0 0 0 4px rgba(75,14,163,0.14) !important;
}

/* ── Secondary Button ── */
.n-button--default-type, button[class*="secondary"],
[class*="btn-secondary"], [class*="btn-outline"], .hl-btn-secondary {
  background: var(--yw-bg-white) !important;
  border: 1px solid var(--yw-border-medium) !important;
  color: var(--yw-text-primary) !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  border-radius: var(--yw-r-md) !important;
  transition: border-color 0.12s, color 0.12s, background 0.12s !important;
}
.n-button--default-type:hover, button[class*="secondary"]:hover,
[class*="btn-secondary"]:hover {
  border-color: var(--yw-brand) !important;
  color: var(--yw-brand) !important;
  background: var(--yw-brand-tint) !important;
}

/* ── Inputs ── */
input[type="text"], input[type="email"], input[type="password"],
input[type="search"], input[type="number"], input[type="tel"],
input[type="url"], textarea, select,
.n-input__input-el, .n-select, [class*="form-control"] {
  font-size: 14px !important;
  color: var(--yw-text-primary) !important;
  background: var(--yw-bg-white) !important;
  border: 1px solid var(--yw-border) !important;
  border-radius: var(--yw-r-md) !important;
  transition: border-color 0.12s, box-shadow 0.12s !important;
}
input:focus, textarea:focus, select:focus,
.n-input--focus, [class*="input-wrapper"]:focus-within {
  border-color: var(--yw-brand) !important;
  box-shadow: 0 0 0 3px rgba(75,14,163,0.12) !important;
  outline: none !important;
}
input::placeholder, textarea::placeholder {
  color: var(--yw-text-placeholder) !important;
  opacity: 1 !important;
}
label, [class*="form-label"], [class*="input-label"] {
  font-size: 14px !important;
  font-weight: 500 !important;
  color: var(--yw-text-secondary) !important;
}

/* ── Links ── */
a:not([class*="btn"]):not([class*="button"]) {
  color: var(--yw-brand) !important;
  text-decoration: none !important;
  transition: color 0.12s !important;
}
a:not([class*="btn"]):not([class*="button"]):hover {
  color: var(--yw-brand-hover) !important;
  text-decoration: underline !important;
}

/* ── Cards ── */
.n-card, [class*="card"]:not([class*="nav"]):not([class*="menu"]),
[class*="panel"], [class*="widget-wrap"] {
  background: var(--yw-bg-white) !important;
  border: 1px solid var(--yw-border) !important;
  border-radius: var(--yw-r-xl) !important;
  box-shadow: var(--yw-shadow-sm) !important;
}

/* ── Tables ── */
table, .n-data-table, [class*="data-table"] {
  font-size: 14px !important;
  border-collapse: separate !important;
  border-spacing: 0 !important;
}
thead th, .n-data-table-th {
  font-size: 12px !important;
  font-weight: 600 !important;
  color: var(--yw-text-tertiary) !important;
  text-transform: uppercase !important;
  letter-spacing: 0.05em !important;
  background: var(--yw-bg-page) !important;
  border-bottom: 1px solid var(--yw-border) !important;
  padding: 10px 16px !important;
}
tbody td, .n-data-table-td {
  color: var(--yw-text-primary) !important;
  border-bottom: 1px solid var(--yw-border-subtle) !important;
  padding: 12px 16px !important;
}
tbody tr:hover td, .n-data-table-tr:hover .n-data-table-td {
  background: var(--yw-brand-tint) !important;
}

/* ── Tabs ── */
.n-tabs-tab, [class*="tab-item"] {
  font-size: 14px !important;
  font-weight: 500 !important;
  color: var(--yw-text-tertiary) !important;
  transition: color 0.12s !important;
}
.n-tabs-tab--active, [class*="tab--active"], [class*="tab--selected"] {
  color: var(--yw-brand) !important;
  font-weight: 600 !important;
  border-bottom-color: var(--yw-brand) !important;
}
.n-tabs-bar, [class*="tab-bar"], [class*="tab-indicator"] {
  background: var(--yw-brand) !important;
}

/* ── Dropdowns ── */
.n-dropdown, .n-select-menu, [class*="dropdown-menu"],
[class*="select-dropdown"], [class*="popover-content"] {
  border-radius: var(--yw-r-xl) !important;
  border: 1px solid var(--yw-border) !important;
  box-shadow: var(--yw-shadow-lg) !important;
  background: var(--yw-bg-white) !important;
  overflow: hidden !important;
}
.n-dropdown-option, .n-select-option, [class*="dropdown-item"] {
  font-size: 14px !important;
  color: var(--yw-text-primary) !important;
  padding: 8px 12px !important;
  border-radius: var(--yw-r-sm) !important;
  transition: background 0.1s !important;
}
.n-dropdown-option:hover, .n-select-option:hover,
[class*="dropdown-item"]:hover {
  background: var(--yw-brand-tint) !important;
  color: var(--yw-brand) !important;
}
.n-dropdown-option--pending, .n-select-option--selected,
[class*="option--selected"] {
  background: var(--yw-brand-tint) !important;
  color: var(--yw-brand) !important;
  font-weight: 600 !important;
}

/* ── Badges / Tags ── */
.n-tag, [class*="badge"], [class*="tag"], [class*="pill"], [class*="chip"] {
  font-size: 12px !important;
  font-weight: 500 !important;
  border-radius: var(--yw-r-full) !important;
  padding: 2px 10px !important;
}
[class*="badge-primary"], [class*="tag-primary"] {
  background: var(--yw-brand-tint) !important;
  color: var(--yw-brand) !important;
  border: 1px solid var(--yw-brand-tint-mid) !important;
}

/* ── Modals ── */
.n-modal, .n-dialog, [class*="modal-container"] {
  border-radius: var(--yw-r-2xl) !important;
  box-shadow: var(--yw-shadow-lg) !important;
  background: var(--yw-bg-white) !important;
}
.n-modal__header, [class*="modal-header"] {
  font-family: ${T.fontHeading} !important;
  font-size: 18px !important;
  font-weight: 600 !important;
  color: var(--yw-text-primary) !important;
  border-bottom: 1px solid var(--yw-border) !important;
  padding: 20px 24px !important;
}

/* ── Checkboxes & Toggles ── */
input[type="checkbox"]:checked,
.n-checkbox--checked .n-checkbox__box {
  background: var(--yw-brand) !important;
  border-color: var(--yw-brand) !important;
}
.n-switch--active, [class*="toggle--on"] {
  background: var(--yw-brand) !important;
}

/* ── Progress ── */
.n-progress-graph__fill, [class*="progress-fill"] {
  background: var(--yw-brand) !important;
}

/* ── Pagination ── */
.n-pagination-item--active, [class*="page-item--active"] {
  background: var(--yw-brand) !important;
  border-color: var(--yw-brand) !important;
  color: var(--yw-text-white) !important;
  border-radius: var(--yw-r-md) !important;
}
[class*="page-item"]:hover, [class*="pagination-item"]:hover {
  background: var(--yw-brand-tint) !important;
  color: var(--yw-brand) !important;
  border-radius: var(--yw-r-md) !important;
}

/* ── Scrollbar ── */
::-webkit-scrollbar { width: 5px; height: 5px; }
::-webkit-scrollbar-track { background: var(--yw-bg-page); }
::-webkit-scrollbar-thumb {
  background: var(--yw-border-medium);
  border-radius: var(--yw-r-full);
}
::-webkit-scrollbar-thumb:hover { background: var(--yw-brand); }

/* ── Avatars ── */
[class*="avatar"]:not(img) {
  background: var(--yw-brand-tint) !important;
  color: var(--yw-brand) !important;
  font-weight: 600 !important;
  border-radius: var(--yw-r-full) !important;
}

/* ── Injected nav buttons ── */
.yw-nav-btn {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 6px 12px;
  border-radius: var(--yw-r-md);
  font-size: 14px; font-weight: 500;
  color: var(--yw-text-secondary);
  text-decoration: none !important;
  background: transparent; border: none; cursor: pointer;
  transition: background 0.12s, color 0.12s;
  white-space: nowrap;
}
.yw-nav-btn:hover {
  background: var(--yw-brand-tint) !important;
  color: var(--yw-brand) !important;
}

/* ── Injected user menu items ── */
.yw-menu-item { list-style: none; }
.yw-menu-item a {
  display: block; padding: 8px 16px;
  font-size: 14px; font-weight: 400;
  color: var(--yw-text-primary) !important;
  text-decoration: none !important;
  transition: background 0.1s, color 0.1s;
  border-radius: var(--yw-r-sm);
}
.yw-menu-item a:hover {
  background: var(--yw-brand-tint) !important;
  color: var(--yw-brand) !important;
}
`;

    const el = document.createElement('style');
    el.id = 'yw-brand-css';
    el.textContent = css;
    document.head.appendChild(el);
  }

  // ─── APPLY BRANDING ──────────────────────────────────────────────────────────
  function applyBranding(b) {
    if (b.logoUrl) {
      [
        '.hl-header-logo img',
        '[class*="sidebar-logo"] img',
        '[class*="brand-logo"] img',
        'header img[alt*="logo"]',
        'header img[alt*="Logo"]',
        '.logo img',
      ].forEach(sel =>
        document.querySelectorAll(sel).forEach(img => {
          img.src = b.logoUrl;
          img.alt = 'YachtWay';
          img.style.cssText = 'max-height:32px;width:auto;object-fit:contain;';
        })
      );
    }
    if (b.faviconUrl) {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) { link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); }
      link.href = b.faviconUrl;
    }
    if (b.dashboardTitle) {
      const el = document.querySelector('.hl-dashboard-title, [class*="dashboard-title"]');
      if (el) el.textContent = b.dashboardTitle;
    }
  }

  // ─── HEADER BUTTONS ──────────────────────────────────────────────────────────
  function applyHeaderButtons(buttons) {
    if (!buttons?.length) return;
    let nav = null;
    for (const sel of ['.hl-header-nav','header nav','[class*="header-actions"]','[class*="header-right"]','[class*="top-nav"]']) {
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
      if (btn.external) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
      nav.appendChild(a);
    });
  }

  // ─── USER MENU ───────────────────────────────────────────────────────────────
  function applyUserMenu(items) {
    if (!items?.length) return;
    let menu = null;
    for (const sel of ['.hl-user-menu','[class*="user-dropdown"]','[class*="profile-menu"]','[class*="account-menu"]']) {
      menu = document.querySelector(sel);
      if (menu) break;
    }
    if (!menu) return;
    menu.querySelectorAll('.yw-menu-item').forEach(el => el.remove());
    items.forEach(item => {
      const li = document.createElement('li');
      li.className = 'yw-menu-item';
      li.innerHTML = `<a href="${item.url}"${item.external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${item.label}</a>`;
      menu.appendChild(li);
    });
  }

  // ─── WIDGETS ─────────────────────────────────────────────────────────────────
  function applyWidgets(widgets) {
    widgets?.forEach(w => {
      const el = document.querySelector(`.hl-widget-${w.name.toLowerCase()}`);
      if (el) el.style.display = w.isVisible ? '' : 'none';
    });
  }

  // ─── DASHBOARD FEATURES ──────────────────────────────────────────────────────
  function applyDashboardFeatures(cfg) {
    if (!cfg) return;
    if (cfg.autoSave?.isEnabled) document.body.classList.add('yw-autosave');
    if (cfg.saveButtonMove?.isEnabled) {
      const btn = document.querySelector('.hl-save-btn, [class*="save-button"]');
      if (btn) btn.style.position = 'fixed';
    }
  }

  // ─── FEATURE TOGGLES ─────────────────────────────────────────────────────────
  function applyFeatureToggles(t) {
    if (t?.showNotifications === false) {
      const n = document.querySelector('.hl-notifications, [class*="notifications-bell"]');
      if (n) n.style.display = 'none';
    }
  }

  // ─── SPA OBSERVER ────────────────────────────────────────────────────────────
  function observe(config) {
    let timer = null;
    new MutationObserver(() => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (config.branding) applyBranding(config.branding);
        if (config.headerButtons) applyHeaderButtons(config.headerButtons);
        if (config.userMenu) applyUserMenu(config.userMenu);
      }, 300);
    }).observe(document.body, { childList: true, subtree: true });
  }

  // ─── BOOTSTRAP ───────────────────────────────────────────────────────────────
  injectStyles();

  fetch(CONFIG_URL)
    .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(config => {
      if (config.branding)            applyBranding(config.branding);
      if (config.headerButtons)       applyHeaderButtons(config.headerButtons);
      if (config.userMenu)            applyUserMenu(config.userMenu);
      if (config.widgets)             applyWidgets(config.widgets);
      if (config.dashboardCustomizer) applyDashboardFeatures(config.dashboardCustomizer);
      if (config.featureToggles)      applyFeatureToggles(config.featureToggles);
      observe(config);
    })
    .catch(err => console.error('[YachtWay GHL] Config error:', err));

})();
