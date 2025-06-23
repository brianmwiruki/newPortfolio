import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-white/10 py-8 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        <div className="text-white/60 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Brian Mwiruki. All rights reserved.
        </div>
        <nav className="flex gap-4 flex-wrap justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/70 hover:text-emerald-300 transition text-sm font-semibold px-2 py-1 rounded"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex gap-3 justify-center">
          <a
            href="mailto:mwiruki@outlook.com"
            className="text-emerald-300 hover:text-white transition text-xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/brianmwiruki/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-300 hover:text-white transition text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};
