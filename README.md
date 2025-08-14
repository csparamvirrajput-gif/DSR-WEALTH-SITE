
# DSR Wealth Advisory – Website

A production-ready Next.js (App Router) site with Tailwind CSS, charts, a SIP calculator, and compliance-friendly copy.

## Quickstart
```bash
npm install
npm run dev
```
Visit http://localhost:3000

## Customize
- Replace contact details in `components/Contact.tsx`
- Insert your AMFI ARN in `components/Disclosures.tsx`
- Swap the logo: `public/logo.svg` (or drop your final SVG with same name)
- SEO: Edit `app/layout.tsx` metadata
- Colors: change brand variables in `tailwind.config.ts` and `app/globals.css`

## Deploy
- Easiest: Push to GitHub and import into Vercel. Or run `npm run build` and `npm start` on your server.
- Set `metadataBase` in `app/layout.tsx` to your real domain.

## Notes
- Charts & calculator are educational. Past performance doesn't guarantee future results.
- If you later add a blog/insights, create `app/insights/page.tsx` and add content.
