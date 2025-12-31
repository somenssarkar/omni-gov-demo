import { createOptimizedPicture } from '../../scripts/aem.js';

/**
 * Cards Block - USWDS Enhanced with Full Variation Support
 * Transforms EDS block structure into official USWDS card HTML
 *
 * EDS Authoring Structure (Google Docs):
 * ┌─────────────────────────────────────────────────────────────────┐
 * │ Cards (Variation)  │           │              │          │       │
 * ├────────────────────┼───────────┼──────────────┼──────────┤       │
 * │ Heading            │ Image     │ Body Text    │ Link     │       │
 * ├────────────────────┼───────────┼──────────────┼──────────┤       │
 * │ Health Services    │ (image)   │ Learn about..│/services │       │
 * └────────────────────┴───────────┴──────────────┴──────────┘       │
 *
 * 4-Column Structure:
 * - Column 1: Heading (required) - Card title
 * - Column 2: Image (optional) - Card image/photo
 * - Column 3: Body Text (optional) - Card description
 * - Column 4: Link (optional) - Button link (plain text URL or hyperlink)
 *
 * Supported Variations (in first row):
 * - "Cards" or "Cards (Default)" - Standard vertical card
 * - "Cards (Inset)" - Image with padding inside card
 * - "Cards (Exdent)" - Image extends to card edges
 * - "Cards (Flag)" - Horizontal layout, image on left
 * - "Cards (Flag Right)" - Horizontal layout, image on right
 *
 * Examples:
 *
 * 1. Default Card (text only):
 *    Cards
 *    | Health Services | | Learn about our services | /services |
 *
 * 2. Card with Image:
 *    Cards
 *    | Health Services | (image) | Learn about our services | /services |
 *
 * 3. Inset Media Variation:
 *    Cards (Inset)
 *    | Health Services | (image) | Learn about our services | /services |
 *
 * 4. Flag Layout (horizontal):
 *    Cards (Flag)
 *    | Health Services | (image) | Learn about our services | /services |
 */

export default function decorate(block) {
  // Detect variation from block metadata or first row
  const variation = detectVariation(block);

  // Debug logging
  console.log('🎴 Cards Block Debug:', {
    variation,
    rowCount: block.children.length,
    firstCellText: block.querySelector('div:first-child div:first-child')?.textContent
  });

  const ul = document.createElement('ul');
  ul.className = 'usa-card-group';

  [...block.children].forEach((row, index) => {
    const card = createUSWDSCard(row, variation);
    if (card) {
      ul.append(card);
    } else {
      console.log(`  ↳ Row ${index} skipped (likely header row)`);
    }
  });

  block.textContent = '';
  block.append(ul);
}

/**
 * Detect card variation from block classes
 * EDS automatically adds variation as CSS class (e.g., "Cards (Flag)" → class="cards flag")
 * Supports: Default, Inset, Exdent, Flag, Flag Right
 */
function detectVariation(block) {
  const classes = Array.from(block.classList);
  console.log('  ↳ Block classes:', classes);

  // EDS adds variation name as lowercase class
  if (classes.includes('flag') && classes.includes('right')) {
    console.log('  ↳ Detected: flag-right');
    return 'flag-right';
  }
  if (classes.includes('flag')) {
    console.log('  ↳ Detected: flag');
    return 'flag';
  }
  if (classes.includes('inset')) {
    console.log('  ↳ Detected: inset');
    return 'inset';
  }
  if (classes.includes('exdent')) {
    console.log('  ↳ Detected: exdent');
    return 'exdent';
  }

  console.log('  ↳ No variation detected, using default');
  return 'default';
}

/**
 * Create a USWDS card from a table row
 * Supports 4-column structure: Heading | Image | Body | Link
 */
function createUSWDSCard(row, variation) {
  const cells = [...row.children];

  // Skip if this is the header row (contains "Cards" text)
  if (cells[0] && cells[0].textContent.trim().toLowerCase().startsWith('card')) {
    return null;
  }

  const li = document.createElement('li');
  li.className = 'usa-card tablet-lg:grid-col-6 widescreen:grid-col-4';

  // Apply variation class to card
  if (variation === 'flag' || variation === 'flag-right') {
    li.classList.add('usa-card--flag');
    if (variation === 'flag-right') {
      li.classList.add('usa-card--media-right');
    }
  }

  const container = document.createElement('div');
  container.className = 'usa-card__container';

  // Parse 4-column structure
  const heading = parseHeading(cells[0]);
  const imageSrc = parseImage(cells[1]);
  const bodyContent = parseBody(cells[2]);
  const actionLink = parseLink(cells[3]);

  // Build USWDS card structure

  // Header
  if (heading) {
    const header = document.createElement('div');
    header.className = 'usa-card__header';
    const h4 = document.createElement('h4');
    h4.className = 'usa-card__heading';
    h4.textContent = heading;
    header.append(h4);
    container.append(header);
  }

  // Media (image)
  if (imageSrc) {
    const media = document.createElement('div');
    media.className = 'usa-card__media';

    // Apply variation-specific classes
    if (variation === 'inset') {
      media.classList.add('usa-card__media--inset');
    } else if (variation === 'exdent') {
      media.classList.add('usa-card__media--exdent');
    }

    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'usa-card__img';

    const picture = createOptimizedPicture(imageSrc, heading || 'Card image', false, [{ width: '750' }]);
    imgWrapper.append(picture);
    media.append(imgWrapper);
    container.append(media);
  }

  // Body
  if (bodyContent) {
    const body = document.createElement('div');
    body.className = 'usa-card__body';
    body.innerHTML = bodyContent;
    container.append(body);
  }

  // Footer (action link)
  if (actionLink) {
    const footer = document.createElement('div');
    footer.className = 'usa-card__footer';
    const button = document.createElement('a');
    button.href = actionLink.href;
    button.className = 'usa-button';
    button.textContent = actionLink.text;
    footer.append(button);
    container.append(footer);
  }

  li.append(container);
  return li;
}

/**
 * Parse heading from first column
 */
function parseHeading(cell) {
  if (!cell) return '';

  const headingEl = cell.querySelector('h1, h2, h3, h4, h5, h6');
  if (headingEl) {
    return headingEl.textContent.trim();
  }

  return cell.textContent.trim();
}

/**
 * Parse image from second column
 */
function parseImage(cell) {
  if (!cell) return null;

  const imgEl = cell.querySelector('img');
  return imgEl ? imgEl.src : null;
}

/**
 * Parse body text from third column
 */
function parseBody(cell) {
  if (!cell) return '';

  const content = cell.innerHTML.trim();
  return content;
}

/**
 * Parse link from fourth column
 * Supports both hyperlinks (<a> tags) and plain text URLs
 */
function parseLink(cell) {
  if (!cell) return null;

  const linkEl = cell.querySelector('a');
  if (linkEl) {
    return {
      href: linkEl.href,
      text: linkEl.textContent.trim()
    };
  }

  // Handle plain text URLs
  const cellText = cell.textContent.trim();
  if (cellText) {
    return {
      href: cellText,
      text: 'Learn More' // Default button text
    };
  }

  return null;
}
