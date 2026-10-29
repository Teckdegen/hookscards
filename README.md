# Zedkr

Landing page for **Zedkr**. Zedkr turns Robinhood Chain assets into everyday money: off-ramp in 17+ countries, shop on Amazon and eBay, buy gift cards with crypto, book hotels, and earn tokenized stock rewards.

Built with Next.js (App Router), React, TypeScript and Tailwind CSS.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project layout

- `app/page.tsx`: the landing page
- `components/`: logo, phone mockups and app screens, card, swipe cards, logo strip
- `app/opengraph-image.tsx`: social share preview image
- `app/brand/banner`: X header banner layout (captured to `brand/x-banner.png`)
- `app/brand/logo`: logo PNG export, `/brand/logo?style=tile|lime|white|black`
- `brand/`: exported banner and logo images
- `public/`: hero photo and logo SVG

## Notes

- The X link in the footer is set by `X_HANDLE` and `X_URL` at the top of `app/page.tsx`.
- The site address used for share previews is `metadataBase` in `app/layout.tsx`.
