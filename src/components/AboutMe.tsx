import React from 'react';
import { 
  Laptop, 
  Users, 
  LineChart, 
  Cpu, 
  HeartHandshake, 
  GraduationCap, 
  Quote as QuoteIcon,
  ArrowRight
} from 'lucide-react';
import { SiteConfig } from '../types';
import { AboutPortrait } from './Visuals';

interface AboutMeProps {
  config: SiteConfig;
  profileImageUrl?: string;
  onUploadPhoto?: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ config, profileImageUrl, onUploadPhoto }) => {
  const roleIcons: Record<string, React.ReactNode> = {
    "Computer Science Student": <Laptop className="w-4 h-4 text-[#146BFF]" />,
    "Student Leader": <Users className="w-4 h-4 text-[#146BFF]" />,
    "Digital Strategist": <LineChart className="w-4 h-4 text-[#146BFF]" />,
    "Technology Enthusiast": <Cpu className="w-4 h-4 text-[#146BFF]" />,
    "Community Builder": <HeartHandshake className="w-4 h-4 text-[#146BFF]" />,
    "Mentor": <GraduationCap className="w-4 h-4 text-[#146BFF]" />
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="about" 
      className="py-20 lg:py-28 bg-[#FFFFFF] text-[#111827] relative border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Eyebrow */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#EAF2FF] text-[#146BFF] mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-[#091D35]">
            Meet <span className="text-[#146BFF]">Onifade Sulaiman</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium mt-1">
            Popularly known as <span className="font-semibold text-[#091D35]">Mr. Clarity</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Portrait Card with organic backdrop */}
          <div className="lg:col-span-5 flex justify-center">
            <AboutPortrait 
              customUrl={profileImageUrl}
              onUploadClick={onUploadPhoto}
            />
          </div>

          {/* Right Column: Bio, Roles, Quote */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="prose prose-slate max-w-none space-y-4 text-base sm:text-lg leading-relaxed text-slate-700">
              <p>
                {config.aboutIntro}
              </p>
              <p className="font-medium text-[#091D35]">
                {config.aboutBelief}
              </p>
              <p>
                {config.aboutImpact}
              </p>
            </div>

            {/* Profile Cards / Chips */}
            <div className="pt-2">
              <p className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-3">
                Key Dimensions & Focus Areas
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {config.roles.map((role) => (
                  <div 
                    key={role}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F5F7FA] border border-slate-200/80 hover:border-[#146BFF]/40 hover:bg-[#EAF2FF]/50 transition-colors"
                  >
                    <div className="p-1.5 rounded-lg bg-white shadow-xs shrink-0">
                      {roleIcons[role] || <GraduationCap className="w-4 h-4 text-[#146BFF]" />}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#091D35] truncate">
                      {role}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote Card with Signature */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#EAF2FF]/60 via-[#F5F7FA] to-white border border-[#146BFF]/20 relative shadow-xs">
              <QuoteIcon className="w-8 h-8 text-[#146BFF]/20 absolute top-4 right-4" />
              <p className="font-display font-semibold text-lg sm:text-xl text-[#091D35] italic leading-snug">
                "{config.quote}"
              </p>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-slate-800">
                    — {config.quoteAuthor}
                  </span>
                  <span className="block text-xs text-slate-500">
                    OOU Computer Science • Community Advocate
                  </span>
                </div>
                
                {/* Handwritten signature aesthetic */}
                <div className="font-handwriting text-3xl text-[#146BFF] font-bold select-none pr-2">
                  Sulaiman
                </div>
              </div>
            </div>

            {/* Action link */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => scrollTo('journey')}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#146BFF] hover:text-blue-700 group"
              >
                <span>Follow My Full Leadership Journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
