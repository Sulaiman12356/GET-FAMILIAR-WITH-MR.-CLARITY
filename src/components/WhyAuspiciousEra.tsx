import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { SiteConfig } from '../types';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface WhyAuspiciousEraProps {
  config: SiteConfig;
}

export const WhyAuspiciousEra: React.FC<WhyAuspiciousEraProps> = ({ config }) => {
  const whatsAppUrl = getWhatsAppUrl(config.whatsAppNumber);

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] text-[#111827] border-b border-[#E5E7EB]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Label & Heading */}
        <div className="space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EAF2FF] text-[#155EEF]">
            <Compass className="w-3.5 h-3.5" />
            <span>VISION FOR TOMORROW</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-[#0B1F3A]">
            {config.whyEraHeadline}
          </h2>
        </div>

        {/* Narrative Paragraphs */}
        <div className="space-y-6 text-base sm:text-lg text-[#111827] leading-relaxed max-w-3xl">
          {config.whyEraParagraphs.map((para, i) => (
            <p key={i} className="font-normal text-[#111827]">
              {para}
            </p>
          ))}
        </div>

        {/* Prominent Era Highlight Panel */}
        <div className="mt-14 p-8 sm:p-12 rounded-3xl bg-[#F6F9FF] border border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#155EEF] block mb-2">
              OUR COLLECTIVE CALL
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0B1F3A] tracking-tight">
              {config.whyEraCallout}
            </h3>
          </div>

          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#155EEF] hover:bg-[#1048B5] text-white font-bold text-xs sm:text-sm tracking-wide shadow-xs shrink-0 transition-colors"
          >
            <span>JOIN THE MOVEMENT</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
