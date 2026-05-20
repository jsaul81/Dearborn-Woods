import { Link } from 'react-router-dom';
import { Share2, MapPin, Award, Camera, Speaker } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 dark:bg-stone-950">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 py-14 w-full max-w-screen-2xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="block mb-6">
            <img src="/logo.png" alt="Dearborn Woods" className="h-48" />
          </Link>
          <p className="text-stone-400 font-body font-light tracking-wide text-sm leading-relaxed">
            A curated enclave for the discerning few, where nature and architecture exist in perfect equilibrium.
          </p>
        </div>
        
        <div>
          <h4 className="text-[#6FA08B] font-label uppercase tracking-[0.1em] text-xs mb-6">Navigation</h4>
          <div className="flex flex-col gap-4">
            <Link to="/floor-plans" className="text-stone-400 hover:text-white transition-opacity duration-300 font-body font-light text-sm">Floor Plans</Link>
            <Link to="/site-plan" className="text-stone-400 hover:text-white transition-opacity duration-300 font-body font-light text-sm">Site Plan</Link>
            <Link to="/about" className="text-stone-400 hover:text-white transition-opacity duration-300 font-body font-light text-sm">About</Link>
            <Link to="/contact" className="text-stone-400 hover:text-white transition-opacity duration-300 font-body font-light text-sm">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="text-[#6FA08B] font-label uppercase tracking-[0.1em] text-xs mb-6">Legal</h4>
          <div className="flex flex-col gap-4">
            <Link to="#" className="text-stone-400 hover:text-white transition-opacity duration-300 font-body font-light text-sm">Privacy Policy</Link>
            <Link to="#" className="text-stone-400 hover:text-white transition-opacity duration-300 font-body font-light text-sm">Terms of Service</Link>
          </div>
        </div>

        <div>
          <h4 className="text-[#6FA08B] font-label uppercase tracking-[0.1em] text-xs mb-6">Connect</h4>
          <p className="text-stone-400 text-sm mb-4">Wentworth Drive<br />Greenland, NH 03840</p>
          <a className="text-stone-100 font-bold block mb-2 underline underline-offset-8 decoration-[#6FA08B]" href="mailto:info@dearbornwoodsnh.com">
            info@dearbornwoodsnh.com
          </a>
          <a className="text-stone-400 text-sm mt-4 block hover:text-white transition-colors" href="tel:6032054463">603-205-4463</a>
        </div>
      </div>

      <div className="border-t border-white/5 py-5 px-8 flex flex-col md:flex-row justify-between items-center max-w-screen-2xl mx-auto gap-4">
        <p className="text-stone-500 text-[10px] font-label uppercase tracking-widest">© 2024 Dearborn Woods. All rights reserved.</p>
        <a
          href="https://www.proulxrealestate.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity"
        >
          <span className="text-stone-500 text-[10px] font-label uppercase tracking-widest">Listed by</span>
          <img src="/proulx-logo.png" alt="Proulx Real Estate" className="h-7 w-auto" />
        </a>
      </div>
    </footer>
  );
}
