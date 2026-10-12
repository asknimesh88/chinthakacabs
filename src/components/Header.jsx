'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=94713240584&text&type=phone_number&app_absent=0';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-warm-50 transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-1.5">
          <span className="font-serif text-2xl font-bold text-primary">
            Chinthaka
          </span>
          <span className="text-sm font-light text-warm-800">Cab Service</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-warm-800 transition-colors hover:text-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Book a Ride
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <div className="flex w-5 flex-col gap-[5px]">
            <span
              className={`block h-[2px] w-full bg-warm-900 transition-transform duration-200 ${
                menuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-warm-900 transition-opacity duration-200 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-warm-900 transition-transform duration-200 ${
                menuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </div>
        </button>

        {/* Mobile slide-in */}
        <div
          className={`fixed inset-0 z-40 bg-warm-900/40 transition-opacity duration-200 lg:hidden ${
            menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`fixed right-0 top-0 z-40 flex h-full w-64 flex-col bg-warm-50 px-6 pt-20 shadow-xl transition-transform duration-300 lg:hidden ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-base font-medium text-warm-800 transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-accent px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                Book a Ride
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
