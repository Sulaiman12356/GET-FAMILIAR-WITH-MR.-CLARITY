import React from 'react';
import { Info, Key, Network, Zap, ArrowRight, Check } from 'lucide-react';
import { CampusBannerCard } from './Visuals';

interface WhyThisMattersProps {
  statement: string;
  pillars: {
    title: string;
    description: string;
    icon: string;
  }[];
  campusImageUrl?: string;
  onUploadCampusPhoto?: () => void;
  onJoinClick?: () => void;
}

export const WhyThisMatters: React.FC<WhyThisMattersProps> = ({ 
  statement, 
  pillars,
  campusImageUrl,
  onUploadCampusPhoto,
  onJoinClick
}) => {
  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'information': return <Info className="w-5 h-5 text-[#146BFF]" />;
      case 'access': return <Key className="w-5 h-5 text-[#146BFF]" />;
      case 'connection': return <Network className="w-5 h-5 text-[#146BFF]" />;
      case 'action': return <Zap className="w-5 h-5 text-[#146BFF]" />;
      default: return <Check className="w-5 h-5 text-[#146BFF]" />;
    }
  };

  return (
    <section 
      id="why-matters" 
      className="py-20 lg:py-28 bg-[#FFFFFF] text-[#111827] relative border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#EAF2FF] text-[#146BFF] mb-3">
            <span>WHY THIS MATTERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-[#091D35]">
            Why The Legacy Matters
          </h2>
          <p className="mt-4 text-xl sm:text-2xl font-bold text-[#146BFF] font-display leading-snug">
            "{statement}"
          </p>
        </div>

        {/* 4 Pillars and Campus Gateway Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: 4 Core Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {pillars.map((p, idx) => (
              <div 
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#F5F7FA] border border-slate-200/90 hover:border-[#146BFF]/40 hover:bg-white transition-all shadow-xs group"
              >
                <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-[#EAF2FF] flex items-center justify-center mb-3 shadow-xs border border-slate-200/80">
                  {getIcon(p.title)}
                </div>
                <h3 className="text-base font-bold font-display text-[#091D35]">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}

            <div className="sm:col-span-2 pt-2">
              <button
                type="button"
                onClick={onJoinClick}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#091D35] hover:bg-[#146BFF] text-white text-sm font-semibold transition-colors shadow-sm"
              >
                <span>Join The Movement Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Campus Banner Card */}
          <div className="lg:col-span-5">
            <CampusBannerCard 
              customUrl={campusImageUrl}
              onUploadClick={onUploadCampusPhoto}
            />
          </div>

        </div>

      </div>
    </section>
  );
};
