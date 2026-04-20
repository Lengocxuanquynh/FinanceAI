
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
   - `cp .env.example .env.local`
3. Set your Neon and Cloudinary credentials in `.env.local`.
4. Generate Prisma client:
   - `npm run prisma:generate`
5. Run development:
   - `npm run dev`

## SEO Plan

Detailed rollout plan for article publishing is available at:

- `docs/seo-content-plan.md`
  