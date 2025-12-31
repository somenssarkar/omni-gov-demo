import { createOptimizedPicture } from '../../scripts/aem.js';

/**
 * Cards Block - USWDS Enhanced
 * Transforms EDS block structure into official USWDS card HTML
 *
 * EDS Authoring Structure (Google Docs):
 * Each row becomes a card with:
 * - First cell: Heading (or heading + body text)
 * - Second cell: Body text, image, or action link
 * - Third cell: Action link or additional content
 */

export default function decorate(block) {
  const ul = document.createElement('ul');
  ul.className = 'usa-card-group';

  [...block.children].forEach((row) => {
    const card = createUSWDSCard(row);
    ul.append(card);
  });

  block.textContent = '';
  block.append(ul);
}

function createUSWDSCard(row) {
  const cells = [...row.children];
  const li = document.createElement('li');
  li.className = 'usa-card tablet-lg:grid-col-6 widescreen:grid-col-4';

  const container = document.createElement('div');
  container.className = 'usa-card__container';

  let heading = '';
  let bodyContent = '';
  let imageSrc = null;
  let actionLink = null;

  // Parse first cell (heading + optional body)
  if (cells[0]) {
    const firstCell = cells[0];
    const headingEl = firstCell.querySelector('h1, h2, h3, h4, h5, h6');

    if (headingEl) {
      heading = headingEl.textContent.trim();
      // Get remaining content as body
      const clone = firstCell.cloneNode(true);
      clone.querySelector('h1, h2, h3, h4, h5, h6')?.remove();
      bodyContent = clone.innerHTML.trim();
    } else {
      // No heading element, use first line as heading
      const lines = firstCell.innerHTML.split('<br>');
      if (lines.length > 1) {
        heading = lines[0].replace(/<[^>]*>/g, '').trim();
        bodyContent = lines.slice(1).join(' ').trim();
      } else {
        heading = firstCell.textContent.trim();
      }
    }
  }

  // Parse second cell (image, link, or body)
  if (cells[1]) {
    const imgEl = cells[1].querySelector('img');
    const linkEl = cells[1].querySelector('a');

    if (imgEl) {
      imageSrc = imgEl.src;
    } else if (linkEl) {
      actionLink = {
        href: linkEl.href,
        text: linkEl.textContent.trim()
      };
    } else if (!bodyContent) {
      bodyContent = cells[1].innerHTML.trim();
    }
  }

  // Parse third cell (usually action link)
  if (cells[2] && !actionLink) {
    const linkEl = cells[2].querySelector('a');
    if (linkEl) {
      actionLink = {
        href: linkEl.href,
        text: linkEl.textContent.trim()
      };
    }
  }

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
