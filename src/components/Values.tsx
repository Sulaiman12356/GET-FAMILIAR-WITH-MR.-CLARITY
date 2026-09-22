import React from 'react';
import { 
  Sparkles, 
  HeartHandshake, 
  Lightbulb, 
  ShieldCheck, 
  TrendingUp, 
  UsersRound,
  Check
} from 'lucide-react';
import { CoreValue } from '../types';

interface ValuesProps {
  values: CoreValue[];
}

export const Values: React.FC<ValuesProps> = ({ values }) => {
  const getValueIcon = (title: string) => {
    switch (title.toUpperCase()) {
      case 'CLARITY':
        return <Sparkles className="w-5 h-5 text-[#146BFF]" />;
      case 'SERVICE':
        return <HeartHandshake className="w-5 h-5 text-[#146BFF]" />;
      case 'INNOVATION':
        return <Lightbulb className="w-5 h-5 text-[#146BFF]" />;
      case 'ACCOUNTABILITY':
        return <ShieldCheck className="w-5 h-5 text-[#146BFF]" />;
      case 'GROWTH':
        return <TrendingUp className="w-5 h-5 text-[#146BFF]" />;
      case 'COMMUNITY':
        return <UsersRound className="w-5 h-5 text-[#146BFF]" />;
      default:
        return <Check className="w-5 h-5 text-[#146BFF]" />;
    }
  };

  return (
    <section 
      id="values" 
      className="py-20 lg:py-28 bg-[#F5F7FA] text-[#111827] relative border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#EAF2FF] text-[#146BFF] mb-3">
            <span>CORE VALUES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-[#091D35]">
            What I Stand For
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Principles that guide my student advocacy, academic mentorship, and personal commitment to our university.
          </p>
        </div>

        {/* 6 Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val) => (
            <div
              key={val.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-[#146BFF]/40 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F5F7FA] group-hover:bg-[#EAF2FF] flex items-center justify-center mb-4 transition-colors">
                  {getValueIcon(val.title)}
                </div>
                <h3 className="font-display font-extrabold text-lg text-[#091D35] tracking-wide">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {val.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#146BFF]">
                <span>Guiding Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
