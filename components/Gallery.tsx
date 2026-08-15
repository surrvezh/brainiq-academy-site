'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

const GALLERY_PHOTOS = [
  { src: '/gallery/photo-1.jpg', alt: 'BrainIQ Academy students practicing abacus' },
  { src: '/gallery/photo-2.jpg', alt: 'Children learning mental math at BrainIQ Academy' },
  { src: '/gallery/photo-3.jpg', alt: 'BrainIQ Academy classroom session' },
  { src: '/gallery/photo-4.jpg', alt: 'Students competing in abacus championship' },
  { src: '/gallery/photo-5.jpg', alt: 'BrainIQ Academy award ceremony' },
  { src: '/gallery/photo-6.jpg', alt: 'Teacher guiding students with abacus tools' },
];

// SVG placeholder colors per photo
const PLACEHOLDER_COLORS = ['#1a3a4a', '#1e2d3d', '#1a2d1a', '#3a2a1a', '#2a1a3a', '#1a3a3a'];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [errors, setErrors] = useState<Record<number, boolean>>({});

  return (
    <section id="gallery" className="py-20 md:py-28 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-teal/4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-teal text-sm font-semibold uppercase tracking-widest mb-3">Our Community</p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
            Life at BrainIQ
          </h2>
          <p className="mt-4 text-muted text-base md:text-lg max-w-xl mx-auto">
            Real moments from our classrooms, competitions, and celebrations.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {GALLERY_PHOTOS.map((photo, i) => (
            <div
              key={photo.src}
              className="break-inside-avoid rounded-xl overflow-hidden gold-border cursor-pointer group relative"
              style={{
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                transform: 'translateZ(0)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'perspective(800px) rotateX(-3deg) rotateY(2deg) translateY(-6px) translateZ(8px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '8px 12px 40px rgba(29,184,166,0.2), 0 4px 20px rgba(0,0,0,0.5)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateZ(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
              }}
              onClick={() => setLightbox(i)}
            >
              {errors[i] ? (
                <div
                  className="w-full flex items-center justify-center"
                  style={{ height: i % 3 === 0 ? 280 : 200, background: PLACEHOLDER_COLORS[i] }}
                >
                  <div className="text-center">
                    <p className="text-muted/60 text-xs">photo-{i + 1}.jpg</p>
                    <p className="text-muted/40 text-xs mt-1">Drop in public/gallery/</p>
                  </div>
                </div>
              ) : (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={500}
                  height={i % 3 === 0 ? 350 : 250}
                  className="w-full object-cover"
                  onError={() => setErrors((prev) => ({ ...prev, [i]: true }))}
                />
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white" size={32} />
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted/60 text-xs mt-8">
          Replace placeholder photos by dropping your images into{' '}
          <code className="text-teal/80">public/gallery/</code> as photo-1.jpg, photo-2.jpg, etc.
        </p>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-navy/97 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-card border border-white/20 flex items-center justify-center text-text-primary hover:text-gold hover:border-gold transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <div onClick={(e) => e.stopPropagation()}>
            {errors[lightbox] ? (
              <div className="w-80 h-60 bg-card rounded-xl flex items-center justify-center">
                <p className="text-muted text-sm">No image yet</p>
              </div>
            ) : (
              <Image
                src={GALLERY_PHOTOS[lightbox].src}
                alt={GALLERY_PHOTOS[lightbox].alt}
                width={1000}
                height={700}
                className="max-w-full max-h-[85vh] object-contain rounded-xl depth-shadow"
                onError={() => setErrors((prev) => ({ ...prev, [lightbox]: true }))}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
