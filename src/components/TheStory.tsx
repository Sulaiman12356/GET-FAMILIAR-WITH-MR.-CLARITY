import React from 'react';
import { Quote } from 'lucide-react';
import { SiteConfig } from '../types';

interface TheStoryProps {
  config: SiteConfig;
}

export const TheStory: React.FC<TheStoryProps> = ({ config }) => {
  return (
    <section 
      id="story" 
      className="py-20 lg:py-28 bg-[#FFFFFF] text-[#111827] border-b border-[#E5E7EB]/60"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Label & Headline */}
        <div className="space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EAF2FF] text-[#155EEF]">
            <span>THE JOURNEY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-[#0B1F3A] leading-tight">
            I Didn't Start With A Title. <br />
            <span className="text-[#155EEF]">I Started With A Desire To Help.</span>
          </h2>
        </div>

        {/* Narrative Prose */}
        <div className="space-y-6 text-base sm:text-lg text-[#111827] leading-relaxed max-w-3xl">
          {config.storyParagraphs.map((p, idx) => (
            <p key={idx} className="font-normal text-[#111827]">
              {p}
            </p>
          ))}
        </div>

        {/* Prominent Quote Callout */}
        <div className="mt-14 pt-10 border-t border-[#E5E7EB]">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#F6F9FF] border border-[#E5E7EB] relative">
            <Quote className="w-10 h-10 text-[#155EEF]/20 absolute top-6 right-6" />
            
            <p className="text-xs font-bold uppercase tracking-widest text-[#155EEF] mb-3">
              CORE REALIZATION
            </p>

            <blockquote className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0B1F3A] tracking-tight leading-tight">
              "{config.storyQuote}"
            </blockquote>

            <p className="text-xs sm:text-sm font-semibold text-[#667085] mt-4">
              — Onifade Sulaiman (Mr. Clarity)
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
