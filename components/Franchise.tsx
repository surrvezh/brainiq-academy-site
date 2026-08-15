'use client';

import { TrendingUp, BookOpen, Megaphone, Users } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/config';

const FRANCHISE_BENEFITS = [
  { icon: TrendingUp, title: 'Low Investment, High Returns', body: 'Start with minimal capital and benefit from a high-demand, recession-proof education sector.' },
  { icon: BookOpen, title: 'Proven Curriculum', body: 'Access our tested and certified abacus curriculum used by hundreds of successful students.' },
  { icon: Megaphone, title: 'Full Marketing Support', body: 'Get branded materials, digital marketing assets, and local campaign support from day one.' },
  { icon: Users, title: 'Complete Training Program', body: 'Comprehensive teacher training, operational guidance, and ongoing mentorship from our team.' },
];

export default function Franchise() {
  const whatsappUrl = buildWhatsAppUrl(
    'Hi! I am interested in a BrainIQ Academy franchise opportunity. Please share more details.'
  );

  return (
    <section id="franchise" className="py-20 md:py-28 bg-navy relative overflow-hidden">
      {/* Gold geometric dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, #C9A84C 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gold/6 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: benefits */}
          <div>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Business Opportunity</p>
            <h2
              className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 leading-tight"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
            >
              Own a BrainIQ Franchise
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-10">
              Join our growing network of franchise partners and make a meaningful impact in your community while building a profitable education business.
            </p>

            <div className="space-y-6">
              {FRANCHISE_BENEFITS.map(({ icon: Icon, title, body }, i) => (
                <div
                  key={title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-white/5 hover:border-gold/30 transition-all duration-300 hover:-translate-y-0.5"
                  style={{ animationDelay: `${i * 0.1}s`, boxShadow: '0 2px 12px rgba(0,0,0,0.2)' }}
                >
                  <div
                    className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0"
                    style={{ boxShadow: '0 0 16px rgba(201,168,76,0.2)', border: '1px solid rgba(201,168,76,0.2)' }}
                  >
                    <Icon className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="text-text-primary font-semibold mb-1">{title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3D CTA card */}
          <div
            className="bg-card rounded-2xl p-8 md:p-10 border-2 border-gold/40"
            style={{
              boxShadow: '0 0 60px rgba(201,168,76,0.12), 0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
              transform: 'perspective(1000px) rotateY(-3deg) rotateX(2deg)',
              transition: 'transform 0.4s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(20px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = 'perspective(1000px) rotateY(-3deg) rotateX(2deg)';
            }}
          >
            <div className="text-center">
              <div
                className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6 animate-pulse-gold"
                style={{ border: '2px solid rgba(201,168,76,0.3)' }}
              >
                <TrendingUp className="text-gold" size={36} />
              </div>

              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-text-primary mb-4"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
                Ready to Get Started?
              </h3>
              <p className="text-muted text-base leading-relaxed mb-8">
                Franchises available in India, USA, UK, and Dubai. Limited slots open. Enquire today to reserve your territory.
              </p>

              <div className="space-y-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-gold text-navy font-bold text-base rounded-full hover:bg-yellow-300 transition-all duration-200"
                  style={{ boxShadow: '0 8px 24px rgba(201,168,76,0.35)' }}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M11.99 0C5.366 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.83L.057 23.714a.75.75 0 0 0 .917.918l5.947-1.458A11.945 11.945 0 0 0 11.99 24C18.614 24 24 18.627 24 12S18.614 0 11.99 0zm0 21.818a9.818 9.818 0 0 1-5.017-1.376l-.36-.214-3.726.913.944-3.631-.235-.374A9.79 9.79 0 0 1 2.182 12c0-5.414 4.4-9.818 9.808-9.818 5.407 0 9.828 4.404 9.828 9.818 0 5.415-4.421 9.818-9.828 9.818z"/>
                  </svg>
                  WhatsApp Franchise Enquiry
                </a>
                <a
                  href="#contact"
                  className="flex items-center justify-center w-full py-4 border-2 border-teal text-teal font-semibold text-base rounded-full hover:bg-teal hover:text-navy transition-all duration-200"
                >
                  Fill Enquiry Form
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 flex justify-center gap-6 text-center">
                {['4 Countries', 'Low Investment', '24h Response'].map((item) => (
                  <div key={item}>
                    <p className="text-teal text-xs font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
