const TESTIMONIALS = [
  {
    quote: "My daughter joined Blooming Buds at age 6 and within 8 months she was doing mental calculations faster than me. The teachers are incredibly patient and encouraging.",
    name: "Priya Ramesh",
    location: "Sulur, Coimbatore",
    child: "Mother of a Grade 2 student",
  },
  {
    quote: "We moved to Dubai two years ago and were worried about finding quality abacus coaching. BrainIQ Academy's online program kept our son on track — he even won a state-level competition.",
    name: "Karthik Subramaniam",
    location: "Dubai, UAE",
    child: "Father of a Grade 4 student",
  },
  {
    quote: "What sets BrainIQ apart is the structure. There's a clear progression from one grade to the next, and you can actually see your child's confidence grow with every level.",
    name: "Meena Vijayakumar",
    location: "Kangayampalayam",
    child: "Mother of a Grade 1 student",
  },
  {
    quote: "16 years of experience really shows. The curriculum is polished, the instructors know exactly how to handle young children, and the results speak for themselves.",
    name: "Arun Selvakumar",
    location: "Edappady",
    child: "Father of two students",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-navy relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">What Parents Say</p>
          <h2
            className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
          >
            Trusted by Families Worldwide
          </h2>
          <p className="mt-4 text-muted text-base md:text-lg max-w-xl mx-auto">
            Over 10,000 students trained. Here&apos;s what their families have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl p-6 md:p-8 border border-white/8 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1 relative"
              style={{
                boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {/* Quote mark */}
              <div
                className="font-playfair text-6xl text-gold/20 leading-none absolute top-4 left-6 select-none pointer-events-none"
                aria-hidden
              >
                &ldquo;
              </div>

              <p className="text-muted text-base leading-relaxed mb-6 pt-4 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal/20 border border-teal/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-teal font-bold text-base">{t.name[0]}</span>
                </div>
                <div>
                  <p className="text-text-primary font-semibold text-sm">{t.name}</p>
                  <p className="text-muted text-xs">{t.child} · {t.location}</p>
                </div>
                {/* Stars */}
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-gold fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
