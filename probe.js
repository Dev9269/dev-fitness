const fs = require("fs");
const j = fs.readFileSync("assets/index-BhUOkQG7.js", "utf8");
const m = [...j.matchAll(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g)].map(x => x[0]);
console.log("emails:", [...new Set(m)].join(" | "));
for (const pat of ["mailto", "Contact Us", "contact us", "Phone"]) {
  const i = j.indexOf(pat);
  console.log("---", pat, i >= 0 ? j.slice(Math.max(0, i - 150), i + 250) : "not found");
}