const fs = require("fs");
const path = require("path");
const args = process.argv.slice(2);
if (args.length !== 2) { console.error("usage: node swap.js <target-file> <pairs-file>"); process.exit(1); }
const target = path.resolve(args[0]);
const pairs = require(path.resolve(args[1]));
let t = fs.readFileSync(target, "utf8");
const orig = t;
for (const [from, to] of pairs) {
  const n = t.split(from).length - 1;
  if (n === 0) { console.error("MISS:", JSON.stringify(from)); process.exit(2); }
  console.log("OK  " + n + "x  " + JSON.stringify(from) + " -> " + JSON.stringify(to.slice(0, 60)));
  t = t.split(from).join(to);
}
fs.writeFileSync(target, t);
console.log("bytes:", orig.length, "->", t.length);