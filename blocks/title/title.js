/**
 * Title Block
 *
 * A utility block for semantic section headings.
 * Size is controlled by Google Docs heading level (H1/H2/H3).
 * Alignment is controlled by variation (default left, or center).
 *
 * Authoring:
 * - Block name: "Title" (left-aligned) or "Title (Center)" (center-aligned)
 * - Content: Type text, then apply Heading 1/2/3 style from Format menu
 *
 * Size options:
 * - H1 = Largest (3xl) - For page titles, hero headings
 * - H2 = Large (2xl) - For section titles ("I need to...", "More common tasks")
 * - H3 = Medium (xl) - For subsections
 */

export default function decorate(block) {
  // Get the heading element (H1, H2, or H3 from Google Docs)
  const heading = block.querySelector('h1, h2, h3');

  if (!heading) {
    console.warn('Title block: No heading found');
    return;
  }

  // Get variation from block classes
  const isCentered = block.classList.contains('center');

  // Add USWDS typography class
  heading.className = 'usa-prose';

  // Add alignment class
  if (isCentered) {
    heading.classList.add('text-center');
  }

  // Add semantic class based on heading level
  const tagName = heading.tagName.toLowerCase();
  heading.classList.add(`title-${tagName}`);

  // Clear the block and append just the heading
  block.innerHTML = '';
  block.appendChild(heading);

  // Add block-level alignment class
  if (isCentered) {
    block.classList.add('text-center');
  }
}
