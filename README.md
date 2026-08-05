# MissileX Rocket Space

A premium, government-portal-styled Next.js site for a fictional Indian defence & space research
organization. Built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Firebase
Auth, and Nodemailer.

> All missile/rocket/mission content is educational and public-domain in nature (history, publicly
> known specifications, timelines). The `/concept` page and `/technology` page are explicitly
> labeled as conceptual research and contain no weapon-construction, targeting, or operational
> detail.

## Getting started

```bash
npm install
cp .env.local.example .env.local   # fill in the values below
npm run dev
```

The app runs on `http://localhost:3000` (or the next free port).

## Environment variables

See `.env.local.example`. Two independent things need configuring:

**Firebase** (email/Google auth, used by the login/register/dashboard flow) — create a project at
[console.firebase.google.com](https://console.firebase.google.com), enable Email/Password and
Google sign-in under Authentication, then copy the web app config into
`NEXT_PUBLIC_FIREBASE_*`. Without these set, the app still builds and runs, but sign-in is
disabled and every visitor is treated as logged out (the login gate will keep redirecting to
`/login`, which is a Firebase-config problem, not a bug).

**Gmail SMTP** (contact form, research submissions, program/career applications) — set
`ADMIN_GMAIL` to the receiving Gmail address and `ADMIN_GMAIL_PASSWORD` to a
[Google App Password](https://myaccount.google.com/apppasswords) (not your normal password;
requires 2-Step Verification enabled on the account).

## Access model

Every route requires a signed-in session **except** `/`, `/login`, `/register`,
`/forgot-password`, `/privacy`, and `/terms` — enforced client-side in
`components/auth/AuthGate.tsx`, which wraps the whole app in `RootProvider.tsx`. Role
(`Admin` / `Researcher` / `Student` / `Guest`) is currently derived heuristically from the
signed-in email address in `components/auth/AuthContext.tsx` (`deriveRole`) — for production use,
replace this with a Firestore-backed user-role lookup or Firebase custom claims.

## What's implemented

- Full public information architecture: About, Activities, Research, Technology (Conceptual AI
  Research), Programs, Missiles (listing + per-missile detail pages), Rocket Systems (listing +
  per-rocket detail pages), Space Systems (ISRO mission timeline), Innovation, Concept
  (MissileX Integrated Defence Platform), Gallery, News, Careers, Contact, APJ Abdul Kalam,
  ISRO Leadership, Privacy, Terms.
- Firebase email/password + Google auth, registration, forgot-password, email verification.
- Site-wide login gate (see above) plus a role-aware dashboard shell.
- Three email-notification API routes (Gmail via Nodemailer): `/api/contact`,
  `/api/research-submit` (with file attachments, PDFs/images/video/zip up to 20MB), and
  `/api/programs-apply` / `/api/careers-apply`.
- Bilingual (English/Hindi) navigation chrome, text-size and high-contrast toggles.

## What's intentionally left for a follow-up phase

This is a large spec (admin CRUD over Firestore, gallery/news CMS, PWA manifest, sitemap/robots,
CSV export, rate limiting) that wasn't fully built out in this pass — the dashboard is currently a
static shell rather than a live Firestore-backed admin panel. Treat this repo as a strong,
working foundation rather than a finished 1:1 implementation of every bullet in the original spec.

## Deployment

Vercel-ready as-is (`next build` passes cleanly, all static routes prerender, dynamic
`[slug]` routes use `generateStaticParams`). Set the environment variables above in the Vercel
project settings before deploying.
# MissileXRocket
