import { createOptimizedPicture } from '../../scripts/aem.js';

/**
 * Cards Block - USWDS Enhanced with Featured & Compact Variations
 * Transforms EDS block structure into official USWDS card HTML
 *
 * SUPPORTED VARIATIONS:
 *
 * 1. FEATURED CARDS (Rich Content - 6 columns):
 *    Cards (Featured)
 *    | Icon/Image | Heading | Body | Time | Link | Link Text |
 *    | calendar | Schedule Appointment | Book in 2 min | 2 min | /appointments | Start Now → |
 *
 * 2. COMPACT CARDS (Minimal - 3 columns):
 *    Cards (Compact)
 *    | Heading | Time | Link |
 *    | Update contact info | 1 min | /profile/contact |
 *
 * 3. STANDARD CARDS (Original 4-column structure):
 *    Cards
 *    | Heading | Image | Body | Link |
 *    | Health Services | (image) | Learn about... | /services |
 *
 * AUTO-DETECTION:
 * - 6 columns with Icon/Body → Featured variation (auto-applies)
 * - 3 columns with Heading/Time/Link → Compact variation (auto-applies)
 * - 4 columns → Standard card
 *
 * ICON SUPPORT (Column 1 in Featured):
 * - Text starting with http:// or / → treated as image URL
 * - Otherwise → treated as icon name (e.g., "calendar", "prescription")
 * - Icon names map to /icons/{name}.svg or USWDS icons
 * - Icons get circular blue background automatically
 *
 * TIME BADGE (Column 4 in Featured, Column 2 in Compact):
 * - Format: "2 min", "1 min", "30 sec"
 * - Displays as pill badge in card
 *
 * LINK TEXT (Column 6 in Featured):
 * - If provided → text link with arrow (→)
 * - If empty → button with "Learn More"
 */

/**
 * Detect card variation from block classes and column structure
 * Supports: Default, Inset, Exdent, Flag, Flag Right, Featured, Compact
 */
function detectVariation(block) {
  const classes = Array.from(block.classList);

  // Check for explicit variations
  if (classes.includes('featured')) {
    return 'featured';
  }
  if (classes.includes('compact')) {
    return 'compact';
  }
  if (classes.includes('flag') && classes.includes('right')) {
    return 'flag-right';
  }
  if (classes.includes('flag')) {
    return 'flag';
  }
  if (classes.includes('inset')) {
    return 'inset';
  }
  if (classes.includes('exdent')) {
    return 'exdent';
  }

  // Auto-detect based on first data row column count
  const firstDataRow = [...block.children].find((row) => {
    const firstCell = row.children[0];
    return firstCell && !firstCell.textContent.trim().toLowerCase().startsWith('card');
  });

  if (firstDataRow) {
    const colCount = firstDataRow.children.length;
    if (colCount === 6) {
      return 'featured';
    }
    if (colCount === 3) {
      return 'compact';
    }
  }

  return 'default';
}


/**
 * Parse heading from cell
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
 * Parse icon or image from cell (Featured cards)
 * If starts with http:// or / → image URL
 * Otherwise → icon name (e.g., "calendar", "prescription")
 */
function parseIconOrImage(cell) {
  if (!cell) return null;

  // Check for actual image element first
  const imgEl = cell.querySelector('img');
  if (imgEl) {
    return { type: 'image', src: imgEl.src };
  }

  const text = cell.textContent.trim();
  if (!text) return null;

  // Check if it's a URL
  if (text.startsWith('http://') || text.startsWith('https://') || text.startsWith('/')) {
    return { type: 'image', src: text };
  }

  // It's an icon name
  return { type: 'icon', name: text };
}

/**
 * Parse image from cell (Standard cards)
 */
function parseImage(cell) {
  if (!cell) return null;

  const imgEl = cell.querySelector('img');
  return imgEl ? imgEl.src : null;
}

/**
 * Parse body text from cell
 */
function parseBody(cell) {
  if (!cell) return '';

  const content = cell.innerHTML.trim();
  return content;
}

/**
 * Parse time badge from cell
 * Format: "2 min", "1 min", "30 sec"
 */
function parseTime(cell) {
  if (!cell) return '';
  return cell.textContent.trim();
}

/**
 * Parse link from cell
 * Supports both hyperlinks (<a> tags) and plain text URLs
 */
function parseLink(cell, defaultText = 'Learn More') {
  if (!cell) return null;

  const linkEl = cell.querySelector('a');
  if (linkEl) {
    return {
      href: linkEl.href,
      text: linkEl.textContent.trim(),
    };
  }

  // Handle plain text URLs
  const cellText = cell.textContent.trim();
  if (cellText) {
    return {
      href: cellText,
      text: defaultText,
    };
  }

  return null;
}

/**
 * Create icon element with circular background
 * Maps icon names to /icons/{name}.svg
 */
function createIconElement(iconName) {
  const iconWrapper = document.createElement('div');
  iconWrapper.className = 'usa-card__icon-wrapper';

  const iconCircle = document.createElement('div');
  iconCircle.className = 'usa-card__icon-circle';

  const img = document.createElement('img');
  img.src = `/icons/${iconName}.svg`;
  img.alt = '';
  img.className = 'usa-card__icon';

  iconCircle.append(img);
  iconWrapper.append(iconCircle);

  return iconWrapper;
}

/**
 * Create time badge element
 */
function createTimeBadge(timeText) {
  if (!timeText) return null;

  const badge = document.createElement('span');
  badge.className = 'usa-card__time-badge';
  badge.textContent = timeText;

  return badge;
}

/**
 * Create a Featured Card (6-column structure)
 * Columns: Icon/Image | Heading | Body | Time | Link | Link Text
 */
function createFeaturedCard(row) {
  const cells = [...row.children];

  const li = document.createElement('li');
  li.className = 'usa-card tablet-lg:grid-col-6 widescreen:grid-col-3 usa-card--featured';

  const container = document.createElement('div');
  container.className = 'usa-card__container';

  // Parse 6-column structure
  const iconOrImage = parseIconOrImage(cells[0]);
  const heading = parseHeading(cells[1]);
  const bodyContent = parseBody(cells[2]);
  const timeText = parseTime(cells[3]);
  const linkUrl = cells[4] ? cells[4].textContent.trim() : null;
  const linkText = cells[5] ? cells[5].textContent.trim() : null;

  // Top row: icon on left, time badge on right
  if (iconOrImage || timeText) {
    const topRow = document.createElement('div');
    topRow.className = 'usa-card__top-row';

    // Add icon if provided
    if (iconOrImage) {
      if (iconOrImage.type === 'icon') {
        const iconEl = createIconElement(iconOrImage.name);
        topRow.append(iconEl);
      } else if (iconOrImage.type === 'image') {
        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'usa-card__icon-img';
        const img = document.createElement('img');
        img.src = iconOrImage.src;
        img.alt = '';
        imgWrapper.append(img);
        topRow.append(imgWrapper);
      }
    }

    // Add time badge on right
    if (timeText) {
      const timeBadge = createTimeBadge(timeText);
      if (timeBadge) {
        topRow.append(timeBadge);
      }
    }

    container.append(topRow);
  }

  // Second row: heading
  if (heading) {
    const header = document.createElement('div');
    header.className = 'usa-card__header';

    const h3 = document.createElement('h3');
    h3.className = 'usa-card__heading';
    h3.textContent = heading;
    header.append(h3);

    container.append(header);
  }

  // Body
  if (bodyContent) {
    const body = document.createElement('div');
    body.className = 'usa-card__body';
    body.innerHTML = bodyContent;
    container.append(body);
  }

  // Footer (action link)
  if (linkUrl) {
    const footer = document.createElement('div');
    footer.className = 'usa-card__footer';

    if (linkText && linkText.includes('→')) {
      // Text link with arrow
      const link = document.createElement('a');
      link.href = linkUrl;
      link.className = 'usa-card__link';
      link.textContent = linkText;
      footer.append(link);
    } else {
      // Button
      const button = document.createElement('a');
      button.href = linkUrl;
      button.className = 'usa-button';
      button.textContent = linkText || 'Learn More';
      footer.append(button);
    }

    container.append(footer);
  }

  li.append(container);
  return li;
}

/**
 * Create a Compact Card (3-column structure)
 * Columns: Heading | Time | Link
 */
function createCompactCard(row) {
  const cells = [...row.children];

  const li = document.createElement('li');
  li.className = 'usa-card tablet-lg:grid-col-6 widescreen:grid-col-3 usa-card--compact';

  const container = document.createElement('div');
  container.className = 'usa-card__container';

  // Parse 3-column structure
  const heading = parseHeading(cells[0]);
  const timeText = parseTime(cells[1]);
  const linkUrl = cells[2] ? cells[2].textContent.trim() : null;

  // Header with heading and time badge
  if (heading || timeText) {
    const header = document.createElement('div');
    header.className = 'usa-card__header';

    if (heading) {
      const h4 = document.createElement('h4');
      h4.className = 'usa-card__heading';

      if (linkUrl) {
        const link = document.createElement('a');
        link.href = linkUrl;
        link.textContent = heading;
        h4.append(link);
      } else {
        h4.textContent = heading;
      }

      header.append(h4);
    }

    // Add time badge
    if (timeText) {
      const timeBadge = createTimeBadge(timeText);
      if (timeBadge) {
        header.append(timeBadge);
      }
    }

    container.append(header);
  }

  li.append(container);
  return li;
}


/**
 * Create a USWDS card from a table row (Standard 4-column)
 * Supports 4-column structure: Heading | Image | Body | Link
 */
function createUSWDSCard(row, variation) {
  const cells = [...row.children];

  // Skip if this is the header row (contains "Cards" text)
  if (cells[0] && cells[0].textContent.trim().toLowerCase().startsWith('card')) {
    return null;
  }

  const li = document.createElement('li');
  li.className = 'usa-card tablet-lg:grid-col-6 widescreen:grid-col-3';

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

export default function decorate(block) {
  // Detect variation from block metadata or column structure
  const variation = detectVariation(block);

  console.log('Cards block variation detected:', variation);

  const ul = document.createElement('ul');
  ul.className = 'usa-card-group';

  [...block.children].forEach((row) => {
    // Skip header row
    const firstCell = row.children[0];
    if (firstCell && firstCell.textContent.trim().toLowerCase().startsWith('card')) {
      return;
    }

    let card = null;

    if (variation === 'featured') {
      card = createFeaturedCard(row);
    } else if (variation === 'compact') {
      card = createCompactCard(row);
    } else {
      card = createUSWDSCard(row, variation);
    }

    if (card) {
      ul.append(card);
    }
  });

  block.textContent = '';
  block.append(ul);
}
