
# Design premium finance dashboard

This project has been migrated to `Next.js App Router` and keeps the premium UI kit from the original Figma:

- User site: `/`
- Admin dashboard: `/dashboard`
- SEO blog hub (SSG): `/blog`

## Stack

- `Next.js` with mixed rendering (SSG for content pages, SSR/dynamic for dashboard modules)
- `Cloudinary` for image hosting and signed uploads
- `Neon PostgreSQL` + `Prisma` for database layer
- `Tailwind CSS v4`

## Setup

1. Install dependencies:
   - `npm install`
2. Copy environment:
   - `cp .env.example .env`
3. Set your credentials in `.env` (`DATABASE_URL`, Cloudinary, `AUTH_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`).
4. Generate Prisma client:
   - `npm run prisma:generate`
5. Run development:
   - `npm run dev`

## Auth and Admin

- Login page: `/login`
- Admin CMS area: `/admin`
- Finance dashboard area: `/dashboard`
- Protected routes require valid admin credentials from `.env`.
- User sign in: `/auth/signin`
- User sign up: `/auth/signup`
- User account page: `/account`

## SEO Plan

Detailed rollout plan for article publishing is available at:

- `docs/seo-content-plan.md`
  