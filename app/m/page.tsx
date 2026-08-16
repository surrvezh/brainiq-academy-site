import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';

const PROGRAMS = [
  { badge: 'Junior', name: 'Blooming Buds', age: 'Age 5 – 9' },
  { badge: 'Intermediate', name: 'Initial Grade', age: 'Age 10 – 12' },
  { badge: 'Senior', name: 'Grade 1 – 8', age: 'Age 12 – 15' },
];

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

const CENTERS = [
  'Sulur',
  'Airforce Station Sulur',
  'Kangayampalayam',
  'Edappady',
  'Lakshmi Nagar',
];

const WA_URL = 'https://wa.me/919629841966?text=' + encodeURIComponent('Hi! I would like to enroll my child in BrainIQ Academy. Please share details.');
const FRANCHISE_WA = 'https://wa.me/919629841966?text=' + encodeURIComponent('Hi! I am interested in a BrainIQ Academy franchise. Please share details.');

export default function MobilePage() {
  return (
    <main className="min-h-screen bg-navy text-text-primary font-inter">

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-5 pt-10 pb-8 bg-navy">
        <div className="animate-bounce-in" style={{ animationDelay: '0s' }}>
          <Image
            src="/logo-full.png"
            alt="BrainIQ Academy"
            width={280}
            height={158}
            className="w-56 h-auto object-contain mb-6"
            priority
          />
        </div>

        {/* Stats */}
        <div className="flex gap-6 justify-center mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {[
            { num: '10,000+', label: 'Students' },
            { num: '6', label: 'Countries' },
            { num: '16+', label: 'Years' },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <p className="font-playfair text-2xl font-bold text-gold">{num}</p>
              <p className="text-muted text-xs uppercase tracking-widest mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="w-full flex flex-col items-center gap-3 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs flex items-center justify-center gap-2 py-4 bg-gold text-navy font-bold text-base rounded-full shadow-xl active:scale-95 transition-transform"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M11.99 0C5.366 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.83L.057 23.714a.75.75 0 0 0 .917.918l5.947-1.458A11.945 11.945 0 0 0 11.99 24C18.614 24 24 18.627 24 12S18.614 0 11.99 0zm0 21.818a9.818 9.818 0 0 1-5.017-1.376l-.36-.214-3.726.913.944-3.631-.235-.374A9.79 9.79 0 0 1 2.182 12c0-5.414 4.4-9.818 9.808-9.818 5.407 0 9.828 4.404 9.828 9.818 0 5.415-4.421 9.818-9.828 9.818z"/>
            </svg>
            Enroll Now via WhatsApp
          </a>
          <a href="tel:+919629841966" className="text-teal text-sm underline underline-offset-4">
            or call +91 96298 41966
          </a>
        </div>
      </section>

      <Divider />

      {/* Programs */}
      <section className="px-5 py-8 bg-card">
        <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-1">Our Programs</p>
        <h2 className="font-playfair text-2xl font-bold text-text-primary mb-5">3 Levels for All Ages</h2>
        <div className="flex flex-col gap-3">
          {PROGRAMS.map((p) => (
            <div key={p.badge} className="flex items-center justify-between bg-navy rounded-xl px-4 py-4 border border-white/8">
              <div>
                <span className="text-gold text-xs font-bold uppercase tracking-wider">{p.badge}</span>
                <p className="text-text-primary font-semibold mt-0.5">{p.name}</p>
              </div>
              <span className="text-muted text-sm">{p.age}</span>
            </div>
          ))}
        </div>
      </section>

      <Divider flip />

      {/* Testimonials */}
      <section className="px-5 py-8 bg-navy">
        <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-1">Parents Say</p>
        <h2 className="font-playfair text-2xl font-bold text-text-primary mb-5">Trusted by Families</h2>
        <div className="flex flex-col gap-4">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-card rounded-xl p-4 border border-white/8">
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-gold fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted text-sm leading-relaxed mb-3">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-text-primary text-xs font-semibold">{t.name} <span className="text-muted font-normal">· {t.location}</span></p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Centers + Contact */}
      <section className="px-5 py-8 bg-card">
        <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-1">Find Us</p>
        <h2 className="font-playfair text-2xl font-bold text-text-primary mb-5">Our Centers</h2>
        <div className="flex flex-col gap-2 mb-6">
          {CENTERS.map((c) => (
            <div key={c} className="flex items-center gap-3 bg-navy rounded-xl px-4 py-3 border border-white/8">
              <MapPin size={14} className="text-teal flex-shrink-0" />
              <span className="text-text-primary text-sm">{c}, Tamil Nadu</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <a href="tel:+919629841966" className="flex items-center gap-3 bg-navy rounded-xl px-4 py-3 border border-teal/30 active:scale-95 transition-transform">
            <Phone size={16} className="text-teal flex-shrink-0" />
            <span className="text-teal text-sm font-medium">+91 96298 41966</span>
          </a>
          <a href="tel:+918220026412" className="flex items-center gap-3 bg-navy rounded-xl px-4 py-3 border border-white/8 active:scale-95 transition-transform">
            <Phone size={16} className="text-muted flex-shrink-0" />
            <span className="text-muted text-sm">+91 82200 26412</span>
          </a>
          <a href="mailto:smartbrainabacus19@gmail.com" className="flex items-center gap-3 bg-navy rounded-xl px-4 py-3 border border-white/8">
            <Mail size={14} className="text-muted flex-shrink-0" />
            <span className="text-muted text-xs">smartbrainabacus19@gmail.com</span>
          </a>
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
          href={FRANCHISE_WA}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-xs flex items-center justify-center gap-2 py-4 border-2 border-gold text-gold font-bold text-base rounded-full active:scale-95 transition-transform"
        >
          Franchise Enquiry via WhatsApp
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

function Divider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`} style={{ height: 32 }}>
      <svg viewBox="0 0 1200 32" preserveAspectRatio="none" className="w-full h-full">
        <path d="M0,0 C300,32 900,32 1200,0 L1200,32 L0,32 Z" className="fill-card" />
      </svg>
    </div>
  );
}
