/**
 * YachtWay GHL Customizer
 * Applies YachtWay brand identity to the GoHighLevel agency dashboard.
 *
 * Brand colors sourced from YachtWay Design System (Figma):
 *   Brand/700  #4b0ea3  — primary CTA / active states
 *   Brand/600  #6430b0  — accent / hover
 *   Brand/50   #f3edfb  — light tint / backgrounds
 *   Gray/900   #22222d  — primary text
 *   Gray/600   #575760  — secondary text
 *   Gray/400   #8c8c92  — placeholder / muted
 *   Gray/100   #dcdcde  — borders
 *   Gray/25    #f6f6f7  — tertiary background
 *   Gray/10    #f9fafb  — page background
 *
 * Typography: Inter (matches YachtWay design system sans-serif)
 */

(function () {
  'use strict';

  const CONFIG_URL =
    'https://cdn.jsdelivr.net/gh/nicopasion/ghl-customizer@main/agency-config.json';

  // ─── DESIGN TOKENS ───────────────────────────────────────────────────────────
  const TOKENS = {
    // Brand
    brandPrimary:      '#4b0ea3',
    brandPrimaryHover: '#36076d',
    brandAccent:       '#6430b0',
    brandLight:        '#f3edfb',
    brandBorder:       '#ccb9e7',

    // Text
    textDark:          '#22222d',
    textMedium:        '#575760',
    textLight:         '#8c8c92',
    textWhite:         '#ffffff',

    // Backgrounds
    bgWhite:           '#ffffff',
    bgPage:            '#f9fafb',
    bgSecondary:       '#f6f6f7',
    bgTertiary:        '#f1f1f2',

    // Borders / Dividers
    borderSubtle:      '#dcdcde',
    borderDefault:     '#c1c1c4',

    // States
    errorSolid:        '#d92d20',
    successSolid:      '#039855',

    // Radius
    radiusSm:          '6px',
    radiusMd:          '8px',
    radiusLg:          '12px',
    radiusFull:        '9999px',

    // Font
    fontFamily:        "'Figtree', 'Helvetica Neue', Arial, sans-serif",
    fontFamilyHeading: "'Poppins', 'Helvetica Neue', Arial, sans-serif",
  };

  // ─── CSS INJECTION ────────────────────────────────────────────────────────────
  function injectGlobalStyles() {
    const styleId = 'yachtway-ghl-brand';
    if (document.getElementById(styleId)) return;

    const css = `
      /* ── YachtWay Brand Overrides ── */
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Figtree:wght@300;400;500;600;700&display=swap');

      :root {
        --yw-brand:            ${TOKENS.brandPrimary};
        --yw-brand-hover:      ${TOKENS.brandPrimaryHover};
        --yw-brand-accent:     ${TOKENS.brandAccent};
        --yw-brand-light:      ${TOKENS.brandLight};
        --yw-brand-border:     ${TOKENS.brandBorder};
        --yw-text-dark:        ${TOKENS.textDark};
        --yw-text-medium:      ${TOKENS.textMedium};
        --yw-text-light:       ${TOKENS.textLight};
        --yw-text-white:       ${TOKENS.textWhite};
        --yw-bg-white:         ${TOKENS.bgWhite};
        --yw-bg-page:          ${TOKENS.bgPage};
        --yw-bg-secondary:     ${TOKENS.bgSecondary};
        --yw-bg-tertiary:      ${TOKENS.bgTertiary};
        --yw-border-subtle:    ${TOKENS.borderSubtle};
        --yw-border-default:   ${TOKENS.borderDefault};
        --yw-radius-sm:        ${TOKENS.radiusSm};
        --yw-radius-md:        ${TOKENS.radiusMd};
        --yw-radius-lg:        ${TOKENS.radiusLg};
        --yw-radius-full:      ${TOKENS.radiusFull};
        --yw-font:             ${TOKENS.fontFamily};
        --yw-font-heading:     ${TOKENS.fontFamilyHeading};
      }

      /* ── Typography ── */
      body,
      .hl-app,
      .hl-main,
      .hl-sidebar {
        font-family: var(--yw-font) !important;
        color: var(--yw-text-dark) !important;
      }

      /* ── Sidebar ── */
      .hl-sidebar,
      [class*="sidebar"],
      nav[class*="side"],
      .n-menu,
      aside {
        background: var(--yw-text-dark) !important;
        border-right: 1px solid rgba(255,255,255,0.08) !important;
      }

      /* Sidebar nav items */
      .hl-sidebar a,
      .hl-sidebar span,
      .hl-sidebar button,
      nav[class*="side"] a,
      nav[class*="side"] li,
      .n-menu-item__content {
        color: rgba(255, 255, 255, 0.75) !important;
        font-family: var(--yw-font) !important;
        font-size: 14px !important;
        font-weight: 500 !important;
        letter-spacing: 0.01em !important;
        transition: color 0.15s ease, background 0.15s ease !important;
      }

      /* Sidebar active / hover */
      .hl-sidebar a:hover,
      .hl-sidebar a.active,
      .hl-sidebar a[aria-current="page"],
      nav[class*="side"] a:hover,
      nav[class*="side"] a.router-link-active,
      .n-menu-item--selected .n-menu-item__content,
      .n-menu-item:hover .n-menu-item__content {
        color: var(--yw-text-white) !important;
        background: rgba(255,255,255,0.08) !important;
        border-radius: var(--yw-radius-sm) !important;
      }

      /* Active sidebar indicator */
      .hl-sidebar a.active::before,
      nav[class*="side"] a.router-link-active::before,
      .n-menu-item--selected::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 3px;
        height: 20px;
        background: var(--yw-brand-accent);
        border-radius: 0 var(--yw-radius-sm) var(--yw-radius-sm) 0;
      }

      /* Sidebar logo area */
      .hl-sidebar-logo,
      [class*="sidebar-logo"],
      [class*="sidebar-header"] {
        background: var(--yw-text-dark) !important;
        border-bottom: 1px solid rgba(255,255,255,0.08) !important;
        padding: 16px !important;
      }

      /* Sidebar sub-items */
      .n-submenu-children,
      [class*="sub-menu"] {
        background: rgba(0,0,0,0.15) !important;
      }

      /* ── Header / Top Bar ── */
      .hl-header,
      header,
      [class*="top-bar"],
      [class*="topbar"],
      [class*="header-nav"] {
        background: var(--yw-bg-white) !important;
        border-bottom: 1px solid var(--yw-border-subtle) !important;
        box-shadow: 0 1px 3px rgba(0,0,0,0.06) !important;
      }

      .hl-header-logo img,
      [class*="header-logo"] img {
        max-height: 36px !important;
        width: auto !important;
        object-fit: contain !important;
      }

      /* ── Primary Buttons ── */
      .n-button--primary,
      button[class*="primary"],
      a[class*="primary-btn"],
      .hl-btn-primary,
      [class*="btn-primary"] {
        background: var(--yw-brand) !important;
        border-color: var(--yw-brand) !important;
        color: var(--yw-text-white) !important;
        font-family: var(--yw-font) !important;
        font-weight: 600 !important;
        border-radius: var(--yw-radius-md) !important;
        transition: background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease !important;
      }

      .n-button--primary:hover,
      button[class*="primary"]:hover,
      .hl-btn-primary:hover {
        background: var(--yw-brand-hover) !important;
        border-color: var(--yw-brand-hover) !important;
        box-shadow: 0 2px 8px rgba(75, 14, 163, 0.28) !important;
      }

      /* ── Secondary / Outline Buttons ── */
      .n-button--default,
      button[class*="secondary"],
      .hl-btn-secondary,
      [class*="btn-secondary"] {
        border-color: var(--yw-border-default) !important;
        color: var(--yw-text-dark) !important;
        background: var(--yw-bg-white) !important;
        font-family: var(--yw-font) !important;
        font-weight: 500 !important;
        border-radius: var(--yw-radius-md) !important;
      }

      .n-button--default:hover,
      button[class*="secondary"]:hover {
        border-color: var(--yw-brand) !important;
        color: var(--yw-brand) !important;
        background: var(--yw-brand-light) !important;
      }

      /* ── Form Inputs ── */
      input[type="text"],
      input[type="email"],
      input[type="search"],
      input[type="number"],
      input[type="tel"],
      textarea,
      select,
      .n-input,
      .n-select,
      [class*="input-wrapper"],
      [class*="form-input"] {
        font-family: var(--yw-font) !important;
        border-color: var(--yw-border-subtle) !important;
        border-radius: var(--yw-radius-md) !important;
        color: var(--yw-text-dark) !important;
        background: var(--yw-bg-white) !important;
        font-size: 14px !important;
      }

      input:focus,
      textarea:focus,
      .n-input--focus,
      [class*="input-wrapper"]:focus-within {
        border-color: var(--yw-brand) !important;
        box-shadow: 0 0 0 3px rgba(75, 14, 163, 0.12) !important;
        outline: none !important;
      }

      input::placeholder,
      textarea::placeholder {
        color: var(--yw-text-light) !important;
      }

      /* ── Links ── */
      a,
      [class*="link"] {
        color: var(--yw-brand) !important;
      }

      a:hover {
        color: var(--yw-brand-hover) !important;
        text-decoration: underline !important;
      }

      /* ── Tags / Badges / Pills ── */
      .n-tag,
      [class*="badge"],
      [class*="tag"],
      [class*="chip"] {
        font-family: var(--yw-font) !important;
        font-size: 12px !important;
        font-weight: 500 !important;
        border-radius: var(--yw-radius-full) !important;
      }

      .n-tag--primary,
      [class*="badge-primary"],
      [class*="tag-primary"] {
        background: var(--yw-brand-light) !important;
        color: var(--yw-brand) !important;
        border-color: var(--yw-brand-border) !important;
      }

      /* ── Cards ── */
      .n-card,
      [class*="card"],
      [class*="panel"],
      [class*="widget"] {
        border-radius: var(--yw-radius-lg) !important;
        border-color: var(--yw-border-subtle) !important;
        background: var(--yw-bg-white) !important;
        font-family: var(--yw-font) !important;
      }

      /* ── Tables ── */
      table,
      .n-data-table,
      [class*="table"] {
        font-family: var(--yw-font) !important;
      }

      thead th,
      .n-data-table-th {
        background: var(--yw-bg-secondary) !important;
        color: var(--yw-text-medium) !important;
        font-weight: 600 !important;
        font-size: 12px !important;
        text-transform: uppercase !important;
        letter-spacing: 0.05em !important;
        border-bottom: 1px solid var(--yw-border-subtle) !important;
      }

      tbody tr:hover td,
      .n-data-table-tr:hover .n-data-table-td {
        background: var(--yw-brand-light) !important;
      }

      /* ── Checkboxes / Toggles ── */
      input[type="checkbox"]:checked,
      .n-checkbox--checked .n-checkbox__box,
      [class*="toggle--active"],
      [class*="switch--on"] {
        background: var(--yw-brand) !important;
        border-color: var(--yw-brand) !important;
      }

      /* ── Tabs ── */
      .n-tabs-tab--active,
      [class*="tab-active"],
      [class*="tab--selected"] {
        color: var(--yw-brand) !important;
        border-bottom-color: var(--yw-brand) !important;
        font-weight: 600 !important;
      }

      .n-tabs-tab,
      [class*="tab-item"] {
        font-family: var(--yw-font) !important;
        font-weight: 500 !important;
        color: var(--yw-text-medium) !important;
      }

      /* ── Progress / Loader ── */
      .n-progress-graph__fill,
      [class*="progress-bar"],
      [class*="loading-bar"] {
        background: var(--yw-brand) !important;
      }

      /* ── Dropdowns / Popovers ── */
      .n-dropdown,
      .n-popover,
      [class*="dropdown-menu"],
      [class*="select-menu"] {
        border-radius: var(--yw-radius-md) !important;
        border-color: var(--yw-border-subtle) !important;
        box-shadow: 0 8px 24px rgba(0,0,0,0.10) !important;
        font-family: var(--yw-font) !important;
      }

      .n-dropdown-option:hover,
      .n-select-option:hover,
      [class*="dropdown-item"]:hover,
      [class*="select-option"]:hover {
        background: var(--yw-brand-light) !important;
        color: var(--yw-brand) !important;
      }

      .n-dropdown-option--pending,
      .n-select-option--selected,
      [class*="option--selected"] {
        background: var(--yw-brand-light) !important;
        color: var(--yw-brand) !important;
        font-weight: 600 !important;
      }

      /* ── Modal / Dialog ── */
      .n-modal,
      .n-dialog,
      [class*="modal-container"],
      [class*="dialog-container"] {
        border-radius: var(--yw-radius-lg) !important;
        font-family: var(--yw-font) !important;
      }

      /* ── Notifications / Toasts ── */
      .n-notification,
      [class*="toast"],
      [class*="alert"] {
        border-radius: var(--yw-radius-md) !important;
        font-family: var(--yw-font) !important;
      }

      /* ── Pipeline Kanban ── */
      [class*="pipeline"],
      [class*="kanban"] {
        font-family: var(--yw-font) !important;
      }

      [class*="pipeline-header"],
      [class*="kanban-header"] {
        color: var(--yw-text-dark) !important;
        font-weight: 600 !important;
      }

      /* ── Page Headings ── */
      h1, h2, h3, h4, h5, h6 {
        font-family: var(--yw-font-heading) !important;
        color: var(--yw-text-dark) !important;
        font-weight: 600 !important;
        letter-spacing: -0.01em !important;
      }

      /* ── Scrollbar (subtle brand tint) ── */
      ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      ::-webkit-scrollbar-track {
        background: var(--yw-bg-secondary);
      }
      ::-webkit-scrollbar-thumb {
        background: var(--yw-border-default);
        border-radius: var(--yw-radius-full);
      }
      ::-webkit-scrollbar-thumb:hover {
        background: var(--yw-brand-accent);
      }

      /* ── Pagination ── */
      .n-pagination-item--active,
      [class*="page-item--active"],
      [class*="pagination-active"] {
        background: var(--yw-brand) !important;
        border-color: var(--yw-brand) !important;
        color: var(--yw-text-white) !important;
      }

      /* ── Custom YachtWay header buttons ── */
      .yw-header-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 14px;
        border-radius: var(--yw-radius-md);
        font-family: var(--yw-font);
        font-size: 14px;
        font-weight: 500;
        color: var(--yw-text-medium);
        text-decoration: none;
        cursor: pointer;
        transition: background 0.15s ease, color 0.15s ease;
        border: none;
        background: transparent;
      }

      .yw-header-btn:hover {
        background: var(--yw-bg-secondary);
        color: var(--yw-brand);
        text-decoration: none;
      }

      .yw-header-btn svg {
        width: 16px;
        height: 16px;
        flex-shrink: 0;
      }

      /* ── YachtWay user menu items ── */
      .yw-user-menu-item a {
        display: block;
        padding: 8px 16px;
        font-family: var(--yw-font);
        font-size: 14px;
        color: var(--yw-text-dark);
        text-decoration: none;
      }

      .yw-user-menu-item a:hover {
        background: var(--yw-brand-light);
        color: var(--yw-brand);
        text-decoration: none;
      }
    `;

    const styleEl = document.createElement('style');
    styleEl.id = styleId;
    styleEl.textContent = css;
    document.head.appendChild(styleEl);
  }

  // ─── APPLY BRANDING ────────────────────────────────────────────────────────────
  function applyBranding(branding) {
    // Logo replacement
    if (branding.logoUrl) {
      const logoSelectors = [
        '.hl-header-logo img',
        '[class*="sidebar-logo"] img',
        '[class*="brand-logo"] img',
        'header img[alt*="logo"]',
        'header img[alt*="Logo"]',
        '.logo img',
      ];
      logoSelectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(img => {
          img.src = branding.logoUrl;
          img.alt = 'YachtWay';
          img.style.maxHeight = '36px';
          img.style.width = 'auto';
        });
      });
    }

    // Page / tab title
    if (branding.dashboardTitle && document.title.includes('HighLevel')) {
      document.title = branding.dashboardTitle;
    }

    // Favicon
    if (branding.faviconUrl) {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = branding.faviconUrl;
    }
  }

  // ─── APPLY HEADER BUTTONS ──────────────────────────────────────────────────────
  function applyHeaderButtons(headerButtons) {
    if (!headerButtons || !headerButtons.length) return;

    const navSelectors = [
      '.hl-header-nav',
      'header nav',
      '[class*="header-actions"]',
      '[class*="header-right"]',
      '[class*="top-nav"]',
    ];

    let navBar = null;
    for (const sel of navSelectors) {
      navBar = document.querySelector(sel);
      if (navBar) break;
    }

    if (!navBar) return;

    // Remove any previously injected buttons
    navBar.querySelectorAll('.yw-header-btn').forEach(el => el.remove());

    headerButtons.forEach(btn => {
      const a = document.createElement('a');
      a.className = 'yw-header-btn';
      a.href = btn.url || '#';
      a.setAttribute('title', btn.label);
      a.textContent = btn.label;
      navBar.appendChild(a);
    });
  }

  // ─── APPLY USER MENU ──────────────────────────────────────────────────────────
  function applyUserMenu(userMenu) {
    if (!userMenu || !userMenu.length) return;

    const menuSelectors = [
      '.hl-user-menu',
      '[class*="user-dropdown"]',
      '[class*="profile-menu"]',
      '[class*="account-menu"]',
    ];

    let menu = null;
    for (const sel of menuSelectors) {
      menu = document.querySelector(sel);
      if (menu) break;
    }

    if (!menu) return;

    // Remove any previously injected items
    menu.querySelectorAll('.yw-user-menu-item').forEach(el => el.remove());

    userMenu.forEach(item => {
      const li = document.createElement('li');
      li.className = 'yw-user-menu-item';
      li.innerHTML = `<a href="${item.url}"${item.external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${item.label}</a>`;
      menu.appendChild(li);
    });
  }

  // ─── WIDGET TOGGLES ───────────────────────────────────────────────────────────
  function applyWidgets(widgets) {
    if (!widgets || !widgets.length) return;
    widgets.forEach(widget => {
      const sel = `.hl-widget-${widget.name.toLowerCase()}`;
      const el = document.querySelector(sel);
      if (el) el.style.display = widget.isVisible ? 'block' : 'none';
    });
  }

  // ─── DASHBOARD FEATURES ───────────────────────────────────────────────────────
  function applyDashboardFeatures(cfg) {
    if (!cfg) return;
    if (cfg.autoSave?.isEnabled) {
      document.body.classList.add('yw-autosave-enabled');
    }
    if (cfg.saveButtonMove?.isEnabled) {
      const saveBtn = document.querySelector('.hl-save-btn, [class*="save-button"]');
      if (saveBtn) saveBtn.style.position = 'fixed';
    }
  }

  // ─── FEATURE TOGGLES ─────────────────────────────────────────────────────────
  function applyFeatureToggles(toggles) {
    if (!toggles) return;
    if (toggles.showNotifications === false) {
      const notif = document.querySelector('.hl-notifications, [class*="notifications-bell"]');
      if (notif) notif.style.display = 'none';
    }
  }

  // ─── INTEGRATIONS ─────────────────────────────────────────────────────────────
  function applyIntegrations(integrations) {
    if (!integrations || !integrations.length) return;
    integrations.forEach(integration => {
      if (integration.type === 'iframe') {
        const iframe = document.createElement('iframe');
        iframe.src = integration.url;
        iframe.style.width = '100%';
        iframe.style.height = integration.height || '400px';
        iframe.style.border = 'none';
        iframe.style.borderRadius = TOKENS.radiusLg;

        if (integration.position === 'sidebar') {
          const sidebar = document.querySelector('.hl-sidebar, [class*="sidebar"]');
          if (sidebar) sidebar.appendChild(iframe);
        } else {
          document.body.appendChild(iframe);
        }
      }
    });
  }

  // ─── MUTATION OBSERVER (re-apply on SPA navigation) ───────────────────────────
  function watchForDOMChanges(config) {
    const observer = new MutationObserver(() => {
      if (config.branding) applyBranding(config.branding);
      if (config.headerButtons) applyHeaderButtons(config.headerButtons);
      if (config.userMenu) applyUserMenu(config.userMenu);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  // ─── MAIN ─────────────────────────────────────────────────────────────────────
  function init(config) {
    // 1. Inject global brand CSS immediately
    injectGlobalStyles();

    // 2. Apply all config sections
    if (config.branding)          applyBranding(config.branding);
    if (config.headerButtons)     applyHeaderButtons(config.headerButtons);
    if (config.userMenu)          applyUserMenu(config.userMenu);
    if (config.widgets)           applyWidgets(config.widgets);
    if (config.dashboardCustomizer) applyDashboardFeatures(config.dashboardCustomizer);
    if (config.featureToggles)    applyFeatureToggles(config.featureToggles);
    if (config.integrations)      applyIntegrations(config.integrations);

    // 3. Re-apply on SPA route changes
    watchForDOMChanges(config);
  }

  // ─── BOOTSTRAP ────────────────────────────────────────────────────────────────
  // Inject CSS straight away (before fetch) so there is no flash of un-branded UI
  injectGlobalStyles();

  fetch(CONFIG_URL)
    .then(res => {
      if (!res.ok) throw new Error(`Config fetch failed: ${res.status}`);
      return res.json();
    })
    .then(config => init(config))
    .catch(err => console.error('[YachtWay GHL Customizer] Config load error:', err));

})();
