import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#benefits", label: "Benefits" },
  { href: "#blogs", label: "Blogs" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-white/5">
      <nav className="container flex items-center justify-between h-16">
        <a href="#home" className="flex items-center space-x-2 h-9 w-36">
          <img src="/assets/logo-B16hiehA.svg" alt="Dev Fitness Logo" className="h-full" />
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-white hover:text-[#eb0000] transition-colors text-sm">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-red hidden md:inline-flex">
          Join us now
        </a>
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "\u2715" : "\u2630"}
        </button>
      </nav>
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black px-6 py-4 space-y-3"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-gray-200 text-sm" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn-red text-sm" onClick={() => setOpen(false)}>
              Join us now
            </a>
          </li>
        </motion.ul>
      )}
    </header>
  );
}