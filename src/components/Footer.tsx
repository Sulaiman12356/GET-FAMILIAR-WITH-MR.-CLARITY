import React from 'react';
import { ArrowRight, ArrowUp, Instagram, Facebook, Linkedin, Settings2 } from 'lucide-react';
import { BrandLogo } from './Visuals';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  whatsAppNumber: string;
  brandName?: string;
  name?: string;
  nickname?: string;
  socials: {
    instagram: string;
    tiktok: string;
    linkedin: string;
    facebook: string;
    x: string;
  };
  onOpenCustomizer?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  whatsAppNumber,
  brandName = "THE AUSPICIOUS ERA",
  name = "Onifade Sulaiman",
  nickname = "Mr. Clarity",
  socials,
  onOpenCustomizer
}) => {
  const whatsAppUrl = getWhatsAppUrl(whatsAppNumber);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Me', href: '#about' },
    { name: 'My Journey', href: '#journey' },
    { name: 'Legacy Tenure', href: '#legacy' },
    { name: 'Values', href: '#values' },
    { name: 'Join The Movement', href: whatsAppUrl, isExternal: true },
  ];

  // Custom recognizable SVG icons for X and TikTok
  const XIcon = () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  const TikTokIcon = () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );

  return (
    <footer className="bg-white text-[#111827] border-t border-[#E5E7EB] pt-16 pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E5E7EB] items-start">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo className="w-10 h-10" />
              <div>
                <h3 className="font-display font-extrabold text-[#0B1F3A] text-lg tracking-wider">
                  {brandName}
                </h3>
                <p className="text-xs text-[#667085] font-semibold">
                  {name} • Popularly known as <span className="text-[#155EEF] font-bold">{nickname}</span>
                </p>
              </div>
            </div>

            <p className="text-sm font-semibold text-[#155EEF] tracking-wide">
              Clarity. Service. Opportunity. Legacy.
            </p>

            <p className="text-xs sm:text-sm text-[#667085] max-w-sm leading-relaxed">
              A student leadership vision designed around clarity of information, meaningful opportunities, and student welfare at Olabisi Onabanjo University.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-2 text-[#0B1F3A]">
              <a
                href={socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#F6F9FF] border border-[#E5E7EB] hover:border-[#155EEF] hover:text-[#155EEF] flex items-center justify-center transition-colors"
                aria-label="X (Twitter)"
              >
                <XIcon />
              </a>
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#F6F9FF] border border-[#E5E7EB] hover:border-[#155EEF] hover:text-[#155EEF] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#F6F9FF] border border-[#E5E7EB] hover:border-[#155EEF] hover:text-[#155EEF] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#F6F9FF] border border-[#E5E7EB] hover:border-[#155EEF] hover:text-[#155EEF] flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
              <a
                href={socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#F6F9FF] border border-[#E5E7EB] hover:border-[#155EEF] hover:text-[#155EEF] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav links and final CTA */}
          <div className="md:col-span-6 flex flex-col justify-between h-full space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] block mb-3">
                Platform Navigation
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2.5 gap-x-4">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="text-xs sm:text-sm text-[#667085] hover:text-[#155EEF] transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Final CTA Button */}
            <div className="pt-2">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#155EEF] hover:bg-[#1048B5] text-white text-xs sm:text-sm font-bold shadow-xs transition-colors"
              >
                <span>JOIN THE MOVEMENT</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {onOpenCustomizer && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenCustomizer}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F6F9FF] border border-[#E5E7EB] hover:border-[#155EEF] text-xs font-bold text-[#475467] hover:text-[#155EEF] transition-all shadow-2xs"
                >
                  <Settings2 className="w-3.5 h-3.5 text-[#155EEF]" />
                  <span>Admin Configuration (Password Protected)</span>
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#667085]">
          <p>© 2026 {brandName}. All Rights Reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F6F9FF] border border-[#E5E7EB] hover:text-[#0B1F3A] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#155EEF]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
