'use client';

import Image from 'next/image';
import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const WA_BASE = 'https://wa.me/919629841966?text=';
const ENROLL_URL = WA_BASE + encodeURIComponent('Hi! I would like to enroll my child in BrainIQ Academy. Please share details.');
const FRANCHISE_URL = WA_BASE + encodeURIComponent('Hi! I am interested in a BrainIQ Academy franchise. Please share details.');

const WHY_ABACUS = [
  { emoji: '⚡', label: 'Mental Arithmetic Speed' },
  { emoji: '🧠', label: 'Memory Enhancement' },
  { emoji: '🎯', label: 'Concentration & Focus' },
  { emoji: '⭐', label: 'Confidence Building' },
  { emoji: '📈', label: 'Better Academic Performance' },
];

const COUNTRIES = [
  { flag: '🇮🇳', name: 'India' },
  { flag: '🇺🇸', name: 'USA' },
  { flag: '🇦🇪', name: 'Dubai' },
  { flag: '🇬🇧', name: 'UK' },
  { flag: '🇩🇪', name: 'Germany' },
  { flag: '🇳🇱', name: 'Netherlands' },
];

const CENTERS = ['Sulur', 'Airforce Station Sulur', 'Kangayampalayam', 'Edappady', 'Lakshmi Nagar'];

const TESTIMONIALS = [
  {
    quote: "My daughter can now do mental calculations faster than me — within 8 months of joining!",
    name: "Priya Ramesh",
    location: "Sulur, Coimbatore",
  },
  {
    quote: "Even after moving to Dubai, BrainIQ's program kept our son on track. He won a state-level competition.",
    name: "Karthik Subramaniam",
    location: "Dubai, UAE",
  },
  {
    quote: "The structure is what sets them apart. You can see your child's confidence grow with every level.",
    name: "Meena Vijayakumar",
    location: "Kangayampalayam",
  },
];

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M11.99 0C5.366 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.83L.057 23.714a.75.75 0 0 0 .917.918l5.947-1.458A11.945 11.945 0 0 0 11.99 24C18.614 24 24 18.627 24 12S18.614 0 11.99 0zm0 21.818a9.818 9.818 0 0 1-5.017-1.376l-.36-.214-3.726.913.944-3.631-.235-.374A9.79 9.79 0 0 1 2.182 12c0-5.414 4.4-9.818 9.808-9.818 5.407 0 9.828 4.404 9.828 9.818 0 5.415-4.421 9.818-9.828 9.818z"/>
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-gold fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Divider({ flip = false }: Readonly<{ flip?: boolean }>) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`} style={{ height: 28 }}>
      <svg viewBox="0 0 1200 28" preserveAspectRatio="none" className="w-full h-full">
        <path d="M0,0 C300,28 900,28 1200,0 L1200,28 L0,28 Z" className="fill-card" />
      </svg>
    </div>
  );
}

export default function MobilePage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Enroll My Child');

  function handleContact(e: React.FormEvent) {
    e.preventDefault();
    const text = `*BrainIQ Academy Enquiry*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Interest:* ${interest}`;
    window.open(WA_BASE + encodeURIComponent(text), '_blank', 'noopener,noreferrer');
  }

  const inputClass = 'w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-text-primary text-sm focus:outline-none focus:border-teal transition-colors placeholder-muted/50';

  return (
    <main className="min-h-screen bg-navy text-text-primary font-inter">

      {/* Sticky mini nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-white/8 flex items-center justify-between px-4 h-12">
        <a href="#hero">
          <Image src="/logo.png" alt="BrainIQ" width={32} height={32} className="w-8 h-8 object-contain" />
        </a>
        <div className="flex items-center gap-4">
          <a href="#about" className="text-muted text-sm hover:text-teal transition-colors">About</a>
          <a href="#contact" className="text-sm px-3 py-1 bg-gold text-navy font-bold rounded-full">Contact</a>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="flex flex-col items-center text-center px-5 pt-20 pb-8 bg-navy">
        <div className="animate-bounce-in" style={{ animationDelay: '0s' }}>
          <Image
            src="/logo-full.png"
            alt="BrainIQ Academy"
            width={280}
            height={158}
            className="w-56 h-auto object-contain mb-4"
            priority
          />
        </div>

        <p className="text-muted text-sm leading-relaxed max-w-xs mb-6 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          Unlock your child&apos;s full mental potential through the ancient art of abacus — building speed, focus, and lifelong confidence.
        </p>

        {/* Stats */}
        <div className="flex gap-6 justify-center mb-7 animate-fade-up" style={{ animationDelay: '0.25s' }}>
          {[
            { num: '10,000+', label: 'Students' },
            { num: '6', label: 'Countries' },
            { num: '16+', label: 'Years' },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <p className="font-playfair text-xl font-bold text-gold">{num}</p>
              <p className="text-muted text-xs uppercase tracking-widest mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col items-center gap-3 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <a
            href={ENROLL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs flex items-center justify-center gap-2 py-4 bg-gold text-navy font-bold text-base rounded-full shadow-xl active:scale-95 transition-transform"
          >
            <WaIcon />
            Enroll Now via WhatsApp
          </a>
          <a href="tel:+919629841966" className="text-teal text-sm underline underline-offset-4">
            or call +91 96298 41966
          </a>
        </div>
      </section>

      <Divider />

      {/* About */}
      <section id="about" className="px-5 py-8 bg-card">
        <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-1">Who We Are</p>
        <h2 className="font-playfair text-2xl font-bold text-text-primary mb-3">About BrainIQ Academy</h2>
        <p className="text-muted text-sm leading-relaxed">
          With over 16 years of experience and 10,000+ students trained, BrainIQ Academy is a trusted
          abacus training institution operating across 6 countries. We help children aged 5–15 build
          mental arithmetic, sharper memory, and lasting confidence — through a structured, proven curriculum
          rooted in Tamil Nadu.
        </p>
      </section>

      <Divider flip />

      {/* Why Abacus */}
      <section className="px-5 py-8 bg-navy">
        <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-1">Science-Backed</p>
        <h2 className="font-playfair text-2xl font-bold text-text-primary mb-5">Why Abacus?</h2>
        <div className="flex flex-col gap-2">
          {WHY_ABACUS.map(({ emoji, label }) => (
            <div key={label} className="flex items-center gap-3 bg-card rounded-xl px-4 py-3 border border-white/8">
              <span className="text-xl">{emoji}</span>
              <span className="text-text-primary text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Countries */}
      <section className="px-5 py-8 bg-card">
        <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-1">Global Reach</p>
        <h2 className="font-playfair text-2xl font-bold text-text-primary mb-5">Operating in 6 Countries</h2>
        <div className="grid grid-cols-3 gap-3">
          {COUNTRIES.map(({ flag, name }) => (
            <div key={name} className="flex flex-col items-center justify-center bg-navy rounded-xl py-3 border border-white/8 gap-1">
              <span className="text-3xl">{flag}</span>
              <span className="text-muted text-xs text-center">{name}</span>
            </div>
          ))}
        </div>
      </section>

      <Divider flip />

      {/* Contact Form */}
      <section id="contact" className="px-5 py-8 bg-navy">
        <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-1">Reach Out</p>
        <h2 className="font-playfair text-2xl font-bold text-text-primary mb-5">Get in Touch</h2>
        <form onSubmit={handleContact} className="flex flex-col gap-4">
          <input
            type="text" required placeholder="Your full name"
            value={name} onChange={e => setName(e.target.value)}
            className={inputClass}
          />
          <input
            type="tel" required placeholder="+91 98765 43210"
            value={phone} onChange={e => setPhone(e.target.value)}
            className={inputClass}
          />
          <select value={interest} onChange={e => setInterest(e.target.value)} className={inputClass}>
            <option>Enroll My Child</option>
            <option>General Enquiry</option>
            <option>Franchise Opportunity</option>
          </select>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full py-4 bg-gold text-navy font-bold rounded-full active:scale-95 transition-transform"
          >
            <WaIcon />
            Send via WhatsApp
          </button>
        </form>

        <div className="mt-6 flex flex-col gap-2">
          <a href="tel:+919629841966" className="flex items-center gap-3 bg-card rounded-xl px-4 py-3 border border-teal/30">
            <Phone size={15} className="text-teal" />
            <span className="text-teal text-sm">+91 96298 41966</span>
          </a>
          <a href="tel:+918220026412" className="flex items-center gap-3 bg-card rounded-xl px-4 py-3 border border-white/8">
            <Phone size={15} className="text-muted" />
            <span className="text-muted text-sm">+91 82200 26412</span>
          </a>
          <a href="mailto:smartbrainabacus19@gmail.com" className="flex items-center gap-3 bg-card rounded-xl px-4 py-3 border border-white/8">
            <Mail size={14} className="text-muted" />
            <span className="text-muted text-xs">smartbrainabacus19@gmail.com</span>
          </a>
        </div>

        <div className="mt-5">
          <p className="text-muted text-xs font-semibold uppercase tracking-widest mb-3">Our Centers</p>
          <div className="flex flex-col gap-2">
            {CENTERS.map(c => (
              <div key={c} className="flex items-center gap-3 bg-card rounded-xl px-4 py-2.5 border border-white/8">
                <MapPin size={13} className="text-teal flex-shrink-0" />
                <span className="text-muted text-xs">{c}, Tamil Nadu</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* Testimonials */}
      <section className="px-5 py-8 bg-card">
        <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-1">Parents Say</p>
        <h2 className="font-playfair text-2xl font-bold text-text-primary mb-5">Trusted by Families</h2>
        <div className="flex flex-col gap-4">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-navy rounded-xl p-4 border border-white/8">
              <Stars />
              <p className="text-muted text-sm leading-relaxed my-3">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-text-primary text-xs font-semibold">{t.name} <span className="text-muted font-normal">· {t.location}</span></p>
            </div>
          ))}
        </div>
      </section>

      <Divider flip />

      {/* Franchise CTA */}
      <section className="px-5 py-10 bg-navy flex flex-col items-center text-center">
        <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-2">Business Opportunity</p>
        <h2 className="font-playfair text-2xl font-bold text-text-primary mb-2">Own a BrainIQ Franchise</h2>
        <p className="text-muted text-sm leading-relaxed mb-6 max-w-xs">
          Available across India, USA, Dubai, UK, Germany &amp; Netherlands. Low investment, full support.
        </p>
        <a
          href={FRANCHISE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-xs flex items-center justify-center gap-2 py-4 border-2 border-gold text-gold font-bold text-base rounded-full active:scale-95 transition-transform"
        >
          <WaIcon />
          Franchise Enquiry
        </a>
      </section>

      {/* Footer */}
      <footer className="px-5 py-6 border-t border-white/10 text-center">
        <p className="text-muted/60 text-xs">© 2026 BrainIQ Academy. All rights reserved.</p>
        <p className="text-muted/40 text-xs mt-1 italic">Enrich the brain with abacus</p>
        <a href="/" className="mt-3 inline-block text-teal text-xs underline underline-offset-4">View full website →</a>
      </footer>
    </main>
  );
}
