# Chinese Canteen · 食府 — Cambridge

A luxury, cinematic website for Chinese Canteen, a Sichuan & Cantonese restaurant at 30 Bridge Street, Cambridge.

Static site — plain HTML/CSS/JS, **no build step**. Deploys as-is to GitHub Pages, Netlify, Vercel, or any static host.

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Homepage — hero video, about, signature dishes, craft, menu teaser, how-to-enjoy, **reservation**, **order online**, visit/map, FAQ |
| `menu.html` | Full interactive menu — search, filters, category nav, build-your-own, set meals, hot pot, photo lightbox |
| `site-data.js` | **Single source of truth** — restaurant info, the full 130+ dish menu, photo map, editorial copy, FAQ, reservation config |
| `app.js` | Shared behaviour — nav, mobile drawer, scroll reveals, homepage rendering, reservation form |
| `menu.js` | Menu page — render, search/filter, build-your-own builder, lightbox, deep-links |
| `styles.css` | The whole design system |
| `images/`, `video/` | Optimised photography (logo, kitchen, ~24 dish photos) and the hero loop |

## Editing content

Almost everything lives in **`site-data.js`** — prices, dishes, hours, phone, address, copy. Change it there and both pages update.

- **Add a dish photo:** drop a web-sized JPG in `images/dishes/` and add `"<code>": "images/dishes/<file>.jpg"` to `dishImages`.
- **Ordering link:** `ordering.url` (currently the live LifeInTouch ordering page).

## Reservations — going live

The reservation form works two ways (see `site-data.reservation`):

1. **Recommended:** create a free form endpoint at [Formspree](https://formspree.io) (or Basin) and paste the URL into `reservation.endpoint`. Requests then arrive by email with no backend.
2. **Default (no endpoint):** the form opens the guest's email client pre-filled to `reservation.email`. Set that to the restaurant's real inbox.

Either way, large/same-day parties are pointed to the phone number.

## Deploy to GitHub Pages

```bash
git init && git add -A && git commit -m "Chinese Canteen site"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
Then in the repo: **Settings → Pages → Deploy from branch → main / root**.
For a custom domain (e.g. chinesecanteen.co.uk), add a `CNAME` file containing the domain and set DNS to GitHub Pages. Update the absolute URLs in `sitemap.xml` to match.

## Notes
- `_source/hero-original.mp4` is the full-res master (git-ignored). The deployed `video/hero.mp4` is a 1.4 MB web-optimised loop.
- `?static` on any URL disables entrance animations (useful for printing / debugging).
