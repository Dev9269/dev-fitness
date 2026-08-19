const fs = require("fs");
const p = "assets/index-BhUOkQG7.js";
let j = fs.readFileSync(p, "utf8");
const before = j;
j = j.split("Gymfluencer").join("Dev Fitness").split("DEV9269 GYM").join("Dev Fitness");
fs.writeFileSync(p, j);
console.log("swapped, bytes", before.length, "->", j.length);
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="120" viewBox="0 0 400 120" fill="none">
  <rect width="400" height="120" fill="#0a0a0a" rx="12"/>
  <text x="200" y="66" font-family="Arial Black, Arial, sans-serif" font-size="44" font-weight="900" fill="#eb0000" text-anchor="middle" letter-spacing="2">DEV</text>
  <text x="200" y="102" font-family="Arial Black, Arial, sans-serif" font-size="24" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="8">FITNESS</text>
</svg>`;
fs.writeFileSync("assets/logo-B16hiehA.svg", svg);
console.log("logo rewritten, bytes", svg.length);