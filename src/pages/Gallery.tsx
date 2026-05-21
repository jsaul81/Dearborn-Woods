import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = Array.from({ length: 21 }, (_, i) => {
  const num = String(i + 1).padStart(2, '0');
  return {
    src: `/gallery/gallery-${num}.jpg`,
    alt: 'Interior of a River Birch Builders home, photographed by Seacoast RE Photography',
  };
});

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;

    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((i) => (i === null ? null : (i + 1) % photos.length));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
      }
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  return (
    <main className="pt-24">
      {/* Header */}
      <section className="px-6 md:px-12 py-16 max-w-screen-2xl mx-auto">
        <div className="max-w-3xl">
          <p className="font-label uppercase tracking-[0.2em] text-[10px] text-primary mb-4">Builder's Portfolio</p>
          <h1 className="text-4xl md:text-6xl leading-tight font-light italic font-headline mb-8">A River Birch Showcase</h1>
          <p className="text-secondary font-body text-lg leading-relaxed">
            A selection of homes from River Birch Builders, the firm crafting Dearborn Woods. Every space reflects the same standards of craft and detail that will shape the homes you'll see here.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-12 pb-24 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo, i) => (
            <motion.button
              key={photo.src}
              type="button"
              onClick={() => setLightboxIndex(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: 'easeOut' }}
              aria-label={`Open image ${i + 1} of ${photos.length}`}
              className="aspect-[3/2] overflow-hidden rounded-xl shadow-lg bg-surface-container group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-surface"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading={i < 6 ? 'eager' : 'lazy'}
                decoding="async"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-105"
              />
            </motion.button>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-8 bg-[#2D5D5B] text-white text-center">
        <div className="max-w-screen-lg mx-auto">
          <span className="font-label uppercase tracking-[0.4em] text-xs text-white/60 mb-8 block">Imagine What's Possible</span>
          <h2 className="text-6xl md:text-8xl font-light font-headline italic leading-tight mb-8">
            Build Yours at Dearborn
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a
              href="mailto:info@dearbornwoodsnh.com"
              className="inline-block text-center bg-white text-primary px-12 py-5 font-label uppercase tracking-[0.2em] text-xs hover:bg-stone-100 transition-colors rounded-xl"
            >
              Start the Conversation
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-8 cursor-pointer"
            onClick={() => setLightboxIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
          >
            <button
              type="button"
              aria-label="Close image viewer"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
              className="absolute top-6 right-6 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <motion.img
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].alt}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-full object-contain rounded-xl"
            />

            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
              }}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i === null ? null : (i + 1) % photos.length));
              }}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 font-label uppercase tracking-[0.2em] text-[10px]">
              {lightboxIndex + 1} / {photos.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
