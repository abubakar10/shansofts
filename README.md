# Shansofts — IT & Software Solutions Website

A modern, fully responsive, SEO-optimized marketing website for **Shansofts**, an IT
solutions company that provides custom software, web & mobile app development, cloud,
AI and more. Built with the **MERN stack** and **Tailwind CSS**.

## ✨ Features

- **Responsive on every screen** — mobile-first layout that scales from phones to large desktops.
- **SEO-ready** — per-page meta tags (via `react-helmet-async`), Open Graph & Twitter cards,
  JSON-LD structured data, `robots.txt`, `sitemap.xml`, semantic HTML and canonical URLs.
- **Beautiful visuals** — gradient hero, animated reveals (Framer Motion), custom Tailwind
  theme, glassmorphism cards and micro-interactions.
- **5 pages** — Home, Services, Portfolio (with category filter), About and Contact.
- **Working contact form** — posts to an Express API and stores enquiries in MongoDB.
- **Production-ready backend** — Express + Mongoose with validation, rate limiting and a
  health check, that gracefully runs even without a database connection.

## 🧱 Tech Stack

| Layer      | Technology                                             |
| ---------- | ------------------------------------------------------ |
| Frontend   | React 18, Vite, React Router, Tailwind CSS, Framer Motion, React Icons |
| SEO        | react-helmet-async, JSON-LD, sitemap, robots.txt       |
| Backend    | Node.js, Express, Mongoose                             |
| Database   | MongoDB (local or Atlas)                               |

## 📁 Project Structure

```
shansofts/
├── api/
│   └── index.js            # Vercel serverless entry (re-exports the Express app)
├── client/                 # React + Vite + Tailwind frontend
│   ├── public/             # favicon, robots.txt, sitemap.xml
│   └── src/
│       ├── components/     # Navbar, Footer, Hero, SEO, cards, etc.
│       ├── data/           # services, projects, site config
│       └── pages/          # Home, Services, Portfolio, About, Contact
├── server/                 # Express + MongoDB API
│   ├── models/             # Mongoose schemas
│   ├── routes/             # /api/contact
│   ├── db.js               # Cached MongoDB connection (serverless-safe)
│   ├── app.js              # Configured Express app (shared by local + Vercel)
│   └── index.js            # Local dev entry (app.listen)
├── vercel.json             # Single-project deploy config (frontend + API)
└── package.json            # Root scripts + backend deps for Vercel functions
```

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+**
- **MongoDB** running locally, or a MongoDB Atlas connection string
  (the API still runs without it — enquiries just won't be persisted).

### 1. Install dependencies

```bash
# from the project root
npm run install:all
```

> Or install each app individually: `npm install --prefix client` and `npm install --prefix server`.

### 2. Configure environment variables

```bash
# copy the example and edit as needed
cp server/.env.example server/.env
```

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/shansofts
CLIENT_ORIGIN=http://localhost:5173
```

### 2b. Enable contact-form emails (optional)

The contact form always saves enquiries to MongoDB. To also **receive an email**
whenever someone submits it, configure SMTP (any provider works).

**Hostinger** (using a mailbox created in hPanel → Emails):

```env
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=info@shansofts.com     # your Hostinger mailbox address
SMTP_PASS=your-mailbox-password  # that mailbox's password
MAIL_TO=info@shansofts.com       # where enquiries are delivered
MAIL_FROM=Shansofts Website <info@shansofts.com>
```

**Gmail** alternative: enable 2-Step Verification, create an
[App Password](https://myaccount.google.com/apppasswords), then use
`SMTP_HOST=smtp.gmail.com`, `SMTP_PORT=465`, your address, and the app password.

Add the same values to your **Vercel Environment Variables** for production.

On startup the server logs `✅ Email (SMTP) ready` when configured, or a warning if
not. If SMTP is left empty, the form still works — it just saves to the DB without
sending email.

### 3. Run in development

To run the frontend and backend together (requires the root dev dependency `concurrently`):

```bash
npm install          # installs concurrently at the root
npm run dev
```

Or run them in separate terminals:

```bash
npm run dev:client   # http://localhost:5173
npm run dev:server   # http://localhost:5000
```

The Vite dev server proxies `/api` requests to the backend automatically.

### 4. Build for production

```bash
npm run build        # builds the client into client/dist
```

## ▲ Deploy to Vercel (frontend + backend, one project)

This repo is configured so a **single Vercel project** serves both the React
frontend (as static files) and the Express API (as a serverless function). No
separate backend host is required.

**How it works** (`vercel.json`):

- The client is built to `client/dist` and served as static assets.
- `api/index.js` re-exports the Express app from `server/app.js`; every request to
  `/api/*` is routed to it. Backend dependencies live in the **root** `package.json`
  so Vercel bundles them into the function.
- All other routes fall back to `index.html` for client-side routing.
- MongoDB uses a **cached connection** (`server/db.js`) so serverless invocations
  reuse a single pooled connection instead of reconnecting each request.

**Steps:**

1. Push the repo to GitHub (already done for this project).
2. In Vercel, **Add New → Project** and import the repository. Keep the default
   root directory (`./`) — the settings come from `vercel.json`.
3. Add an **Environment Variable**:
   - `MONGODB_URI` → your **MongoDB Atlas** connection string (a local
     `mongodb://127.0.0.1` URI won't work from Vercel's servers).
   - *(optional)* `CLIENT_ORIGIN` → your production domain(s), comma-separated.
4. Click **Deploy**. Your site and API are live on the same domain, e.g.
   `https://your-app.vercel.app` and `https://your-app.vercel.app/api/health`.

> Or deploy from the CLI: `npm i -g vercel` then run `vercel` (preview) /
> `vercel --prod` from the project root.

You can also deploy the pieces separately if you prefer: serve `client/dist` on any
static host and run `server/` (via `npm start --prefix server`) on Render, Railway,
a VPS, etc. — just point the frontend at that API's origin.

## 🔌 API Reference

| Method | Endpoint        | Description                        |
| ------ | --------------- | ---------------------------------- |
| GET    | `/api/health`   | Health check + DB connection state |
| POST   | `/api/contact`  | Submit a contact enquiry           |
| GET    | `/api/contact`  | List recent enquiries (max 100)    |

**POST `/api/contact` body:**

```json
{
  "name": "Jane Doe",
  "email": "jane@company.com",
  "company": "Acme Inc.",
  "service": "Web Development",
  "message": "We'd love a quote for a new dashboard."
}
```

## 🎨 Customizing

- **Company details** (name, email, phone, social links): `client/src/data/site.js`
- **Services**: `client/src/data/services.js`
- **Portfolio projects**: `client/src/data/projects.js`
- **Colors / theme**: `client/tailwind.config.js`
- **SEO domain / defaults**: `client/index.html`, `client/src/data/site.js`, `client/public/sitemap.xml`

> Replace `https://www.shansofts.com` with your real domain in `index.html`,
> `sitemap.xml`, `robots.txt` and `site.js` before going live, and add an
> `og-image.png` (1200×630) to `client/public/`.

## 📄 License

Proprietary — © Shansofts. All rights reserved.
