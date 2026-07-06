# WeCraft Solutions — company site

Static company website for **WeCraft Solutions** (wecraft-solutions.com), the
software studio behind **Sayso** and future products. Hosts the app's required
legal pages for store submission.

## Pages
- `index.html` — company landing (hero, products incl. Sayso, services, contact)
- `privacy.html` — **Sayso Privacy Policy** (required for App Store / Google Play)
- `support.html` — **Sayso Support / FAQ + contact** (required/recommended for stores)

## Stack
Pure static HTML + CSS + a tiny vanilla `main.js` (IntersectionObserver reveals,
nav). No build step, no dependencies, no CDN — just host the folder.

## Run locally
```bash
python3 -m http.server 8080   # → http://localhost:8080
```

## Deploy
Upload the folder to any static host (Netlify / Vercel / Cloudflare Pages /
GitHub Pages) and point **wecraft-solutions.com** at it. Paths are root-absolute.

## URLs to give the stores (once live)
- Privacy policy: `https://wecraft-solutions.com/privacy.html`
- Support URL:    `https://wecraft-solutions.com/support.html`
- Marketing URL:  `https://wecraft-solutions.com/`

## Notes
- Contact email is `hassinewassef@gmail.com` (works today). Swap to a branded
  address like `hello@wecraft-solutions.com` once the domain email is set up —
  it appears in `index.html`, `privacy.html`, `support.html`.
- When you add more products, give each its own privacy/support (e.g.
  `/sayso/privacy.html`) — for now Sayso is the only app so the pages sit at root.
- Supersedes the standalone `sayso-website` project for store legal URLs; keep
  that only if you still want a Sayso-specific marketing microsite.
- `assets/sayso-icon.png` copied from the Flutter project's `store/`.
