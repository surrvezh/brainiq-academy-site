'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Programs', href: '#programs' },
  { label: 'Locations', href: '#locations' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
  { label: 'Franchise', href: '#franchise' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-white/10 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="BrainIQ Academy"
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="font-playfair text-lg font-bold text-text-primary hidden sm:block">
              brain<span className="text-gold">IQ</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-teal transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 bg-gold text-navy text-sm font-bold rounded-full hover:bg-yellow-300 hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Enroll Now
            </a>
          </div>

          <button
            type="button"
            className="md:hidden text-text-primary p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — slide in from right */}
      <div
        className={`md:hidden fixed inset-0 top-0 z-40 transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="absolute inset-0 bg-navy/98 backdrop-blur-xl" />
        <div className="relative h-full flex flex-col px-6 pt-6 pb-10">
          {/* Top row: logo + close */}
          <div className="flex items-center justify-between mb-10">
            <a href="#hero" onClick={() => setMenuOpen(false)}>
              <Image src="/logo-full.png" alt="BrainIQ Academy" width={160} height={90} className="h-12 w-auto object-contain" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-text-primary hover:bg-white/20 transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-2 flex-1">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-text-primary hover:bg-white/8 hover:text-teal transition-all duration-200 group"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal/40 group-hover:bg-teal transition-colors flex-shrink-0" />
                <span className="font-playfair text-xl">{link.label}</span>
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block text-center py-4 bg-gold text-navy text-lg font-bold rounded-full hover:bg-yellow-300 transition-colors shadow-xl mb-6"
          >
            Enroll Now
          </a>

          {/* Contact info at bottom */}
          <div className="border-t border-white/10 pt-5 flex flex-col gap-1.5">
            <a href="tel:+919629841966" className="text-muted text-sm text-center hover:text-teal transition-colors">+91 96298 41966</a>
            <a href="tel:+918220026412" className="text-muted text-sm text-center hover:text-teal transition-colors">+91 82200 26412</a>
            <a href="mailto:smartbrainabacus19@gmail.com" className="text-muted text-xs text-center hover:text-teal transition-colors mt-1">smartbrainabacus19@gmail.com</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
