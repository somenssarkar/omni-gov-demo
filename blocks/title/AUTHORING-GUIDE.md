# Title Block - Authoring Guide

## Purpose
A utility block for semantic section headings. The size is controlled by the Google Docs heading level, and alignment is controlled by the block variation.

## Authoring in Google Docs

### Basic Usage (Left-Aligned)

1. Type the block name: `Title`
2. Press Enter and type your heading text
3. Select the text
4. Go to **Format → Paragraph styles → Heading 1/2/3**
5. Done!

### Center-Aligned Variation

1. Type the block name: `Title (Center)`
2. Press Enter and type your heading text
3. Select the text
4. Go to **Format → Paragraph styles → Heading 1/2/3**
5. Done!

## Size Options

The size is automatically determined by which heading style you apply:

- **Heading 1** → Largest (3xl/4xl)
  - Use for: Page titles, hero headings
  - Example: "Welcome to Our Services"

- **Heading 2** → Large (2xl/3xl)
  - Use for: Section titles
  - Example: "I need to...", "More common tasks"

- **Heading 3** → Medium (xl/2xl)
  - Use for: Subsections
  - Example: "Contact Information", "Related Services"

## Variations

| Variation | Description | Example |
|-----------|-------------|---------|
| `Title` | Left-aligned (default) | Standard section heading |
| `Title (Center)` | Center-aligned | Homepage hero heading, centered sections |

## Examples

### Example 1: Section Title (Left-Aligned)
```
Title
I need to...                    ← Apply Heading 2 style
```

### Example 2: Page Hero (Center-Aligned)
```
Title (Center)
Get the care you need          ← Apply Heading 1 style
```

### Example 3: Subsection (Left-Aligned)
```
Title
Contact Information            ← Apply Heading 3 style
```

## Tips

✅ **DO:**
- Use native Google Docs heading styles (Format menu)
- Choose heading level based on semantic importance
- Use H1 sparingly (typically one per page)
- Use H2 for main sections
- Use H3 for subsections

❌ **DON'T:**
- Don't type markdown syntax (##, ###)
- Don't manually bold text instead of using heading styles
- Don't skip heading levels (H1 → H3)

## Composition Pattern

The Title block works great with other utility blocks:

```
Title (Center)
Get started today              ← Apply Heading 1

Text (Center)
We make it easy to access the care you need.

Cards (Featured)
[Cards content here...]
```

## Accessibility

- Preserves semantic HTML heading hierarchy
- Screen readers announce heading level
- Supports keyboard navigation
- WCAG 2.1 AA compliant
