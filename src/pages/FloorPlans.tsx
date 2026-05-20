import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, ChevronLeft, ChevronRight, X } from 'lucide-react';

function ImageSlider({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <div className="aspect-[16/9] overflow-hidden bg-surface-container rounded-xl shadow-lg relative group">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={current === 0 ? 'w-full h-full object-cover' : 'w-full h-full object-contain bg-white'}
            src={images[current]}
            alt={`${name} - ${current === 0 ? 'Rendering' : 'Floor Plan'}`}
          />
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={() => setCurrent((c) => (c + 1) % images.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* Enlarge button */}
        <button
          onClick={() => setLightbox(images[current])}
          className="absolute top-4 right-4 p-2.5 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60"
        >
          <Maximize2 className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 mt-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-24 h-16 overflow-hidden rounded-lg border-2 transition-all ${
              i === current ? 'border-primary opacity-100' : 'border-transparent opacity-50 hover:opacity-80'
            }`}
          >
            <img src={img} alt={`${name} thumbnail ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-8 cursor-pointer"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-full max-h-full object-contain rounded-xl"
              src={lightbox}
              alt={name}
              onClick={(e) => e.stopPropagation()}
            />
            {/* Lightbox nav */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const idx = images.indexOf(lightbox);
                const prev = (idx - 1 + images.length) % images.length;
                setLightbox(images[prev]);
                setCurrent(prev);
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                const idx = images.indexOf(lightbox);
                const next = (idx + 1) % images.length;
                setLightbox(images[next]);
                setCurrent(next);
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function FloorPlans() {
  const models = [
    {
      name: 'The Belknap',
      desc: 'A thoughtfully designed 4-bedroom home featuring quality craftsmanship and modern farmhouse aesthetics, perfectly suited for the Dearborn Woods community.',
      area: '2,770 Sq Ft',
      beds: '4 Bedrooms',
      baths: '3 Bathrooms',
      parking: '2 Cars',
      images: ['/belknap-front.png', '/belknap-floorplan.png'],
    },
    {
      name: 'The Birchwood',
      desc: 'An efficient and elegant 3-bedroom design that maximizes living space while maintaining the warmth and character that defines Dearborn Woods.',
      area: '2,544 Sq Ft',
      beds: '3 Bedrooms',
      baths: '3 Bathrooms',
      parking: '2 Cars',
      images: ['/birchwood-front.png', '/birchwood-floorplan.jpg'],
    },
    {
      name: 'The Dearborn',
      desc: 'Our signature floor plan featuring 3 bedrooms plus a dedicated office, offering versatile living with generous proportions and premium finishes throughout.',
      area: '3,071 Sq Ft',
      beds: '3 Bedrooms, 1 Office',
      baths: '4 Bathrooms',
      parking: '3 Cars',
      images: ['/dearborn-front.png', '/dearborn-floorplan.png'],
    }
  ];

  return (
    <main className="pt-32 pb-24">
      <section className="px-6 md:px-12 mb-20 max-w-screen-2xl mx-auto">
        <span className="font-label uppercase tracking-[0.2em] text-xs text-primary mb-4 block">Residential Selection</span>
        <h1 className="text-4xl md:text-6xl font-light leading-tight italic font-headline">Floor Plans / Home Designs</h1>
      </section>

      {models.map((model, index) => (
        <motion.section
          key={model.name}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="px-6 md:px-12 mb-20 max-w-screen-2xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`lg:col-span-8 space-y-8 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}
            >
              <ImageSlider images={model.images} name={model.name} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className={`lg:col-span-4 flex flex-col justify-between py-2 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
            >
              <div>
                <div className="mb-12">
                  <h2 className="text-5xl font-light font-headline mb-4">{model.name}</h2>
                  <p className="text-secondary leading-relaxed font-light">{model.desc}</p>
                </div>
                <div className="space-y-6 mb-12">
                  {[
                    { label: 'Total Area', value: model.area },
                    { label: 'Bedrooms', value: model.beds },
                    { label: 'Bathrooms', value: model.baths },
                    { label: 'Garage Capacity', value: model.parking },
                  ].map((spec) => (
                    <div key={spec.label} className="flex justify-between items-end border-b border-outline-variant/30 pb-2">
                      <span className="font-label uppercase tracking-wider text-[10px] text-secondary">{spec.label}</span>
                      <span className="font-headline italic text-xl">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          {index < models.length - 1 && (
            <div className="h-px w-full bg-surface-container-highest mt-20"></div>
          )}
        </motion.section>
      ))}

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="bg-surface-container-low py-24"
      >
        <div className="px-6 md:px-12 max-w-screen-2xl mx-auto flex flex-col items-center text-center">
          <span className="font-label uppercase tracking-[0.2em] text-xs text-primary mb-6 block">Custom Solutions</span>
          <h2 className="text-5xl md:text-6xl font-light mb-8 max-w-2xl italic font-headline">Can't find the perfect fit?</h2>
          <p className="text-secondary max-w-xl mb-12 font-light leading-relaxed">Our architectural team offers limited custom modifications to any of our base floor plans to ensure your vision is realized without compromise.</p>
          <a className="text-primary border-b border-primary pb-1 font-label uppercase tracking-[0.1em] text-sm hover:opacity-70 transition-opacity" href="#">
            Contact Us Today
          </a>
        </div>
      </motion.section>
    </main>
  );
}
