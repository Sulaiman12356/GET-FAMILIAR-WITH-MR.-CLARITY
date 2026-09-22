import React from 'react';
import { 
  Sparkles, 
  HeartHandshake, 
  ShieldCheck, 
  Lightbulb, 
  Compass, 
  Users 
} from 'lucide-react';
import { CoreValue } from '../types';

interface ValuesProps {
  values: CoreValue[];
}

export const Values: React.FC<ValuesProps> = ({ values }) => {
  const getValueIcon = (title: string) => {
    switch (title.toUpperCase()) {
      case 'CLARITY':
        return <Sparkles className="w-5 h-5 text-[#155EEF]" />;
      case 'SERVICE':
        return <HeartHandshake className="w-5 h-5 text-[#155EEF]" />;
      case 'ACCOUNTABILITY':
        return <ShieldCheck className="w-5 h-5 text-[#155EEF]" />;
      case 'INNOVATION':
        return <Lightbulb className="w-5 h-5 text-[#155EEF]" />;
      case 'OPPORTUNITY':
        return <Compass className="w-5 h-5 text-[#155EEF]" />;
      case 'COMMUNITY':
        return <Users className="w-5 h-5 text-[#155EEF]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#155EEF]" />;
    }
  };

  return (
    <section 
      id="values" 
      className="py-20 lg:py-28 bg-[#FFFFFF] text-[#111827] border-b border-[#E5E7EB]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EAF2FF] text-[#155EEF] mb-3">
            <span>WHAT I BELIEVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-[#0B1F3A]">
            The Values Behind The Vision
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#667085]">
            Principles that guide every initiative, representation effort, and commitment to the student body.
          </p>
        </div>

        {/* 6 Minimalist Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val) => (
            <div
              key={val.id}
              className="bg-white rounded-2xl p-7 border border-[#E5E7EB] hover:border-[#155EEF]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F6F9FF] group-hover:bg-[#EAF2FF] flex items-center justify-center mb-5 transition-colors">
                  {getValueIcon(val.title)}
                </div>
                <h3 className="font-display font-extrabold text-lg text-[#0B1F3A] tracking-wider group-hover:text-[#155EEF] transition-colors">
                  {val.title}
                </h3>
                <p className="text-sm text-[#667085] mt-2 leading-relaxed">
                  {val.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#155EEF]">
                <span>Guiding Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
