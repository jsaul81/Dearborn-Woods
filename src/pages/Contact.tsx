import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-32 pb-24">
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-20">
        <div className="max-w-3xl">
          <p className="text-primary font-label uppercase tracking-[0.2em] text-xs mb-6">Connect with us</p>
          <h1 className="text-6xl md:text-8xl leading-[1.1] text-on-surface italic font-headline">Begin your legacy here</h1>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
        <div className="lg:col-span-7 bg-surface-container-low p-8 md:p-12 lg:p-20 rounded-xl shadow-sm">
          {!submitted ? (
            <form className="space-y-12" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative">
                  <label className="block text-xs uppercase tracking-widest text-secondary mb-2 font-label">Full Name</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant py-4 focus:ring-0 focus:border-primary placeholder-stone-300 transition-colors" placeholder="John Doe" type="text" required />
                </div>
                <div className="relative">
                  <label className="block text-xs uppercase tracking-widest text-secondary mb-2 font-label">Email Address</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant py-4 focus:ring-0 focus:border-primary placeholder-stone-300 transition-colors" placeholder="john@example.com" type="email" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative">
                  <label className="block text-xs uppercase tracking-widest text-secondary mb-2 font-label">Phone Number</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant py-4 focus:ring-0 focus:border-primary placeholder-stone-300 transition-colors" placeholder="+1 (555) 000-0000" type="tel" />
                </div>
                <div className="relative">
                  <label className="block text-xs uppercase tracking-widest text-secondary mb-2 font-label">Interest Level</label>
                  <select className="w-full bg-transparent border-0 border-b border-outline-variant py-4 focus:ring-0 focus:border-primary appearance-none transition-colors">
                    <option>General Inquiry</option>
                    <option>Ready to Purchase</option>
                    <option>Looking for 2025</option>
                  </select>
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs uppercase tracking-widest text-secondary mb-2 font-label">Available Lots</label>
                <select className="w-full bg-transparent border-0 border-b border-outline-variant py-4 focus:ring-0 focus:border-primary h-32 transition-colors" multiple>
                  <option>Lot 12 - The Highland</option>
                  <option>Lot 15 - Creek Side</option>
                  <option>Lot 22 - Sunset Ridge</option>
                  <option>Lot 08 - The Grove</option>
                </select>
                <p className="text-[10px] text-stone-400 mt-2 italic">Hold Ctrl/Cmd to select multiple lots</p>
              </div>
              <div className="relative">
                <label className="block text-xs uppercase tracking-widest text-secondary mb-2 font-label">Message</label>
                <textarea className="w-full bg-transparent border-0 border-b border-outline-variant py-4 focus:ring-0 focus:border-primary placeholder-stone-300 transition-colors resize-none" placeholder="How can our curators assist you?" rows={4}></textarea>
              </div>
              <div>
                <button className="group flex items-center gap-4 bg-primary text-on-primary px-12 py-5 uppercase tracking-widest text-sm hover:bg-primary-container transition-all rounded-xl" type="submit">
                  Submit Inquiry
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 bg-surface-container-highest flex items-center gap-6 border-l-4 border-primary rounded-xl"
            >
              <CheckCircle className="w-10 h-10 text-primary" />
              <div>
                <p className="font-headline text-2xl italic">Thank you for your interest.</p>
                <p className="text-secondary text-sm">A legacy specialist will reach out to you within 24 hours.</p>
              </div>
            </motion.div>
          )}
        </div>

        <div className="lg:col-span-5 space-y-20">
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl italic mb-8 font-headline">The Enclave</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-secondary mb-1">Address</p>
                    <p className="text-lg">1400 Dearborn Woods Dr.<br />Aspen Oaks, MI 48124</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-secondary mb-1">Phone</p>
                    <p className="text-lg">800.555.WOOD</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-secondary mb-1">Email</p>
                    <p className="text-lg underline underline-offset-4 decoration-outline-variant">hello@dearborn.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-square w-full bg-surface-container relative overflow-hidden rounded-xl shadow-inner">
              <img 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-opacity duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkO183EW0FHy9iPBFm2cJBe-Uq2mz7qRo-WvoYLo2BG_7g-pn9h3viY6n-1_OtDoXOACzsUF58LPqytiE_ywqd-KrVr6X2X4pbVYSae4Llx1_LqDswgXwEJeLbphcSsBEFMMXD-a5rT4SJ_DP3Ye7IFhskjZ-3v80vX6ZDhMm4z6saXrLEqZilp1AjeV0D0GcWfWy4ScYi6HkjnCm-QCEhoHuc-0mDFAcjE6iOlSlc7vw8dpht9pOErcEVNIr_HD8E_NE12cybKSVd" 
                alt="Site map"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary text-on-primary w-12 h-12 flex items-center justify-center shadow-2xl rounded-full">
                  <MapPin className="w-6 h-6 fill-current" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-secondary p-12 text-white rounded-xl shadow-xl">
            <p className="text-[10px] uppercase tracking-[0.3em] mb-4 text-primary-fixed">By Appointment</p>
            <h3 className="text-3xl italic mb-6 font-headline">Visit our On-Site Design Studio</h3>
            <p className="font-body text-stone-300 leading-relaxed mb-8">Experience our curated finishes, texture palettes, and architectural models in person. Our design consultants are available for private walkthroughs.</p>
            <a className="inline-flex items-center gap-3 border-b border-primary-fixed text-primary-fixed pb-1 hover:text-white hover:border-white transition-all text-sm uppercase tracking-widest" href="#">
              Schedule Tour
              <Calendar className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="mt-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="h-[614px] w-full relative overflow-hidden rounded-xl shadow-2xl">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_4CdFuuNqF6R3IIVL_G8ktwqiO0dwJFu7iWBhigy2zyeFeILNCkgvy9tssfGD0KtjtmfmV-V3an10eRCvU8j9zeB7vxjztkqH6YXYVZkpafqhRLp4TWby41QZvz5uSw_drq82QIvWRYQwwz66ghE4bCzC_mAYNaWtgxqZpMz4SePC4Ok9o6W2ZratP8izc3fOjJY_afGmq4PUvv_caMaHfGrAROfxLr7ipm4ytPlvxUFlkeEmNl9jxWr-HrKMFGQoja4pbBejmVlO" 
            alt="Estate in forest"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-12 right-12 text-white text-right max-w-md">
            <p className="font-headline text-3xl italic">"Architecture should speak of its time and place, but yearn for timelessness."</p>
          </div>
        </div>
      </section>
    </main>
  );
}
