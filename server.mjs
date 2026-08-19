// DEV9269 GYM backend — owned, designed & coded by Jainam H. Maru (Dev9269) · © 2026
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;
const LEADS_FILE = path.join(__dirname, "leads.json");
const adminKey = process.env.ADMIN_KEY || "change-me";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".avif": "image/avif",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".json": "application/json",
  ".ico": "image/x-icon",
};

function readLeads() {
  try {
    return JSON.parse(fs.readFileSync(LEADS_FILE, "utf8"));
  } catch {
    return [];
  }
}

const server = http.createServer(async (req, res) => {
  if (req.method === "GET" && req.url.startsWith("/api/leads")) {
    const key = new URL(req.url, "http://localhost").searchParams.get("key");
    if (key !== adminKey) {
      res.writeHead(401, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ ok: false, error: "invalid admin key" }));
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(readLeads()));
  }

  if (req.method === "POST" && req.url.startsWith("/api/leads")) {
    let body = "";
    for await (const chunk of req) body += chunk;
    try {
      const lead = JSON.parse(body);
      if (!lead.name || !lead.phone || !lead.email) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ ok: false, error: "name, phone and email are required" }));
      }
      const record = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
        at: new Date().toISOString(),
        ip: req.socket.remoteAddress,
        ...lead,
      };
      const leads = readLeads();
      leads.push(record);
      fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ ok: true, id: record.id }));
    } catch {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ ok: false, error: "invalid JSON" }));
    }
    return;
  }

  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath === "/") urlPath = "/index.html";
  const webRoot = fs.existsSync(path.join(__dirname, "dist")) ? "dist" : ".";
  const filePath = path.join(__dirname, webRoot, urlPath);
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    return res.end("Forbidden");
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("404 - not found");
    }
    res.writeHead(200, { "Content-Type": MIME[path.extname(filePath)] || "application/octet-stream" });
    res.end(data);
  });
});

server.listen(PORT, () => console.log(`DEV9269 GYM running at http://localhost:${PORT}`));