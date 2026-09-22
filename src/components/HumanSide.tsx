import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { SiteConfig } from '../types';

interface HumanSideProps {
  config: SiteConfig;
}

export const HumanSide: React.FC<HumanSideProps> = ({ config }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] text-[#111827] border-b border-[#E5E7EB]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EAF2FF] text-[#155EEF] mb-4">
          <Heart className="w-3.5 h-3.5 fill-[#155EEF]/20" />
          <span>THE HUMAN SIDE</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-[#0B1F3A]">
          {config.humanSideHeadline}
        </h2>

        {/* Story Lines with generous whitespace and elegant cadence */}
        <div className="mt-12 space-y-4 max-w-xl mx-auto text-left sm:text-center">
          {config.humanSideLines.map((line, idx) => (
            <div 
              key={idx}
              className="py-2 text-base sm:text-lg text-[#111827] font-medium border-b border-slate-100 last:border-none"
            >
              {line}
            </div>
          ))}
        </div>

        {/* Emotional punchline */}
        <div className="mt-12 pt-8 border-t border-[#E5E7EB] inline-block">
          <p className="font-display font-black text-xl sm:text-2xl text-[#155EEF] tracking-tight">
            "{config.humanSideConclusion}"
          </p>
          <span className="text-xs text-[#667085] mt-2 block font-medium">
            The core philosophy of Onifade Sulaiman (Mr. Clarity)
          </span>
        </div>

      </div>
    </section>
  );
};
