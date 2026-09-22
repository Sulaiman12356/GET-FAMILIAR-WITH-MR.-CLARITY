import React from 'react';
import { 
  GraduationCap, 
  Heart, 
  Cpu, 
  Briefcase, 
  Network, 
  ArrowRight,
  Check
} from 'lucide-react';
import { LegacyInitiative } from '../types';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface LegacyTenureProps {
  headline: string;
  intro: string;
  initiatives: LegacyInitiative[];
  whatsAppNumber: string;
}

export const LegacyTenure: React.FC<LegacyTenureProps> = ({ 
  headline, 
  intro, 
  initiatives,
  whatsAppNumber
}) => {
  const whatsAppUrl = getWhatsAppUrl(whatsAppNumber);

  const getInitiativeIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#155EEF]" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-[#155EEF]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#155EEF]" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-[#155EEF]" />;
      case 'Network':
        return <Network className="w-5 h-5 text-[#155EEF]" />;
      default:
        return <GraduationCap className="w-5 h-5 text-[#155EEF]" />;
    }
  };

  return (
    <section 
      id="legacy" 
      className="py-20 lg:py-28 bg-[#FFFFFF] text-[#111827] border-b border-[#E5E7EB]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-widest bg-[#155EEF] text-white shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>THE LEGACY TENURE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-display text-[#0B1F3A] leading-[1.08]">
            THE LEGACY TENURE. <br />
            <span className="text-[#155EEF]">More Than A Title — Real Student Impact.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg font-medium text-[#475467] leading-relaxed">
            {intro}
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {initiatives.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-[#E5E7EB] hover:border-[#155EEF]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#F6F9FF] group-hover:bg-[#EAF2FF] flex items-center justify-center transition-colors">
                    {getInitiativeIcon(item.icon)}
                  </div>
                  <span className="font-display font-black text-sm text-[#155EEF] bg-[#EAF2FF] px-2.5 py-1 rounded-md">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-xl text-[#0B1F3A] tracking-tight group-hover:text-[#155EEF] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#667085] mt-3 leading-relaxed">
                  {item.summary}
                </p>

                <div className="mt-6 pt-5 border-t border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-3">
                    Focus Initiatives:
                  </p>
                  <ul className="space-y-2">
                    {item.areas.map((area, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-medium text-[#111827]">
                        <Check className="w-3.5 h-3.5 text-[#155EEF] shrink-0" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold text-[#155EEF] uppercase tracking-wider">
                  The Auspicious Era Pillar
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Section 15 Contextual CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#F6F9FF] border border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h4 className="font-display font-bold text-lg text-[#0B1F3A]">
              If you believe students deserve more opportunities, join the movement.
            </h4>
            <p className="text-xs sm:text-sm text-[#667085] mt-1">
              Connect directly on WhatsApp with your name and department.
            </p>
          </div>

          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#155EEF] hover:bg-[#1048B5] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-xs shrink-0 transition-colors"
          >
            <span>JOIN THE MOVEMENT</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
