import React from 'react';
import { ArrowUp, Settings2 } from 'lucide-react';
import { BrandLogo } from './Visuals';

interface FooterProps {
  onOpenCustomizer?: () => void;
  brandName?: string;
  name?: string;
  nickname?: string;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenCustomizer,
  brandName = "The Auspicious Era",
  name = "Onifade Sulaiman",
  nickname = "Mr. Clarity"
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Me', href: '#about' },
    { name: 'My Journey', href: '#journey' },
    { name: 'Legacy Tenure', href: '#legacy' },
    { name: 'Why This Matters', href: '#why-matters' },
    { name: 'Get Involved', href: '#get-involved' },
    { name: 'Personal Website', href: '#personal-website' },
  ];

  return (
    <footer 
      id="site-footer"
      className="bg-[#061426] text-white pt-16 pb-12 border-t border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo className="w-10 h-10" />
              <div>
                <h3 className="font-display font-extrabold text-xl tracking-tight text-white">
                  {brandName}
                </h3>
                <p className="text-xs text-blue-200">
                  {name} • Popularly known as <span className="font-semibold text-white">{nickname}</span>
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 max-w-md leading-relaxed font-normal">
              Building clarity, creating opportunities and contributing to a stronger student community at Olabisi Onabanjo University.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span>Department of Computer Science</span>
              <span>•</span>
              <span>Ago-Iwoye, Ogun State</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#146BFF] mb-4">
              Explore The Platform
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2.5 gap-x-4">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-slate-300 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Customizer trigger button for easy live editing */}
            {onOpenCustomizer && (
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onOpenCustomizer}
                  className="inline-flex items-center gap-2 text-xs text-blue-300 hover:text-white transition-colors px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10"
                >
                  <Settings2 className="w-3.5 h-3.5 text-[#146BFF]" />
                  <span>Customize Platform Content & Images</span>
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Bottom copyright & scroll-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 {brandName}. All rights reserved.</p>
          
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
