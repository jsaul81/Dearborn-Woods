import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PencilRuler, Trees, MapPin, Hammer, ChevronLeft, ChevronRight } from 'lucide-react';

const designs = [
  { title: 'The Belknap', beds: '4 Bedrooms', baths: '3 Bathrooms', sqft: '2,770 SF', img: '/belknap-front.png' },
  { title: 'The Birchwood', beds: '3 Bedrooms', baths: '3 Bathrooms', sqft: '2,544 SF', img: '/birchwood-front.png' },
  { title: 'The Dearborn', beds: '3 Bedrooms, 1 Office', baths: '4 Bathrooms', sqft: '3,071 SF', img: '/dearborn-front.png' },
];

function DesignCarousel() {
  const [page, setPage] = useState(0);
  const perPage = 2;
  const totalPages = Math.ceil(designs.length / perPage);
  const visible = designs.slice(page * perPage, page * perPage + perPage);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <AnimatePresence mode="wait">
          {visible.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden bg-surface-container-high mb-8 relative rounded-xl">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src={plan.img}
                  alt={plan.title}
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-2xl font-light font-headline italic mb-2">{plan.title}</h3>
              <div className="flex gap-4 text-xs font-label uppercase tracking-widest text-secondary">
                <span>{plan.beds}</span>
                <span>{plan.baths}</span>
                <span>{plan.sqft}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="flex justify-center items-center gap-6 mt-12">
        <button
          onClick={() => setPage(p => p - 1)}
          disabled={page === 0}
          className="p-3 rounded-full border border-stone-300 disabled:opacity-20 hover:bg-stone-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="font-label text-xs tracking-widest text-secondary">
          {page + 1} / {totalPages}
        </span>
        <button
          onClick={() => setPage(p => p + 1)}
          disabled={page >= totalPages - 1}
          className="p-3 rounded-full border border-stone-300 disabled:opacity-20 hover:bg-stone-100 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <main>
      {/* Full-screen Hero */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-stone-900">
          <video
            className="w-full h-full object-cover opacity-60"
            src="/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img src="/logo.png" alt="Dearborn Woods" className="h-48 md:h-72 mx-auto" />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-label uppercase tracking-[0.4em] text-base text-white/80 mt-3 block"
          >
            A 13 New Custom Home Development<br />in Greenland, NH
          </motion.span>
        </div>
      </section>

      {/* The Vision */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="py-18 px-12 bg-surface"
      >
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <span className="font-label uppercase tracking-[0.2em] text-xs text-primary mb-6 block">The Development</span>
            <h2 className="text-5xl font-light leading-tight mb-8">The Vision of Seamless Living</h2>
            <p className="text-stone-600 font-body text-lg leading-relaxed mb-8">
              Dearborn Woods blends natural surroundings with thoughtfully designed homes. Each residence is carefully positioned to complement the landscape, preserving the beauty of the mature trees and wooded setting.
            </p>

          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 md:order-2 relative w-full"
          >
            <img 
              className="w-full h-auto object-contain rounded-xl"
              src="/site-plan.png"
              alt="Dearborn Woods Site Plan"
            />
            <div className="absolute -top-8 -right-16 bg-surface-container-highest p-8 w-64 hidden lg:block rounded-xl shadow-xl">
              <p className="font-headline italic text-xl">"Architecture should speak of its time and place, but yearn for timelessness."</p>
              <p className="font-label uppercase tracking-widest text-[10px] mt-4">— Frank Gehry</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* The Pillars */}
      <section className="py-20 px-10 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: PencilRuler, title: 'Modern Design', desc: 'Clean lines & intentional design, these homes embrace natural surroundings while redefining 21st-century luxury living.' },
              { icon: Trees, title: 'Natural Setting', desc: 'Integrated landscaping that preserves the mature woodlands and native flora of the region.' },
              { icon: MapPin, title: 'Prime Location', desc: "Secluded enough for absolute privacy, yet minutes from the city's finest dining and cultural hubs." },
              { icon: Hammer, title: 'Quality Craft', desc: 'Uncompromising standards in materials and construction, built to endure for generations.' },
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface p-12 hover:bg-white transition-colors duration-500 rounded-xl shadow-sm hover:shadow-md"
              >
                <pillar.icon className="w-10 h-10 text-primary mb-8 stroke-1" />
                <h3 className="text-xl font-headline mb-4">{pillar.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Blueprints */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="py-15 px-9 bg-surface"
      >
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="font-label uppercase tracking-[0.2em] text-xs text-primary mb-4 block">The Designs</span>
              <h2 className="text-5xl font-light italic">Home Designs</h2>
            </div>
            <Link to="/floor-plans" className="editorial-underline text-primary font-label uppercase tracking-[0.1em] text-xs">View all plans</Link>
          </div>
          <DesignCarousel />
        </div>
      </motion.section>

      {/* River Birch Builders */}
      <section className="py-24 px-12 bg-surface-container-highest">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-24 items-center">
          <div className="w-full md:w-3/5">
            <img
              className="w-full aspect-[3/2] object-cover rounded-xl shadow-2xl"
              src="/seacoastrephotography-33.jpg"
              alt="River Birch Builders custom home"
            />
          </div>
          <div className="w-full md:w-2/5">
            <span className="font-label uppercase tracking-[0.2em] text-xs text-primary mb-6 block">Craftsmanship</span>
            <h2 className="text-5xl font-light font-headline mb-8">River Birch Builders: Crafting Homes. Building Community</h2>
            <p className="text-stone-600 font-body text-lg leading-relaxed mb-12">
              At River Birch Builders our identity is forged through our unwavering dedication to quality craftsmanship and unmatched customer experiences. With a team of seasoned master builders and artisans, we bring decades of construction expertise to every project, constantly striving to surpass expectations. Our mission? Delivering impeccable craftsmanship and nurturing the connections that transform houses into homes.
            </p>
            <img src="/dearborn-header-sample.jpg" alt="Dearborn Woods" className="w-full mt-4" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-[#2D5D5B] text-white text-center">
        <div className="max-w-screen-lg mx-auto">
          <span className="font-label uppercase tracking-[0.4em] text-xs text-white/60 mb-8 block">Let's Connect Today</span>
          <h2 className="text-6xl md:text-8xl font-light font-headline italic leading-tight mb-8">
            Your New Home Awaits
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a
              href="mailto:info@dearbornwoodsnh.com"
              className="inline-block text-center bg-white text-primary px-12 py-5 font-label uppercase tracking-[0.2em] text-xs hover:bg-stone-100 transition-colors rounded-xl"
            >
              Schedule a Tour
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
