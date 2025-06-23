'use client';
import React, { useEffect, useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [navTop, setNavTop] = useState(65);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // If scrolled down from the top, stick to 0
      if (currentScrollY > 40) {
        setNavTop(0);
      } else {
        setNavTop(65);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="flex justify-center items-center fixed w-full z-20 transition-all"
      style={{ top: navTop, transition: 'top 0.9s cubic-bezier(0.4, 0, 0.2, 1)' }}
    >
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link href="/" className="nav-item">Home</Link>
        <Link href="/projects" className="nav-item">Projects</Link>
        <Link href="/blog" className="nav-item">Blog</Link>
        <Link href="/about" className="nav-item">About</Link>
        <Link href="/contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</Link>
      </nav>
    </div>
  );
};
