# Dev Fitness — Vadodara's Fitness Hub

[![Live Site](https://img.shields.io/badge/LIVE-dev9269.github.io-red)](https://dev9269.github.io/)

A modern gym & fitness platform website for **Dev Fitness** — with branches across **Vadodara and Ahmedabad, Gujarat**. Built by **Jainam H. Maru (Dev9269)** · © 2026.

The site includes a fully working **lead capture system**: visitors who want to join a gym fill in a form, and the submission is stored by a Node.js backend.

---

## Live Site

🔗 **https://dev9269.github.io/**

> Note: GitHub Pages hosts the static frontend. The lead form's backend (`/api/leads`) runs locally (or on any Node host like Render) — see [Deployment](#deployment).

---

## Features

- 🏋️ **Hero section** — animated stats counters (workouts logged, gym partners, members)
- 🎬 **Video section** — YouTube workout video with click-to-play embed
- 💪 **Services** — workout plans, diet plans, personal training, progress tracking
- 📋 **Plan selector** — interactive Diet / Workout / Both plan chooser
- 🎯 **Transformations** — before/after results gallery
- ⭐ **Testimonials** — member reviews
- 📍 **Gym Finder** — 8 Dev Fitness branches (4 Vadodara + 4 Ahmedabad), each with a live embedded Google Map; click a branch to switch the map
- 📝 **Lead form** — Name / Phone / Email / Service / Branch → saved to backend
- 🎨 **Branding** — custom DEV FITNESS logo (SVG), Orbitron + Space Grotesk fonts, red/black theme
- 📱 **Responsive** — mobile-first layout with hamburger menu

---

## Tech Stack

| Layer      | Technology                                        |
| ---------- | ------------------------------------------------- |
| Frontend   | React (Vite build), Framer Motion, Font Awesome, Google Fonts |
| Backend    | Node.js (built-in `http` module — no frameworks)  |
| Storage    | `leads.json` (file-based JSON)                    |
| Hosting    | GitHub Pages (static) + local Node server (backend) |

---

## Project Structure

```
gym tracker/
├── index.html          # Entry point (title, meta, favicon, fonts)
├── assets/             # Compiled React bundle, CSS, images, logo
├── public/assets/      # Images + DEV FITNESS logo SVG   (moved into assets/)
├── src/                # React source (from-scratch components)
│   ├── main.jsx        # React entry
│   ├── App.jsx         # Page composition
│   ├── index.css       # Design system (colors, fonts, buttons)
│   └── components/     # Navbar, Hero, VideoSection, Services, Plans,
│                       # Benefits, Transformations, Testimonials,
│                       # GymFinder, LeadForm, Footer
├── server.mjs          # Node backend: static serving + /api/leads
├── swap.js + pairs*.js # Rebranding scripts (GymFluencer → Dev Fitness)
├── leads.json          # Lead submissions (auto-created, gitignored)
└── package.json        # Scripts & dependencies
```

---

## Getting Started

### Prerequisites

- Node.js 18+

### Install & run

```bash
npm install        # install dependencies
npm start          # start the backend server
```

Open **http://localhost:3000**

### Dev mode (React source)

```bash
npm run dev        # Vite dev server with hot reload
npm run build      # production build into dist/
```

---

## Backend API

| Method | Route                   | Description                                                      |
| ------ | ----------------------- | ---------------------------------------------------------------- |
| POST   | `/api/leads`            | Save a lead. Body: `{name, phone, email, service, branch}` → appends to `leads.json` with id, timestamp, IP |
| GET    | `/api/leads?key=KEY`    | View all saved leads (requires the admin key)                    |
| GET    | `/`                     | Serves the website (from `dist/` if present, else project root)  |

### Environment variables

| Variable    | Default       | Purpose                                |
| ----------- | ------------- | -------------------------------------- |
| `PORT`      | `3000`        | Server port                            |
| `ADMIN_KEY` | `change-me`   | Key required to read saved leads       |

**Example — view your leads:**

```bash
curl "http://localhost:3000/api/leads?key=change-me"
```

---

## Lead Flow (how it works)

```
Visitor fills the form (name, phone, email, service, branch)
        │
        ▼
fetch POST /api/leads          ← React LeadForm component
        │
        ▼
Server validates (name/phone/email required → 400 if missing)
        │
        ▼
Appends to leads.json (with id, timestamp, IP)  → 200 {"ok": true}
        │
        ▼
Browser shows "Thanks! We will reach out to you soon."
```

---

## Deployment

### GitHub Pages (frontend only)

The site is deployed at **https://dev9269.github.io/** from the `Dev9269.github.io` repository (user site root).

> The bundle uses absolute `/assets/...` paths, so it must live at the domain root — that's why it's a user site, not a project subpath.

### Full stack (frontend + backend) — Render

For the lead form to work online, deploy the `dev-fitness` repo to a Node host:

1. Create a free account at https://render.com
2. **New → Web Service → Connect** the `Dev9269/dev-fitness` repo
3. Build command: `npm install` · Start command: `npm start`
4. Add env var `ADMIN_KEY=<your-secret-key>`
5. Deploy — the site + `/api/leads` are now live

---

## Rebranding Scripts

The site was converted from a generic gym template into Dev Fitness using swap scripts:

```bash
node swap.js assets/index-BhUOkQG7.js pairs1.js   # brand swaps
node swap.js assets/index-BhUOkQG7.js pairs2.js   # YouTube video swap
node swap.js assets/index-BhUOkQG7.js pairs3.js   # email swap
```

`swap.js` replaces exact strings in the compiled bundle and verifies every replacement with an `OK n×` / `MISS` report.

---

## Author

**Jainam H. Maru (Dev9269)** — Security researcher, OS dev & full-stack engineer.

- Email: marujainam021@gmail.com
- GitHub: [@Dev9269](https://github.com/Dev9269)
- Portfolio: https://dev9269.github.io/portfolio/

---

## License

© 2026 Dev Fitness. All rights reserved. Owned, designed and coded by Jainam H. Maru (Dev9269).