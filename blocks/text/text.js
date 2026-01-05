/**
 * Text Block
 *
 * A utility block for styled body text, subtitles, and descriptions.
 * Alignment is controlled by variation (default left, center, or intro).
 *
 * Authoring:
 * - Block name: "Text" (left), "Text (Center)", or "Text (Intro)"
 * - Content: Type regular paragraph text
 *
 * Variations:
 * - text = Left-aligned, regular size (default)
 * - text (center) = Center-aligned, regular size
 * - text (intro) = Left-aligned, larger intro paragraph
 * - text (center, intro) = Center-aligned, larger intro paragraph
 */

export default function decorate(block) {
  // Get all paragraph elements
  const paragraphs = block.querySelectorAll('p');

  if (paragraphs.length === 0) {
    console.warn('Text block: No paragraph content found');
    return;
  }

  // Get variations from block classes
  const isCentered = block.classList.contains('center');
  const isIntro = block.classList.contains('intro');

  // Process each paragraph
  paragraphs.forEach((p) => {
    // Add USWDS typography class
    p.classList.add('usa-prose');

    // Add intro class if needed
    if (isIntro) {
      p.classList.add('usa-intro');
    }

    // Add alignment class
    if (isCentered) {
      p.classList.add('text-center');
    }
  });

  // Add block-level alignment class
  if (isCentered) {
    block.classList.add('text-center');
  }

  // Add intro class to block if needed
  if (isIntro) {
    block.classList.add('intro');
  }
}
