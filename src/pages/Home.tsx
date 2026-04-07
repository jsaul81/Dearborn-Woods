import { motion } from 'motion/react';
import { PencilRuler, Trees, MapPin, Hammer } from 'lucide-react';

export default function Home() {
  return (
    <main>
      {/* Full-screen Hero */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-stone-900">
          <img 
            className="w-full h-full object-cover opacity-60" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvBdzCAjKnJIHEb3suUdmvHZmjxMsOZzt6OWnY6xqHL_OGk6lYXAG3p-_mHLn-U4x930dKImz0fYCwOLKuuDjQC140MmZ0YlXpThQ4wqMgrYLENPIY6UvjHusJo9Z6f87Ps0prI1Ipik5WtS2GL6vn5xDFEPSxzSwC_LZwy8glGtKFUgBa8Yxqc9JR88-VUC6FKRNZZS-FFOvLaXrW8OJtkCzQ6nK0ufImrvCdJ89HrMZCm4kSv8cXXIfaSNpL_-CYVSGB5Yj0SaVB" 
            alt="Luxury estate at twilight"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-label uppercase tracking-[0.4em] text-xs text-white/80 mb-8 block"
          >
            Exclusivity in Every Detail
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl text-white font-light italic leading-tight"
          >
            A Legacy of Refinement
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12"
          >
            <button className="border border-white/30 backdrop-blur-md text-white px-10 py-4 hover:bg-white hover:text-stone-900 transition-all duration-500 font-label uppercase tracking-[0.2em] text-xs rounded-xl">
              Discover the Collection
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stat Bar */}
      <section className="bg-surface-container py-16 px-12">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-around items-center gap-12">
          <div className="text-center">
            <p className="text-primary text-4xl font-light font-headline italic mb-2">120</p>
            <p className="font-label uppercase tracking-[0.1em] text-xs text-secondary">Acres of Private Forest</p>
          </div>
          <div className="w-px h-12 bg-outline-variant hidden md:block"></div>
          <div className="text-center">
            <p className="text-primary text-4xl font-light font-headline italic mb-2">14</p>
            <p className="font-label uppercase tracking-[0.1em] text-xs text-secondary">Selected Estate Lots</p>
          </div>
          <div className="w-px h-12 bg-outline-variant hidden md:block"></div>
          <div className="text-center">
            <p className="text-primary text-4xl font-light font-headline italic mb-2">0.5</p>
            <p className="font-label uppercase tracking-[0.1em] text-xs text-secondary">Miles of River Frontage</p>
          </div>
          <div className="w-px h-12 bg-outline-variant hidden md:block"></div>
          <div className="text-center">
            <p className="text-primary text-4xl font-light font-headline italic mb-2">24/7</p>
            <p className="font-label uppercase tracking-[0.1em] text-xs text-secondary">Concierge Security</p>
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section className="py-32 px-12 bg-surface">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <span className="font-label uppercase tracking-[0.2em] text-xs text-primary mb-6 block">Our Philosophy</span>
            <h2 className="text-5xl font-light leading-tight mb-8">The Vision of Seamless Living</h2>
            <p className="text-stone-600 font-body text-lg leading-relaxed mb-8">
              Dearborn Woods represents a harmonious convergence of untamed nature and architectural precision. Each residence is masterfully positioned to respect the topography of the land, ensuring that the ancient oaks and whispering pines remain the true protagonists of your experience.
            </p>
            <a className="editorial-underline text-primary font-label uppercase tracking-[0.1em] text-xs py-2" href="#">Read our story</a>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 md:order-2 relative h-[500px]"
          >
            <img 
              className="w-full h-full object-cover rounded-xl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS3vF6jvTEwcOGukVwYPfj1TIiRnq-F-0qYtOCn6bVMjXcq3_CrE_EdqFNIuooMgJWvNMM47lPsPYPDdRuJYSAMz7sLpOTdjGYBGIKxC6LlvhwPZsVYlUKPIYU98IASF13P_MZILTiqvPlQLR2Xwf-Z6HHpQcQAIQRAjb4OgcPy5P61Ido6OdSNi4xAXElMmkpj_RchUk60dyB_ylJWglUgRRW45VPt73Ya1PftnYjezwOqLViTuu-t13c0fhLPWSHbtiO6MGIDOc7" 
              alt="Architectural detail"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 bg-surface-container-highest p-8 w-64 hidden lg:block rounded-xl shadow-xl">
              <p className="font-headline italic text-xl">"Architecture is the art of how we waste space."</p>
              <p className="font-label uppercase tracking-widest text-[10px] mt-4">— Philip Johnson</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Pillars */}
      <section className="py-32 px-12 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-24 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl italic font-light mb-4">Foundations of Excellence</h2>
            <p className="text-secondary font-body">Four fundamental principles that guide every decision at Dearborn Woods.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: PencilRuler, title: 'Modern Design', desc: 'Clean lines and expansive glass that invites the outside in, redefining luxury for the 21st century.' },
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
      <section className="py-32 px-12 bg-surface">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="font-label uppercase tracking-[0.2em] text-xs text-primary mb-4 block">The Collection</span>
              <h2 className="text-5xl font-light italic">Architectural Blueprints</h2>
            </div>
            <a className="editorial-underline text-primary font-label uppercase tracking-[0.1em] text-xs" href="#">View all plans</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'The Birch Estate', beds: '5 Beds', baths: '4.5 Baths', sqft: '5,200 SQ FT', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAktG15JWdEqZ7x1UkHLZolLtW_OEwrfSWfPYGelz4B5vQLPszp7b5WQBKZliOOAJkPThmjvinJihrCG4fs4eBgZDVd8gtyNXTjgu_vzbp4ub9wC_ta3jJdGO43K7Eq18lHhic2uJZCNQK2lAsXtoRXI-L0qjAeZwxp40Z24bfOpKIUdYEQWmuX9mprRG3ocHaCjnuo6f4Rr7fORzBn4w4vSg95mZvOaTjdWZPqMWf5CmGGPcjEToH-amkarBaq2eGs4sBymRhYjhD' },
              { title: 'The River Run', beds: '4 Beds', baths: '3.5 Baths', sqft: '4,800 SQ FT', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuEWE-PeDURbsqDfZxro1w6csCzKiaINZhMiKio1fuYWG-uN9tMvXspLbZPoNrgY6yZJAeTIxgp91K5r_h7PDGTjGmka0zTjb2yH8mcPNg05lvxH82EK9ZcUQWAQ5VJQtJLzXmwAIHqsSIp7ewjZo35yBwXnqRSfoUatpxwxCCwZ78TgOGAXP1di5DJ3Vi6FtOp1mAR6V3Xov5ywXSgk28yVnhElvgmKIo-1AIwgbh150HZMXvoDWP5hv2yIKMmdIVvN0QmBGNqEl7' },
              { title: 'The Shadow Oak', beds: '6 Beds', baths: '5.5 Baths', sqft: '6,400 SQ FT', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALL1rvvI8VwUyVtrU0IebETbV12IgmJ9_w8L2Y6OdU5DvAsc9PbEQh0rrb_y1donY0c2ZrHBHkcSG-sAcRZfv9zTjgxvvlteiYV3EJncfZUF8LJgJg7YM-eOjxicrRIlAcrZEoKE0_wkEWpJLI9MJCMVnlR1VgmjUmoTbRxAW3_SDYXIba6jw1i0kv3cN6YST3Er-jbv1nUI38CqDOTL33QjlKTztCtmnxvNW2DV43V9U8ObZ2JBkdc8zedjcnaEcoKFHIw82MAneB' },
            ].map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden bg-surface-container-high mb-8 relative rounded-xl">
                  <img 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    src={plan.img} 
                    alt={plan.title}
                    referrerPolicy="no-referrer"
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
          </div>
        </div>
      </section>

      {/* River Birch Builders */}
      <section className="py-32 px-12 bg-surface-container-highest">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-24 items-center">
          <div className="w-full md:w-1/2">
            <img 
              className="w-full aspect-[4/5] object-cover rounded-xl shadow-2xl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu7UfuLDZfJzlI6F7hJU8698NWMFrg0qZtW4fyLiAHEzgiHkbeteJs9tm1ELexuSqKJgbvb9Awf5rlsUOqQHrZD44sBm4U1boQT5EJ2MivGdlQKZOm0jxndx0Z6xSgMT95C13TZWR7bblRXsDkyCLDNLNPqKJmsHnlfJiNG5rC-g5tJYIHkn7R5s7CLbpNtEiv6CrGlE64xbIuY-gHfc0U7UrzatKZ4U17DGHpjFVs8lHLt8YXzabwZxpDUWMqk7NQNIQcrpKy0qXX" 
              alt="Architectural drawing"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full md:w-1/2">
            <span className="font-label uppercase tracking-[0.2em] text-xs text-primary mb-6 block">Master Builders</span>
            <h2 className="text-5xl font-light font-headline mb-8">River Birch Builders</h2>
            <p className="text-stone-600 font-body text-lg leading-relaxed mb-12">
              For over three decades, River Birch Builders has set the benchmark for luxury residential construction. Our commitment to artisanal craftsmanship and innovative building technology ensures each home in Dearborn Woods is a unique masterpiece.
            </p>
            <div className="flex gap-16">
              <div>
                <p className="text-primary text-3xl font-light font-headline italic mb-1">35+</p>
                <p className="font-label uppercase tracking-tighter text-[10px] text-secondary">Years of Experience</p>
              </div>
              <div>
                <p className="text-primary text-3xl font-light font-headline italic mb-1">150</p>
                <p className="font-label uppercase tracking-tighter text-[10px] text-secondary">Masterpieces Built</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-12 bg-[#705838] text-white text-center">
        <div className="max-w-screen-lg mx-auto">
          <span className="font-label uppercase tracking-[0.4em] text-xs text-white/60 mb-8 block">Your Journey Begins</span>
          <h2 className="text-6xl md:text-8xl font-light font-headline italic leading-tight mb-16">
            Your Sanctuary Awaits
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <button className="bg-white text-primary px-12 py-5 font-label uppercase tracking-[0.2em] text-xs hover:bg-stone-100 transition-colors rounded-xl">
              Schedule a Tour
            </button>
            <button className="border border-white/40 text-white px-12 py-5 font-label uppercase tracking-[0.2em] text-xs hover:bg-white/10 transition-colors rounded-xl">
              Download Digital Brochure
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
