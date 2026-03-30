# R&G Garcia Painting — Website

Scaffolded static website for R&G Garcia Painting (Maple Grove, MN).

Files:

- `index.html` — main site
- `css/styles.css` — styles
- `assets/logo.svg` — placeholder logo (replace with real logo file)

To view the site locally, open `index.html` in a browser.

Next steps:

- Provide the company logo (PNG, SVG) to replace `assets/logo.svg`.
- Supply real project photos to replace gallery tiles.
- I can add Google Maps, contact backend, or deploy the site when you want.

What I added for you now:

- Resized web-friendly images (`-lg`, `-md`, `-sm`) and `-md.webp` files in `assets/`.
- A lightweight lightbox at `js/main.js` for viewing gallery images full-size.
- Contact form prepared for Netlify/Forms (static attribute guidance below).
- A GitHub Actions workflow to deploy the site to GitHub Pages: `.github/workflows/deploy.yml`.

Contact form notes:
- The form currently uses a `mailto:` fallback. To receive submissions automatically, deploy to Netlify and the form will be captured if you keep the form element as-is and add the `data-netlify="true"` attribute. Alternatively, sign up for Formspree and replace the form `action` value with your Formspree endpoint.

Deploy to GitHub Pages:

1. Create a GitHub repo and push this project.
2. The included workflow will publish the repository root to GitHub Pages when you push to `main` or `master`.

Do you want me to:

- Add `data-netlify="true"` to the form now and include Netlify-specific instructions? (recommended if you plan to host on Netlify)
- Create a `CNAME` and set up a domain file if you already own a domain?

