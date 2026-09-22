import React from 'react';
import { ArrowRight, ChevronDown, MessageSquare } from 'lucide-react';
import { SiteConfig } from '../types';
import { PortraitVisual } from './Visuals';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  config: SiteConfig;
  heroImageUrl?: string;
  onUploadPortrait?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  config, 
  heroImageUrl,
  onUploadPortrait 
}) => {
  const whatsAppUrl = getWhatsAppUrl(config.whatsAppNumber);

  return (
    <section 
      id="hero" 
      className="relative bg-white text-[#111827] pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 overflow-hidden border-b border-[#E5E7EB]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Hero Label & Accent line */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#155EEF] rounded-full" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#155EEF]">
                {config.brand}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-[#0B1F3A] leading-[1.08]">
              {config.heroHeadlineTop} <br />
              <span className="text-[#155EEF]">
                {config.heroHeadlineHighlight}
              </span>
            </h1>

            {/* Paragraph 1 */}
            <p className="text-base sm:text-lg text-[#111827] leading-relaxed max-w-2xl font-normal">
              {config.heroBio1}
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed max-w-2xl">
              {config.heroBio2}
            </p>

            {/* CTAs */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#155EEF] hover:bg-[#1048B5] text-white font-bold text-sm tracking-wide shadow-sm hover:shadow-md transition-all active:scale-[0.98] group"
                >
                  <MessageSquare className="w-4 h-4 fill-white/20" />
                  <span>JOIN THE MOVEMENT</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#about"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-semibold text-[#0B1F3A] hover:text-[#155EEF] transition-colors"
                >
                  <span>Discover My Story</span>
                  <ChevronDown className="w-4 h-4" />
                </a>
              </div>

              {/* Reassuring note */}
              <p className="text-xs text-[#667085] flex items-center gap-1.5 pt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#155EEF]" />
                <span>No form. Just send your name and department on WhatsApp.</span>
              </p>
            </div>

          </div>

          {/* Right Column: Large Professional Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <PortraitVisual
              imageUrl={heroImageUrl}
              name={config.name}
              nickname={config.nickname}
              onUploadClick={onUploadPortrait}
              className="w-full max-w-md lg:max-w-lg"
              aspect="aspect-[4/5]"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
