"use client";

import ChunkyButton from "../ui/ChunkyButton";
import Link from "next/link";
import Ticker from "../ui/Ticker";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: "/who-are-we", label: "who are we" },
    { href: "/meet-the-team", label: "meet the team" },
    { href: "/events", label: "events" },
    { href: "/how-to-join", label: "how to join" },
    { href: "/sponsorships", label: "sponsorships" },
    { href: "/contact-us", label: "contact us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1 md:px-0">
        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center gap-2">
          <a href="/" className="flex items-center">
            <img
              className="h-20 w-auto object-contain"
              src="/Switch-logo-horizontal.png"
              alt="Switch Logo"
            />
          </a>
        </div>

        {/* Nav Bar Links (desktop) */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-md font-bold text-brand-purple-dark transition-colors hover:text-brand-purple"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Join the club - rubric link */}
        <div className="flex items-center gap-3">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://campus.hellorubric.com/?s=10199"
          >
            <ChunkyButton variant="primary" trailingSymbol="★">
              JOIN SWITCH
            </ChunkyButton>
          </Link>
          {/* hamburger menu — only shows below md */}
          <button
            className="md:hidden p-2 text-4xl text-brand-purple-dark"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <Ticker
        phrases={["SAFE SPACE FOR WOMEN IN TECH", "JOIN THE MOVEMENT"]}
        bgColor="bg-brand-purple-dark"
        textColor="text-white"
        starColors={["text-brand-pink", "text-brand-lime"]}
      />

      {/* mobile dropdown menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-4 p-4 bg-white border-t border-gray-200 text-md font-bold text-brand-purple-dark transition-colors ">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-brand-purple"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
