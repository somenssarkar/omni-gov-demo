# Hero Block - Authoring Guide

**Last Updated:** January 6, 2026  
**Block:** Hero with Multi-Action Support  
**Status:** Ready to Use

---

## 📖 Two Approaches for Hero Sections

Based on your design mockups, there are two ways to create hero sections:

### **Approach 1: Split Layout Hero** (Matches Your Designs)
**What you see in the mockups:**
- Image on left OR right side
- Content area with badge, heading, body text
- Action cards or buttons below content
- Two-column responsive layout

**How to create:** Use **Columns block** + combination of Title, Text, and Cards blocks
**Best for:** Modern homepage layouts, service pages with prominent imagery

---

### **Approach 2: Traditional Hero** (Current Implementation)
**What it looks like:**
- Full-width background image (set via CSS)
- Centered callout box with semi-transparent overlay
- Heading, body, and action buttons inside callout
- Classic USWDS hero pattern

**How to create:** Use **Hero block** (this guide)
**Best for:** Banner sections, landing pages, traditional government site layouts

---

## 🎨 Creating Split Layout Heroes (Like Your Mockups)

### **Design 1: "What do you need to do today?" (Image Right)**

#### Step 1: Create Columns Block
```
Columns (2-up)
```

Insert table: **1 row × 2 columns**

| Left Column | Right Column |
|-------------|--------------|
| (Content here) | (Image here) |

#### Step 2: Fill Left Column with Blocks

**In the LEFT cell, create these blocks:**

1. **Title block for badge:**
```
Title (Center)
Most tasks completed in under 2 minutes
```
Apply **Heading 4 or 5** style (smaller text)

2. **Title block for main heading:**
```
Title
What do you need to do today?
```
Apply **Heading 1** style (large text)

3. **Text block for body:**
```
Text
Choose your task below. No need to know which office or form you need — we'll guide you through it.
```

4. **Text block for section label:**
```
Text
Most popular right now:
```
Apply **Bold** style

5. **Cards block (Compact):**
```
Cards (Compact)
```
Insert table: **1 row × 3 columns**

| Heading | Time | Link |
|---------|------|------|
| Schedule an appointment | 2 min | /appointments |
| Refill my prescription | 1 min | /prescriptions |
| Get my medical records | 30 sec | /records |

6. **Text block for link:**
```
Text
[See all 20 common tasks →]
```
Make "See all 20 common tasks" a link to `/tasks`

#### Step 3: Fill Right Column with Image

**In the RIGHT cell:**
- Insert image (doctor with patient using phone)
- The image will display on the right side

---

### **Design 2: "Get the care you need" (Image Left)**

Same structure, but flip the columns:

| Left Column | Right Column |
|-------------|--------------|
| (Image here) | (Content here) |

**LEFT cell:** Insert image of doctor

**RIGHT cell:** Add all the content blocks (Title, Text, Cards)

---

## 📝 Traditional Hero Block (Approach 2)

### When to Use Traditional Hero

- Full-width banner sections
- Background image is key visual element
- Simple call-to-action focus
- Centered content layout

### Step 1: Add Block Name

```
Hero
```

### Step 2: Insert Table

Insert table: **1 row × 4 columns**

| Callout/Badge | Heading | Body | Actions |
|---------------|---------|------|---------|
|               |         |      |         |

### Step 3: Fill Content

#### Column 1: Callout/Badge (Optional)

Small text that appears above heading (like the badge in your designs).

**Examples:**
- `Most tasks completed in under 2 minutes`
- `New Feature Available`
- `Hero callout:`

**Styling:** Appears as smaller, lighter text above main heading

---

#### Column 2: Heading (Required)

Main hero heading.

**Examples:**
- `What do you need to do today?`
- `Get the care you need, when you need it`

**Tips:**
- Use **Heading 1** style in Google Docs
- 4-10 words recommended
- Make it action-oriented

---

#### Column 3: Body (Optional)

Supporting text.

**Examples:**
- `Choose your task below. No need to know which office or form you need — we'll guide you through it.`
- `From scheduling appointments to refilling prescriptions — everything you need in one place.`

**Tips:**
- 1-3 sentences max
- Focus on benefits

---

#### Column 4: Actions

Multiple action buttons supported!

**Format: Multiple Links**

Create links on separate lines:

```
[Get Started] ← Link to /portal/login
[Learn More] ← Link to /services
```

**Result:**
- 1st link = Primary button (filled)
- 2nd link = Secondary button (outlined)
- 3rd+ = Text links

**Format: Text Links (with arrow)**

Add → symbol for text link style:

```
[See All Tasks →] ← Link to /tasks
```

---

## 🎨 Complete Example Page - Step by Step

### **Homepage with "What do you need to do today?" Layout**

This creates the exact layout from your design mockup.

---

#### **Step 1: Create Columns Block**

In Google Docs, type:
```
Columns (2-up)
```

Press Enter, then:
1. Go to **Insert** → **Table**
2. Choose **1 row × 2 columns**

---

#### **Step 2: Fill LEFT Column (Content)**

In the **LEFT cell**, add these blocks in order:

##### **Block 1: Badge/Callout**
```
Title (Center)
```
Then type:
```
Most tasks completed in under 2 minutes
```
- Apply **Heading 4** style
- This creates the small badge at top

##### **Section Break**
Type `---` and press Enter (creates visual separation)

##### **Block 2: Main Heading**
```
Title
```
Then type:
```
What do you need to do today?
```
- Apply **Heading 1** style
- This is your main hero heading

##### **Section Break**
Type `---` and press Enter

##### **Block 3: Body Text**
```
Text
```
Then type:
```
Choose your task below. No need to know which office or form you need — we'll guide you through it.
```
- Use normal paragraph style
- No special formatting needed

##### **Section Break**
Type `---` and press Enter

##### **Block 4: Section Label**
```
Text
```
Then type:
```
Most popular right now:
```
- Apply **Bold** formatting

##### **Section Break**
Type `---` and press Enter

##### **Block 5: Action Cards**
```
Cards (Compact)
```

Press Enter, then:
1. Go to **Insert** → **Table**
2. Choose **3 rows × 3 columns**

Fill the table:

| Heading | Time | Link |
|---------|------|------|
| Schedule an appointment | 2 min | /appointments |
| Refill my prescription | 1 min | /prescriptions |
| Get my medical records | 30 sec | /records |

**Important:** Make each heading a hyperlink:
- Select "Schedule an appointment"
- Press **Ctrl+K**
- Enter URL: `/appointments`
- Click Apply
- Repeat for other rows

##### **Section Break**
Type `---` and press Enter

##### **Block 6: See All Link**
```
Text
```
Then type:
```
See all 20 common tasks →
```
- Select the entire text
- Press **Ctrl+K**
- Enter URL: `/tasks`
- Click Apply

---

#### **Step 3: Fill RIGHT Column (Image)**

In the **RIGHT cell**:
1. Click in the cell
2. Go to **Insert** → **Image**
3. Upload or select: `doctor-patient-phone.jpg`
4. The image will display on the right side

---

#### **Step 4: Preview Result**

Your page will show:
- ✅ Blue gradient background (from CSS)
- ✅ Content on left with badge, heading, body, action cards
- ✅ Doctor/patient image on right
- ✅ Responsive layout (stacks on mobile)

---

### **Alternative Layout: Image on LEFT**

For the second design mockup ("Get the care you need"):

**Same structure, just flip the columns:**

```
Columns (2-up)
```

| Left Column | Right Column |
|-------------|-------------|
| **(Insert image here)**<br>Upload doctor image | **(All content blocks here)**<br>Title (badge)<br>---<br>Title (heading)<br>---<br>Text (body)<br>---<br>Text (label)<br>---<br>Cards (Compact)<br>---<br>Text (link) |

---

## 📋 Complete Google Docs Example (Copy-Paste Ready)

**Here's what your Google Docs should look like:**

```
Columns (2-up)

[Insert Table: 1 row × 2 columns]

┌─────────────────────────────────┬──────────────────┐
│ LEFT CELL:                      │ RIGHT CELL:      │
│                                 │                  │
│ Title (Center)                  │ [Insert Image]   │
│ Most tasks completed in under   │                  │
│ 2 minutes                       │ Upload:          │
│                                 │ doctor-patient-  │
│ ---                             │ phone.jpg        │
│                                 │                  │
│ Title                           │                  │
│ What do you need to do today?   │                  │
│                                 │                  │
│ ---                             │                  │
│                                 │                  │
│ Text                            │                  │
│ Choose your task below. No need │                  │
│ to know which office or form    │                  │
│ you need — we'll guide you      │                  │
│ through it.                     │                  │
│                                 │                  │
│ ---                             │                  │
│                                 │                  │
│ Text                            │                  │
│ Most popular right now:         │                  │
│                                 │                  │
│ ---                             │                  │
│                                 │                  │
│ Cards (Compact)                 │                  │
│ [Table with 3 action cards]     │                  │
│                                 │                  │
│ ---                             │                  │
│                                 │                  │
│ Text                            │                  │
│ [See all 20 common tasks →]     │                  │
│                                 │                  │
└─────────────────────────────────┴──────────────────┘
```

---

## 📋 Quick Reference

### For Split Layout Heroes (Your Design Mockups)

**Use:** Columns (2-up) block

**Structure:**
```
Column 1 or 2: Image
Other column: 
  - Title (badge)
  - Title (main heading)
  - Text (body)
  - Cards (Compact) with action items
  - Text (link to see more)
```

### For Traditional Heroes

**Use:** Hero block

**Structure:**
```
Hero
| Badge | Heading | Body | Actions |
```

---

## 🎨 Styling Notes

### Background Images (Traditional Hero Only)

Set via CSS in site-specific styles:

```css
/* In sites/[site-name]/styles/styles.css */
.hero .usa-hero {
  background-image: url('/img/hero-bg.jpg');
  background-size: cover;
  background-position: center;
}
```

### Blue Background (Split Layout)

The blue gradient background shown in your designs is applied via site-specific CSS on the Columns block or page section.

---

## ✅ Best Practices

### Content Guidelines
- **Badge/Callout:** Short social proof or context (5-8 words)
- **Heading:** Action-oriented, benefit-focused (4-10 words)
- **Body:** Clear value proposition (15-30 words)
- **Actions:** 1-3 primary actions maximum

### Responsive Behavior
- **Desktop:** Side-by-side columns
- **Tablet:** Columns may stack or adjust
- **Mobile:** All content stacks vertically

### Accessibility
- Use semantic headings (H1 for main heading)
- Descriptive link text (not "Click Here")
- Ensure images have alt text
- Test keyboard navigation

---

## 🚨 Common Questions

**Q: Can I put action cards in the Hero block Actions column?**  
A: No. Use a separate Cards (Compact) block below the Hero, or use the Columns approach with Cards inside a column.

**Q: How do I get the image on the left or right like in the designs?**  
A: Use the Columns (2-up) block, not the Hero block.

**Q: Can I change the blue background color?**  
A: Yes, via site-specific CSS in your styles.css file.

**Q: Which approach should I use?**  
A: 
- **Split layout (Columns)** = Modern, image-focused, matches your mockups
- **Traditional Hero** = Classic banner, background image, centered content

---

## 📞 Need Help?

- Check the Columns block documentation for split layouts
- Check the Cards block documentation for action items
- Refer to USWDS Hero documentation for styling options

---

**Your designs are achievable!** Use Columns + Title + Text + Cards blocks together for the split layout pattern shown in your mockups.
