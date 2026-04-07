import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Navbar() {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Floor Plans', path: '/floor-plans' },
    { name: 'Site Plan', path: '/site-plan' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 w-full max-w-screen-2xl mx-auto">
        <Link to="/" className="font-headline italic text-2xl tracking-tight text-stone-900 dark:text-stone-100">
          Dearborn Woods
        </Link>
        
        <div className="hidden md:flex gap-12 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-label uppercase tracking-[0.1em] text-xs transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-primary border-b border-primary pb-1'
                  : 'text-stone-600 dark:text-stone-400 hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button className="bg-primary hover:bg-primary-container text-on-primary px-6 py-3 transition-all duration-300 active:scale-95 font-label uppercase tracking-[0.1em] text-xs rounded-xl">
          Request a Viewing
        </button>
      </div>
    </nav>
  );
}
