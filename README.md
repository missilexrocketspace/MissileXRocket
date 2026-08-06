# MissileX Rocket Space

## Production Readiness

### Required environment variables

Create a production environment file or set these in your host provider:

- `DATABASE_URL` - PostgreSQL connection string for Prisma
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `ADMIN_GMAIL`
- `ADMIN_GMAIL_PASSWORD`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
- `RESEND_API_KEY`

### Local development

Copy `.env.local.example` to `.env.local` and fill in your values.

### Git safety

The repository ignores:

- `.env`
- `.env.local`
- `.env.production`
- `.env*.local`

Do not commit secrets.

### Deployment notes

- Use a managed platform like Vercel, Netlify, or Fly.io.
- Configure runtime env vars in the provider's dashboard, not in source control.
- Ensure `NEXT_PUBLIC_*` variables are only values safe for browser exposure.
- For server-side secrets like `ADMIN_GMAIL_PASSWORD`, use provider secret storage.

### Recommended improvements for production

- Replace Gmail SMTP with a transactional email provider such as Resend (preferred) or SendGrid.
- Add strong request validation in all API routes.
- Add rate limiting to public form endpoints.
- Use a dedicated database and secure `DATABASE_URL`.
- Enable HTTPS and set trusted domains in Firebase Auth.

