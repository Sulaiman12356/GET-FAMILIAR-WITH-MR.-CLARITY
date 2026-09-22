import React from 'react';
import { X, CheckCircle, ArrowRight, Sparkles, GraduationCap, HeartPulse, Cpu, Briefcase, Users } from 'lucide-react';
import { LegacyInitiative } from '../types';

interface InitiativeModalProps {
  initiative: LegacyInitiative | null;
  onClose: () => void;
  onJoinAction: () => void;
}

export const InitiativeModal: React.FC<InitiativeModalProps> = ({ 
  initiative, 
  onClose,
  onJoinAction 
}) => {
  if (!initiative) return null;

  const getInitiativeIcon = (id: string) => {
    switch (id) {
      case 'academic-excellence': return <GraduationCap className="w-6 h-6 text-[#146BFF]" />;
      case 'student-welfare': return <HeartPulse className="w-6 h-6 text-[#146BFF]" />;
      case 'technology-innovation': return <Cpu className="w-6 h-6 text-[#146BFF]" />;
      case 'skills-opportunities': return <Briefcase className="w-6 h-6 text-[#146BFF]" />;
      case 'community-unity': return <Users className="w-6 h-6 text-[#146BFF]" />;
      default: return <Sparkles className="w-6 h-6 text-[#146BFF]" />;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      id="initiative-modal-overlay"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#091D35] border border-white/20 rounded-3xl p-6 sm:p-8 text-white shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        id="initiative-modal-content"
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
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/15">
            {getInitiativeIcon(initiative.id)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-[#146BFF] px-2 py-0.5 rounded bg-[#146BFF]/20">
                Pillar {initiative.number}
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                {initiative.focus}
              </span>
            </div>
            <h3 className="text-2xl font-bold font-display text-white mt-1">
              {initiative.title}
            </h3>
          </div>
        </div>

        {/* Core Summary */}
        <p className="text-base text-blue-100/90 leading-relaxed mb-6 font-medium">
          {initiative.summary}
        </p>

        {/* Strategic Action Items */}
        <div className="bg-[#061426] p-5 sm:p-6 rounded-2xl border border-white/10 space-y-3 mb-6">
          <h4 className="text-xs uppercase font-bold tracking-wider text-[#146BFF]">
            Practical Action Plan & Initiatives
          </h4>
          <ul className="space-y-2.5">
            {initiative.initiatives.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-[#146BFF] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Student Impact Vision */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 mb-6">
          <p>
            <strong className="text-white">Why This Matters For You:</strong> This initiative directly cuts red tape, expands peer-to-peer assistance, and provides verifiable access to knowledge and opportunities across Olabisi Onabanjo University campuses.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/10">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          >
            Back to All Initiatives
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onJoinAction();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#146BFF] hover:bg-blue-600 transition-colors shadow-md shadow-[#146BFF]/30"
          >
            <span>Support This Pillar in Get Involved</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
