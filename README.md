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
├── client/                 # React + Vite + Tailwind frontend
│   ├── public/             # favicon, robots.txt, sitemap.xml
│   └── src/
│       ├── components/     # Navbar, Footer, Hero, SEO, cards, etc.
│       ├── data/           # services, projects, site config
│       └── pages/          # Home, Services, Portfolio, About, Contact
├── server/                 # Express + MongoDB API
│   ├── models/             # Mongoose schemas
│   ├── routes/             # /api/contact
│   └── index.js            # App entry
└── package.json            # Root scripts (run both apps together)
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

Serve `client/dist` with any static host (Netlify, Vercel, Nginx…) and deploy the
`server/` API separately (Render, Railway, a VPS, etc.).

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
