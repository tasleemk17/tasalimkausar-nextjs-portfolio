# Tasalimkausar's portfolio

Next.js, Tailwind, Motion and Lenis. The existing live portfolio has not been changed.

## Run on your computer

1. Install a current Node.js LTS release.
2. Open this folder in VS Code.
3. In its terminal, run `npm install`, then `npm run dev`.
4. Open the localhost address printed in the terminal.

`npm run build` checks the production build. `npm start` runs that build locally.

## Content and admin

`/admin` is the owner-only editor for projects, skills and certificate PDFs. Without a Supabase connection it stays locked and shows an honest setup message. Public pages use the bundled content in `app/data.js` if the database cannot be reached, so an inactive free backend does not erase the original portfolio.

The Supabase account is separate from the portfolio owner login. Account credentials never belong in source code. This prepared copy includes `.env.local` with only the project URL and browser-safe publishable key, so local admin access is already connected. The `.env.example` file names those two settings for future builds. Never put a service-role key, database password or account password in a NEXT_PUBLIC variable or in this zip.

The database schema is in `supabase/schema.sql`. Owner access is an explicit allowlist in `portfolio_admins`; signing up alone does not grant editing access. Public signups are disabled in the prepared project. The owner login is already created and allowlisted; no SQL setup is needed for this copy. Policies allow visitors to read the portfolio and only the allowlisted owner to save or upload.

Sign into `/admin`, choose Projects, Skills or Certificates, edit, then Save changes. Project cards support main-image and gallery-image uploads, captions and links. Use the separate portfolio-owner password saved during setup, not the Supabase dashboard password. Upload only images/PDFs intended for your portfolio, with private details hidden first. Uploaded media is accessible to anyone with its link. Removing a card does not delete its stored file, to avoid breaking links. Keep local backups of uploads and source.

Supabase Free can pause inactive projects. Resume from the Supabase project dashboard when needed. The bundled fallback remains available, but database-only edits will not be visible while that database is unavailable.

## Current restrictions

Contact uses the confirmed WhatsApp destination. The button opens WhatsApp with a starter message; visitors review and press Send there. The website does not silently send or store enquiries. No test message was sent. Munaf testimonial uses the wording, portrait and client contact permission confirmed by the owner on 24 November 2026. Contact Client opens WhatsApp for visitor review, with no automatic send. Pricing amounts are confirmed, but package bullets are example scope and delivery times are not promised. Do not deploy or change the existing site until the owner approves it.

## Verified on 24 November 2026

Production build, owner sign-in form, owner-only access, save and reload, project-image upload, certificate-PDF upload, sign-out and 390px layout passed. Anonymous reads work; anonymous content writes, owner-list access and uploads are denied. Existing portfolio content and its four-image Live Project gallery are preserved. Supabase project: https://supabase.com/dashboard/project/dbqcsmrvkjuchmdaljzg . No portfolio deployment was performed.
