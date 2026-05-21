import { motion } from 'motion/react';
import { MapPin, Phone, Mail, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!FORMSPREE_ENDPOINT) {
      setErrorMessage('Form is not configured yet. Please email info@dearbornwoodsnh.com directly.');
      setStatus('error');
      return;
    }
    setStatus('submitting');
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(data.error || 'Something went wrong. Please try again or email us directly.');
        setStatus('error');
      }
    } catch {
      setErrorMessage('Network error. Please try again or email us directly.');
      setStatus('error');
    }
  };

  return (
    <main className="pt-32 pb-24">
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-20">
        <div className="max-w-3xl">
          <p className="text-primary font-label uppercase tracking-[0.2em] text-xs mb-6">Connect with us</p>
          <h1 className="text-4xl md:text-6xl leading-tight font-light italic font-headline text-on-surface">Let's chat about your new home!</h1>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-stretch">
        <div className="lg:col-span-7 bg-surface-container-low p-8 md:p-12 lg:p-20 rounded-xl shadow-sm">
          {status !== 'success' ? (
            <form className="space-y-12" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative">
                  <label className="block text-xs uppercase tracking-widest text-secondary mb-2 font-label" htmlFor="name">Full Name</label>
                  <input id="name" name="name" className="w-full bg-transparent border-0 border-b border-outline-variant py-4 focus:ring-0 focus:border-primary placeholder-stone-300 transition-colors" placeholder="John Doe" type="text" required />
                </div>
                <div className="relative">
                  <label className="block text-xs uppercase tracking-widest text-secondary mb-2 font-label" htmlFor="email">Email Address</label>
                  <input id="email" name="email" className="w-full bg-transparent border-0 border-b border-outline-variant py-4 focus:ring-0 focus:border-primary placeholder-stone-300 transition-colors" placeholder="john@example.com" type="email" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative">
                  <label className="block text-xs uppercase tracking-widest text-secondary mb-2 font-label" htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" className="w-full bg-transparent border-0 border-b border-outline-variant py-4 focus:ring-0 focus:border-primary placeholder-stone-300 transition-colors" placeholder="+1 (555) 000-0000" type="tel" />
                </div>
                <div className="relative">
                  <label className="block text-xs uppercase tracking-widest text-secondary mb-2 font-label" htmlFor="interest">Interest Level</label>
                  <select id="interest" name="interest" className="w-full bg-transparent border-0 border-b border-outline-variant py-4 focus:ring-0 focus:border-primary appearance-none transition-colors">
                    <option>General Inquiry</option>
                    <option>Ready to Purchase</option>
                    <option>Looking for 2026</option>
                  </select>
                </div>
              </div>
              <div className="relative">
                <label className="block text-xs uppercase tracking-widest text-secondary mb-2 font-label" htmlFor="message">Message</label>
                <textarea id="message" name="message" className="w-full bg-transparent border-0 border-b border-outline-variant py-4 focus:ring-0 focus:border-primary placeholder-stone-300 transition-colors resize-none" placeholder="How can we assist you?" rows={4}></textarea>
              </div>
              {status === 'error' && (
                <div className="flex items-start gap-3 p-4 bg-error-container/30 border-l-4 border-error rounded-lg">
                  <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-on-surface">{errorMessage}</p>
                </div>
              )}
              <div>
                <button disabled={status === 'submitting'} className="group flex items-center gap-4 bg-primary text-on-primary px-12 py-5 uppercase tracking-widest text-sm hover:bg-primary-container transition-all rounded-xl disabled:opacity-60 disabled:cursor-not-allowed" type="submit">
                  {status === 'submitting' ? 'Sending…' : 'Submit Inquiry'}
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
                <p className="text-secondary text-sm">We&rsquo;ll reach out to you shortly.</p>
              </div>
            </motion.div>
          )}
        </div>

        <div className="lg:col-span-5 flex flex-col gap-20 h-full">
          <div className="flex flex-col gap-12 flex-1">
            <div>
              <h3 className="text-3xl italic mb-8 font-headline">Dearborn Woods</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-secondary mb-1">Address</p>
                    <p className="text-lg">Wentworth Drive<br />Greenland, NH 03840</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-secondary mb-1">Phone</p>
                    <a href="tel:6032054463" className="text-lg hover:text-primary transition-colors">603-205-4463</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-secondary mb-1">Email</p>
                    <a href="mailto:info@dearbornwoodsnh.com" className="text-lg underline underline-offset-4 decoration-outline-variant hover:text-primary hover:decoration-primary transition-colors">info@dearbornwoodsnh.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex-1 min-h-[300px] relative">
              <img
                className="absolute inset-0 w-full h-full object-contain object-left hover:opacity-90 transition-opacity duration-700"
                src="/site-plan.png"
                alt="Site map"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="h-[614px] w-full relative overflow-hidden rounded-xl shadow-2xl">
          <img
            className="w-full h-full object-cover"
            src="/belknap-front.png"
            alt="Belknap home exterior"
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
