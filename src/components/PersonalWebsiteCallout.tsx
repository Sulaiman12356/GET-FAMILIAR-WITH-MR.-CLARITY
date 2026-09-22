import React from 'react';
import { ExternalLink, Globe, Sparkles, Code2, Terminal } from 'lucide-react';

interface PersonalWebsiteProps {
  url?: string;
  onConfigureClick?: () => void;
}

export const PersonalWebsiteCallout: React.FC<PersonalWebsiteProps> = ({ 
  url,
  onConfigureClick 
}) => {
  const hasUrl = Boolean(url && url.trim().length > 0);

  return (
    <section 
      id="personal-website" 
      className="py-16 lg:py-20 bg-[#F5F7FA] text-[#111827] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#091D35] via-[#0F2B4E] to-[#091D35] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden border border-white/10">
          
          {/* Subtle tech background graphic */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 flex items-center justify-center pointer-events-none">
            <Terminal className="w-72 h-72 text-white" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-blue-200 border border-white/10">
              <Code2 className="w-3.5 h-3.5 text-[#146BFF]" />
              <span>BEYOND CAMPUS</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white">
              Want To Know More About Mr. Clarity?
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              The Auspicious Era is only one part of my journey. Explore my wider work, projects, skills, digital services and the ideas I am building beyond campus.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              {hasUrl ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#146BFF] hover:bg-blue-600 text-white font-bold text-sm transition-all shadow-md shadow-[#146BFF]/30"
                >
                  <Globe className="w-4 h-4" />
                  <span>Visit My Personal Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={onConfigureClick}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#146BFF] hover:bg-blue-600 text-white font-bold text-sm transition-all shadow-md shadow-[#146BFF]/30"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Visit My Personal Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-blue-200/80 italic">
                    (Click to configure personal website link)
                  </span>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
