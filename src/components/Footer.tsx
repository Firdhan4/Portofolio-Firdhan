import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121317] border-t border-stone-800/80 py-12 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Logo matching KA. */}
          <div className="flex items-center gap-3">
            <span className="font-poppins text-2xl font-bold tracking-tight text-white">
              {PERSONAL_INFO.shortName}
              <span className="text-[#e5a855] text-2xl font-serif">.</span>
            </span>
            <span className="text-xs text-stone-400 border-l border-stone-800 pl-3 font-inter">
              {PERSONAL_INFO.name}
            </span>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400 font-inter">
            <a href="#home" className="hover:text-[#e5a855] transition-colors">Home</a>
            <a href="#portfolios" className="hover:text-[#e5a855] transition-colors">Portfolio & Documentation</a>
            <a href="#contact" className="hover:text-[#e5a855] transition-colors">Contact</a>
          </nav>

          {/* Back to top action button */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#1c1f26] text-stone-300 hover:text-black hover:bg-[#e5a855] border border-stone-800 transition-all shadow"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-6 border-t border-stone-800/50 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 gap-3 font-inter">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-[#e5a855] fill-[#e5a855]" />
            <span>in Indonesia</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
