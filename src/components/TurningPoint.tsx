import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { SiteConfig } from '../types';

interface TurningPointProps {
  config: SiteConfig;
}

export const TurningPoint: React.FC<TurningPointProps> = ({ config }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] text-[#111827] border-b border-[#E5E7EB]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Very Light Blue Panel */}
        <div className="bg-[#F6F9FF] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#E5E7EB] shadow-xs relative overflow-hidden">
          
          {/* Subtle decorative accent */}
          <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] text-[#155EEF] flex items-center justify-center mb-6 shadow-xs">
            <Sparkles className="w-5 h-5" />
          </div>

          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-[#155EEF] border border-[#E5E7EB]">
              <span>A REALIZATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-[#0B1F3A] leading-tight">
              {config.turningPointHeadline}
            </h2>

            <div className="space-y-4 pt-3 text-base sm:text-lg text-[#111827] leading-relaxed font-normal">
              {config.turningPointParagraphs.map((para, i) => (
                <p key={i} className={i === config.turningPointParagraphs.length - 1 ? "font-bold text-[#155EEF]" : ""}>
                  {para}
                </p>
              ))}
            </div>

            <div className="pt-6">
              <a
                href="#legacy"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#155EEF] hover:text-[#1048B5] transition-colors"
              >
                <span>Explore The Legacy Tenure initiatives</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
