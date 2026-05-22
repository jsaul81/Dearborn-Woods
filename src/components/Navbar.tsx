import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Floor Plans', path: '/floor-plans' },
    { name: 'Site Plan', path: '/site-plan' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const forceBlack = location.pathname !== '/';

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-xl transition-all duration-500 ${
        scrolled ? 'bg-[#8DBCB0]/20 py-0' : 'bg-[#8DBCB0]/40'
      }`}>
        <div className={`flex justify-between items-center px-5 md:px-10 w-full max-w-screen-2xl mx-auto transition-all duration-500 ${
          scrolled ? 'py-0.5' : 'py-1'
        }`}>
          <Link to="/">
            <img src="/logo.png" alt="Dearborn Woods" className={`transition-all duration-500 ${
              scrolled ? 'h-10' : 'h-18'
            } ${(scrolled || forceBlack) ? 'invert' : ''}`} />
          </Link>

          <div className="hidden md:flex gap-12 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-label uppercase tracking-[0.1em] text-sm transition-all duration-500 ${
                  (scrolled || forceBlack)
                    ? (location.pathname === link.path
                      ? 'text-black border-b border-black pb-1'
                      : 'text-black hover:opacity-75')
                    : (location.pathname === link.path
                      ? 'text-white border-b border-white pb-1'
                      : 'text-white hover:opacity-75')
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className={`hidden md:inline-block text-center bg-primary hover:bg-primary-container text-on-primary px-6 transition-all duration-500 active:scale-95 font-label uppercase tracking-[0.1em] text-xs rounded-xl ${
              scrolled ? 'py-2' : 'py-3'
            }`}
          >
            Request a Viewing
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
            className={`md:hidden p-2 transition-colors duration-500 ${
              (scrolled || forceBlack) ? 'text-black' : 'text-white'
            }`}
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="md:hidden fixed inset-0 z-[60] bg-[#2D5D5B] flex flex-col"
          >
            <div className="flex justify-end px-5 py-4">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
                className="p-2 text-white"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center items-center gap-8 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.05, ease: 'easeOut' }}
                >
                  <Link
                    to={link.path}
                    className={`font-headline italic text-4xl text-white transition-opacity ${
                      location.pathname === link.path
                        ? 'border-b border-white pb-2'
                        : 'opacity-80 hover:opacity-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45, ease: 'easeOut' }}
              className="px-6 pb-12"
            >
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-white text-primary px-8 py-5 font-label uppercase tracking-[0.2em] text-xs hover:bg-stone-100 transition-colors rounded-xl"
              >
                Request a Viewing
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
