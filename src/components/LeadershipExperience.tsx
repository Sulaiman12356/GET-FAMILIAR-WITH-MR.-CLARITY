import React from 'react';
import { Users, FileText, HeartHandshake, Laptop, CheckCircle2 } from 'lucide-react';
import { LeadershipPillar } from '../types';

interface LeadershipExperienceProps {
  pillars: LeadershipPillar[];
}

export const LeadershipExperience: React.FC<LeadershipExperienceProps> = ({ pillars }) => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5 text-[#155EEF]" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#155EEF]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#155EEF]" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-[#155EEF]" />;
      default:
        return <Users className="w-5 h-5 text-[#155EEF]" />;
    }
  };

  return (
    <section 
      id="journey" 
      className="py-20 lg:py-28 bg-[#FFFFFF] text-[#111827] border-b border-[#E5E7EB]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EAF2FF] text-[#155EEF] mb-3">
            <span>EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-[#0B1F3A]">
            Leadership Is More Than A Title.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#667085]">
            Demonstrated commitment through grassroots representation, administrative leadership, community service, and digital solutions.
          </p>
        </div>

        {/* 4 Cards Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-[#E5E7EB] hover:border-[#155EEF]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#F6F9FF] group-hover:bg-[#EAF2FF] flex items-center justify-center transition-colors">
                    {getPillarIcon(item.icon)}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#667085]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-xl text-[#0B1F3A] tracking-tight group-hover:text-[#155EEF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-[#155EEF] mt-1 uppercase tracking-wide">
                  {item.subtitle}
                </p>

                <p className="text-sm sm:text-base text-[#667085] mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.highlights && (
                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#111827]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#155EEF] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
