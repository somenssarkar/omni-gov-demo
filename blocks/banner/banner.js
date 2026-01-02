/**
 * Banner Block - USWDS Government Banner
 * Official U.S. government website banner component
 *
 * This block is auto-included on every page (via scripts.js)
 * No authoring required - template-level component
 *
 * USWDS Component: usa-banner
 * Reference: https://designsystem.digital.gov/components/banner/
 *
 * Features:
 * - "An official website of the United States government" message
 * - "Here's how you know" expandable section
 * - Language selector (Español)
 * - Accessibility link
 */

export default function decorate(block) {
  // Create USWDS banner structure
  const banner = document.createElement('section');
  banner.className = 'usa-banner';
  banner.setAttribute('aria-label', 'Official website of the United States government');

  // Banner header (always visible)
  const header = document.createElement('div');
  header.className = 'usa-banner__header';

  const container = document.createElement('div');
  container.className = 'usa-banner__inner';

  const gridRow = document.createElement('div');
  gridRow.className = 'grid-row grid-gap-sm';

  // Flag column
  const flagCol = document.createElement('div');
  flagCol.className = 'usa-banner__header-flag grid-col-auto';
  const flag = document.createElement('img');
  flag.className = 'usa-banner__header-flag-img';
  flag.src = '/icons/us_flag.svg';
  flag.alt = 'U.S. flag';
  flag.setAttribute('aria-hidden', 'true');
  flagCol.append(flag);

  // Text column
  const textCol = document.createElement('div');
  textCol.className = 'usa-banner__header-text grid-col-fill tablet:grid-col-auto';
  textCol.setAttribute('aria-hidden', 'true');
  textCol.textContent = 'An official website of the United States government';

  // Action column (expand button)
  const actionCol = document.createElement('div');
  actionCol.className = 'usa-banner__header-action grid-col-auto';

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'usa-accordion__button usa-banner__button';
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', 'gov-banner-default');

  const buttonText = document.createElement('span');
  buttonText.className = 'usa-banner__button-text';
  buttonText.textContent = "Here's how you know";
  button.append(buttonText);

  actionCol.append(button);

  gridRow.append(flagCol, textCol, actionCol);
  container.append(gridRow);
  header.append(container);

  // Banner content (expandable)
  const content = document.createElement('div');
  content.className = 'usa-banner__content usa-accordion__content';
  content.id = 'gov-banner-default';
  content.hidden = true;

  const contentContainer = document.createElement('div');
  contentContainer.className = 'grid-row grid-gap-lg';

  // Left column - .gov explanation
  const govCol = document.createElement('div');
  govCol.className = 'usa-banner__guidance tablet:grid-col-6';

  const govIcon = document.createElement('img');
  govIcon.className = 'usa-banner__icon usa-media-block__img';
  govIcon.src = '/icons/icon-dot-gov.svg';
  govIcon.role = 'img';
  govIcon.alt = '';
  govIcon.setAttribute('aria-hidden', 'true');

  const govContent = document.createElement('div');
  govContent.className = 'usa-media-block__body';

  const govHeading = document.createElement('p');
  const govStrong = document.createElement('strong');
  govStrong.textContent = 'Official websites use .gov';
  govHeading.append(govStrong);
  govHeading.append(document.createElement('br'));
  govHeading.append(document.createTextNode('A '));
  const govBold = document.createElement('strong');
  govBold.textContent = '.gov';
  govHeading.append(govBold);
  govHeading.append(document.createTextNode(' website belongs to an official government organization in the United States.'));

  govContent.append(govHeading);
  govCol.append(govIcon, govContent);

  // Right column - HTTPS explanation
  const httpsCol = document.createElement('div');
  httpsCol.className = 'usa-banner__guidance tablet:grid-col-6';

  const httpsIcon = document.createElement('img');
  httpsIcon.className = 'usa-banner__icon usa-media-block__img';
  httpsIcon.src = '/icons/icon-https.svg';
  httpsIcon.role = 'img';
  httpsIcon.alt = '';
  httpsIcon.setAttribute('aria-hidden', 'true');

  const httpsContent = document.createElement('div');
  httpsContent.className = 'usa-media-block__body';

  const httpsHeading = document.createElement('p');
  const httpsStrong = document.createElement('strong');
  httpsStrong.textContent = 'Secure .gov websites use HTTPS';
  httpsHeading.append(httpsStrong);
  httpsHeading.append(document.createElement('br'));
  httpsHeading.append(document.createTextNode('A '));
  const lockBold = document.createElement('strong');
  lockBold.textContent = 'lock';
  httpsHeading.append(lockBold);
  httpsHeading.append(document.createTextNode(' ('));

  const lockIcon = document.createElement('span');
  lockIcon.className = 'icon-lock';
  lockIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="52" height="64" viewBox="0 0 52 64" class="usa-banner__lock-image" role="img" aria-labelledby="banner-lock-description" focusable="false"><title id="banner-lock-description">Lock</title><desc>Locked padlock icon</desc><path fill="#000000" fill-rule="evenodd" d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"/></svg>`;
  httpsHeading.append(lockIcon);

  httpsHeading.append(document.createTextNode(') or '));
  const httpsBold = document.createElement('strong');
  httpsBold.textContent = 'https://';
  httpsHeading.append(httpsBold);
  httpsHeading.append(document.createTextNode(' means you've safely connected to the .gov website. Share sensitive information only on official, secure websites.'));

  httpsContent.append(httpsHeading);
  httpsCol.append(httpsIcon, httpsContent);

  contentContainer.append(govCol, httpsCol);
  content.append(contentContainer);

  banner.append(header, content);

  // Add accordion functionality
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
    content.hidden = expanded;
  });

  // Replace block content
  block.textContent = '';
  block.append(banner);
}
