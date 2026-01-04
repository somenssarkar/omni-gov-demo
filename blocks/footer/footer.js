import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * Parse fragment content by H2 headings (similar to header parsing)
 * @param {Element} fragment The fragment element
 * @returns {Object} Object with sections keyed by H2 text (lowercase)
 */
function parseFragmentByHeadings(fragment) {
  const sections = {};
  const headings = fragment.querySelectorAll('h2');
  
  headings.forEach((h2) => {
    const sectionName = h2.textContent.trim().toLowerCase().replace(/\s+/g, '-');
    const content = [];
    let sibling = h2.nextElementSibling;
    
    while (sibling && sibling.tagName !== 'H2') {
      content.push(sibling);
      sibling = sibling.nextElementSibling;
    }
    
    sections[sectionName] = content;
  });
  
  return sections;
}

/**
 * Convert AEM preview URLs to relative paths
 * @param {Element} element Element containing links to convert
 */
function makeLinksRelative(element) {
  element.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute('href');
    if (href && href.includes('.aem.page')) {
      const url = new URL(href);
      link.setAttribute('href', url.pathname);
    }
  });
}

/**
 * Create USWDS Big Footer navigation section
 * @param {string} heading The section heading
 * @param {Array} content Array of content elements from fragment
 * @returns {Element} Footer nav column element
 */
function createFooterColumn(heading, content) {
  const col = document.createElement('div');
  col.className = 'mobile-lg:grid-col-6 desktop:grid-col-3';
  
  const section = document.createElement('section');
  section.className = 'usa-footer__primary-content usa-footer__primary-content--collapsible';
  
  const h4 = document.createElement('h4');
  h4.className = 'usa-footer__primary-link';
  h4.textContent = heading;
  section.appendChild(h4);
  
  // Create links list
  const ul = document.createElement('ul');
  ul.className = 'usa-list usa-list--unstyled';
  
  content.forEach((el) => {
    const links = el.querySelectorAll('a');
    links.forEach((link) => {
      const li = document.createElement('li');
      li.className = 'usa-footer__secondary-link';
      
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.textContent;
      
      li.appendChild(a);
      ul.appendChild(li);
    });
  });
  
  section.appendChild(ul);
  col.appendChild(section);
  
  return col;
}

/**
 * Create USWDS social links section
 * @param {Array} socialContent Social content from fragment
 * @returns {Element} Social links element
 */
function createSocialLinks(socialContent) {
  const div = document.createElement('div');
  div.className = 'usa-footer__primary-content usa-footer__primary-content--collapsible';
  
  const h4 = document.createElement('h4');
  h4.className = 'usa-footer__primary-link';
  h4.textContent = 'Connect With Us';
  div.appendChild(h4);
  
  // Add description text as regular list item
  if (socialContent && socialContent.length > 0) {
    // Find non-link text content (description)
    socialContent.forEach((el) => {
      // Get text that's not inside links
      const clone = el.cloneNode(true);
      clone.querySelectorAll('a').forEach((a) => a.remove());
      const description = clone.textContent.trim();
      
      if (description) {
        const ul = document.createElement('ul');
        ul.className = 'usa-list usa-list--unstyled';
        const li = document.createElement('li');
        li.className = 'usa-footer__secondary-link';
        li.textContent = description;
        ul.appendChild(li);
        div.appendChild(ul);
      }
    });
  }
  
  const socialDiv = document.createElement('div');
  socialDiv.className = 'usa-footer__social-links grid-row grid-gap-1';
  
  // Map common social platforms to icons
  const socialIcons = {
    facebook: 'facebook',
    twitter: 'twitter',
    youtube: 'youtube',
    instagram: 'instagram',
    linkedin: 'linkedin'
  };
  
  if (socialContent && socialContent.length > 0) {
    socialContent.forEach((el) => {
      const links = el.querySelectorAll('a');
      links.forEach((link) => {
        const linkText = link.textContent.toLowerCase().trim();
        const gridCol = document.createElement('div');
        gridCol.className = 'grid-col-auto';
        
        const a = document.createElement('a');
        a.className = 'usa-social-link';
        a.href = link.href;
        
        // Find matching icon
        let iconName = 'link';
        Object.entries(socialIcons).forEach(([platform, icon]) => {
          if (linkText.includes(platform) || link.href.includes(platform)) {
            iconName = icon;
          }
        });
        
        a.setAttribute('aria-label', link.textContent);
        
        const img = document.createElement('img');
        img.className = 'usa-social-link__icon';
        img.src = `/icons/${iconName}.svg`;
        img.alt = link.textContent;
        
        a.appendChild(img);
        gridCol.appendChild(a);
        socialDiv.appendChild(gridCol);
      });
    });
  }
  
  div.appendChild(socialDiv);
  return div;
}

/**
 * Create USWDS footer secondary section (legal links)
 * @param {Array} legalContent Legal links content from fragment
 * @returns {Element} Secondary section element
 */
function createSecondarySection(legalContent, copyrightContent) {
  const section = document.createElement('div');
  section.className = 'usa-footer__secondary-section';
  
  const grid = document.createElement('div');
  grid.className = 'grid-container';
  
  const row = document.createElement('div');
  row.className = 'grid-row grid-gap';
  
  // Legal links column (left side)
  const linksCol = document.createElement('div');
  linksCol.className = 'usa-footer__contact-links mobile-lg:grid-col-8';
  
  const nav = document.createElement('nav');
  nav.className = 'usa-footer__nav';
  nav.setAttribute('aria-label', 'Footer legal links');
  
  const ul = document.createElement('ul');
  ul.className = 'usa-list usa-list--unstyled grid-row grid-gap';
  
  if (legalContent && legalContent.length > 0) {
    legalContent.forEach((el) => {
      const links = el.querySelectorAll('a');
      links.forEach((link) => {
        const li = document.createElement('li');
        li.className = 'grid-col-auto mobile-lg:grid-col-auto';
        
        const a = document.createElement('a');
        a.className = 'usa-footer__secondary-link';
        a.href = link.href;
        a.textContent = link.textContent;
        
        li.appendChild(a);
        ul.appendChild(li);
      });
    });
  }
  
  nav.appendChild(ul);
  linksCol.appendChild(nav);
  row.appendChild(linksCol);
  
  // Copyright column (right side)
  const copyrightCol = document.createElement('div');
  copyrightCol.className = 'usa-footer__logo grid-row mobile-lg:grid-col-4';
  
  // Copyright text - find it from copyrightContent or legalContent
  let copyrightText = `© ${new Date().getFullYear()} Community Health Clinic`;
  
  if (copyrightContent && copyrightContent.length > 0) {
    const textContent = copyrightContent[0].textContent.trim();
    if (textContent.includes('©') || textContent.toLowerCase().includes('copyright')) {
      copyrightText = textContent;
    }
  }
  
  const copyrightP = document.createElement('p');
  copyrightP.className = 'usa-footer__logo-heading';
  copyrightP.textContent = copyrightText;
  copyrightCol.appendChild(copyrightP);
  row.appendChild(copyrightCol);
  
  grid.appendChild(row);
  section.appendChild(grid);
  
  return section;
}

/**
 * Create USWDS identifier section
 * @param {Array} identifierContent Identifier content from fragment
 * @returns {Element} Identifier element
 */
function createIdentifier(identifierContent) {
  const identifier = document.createElement('div');
  identifier.className = 'usa-identifier';
  
  const container = document.createElement('div');
  container.className = 'usa-identifier__container';
  
  const section = document.createElement('section');
  section.className = 'usa-identifier__section';
  section.setAttribute('aria-label', 'Agency identifier');
  
  // Left side: Logo and identity
  const identityDiv = document.createElement('div');
  identityDiv.className = 'usa-identifier__section--masthead usa-identifier__section--usagov';
  
  const logos = document.createElement('div');
  logos.className = 'usa-identifier__logos';
  
  const logoLink = document.createElement('a');
  logoLink.href = 'https://www.defense.gov';
  logoLink.className = 'usa-identifier__logo';
  
  const logoImg = document.createElement('img');
  logoImg.className = 'usa-identifier__logo-img';
  logoImg.src = '/icons/shield.svg';
  logoImg.alt = 'Department of War logo';
  logoImg.setAttribute('role', 'img');
  
  logoLink.appendChild(logoImg);
  logos.appendChild(logoLink);
  identityDiv.appendChild(logos);
  
  const identity = document.createElement('div');
  identity.className = 'usa-identifier__identity';
  
  // Parse identifier content from Google Doc
  let domainText = 'Community Health Clinic';
  let disclaimerHTML = 'An official website of the <a href="https://www.defense.gov">Department of War</a>';
  
  if (identifierContent && identifierContent.length > 0) {
    // First paragraph is the domain name
    const firstParagraph = identifierContent[0];
    if (firstParagraph.textContent.trim()) {
      domainText = firstParagraph.textContent.trim();
    }
    
    // Second element should be the disclaimer with link
    if (identifierContent.length > 1) {
      const disclaimerParagraph = identifierContent[1];
      // Clone and use the HTML content including links
      const tempDiv = document.createElement('div');
      tempDiv.appendChild(disclaimerParagraph.cloneNode(true));
      disclaimerHTML = tempDiv.innerHTML;
    }
  }
  
  const p1 = document.createElement('p');
  p1.className = 'usa-identifier__identity-domain';
  p1.textContent = domainText;
  
  const p2 = document.createElement('p');
  p2.className = 'usa-identifier__identity-disclaimer';
  p2.innerHTML = disclaimerHTML;
  
  identity.appendChild(p1);
  identity.appendChild(p2);
  identityDiv.appendChild(identity);
  section.appendChild(identityDiv);
  
  // Right side: Required links
  const reqLinksDiv = document.createElement('div');
  reqLinksDiv.className = 'usa-identifier__section--required-links';
  
  const reqNav = document.createElement('nav');
  reqNav.className = 'usa-identifier__required-links';
  reqNav.setAttribute('aria-label', 'Important links');
  
  const reqUl = document.createElement('ul');
  reqUl.className = 'usa-identifier__required-links-list';
  
  // Parse links from Google Doc (starting from 3rd element onwards)
  if (identifierContent && identifierContent.length > 2) {
    // Elements after the first two paragraphs should contain links
    for (let i = 2; i < identifierContent.length; i += 1) {
      const linkElements = identifierContent[i].querySelectorAll('a');
      linkElements.forEach((linkEl) => {
        const li = document.createElement('li');
        li.className = 'usa-identifier__required-links-item';
        
        const a = document.createElement('a');
        a.href = linkEl.href;
        a.className = 'usa-identifier__required-link';
        a.textContent = linkEl.textContent;
        
        li.appendChild(a);
        reqUl.appendChild(li);
      });
    }
  }
  
  // If no links found in content, use defaults
  if (reqUl.children.length === 0) {
    const defaultLinks = [
      { text: 'About DoD', href: 'https://www.defense.gov/About/' },
      { text: 'Accessibility', href: '/accessibility' },
      { text: 'FOIA Requests', href: '/foia' }
    ];
    
    defaultLinks.forEach((link) => {
      const li = document.createElement('li');
      li.className = 'usa-identifier__required-links-item';
      
      const a = document.createElement('a');
      a.href = link.href;
      a.className = 'usa-identifier__required-link';
      a.textContent = link.text;
      
      li.appendChild(a);
      reqUl.appendChild(li);
    });
  }
  
  reqNav.appendChild(reqUl);
  reqLinksDiv.appendChild(reqNav);
  section.appendChild(reqLinksDiv);
  
  container.appendChild(section);
  identifier.appendChild(container);
  
  return identifier;
}

/**
 * loads and decorates the footer with USWDS Big Footer structure
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  if (!fragment) {
    return;
  }
  
  // Convert any AEM URLs to relative paths
  makeLinksRelative(fragment);
  
  // Parse fragment by H2 sections
  const sections = parseFragmentByHeadings(fragment);
  
  // Clear block
  block.textContent = '';
  
  // Create USWDS Big Footer structure
  const footer = document.createElement('footer');
  footer.className = 'usa-footer usa-footer--big';
  
  // Primary section (main navigation columns)
  const primary = document.createElement('div');
  primary.className = 'usa-footer__primary-section';
  
  const primaryContainer = document.createElement('div');
  primaryContainer.className = 'grid-container';
  
  const primaryGrid = document.createElement('div');
  primaryGrid.className = 'grid-row grid-gap';
  
  const nav = document.createElement('nav');
  nav.className = 'usa-footer__nav';
  nav.setAttribute('aria-label', 'Footer navigation');
  
  const navGrid = document.createElement('div');
  navGrid.className = 'grid-row grid-gap';
  
  // Create columns for each section (all four columns are equal siblings)
  const footerSections = [
    { key: 'about-mhs', heading: 'About MHS' },
    { key: 'services', heading: 'Services' },
    { key: 'resources', heading: 'Resources' }
  ];
  
  footerSections.forEach(({ key, heading }) => {
    if (sections[key]) {
      navGrid.appendChild(createFooterColumn(heading, sections[key]));
    }
  });
  
  // Add Connect With Us column to the same grid as other columns
  if (sections['connect-with-us']) {
    const socialCol = document.createElement('div');
    socialCol.className = 'mobile-lg:grid-col-6 desktop:grid-col-3';
    socialCol.appendChild(createSocialLinks(sections['connect-with-us']));
    navGrid.appendChild(socialCol);
  }
  
  nav.appendChild(navGrid);
  primaryGrid.appendChild(nav);
  primaryContainer.appendChild(primaryGrid);
  primary.appendChild(primaryContainer);
  footer.appendChild(primary);
  
  // Secondary section (legal links and copyright)
  // Legal links come from "privacy-links" section, copyright is auto-generated
  if (sections['privacy-links'] || sections['legal-links'] || sections['legal']) {
    const legalLinks = sections['privacy-links'] || sections['legal-links'] || sections['legal'];
    const copyrightContent = sections['copyright'] || null;
    footer.appendChild(createSecondarySection(legalLinks, copyrightContent));
  }
  
  // Identifier section
  if (sections['identifier']) {
    footer.appendChild(createIdentifier(sections['identifier']));
  }
  
  block.appendChild(footer);
}
