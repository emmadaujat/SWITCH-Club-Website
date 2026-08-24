"use client";

import ChunkyButton from "../ui/ChunkyButton";
import Link from "next/link";
import Ticker from "../ui/Ticker";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* Nav Bar Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="/who-are-we"
            className="text-md font-bold text-brand-purple-dark transition-colors hover:text-brand-purple"
          >
            who are we
          </a>
          <a
            href="/meet-the-team"
            className="text-md font-bold text-brand-purple-dark transition-colors hover:text-brand-purple"
          >
            meet the team
          </a>
          <a
            href="/events"
            className="text-md font-bold text-brand-purple-dark transition-colors hover:text-brand-purple"
          >
            events
          </a>
          <a
            href="/how-to-join"
            className="text-md font-bold text-brand-purple-dark transition-colors hover:text-brand-purple"
          >
            how to join
          </a>
          <a
            href="/sponsorships"
            className="text-md font-bold text-brand-purple-dark transition-colors hover:text-brand-purple"
          >
            sponsorships
          </a>
          <a
            href="/contact-us"
            className="text-md font-bold text-brand-purple-dark transition-colors hover:text-brand-purple"
          >
            contact us
          </a>
        </nav>

        {/* mobile hamburger button - only shows below md */}
        <button
          className="md:hidden p-2 text-4xl text-brand-purple-dark"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Social Icons as links (discord, instagram, email, rubric) */}
        <div className="hidden items-center md:flex">
          <div className=" justify-end flex">
            <Link
              href="https://campus.hellorubric.com/?s=10199"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="uppercase bg-brand-purple hover:bg-white hover:text-brand-purple text-white font-bold rounded-lg text-sm border-2 border-black p-2 shadow-[4px_4px_0px_#000] transition">
                JOIN SWITCH <span> ★</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Ticker
        phrases={["SAFE SPACE FOR WOMEN IN TECH", "JOIN THE MOVEMENT"]}
        bgColor="bg-brand-purple-dark"
        textColor="text-white"
      />
      {/* mobile dropdown menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col gap-4 p-4 bg-white border-t border-gray-200 text-md font-bold text-brand-purple-dark transition-colors ">
          <a
            className="hover:text-brand-purple"
            href="/who-are-we"
            onClick={() => setMenuOpen(false)}
          >
            who are we
          </a>
          <a
            className="hover:text-brand-purple"
            href="/meet-the-team"
            onClick={() => setMenuOpen(false)}
          >
            meet the team
          </a>
          <a className="hover:text-brand-purple" href="/events" onClick={() => setMenuOpen(false)}>
            events
          </a>
          <a
            className="hover:text-brand-purple"
            href="/how-to-join"
            onClick={() => setMenuOpen(false)}
          >
            how to join
          </a>
          <a
            className="hover:text-brand-purple"
            href="/sponsorships"
            onClick={() => setMenuOpen(false)}
          >
            sponsorships
          </a>
          <a
            className="hover:text-brand-purple"
            href="/contact-us"
            onClick={() => setMenuOpen(false)}
          >
            contact us
          </a>
        </nav>
      )}
    </header>
  );
}
