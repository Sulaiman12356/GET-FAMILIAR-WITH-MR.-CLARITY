import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { BrandLogo } from './Visuals';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  whatsAppNumber: string;
  brandName?: string;
  name?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  whatsAppNumber,
  brandName = "THE AUSPICIOUS ERA",
  name = "ONIFADE SULAIMAN"
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Me', href: '#about' },
    { name: 'My Journey', href: '#journey' },
    { name: 'Legacy Tenure', href: '#legacy' },
    { name: 'My Values', href: '#values' },
  ];

  const whatsAppUrl = getWhatsAppUrl(whatsAppNumber);

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-200 bg-white ${
        isScrolled 
          ? 'shadow-xs border-b border-[#E5E7EB]' 
          : 'border-b border-[#E5E7EB]/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Minimal Wordmark / Logo */}
          <a href="#hero" className="flex items-center gap-3 group focus:outline-none">
            <BrandLogo className="w-9 h-9" />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-[#0B1F3A] tracking-wider text-sm sm:text-base group-hover:text-[#155EEF] transition-colors leading-tight">
                {brandName}
              </span>
              <span className="text-[11px] font-semibold text-[#667085] tracking-widest uppercase">
                {name}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#111827] hover:text-[#155EEF] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#155EEF] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Desktop Primary Button */}
          <div className="hidden md:flex items-center">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#155EEF] hover:bg-[#1048B5] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
            >
              <span>JOIN THE MOVEMENT</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#0B1F3A] hover:bg-[#F6F9FF] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E5E7EB] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#111827] hover:bg-[#F6F9FF] hover:text-[#155EEF] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#155EEF] text-white text-sm font-semibold shadow-xs"
            >
              <span>JOIN THE MOVEMENT</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-[11px] text-center text-[#667085] mt-2">
              No form. Connects straight to WhatsApp.
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
