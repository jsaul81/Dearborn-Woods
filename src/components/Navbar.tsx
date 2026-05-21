import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-xl transition-all duration-500 ${
      scrolled ? 'bg-[#8DBCB0]/20 py-0' : 'bg-[#8DBCB0]/40'
    }`}>
      <div className={`flex justify-between items-center px-5 md:px-10 w-full max-w-screen-2xl mx-auto transition-all duration-500 ${
        scrolled ? 'py-0.5' : 'py-1'
      }`}>
        <Link to="/">
          <img src="/logo.png" alt="Dearborn Woods" className={`transition-all duration-500 ${
            scrolled
              ? 'h-10 invert'
              : (forceBlack ? 'h-18 invert' : 'h-18 dark:invert')
          }`} />
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

        <a
          href="mailto:info@dearbornwoodsnh.com"
          className={`inline-block text-center bg-primary hover:bg-primary-container text-on-primary px-6 transition-all duration-500 active:scale-95 font-label uppercase tracking-[0.1em] text-xs rounded-xl ${
            scrolled ? 'py-2' : 'py-3'
          }`}
        >
          Request a Viewing
        </a>
      </div>
    </nav>
  );
}
