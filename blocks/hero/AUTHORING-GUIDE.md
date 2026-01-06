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

### **IMPORTANT: How Google Docs Structure Works**

**✅ CORRECT Way:**
1. Create the outer Columns table with background variation:
   - **Constituent Health**: Type `Columns (2-up, hero-blue)` for blue gradient
   - **Service Member Health**: Type `Columns (2-up, hero-navy)` for navy gradient
   - **No Background**: Type `Columns (2-up)` for plain white background
2. **Inside the left cell**, just TYPE the content directly:
   - Type `Title (Center)` then press Enter
   - Type your heading text, press Enter
   - Type `Title` then press Enter
   - Type your subheading, press Enter
   - Type `Text` then press Enter
   - Type your paragraph, press Enter
   - Type `Cards` if you want cards

**❌ WRONG Way:**
- Creating another table INSIDE the Columns table cells
- Trying to manually format Title/Text as tables

**Why it works this way:**
- EDS automatically detects keywords like "Title", "Text", "Cards" when you type them
- These get converted into blocks automatically
- You DON'T need to create nested tables - just type the content!

---

### **Design 1: "What do you need to do today?" (Image Right)**

#### Step 1: Create Columns Block with Background
In your Google Doc, type:

**For Constituent Health (blue gradient):**
```
Columns (2-up, hero-blue)
```

**For Service Member Health (navy gradient):**
```
Columns (2-up, hero-navy)
```

**For no background:**
```
Columns (2-up)
```

EDS will automatically create a table with 2 columns.

#### Step 2: Add Content in Left Column
Click in the left cell and type (line by line):

```
Title (Center)
Most tasks completed in under 2 minutes

Title
What do you need to do today?

Text
Choose your task below. No need to know which office or form you need — we'll guide you through it.

Text
Most popular right now:

Cards
(Your cards will go here - see Cards authoring guide)
```

**Note:** Just type these words directly - no nested tables needed!

#### Step 3: Add Image in Right Column
1. Click in the right column
2. Go to **Insert > Image** in Google Docs menu
3. Choose your image (doctor/medical professional photo)
4. Resize if needed

**Visual Structure:**
```
┌─────────────────────────────────────────────────────┐
│ Columns (2-up)                                      │
│ ┌──────────────────────┬──────────────────────────┐ │
│ │ Title (Center)       │                          │ │
│ │ Most tasks...        │   [Doctor Image]         │ │
│ │                      │                          │ │
│ │ Title                │   (inserted via          │ │
│ │ What do you need...  │    Insert > Image)       │ │
│ │                      │                          │ │
│ │ Text                 │                          │ │
│ │ Choose your task...  │                          │ │
│ │                      │                          │ │
│ │ Cards                │                          │ │
│ │ (card content)       │                          │ │
│ └──────────────────────┴──────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

#### What You'll See:
- Blue gradient background (Constituent Health) or Navy gradient (Service Member Health)
- White text automatically applied
- Image on the right side
- Content on the left side
- Responsive layout (stacks on mobile)

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

5. **Cards block (Compact 3-column):**

Now you need to **create a table inside the left cell** for the Cards:

```
Cards (Compact)
```

Then create a table with **3 columns** for Compact cards:

| Heading                      | Time   | Link            |
|------------------------------|--------|-----------------|
| Schedule an appointment      | 2 min  | /appointments   |
| Refill my prescription       | 1 min  | /prescriptions  |
| Get my medical records       | 30 sec | /records        |

**How to create this table in Google Docs:**
- After typing "Cards (Compact)", press Enter
- Go to **Insert > Table** in menu
- Choose **3 columns × 3 rows** (1 header + 2 data rows, or more as needed)
- Fill in: Heading | Time | Link

**Alternative card variations:**

**Standard Cards (4 columns):**
```
Cards
```
Table structure:
| Heading | Image | Body | Link |
|---------|-------|------|------|
| Service | icon  | Desc | /url |

**Featured Cards (6 columns):**
```
Cards (Featured)
```
Table structure:
| Icon | Heading | Time | Body | Link | Link Text |
|------|---------|------|------|------|-----------|
| icon | Title   | 2min | Desc | /url | Learn more|

_See the [Cards Authoring Guide](../cards/AUTHORING-GUIDE.md) for complete details on all card variations._

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

### **Visual Example: Complete Nested Structure**

Here's what the complete Google Docs structure looks like:

```
┌─────────────────────────────────────────────────────────────────────┐
│ Columns (2-up, hero-blue)              ← Type with background class│
│                                                                     │
│ ┌──────────────────────────────────────┬─────────────────────────┐ │
│ │ LEFT CELL CONTENT:                   │ RIGHT CELL CONTENT:     │ │
│ │                                      │                         │ │
│ │ Title (Center)                       │ [Image inserted via     │ │
│ │ Most tasks completed...              │  Insert > Image menu]   │ │
│ │                                      │                         │ │
│ │ Title                                │                         │ │
│ │ What do you need to do today?        │                         │ │
│ │                                      │                         │ │
│ │ Text                                 │                         │ │
│ │ Choose your task below...            │                         │ │
│ │                                      │                         │ │
│ │ Text                                 │                         │ │
│ │ Most popular right now:              │                         │ │
│ │                                      │                         │ │
│ │ Cards (Compact)                      │                         │ │
│ │ ┌───────────────┬──────┬──────────┐ │                         │ │
│ │ │ Heading       │ Time │ Link     │ │  ← Nested table!        │ │
│ │ ├───────────────┼──────┼──────────┤ │                         │ │
│ │ │ Schedule appt │ 2min │ /appt    │ │                         │ │
│ │ │ Refill Rx     │ 1min │ /rx      │ │                         │ │
│ │ │ Get records   │ 30s  │ /records │ │                         │ │
│ │ └───────────────┴──────┴──────────┘ │                         │ │
│ │                                      │                         │ │
│ │ Text                                 │                         │ │
│ │ See all 20 tasks → (link)            │                         │ │
│ └──────────────────────────────────────┴─────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

**Key Points:**
- **Outer table** = Columns (2-up) with 2 cells
- **Left cell** = Multiple blocks typed directly (Title, Text) + ONE nested table (Cards)
- **Right cell** = Image inserted via Insert > Image
- **Cards table** = Created using Insert > Table menu AFTER typing "Cards (Compact)"

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

**Use:** Columns (2-up) block with background variation

**Syntax:**
```
Columns (2-up, hero-blue)    ← Constituent Health (blue gradient)
Columns (2-up, hero-navy)    ← Service Member Health (navy gradient)  
Columns (2-up)               ← Plain white background
```

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

## 🎨 Background Colors & Styling

### Split Layout (Columns) - Author-Selected Backgrounds

**How to Choose Background:**

Authors control the background by adding a variation when creating the Columns block:

**Available Variations:**

| Syntax | Result | Use Case |
|--------|--------|----------|
| `Columns (2-up, hero-blue)` | Blue gradient (#1e3a8a → #3b82f6) | Constituent Health site |
| `Columns (2-up, hero-navy)` | Navy gradient (#1a4480 → #2563eb) | Service Member Health site |
| `Columns (2-up)` | Plain white background | Regular content sections |

**What Happens Automatically:**
- White text color (on gradient backgrounds)
- Transparent cards with glassmorphism effect
- Proper contrast for readability

**Example Usage:**

```
Constituent Health site:
Columns (2-up, hero-blue)  ← Blue gradient hero section

Service Member Health site:
Columns (2-up, hero-navy)  ← Navy gradient hero section

Any site:
Columns (2-up)             ← Plain white background
```

**CSS Architecture:**
```css
/* Constituent Health: sites/constituent-health/styles/styles.css */
body[data-site="constituent-health"] .columns.hero-blue {
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
}

/* Service Member Health: sites/service-member-health/styles/styles.css */
body[data-site="service-member-health"] .columns.hero-navy {
  background: linear-gradient(135deg, #1a4480 0%, #2563eb 100%);
}
```

**To Add New Background Variations:**
1. Add CSS class in site-specific styles file
2. Authors use the class name: `Columns (2-up, your-class-name)`

### Traditional Hero - Background Images

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
