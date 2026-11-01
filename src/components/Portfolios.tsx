import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/portfolioData';

interface Props {
  onSelectItem?: (item: PortfolioItem) => void;
}

export const Portfolios: React.FC<Props> = () => {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  return (
    <section id="portfolios" className="py-24 bg-[#1a1c22] relative">
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-block">
            <span className="font-poppins text-xs sm:text-sm font-bold tracking-[0.25em] text-[#e5a855] uppercase">
              PORTFOLIO & DOCUMENTATION
            </span>
          </div>
          <h2 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Portfolio & Documentation
          </h2>
          <p className="font-inter text-xs sm:text-sm text-stone-400 leading-relaxed font-normal">
            Kumpulan karya kreatif, animasi 2D/3D, dan dokumentasi proyek yang telah saya kerjakan.
          </p>

          {/* Golden accent bar divider */}
          <div className="w-16 h-[2px] bg-[#e5a855] mx-auto mt-4 rounded-full" />
        </div>

        {/* 4 Photos Grid - 2x2 Clean Layout without any text underneath */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item.image)}
              className="group cursor-pointer relative bg-[#20232b] rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-800 hover:border-[#e5a855]/70 transition-all duration-300 shadow-xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] aspect-[16/10] flex items-center justify-center"
            >
              <img
                src={item.image}
                alt="Portfolio & Documentation"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Minimalist Hover Overlay with Zoom Icon */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-black/70 backdrop-blur-xs border border-[#e5a855]/80 flex items-center justify-center text-[#e5a855] shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom divider line */}
        <div className="w-24 h-[2px] bg-[#e5a855]/60 mx-auto mt-16 rounded-full" />

      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute -top-12 right-0 p-2 text-stone-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activePhoto}
              alt="Portfolio Fullscreen Preview"
              className="max-h-[85vh] w-auto object-contain rounded-2xl shadow-2xl border border-stone-800"
            />
          </div>
        </div>
      )}
    </section>
  );
};
