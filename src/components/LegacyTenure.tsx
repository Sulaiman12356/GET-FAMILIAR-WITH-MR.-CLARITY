import React, { useState } from 'react';
import { 
  GraduationCap, 
  HeartPulse, 
  Cpu, 
  Briefcase, 
  Users, 
  ArrowRight, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { LegacyInitiative } from '../types';
import { InitiativeModal } from './InitiativeModal';

interface LegacyTenureProps {
  intro: string;
  initiatives: LegacyInitiative[];
  onOpenJoin: () => void;
}

export const LegacyTenure: React.FC<LegacyTenureProps> = ({ 
  intro, 
  initiatives,
  onOpenJoin 
}) => {
  const [selectedInitiative, setSelectedInitiative] = useState<LegacyInitiative | null>(null);

  const getCardIcon = (id: string) => {
    switch (id) {
      case 'academic-excellence':
        return <GraduationCap className="w-6 h-6 text-[#146BFF]" />;
      case 'student-welfare':
        return <HeartPulse className="w-6 h-6 text-[#146BFF]" />;
      case 'technology-innovation':
        return <Cpu className="w-6 h-6 text-[#146BFF]" />;
      case 'skills-opportunities':
        return <Briefcase className="w-6 h-6 text-[#146BFF]" />;
      case 'community-unity':
        return <Users className="w-6 h-6 text-[#146BFF]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#146BFF]" />;
    }
  };

  return (
    <section 
      id="legacy" 
      className="py-20 lg:py-32 bg-[#091D35] text-white relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#146BFF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#061426] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-blue-200 border border-white/10 mb-3">
            <span>THE LEGACY TENURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
            More Than A Title. <br className="hidden sm:inline" />
            <span className="text-[#146BFF]">A Lasting Impact.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            {intro}
          </p>
        </div>

        {/* 5 Major Initiative Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-[#061426]/90 rounded-3xl p-7 border border-white/10 hover:border-[#146BFF]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1 ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Top Bar with Number & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#146BFF]/20 group-hover:border-[#146BFF]/40 transition-colors">
                    {getCardIcon(item.id)}
                  </div>
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                        {item.badge}
                      </span>
                    )}
                    <span className="font-mono text-sm font-bold text-slate-400">
                      {item.number}
                    </span>
                  </div>
                </div>

                {/* Title & Focus */}
                <h3 className="text-xl font-bold font-display text-white tracking-tight group-hover:text-blue-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#146BFF] mt-1 mb-3">
                  Focus: {item.focus}
                </p>

                {/* Summary */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {item.summary}
                </p>

                {/* Key Points Preview */}
                <ul className="space-y-2 mb-6 border-t border-white/10 pt-4 text-xs text-slate-300">
                  {item.initiatives.slice(0, 3).map((sub, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#146BFF] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{sub}</span>
                    </li>
                  ))}
                  {item.initiatives.length > 3 && (
                    <li className="text-[11px] text-[#146BFF] font-semibold pl-5">
                      +{item.initiatives.length - 3} more strategic measures
                    </li>
                  )}
                </ul>
              </div>

              {/* Card Action Button */}
              <button
                type="button"
                onClick={() => setSelectedInitiative(item)}
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/5 hover:bg-[#146BFF] text-white text-xs font-bold tracking-wide uppercase transition-all duration-200 border border-white/10 group-hover:border-[#146BFF]"
              >
                <span>{item.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Action */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#061426] via-[#0F2B4E] to-[#061426] border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-bold font-display text-white">
              Ready to help shape these initiatives?
            </h4>
            <p className="text-sm text-slate-300 max-w-xl">
              The Auspicious Era thrives on student ideas, committee participation, and constructive input across all faculties.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenJoin}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-[#146BFF] hover:bg-blue-600 transition-all shrink-0 shadow-lg shadow-[#146BFF]/30"
          >
            <span>Get Involved Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Deep-dive modal */}
      <InitiativeModal
        initiative={selectedInitiative}
        onClose={() => setSelectedInitiative(null)}
        onJoinAction={onOpenJoin}
      />
    </section>
  );
};
