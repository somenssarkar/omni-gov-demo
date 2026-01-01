/**
 * Hero Block - USWDS Enhanced
 * Transforms EDS block structure into official USWDS hero HTML
 *
 * EDS Authoring Structure (Google Docs):
 * ┌─────────────────────────────────────────────────────────────────┐
 * │ Hero                                                            │
 * ├────────────────────┬──────────────┬──────────────┬─────────────┤
 * │ Callout (optional) │ Heading      │ Body Text    │ Link        │
 * ├────────────────────┼──────────────┼──────────────┼─────────────┤
 * │ Hero callout:      │ Bring att... │ Support ...  │ /action     │
 * └────────────────────┴──────────────┴──────────────┴─────────────┘
 *
 * 4-Column Structure:
 * - Column 1: Callout (optional) - Small text above heading
 * - Column 2: Heading (required) - Main hero heading
 * - Column 3: Body Text (optional) - Supporting paragraph
 * - Column 4: Link (optional) - CTA button (plain text URL or hyperlink)
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
 *       <a class="usa-button" href="/action">Call to action</a>
 *     </div>
 *   </div>
 * </section>
 *
 * Note: Background image can be set via CSS using site-specific styling
 */

export default function decorate(block) {
  // Get the first (and should be only) row of content
  const rows = [...block.children];

  // Debug logging
  console.log('🦸 Hero Block Debug:', {
    rowCount: rows.length,
    firstCellText: rows[0]?.querySelector('div:first-child')?.textContent
  });

  if (rows.length === 0) {
    console.warn('Hero block has no content rows');
    return;
  }

  // Parse the first data row (skip header row if it says "Hero")
  let contentRow = rows[0];
  if (rows.length > 1 && isHeaderRow(rows[0])) {
    contentRow = rows[1];
  }

  const cells = [...contentRow.children];

  // Parse 4-column structure
  const callout = parseCallout(cells[0]);
  const heading = parseHeading(cells[1]);
  const bodyContent = parseBody(cells[2]);
  const actionLink = parseLink(cells[3]);

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

  // CTA Button
  if (actionLink) {
    const button = document.createElement('a');
    button.className = 'usa-button';
    button.href = actionLink.href;
    button.textContent = actionLink.text;
    calloutBox.append(button);
  }

  gridContainer.append(calloutBox);
  section.append(gridContainer);

  // Replace block content
  block.textContent = '';
  block.append(section);
}

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
      text: 'Call to action' // Default button text
    };
  }

  return null;
}
