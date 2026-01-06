/**
 * Hero Block - USWDS Enhanced with Multi-Action Support
 * Transforms EDS block structure into official USWDS hero HTML
 *
 * EDS Authoring Structure (Google Docs):
 * ┌─────────────────────────────────────────────────────────────────┐
 * │ Hero                                                            │
 * ├────────────────────┬──────────────┬──────────────┬─────────────┤
 * │ Callout (optional) │ Heading      │ Body Text    │ Actions     │
 * ├────────────────────┼──────────────┼──────────────┼─────────────┤
 * │ Hero callout:      │ Bring att... │ Support ...  │ /action → │
 * └────────────────────┴──────────────┴──────────────┴─────────────┘
 *
 * 4-Column Structure:
 * - Column 1: Callout (optional) - Small text above heading
 * - Column 2: Heading (required) - Main hero heading
 * - Column 3: Body Text (optional) - Supporting paragraph
 * - Column 4: Actions (optional) - Multiple CTAs (one per line or multiple cells)
 *
 * ACTIONS COLUMN FORMATS:
 * 
 * Format 1: Multi-line text (each line = one button)
 * /portal/login → 
 * /learn-more → 
 * 
 * Format 2: With explicit button text
 * /portal/login|Get Started →
 * /learn-more|Learn More →
 * 
 * Button Detection:
 * - First link = Primary button (usa-button)
 * - Second link = Secondary button (usa-button usa-button--outline)
 * - Additional links = Text links with arrows
 * - Arrows (→) indicate text links (not buttons)
 *
 * USWDS Output Structure:
 * <section class="usa-hero">
 *   <div class="grid-container">
 *     <div class="usa-hero__callout">
 *       <h1 class="usa-hero__heading">
 *         <span class="usa-hero__heading--alt">Callout</span>
 *         Heading
 *       </h1>
 *       <p>Body text...</p>
 *       <div class="usa-hero__actions">
 *         <a class="usa-button" href="/action">Primary Action</a>
 *         <a class="usa-button usa-button--outline" href="/action2">Secondary Action</a>
 *       </div>
 *     </div>
 *   </div>
 * </section>
 *
 * Note: Background image can be set via CSS using site-specific styling
 */

/**
 * Check if row is a header row containing "Hero" text
 */
function isHeaderRow(row) {
  const firstCell = row.querySelector('div:first-child');
  return firstCell && firstCell.textContent.trim().toLowerCase().startsWith('hero');
}

/**
 * Parse callout from first column
 */
function parseCallout(cell) {
  if (!cell) return '';

  const text = cell.textContent.trim();
  return text || '';
}

/**
 * Parse heading from second column
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
 * Parse body text from third column
 */
function parseBody(cell) {
  if (!cell) return '';

  const content = cell.innerHTML.trim();
  return content;
}

/**
 * Parse actions from fourth column
 * Supports multiple formats:
 * 1. Multiple <a> tags (from Google Docs links)
 * 2. Multi-line text with pipes: /url|Button Text →
 * 3. Simple URLs: /portal-login →
 * 
 * Returns array of action objects with href, text, and style
 */
function parseActions(cell) {
  if (!cell) return [];

  const actions = [];

  // Check for multiple hyperlinks first
  const linkEls = cell.querySelectorAll('a');
  if (linkEls.length > 0) {
    linkEls.forEach((linkEl) => {
      const text = linkEl.textContent.trim();
      const href = linkEl.href;
      
      // Check if text has arrow → (indicates text link style)
      const hasArrow = text.includes('→');
      const cleanText = text.replace(/\s*→\s*/g, '').trim();
      
      actions.push({
        href,
        text: cleanText,
        style: hasArrow ? 'link' : 'button' // Arrow = text link, no arrow = button
      });
    });
    
    return actions;
  }

  // Parse multi-line text content
  const cellText = cell.textContent.trim();
  if (!cellText) return [];

  // Split by line breaks
  const lines = cellText.split('\n').filter(line => line.trim());
  
  lines.forEach((line) => {
    line = line.trim();
    if (!line) return;

    // Check for arrow indicator
    const hasArrow = line.includes('→');
    const cleanLine = line.replace(/\s*→\s*/g, '').trim();

    // Check for pipe-separated format: /url|Button Text
    if (cleanLine.includes('|')) {
      const parts = cleanLine.split('|');
      const url = parts[0].trim();
      const text = parts[1] ? parts[1].trim() : 'Learn More';
      
      actions.push({
        href: url,
        text,
        style: hasArrow ? 'link' : 'button'
      });
    } else {
      // Simple URL format
      actions.push({
        href: cleanLine,
        text: 'Call to action',
        style: hasArrow ? 'link' : 'button'
      });
    }
  });

  return actions;
}

/**
 * Old single-link parser (kept for backward compatibility)
 * Now internally uses parseActions and returns first action
 */
function parseLink(cell) {
  const actions = parseActions(cell);
  if (actions.length > 0) {
    return {
      href: actions[0].href,
      text: actions[0].text
    };
  }

  return null;
}

export default function decorate(block) {
  // Get the first (and should be only) row of content
  const rows = [...block.children];

  if (rows.length === 0) {
    return;
  }

  // Parse the first data row (skip header row if it says "Hero")
  const [firstRow, secondRow] = rows;
  const contentRow = (rows.length > 1 && isHeaderRow(firstRow)) ? secondRow : firstRow;

  const cells = [...contentRow.children];

  // Parse 4-column structure
  const callout = parseCallout(cells[0]);
  const heading = parseHeading(cells[1]);
  const bodyContent = parseBody(cells[2]);
  const actions = parseActions(cells[3]); // Multiple actions support

  // Build USWDS hero structure
  const section = document.createElement('section');
  section.className = 'usa-hero';
  section.setAttribute('aria-label', 'Introduction');

  const gridContainer = document.createElement('div');
  gridContainer.className = 'grid-container';

  const calloutBox = document.createElement('div');
  calloutBox.className = 'usa-hero__callout';

  // Heading (with optional callout)
  if (heading) {
    const h1 = document.createElement('h1');
    h1.className = 'usa-hero__heading';

    if (callout) {
      const altSpan = document.createElement('span');
      altSpan.className = 'usa-hero__heading--alt';
      altSpan.textContent = callout;
      h1.append(altSpan);
    }

    const headingText = document.createTextNode(heading);
    h1.append(headingText);
    calloutBox.append(h1);
  }

  // Body paragraph
  if (bodyContent) {
    const p = document.createElement('p');
    p.innerHTML = bodyContent;
    calloutBox.append(p);
  }

  // Multiple CTA Buttons
  if (actions && actions.length > 0) {
    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'usa-hero__actions';

    actions.forEach((action, index) => {
      const link = document.createElement('a');
      link.href = action.href;
      link.textContent = action.text;
      
      // First action = primary button
      if (index === 0 && action.style === 'button') {
        link.className = 'usa-button';
      }
      // Second action = outlined button
      else if (index === 1 && action.style === 'button') {
        link.className = 'usa-button usa-button--outline';
      }
      // Additional actions or arrow-style = text links
      else if (action.style === 'link' || index > 1) {
        link.className = 'usa-button usa-button--unstyled';
      }
      // Fallback for button style beyond first two
      else {
        link.className = 'usa-button usa-button--secondary';
      }

      actionsContainer.append(link);
    });

    calloutBox.append(actionsContainer);
  }

  gridContainer.append(calloutBox);
  section.append(gridContainer);

  // Replace block content
  block.textContent = '';
  block.append(section);
}
