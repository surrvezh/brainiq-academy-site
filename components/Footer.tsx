import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/config';

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  );
}

const QUICK_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Programs', href: '#programs' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Franchise', href: '#franchise' },
  { label: 'Contact', href: '#contact' },
];

const LOCATIONS = ['🇮🇳 India', '🇺🇸 USA', '🇬🇧 United Kingdom', '🇦🇪 Dubai, UAE', '📍 Sulur, Tamil Nadu', '📍 Karanam Pettai, TN'];

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-teal/20 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] rounded-full bg-teal/3 blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image src="/logo.png" alt="BrainIQ Academy" fill className="object-contain" />
              </div>
              <span className="font-playfair text-xl font-bold text-text-primary">
                brain<span className="text-gold">IQ</span>
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-6">
              {SITE_CONFIG.tagline}.<br />
              Empowering children through the ancient art of abacus.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FacebookIcon, href: SITE_CONFIG.social.facebook, label: 'Facebook' },
                { icon: InstagramIcon, href: SITE_CONFIG.social.instagram, label: 'Instagram' },
                { icon: YoutubeIcon, href: SITE_CONFIG.social.youtube, label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-card border border-white/10 flex items-center justify-center text-muted hover:text-teal hover:border-teal transition-all duration-200 hover:-translate-y-0.5"
                  style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-text-primary font-semibold uppercase text-xs tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted text-sm hover:text-teal transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-teal/40 group-hover:bg-teal transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-text-primary font-semibold uppercase text-xs tracking-widest mb-5">Locations</h3>
            <ul className="space-y-2.5">
              {LOCATIONS.map((loc) => (
                <li key={loc} className="text-muted text-sm">{loc}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-teal/20 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted/70 text-xs">© 2026 BrainIQ Academy. All rights reserved.</p>
          <p className="text-muted/50 text-xs italic">Enrich the brain with abacus</p>
        </div>
      </div>
    </footer>
  );
}
