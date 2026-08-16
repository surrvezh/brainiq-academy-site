import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-card relative overflow-hidden">
      {/* Background depth layer */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="border-l-4 border-teal pl-6 md:pl-10">
            <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">Who We Are</p>
            <h2
              className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
            >
              About BrainIQ Academy
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-4">
              BrainIQ Academy is a trusted abacus training institution with over 16 years of dedicated
              experience in shaping young minds. What began as a single classroom has grown into a movement
              — today we have trained more than 10,000 students and carry our programs to six countries:
              India, USA, Dubai, UK, Germany, and Netherlands.
            </p>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-4">
              Our curriculum bridges the ancient discipline of abacus with modern child psychology and
              learning science, helping children aged 5 to 15 build lightning-fast mental arithmetic,
              sharper memory, and lasting concentration — skills that extend far beyond the classroom into
              academics and everyday life.
            </p>
            <p className="text-muted text-base md:text-lg leading-relaxed">
              Rooted in Tamil Nadu, our offline centers in Sulur, Airforce Station Sulur, Kangayampalayam,
              Edappady, and Lakshmi Nagar serve students from diverse backgrounds — including children of
              defence personnel — making quality abacus education accessible to every family.
            </p>

            <div className="mt-10 flex gap-8 md:gap-12">
              {[
                { num: '10,000+', label: 'Students Trained' },
                { num: '6',      label: 'Countries' },
                { num: '16+',    label: 'Years Experience' },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="text-center p-4 rounded-xl bg-navy/60 gold-border card-3d"
                >
                  <p className="font-playfair text-2xl md:text-3xl text-gold font-bold">{num}</p>
                  <p className="text-muted text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3D Image frame */}
          <div className="relative" style={{ perspective: '1000px' }}>
            <div
              className="relative rounded-2xl overflow-hidden gold-border depth-shadow transition-transform duration-500 hover:rotate-y-2"
              style={{ transform: 'perspective(1000px) rotateY(-4deg) rotateX(2deg)' }}
            >
              <Image
                src="/images/about.jpg"
                alt="BrainIQ Academy students learning abacus with a teacher"
                width={600}
                height={450}
                className="w-full h-80 md:h-[420px] object-cover"
              />
              {/* Overlay shimmer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal/10 to-transparent pointer-events-none" />
            </div>
            {/* 3D floating decorative corners */}
            <div
              className="absolute -bottom-5 -right-5 w-28 h-28 border-r-2 border-b-2 border-gold/50 rounded-br-2xl"
              style={{ transform: 'perspective(500px) rotateX(10deg) rotateY(-10deg)', boxShadow: '4px 4px 20px rgba(201,168,76,0.15)' }}
            />
            <div
              className="absolute -top-5 -left-5 w-20 h-20 border-l-2 border-t-2 border-teal/40 rounded-tl-2xl"
              style={{ transform: 'perspective(500px) rotateX(-8deg) rotateY(8deg)' }}
            />

            {/* Placeholder shown when image is missing */}
            <noscript>
              <div className="absolute inset-0 flex items-center justify-center bg-navy/80 rounded-2xl">
                <p className="text-muted text-sm">Place about.jpg in public/images/</p>
              </div>
            </noscript>
          </div>
        </div>
      </div>
    </section>
  );
}
