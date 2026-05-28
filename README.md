# P2D Kitchen Cabinet Refinishing Landing Page

Standalone Next.js landing page for P2D kitchen cabinet refinishing lead generation.

## Setup

```bash
npm install
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env.local` and set:

```bash
RESEND_API_KEY=re_your_api_key_here
LEAD_RECIPIENT_EMAIL=leads@paint2decor.com
RESEND_FROM_EMAIL="P2D Refinishing <verified@yourdomain.com>"
```

Use a Resend-verified sender domain before production launch.

## Production Check

```bash
npm run build
```

The lead form posts to `/api/lead` and redirects to `/thank-you` after Resend accepts the email.
