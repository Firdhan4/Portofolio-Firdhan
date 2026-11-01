import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface Props {
  onOpenContact: () => void;
}

export const Navbar: React.FC<Props> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio & Documentation', href: '#portfolios' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#181a20]/95 backdrop-blur-md py-4 shadow-lg border-b border-white/5'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between">
        {/* Brand Logo - Styled cleanly like KA. in the reference */}
        <a
          href="#home"
          className="group flex items-center gap-2 text-2xl font-bold tracking-tight text-white font-poppins"
        >
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {PERSONAL_INFO.shortName}
            <span className="text-[#e5a855] text-3xl">.</span>
          </span>
          <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-stone-400 font-medium pl-2.5 border-l border-stone-700 font-inter">
            Portfolio
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300 font-inter">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-[#e5a855] transition-colors relative py-1 text-[13px] tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-[#e5a855] border border-[#e5a855]/60 hover:bg-[#e5a855] hover:text-black transition-all duration-300 shadow-sm font-poppins"
          >
            <span>CONTACT ME</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-stone-300 hover:text-white rounded-lg focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#181a20]/98 backdrop-blur-xl border-b border-stone-800 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3 font-inter">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-stone-300 hover:text-[#e5a855] py-2 text-sm font-medium border-b border-stone-800/50"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="mt-2 w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[#e5a855] flex items-center justify-center gap-1.5 shadow-md font-poppins"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Contact Me</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
