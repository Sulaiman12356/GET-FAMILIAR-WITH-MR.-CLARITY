import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, UserCheck } from 'lucide-react';
import { SiteConfig } from '../types';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface WhoIsMrClarityProps {
  config: SiteConfig;
}

export const WhoIsMrClarity: React.FC<WhoIsMrClarityProps> = ({ config }) => {
  const whatsAppUrl = getWhatsAppUrl(config.whatsAppNumber);

  return (
    <section 
      id="about" 
      className="py-20 lg:py-28 bg-[#FFFFFF] text-[#111827] border-b border-[#E5E7EB]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EAF2FF] text-[#155EEF] mb-3">
            <span>BEYOND THE NAME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-[#0B1F3A]">
            Who Is Mr. Clarity?
          </h2>
          <p className="mt-3 text-lg font-medium text-[#155EEF]">
            {config.beyondNameSubtitle}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Narrative description */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-[#111827] leading-relaxed">
              {config.whoIsIntro}
            </p>

            <div className="p-6 rounded-2xl bg-[#F6F9FF] border border-[#E5E7EB] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#155EEF]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Origin of "Clarity"</span>
              </div>
              <p className="text-sm sm:text-base text-[#111827] leading-relaxed italic">
                {config.whoIsPhilosophy}
              </p>
            </div>

            {/* Contextual CTA (Section 15 Repeated CTA strategy) */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="text-xs sm:text-sm font-medium text-[#667085]">
                If this vision speaks to you, join the movement.
              </span>
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#155EEF] hover:text-[#1048B5] transition-colors"
              >
                <span>JOIN THE MOVEMENT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Profile Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-[#E5E7EB] shadow-md hover:shadow-lg transition-all space-y-6">
              
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#667085]">
                    STUDENT LEADER PROFILE
                  </span>
                  <h3 className="font-display font-black text-2xl text-[#0B1F3A] mt-1">
                    {config.name}
                  </h3>
                  <p className="text-sm font-bold text-[#155EEF] mt-0.5">
                    Popularly known as {config.nickname}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#EAF2FF] text-[#155EEF] flex items-center justify-center font-bold">
                  <UserCheck className="w-6 h-6" />
                </div>
              </div>

              <div className="border-t border-slate-100 pt-5 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">
                  Identity & Focus Areas:
                </span>
                <div className="flex flex-wrap gap-2">
                  {config.identityTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F6F9FF] border border-[#E5E7EB] text-xs font-semibold text-[#0B1F3A]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#155EEF]" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-[#667085]">
                <span>{config.institution}</span>
                <span className="font-semibold text-[#0B1F3A]">Dept. of Computer Science</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
