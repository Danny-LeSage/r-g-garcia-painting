# Laptop Website Bug Report Guide

Copy this into Google Docs and share it with the client when you want feedback on the laptop or desktop version of the site.

## Goal

Use this guide to help the client tell us exactly where a bug appears on a laptop-sized screen and what they expected to happen instead.

## Best Way To Test

- Use a laptop or desktop browser
- Test in Chrome first, then Edge or Safari if available
- Ideal screen widths to check: 1280px, 1366px, and 1440px
- Refresh the page before reporting a bug
- Include a screenshot whenever possible

## How To Report A Bug

Ask the client to copy this template for each bug:

- Page name:
- Page URL:
- Browser:
- Screen size if known:
- Section name:
- Exact location on page:
- What I clicked or did:
- What I expected:
- What actually happened:
- Is this always happening or only sometimes:
- Screenshot file name:
- Priority: low / medium / high

## Laptop Test Checklist By Page

### Global Header And Navigation

On laptop view, the full navigation should be visible across the top without a hamburger menu.

Check these items:

- Logo links back to the homepage
- About link works
- Services dropdown opens on hover
- Interior Painting link works
- Exterior Painting link works
- Cabinet Refinishing link works
- Gallery link works
- FAQ link works
- Phone number link works
- Get Quote button goes to the homepage contact section
- Sticky header does not cover section content when scrolling

If there is a bug, describe whether it happened in the top bar, in the Services dropdown, or after clicking a link.

## Homepage - index.html

### Section Order On Laptop

1. Header
2. Hero section
3. About section
4. Services section
5. Blue CTA banner
6. Contact section
7. Footer

### What To Check

#### Hero Section

- Background image loads correctly
- Main headline is centered and readable
- Subtitle is readable
- Both buttons work
- Trust badges sit in one clean row or wrap neatly
- Scroll indicator does not overlap content

#### About Section

- Left text column and right sidebar box align correctly
- Stats appear in a clean 2-by-2 layout
- No text is cut off
- Spacing feels even

#### Services Section

- Three service cards appear side by side on laptop
- Each card opens the correct service page
- Card hover states do not break layout

#### CTA Banner

- Headline and button are centered
- Button works

#### Contact Section

- Contact details appear on the left
- Form appears on the right
- All fields are usable
- Service dropdown opens
- Form submit button is visible
- Confirmation message appears after a successful submit

#### Footer

- Footer text is readable
- Quick links work
- Contact links work

## About Page - about.html

### Section Order On Laptop

1. Header
2. Hero
3. Our Story
4. Core Values
5. Why Choose Us
6. CTA banner
7. Footer

### What To Check

- Hero text is centered and readable
- Story text and image align side by side
- Core value cards line up evenly
- "Why Choose Us" two-column layout looks balanced
- CTA button works
- Footer links work

## Interior Painting Page - residential-interior.html

### Section Order On Laptop

1. Header
2. Hero
3. Main details section
4. Interior services grid
5. CTA banner
6. Footer

### What To Check

- Hero image and text look correct
- Main text and supporting image align in two columns
- Benefit list is readable
- Service tiles wrap evenly
- CTA button works

## Exterior Painting Page - residential-exterior.html

### What To Check

- Same layout checks as the interior page
- Exterior image appears correctly
- Service tiles align evenly
- No text overlaps or uneven spacing

## Cabinet Refinishing Page - cabinet-refinishing.html

### What To Check

- Same layout checks as the other service pages
- Cabinet-related images appear correctly
- Service tiles align evenly
- CTA button works

## Gallery Page - gallery.html

### Section Order On Laptop

1. Header
2. Gallery image area
3. CTA banner
4. Footer

### What To Check

- Images appear in a masonry-style multi-column layout
- No large empty gaps appear between images
- Clicking an image opens the lightbox
- Lightbox close button works
- Lightbox previous and next arrows work
- Keyboard left and right arrows work inside the lightbox
- Escape key closes the lightbox
- Page scroll returns after closing the lightbox

When reporting gallery bugs, name the image position like this:

- First image in left column
- Second image in middle column
- Bottom image in right column

## FAQ Page - faq.html

### Section Order On Laptop

1. Header
2. FAQ list
3. Footer

### What To Check

- Each question opens when clicked
- The answer area expands smoothly
- Multiple FAQ items can be opened without breaking layout
- Arrow icon rotates correctly
- Text remains readable after opening an item

## Laptop-Specific Bug Examples

Use descriptions like these:

- On the homepage laptop view, the second service card is lower than the other two
- On the About page laptop view, the story image is wider than the text column
- On the Gallery page laptop view, the close button in the lightbox overlaps the photo
- On the FAQ page laptop view, the third question does not open when clicked
- In the top navigation on laptop, the Services dropdown disappears before I can click an item

## Priority Guide

- High: prevents contact, navigation, or core reading
- Medium: layout is broken but the page still works
- Low: spacing, styling, or small visual issues
