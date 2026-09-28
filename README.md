# Tech Bite BD

Landing page for Tech Bite BD, an IT & Creative Agency. Built with Next.js (App Router), Tailwind CSS v4 and Lucide React.

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
| Services, ready products, tech stack, live showcase projects | `src/lib/site.ts` (add `image` to a service to replace its CSS mockup with a real screenshot) |
| Brand colours / font | `src/app/globals.css` (`@theme`) and `src/app/layout.tsx` |
| Page sections | `src/components/*` |
| Lead form: validation / email / action | `src/lib/lead.ts`, `src/lib/email.ts`, `src/app/actions.ts` |

## Lead emails (Resend)

Contact-form submissions are emailed to the inbox via [Resend](https://resend.com). Replying to the email replies to the lead.

1. Sign up at resend.com **with quyum52526@gmail.com** (without a verified domain, Resend only delivers to the account's own email).
2. Create an API key at resend.com/api-keys.
3. Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`. In production, add the same variable in your host's dashboard and redeploy.
4. Submit the form once and check the inbox (and spam folder the first time).

Without `RESEND_API_KEY`, `npm run dev` logs leads to the terminal; a production build shows the visitor an error with the WhatsApp number instead of silently losing the lead.

## Before launch

- Set `RESEND_API_KEY` in production and send a test inquiry.
