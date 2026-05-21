import { motion } from 'motion/react';

export default function About() {
  return (
    <main>
      {/* Hero */}
      <header className="pt-40 pb-16 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="max-w-4xl">
          <p className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-6">About the Builder</p>
          <img
            src="/riverbirch-logo.png"
            alt="River Birch Builders"
            className="h-20 md:h-28 w-auto -ml-2"
          />
          <p className="font-headline italic text-xl md:text-2xl text-secondary mt-6">
            Crafting Homes. Building Community.
          </p>
        </div>
      </header>

      {/* Mission + Team Photo */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 md:px-12 pb-20 max-w-screen-2xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              className="w-full aspect-[4/3] object-cover rounded-xl shadow-2xl"
              src="/team-photo-2.jpg"
              alt="River Birch Builders at Work"
            />
          </div>
          <div>
            <p className="font-body text-lg text-secondary leading-relaxed mb-6">
              At River Birch Builders, our identity is forged through our unwavering dedication to quality craftsmanship and unmatched customer experiences.
            </p>
            <p className="font-body text-lg text-secondary leading-relaxed mb-6">
              With a team of seasoned master builders and artisans, we bring decades of construction expertise to every project, constantly striving to surpass expectations.
            </p>
            <p className="font-body text-lg text-secondary leading-relaxed mb-8">
              Our mission? Delivering impeccable craftsmanship and nurturing the connections that transform houses into homes.
            </p>
            <div className="border-t border-outline-variant/40 pt-6 space-y-3">
              <a href="tel:6034188644" className="block font-body text-sm text-secondary hover:text-primary transition-colors">
                603-418-8644
              </a>
              <a href="mailto:office@riverbirchbuilders.com" className="block font-body text-sm text-secondary hover:text-primary transition-colors">
                office@riverbirchbuilders.com
              </a>
              <a href="https://riverbirchbuilders.com" target="_blank" rel="noopener noreferrer" className="block font-body text-sm text-secondary hover:text-primary transition-colors">
                riverbirchbuilders.com
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Process */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-surface-container-low py-20"
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="md:col-span-7">
              <p className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4">Our Process</p>
              <h2 className="font-headline text-3xl italic mb-8">Built With Intention</h2>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Consultation', desc: 'We listen to your vision, understand your lifestyle, and align on goals for your new home.' },
                  { step: '02', title: 'Design & Planning', desc: 'Our team works closely with architects to create a home that reflects your personality and needs.' },
                  { step: '03', title: 'Construction', desc: 'Expert craftsmanship at every stage, with transparent communication and meticulous attention to detail.' },
                  { step: '04', title: 'Final Walkthrough', desc: 'We ensure every detail meets our exacting standards before handing you the keys to your new home.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="font-headline italic text-2xl text-primary/40">{item.step}</span>
                    <div>
                      <h3 className="font-headline text-lg mb-1">{item.title}</h3>
                      <p className="font-body text-sm text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-5">
              <img
                className="w-full max-w-xs md:max-w-sm mx-auto aspect-[3/4] object-cover rounded-xl shadow-2xl"
                src="/process-section.jpg"
                alt="River Birch Builders Process"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* About Proulx Real Estate */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 md:px-12 py-24 max-w-screen-2xl mx-auto"
      >
        <div className="mb-16 max-w-4xl">
          <p className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-6">About the Brokerage</p>
          <img
            src="/proulx-logo-dark.png"
            alt="Proulx Real Estate"
            className="h-16 md:h-20 w-auto -ml-1"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-7 lg:pt-2">
            <p className="font-body text-lg text-secondary leading-relaxed mb-8">
              At Proulx Real Estate our top priority is providing an exceptional experience for our clients. We take a personal, creative approach to real estate knowing that every client has their own individual needs, and every home has its distinctive character. All of our agents live within the Seacoast community and we're consistently in the top 1% of agents in the NH Seacoast. With 1,000+ lifetime sales, we have both vast industry and local knowledge.
            </p>
            <div className="lg:hidden mb-8">
              <p className="font-headline italic font-light text-3xl md:text-4xl leading-[1.2] text-primary">
                &ldquo;Real estate is a fascinating mix of art and science that we strive to master for each and every one of our clients.&rdquo;
              </p>
              <p className="font-label text-[10px] uppercase tracking-[0.25em] text-secondary mt-8">— Proulx Real Estate</p>
            </div>
            <div className="border-t border-outline-variant/40 pt-6 space-y-3">
              <a href="tel:6032051488" className="block font-body text-sm text-secondary hover:text-primary transition-colors">
                603-205-1488
              </a>
              <p className="font-body text-sm text-secondary">
                118 Pleasant Street, Portsmouth, NH 03801
              </p>
              <a href="https://www.proulxrealestate.com" target="_blank" rel="noopener noreferrer" className="block font-body text-sm text-secondary hover:text-primary transition-colors">
                proulxrealestate.com
              </a>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-5 lg:pl-12 lg:border-l border-outline-variant/40">
            <p className="font-headline italic font-light text-3xl md:text-4xl leading-[1.2] text-primary">
              &ldquo;Real estate is a fascinating mix of art and science that we strive to master for each and every one of our clients.&rdquo;
            </p>
            <p className="font-label text-[10px] uppercase tracking-[0.25em] text-secondary mt-8">— Proulx Real Estate</p>
          </div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-primary py-20 text-center text-on-primary"
      >
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="font-headline italic text-4xl md:text-5xl mb-6">Get In Touch</h2>
          <p className="font-body text-lg mb-10 opacity-80">Ready to start building your dream home at Dearborn Woods? Reach out to the River Birch Builders team today.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
            <a href="mailto:office@riverbirchbuilders.com" className="bg-on-primary text-primary px-10 py-4 text-sm uppercase tracking-[0.2em] font-label hover:bg-surface-container transition-all rounded-xl">
              Email Us
            </a>
            <a href="tel:6032054463" className="border border-on-primary text-on-primary px-10 py-4 text-sm uppercase tracking-[0.2em] font-label hover:bg-on-primary hover:text-primary transition-all rounded-xl">
              Call 603-205-4463
            </a>
          </div>
          <p className="font-body text-sm opacity-60">1039 Islington St STE 11, Portsmouth NH 03801</p>
        </div>
      </motion.section>
    </main>
  );
}
