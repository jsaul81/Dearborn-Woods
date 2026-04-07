import { motion } from 'motion/react';
import { ArrowRight, Box } from 'lucide-react';

export default function FloorPlans() {
  const models = [
    {
      name: 'The Aster',
      desc: 'A masterwork of spatial design, The Aster emphasizes vertical volume and seamless transitions between curated indoor living and private landscape.',
      area: '3,850 Sq Ft',
      beds: '4 En-suites',
      baths: '4.5 Bathrooms',
      parking: '3 Car Tandem',
      ceilings: "12' Vaulted",
      mainImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdP96Co-8xE-3yUGRF7i58W1yRpGCzsPd2YFH4WQyPzpvhvj23FLdWqPFBa9dj7pc6_y0suOnadEVuLF-1aihArIuvD3f9lpDU3DbnbjAZms8iZZsiMjDs-x1psGPzwHejwVV3P-w8A3rCvKmZWXLhCfbW4ox1M3DudI1tosDpouHZ6PX2nL-lue9xfqrlTAraGONzMRCSouc4LBllq6WWHCWqYcxjQCXp5DH42q9hSlo9EbajkdBoFPQibIJxi33LkxiHX70DB0MF',
      gallery: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA_FYCE3e4slQgwUeXTeE_aV15kVyPy6cFhYQ-ViHXRmfKAh0vcbqrJOCfwt1z4l_s3u6hggxFkC9HsDTH9RRM_QMGnLj_JtZLT2GNwC1TRMCk2S0mw--yJgDhHmtVORStWYDTGkyo2SC_Ev-P_a5BuvJIoEEvCVXEkFXc7pfJdkRrDzSb3W5AJkvWzikGMF-Y07vLHdKJ_QZSlN5XUskANnJ3oFI-fRCqrk-Hi5-IL4Mx2KzZNNQRXBSHHhXdr4nmpdI8zsMDeslvx',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCLz-goUZav8RJimSW0At9-UMH80m-gq5jQXY_Xqa_PFPZaPyeYwgMBfCzrZxVfg1YyeqAoQZaiaFig5GB9ja0G3r2pHW-Fu-YXU3-TdKQmrc_L1b0HKTYmDuy2Jclh8Hpy1ZEBOwaSiQnbLvZ84gdzQPBAFwOtJGbkWWA_PAOl3z1rinWJY5jy9u0nYJxJI2Vta7dAznuLNkJ52bBPbMYkyshatUk74yMW4IlAbV_hq3vLMcp3jC_Hm8clu2gOvfip-iDYAgmxdXae',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAAuwIODKe_qP9hZpPbIWNL1hXA3B8_zwXLyv-cHxy_zK4IGFQohHS7DMXHW65GmAUzWLnZA5h_UFr3r9ST3gLcioy4k7JmFgopLAjq92pghIbXdFCe2Cqe3AGTv_CRIRs-buabS--hOv7WBduxhLAnEuMDjpbQkH1k1fASUWxTMqu0eSGWNPUfju-DQH6CBoepOsULXuPfISaOMLzf5KJpDbw0oC8OhuAMlHJZ_OfaAzEt3pDDzgAgUle_-uIEoD3lsvRk7ckq95sw'
      ]
    },
    {
      name: 'The Dahlia',
      desc: 'Defined by its expansive footprint and panoramic glass facades, The Dahlia is our most ambitious offering, designed for large-scale entertaining and quiet seclusion.',
      area: '4,200 Sq Ft',
      beds: '5 Bedrooms',
      baths: '5 Bathrooms',
      parking: '3 Car Garage',
      ceilings: 'Double Height',
      mainImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXpnmRBjjL5Pn2lUsV29ZV8zIaJPtFaC87lP8RVFx91hUubNqdYQ_HYs1QRq1MxjmfiXzQa_84CtTJmj4RkOBVDCt6LVSA03rW7iN3I1IlUMb6p-vQq3RKCZhK8MNQF9UMU3iyFEAsr4EeC5YQB36ocH1-qqE6CPWb8Kp06Y1wyaGvkEaNUktlSvNkAm8bI9ADNwDyXqQqkKQwp1OXFAYUw231JGuc3V-LkQAWbuYwO1Rg3hrvJ6ihK5Ox2eExTqe-EW5tU0xA9JP6',
      gallery: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAQDHDiYizXTar_WXprpYpn0R-x43xs1Je55tK9cirvt8NsAQJiNuys8Jzha1_bj4BUB5jt5jfp3ZpysaRAbZPkEovYwXL-Fz6cqEW0KgvtIZkaIXs6ioL-YyikIEw2iQ5FR5kDmd0MJTWls1h_chn12D1XTAWPpZDtUWHnjuwdnbMvkj01hhTu8eZpOa5kCT_ekFYm4MmtDn3XP4GBJEKwuH6J_omZP2Pd1G2UCY5j44Ho-0RsudXAlsA96yuSlNtjtPnRkRUMQhHp',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDrGI3nF-0hLLPiMBRyNXpPQIEZoRYcsyn20pQD_qsHwwsSN06E1FXTR33JxqZM78u2eIQINKcVfg5Kjeu9y6TLSD1IaruNKyl-kFYTBynlr6qr_Qr79DlN3hyipyMDI_BfmeNfBKd0IzPUlNUXsx5kxoI_83XluZEkNpoGO5mNPMXOir2pylPBnpzKbyTHOo0YSW4L685f5rsf4ZPDVlKMAiFY_bDyF4Qu6W30l_T_7_vQVXc8kJQdPo9rKW9nX_JjurY28qd13Y4s',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBsciHogr1cDtWoChmTWxJlDwnccgciV9Y868WafwGK1PKnYNfb99rtAPqZhkyNrcYFTnzbgOcisZ6ex-Fhv8pMlsi6tMY1fOEqdm-JLieRnqWzsxfzTcrTmDg4gFUaD92FT969RIEtINs3BRR_Si49osIJZn6IZ8dguvQAUaNUa4OlfoPKftlkPhvQZ6iO5apqYOSrUe_AtW0MpwViM7qJtU2TGVxrbUVj0axSZ0r2iux6rmohocw2ochrZitmebkVLj6ruruzzUMc'
      ]
    }
  ];

  return (
    <main className="pt-32 pb-24">
      <section className="px-6 md:px-12 mb-20 max-w-screen-2xl mx-auto">
        <span className="font-label uppercase tracking-[0.2em] text-xs text-primary mb-4 block">Residential Selection</span>
        <h1 className="text-6xl md:text-8xl font-light leading-tight italic font-headline">The Elevated Collections</h1>
      </section>

      {models.map((model, index) => (
        <section key={model.name} className="px-6 md:px-12 mb-40 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className={`lg:col-span-8 space-y-8 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div className="aspect-[16/9] overflow-hidden bg-surface-container rounded-xl shadow-lg">
                <img 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
                  src={model.mainImg} 
                  alt={model.name}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="grid grid-cols-3 gap-6">
                {model.gallery.map((img, i) => (
                  <div key={i} className="aspect-[4/3] overflow-hidden bg-surface-container rounded-xl border border-outline-variant/20">
                    <img 
                      className={`w-full h-full object-cover rounded-xl ${i > 0 ? 'opacity-60' : ''}`} 
                      src={img} 
                      alt={`${model.name} detail ${i}`}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className={`lg:col-span-4 flex flex-col justify-between py-2 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
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
                    { label: 'Parking', value: model.parking },
                    { label: 'Ceilings', value: model.ceilings },
                  ].map((spec) => (
                    <div key={spec.label} className="flex justify-between items-end border-b border-outline-variant/30 pb-2">
                      <span className="font-label uppercase tracking-wider text-[10px] text-secondary">{spec.label}</span>
                      <span className="font-headline italic text-xl">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <button className="w-full bg-primary text-on-primary py-5 font-label uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-primary-container transition-colors rounded-xl">
                  Request Digital Brochure
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full bg-transparent border border-primary text-primary py-5 font-label uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-surface-container transition-colors rounded-xl">
                  Virtual Walkthrough
                  <Box className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          {index < models.length - 1 && (
            <div className="h-px w-full bg-surface-container-highest mt-40"></div>
          )}
        </section>
      ))}

      <section className="bg-surface-container-low py-32">
        <div className="px-6 md:px-12 max-w-screen-2xl mx-auto flex flex-col items-center text-center">
          <span className="font-label uppercase tracking-[0.2em] text-xs text-primary mb-6 block">Custom Solutions</span>
          <h2 className="text-5xl md:text-6xl font-light mb-8 max-w-2xl italic font-headline">Can't find the perfect fit?</h2>
          <p className="text-secondary max-w-xl mb-12 font-light leading-relaxed">Our architectural team offers limited custom modifications to any of our base floor plans to ensure your vision is realized without compromise.</p>
          <a className="text-primary border-b border-primary pb-1 font-label uppercase tracking-[0.1em] text-sm hover:opacity-70 transition-opacity" href="#">
            Speak with a Consultant
          </a>
        </div>
      </section>
    </main>
  );
}
