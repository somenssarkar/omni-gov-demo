import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * USWDS Extended Header Block
 * Creates official USWDS header structure from EDS fragment
 *
 * EDS Authoring Structure (Google Docs /header):
 * ┌──────────────────────────────────────────────┐
 * │ # Header                                     │
 * │                                              │
 * │ ## Brand                                     │
 * │ [Site Name](/)                               │
 * │                                              │
 * │ ## Sections                                  │
 * │ - [Home](/)                                  │
 * │ - [Services](/services)                      │
 * │   - [Primary Care](/services/primary)        │
 * │   - [Specialists](/services/specialists)     │
 * │ - [About](/about)                            │
 * │                                              │
 * │ ## Tools                                     │
 * │ - [Search](/search)                          │
 * │ - [Login](/login)                            │
 * └──────────────────────────────────────────────┘
 *
 * USWDS Output Structure:
 * - usa-overlay (mobile menu backdrop)
 * - usa-header usa-header--extended
 *   - usa-navbar (logo + menu button)
 *   - usa-nav
 *     - usa-nav__inner
 *       - usa-nav__close button
 *       - usa-nav__primary (main navigation)
 *       - usa-nav__secondary (tools/utility links)
 *
 * Reference: https://designsystem.digital.gov/components/header/
 */

// Media query for desktop/mobile breakpoint
const isDesktop = window.matchMedia('(min-width: 64em)'); // USWDS desktop breakpoint

/**
 * Toggle mobile navigation menu
 */
function toggleMobileNav(header, nav) {
  const menuBtn = header.querySelector('.usa-menu-btn');
  const closeBtn = nav.querySelector('.usa-nav__close');
  const overlay = header.parentElement.querySelector('.usa-overlay');

  const isOpen = nav.classList.contains('is-visible');

  if (isOpen) {
    // Close menu
    nav.classList.remove('is-visible');
    overlay.classList.remove('is-visible');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  } else {
    // Open menu
    nav.classList.add('is-visible');
    overlay.classList.add('is-visible');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }
}

/**
 * Toggle accordion submenu
 */
function toggleSubmenu(button) {
  const isExpanded = button.getAttribute('aria-expanded') === 'true';
  const submenuId = button.getAttribute('aria-controls');
  const submenu = document.getElementById(submenuId);

  // Close all other submenus
  const allButtons = button.closest('.usa-nav__primary').querySelectorAll('.usa-accordion__button');
  allButtons.forEach((btn) => {
    if (btn !== button) {
      btn.setAttribute('aria-expanded', 'false');
      const id = btn.getAttribute('aria-controls');
      if (id) {
        const menu = document.getElementById(id);
        if (menu) menu.hidden = true;
      }
    }
  });

  // Toggle this submenu
  button.setAttribute('aria-expanded', !isExpanded);
  if (submenu) {
    submenu.hidden = isExpanded;
  }
}

/**
 * Build USWDS header from fragment
 */
export default async function decorate(block) {
  // Load header content from fragment
  const headerMeta = getMetadata('header');
  const headerPath = headerMeta ? new URL(headerMeta, window.location).pathname : '/header';
  const fragment = await loadFragment(headerPath);

  // Parse fragment sections (Brand, Sections, Tools)
  const sections = [...fragment.children];
  const brandSection = sections[0];
  const navSection = sections[1];
  const toolsSection = sections[2];

  // Create overlay for mobile menu
  const overlay = document.createElement('div');
  overlay.className = 'usa-overlay';

  // Create header wrapper
  const header = document.createElement('header');
  header.className = 'usa-header usa-header--extended';

  // Create navbar (logo + menu button)
  const navbar = document.createElement('div');
  navbar.className = 'usa-navbar';

  // Logo
  const logo = document.createElement('div');
  logo.className = 'usa-logo';
  const logoText = document.createElement('em');
  logoText.className = 'usa-logo__text';

  if (brandSection) {
    const brandLink = brandSection.querySelector('a');
    if (brandLink) {
      logoText.appendChild(brandLink);
    }
  }

  logo.appendChild(logoText);

  // Menu button
  const menuBtn = document.createElement('button');
  menuBtn.className = 'usa-menu-btn';
  menuBtn.setAttribute('type', 'button');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.setAttribute('aria-controls', 'basic-nav-section');
  menuBtn.textContent = 'Menu';

  navbar.appendChild(logo);
  navbar.appendChild(menuBtn);

  // Create nav element
  const nav = document.createElement('nav');
  nav.className = 'usa-nav';
  nav.id = 'basic-nav-section';
  nav.setAttribute('aria-label', 'Primary navigation');

  // Create nav inner container
  const navInner = document.createElement('div');
  navInner.className = 'usa-nav__inner';

  // Close button for mobile
  const closeBtn = document.createElement('button');
  closeBtn.className = 'usa-nav__close';
  closeBtn.setAttribute('type', 'button');
  closeBtn.innerHTML = '<img src="/icons/usa-icons/close.svg" role="img" alt="Close" />';

  navInner.appendChild(closeBtn);

  // Primary navigation
  if (navSection) {
    const navList = navSection.querySelector('ul');
    if (navList) {
      navList.className = 'usa-nav__primary usa-accordion';

      const navItems = navList.querySelectorAll(':scope > li');
      navItems.forEach((item, index) => {
        item.className = 'usa-nav__primary-item';

        const link = item.querySelector(':scope > a');
        const submenu = item.querySelector(':scope > ul');

        if (submenu) {
          // Has submenu - convert link to accordion button
          const button = document.createElement('button');
          button.className = 'usa-accordion__button usa-nav__link';
          button.setAttribute('type', 'button');
          button.setAttribute('aria-expanded', 'false');
          button.setAttribute('aria-controls', `extended-nav-section-${index}`);

          const span = document.createElement('span');
          span.textContent = link.textContent;
          button.appendChild(span);

          // Replace link with button
          link.replaceWith(button);

          // Style submenu
          submenu.className = 'usa-nav__submenu';
          submenu.id = `extended-nav-section-${index}`;
          submenu.hidden = true;

          submenu.querySelectorAll('li').forEach((subItem) => {
            subItem.className = 'usa-nav__submenu-item';
          });

          // Add click handler for accordion
          button.addEventListener('click', () => toggleSubmenu(button));
        } else if (link) {
          // No submenu - style as regular link
          link.className = 'usa-nav__link';
          const span = document.createElement('span');
          span.textContent = link.textContent;
          link.textContent = '';
          link.appendChild(span);
        }
      });

      navInner.appendChild(navList);
    }
  }

  // Secondary navigation (tools)
  if (toolsSection) {
    const secondary = document.createElement('div');
    secondary.className = 'usa-nav__secondary';

    const secondaryLinks = document.createElement('ul');
    secondaryLinks.className = 'usa-nav__secondary-links';

    const toolsList = toolsSection.querySelector('ul');
    if (toolsList) {
      const toolItems = toolsList.querySelectorAll('li');
      toolItems.forEach((item) => {
        const li = document.createElement('li');
        li.className = 'usa-nav__secondary-item';
        const link = item.querySelector('a');
        if (link) {
          li.appendChild(link);
        }
        secondaryLinks.appendChild(li);
      });
    }

    secondary.appendChild(secondaryLinks);
    navInner.appendChild(secondary);
  }

  nav.appendChild(navInner);

  // Assemble header
  header.appendChild(navbar);
  header.appendChild(nav);

  // Add event listeners
  menuBtn.addEventListener('click', () => toggleMobileNav(header, nav));
  closeBtn.addEventListener('click', () => toggleMobileNav(header, nav));
  overlay.addEventListener('click', () => toggleMobileNav(header, nav));

  // Close menu on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-visible')) {
      toggleMobileNav(header, nav);
    }
  });

  // Handle window resize
  isDesktop.addEventListener('change', () => {
    if (isDesktop.matches && nav.classList.contains('is-visible')) {
      toggleMobileNav(header, nav);
    }
  });

  // Clear block and append USWDS structure
  block.textContent = '';
  block.appendChild(overlay);
  block.appendChild(header);
}
