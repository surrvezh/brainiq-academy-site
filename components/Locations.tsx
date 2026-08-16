import { MapPin } from 'lucide-react';

const COUNTRIES = [
  { flag: '🇮🇳', name: 'India', description: 'Nationwide presence with offline centers in Tamil Nadu.' },
  { flag: '🇺🇸', name: 'USA', description: 'Centers serving South Asian communities across the United States.' },
  { flag: '🇦🇪', name: 'Dubai, UAE', description: 'Serving families in Dubai and across the UAE.' },
  { flag: '🇬🇧', name: 'United Kingdom', description: 'Programs available across major UK cities.' },
  { flag: '🇩🇪', name: 'Germany', description: 'Growing presence serving families across Germany.' },
  { flag: '🇳🇱', name: 'Netherlands', description: 'Programs available for families in the Netherlands.' },
];

const OFFLINE_CENTERS = [
  { name: 'Sulur', address: 'Sulur, Coimbatore District, Tamil Nadu, India' },
  { name: 'Airforce Station Sulur', address: 'Airforce Station Sulur, Tamil Nadu, India' },
  { name: 'Kangayampalayam', address: 'Kangayampalayam, Tamil Nadu, India' },
  { name: 'Edappady', address: 'Edappady, Tamil Nadu, India' },
  { name: 'Lakshmi Nagar', address: 'Lakshmi Nagar, Tamil Nadu, India' },
];

export default function Locations() {
  return (
    <section id="locations" className="py-20 md:py-28 bg-navy relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">Global Reach</p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
            Where We Are
          </h2>
          <p className="mt-4 text-muted text-base md:text-lg max-w-xl mx-auto">
            BrainIQ Academy is growing worldwide — bringing the benefits of abacus to children everywhere.
          </p>
        </div>

        {/* Country cards */}
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 mb-12" style={{ perspective: '1000px' }}>
          {COUNTRIES.map((country, i) => (
            <a
              key={country.name}
              href="#contact"
              className="group bg-card rounded-xl sm:rounded-2xl p-3 sm:p-6 text-center gold-border card-3d"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="text-3xl sm:text-5xl mb-2 sm:mb-4 transition-transform duration-300 group-hover:scale-110 inline-block"
                style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))' }}
              >
                {country.flag}
              </div>
              <h3 className="font-playfair text-xs sm:text-lg font-bold text-text-primary group-hover:text-gold transition-colors leading-tight">
                {country.name}
              </h3>
              <p className="hidden sm:block text-muted text-sm leading-relaxed mt-2">{country.description}</p>
            </a>
          ))}
        </div>

        {/* Offline centers — gold 3D card */}
        <div
          className="border-2 border-gold/50 rounded-2xl p-6 md:p-10 bg-card gold-glow"
          style={{ transform: 'perspective(1000px) rotateX(1deg)', boxShadow: '0 20px 60px rgba(201,168,76,0.1), 0 8px 32px rgba(0,0,0,0.5)' }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center"
              style={{ boxShadow: '0 0 20px rgba(201,168,76,0.3)' }}>
              <MapPin className="text-gold" size={20} />
            </div>
            <h3 className="font-playfair text-2xl font-bold text-gold"
              style={{ textShadow: '0 0 20px rgba(201,168,76,0.4)' }}>
              Offline Centers — Tamil Nadu
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {OFFLINE_CENTERS.map((center) => (
              <div
                key={center.name}
                className="flex items-start gap-4 bg-navy/70 rounded-xl p-5 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-teal mt-1.5 flex-shrink-0"
                  style={{ boxShadow: '0 0 8px rgba(29,184,166,0.8)' }} />
                <div>
                  <p className="text-text-primary font-semibold text-lg">{center.name}</p>
                  <p className="text-muted text-sm mt-1">{center.address}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-muted text-sm mt-6 text-center">
            Walk-in welcome · Contact us for class schedules and timings
          </p>
        </div>
      </div>
    </section>
  );
}
