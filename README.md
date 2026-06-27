# Aklima — Personal Portfolio

A premium, production-ready developer portfolio built with Next.js 15, Tailwind CSS, and Motion.

## Tech stack

- **Framework** — Next.js 15 (App Router)
- **Styling** — Tailwind CSS with custom violet design system
- **Animations** — Motion (Framer Motion)
- **Email** — Nodemailer via Next.js API Route
- **Deployment** — Vercel

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Fill in your EMAIL_USER, EMAIL_PASS, EMAIL_TO values

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

All content lives in `constants/` — no need to touch any component:

| File | What to edit |
|------|-------------|
| `config/site.js` | Name, email, social links, URL |
| `constants/projects.js` | Add or update projects |
| `constants/skills.js` | Add or remove skills |
| `constants/services.js` | Edit service descriptions |
| `constants/education.js` | Update education entries |

## Deployment

```bash
# Deploy to Vercel
npx vercel

# Or push to GitHub and connect to Vercel dashboard
```

Add environment variables in your Vercel project settings.

## Performance targets

- Lighthouse score: 95+
- First Contentful Paint: < 1.5s
- Cumulative Layout Shift: < 0.1
