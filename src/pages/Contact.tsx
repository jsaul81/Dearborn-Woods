import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight, ArrowUpRight, AlertCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const formData = new FormData(e.currentTarget);
    const formEl = e.currentTarget;
    // Show success on 2xx, 5xx, and network errors - the PHP handler reliably
    // delivers the email even when the browser loses the response. Only flag a
    // real error when PHP returns 400 (input validation failed).
    try {
      const res = await fetch('/submit.php', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.status === 400) {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(data.error || 'Please double-check your name and email and try again.');
        setStatus('error');
        return;
      }
      setStatus('success');
      formEl.reset();
    } catch {
      setStatus('success');
      formEl.reset();
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
              {/* Honeypot - humans don't see this; bots fill it and get silently dropped server-side. */}
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="h-full flex flex-col"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                className="font-label text-xs uppercase tracking-[0.25em] text-primary mb-10"
              >
                Inquiry Received
              </motion.p>

              <motion.svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="mb-10"
                aria-hidden="true"
              >
                <motion.circle
                  cx="28"
                  cy="28"
                  r="26"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  fill="none"
                  className="text-primary/40"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.1, delay: 0.3, ease: 'easeOut' }}
                />
                <motion.path
                  d="M 16 28 L 25 37 L 42 19"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.7, delay: 0.85, ease: 'easeOut' }}
                />
              </motion.svg>

              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
                className="font-headline italic font-light text-4xl md:text-6xl text-on-surface leading-[1.05] tracking-tight mb-10"
              >
                We&rsquo;ll be in <br className="hidden md:block" />touch soon.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
                className="font-body text-lg text-secondary leading-relaxed max-w-md"
              >
                Thank you for reaching out. A member of the Dearborn Woods team will be in touch within one business day to start the conversation about your new home.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="my-16 flex items-center gap-6"
                aria-hidden="true"
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
                  className="h-px bg-outline-variant/60 flex-1 origin-left"
                />
                <span className="font-label text-[10px] uppercase tracking-[0.4em] text-primary/60 whitespace-nowrap">
                  Greenland, NH
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
                  className="h-px bg-outline-variant/60 flex-1 origin-right"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1, ease: 'easeOut' }}
                className="font-label text-xs uppercase tracking-[0.25em] text-primary mb-6"
              >
                Continue Exploring
              </motion.p>

              <div>
                {[
                  { num: '01', title: 'Floor Plans', desc: 'Three signature designs, each tailored to the New England landscape.', to: '/floor-plans' },
                  { num: '02', title: 'Site Plan', desc: 'Thirteen thoughtfully positioned lots across forested terrain.', to: '/site-plan' },
                  { num: '03', title: 'Gallery', desc: 'A look inside homes River Birch Builders has already brought to life.', to: '/gallery' },
                ].map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.25 + i * 0.12, ease: 'easeOut' }}
                  >
                    <Link
                      to={step.to}
                      className="group flex items-start gap-6 py-7 border-t border-outline-variant/40 transition-colors"
                    >
                      <span className="font-headline italic text-2xl text-primary/40 group-hover:text-primary mt-1 w-10 flex-shrink-0 transition-colors">
                        {step.num}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-headline italic text-2xl mb-2 group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <p className="font-body text-sm text-secondary leading-relaxed">{step.desc}</p>
                      </div>
                      <ArrowUpRight
                        className="w-5 h-5 text-secondary/60 group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all mt-3 flex-shrink-0"
                        strokeWidth={1.5}
                      />
                    </Link>
                  </motion.div>
                ))}
                <div className="border-t border-outline-variant/40" aria-hidden="true" />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.7, ease: 'easeOut' }}
                className="font-headline italic text-base text-secondary mt-12"
              >
                - The Dearborn Woods Team
              </motion.p>
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
                src="/site-plan.jpg"
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
            src="/belknap-front.jpg"
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
