# Tech Bite BD

Landing page for Tech Bite BD, an IT & Digital Creative Agency. Built with Next.js (App Router), Tailwind CSS v4 and Lucide React.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
npm run lint
```

## Where to edit

| What | File |
| --- | --- |
| Contact details & social links | `src/lib/site.ts` → `site`, `socialLinks` |
| Logo / favicon | `public/brand/*` (trimmed from `public/logo.png`, `public/icon.png`), `src/app/icon.png`, `src/app/apple-icon.png` |
| Services, tech stack, portfolio items | `src/lib/site.ts` |
| Brand colours / font | `src/app/globals.css` (`@theme`) and `src/app/layout.tsx` |
| Page sections | `src/components/*` |
| Lead form handling | `src/app/actions.ts` |

## Before launch

- Replace the sample portfolio entries with real client work.
- Connect lead delivery in `src/app/actions.ts` (email, Google Sheet, CRM). Right now submissions are validated and only logged on the server.
