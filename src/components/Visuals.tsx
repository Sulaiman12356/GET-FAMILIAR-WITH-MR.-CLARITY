import React from 'react';
import { Camera, Sparkles, GraduationCap } from 'lucide-react';

interface PortraitProps {
  type: 'hero' | 'about' | 'campus';
  imageUrl?: string;
  onEditImage?: () => void;
  className?: string;
}

export const BrandLogo: React.FC<{ className?: string; inverted?: boolean }> = ({ 
  className = "w-9 h-9", 
  inverted = false 
}) => {
  return (
    <div className={`relative flex items-center justify-center rounded-xl overflow-hidden shadow-sm transition-transform hover:scale-105 ${className} ${
      inverted ? 'bg-white text-[#091D35]' : 'bg-[#146BFF] text-white'
    }`}>
      {/* Monogram A stylized emblem */}
      <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current" aria-hidden="true">
        <path d="M50 14 L82 82 L65 82 L50 48 L35 82 L18 82 Z" fill={inverted ? '#091D35' : '#FFFFFF'} />
        <path d="M38 64 L62 64 L50 38 Z" fill={inverted ? '#146BFF' : '#EAF2FF'} opacity="0.9" />
        <circle cx="50" cy="22" r="4" fill={inverted ? '#146BFF' : '#FFFFFF'} />
      </svg>
    </div>
  );
};

export const HeroPortrait: React.FC<{ 
  customUrl?: string; 
  onUploadClick?: () => void;
}> = ({ customUrl, onUploadClick }) => {
  return (
    <div className="relative w-full max-w-[500px] mx-auto aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-b from-[#0F2B4E] to-[#061426]">
      {/* Glow behind portrait */}
      <div className="absolute -top-12 -right-12 w-72 h-72 bg-[#146BFF]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#146BFF]/20 rounded-full blur-3xl pointer-events-none" />

      {customUrl ? (
        <img
          src={customUrl}
          alt="Onifade Sulaiman (Mr. Clarity)"
          className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-102"
          referrerPolicy="no-referrer"
        />
      ) : (
        /* Stylized High-Fidelity Editorial Leadership Portrait Placeholder */
        <div className="relative w-full h-full flex flex-col items-center justify-between p-6 sm:p-8 text-white select-none">
          {/* Subtle Campus Architecture Watermark Background */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#146BFF_1px,transparent_1px)] [background-size:18px_18px]" />
          
          <div className="relative z-10 w-full flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-white/10 backdrop-blur-md text-blue-200 border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#146BFF]" />
              Official Portrait
            </span>
            <span className="text-xs text-slate-300 font-medium tracking-wider">
              OOU • 2026
            </span>
          </div>

          {/* Central Editorial Silhouette / Portrait Art */}
          <div className="relative z-10 flex flex-col items-center text-center my-auto">
            <div className="relative group">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-[#146BFF] via-[#0F2B4E] to-[#EAF2FF]/20 p-1 shadow-inner">
                <div className="w-full h-full rounded-full bg-[#091D35] flex flex-col items-center justify-center relative overflow-hidden border border-white/15">
                  {/* Subtle portrait illustration */}
                  <svg viewBox="0 0 100 100" className="w-28 h-28 text-slate-300 fill-current opacity-85">
                    {/* Head */}
                    <circle cx="50" cy="38" r="19" />
                    {/* Neck and shoulders */}
                    <path d="M22 84 C24 64, 38 56, 50 56 C62 56, 76 64, 78 84 Z" />
                  </svg>
                  <div className="absolute bottom-3 bg-[#146BFF] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Mr. Clarity
                  </div>
                </div>
              </div>
              {onUploadClick && (
                <button
                  type="button"
                  onClick={onUploadClick}
                  className="absolute bottom-1 right-1 p-2 rounded-full bg-[#146BFF] text-white shadow-lg hover:bg-blue-600 transition-colors"
                  title="Upload or change portrait photo"
                >
                  <Camera className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="mt-5 space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-display">
                Onifade Sulaiman
              </h3>
              <p className="text-sm font-medium text-blue-200">
                Popularly known as <span className="text-white font-semibold underline decoration-[#146BFF] decoration-2">Mr. Clarity</span>
              </p>
              <p className="text-xs text-slate-400 mt-1 max-w-[280px]">
                Computer Science • Student Leader • Community Builder
              </p>
            </div>
          </div>

          {/* Bottom badge */}
          <div className="relative z-10 w-full pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-1.5 font-medium">
              <GraduationCap className="w-4 h-4 text-[#146BFF]" />
              Olabisi Onabanjo University
            </span>
            <span className="text-[11px] text-blue-300/80 font-mono">
              #TheAuspiciousEra
            </span>
          </div>
        </div>
      )}

      {/* Floating Inspiration Sticker (Mockup badge) */}
      <div className="absolute top-4 right-4 z-20 hidden sm:flex flex-col items-end pointer-events-none">
        <div className="px-3.5 py-2 rounded-xl bg-[#061426]/90 backdrop-blur-md border border-white/15 shadow-xl text-right">
          <p className="font-handwriting text-xl text-white tracking-wide leading-tight">
            Better Students.
          </p>
          <p className="font-handwriting text-xl text-[#146BFF] tracking-wide leading-tight">
            Bigger Possibilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export const AboutPortrait: React.FC<{ 
  customUrl?: string; 
  onUploadClick?: () => void;
}> = ({ customUrl, onUploadClick }) => {
  return (
    <div className="relative w-full max-w-[420px] mx-auto aspect-square sm:aspect-[4/4.5] rounded-3xl overflow-hidden bg-gradient-to-tr from-[#EAF2FF] via-white to-[#EAF2FF] p-3 sm:p-4 border border-[#146BFF]/15 shadow-xl group">
      {/* Light organic backdrop */}
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#146BFF]/10 rounded-full blur-2xl pointer-events-none" />
      
      {/* Handwritten "I'm Sulaiman" sticker accent */}
      <div className="absolute top-6 left-6 z-20 pointer-events-none">
        <span className="font-handwriting text-2xl sm:text-3xl text-[#091D35] rotate-[-7deg] inline-block font-bold">
          I'm Sulaiman
        </span>
        <svg className="w-10 h-6 text-[#146BFF] -mt-1 ml-4" viewBox="0 0 50 30" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5,5 Q25,25 45,15" strokeLinecap="round" />
          <path d="M38,12 L45,15 L42,22" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#091D35] flex flex-col justify-end">
        {customUrl ? (
          <img
            src={customUrl}
            alt="Onifade Sulaiman (Mr. Clarity)"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-white relative">
            {/* Background geometry */}
            <div className="w-32 h-32 rounded-full bg-[#146BFF]/30 blur-xl absolute" />
            <div className="relative z-10">
              <div className="w-24 h-24 rounded-full bg-[#0F2B4E] border-2 border-[#146BFF] mx-auto flex items-center justify-center mb-3 shadow-lg">
                <span className="font-display font-extrabold text-2xl text-white">OS</span>
              </div>
              <h4 className="text-xl font-bold font-display text-white">Onifade Sulaiman</h4>
              <p className="text-xs text-blue-200 mt-0.5">Mr. Clarity</p>
              <p className="text-[11px] text-slate-300 mt-2 max-w-[200px] mx-auto">
                Dedicated to clarity, student mentorship and impactful service.
              </p>
            </div>
            {onUploadClick && (
              <button
                type="button"
                onClick={onUploadClick}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all"
                title="Change photo"
              >
                <Camera className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

        {/* Bottom nameplate */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#061426] via-[#061426]/80 to-transparent text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#146BFF] font-bold">Leadership Profile</p>
              <p className="text-sm font-bold font-display">Onifade Sulaiman</p>
            </div>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/15 text-slate-200 font-mono">
              CS Dept
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CampusBannerCard: React.FC<{
  customUrl?: string;
  onUploadClick?: () => void;
}> = ({ customUrl, onUploadClick }) => {
  return (
    <div className="relative w-full h-[260px] sm:h-[300px] rounded-3xl overflow-hidden border border-[#146BFF]/20 shadow-xl bg-gradient-to-br from-[#091D35] to-[#0F2B4E] group">
      {customUrl ? (
        <img
          src={customUrl}
          alt="Olabisi Onabanjo University Campus"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      ) : (
        /* OOU Campus Entrance Landmark Graphic */
        <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-[#091D35] text-white">
          {/* Subtle architectural gate graphic */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#146BFF_1.5px,transparent_1.5px)] [background-size:20px_20px]" />
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold tracking-wider text-blue-200 border border-white/10">
              <GraduationCap className="w-3.5 h-3.5 text-[#146BFF]" />
              Olabisi Onabanjo University
            </div>
            {onUploadClick && (
              <button
                type="button"
                onClick={onUploadClick}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Change campus banner"
              >
                <Camera className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 mt-auto">
            <div>
              <span className="font-handwriting text-3xl sm:text-4xl text-white font-bold block mb-1 drop-shadow-md">
                Together We Rise
              </span>
              <p className="text-xs sm:text-sm text-blue-100/90 font-medium">
                Main Campus, Ago-Iwoye & Faculty Campuses across Ogun State
              </p>
            </div>

            <div className="px-4 py-2 rounded-xl bg-[#146BFF]/20 border border-[#146BFF]/40 backdrop-blur-md text-xs font-semibold text-white">
              A Stronger, Smarter OOU Community
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
