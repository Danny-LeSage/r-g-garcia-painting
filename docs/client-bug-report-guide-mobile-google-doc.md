# Mobile Website Bug Report Guide

Copy this into Google Docs and share it with the client when you want feedback on the phone version of the site.

## Goal

Use this guide to help the client point to the exact mobile screen, section, and action that caused a problem.

## Best Way To Test

- Test on a real phone if possible
- If testing in a browser preview, check widths around 390px and 430px
- Important responsive changes happen below 900px and again below 600px
- Test in portrait first, then landscape if needed
- Include screenshots whenever possible

## How To Report A Bug

Ask the client to copy this template for each bug:

- Page name:
- Phone model:
- Browser:
- Portrait or landscape:
- Approximate screen width if known:
- Section name:
- Exact location on page:
- What I tapped or did:
- What I expected:
- What actually happened:
- Is this always happening or only sometimes:
- Screenshot file name:
- Priority: low / medium / high

## Mobile Test Checklist By Page

### Global Header And Navigation

On mobile, the top navigation changes into a hamburger menu.

Check these items:

- Logo is visible
- Hamburger icon opens the menu
- Hamburger icon closes the menu
- About link works
- Services menu expands and collapses
- Interior Painting link works
- Exterior Painting link works
- Cabinet Refinishing link works
- Gallery link works
- FAQ link works
- Phone number link works
- Get Quote button works
- Menu closes after tapping a normal link

If there is a bug, describe whether it happened before opening the menu, inside the menu, or after tapping a menu item.

## Homepage - index.html

### Section Order On Mobile

1. Header with logo and hamburger
2. Hero section
3. About section
4. Services section
5. Blue CTA banner
6. Contact details
7. Contact form
8. Footer

### What To Check

#### Hero Section

- Headline wraps cleanly
- Subtitle is readable
- Buttons stack or wrap neatly
- Trust badges wrap without overlapping
- Background image still looks intentional on phone
- Nothing is hidden behind the sticky header

#### About Section

- Text and highlight box stack in the correct order
- Stats remain readable in their smaller layout
- No text runs off screen

#### Services Section

- Service cards stack one per row
- Card spacing feels even
- Each card opens the correct page

#### Contact Section

- Contact details appear above the form
- Form fields fill the screen width comfortably
- Dropdown can be tapped
- Keyboard does not hide important fields for too long
- Submit button remains easy to tap

#### Footer

- Footer sections stack cleanly
- Links are easy to tap

## About Page - about.html

### What To Check

- Hero text scales well on phone
- Story section stacks text and image correctly
- Core value cards do not feel cramped
- "Why Choose Us" content stacks in a readable order
- CTA banner remains readable and button is tappable

## Interior Painting Page - residential-interior.html

### What To Check

- Hero text wraps well
- Main content stacks in the correct order
- Supporting image does not overflow
- Benefit bullets remain readable
- Six service tiles stack cleanly
- CTA button is easy to tap

## Exterior Painting Page - residential-exterior.html

### What To Check

- Same mobile checks as the interior page
- Exterior image scales well on smaller screens
- Service tiles stay readable

## Cabinet Refinishing Page - cabinet-refinishing.html

### What To Check

- Same mobile checks as the other service pages
- Cabinet image scales well
- Service tiles stay readable

## Gallery Page - gallery.html

### Section Order On Mobile

1. Header
2. Gallery images
3. CTA banner
4. Footer

### What To Check

- At smaller phone widths, the gallery should become a single column
- Images should not overflow the screen
- Tapping an image opens the lightbox
- Lightbox image fits the phone screen
- Close button is easy to tap
- Previous and next arrows are usable
- Closing the lightbox returns you to the same spot on the page

When reporting a gallery bug on mobile, identify the image by order from top to bottom:

- First image on page
- Second image on page
- Third image on page

## FAQ Page - faq.html

### What To Check

- Each FAQ question is easy to tap
- The open/close animation works
- Long answers do not get cut off
- Arrow icon rotates correctly
- Text stays readable on small screens

## Mobile-Specific Bug Examples

Use descriptions like these:

- On the homepage mobile view, the trust badges overlap under the hero buttons
- On mobile, the Services menu opens but the submenu links are not tappable
- On the contact form mobile view, the keyboard covers the submit button
- On the gallery page mobile view, the lightbox close button is too close to the top edge
- On the FAQ page mobile view, the answer text is cut off after opening the question

## Priority Guide

- High: prevents contact, navigation, or reading key content
- Medium: layout is awkward or partially broken
- Low: spacing, styling, or small visual issues
