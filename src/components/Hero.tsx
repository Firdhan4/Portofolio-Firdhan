import React from 'react';
import { ArrowUpRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface Props {
  onOpenContact: () => void;
}

export const Hero: React.FC<Props> = ({ onOpenContact }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background radial soft ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#e5a855]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 xl:gap-8 items-center">
          
          {/* Left Column: Name, Socials, Contact Button (col-span-4) with dedicated right padding */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 order-2 lg:order-1 lg:pr-4 xl:pr-6">
            <div className="space-y-2">
              <h1 className="font-poppins text-3xl sm:text-4xl lg:text-[38px] xl:text-[44px] font-bold tracking-tight text-white leading-[1.12]">
                <span className="block">Firdhan</span>
                <span className="block mt-0.5">
                  Maulana<span className="text-[#e5a855]">.</span>
                </span>
              </h1>
              {/* Clean golden underline bar matching reference screenshot */}
              <div className="w-12 h-[3px] bg-[#e5a855] rounded-full mx-auto lg:mx-0" />
            </div>

            {/* Social handles list matching reference format: Instagram | Facebook | Whatsapp | Telegram. */}
            <div className="font-inter text-xs sm:text-[13px] text-stone-300 font-medium tracking-wide flex flex-wrap justify-center lg:justify-start items-center gap-2 pt-1">
              <a
                href={PERSONAL_INFO.contact.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#e5a855] transition-colors"
              >
                Instagram
              </a>
              <span className="text-stone-600">|</span>
              <a
                href={PERSONAL_INFO.contact.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#e5a855] transition-colors"
              >
                Facebook
              </a>
              <span className="text-stone-600">|</span>
              <a
                href={PERSONAL_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#e5a855] transition-colors"
              >
                Whatsapp
              </a>
              <span className="text-stone-600">|</span>
              <a
                href={PERSONAL_INFO.contact.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#e5a855] transition-colors"
              >
                Telegram.
              </a>
            </div>

            {/* Contact Me Button - Clean Gold Outline matching the reference */}
            <div className="pt-2 flex flex-wrap gap-3 items-center justify-center lg:justify-start">
              <button
                onClick={onOpenContact}
                className="px-6 py-2.5 rounded-full text-xs font-semibold tracking-widest text-[#e5a855] uppercase border border-[#e5a855] hover:bg-[#e5a855] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(229,168,85,0.15)] flex items-center gap-2 active:scale-95"
              >
                <span>CONTACT ME</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Center Column: User Photo & Circular Backdrop (col-span-4) - Constrained & Centered */}
          <div className="lg:col-span-4 flex justify-center order-1 lg:order-2 px-2">
            <div className="relative w-full max-w-[250px] sm:max-w-[270px] lg:max-w-[260px] xl:max-w-[280px] flex flex-col items-center">
              
              {/* Circular Backdrop - accurately contained so it never spills over into neighboring columns */}
              <div className="absolute top-2 w-48 h-48 sm:w-56 sm:h-56 lg:w-[240px] lg:h-[240px] rounded-full bg-gradient-to-b from-[#2a2e38] via-[#1e2129] to-[#15171d] shadow-[0_0_40px_rgba(0,0,0,0.7)] border border-stone-700/40 -z-0" />
              
              {/* Subtle outer glow ring */}
              <div className="absolute top-0 w-52 h-52 sm:w-60 sm:h-60 lg:w-[256px] lg:h-[256px] rounded-full border border-[#e5a855]/15 -z-0 pointer-events-none" />

              {/* User Photo: Firdhan Maulana's uploaded portrait */}
              <div className="relative z-10 w-full group">
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-stone-700/60 bg-[#252830]">
                  <img
                    src={PERSONAL_INFO.userPhoto}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  {/* Subtle bottom fade matching dark theme seamlessly */}
                  <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#1a1c22] via-[#1a1c22]/40 to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Introduction, Bio, Skills (col-span-4) - with dedicated left padding */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 order-3 lg:pl-4 xl:pl-6">
            
            {/* INTRODUCTION title in gold */}
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-[2px] bg-[#e5a855] hidden lg:block" />
              <span className="font-poppins text-xs font-bold tracking-[0.2em] text-[#e5a855] uppercase">
                INTRODUCTION
              </span>
            </div>

            {/* Roles Headline - Clean Poppins typography */}
            <h2 className="font-poppins text-xl sm:text-2xl lg:text-[22px] xl:text-[24px] font-bold text-white leading-snug tracking-tight">
              2D & 3D Animator, Creative Artist & Information Systems Student.
            </h2>

            {/* Bio paragraph styled cleanly */}
            <p className="font-inter text-xs sm:text-sm text-stone-300 leading-relaxed max-w-sm font-normal">
              Mahasiswa Sistem Informasi Universitas Komputama dengan fondasi 3 tahun di bidang Animasi (SMK Komputama Majenang). Terampil dalam alur produksi animasi 2D dan 3D meliputi modelling karakter dan aset, coloring, hingga rigging, serta memiliki pengalaman praktis di industri periklanan dan percetakan banner.
            </p>

            {/* Quick Skills checklist reflecting real skills */}
            <div className="grid grid-cols-2 gap-2 pt-1 text-xs text-stone-300 w-full max-w-sm font-inter">
              <div className="flex items-center gap-2 bg-[#22252e]/80 border border-stone-800 px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#e5a855] shrink-0" />
                <span className="text-stone-200">2D & 3D Animation</span>
              </div>
              <div className="flex items-center gap-2 bg-[#22252e]/80 border border-stone-800 px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#e5a855] shrink-0" />
                <span className="text-stone-200">3D Asset Modelling</span>
              </div>
              <div className="flex items-center gap-2 bg-[#22252e]/80 border border-stone-800 px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#e5a855] shrink-0" />
                <span className="text-stone-200">Rigging & Coloring</span>
              </div>
              <div className="flex items-center gap-2 bg-[#22252e]/80 border border-stone-800 px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#e5a855] shrink-0" />
                <span className="text-stone-200">Advertising & Print QC</span>
              </div>
            </div>

            {/* Quick WhatsApp chat trigger */}
            <div className="pt-1">
              <a
                href={PERSONAL_INFO.contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#e5a855] hover:underline font-inter"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat directly on WhatsApp</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
