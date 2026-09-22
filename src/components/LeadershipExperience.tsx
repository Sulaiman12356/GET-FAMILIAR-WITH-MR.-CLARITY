import React from 'react';
import { 
  Megaphone, 
  FileCheck, 
  MessageSquareShare, 
  HeartHandshake, 
  CheckCircle2,
  Shield,
  Layers
} from 'lucide-react';
import { LeadershipPillar } from '../types';

interface LeadershipProps {
  pillars: LeadershipPillar[];
}

export const LeadershipExperience: React.FC<LeadershipProps> = ({ pillars }) => {
  const getPillarIcon = (title: string) => {
    switch (title) {
      case 'REPRESENTATION':
        return <Megaphone className="w-6 h-6 text-[#146BFF]" />;
      case 'ADMINISTRATION':
        return <FileCheck className="w-6 h-6 text-[#146BFF]" />;
      case 'COMMUNICATION':
        return <MessageSquareShare className="w-6 h-6 text-[#146BFF]" />;
      case 'SERVICE':
        return <HeartHandshake className="w-6 h-6 text-[#146BFF]" />;
      default:
        return <Shield className="w-6 h-6 text-[#146BFF]" />;
    }
  };

  return (
    <section 
      id="leadership" 
      className="py-20 lg:py-28 bg-[#FFFFFF] text-[#111827] relative border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#EAF2FF] text-[#146BFF] mb-3">
            <span>CORE PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-[#091D35]">
            Leadership Is More Than A Title
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Real student leadership is defined by daily responsibility, selfless service, crystal-clear communication, and dependable execution.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-[#F5F7FA] rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#146BFF]/40 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#EAF2FF] flex items-center justify-center mb-5 border border-slate-200/80 transition-colors shadow-xs">
                  {getPillarIcon(pillar.title)}
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-extrabold text-lg tracking-wider text-[#091D35]">
                    {pillar.title}
                  </h3>
                  <span className="text-[11px] font-semibold text-[#146BFF] uppercase tracking-wide">
                    {pillar.focus}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mt-2">
                  {pillar.description}
                </p>
              </div>

              {/* Verified Metric / Action indicator */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-medium text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-[#146BFF] shrink-0" />
                <span>{pillar.metrics || "Active Service Metric"}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Grounding Note (Honest, factual framing as required) */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#EAF2FF]/50 border border-[#146BFF]/20 max-w-3xl mx-auto flex items-center gap-3 text-xs sm:text-sm text-slate-700">
          <Layers className="w-5 h-5 text-[#146BFF] shrink-0" />
          <p>
            <strong className="text-[#091D35] font-semibold">Credibility First:</strong> All records reflect verified service as student representative and General Secretary at OOU. No exaggerated stats—just intentional, transparent contribution.
          </p>
        </div>

      </div>
    </section>
  );
};
