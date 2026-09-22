import React from 'react';
import { X, Play, Volume2, Award, Quote, CheckCircle2 } from 'lucide-react';
import { SiteConfig } from '../types';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: SiteConfig;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose, config }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      id="story-modal-overlay"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#091D35] border border-white/20 rounded-3xl p-6 sm:p-8 text-white shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        id="story-modal-content"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#146BFF] mb-2">
          <Award className="w-4 h-4" />
          <span>The Auspicious Era • Personal Story</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
          Why I Believe in Clarity & Service
        </h3>
        
        <p className="text-sm text-blue-200 mb-6 font-medium">
          A note from Onifade Sulaiman (Mr. Clarity)
        </p>

        {/* Highlight quote */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#061426] border border-[#146BFF]/30 relative mb-6">
          <Quote className="w-8 h-8 text-[#146BFF]/40 absolute top-3 right-3" />
          <p className="font-handwriting text-2xl text-blue-100 font-bold mb-1">
            "{config.quote}"
          </p>
          <p className="text-xs text-slate-400">
            — {config.name}, Olabisi Onabanjo University
          </p>
        </div>

        {/* Story copy */}
        <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
          <p>
            When I joined Olabisi Onabanjo University as a Computer Science student, one reality struck me early: so many talented students miss out on scholarships, internships, tech competitions, or even academic distinctions simply because the right information was scattered, confusing, or received too late.
          </p>
          <p>
            That realization is why people began calling me <strong className="text-white font-semibold">Mr. Clarity</strong>. Whether it was coordinating tutorial circles, drafting clear departmental briefings as General Secretary, or helping peers understand digital tools, my conviction stayed the same:
          </p>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 my-4">
            <p className="text-white font-medium text-sm sm:text-base italic">
              "When people have the right information, skills and opportunities, they can make better decisions and create better outcomes."
            </p>
          </div>
          <p>
            <strong className="text-white">The Auspicious Era</strong> is not just a tenure concept or a catchy phrase. It is a genuine, student-first commitment to practical initiatives, student welfare, technology enablement, and campus unity.
          </p>
        </div>

        {/* Quick core takeaways */}
        <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#146BFF] shrink-0" />
            <span>Accessible academic resources for all</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#146BFF] shrink-0" />
            <span>Real technology & digital skills training</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#146BFF] shrink-0" />
            <span>Empathetic, responsive student welfare</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#146BFF] shrink-0" />
            <span>Transparent, accountable representation</span>
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#146BFF] hover:bg-blue-600 transition-colors"
          >
            Close & Continue Reading
          </button>
        </div>
      </div>
    </div>
  );
};
