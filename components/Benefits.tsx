import { Zap, Eye, Brain, Star, Lightbulb, GraduationCap } from 'lucide-react';

const BENEFITS = [
  {
    icon: Zap,
    title: 'Mental Arithmetic Speed',
    body: 'Children solve complex calculations mentally at remarkable speed, outperforming peers in mathematics.',
  },
  {
    icon: Eye,
    title: 'Concentration & Focus',
    body: 'Regular abacus practice trains the mind to sustain deep focus, improving performance across all subjects.',
  },
  {
    icon: Brain,
    title: 'Memory Enhancement',
    body: 'Visualizing and manipulating the abacus strengthens both short-term and long-term memory capacity.',
  },
  {
    icon: Star,
    title: 'Confidence Building',
    body: 'Mastering mental math gives children a sense of achievement that translates into lasting self-confidence.',
  },
  {
    icon: Lightbulb,
    title: 'Brain Development',
    body: 'Abacus activates both hemispheres simultaneously, promoting holistic cognitive development.',
  },
  {
    icon: GraduationCap,
    title: 'Academic Performance',
    body: 'Students show measurable improvement in school grades, especially in mathematics and logical reasoning.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-teal/5 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">Science-Backed</p>
          <h2
            className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
          >
            Why Abacus?
          </h2>
          <p className="mt-4 text-muted text-base md:text-lg max-w-2xl mx-auto">
            Decades of research confirm that abacus training is one of the most effective tools for children&apos;s cognitive development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group bg-card rounded-2xl p-6 lg:p-8 gold-border card-3d cursor-default"
            >
              {/* 3D icon container */}
              <div
                className="w-14 h-14 rounded-2xl bg-teal/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-teal/20"
                style={{ boxShadow: '0 4px 16px rgba(29,184,166,0.15), inset 0 1px 0 rgba(255,255,255,0.05)' }}
              >
                <Icon className="text-teal" size={26} />
              </div>

              <h3
                className="font-playfair text-xl font-bold text-gold mb-3"
                style={{ textShadow: '0 0 16px rgba(201,168,76,0.3)' }}
              >
                {title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{body}</p>

              {/* 3D bottom highlight */}
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
