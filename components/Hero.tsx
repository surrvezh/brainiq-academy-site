'use client';

import Image from 'next/image';

const BEADS = [
  { size: 18, top: '12%', left: '8%',  delay: '0s',   dur: '6s',  color: 'bg-teal/50' },
  { size: 13, top: '20%', left: '88%', delay: '1.8s', dur: '8s',  color: 'bg-gold/50' },
  { size: 22, top: '72%', left: '6%',  delay: '3.2s', dur: '7s',  color: 'bg-teal/35' },
  { size: 15, top: '78%', left: '83%', delay: '0.6s', dur: '9s',  color: 'bg-gold/40' },
  { size: 10, top: '42%', left: '94%', delay: '2.4s', dur: '6s',  color: 'bg-teal/60' },
  { size: 20, top: '58%', left: '3%',  delay: '4.1s', dur: '7.5s',color: 'bg-gold/30' },
  { size: 8,  top: '8%',  left: '52%', delay: '1.2s', dur: '10s', color: 'bg-teal/40' },
  { size: 25, top: '88%', left: '48%', delay: '2.8s', dur: '8s',  color: 'bg-gold/25' },
  { size: 12, top: '35%', left: '15%', delay: '5s',   dur: '9s',  color: 'bg-teal/30' },
  { size: 16, top: '65%', left: '75%', delay: '0.3s', dur: '7s',  color: 'bg-gold/45' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy"
      style={{ perspective: '1200px' }}
    >
      {/* Deep radial glow layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-teal/8 blur-[150px]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-gold/6 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-teal/5 blur-[80px]" />
      </div>

      {/* 3D floating abacus beads */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
        {BEADS.map((b, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${b.color} animate-float`}
            style={{
              width: b.size,
              height: b.size,
              top: b.top,
              left: b.left,
              animationDelay: b.delay,
              animationDuration: b.dur,
              boxShadow: i % 2 === 0
                ? '0 0 12px rgba(29,184,166,0.6), 0 4px 8px rgba(0,0,0,0.4)'
                : '0 0 12px rgba(201,168,76,0.6), 0 4px 8px rgba(0,0,0,0.4)',
              transform: `translateZ(${(i % 3) * 20}px)`,
            }}
          />
        ))}

        {/* Abacus rod lines */}
        {[20, 35, 50, 65, 80].map((left, i) => (
          <div
            key={`rod-${i}`}
            className="absolute w-px opacity-10"
            style={{
              left: `${left}%`,
              top: '5%',
              height: '90%',
              background: 'linear-gradient(to bottom, transparent, #1DB8A6, transparent)',
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        {/* 3D logo with pulse */}
        <div
          className="relative mb-8 animate-float"
          style={{
            filter: 'drop-shadow(0 0 30px rgba(201,168,76,0.5)) drop-shadow(0 0 60px rgba(29,184,166,0.3))',
            animationDuration: '5s',
          }}
        >
          <Image
            src="/logo.png"
            alt="BrainIQ Academy Logo"
            width={140}
            height={140}
            className="w-28 h-28 md:w-36 md:h-36 object-contain"
            priority
          />
        </div>

        {/* 3D headline */}
        <h1
          className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-tight mb-4"
          style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.8)' }}
        >
          brain<span className="text-gold" style={{ textShadow: '0 0 30px rgba(201,168,76,0.6), 0 4px 20px rgba(0,0,0,0.5)' }}>IQ</span>
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl text-text-primary/80">Academy</span>
        </h1>

        <p className="text-teal text-base md:text-xl font-inter tracking-[0.3em] uppercase mb-4"
          style={{ textShadow: '0 0 20px rgba(29,184,166,0.6)' }}>
          Enrich the brain with abacus
        </p>

        <p className="text-muted text-base md:text-lg max-w-xl mb-10 leading-relaxed">
          Unlock your child&apos;s full mental potential through the ancient art of abacus —
          building speed, focus, and lifelong confidence.
        </p>

        {/* 3D CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="px-10 py-4 bg-gold text-navy font-bold text-base rounded-full transition-all duration-300"
            style={{
              boxShadow: '0 8px 32px rgba(201,168,76,0.4), 0 2px 8px rgba(0,0,0,0.4)',
              transform: 'translateZ(0)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'perspective(600px) rotateX(-8deg) translateY(-4px) translateZ(8px)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 16px 40px rgba(201,168,76,0.6), 0 4px 16px rgba(0,0,0,0.4)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateZ(0)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(201,168,76,0.4), 0 2px 8px rgba(0,0,0,0.4)';
            }}
          >
            Enroll Now
          </a>
          <a
            href="#contact"
            className="px-10 py-4 border-2 border-teal text-teal font-bold text-base rounded-full transition-all duration-300"
            style={{
              boxShadow: '0 8px 32px rgba(29,184,166,0.2)',
              transform: 'translateZ(0)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'perspective(600px) rotateX(-8deg) translateY(-4px) translateZ(8px)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 16px 40px rgba(29,184,166,0.4)';
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(29,184,166,0.1)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateZ(0)';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 32px rgba(29,184,166,0.2)';
              (e.currentTarget as HTMLAnchorElement).style.background = '';
            }}
          >
            Franchise Enquiry
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 flex gap-8 md:gap-16">
          {[
            { num: '500+', label: 'Students' },
            { num: '4',    label: 'Countries' },
            { num: '5+',   label: 'Years' },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <p className="font-playfair text-2xl md:text-3xl font-bold text-gold"
                style={{ textShadow: '0 0 20px rgba(201,168,76,0.4)' }}>{num}</p>
              <p className="text-muted text-xs md:text-sm mt-1 uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-muted text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-teal/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
