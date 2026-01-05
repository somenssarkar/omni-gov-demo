# Text Block - Authoring Guide

## Purpose
A utility block for styled body text, subtitles, intro paragraphs, and descriptions. Provides USWDS-compliant typography with flexible alignment options.

## Authoring in Google Docs

### Basic Usage (Left-Aligned)

1. Type the block name: `Text`
2. Press Enter and type your paragraph text
3. Done!

### Center-Aligned Variation

1. Type the block name: `Text (Center)`
2. Press Enter and type your paragraph text
3. Done!

### Intro Paragraph Variation

1. Type the block name: `Text (Intro)`
2. Press Enter and type your intro text
3. Intro style creates larger, more prominent text

### Center + Intro Combination

1. Type the block name: `Text (Center, Intro)`
2. Press Enter and type your text
3. Results in centered, large intro paragraph

## Variations

| Variation | Alignment | Size | Use Case |
|-----------|-----------|------|----------|
| `Text` | Left | Regular | Standard body text, descriptions |
| `Text (Center)` | Center | Regular | Centered subtitles, descriptions |
| `Text (Intro)` | Left | Large | Intro paragraphs, lead text |
| `Text (Center, Intro)` | Center | Large | Centered hero subtitles |

## Examples

### Example 1: Subtitle Below Heading
```
Title (Center)
Get started today

Text (Center)
We make it easy to access quality healthcare services.
```

### Example 2: Section Description
```
Title
About Our Services

Text
We provide comprehensive healthcare services to all eligible members. 
Our team of experienced professionals is dedicated to your health and wellness.
```

### Example 3: Intro Paragraph
```
Title
Welcome to Military Health

Text (Intro)
Supporting the health and wellness of our service members and their families 
with expert care and dedicated service.
```

### Example 4: Multiple Paragraphs
```
Text
Our mission is to provide the highest quality healthcare services to our community.
We believe in accessible, affordable, and comprehensive care for everyone.

Through partnerships and innovation, we continue to expand our services 
and improve patient outcomes.
```

## Use Cases

### Homepage Hero Subtitle
```
Title (Center)
Get the care you need

Text (Center, Intro)
Choose what you want to do. We'll handle the rest.
```

### Section Introduction
```
Title
I need to...

Text (Center)
Select from our most common services below, or search for what you need.
```

### Feature Description
```
Title
Expert Care

Text
Our board-certified physicians provide comprehensive care with a focus 
on prevention and wellness.
```

## Tips

✅ **DO:**
- Use Text blocks for subtitles under headings
- Use Intro variation for lead paragraphs
- Keep paragraphs concise (2-3 sentences)
- Use center alignment for hero/banner sections
- Use left alignment for body content

❌ **DON'T:**
- Don't use for headings (use Title block instead)
- Don't mix too many variations on one page
- Don't write overly long paragraphs (break into multiple)
- Don't manually bold or style text (use variations)

## Composition Patterns

### Hero Section
```
Title (Center)
[Heading]

Text (Center, Intro)
[Subtitle/description]

[Buttons or Cards]
```

### Content Section
```
Title
[Section heading]

Text
[Description paragraph]

Cards
[Related content...]
```

### Call to Action
```
Title (Center)
[CTA Heading]

Text (Center)
[Supporting text]

[Button]
```

## Accessibility

- Uses USWDS typography for readability
- Maintains proper line length (max-width) for left-aligned text
- Center-aligned text doesn't have max-width constraint
- Proper line height for comfortable reading
- Semantic paragraph elements
- WCAG 2.1 AA compliant

## Responsive Behavior

- Font sizes adjust for mobile/desktop
- Intro paragraphs scale up on larger screens
- Line length constrains prevent overly long lines
- Center-aligned text maintains center on all sizes

## Technical Notes

**USWDS Classes Applied:**
- `usa-prose` - Typography system
- `usa-intro` - Intro paragraph style (larger)
- `text-center` - Center alignment

**CSS Variables Used:**
- `--uswds-font-size-body` - Regular text size
- `--uswds-font-size-lg` / `--uswds-font-size-xl` - Intro sizes
- `--uswds-measure-4` / `--uswds-measure-5` - Line length
- `--uswds-spacing-*` - Margins and spacing
