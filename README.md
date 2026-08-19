# DEV9269 GYM — Vadodara's Fitness Hub

Owned, designed and coded by **Jainam H. Maru (Dev9269)** · © 2026 · Vadodara, Gujarat.

## Run locally

```
npm start
```

Open http://localhost:3000

## What's inside

- `index.html` — entry point (title, meta, favicon, author)
- `assets/` — Vite-built React app (rebranded to DEV9269 GYM, Vadodara)
- `server.mjs` — Node backend: serves the site + `POST /api/leads` saves the contact form to `leads.json`
- `swap.js` + `pairs1.js` — rebranding script (see `node swap.js assets/index-BhUOkQG7.js pairs1.js`)

## API

| Method | Route        | What it does                                   |
| ------ | ------------ | ---------------------------------------------- |
| POST   | /api/leads   | Save a lead `{name, phone, email, service, branch}` → `leads.json` |
| GET    | /api/leads?key=ADMIN_KEY | Read all saved leads (set `ADMIN_KEY` env var, default `change-me`) |
| GET    | /            | Serves the website                             |

`leads.json` is created on the first submission and is gitignored.