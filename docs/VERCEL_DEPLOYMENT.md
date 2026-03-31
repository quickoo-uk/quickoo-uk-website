# Vercel Deployment - Pending Actions Only

The required code/config updates are already done in the repo:

- `api/index.ts` added for Vercel serverless Express entry
- `vercel.json` added with API + SPA rewrites
- SMTP booking notification route already integrated (`/api/booking/notify-admin`)

---

## Remaining steps (you need to do in Vercel dashboard)

Add these environment variables in **Project Settings -> Environment Variables**:

- `SMTP_HOST`
- `SMTP_PORT` (`587` or `465`)
- `SMTP_SECURE` (`false` for `587`, `true` for `465`)
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `BOOKING_ADMIN_EMAIL` = `inquiry@quickoo.co.uk`
- `VITE_GOOGLE_MAPS_API_KEY`

---

## Final deploy

1. Push latest code to your connected branch.
2. Trigger Vercel deploy.
3. Verify:
   - `/booking/checkout` loads after refresh
   - Confirm Booking calls `POST /api/booking/notify-admin` successfully
   - email is received at `inquiry@quickoo.co.uk`

