/**
 * YachtWay GHL Customizer
 * github.com/kristi114/ghl-customizer
 *
 * The CSS in this file exactly mirrors ghl-custom.css.
 * It injects before the config loads to prevent any flash of GHL's default styles.
 */

(function () {
  'use strict';

  const CONFIG_URL =
    'https://cdn.jsdelivr.net/gh/kristi114/ghl-customizer@main/agency-config.json';

  function injectStyles() {
    if (document.getElementById('yw-brand-css')) return;

    const css = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Figtree:wght@300;400;500;600;700&display=swap');

:root {
  --yw-brand:       #4b0ea3;
  --yw-brand-hover: #36076d;
  --yw-brand-tint:  #f3edfb;
  --yw-brand-mid:   #e6dcf4;
  --yw-text:        #22222d;
  --yw-text-2:      #22222d;
  --yw-text-3:      #727279;
  --yw-text-4:      #8c8c92;
  --yw-white:       #ffffff;
  --yw-bg-page:     #f9fafb;
  --yw-bg-soft:     #f1f1f2;
  --yw-border:      #dcdcde;
  --yw-border-2:    #c1c1c4;
  --yw-shadow-sm:   0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --yw-shadow-lg:   0 12px 16px -4px rgba(0,0,0,0.12), 0 4px 6px -2px rgba(0,0,0,0.06);
  --yw-r:           8px;
  --yw-r-sm:        6px;
  --yw-r-lg:        12px;
  --yw-r-xl:        16px;
  --yw-r-full:      9999px;
}

html body, html body * {
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

/* SIDEBAR */
#side-bar-sub, #sidebar, .side-bar, .side-bar-menu, nav.side-bar,
[id*="sidebar"], [id*="side-bar"],
[class*="side-bar"]:not([class*="sub-location"]),
.builder-sidebar {
  background-color: var(--yw-white) !important;
  background: var(--yw-white) !important;
  border-right: 1px solid var(--yw-border) !important;
  box-shadow: var(--yw-shadow-sm) !important;
}
#side-bar-sub a, #sidebar a, .side-bar a, .side-bar-menu a,
nav.side-bar a, [id*="sidebar"] a, [id*="side-bar"] a,
[class*="side-bar"] a, [class*="sidebar-item"],
[class*="nav-link"], [class*="menu-link"] {
  color: var(--yw-text) !important;
  background: transparent !important;
  font-size: 13.5px !important;
  font-weight: 500 !important;
  border-radius: var(--yw-r-sm) !important;
  text-decoration: none !important;
  transition: background 0.12s, color 0.12s !important;
}
#side-bar-sub a:hover, .side-bar a:hover, .side-bar-menu a:hover,
nav.side-bar a:hover, [class*="side-bar"] a:hover,
[class*="sidebar-item"]:hover, [class*="nav-link"]:hover {
  background: var(--yw-brand-tint) !important;
  color: var(--yw-brand) !important;
}
#side-bar-sub a.active, #side-bar-sub a.router-link-active,
#side-bar-sub a[aria-current], .side-bar a.active,
.side-bar a.router-link-active, .side-bar-menu a.active,
nav.side-bar a.router-link-active, [class*="side-bar"] a.active,
[class*="sidebar-item"].active, [class*="nav-link"].active,
[class*="nav-link"].router-link-active {
  background: var(--yw-brand-tint) !important;
  color: var(--yw-brand) !important;
  font-weight: 600 !important;
}
#side-bar-sub svg, .side-bar svg, .side-bar-menu svg,
[class*="side-bar"] svg, [class*="sidebar"] svg {
  color: inherit !important;
  fill: currentColor !important;
}
[class*="sidebar-logo"], [class*="sidebar-header"],
[class*="sidebar-brand"], [class*="nav-logo"], [class*="logo-wrap"] {
  background: var(--yw-white) !important;
  border-bottom: 1px solid var(--yw-border) !important;
}
[class*="sub-nav"], [class*="sub-menu"], [class*="submenu"] {
  background: var(--yw-bg-page) !important;
}

/* HEADER */
#header, .hl-header, header, .top-bar, [id="header"],
[class*="top-bar"], [class*="topbar"],
[class*="header-wrapper"], [class*="app-header"], [class*="navbar"] {
  background: var(--yw-white) !important;
  border-bottom: 1px solid var(--yw-border) !important;
  box-shadow: var(--yw-shadow-sm) !important;
}
#header img, header img, .top-bar img,
[class*="logo"] img, [class*="brand"] img {
  max-height: 34px !important;
  width: auto !important;
  object-fit: contain !important;
}

/* PAGE BG */
html body, #app, .hl-app, #main-content, .main-content,
[class*="main-wrapper"], [class*="content-wrapper"], [class*="page-content"] {
  background: var(--yw-bg-page) !important;
}

/* CARDS */
.n-card, .card, [class*="settings-section"], [class*="settings-card"],
[class*="settings-panel"], [class*="form-section"],
[class*="panel"], [class*="block"] {
  background: var(--yw-white) !important;
  border-radius: var(--yw-r-lg) !important;
  box-shadow: var(--yw-shadow-sm) !important;
}

/* TABS */
.n-tabs-tab, [class*="tab-item"], [class*="tab-nav"] li, [role="tab"] {
  font-size: 14px !important;
  font-weight: 500 !important;
  color: var(--yw-text-3) !important;
  transition: color 0.12s !important;
  cursor: pointer !important;
}
.n-tabs-tab--active, [class*="tab-item"].active,
[class*="tab--active"], [role="tab"][aria-selected="true"],
.router-link-active[role="tab"] {
  color: var(--yw-brand) !important;
  font-weight: 600 !important;
  border-bottom: 2px solid var(--yw-brand) !important;
}
.n-tabs-bar, [class*="tab-bar"], [class*="tab-indicator"] {
  background: var(--yw-brand) !important;
  height: 2px !important;
  border-radius: var(--yw-r-full) !important;
}

/* BUTTONS — PRIMARY */
.n-button--primary-type, .n-button.n-button--primary-type,
button.btn-primary, [class*="btn-primary"],
[class*="button--primary"], [class*="primary-btn"], .hl-btn-primary {
  background: var(--yw-brand) !important;
  background-color: var(--yw-brand) !important;
  border: 1.5px solid var(--yw-brand) !important;
  color: var(--yw-white) !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  border-radius: var(--yw-r) !important;
  box-shadow: none !important;
}
.n-button--primary-type:hover, button.btn-primary:hover,
[class*="btn-primary"]:hover, [class*="button--primary"]:hover {
  background: var(--yw-brand) !important;
  background-color: var(--yw-brand) !important;
  border-color: var(--yw-brand) !important;
  box-shadow: 0 0 0 4px rgba(75,14,163,0.16) !important;
}

/* BUTTONS — SECONDARY */
.n-button--default-type, .n-button.n-button--default-type,
button.btn-secondary, [class*="btn-secondary"],
[class*="button--secondary"], [class*="btn-outline"], .hl-btn-secondary {
  background: var(--yw-white) !important;
  background-color: var(--yw-white) !important;
  border: 1.5px solid var(--yw-border-2) !important;
  color: var(--yw-text) !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  border-radius: var(--yw-r) !important;
  box-shadow: none !important;
}
.n-button--default-type:hover, button.btn-secondary:hover,
[class*="btn-secondary"]:hover {
  border-color: var(--yw-brand) !important;
  color: var(--yw-brand) !important;
  background: var(--yw-brand-tint) !important;
}

/* INPUTS */
.n-input, .n-input__input-el,
input[type="text"], input[type="email"], input[type="password"],
input[type="number"], input[type="search"], input[type="tel"],
input[type="url"], input[type="date"], textarea, select,
[class*="form-control"], [class*="input-field"] {
  font-size: 14px !important;
  color: var(--yw-text) !important;
  background: var(--yw-white) !important;
  background-color: var(--yw-white) !important;
  border: 1px solid var(--yw-border) !important;
  border-radius: var(--yw-r) !important;
  transition: border-color 0.12s, box-shadow 0.12s !important;
}
.n-input--focus, input:focus, textarea:focus, select:focus {
  border-color: var(--yw-brand) !important;
  box-shadow: 0 0 0 3px rgba(75,14,163,0.12) !important;
  outline: none !important;
}
input::placeholder, textarea::placeholder {
  color: var(--yw-text-3) !important; opacity: 1 !important;
}
label, .n-form-item-label, [class*="form-label"], [class*="input-label"] {
  font-size: 13px !important; font-weight: 500 !important; color: var(--yw-text) !important;
}

/* LINKS */
a:not(.n-button):not([class*="btn"]) { color: var(--yw-brand) !important; text-decoration: none !important; }
a:not(.n-button):not([class*="btn"]):hover { color: var(--yw-brand-hover) !important; text-decoration: underline !important; }

/* DROPDOWNS */
.n-base-select-menu, .n-dropdown-menu, .n-popover,
[class*="dropdown-menu"], [class*="select-menu"], [class*="popover-content"] {
  border-radius: var(--yw-r-lg) !important;
  border: 1px solid var(--yw-border) !important;
  box-shadow: var(--yw-shadow-lg) !important;
  background: var(--yw-white) !important;
  overflow: hidden !important;
}
.n-base-select-option:hover, .n-dropdown-option:hover,
[class*="select-option"]:hover, [class*="dropdown-item"]:hover {
  background: var(--yw-brand-tint) !important;
  color: var(--yw-brand) !important;
}
.n-base-select-option--selected {
  background: var(--yw-brand-tint) !important;
  color: var(--yw-brand) !important;
  font-weight: 600 !important;
}

/* TABLES */
table { border-collapse: separate !important; border-spacing: 0 !important; }
thead th, .n-data-table-th {
  font-size: 11px !important; font-weight: 600 !important;
  color: var(--yw-text-3) !important; text-transform: uppercase !important;
  letter-spacing: 0.06em !important; background: var(--yw-bg-page) !important;
  border-bottom: 1px solid var(--yw-border) !important; padding: 10px 16px !important;
}
tbody td, .n-data-table-td {
  font-size: 14px !important; color: var(--yw-text) !important;
  border-bottom: 1px solid var(--yw-bg-soft) !important; padding: 12px 16px !important;
}
tbody tr:hover td, .n-data-table-tr:hover .n-data-table-td {
  background: var(--yw-brand-tint) !important;
}

/* CHECKBOXES / TOGGLES */
.n-checkbox--checked .n-checkbox__box { background-color: var(--yw-brand) !important; border-color: var(--yw-brand) !important; }
.n-switch.n-switch--active { background-color: var(--yw-brand) !important; }

/* MODALS */
.n-modal, .n-dialog { border-radius: var(--yw-r-xl) !important; box-shadow: var(--yw-shadow-lg) !important; background: var(--yw-white) !important; }
.n-dialog__title { font-family: 'Poppins', sans-serif !important; font-weight: 600 !important; color: var(--yw-text) !important; }

/* SCROLLBAR */
::-webkit-scrollbar { width: 5px; height: 5px; }
::-webkit-scrollbar-track { background: var(--yw-bg-page); }
::-webkit-scrollbar-thumb { background: var(--yw-border-2); border-radius: var(--yw-r-full); }
::-webkit-scrollbar-thumb:hover { background: var(--yw-brand); }
::selection { background: var(--yw-brand-tint); color: var(--yw-brand); }

/* PAGINATION */
.n-pagination-item--active { background: var(--yw-brand) !important; border-color: var(--yw-brand) !important; color: var(--yw-white) !important; border-radius: var(--yw-r) !important; }

/* PIPELINE */
[class*="opportunity-card"], [class*="pipeline-card"], [class*="kanban-card"] {
  background: var(--yw-white) !important; border: 1px solid var(--yw-border) !important;
  border-radius: var(--yw-r-lg) !important; box-shadow: var(--yw-shadow-sm) !important;
}
    `;

    const el = document.createElement('style');
    el.id = 'yw-brand-css';
    el.textContent = css;
    document.head.appendChild(el);
  }

  // ─── BRANDING ────────────────────────────────────────────────────────────────
  function applyBranding(b) {
    if (b.logoUrl) {
      const selectors = [
        '.hl-header-logo img', '[class*="sidebar-logo"] img',
        '[class*="brand-logo"] img', 'header img[alt*="logo"]',
        'header img[alt*="Logo"]', '.logo img', '#side-bar-sub img',
      ];
      selectors.forEach(sel =>
        document.querySelectorAll(sel).forEach(img => {
          img.src = b.logoUrl;
          img.alt = 'YachtWay';
          img.style.cssText = 'max-height:34px;width:auto;object-fit:contain;';
        })
      );
    }
    if (b.faviconUrl) {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) { link = document.createElement('link'); link.rel = 'icon'; document.head.appendChild(link); }
      link.href = b.faviconUrl;
    }
  }

  // ─── HEADER BUTTONS ──────────────────────────────────────────────────────────
  function applyHeaderButtons(buttons) {
    if (!buttons?.length) return;
    const selectors = ['#header nav', '.hl-header-nav', 'header nav',
      '[class*="header-actions"]', '[class*="header-right"]', '[class*="top-nav"]'];
    let nav = null;
    for (const sel of selectors) { nav = document.querySelector(sel); if (nav) break; }
    if (!nav) return;
    nav.querySelectorAll('.yw-nav-btn').forEach(el => el.remove());
    buttons.forEach(btn => {
      const a = document.createElement('a');
      a.className = 'yw-nav-btn';
      a.href = btn.url || '#';
      a.textContent = btn.label;
      a.style.cssText = `
        display:inline-flex;align-items:center;gap:6px;padding:6px 12px;
        border-radius:8px;font-size:14px;font-weight:500;
        color:#22222d;text-decoration:none;background:transparent;
        border:none;cursor:pointer;transition:background 0.12s,color 0.12s;white-space:nowrap;
      `;
      a.onmouseenter = () => { a.style.background = '#f3edfb'; a.style.color = '#4b0ea3'; };
      a.onmouseleave = () => { a.style.background = 'transparent'; a.style.color = '#22222d'; };
      if (btn.external) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
      nav.appendChild(a);
    });
  }

  // ─── USER MENU ───────────────────────────────────────────────────────────────
  function applyUserMenu(items) {
    if (!items?.length) return;
    const selectors = ['.hl-user-menu', '[class*="user-dropdown"]',
      '[class*="profile-menu"]', '[class*="account-menu"]'];
    let menu = null;
    for (const sel of selectors) { menu = document.querySelector(sel); if (menu) break; }
    if (!menu) return;
    menu.querySelectorAll('.yw-menu-item').forEach(el => el.remove());
    items.forEach(item => {
      const li = document.createElement('li');
      li.className = 'yw-menu-item';
      li.innerHTML = `<a href="${item.url}"${item.external ? ' target="_blank" rel="noopener noreferrer"' : ''} style="display:block;padding:8px 16px;font-size:14px;color:#22222d;text-decoration:none;border-radius:6px;">${item.label}</a>`;
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
      if (config.branding)       applyBranding(config.branding);
      if (config.headerButtons)  applyHeaderButtons(config.headerButtons);
      if (config.userMenu)       applyUserMenu(config.userMenu);
      if (config.widgets)        applyWidgets(config.widgets);
      observe(config);
    })
    .catch(err => console.error('[YachtWay GHL] Config error:', err));

})();
