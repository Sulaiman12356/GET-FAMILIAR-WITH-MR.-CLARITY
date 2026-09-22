import React from 'react';
import { ExternalLink, Globe } from 'lucide-react';

interface PersonalWebsiteCalloutProps {
  url?: string;
  onConfigureClick?: () => void;
}

export const PersonalWebsiteCallout: React.FC<PersonalWebsiteCalloutProps> = ({ 
  url,
  onConfigureClick 
}) => {
  const hasUrl = Boolean(url && url.trim().length > 0);

  return (
    <section 
      id="personal-website" 
      className="py-20 bg-[#FFFFFF] text-[#111827] border-b border-[#E5E7EB]/60"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E5E7EB] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-8">
          
          <div className="max-w-xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2FF] text-[#155EEF] text-xs font-bold uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" />
              <span>BEYOND THE AUSPICIOUS ERA</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#0B1F3A]">
              There's More To My Story.
            </h3>

            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              The Auspicious Era represents my student leadership journey, but it is only one part of who I am. Explore my wider work in technology, digital marketing, entrepreneurship, personal projects and digital innovation.
            </p>
          </div>

          <div className="shrink-0">
            {hasUrl ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B1F3A] hover:bg-[#155EEF] text-white font-bold text-xs sm:text-sm tracking-wide shadow-xs transition-colors"
              >
                <span>VISIT MY PERSONAL WEBSITE</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <button
                type="button"
                onClick={onConfigureClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B1F3A] hover:bg-[#155EEF] text-white font-bold text-xs sm:text-sm tracking-wide shadow-xs transition-colors"
              >
                <span>VISIT MY PERSONAL WEBSITE</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
