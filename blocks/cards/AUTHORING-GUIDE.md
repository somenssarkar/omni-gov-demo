# USWDS Cards Block - Authoring Guide

This guide explains how to create USWDS-compliant cards in Google Docs for Adobe Edge Delivery Services.

## Table Structure

### 4-Column Format

```
Cards (Variation)
┌──────────────────┬──────────┬────────────────────────────────┬───────────┐
│ Heading          │ Image    │ Body Text                      │ Link      │
├──────────────────┼──────────┼────────────────────────────────┼───────────┤
│ Health Services  │ (image)  │ Learn about our comprehensive..│ /services │
│ Resources        │          │ Access helpful resources...    │ /resources│
│ Contact Us       │ (image)  │ Get in touch with our team...  │ /contact  │
└──────────────────┴──────────┴────────────────────────────────┴───────────┘
```

### Column Definitions

| Column | Content | Required | Description |
|--------|---------|----------|-------------|
| 1 | **Heading** | ✅ Yes | Card title/heading |
| 2 | **Image** | ❌ Optional | Card image/photo |
| 3 | **Body Text** | ❌ Optional | Card description |
| 4 | **Link** | ❌ Optional | Button URL (plain text or hyperlink) |

## Card Variations

**How EDS Processes Variations:**
When you type "Cards (Flag)" in the first cell, EDS automatically:
1. Extracts "flag" as a CSS class
2. Adds it to the block: `<div class="cards flag block">`
3. Our JavaScript detects it from the class name

### 1. Default Card (Text Only)

**First Row:** `Cards` or `Cards (Default)`

```
Cards
┌──────────────────┬──────┬────────────────────────────────┬───────────┐
│ Health Services  │      │ Learn about our comprehensive..│ /services │
│ Resources        │      │ Access helpful resources...    │ /resources│
└──────────────────┴──────┴────────────────────────────────┴───────────┘
```

**Result:** Vertical card with heading, body text, and button. No image.

---

### 2. Default Card with Image

**First Row:** `Cards`

```
Cards
┌──────────────────┬──────────┬────────────────────────────────┬───────────┐
│ Health Services  │ (image)  │ Learn about our comprehensive..│ /services │
│ Resources        │ (image)  │ Access helpful resources...    │ /resources│
└──────────────────┴──────────┴────────────────────────────────┴───────────┘
```

**Result:** Vertical card with image at top, heading, body text, and button.

**How to add images in Google Docs:**
1. Place cursor in column 2
2. Insert → Image → Upload or from Drive
3. Image will appear above text in the card

---

### 3. Inset Media Card

**First Row:** `Cards (Inset)`

```
Cards (Inset)
┌──────────────────┬──────────┬────────────────────────────────┬───────────┐
│ Health Services  │ (image)  │ Learn about our comprehensive..│ /services │
└──────────────────┴──────────┴────────────────────────────────┴───────────┘
```

**Result:** Image has padding inside the card border.

**Visual difference:**
- Default: Image extends to card edges
- Inset: Image has padding/margin inside card

---

### 4. Exdent Media Card

**First Row:** `Cards (Exdent)`

```
Cards (Exdent)
┌──────────────────┬──────────┬────────────────────────────────┬───────────┐
│ Health Services  │ (image)  │ Learn about our comprehensive..│ /services │
└──────────────────┴──────────┴────────────────────────────────┴───────────┘
```

**Result:** Image extends beyond card border, "bleeding" to the edges.

**Best for:** Hero-style cards with full-bleed images

---

### 5. Flag Layout (Horizontal - Image Left)

**First Row:** `Cards (Flag)`

```
Cards (Flag)
┌──────────────────┬──────────┬────────────────────────────────┬───────────┐
│ Health Services  │ (image)  │ Learn about our comprehensive..│ /services │
└──────────────────┴──────────┴────────────────────────────────┴───────────┘
```

**Result:** Horizontal layout with image on the LEFT, content on the right.

```
┌────────────────────────────────────┐
│  ┌─────┐  Health Services          │
│  │     │  Learn about our...       │
│  │ IMG │  [Learn More Button]      │
│  └─────┘                            │
└────────────────────────────────────┘
```

**Best for:** Feature cards, product showcases

---

### 6. Flag Layout Right (Horizontal - Image Right)

**First Row:** `Cards (Flag Right)`

```
Cards (Flag Right)
┌──────────────────┬──────────┬────────────────────────────────┬───────────┐
│ Health Services  │ (image)  │ Learn about our comprehensive..│ /services │
└──────────────────┴──────────┴────────────────────────────────┴───────────┘
```

**Result:** Horizontal layout with content on the left, image on the RIGHT.

```
┌────────────────────────────────────┐
│  Health Services          ┌─────┐  │
│  Learn about our...       │     │  │
│  [Learn More Button]      │ IMG │  │
│                            └─────┘  │
└────────────────────────────────────┘
```

**Best for:** Alternating layouts, visual variety

---

## Link Options

### Option 1: Plain Text URL (Recommended for simplicity)

Just type the URL in column 4:
```
/services
```

**Result:** Button with text "Learn More" linking to `/services`

### Option 2: Hyperlink with Custom Button Text

1. Type your button text: "View Details"
2. Select text
3. Insert → Link (Ctrl+K / Cmd+K)
4. Enter URL: `/services`

**Result:** Button with text "View Details" linking to `/services`

---

## Complete Examples

### Example 1: Simple Text Cards

```
Cards
┌──────────────────────┬──────┬────────────────────────────────────┬───────────┐
│ Health Services      │      │ Comprehensive health care          │ /services │
│ Resources & Support  │      │ Access helpful resources           │ /resources│
│ Contact Us           │      │ Get in touch with our team         │ /contact  │
└──────────────────────┴──────┴────────────────────────────────────┴───────────┘
```

### Example 2: Cards with Images

```
Cards
┌──────────────────────┬──────────┬────────────────────────────────┬───────────┐
│ Primary Care         │ (doctor) │ Schedule your annual checkup   │ /primary  │
│ Mental Health        │ (therapy)│ Professional counseling        │ /mental   │
│ Emergency Services   │ (ambulan)│ 24/7 emergency care            │ /emergency│
└──────────────────────┴──────────┴────────────────────────────────┴───────────┘
```

### Example 3: Flag Layout for Features

```
Cards (Flag)
┌────────────────────────┬────────────┬───────────────────────────────┬──────────┐
│ Virtual Appointments   │ (laptop)   │ Connect with doctors online   │ /virtual │
│ Prescription Refills   │ (pharmacy) │ Order medications easily      │ /refills │
└────────────────────────┴────────────┴───────────────────────────────┴──────────┘
```

---

## Best Practices

### Content Guidelines

1. **Headings:** Keep short (2-5 words)
2. **Body Text:** 1-2 sentences, ~15-25 words
3. **Images:** Use relevant, high-quality images
4. **Links:** Use descriptive URLs or custom button text

### Visual Consistency

- Use same variation for all cards in a block (don't mix Default + Flag)
- Keep card content length similar for better visual alignment
- Use images consistently (all cards with images, or all without)

### Responsive Behavior

Cards automatically adapt:
- **Mobile:** Stacks vertically, 1 per row
- **Tablet:** 2 cards per row
- **Desktop:** 3 cards per row (can be customized)

Flag layouts only apply on larger screens (tablet+), reverting to vertical on mobile.

---

## Troubleshooting

### Cards not appearing?

✅ Check first row contains "Cards" text
✅ Ensure table has at least 2 rows (header + content)
✅ Wait 1-2 minutes after saving for EDS to process

### Buttons not showing?

✅ Check column 4 contains a URL or hyperlink
✅ Verify URL is not empty

### Images not loading?

✅ Ensure images are uploaded to column 2
✅ Check image is visible in Google Doc
✅ Verify image permissions (public/shared)

### Wrong variation applied?

✅ Check first row spelling: "Cards (Flag)" not "Card (Flag)"
✅ Variation name is case-insensitive
✅ Supported: Default, Inset, Exdent, Flag, Flag Right

---

## USWDS Reference

For official USWDS card documentation:
https://designsystem.digital.gov/components/card/

---

**Questions?** Contact the development team or refer to the EDS documentation.
