const fs = require("fs");
const p = "assets/index-BhUOkQG7.js";
let j = fs.readFileSync(p, "utf8");

const start = j.indexOf('xx=[{id:"1"');
if (start < 0) throw new Error("array start not found");
const end = j.indexOf('2sus"}]', start) + '2sus"}]'.length;
if (end < start) throw new Error("array end not found");

const gyms = [
  ['Dev Fitness', 'aO', '+91 98240 10001', 'Alkapuri, Vadodara, Gujarat 390007', 'Alkapuri+Vadodara'],
  ['Dev Fitness', 'sO', '+91 98240 10002', 'Race Course Road, Vadodara, Gujarat 390007', 'Race+Course+Vadodara'],
  ['Dev Fitness', 'lO', '+91 98240 10003', 'Manjalpur, Vadodara, Gujarat 390011', 'Manjalpur+Vadodara'],
  ['Dev Fitness', 'uO', '+91 98240 10004', 'Sayajigunj, Vadodara, Gujarat 390005', 'Sayajigunj+Vadodara'],
  ['Dev Fitness', 'cO', '+91 98250 20001', 'CG Road, Ahmedabad, Gujarat 380009', 'CG+Road+Ahmedabad'],
  ['Dev Fitness', 'fO', '+91 98250 20002', 'Vastrapur, Ahmedabad, Gujarat 380015', 'Vastrapur+Ahmedabad'],
  ['Dev Fitness', 'dO', '+91 98250 20003', 'SG Highway, Ahmedabad, Gujarat 380054', 'SG+Highway+Ahmedabad'],
  ['Dev Fitness', 'aO', '+91 98250 20004', 'Maninagar, Ahmedabad, Gujarat 380008', 'Maninagar+Ahmedabad'],
];

const arr = gyms.map((g, i) =>
  `{id:"${i + 1}",name:"${g[0]}",image:${g[1]},phone:"${g[2]}",address:"${g[3]}",mapUrl:"https://maps.google.com/maps?q=${g[4]}&z=15&output=embed"}`
).join(",");

j = j.slice(0, start) + "xx=[" + arr + "]" + j.slice(end);
fs.writeFileSync(p, j);
console.log("replaced", start, "->", end, "bytes", fs.readFileSync(p).length);