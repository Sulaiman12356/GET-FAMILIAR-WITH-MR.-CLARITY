import React from 'react';
import { Camera, Sparkles, User } from 'lucide-react';

export const BrandLogo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
    <div className="w-full h-full rounded-xl bg-[#0B1F3A] flex items-center justify-center text-white font-display font-black text-sm tracking-wider shadow-sm border border-slate-200">
      <span className="text-white">A</span>
      <span className="text-[#155EEF] font-bold text-xs -ml-0.5">E</span>
    </div>
  </div>
);

interface PortraitVisualProps {
  imageUrl?: string;
  name?: string;
  nickname?: string;
  onUploadClick?: () => void;
  className?: string;
  aspect?: string;
}

export const PortraitVisual: React.FC<PortraitVisualProps> = ({
  imageUrl,
  name = "Onifade Sulaiman",
  nickname = "Mr. Clarity",
  onUploadClick,
  className = "w-full max-w-md",
  aspect = "aspect-[4/5]"
}) => {
  return (
    <div className={`relative ${className} group`}>
      {/* Subtle background glow/frame */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#EAF2FF] via-[#F6F9FF] to-white rounded-3xl blur-md opacity-70" />

      {/* Main Portrait Card */}
      <div className={`relative ${aspect} rounded-2xl overflow-hidden bg-white border border-[#E5E7EB] shadow-lg flex flex-col justify-end transition-all duration-300 group-hover:shadow-xl group-hover:border-[#155EEF]/30`}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`${name} (${nickname})`}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-[#F6F9FF] via-[#EAF2FF]/60 to-[#EAF2FF] flex flex-col items-center justify-center p-6 text-center">
            {/* Elegant portrait placeholder avatar */}
            <div className="relative mb-5">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white border-2 border-[#155EEF]/20 shadow-md flex items-center justify-center text-[#0B1F3A]">
                <User className="w-14 h-14 text-[#155EEF]/80 stroke-[1.5]" />
              </div>
              <div className="absolute -bottom-1 -right-1 p-2 bg-[#155EEF] text-white rounded-full shadow-md">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="space-y-1">
              <h4 className="font-display font-bold text-[#0B1F3A] text-lg sm:text-xl">
                {name}
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-[#155EEF] tracking-wide">
                Popularly known as {nickname}
              </p>
              <p className="text-xs text-[#667085] pt-1 max-w-xs">
                Computer Science • Student Leader • Digital Strategist
              </p>
            </div>

            {onUploadClick && (
              <button
                type="button"
                onClick={onUploadClick}
                className="mt-6 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white border border-[#E5E7EB] hover:border-[#155EEF] text-xs font-semibold text-[#0B1F3A] hover:text-[#155EEF] shadow-xs transition-colors"
              >
                <Camera className="w-3.5 h-3.5 text-[#155EEF]" />
                <span>Upload Portrait Photo</span>
              </button>
            )}
          </div>
        )}

        {/* Bottom subtle identity caption plate */}
        <div className="relative z-10 p-4 sm:p-5 bg-gradient-to-t from-white via-white/95 to-transparent border-t border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#155EEF]">
              {nickname}
            </p>
            <h5 className="font-display font-extrabold text-sm sm:text-base text-[#0B1F3A]">
              {name}
            </h5>
          </div>
          <span className="text-[11px] font-medium text-[#667085] bg-[#F6F9FF] px-2.5 py-1 rounded-md border border-slate-200">
            The Auspicious Era
          </span>
        </div>
      </div>
    </div>
  );
};
