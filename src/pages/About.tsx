import { motion } from 'motion/react';

export default function About() {
  return (
    <main>
      <header className="pt-48 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="max-w-4xl">
          <p className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-6">The Collective</p>
          <h1 className="font-headline italic font-light text-6xl md:text-8xl leading-tight text-on-surface">
            The Hands Behind <br />
            <span className="md:pl-32">the Horizon</span>
          </h1>
        </div>
      </header>

      <section className="mb-48 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-7 relative">
            <img 
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-xl shadow-2xl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB78B-3PY41jm54Ke4vUZCtaDuS9wt0-YLstxbLSo2-Fze_bv1VT1_8q64g40TdBJPkPCn_KR460Ap33Eu1jrz7Omk0i8V8-CjBsT4T4D0G3LD7LXOGnMLNdQeK97G32YkRczsJLS-qSDPGCk8mr3cxG7WCRXGTTCZbiXcD3E_pVnDEyINKJYx9UUmYIFB2EY2dFOqhNMpD4vuzBApfJnF5ch0v2UbEWHYWEC0NfAoFCqZcISCu411lMhIkEwSFtYhmUqO4biduv6W" 
              alt="Builder portrait"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 bg-surface-container-high p-8 md:p-12 md:max-w-md rounded-xl shadow-xl">
              <h2 className="font-headline text-3xl mb-4 italic text-primary">River Birch Builders</h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p className="font-body text-lg">Guided by a philosophy of permanence, River Birch Builders treats every structure as a sculpture. Their approach balances structural integrity with an almost obsessive attention to the dialogue between wood and light.</p>
                <div className="pt-6 border-t border-outline-variant/30">
                  <p className="font-label text-[10px] uppercase tracking-widest text-primary mb-2">Credentials</p>
                  <ul className="font-body text-sm space-y-1 italic text-on-surface">
                    <li>AIA Master Craftsman 2022</li>
                    <li>Bespoke Timber Frame Specialist</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 pt-32 hidden md:block">
            <h3 className="font-headline text-5xl italic leading-tight text-on-surface-variant">The Architect <br />of Intent.</h3>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-32 mb-48">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline text-5xl mb-8">Material Intelligence</h2>
              <p className="font-body text-xl text-secondary leading-relaxed">We do not just source materials; we curate them. From reclaimed white oak to cold-pressed bronze accents, every element is chosen for its ability to age gracefully and speak to the heritage of the site.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Timber Soul', desc: 'Heritage-grade oak and cedar, harvested sustainably and cured for lasting stability.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZuac2f0yeJHWf_iKHukjKFfUzhFnwapV-Ci6g8ZPeYiSqLOY56Qvaf3Tjn19XCvtRmrRzZezciS8wES8O4Xh3W0Bba3I8_0nbNZLC2bsrlu9dj81wKylG_-gQz7o_ZpHBM6OSUsMD2oYUEJWT992vW_vVMuu3gV9W1AZJin-5B1iFjtPp0qs6Jtb4iNWRkIkAyZGeKMYygtzfr4xtSK5NQzCGTd4HU8Tli-FeY6re-xrdAJbmyL7UWzT37vpRjaA6nqoAX8w8IF1N' },
              { title: 'Forged Accents', desc: 'Bronze and brass fixtures that develop a unique patina over decades of interaction.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCR4unjlVe0Zg5KOXqkGjmy6dXUjcHh_zXs6N7q4GXDSEli23GDPtLUNvdw1g_ioj0YvNvYC9iSKyickLnWSyasaFSk35qlodfzUD2sUyvPpPK93jhQ6uGsMyNPjPA1jT2g2bmSSTLofRVexhBnjLpQ7Qw9B-VZCddL3DoOb1NLYTZJtLKF-JsA89IqegLMG42eTjN3yTaFvHgbCQb25AsNIz-i8aiu7uLea2eWMIInMlNVuVq3UzNR3PfxRdWnmiELp4XqnBIez6kk' },
              { title: 'Clarity of Light', desc: 'Custom-engineered glass walls designed to vanish, inviting the landscape indoors.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDujXKkFREI5h7AMk7PAP56WPiqWIhrHhs0kJscxSrnxUfB6ZpB4ArthLojE0hnVP7ujH7SPHiGRP7KPZ0y5BnDKk1rInTY1BS5W6V16GYnukKOTDEy-tSkWAF0HSBfwZPMEpjqavuFrt9rdbxKkYSkSy_6CA6fwBlfw9ovhqi1CWA6IAb5QEyqqI13_hXhzno6-bGRdSXPa4hrzfSmkT0mhaJ_bk0GXZWoi0cOnu6yrQ4vCPjEhr1hmUk3uLLdYnd-gNtBE1cGC_x9' },
            ].map((item, i) => (
              <div key={i} className={`group ${i === 1 ? 'md:mt-24' : ''}`}>
                <div className="overflow-hidden mb-6 rounded-xl shadow-md">
                  <img 
                    className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105" 
                    src={item.img} 
                    alt={item.title}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-headline text-2xl mb-2 italic">{item.title}</h4>
                <p className="font-body text-sm text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-48 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1">
            <p className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-4">Advisory</p>
            <h2 className="font-headline text-5xl mb-8 italic">The Curator of Experiences</h2>
            <div className="space-y-6 mb-12">
              <p className="font-body text-lg text-secondary leading-relaxed">Evelyn Saint-Claire doesn't just sell property; she facilitates legacies. With a deep understanding of the intersection between lifestyle and architecture, Evelyn serves as the bridge between your vision and the reality of Dearborn Woods.</p>
              <p className="font-body text-lg text-secondary leading-relaxed">Her curated approach ensures that every homeowner finds not just a house, but a sanctuary that resonates with their personal narrative.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 mb-12 py-8 border-y border-outline-variant/30">
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-primary mb-1">Rank</p>
                <p className="font-headline text-xl italic">Top 1% Global Luxury Advisor</p>
              </div>
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-primary mb-1">Expertise</p>
                <p className="font-headline text-xl italic">Legacy Estate Planning</p>
              </div>
            </div>
            <a className="font-body text-lg editorial-underline inline-block text-primary hover:text-primary-container transition-colors" href="mailto:evelyn@dearbornwoods.com">
              Begin a private conversation with Evelyn
            </a>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                className="w-full aspect-[3/4] object-cover rounded-xl shadow-2xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0YDlPYLI2J613i7rSGAWdyp0OzJkAqSdW7GHhWpoIauYsS0bKR8AdKPOMsUTPOzcqbkUJEhGxI4PTeNnGJzuRGX_Ky_dWKkpAcIT9GCvOCjthfEtWer6kGQynMPX87Jsyy541R3s5KfIhngxJdX0_ZxlZnUVe9gHWhWjtMjaSpinHFbmIsLOdbbaX8JaDphs4bwHpCh7BwObitz8rTTNRSx3VVvOWMrkC2yQph7E3eRh9pTtz9PBRYGWLK8BOjQ_n108otXkm9vtA" 
                alt="Advisor portrait"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-12 -left-12 w-48 h-48 border border-primary/20 hidden md:block rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-32 text-center text-on-primary">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-headline italic text-5xl md:text-7xl mb-12">Begin Your Journey</h2>
          <p className="font-body text-xl mb-16 opacity-80 max-w-2xl mx-auto">Availability at Dearborn Woods is intentionally limited to preserve the serenity of the site. Secure your place in the woods.</p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <button className="bg-on-primary text-primary px-12 py-5 text-sm uppercase tracking-[0.2em] font-label hover:bg-surface-container transition-all rounded-xl">
              Schedule Private Tour
            </button>
            <button className="border border-on-primary text-on-primary px-12 py-5 text-sm uppercase tracking-[0.2em] font-label hover:bg-on-primary hover:text-primary transition-all rounded-xl">
              Download Portfolio
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
