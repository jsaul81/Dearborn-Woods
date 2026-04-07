import { Link } from 'react-router-dom';
import { Share2, MapPin, Award, Camera, Speaker } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 dark:bg-stone-950">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-24 w-full max-w-screen-2xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="font-headline text-3xl text-stone-100 block mb-6">
            Dearborn Woods
          </Link>
          <p className="text-stone-400 font-body font-light tracking-wide text-sm leading-relaxed">
            A curated enclave for the discerning few, where nature and architecture exist in perfect equilibrium.
          </p>
        </div>
        
        <div>
          <h4 className="text-[#8b704f] font-label uppercase tracking-[0.1em] text-xs mb-6">Navigation</h4>
          <div className="flex flex-col gap-4">
            <Link to="/floor-plans" className="text-stone-400 hover:text-white transition-opacity duration-300 font-body font-light text-sm">Floor Plans</Link>
            <Link to="/site-plan" className="text-stone-400 hover:text-white transition-opacity duration-300 font-body font-light text-sm">Site Plan</Link>
            <Link to="/about" className="text-stone-400 hover:text-white transition-opacity duration-300 font-body font-light text-sm">About</Link>
            <Link to="/contact" className="text-stone-400 hover:text-white transition-opacity duration-300 font-body font-light text-sm">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="text-[#8b704f] font-label uppercase tracking-[0.1em] text-xs mb-6">Legal</h4>
          <div className="flex flex-col gap-4">
            <Link to="#" className="text-stone-400 hover:text-white transition-opacity duration-300 font-body font-light text-sm">Privacy Policy</Link>
            <Link to="#" className="text-stone-400 hover:text-white transition-opacity duration-300 font-body font-light text-sm">Terms of Service</Link>
          </div>
        </div>

        <div>
          <h4 className="text-[#8b704f] font-label uppercase tracking-[0.1em] text-xs mb-6">Connect</h4>
          <p className="text-stone-400 text-sm mb-4">100 Dearborn Lane<br />Refinement Hills, MI</p>
          <a className="text-stone-100 font-bold block mb-2 underline underline-offset-8 decoration-[#8b704f]" href="mailto:concierge@dearbornwoods.com">
            concierge@dearbornwoods.com
          </a>
          <p className="text-stone-400 text-sm mt-4">+1 (800) WOODS-LE</p>
        </div>
      </div>

      <div className="border-t border-white/5 py-8 px-12 flex flex-col md:flex-row justify-between items-center max-w-screen-2xl mx-auto gap-4">
        <p className="text-stone-500 text-[10px] font-label uppercase tracking-widest">© 2024 Dearborn Woods. All rights reserved.</p>
        <div className="flex gap-6">
          <Award className="w-5 h-5 text-stone-500 cursor-pointer hover:text-white transition-colors" />
          <Camera className="w-5 h-5 text-stone-500 cursor-pointer hover:text-white transition-colors" />
          <Speaker className="w-5 h-5 text-stone-500 cursor-pointer hover:text-white transition-colors" />
          <Share2 className="w-5 h-5 text-stone-500 cursor-pointer hover:text-white transition-colors" />
          <MapPin className="w-5 h-5 text-stone-500 cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
    </footer>
  );
}
