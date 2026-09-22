import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { BrandLogo } from './Visuals';

interface NavbarProps {
  onOpenGetInvolved?: () => void;
  brandName?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenGetInvolved,
  brandName = "The Auspicious Era" 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Me', href: '#about' },
    { name: 'My Journey', href: '#journey' },
    { name: 'Legacy Tenure', href: '#legacy' },
    { name: 'Why This Matters', href: '#why-matters' },
    { name: 'Get Involved', href: '#get-involved' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking
      const sections = ['hero', 'about', 'journey', 'legacy', 'why-matters', 'get-involved'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#061426]/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3.5' 
          : 'bg-[#061426] border-b border-white/5 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#146BFF] rounded-lg p-1"
            id="nav-brand-logo"
          >
            <BrandLogo className="w-9 h-9" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-base sm:text-lg tracking-tight group-hover:text-blue-200 transition-colors">
                {brandName}
              </span>
              <span className="text-[11px] text-blue-200/80 font-medium tracking-wide">
                Onifade Sulaiman (Mr. Clarity)
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                    isActive 
                      ? 'text-white bg-white/10 font-semibold shadow-xs' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#journey"
              onClick={(e) => handleLinkClick(e, '#journey')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#146BFF] hover:bg-blue-600 active:scale-98 transition-all shadow-md shadow-[#146BFF]/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#146BFF] focus:ring-offset-[#061426]"
              id="nav-explore-btn"
            >
              <span>Explore My Journey</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#146BFF]"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-x-0 top-[65px] bg-[#061426] border-b border-white/15 px-4 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top duration-200"
          id="mobile-nav-panel"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-[#146BFF] text-white font-semibold'
                      : 'text-slate-200 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-white" />}
                </a>
              );
            })}
          </div>

          <div className="pt-4 mt-3 border-t border-white/10 space-y-2">
            <a
              href="#journey"
              onClick={(e) => handleLinkClick(e, '#journey')}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-[#146BFF] hover:bg-blue-600 transition-colors shadow-sm"
            >
              <span>Explore My Journey</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#get-involved"
              onClick={(e) => handleLinkClick(e, '#get-involved')}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-white/10 hover:bg-white/15 transition-colors"
            >
              <span>Join The Movement</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
