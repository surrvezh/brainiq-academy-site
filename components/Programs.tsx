import { GraduationCap, BookOpen } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/config';

const PROGRAMS = [
  {
    badge: 'Junior',
    name: 'Blooming Buds',
    ageGroup: 'Age 5 – 9',
    description: 'Our entry-level program for young learners joining abacus for the first time. Through play-based activities and guided exploration, children build number sense, fine motor skills, and a natural love for mathematics.',
    highlight: false,
  },
  {
    badge: 'Intermediate',
    name: 'Initial Grade',
    ageGroup: 'Age 10 – 12',
    description: 'A structured bridge program that transitions learners into formal abacus technique. Students develop a solid foundation in mental arithmetic, concentration, and the discipline needed for advanced levels.',
    highlight: true,
  },
  {
    badge: 'Senior',
    name: 'Grade 1 – 8',
    ageGroup: 'Age 12 – 15',
    description: 'Eight progressive grades with increasing complexity. Students advance from core abacus operations through to high-speed mental calculation, preparing them for competitions and real-world academic excellence.',
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
                <p className="text-text-primary font-playfair text-2xl font-bold">{prog.name}</p>
                <p className="text-muted text-sm mt-1">{prog.ageGroup}</p>
              </div>

              <p className="text-muted text-sm leading-relaxed flex-1 mb-6">{prog.description}</p>

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

        {/* Teacher training & books */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {
              icon: GraduationCap,
              title: 'Teacher Training',
              body: 'We offer comprehensive abacus teacher training programs for educators and aspiring instructors — equipping them with the skills, methodology, and certification to run their own classes.',
            },
            {
              icon: BookOpen,
              title: 'Book Supply to Schools',
              body: 'BrainIQ Academy supplies structured abacus workbooks and teaching materials to schools, enabling institutions to integrate our proven curriculum into their own learning environment.',
            },
          ].map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="flex items-start gap-4 bg-navy rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
            >
              <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 border border-gold/20">
                <Icon className="text-gold" size={20} />
              </div>
              <div>
                <h3 className="text-text-primary font-semibold mb-1">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{body}</p>
              </div>
            </div>
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
