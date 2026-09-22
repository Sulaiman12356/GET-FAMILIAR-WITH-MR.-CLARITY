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
            
            {/* The first word at the top */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#155EEF] text-white text-xs sm:text-sm font-black tracking-widest uppercase shadow-xs">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0" />
                <span className="font-display">GET FAMILIAR WITH CLARITY</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF2FF] border border-[#155EEF]/30 text-xs sm:text-sm font-extrabold tracking-wide text-[#155EEF]">
                  <span>ONIFADE SULAIMAN, POPULARLY KNOWN AS <span className="font-black underline decoration-2 underline-offset-2">MR. CLARITY</span></span>
                </div>
                <span className="font-handwriting text-lg text-[#155EEF] font-bold">
                  From my notebook to your screen
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-display text-[#0B1F3A] leading-[1.08]">
              {config.heroHeadlineTop} <br />
              <span className="text-[#155EEF]">
                {config.heroHeadlineHighlight}
              </span>
            </h1>

            {/* Paragraph 1 */}
            <p className="text-base sm:text-lg text-[#111827] leading-relaxed max-w-2xl font-normal">
              My name is <strong className="font-bold text-[#0B1F3A]">{config.name}</strong>, popularly and widely known as <strong className="font-black text-[#155EEF] bg-[#EAF2FF] px-1.5 py-0.5 rounded text-lg">MR. CLARITY</strong>. I am a Computer Science student, student leader, digital strategist and community builder passionate about helping students find clarity, discover opportunities and create meaningful progress.
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base text-[#667085] leading-relaxed max-w-2xl">
              {config.heroBio2}
            </p>

            {/* CTAs */}
            <div className="pt-2 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 flex-wrap">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#155EEF] hover:bg-[#1048B5] text-white font-black text-sm tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.98] group"
                >
                  <MessageSquare className="w-4 h-4 fill-white/20" />
                  <span>JOIN THE MOVEMENT</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Bold prominent Legacy Tenure button */}
                <a
                  href="#legacy"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#F6F9FF] border-2 border-[#155EEF]/30 hover:border-[#155EEF] hover:bg-[#EAF2FF] text-[#0B1F3A] hover:text-[#155EEF] font-black text-sm tracking-wide transition-all shadow-xs group"
                >
                  <span>EXPLORE THE LEGACY TENURE</span>
                  <ArrowRight className="w-4 h-4 text-[#155EEF] group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#about"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-3 text-xs sm:text-sm font-bold text-[#667085] hover:text-[#155EEF] transition-colors"
                >
                  <span>My Story</span>
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
