# USWDS Cards Block - Complete Authoring Guide

**Updated:** January 6, 2026 - Added Featured and Compact Variations

This guide explains how to create USWDS-compliant cards with three different variations:
- **Standard Cards** (4-column authoring) - Traditional cards with images
- **Featured Cards** (6-column authoring) - Rich content with icons, time badges, and CTAs  
- **Compact Cards** (3-column authoring) - Minimal link cards for quick tasks

**Note:** Column numbers refer to the Google Docs table structure. All variations display **4 cards per row** on desktop.

---

## 📋 Quick Reference

| Variation | Columns | Use Case | Auto-Detect |
|-----------|---------|----------|-------------|
| **Featured** | 6 | Rich action cards with icons | ✅ Yes (6 cols) |
| **Compact** | 3 | Quick links, task lists | ✅ Yes (3 cols) |
| **Standard** | 4 | Traditional content cards | Default |

**Columns** = Google Docs table structure | **Display** = 4 cards per row on desktop

---

## 1. FEATURED CARDS (Rich Content)

**Best for:** Primary actions, featured services, main tasks  
**Display:** 4 cards per row on desktop

### 6-Column Format

```
Cards (Featured)
┌──────────────┬─────────────────────────┬──────────────────────────┬────────┬──────────────┬────────────────┐
│ Icon/Image   │ Heading                 │ Body Text                │ Time   │ Link         │ Link Text      │
├──────────────┼─────────────────────────┼──────────────────────────┼────────┼──────────────┼────────────────┤
│ calendar     │ Schedule an Appointment │ Book with any provider...│ 2 min  │ /appointments│ Start Now →    │
│ prescription │ Refill My Prescription  │ Automatic refills...     │ 1 min  │ /prescriptions│ Refill Now →  │
│ medical-record│Get My Medical Records  │ Download or share...     │ 30 sec │ /records     │ Access Records →│
└──────────────┴─────────────────────────┴──────────────────────────┴────────┴──────────────┴────────────────┘
```

### Column Definitions

| Column | Content | Required | Description |
|--------|---------|----------|-------------|
| 1 | **Icon/Image** | ✅ Yes | Icon name or image URL |
| 2 | **Heading** | ✅ Yes | Card title (action-oriented) |
| 3 | **Body Text** | ✅ Yes | Short description (1-2 sentences) |
| 4 | **Time** | ❌ Optional | Completion time (e.g., "2 min") |
| 5 | **Link** | ✅ Yes | Button/link URL |
| 6 | **Link Text** | ❌ Optional | Custom button text or link with → |

### Icon Support

**Available Icons:**
- `calendar` - Scheduling, appointments
- `prescription` - Medications, refills
- `medical-record` - Documents, records
- `phone` - Contact, calls
- `lab` - Lab results, tests
- `benefits` - Benefits, insurance

**Using Icons:**
Just type the icon name in Column 1:
```
calendar
```

**Using Images:**
Provide a full image URL in Column 1:
```
https://example.com/image.jpg
```
or
```
/path/to/image.jpg
```

### Time Badge

**Format:** Short, readable time estimates
- `2 min` ✅
- `1 min` ✅
- `30 sec` ✅
- `5-10 min` ✅

**Displays as:** Pill badge next to heading (blue background, white text)

### Link Text Options

**Text Link with Arrow (→):**
Include arrow in text to create a link instead of button:
```
Start Now →
Access Records →
Learn More →
```

**Button:**
No arrow = styled button:
```
Get Started
Book Appointment
View Records
```

**Auto-Generated:**
Leave empty = defaults to "Learn More"

### Complete Example

**In Google Docs:**

Type this in first row:
```
Cards (Featured)
```

Then create table:
```
┌──────────────┬────────────────────────┬───────────────────────────────────┬────────┬──────────────┬──────────────┐
│ calendar     │ Schedule an Appointment│ Book with any provider in under...│ 2 min  │ /appointments│ Start Now →  │
├──────────────┼────────────────────────┼───────────────────────────────────┼────────┼──────────────┼──────────────┤
│ prescription │ Refill My Prescription │ Automatic refills with home or... │ 1 min  │ /prescriptions│ Refill Now → │
├──────────────┼────────────────────────┼───────────────────────────────────┼────────┼──────────────┼──────────────┤
│ medical-record│Get My Medical Records │ Download or share records...      │ 30 sec │ /records     │ Access Records →│
└──────────────┴────────────────────────┴───────────────────────────────────┴────────┴──────────────┴──────────────┘
```

**Result:** 3 cards with circular icon backgrounds, time badges, and text links with arrows

---

## 2. COMPACT CARDS (Quick Links)

**Best for:** Secondary actions, task lists, quick links grid  
**Display:** 4 cards per row on desktop

### 3-Column Format

```
Cards (Compact)
┌───────────────────────────┬────────┬─────────────────────┐
│ Heading                   │ Time   │ Link                │
├───────────────────────────┼────────┼─────────────────────┤
│ Update my contact info    │ 1 min  │ /profile/contact    │
│ View lab results          │ 30 sec │ /lab-results        │
│ File a claim              │ 4 min  │ /claims/new         │
│ Check my benefits         │ 2 min  │ /benefits           │
│ Download forms            │ 1 min  │ /forms              │
│ Schedule follow-up        │ 3 min  │ /appointments/new   │
└───────────────────────────┴────────┴─────────────────────┘
```

### Column Definitions

| Column | Content | Required | Description |
|--------|---------|----------|-------------|
| 1 | **Heading** | ✅ Yes | Task/link title |
| 2 | **Time** | ❌ Optional | Estimated time |
| 3 | **Link** | ✅ Yes | Target URL |

### Styling

- **Minimal design:** No icons, no body text, no buttons
- **Compact layout:** Smaller padding, tighter spacing
- **Time badge:** Gray pill badge (right-aligned)
- **Entire card clickable:** Heading is link, hover effect on whole card
- **Grid:** 4 columns on desktop, 2 on tablet, 1 on mobile

### Complete Example

**In Google Docs:**

Type this in first row:
```
Cards (Compact)
```

Then create table:
```
┌─────────────────────────────┬────────┬───────────────────┐
│ Update my contact info      │ 1 min  │ /profile/contact  │
├─────────────────────────────┼────────┼───────────────────┤
│ View lab results            │ 30 sec │ /lab-results      │
├─────────────────────────────┼────────┼───────────────────┤
│ File a claim                │ 4 min  │ /claims/new       │
├─────────────────────────────┼────────┼───────────────────┤
│ Check my benefits           │ 2 min  │ /benefits         │
├─────────────────────────────┼────────┼───────────────────┤
│ Download forms              │ 1 min  │ /forms            │
├─────────────────────────────┼────────┼───────────────────┤
│ Schedule follow-up          │ 3 min  │ /appointments/new │
└─────────────────────────────┴────────┴───────────────────┘
```

**Result:** 6 compact, minimal cards with time badges, entire card clickable

---

## 3. STANDARD CARDS (Traditional)

**Best for:** Content cards, news items, informational pages  
**Display:** 4 cards per row on desktop

### 4-Column Format

```
Cards
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
| 1 | **Heading** | ✅ Yes | Card title |
| 2 | **Image** | ❌ Optional | Card image/photo |
| 3 | **Body Text** | ❌ Optional | Card description |
| 4 | **Link** | ❌ Optional | Button URL |

### Variations

Standard cards support additional layout variations:

**Cards (Inset)**
- Image has padding inside card
- Good for logos, icons

**Cards (Exdent)**
- Image extends to card edges
- Good for full-bleed photos

**Cards (Flag)**
- Horizontal layout, image on left
- Good for list-style cards

**Cards (Flag Right)**
- Horizontal layout, image on right
- Good for alternating layouts

### Complete Example

**In Google Docs:**

```
Cards
┌──────────────────┬──────────┬───────────────────────────────┬───────────┐
│ Health Services  │ (image)  │ Learn about our comprehensive │ /services │
│                  │          │ health services and programs. │           │
├──────────────────┼──────────┼───────────────────────────────┼───────────┤
│ Resources        │          │ Access helpful resources and  │ /resources│
│                  │          │ tools for managing your care. │           │
└──────────────────┴──────────┴───────────────────────────────┴───────────┘
```

---

## 🎨 Auto-Detection

The block **automatically detects** which variation to use based on column count:

| Columns | Auto-Detected Variation | Override |
|---------|------------------------|----------|
| 6 | Featured | Add `(Featured)` to explicitly declare |
| 3 | Compact | Add `(Compact)` to explicitly declare |
| 4 | Standard | Default behavior |

**Auto-Detection Example:**

Just create a 6-column table:
```
Cards
┌──────┬─────────┬──────┬──────┬──────┬───────────┐
│ icon │ heading │ body │ time │ link │ link text │
```

The block sees 6 columns → automatically applies Featured variation!

**Explicit Declaration (Optional):**
```
Cards (Featured)
┌──────┬─────────┬──────┬──────┬──────┬───────────┐
│ icon │ heading │ body │ time │ link │ link text │
```

---

## 💡 Best Practices

### Featured Cards

✅ **DO:**
- Use action-oriented headings ("Schedule", "Refill", "Get")
- Keep body text to 1-2 sentences
- Include time estimates when relevant
- Use icons that clearly represent the action
- Use arrow (→) for less prominent actions

❌ **DON'T:**
- Use generic headings ("Services", "Information")
- Write long paragraphs in body text
- Mix buttons and text links in same group
- Use unrelated icons

### Compact Cards

✅ **DO:**
- Use clear, task-oriented headings
- Group related tasks together
- Include realistic time estimates
- Keep headings short (3-5 words)

❌ **DON'T:**
- Add body text (not supported)
- Use overly long headings
- Mix with Featured cards in same group

### Standard Cards

✅ **DO:**
- Use high-quality images
- Write descriptive body text
- Use consistent image aspect ratios
- Test without images (should still work)

❌ **DON'T:**
- Assume all cards need images
- Use low-resolution images
- Write excessive body text

---

## 📱 Responsive Behavior

All card variations are fully responsive:

| Screen Size | Featured/Compact | Standard |
|-------------|------------------|----------|
| **Mobile** (<640px) | 1 column | 1 column |
| **Tablet** (640-1024px) | 2 columns | 2 columns |
| **Desktop** (>1024px) | 4 columns | 4 columns |

Cards automatically adjust layout based on screen width.

---

## 🆘 Troubleshooting

### Icons not showing?

**Problem:** Icon appears as broken image
**Solution:** Check icon name matches available icons (see Icon Support section)

### Time badge not appearing?

**Problem:** Time column shows as text in body
**Solution:** Ensure you're using the correct variation (Featured or Compact)

### Wrong variation applied?

**Problem:** Expected Featured but got Standard
**Solution:** Check column count - Featured requires exactly 6 columns

### Cards not in grid?

**Problem:** Cards stack vertically on desktop
**Solution:** Ensure you're using table format in Google Docs, not bullet list

---

## 📚 Examples Library

### Healthcare Dashboard (Featured)

```
Cards (Featured)
┌──────────────┬────────────────────────┬──────────────────────────────┬────────┬──────────────┬──────────────┐
│ calendar     │ Schedule an Appointment│ Book with any provider in... │ 2 min  │ /appointments│ Start Now →  │
│ prescription │ Refill My Prescription │ Automatic refills with...    │ 1 min  │ /prescriptions│ Refill Now → │
│ medical-record│Get My Medical Records │ Download or share records... │ 30 sec │ /records     │ Access Records →│
└──────────────┴────────────────────────┴──────────────────────────────┴────────┴──────────────┴──────────────┘
```

### Quick Tasks (Compact)

```
Cards (Compact)
┌─────────────────────────┬────────┬────────────────┐
│ Update contact info     │ 1 min  │ /profile       │
│ View lab results        │ 30 sec │ /labs          │
│ Check benefits          │ 2 min  │ /benefits      │
│ Download forms          │ 1 min  │ /forms         │
└─────────────────────────┴────────┴────────────────┘
```

### Services Overview (Standard)

```
Cards
┌──────────────────┬──────────┬────────────────────────────┬───────────┐
│ Primary Care     │ (image)  │ Comprehensive primary care │ /primary  │
│ Specialty Care   │ (image)  │ Expert specialists in...   │ /specialty│
│ Mental Health    │ (image)  │ Counseling and support...  │ /mental   │
└──────────────────┴──────────┴────────────────────────────┴───────────┘
```

---

## 🔗 Related Documentation

- [USWDS Cards Component](https://designsystem.digital.gov/components/card/)
- [Title Block Guide](../title/AUTHORING-GUIDE.md)
- [Text Block Guide](../text/AUTHORING-GUIDE.md)

---

**Questions?** Contact the development team or refer to the USWDS documentation.
