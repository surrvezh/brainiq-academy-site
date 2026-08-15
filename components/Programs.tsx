import { CheckCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/config';

const PROGRAMS = [
  {
    badge: 'Beginner',
    ageGroup: 'Age 5 – 7',
    duration: '12 months',
    skills: ['Basic abacus operation', 'Single-digit arithmetic', 'Number recognition', 'Fine motor development'],
    highlight: false,
  },
  {
    badge: 'Intermediate',
    ageGroup: 'Age 8 – 11',
    duration: '18 months',
    skills: ['Multi-digit calculations', 'Mental arithmetic', 'Speed exercises', 'Concentration drills'],
    highlight: true,
  },
  {
    badge: 'Advanced',
    ageGroup: 'Age 12+',
    duration: '24 months',
    skills: ['Complex mental math', 'Competition preparation', 'Visualization mastery', 'Exam strategies'],
    highlight: false,
  },
];

export default function Programs() {
  const chatUrl = buildWhatsAppUrl('Hi! I need help choosing the right BrainIQ Academy program for my child.');

  return (
    <section id="programs" className="py-20 md:py-28 bg-card relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">Structured Learning</p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
            Our Programs
          </h2>
          <p className="mt-4 text-muted text-base md:text-lg max-w-xl mx-auto">
            Age-appropriate levels designed for progressive mastery and lasting results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" style={{ perspective: '1200px' }}>
          {PROGRAMS.map((prog, i) => (
            <article
              key={prog.badge}
              className={`relative rounded-2xl p-6 lg:p-8 flex flex-col card-3d ${
                prog.highlight
                  ? 'bg-gradient-to-b from-teal/20 to-card border-2 border-teal teal-glow'
                  : 'bg-navy gold-border'
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {prog.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-teal text-navy text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                  Most Popular
                </span>
              )}

              <div className="mb-5">
                <span
                  className="inline-block px-3 py-1 bg-gold/15 text-gold text-xs font-bold uppercase tracking-wider rounded-full mb-4 border border-gold/30"
                  style={{ boxShadow: '0 0 12px rgba(201,168,76,0.2)' }}
                >
                  {prog.badge}
                </span>
                <p className="text-text-primary font-playfair text-2xl font-bold">{prog.ageGroup}</p>
                <p className="text-muted text-sm mt-1">Duration: {prog.duration}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-6">
                {prog.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-teal mt-0.5 flex-shrink-0" />
                    <span className="text-muted text-sm">{skill}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  prog.highlight
                    ? 'bg-teal text-navy hover:bg-teal/80'
                    : 'border border-gold/40 text-gold hover:bg-gold/10'
                }`}
              >
                Enroll in {prog.badge}
              </a>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={chatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal hover:text-gold transition-colors text-base font-medium"
          >
            Not sure which level? Chat with us →
          </a>
        </div>
      </div>
    </section>
  );
}
