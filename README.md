# R&G Garcia Painting — Website

Professional residential painting website for R&G Garcia Painting (Maple Grove, MN).

## Files

- `index.html` — main landing page
- `about.html` — about the company
- `residential-interior.html` — interior painting service page
- `residential-exterior.html` — exterior painting service page
- `cabinet-refinishing.html` — cabinet refinishing service page
- `css/styles.css` — responsive styles
- `js/main.js` — interactive features (parallax, animations, lightbox, carousel)
- `assets/` — optimized images (logo and project photos)

## Features

- Fully responsive design (mobile, tablet, desktop)
- Scroll animations and parallax effects
- Interactive gallery with lightbox
- Testimonials carousel
- Contact form with validation
- Sticky header with smooth scroll behavior
- Mobile hamburger menu with dropdown navigation

## How to View

Open `index.html` in a web browser, or run a local server:

```bash
python -m http.server 8000
# Visit http://localhost:8000
```

## Deployment

This site is set up for automatic deployment to GitHub Pages via the included workflow (`.github/workflows/deploy.yml`). Simply push to your repository and it will be published automatically.

## Customization Notes

- All styling uses CSS custom properties (variables) for easy color updates
- Images are optimized with multiple size variants for responsive loading
- Contact form is ready to connect with a backend service (Netlify Forms, Formspree, etc.)

