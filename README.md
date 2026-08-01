# Pragma Development — Agency Website

React + Vite + Tailwind CSS, scaffolded to match `MY-AGENCY-WEB/` structure.

## Setup

```bash
npm install
npm run dev
```

## Brand

Colors were extracted directly from the uploaded logo:

- **Primary blue** `#0B5FD9` (logo mark: `#0156C2`)
- **Accent red** `#D82614` (used sparingly — CTAs, highlights)
- **Navy backgrounds** `#0B1120` / `#080D1A` / `#121A2E`
- **Light section bg** `#F6F8FC`

Fonts: **Space Grotesk** (display/headings), **Inter** (body), **IBM Plex Mono** (labels/eyebrows/prices).

Two logo files are in `public/images/`:
- `logo-color.png` — full-color mark, transparent background, for light sections
- `logo-white.png` — white silhouette, transparent background, for the dark navy header/footer

## To do before launch

- Replace `WHATSAPP_NUMBER` in `src/components/WhatsAppChat.jsx` with your real number
- Swap the placeholder gradients in `public/images/project-mockup*.png` for real project screenshots
- Wire `src/pages/Contact.jsx` to a real form backend (e.g. Formspree, Resend, or your own API route)
- Update `hello@pragmadevelopment.com` in `src/components/Footer.jsx`
