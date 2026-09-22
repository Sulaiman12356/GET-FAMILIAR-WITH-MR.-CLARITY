import React, { useState } from 'react';
import { 
  GraduationCap, 
  Users, 
  FileText, 
  Code, 
  Lightbulb, 
  Rocket, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2
} from 'lucide-react';
import { TimelineItem } from '../types';

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const [activeStep, setActiveStep] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <GraduationCap className="w-5 h-5" />;
      case 1: return <Users className="w-5 h-5" />;
      case 2: return <FileText className="w-5 h-5" />;
      case 3: return <Code className="w-5 h-5" />;
      case 4: return <Lightbulb className="w-5 h-5" />;
      case 5: return <Rocket className="w-5 h-5" />;
      default: return <GraduationCap className="w-5 h-5" />;
    }
  };

  return (
    <section 
      id="journey" 
      className="py-20 lg:py-28 bg-[#F5F7FA] text-[#111827] relative border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#EAF2FF] text-[#146BFF] mb-3">
            <span>MY JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-[#091D35]">
            The Journey So Far
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A chronological progression of learning, grassroots representation, institutional administration, and digital student building at OOU.
          </p>
        </div>

        {/* ================= DESKTOP TIMELINE (Horizontal Interactive Layout) ================= */}
        <div className="hidden lg:block">
          
          {/* Horizontal Step Connectors */}
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0" />
            <div 
              className="absolute top-1/2 left-0 h-1 bg-[#146BFF] -translate-y-1/2 z-0 transition-all duration-500"
              style={{ width: `${(activeStep / (items.length - 1)) * 100}%` }}
            />

            <div className="relative z-10 flex justify-between items-center">
              {items.map((item, index) => {
                const isPassed = index <= activeStep;
                const isCurrent = index === activeStep;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className="group flex flex-col items-center focus:outline-none"
                    aria-label={`Step ${item.step}: ${item.title}`}
                  >
                    <div 
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 font-display font-bold text-sm shadow-sm ${
                        isCurrent
                          ? 'bg-[#146BFF] text-white ring-4 ring-[#146BFF]/20 scale-110'
                          : isPassed
                          ? 'bg-[#091D35] text-white group-hover:bg-[#146BFF]'
                          : 'bg-white text-slate-400 border border-slate-300 group-hover:border-[#146BFF]'
                      }`}
                    >
                      {item.step}
                    </div>
                    <span 
                      className={`mt-3 text-xs font-bold uppercase tracking-wider transition-colors max-w-[110px] text-center ${
                        isCurrent ? 'text-[#146BFF]' : 'text-slate-600 group-hover:text-slate-900'
                      }`}
                    >
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Card Spotlight */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm max-w-4xl mx-auto transition-all">
            <div className="flex items-start justify-between gap-6">
              
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#EAF2FF] text-[#146BFF] flex items-center justify-center shrink-0 shadow-xs">
                  {getStepIcon(activeStep)}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#146BFF] px-2.5 py-0.5 rounded-full bg-[#EAF2FF]">
                      Stage {items[activeStep].step}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                      {items[activeStep].role}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-[#091D35] mt-1">
                    {items[activeStep].title}
                  </h3>
                  <p className="text-base text-slate-700 mt-2 leading-relaxed max-w-2xl">
                    {items[activeStep].description}
                  </p>

                  {items[activeStep].highlights && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {items[activeStep].highlights.map((h, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-[#F5F7FA] px-3 py-1 rounded-lg border border-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#146BFF]" />
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
                  aria-label="Previous timeline stage"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  disabled={activeStep === items.length - 1}
                  onClick={() => setActiveStep(prev => Math.min(items.length - 1, prev + 1))}
                  className="p-2.5 rounded-xl bg-[#146BFF] text-white hover:bg-blue-600 disabled:opacity-40 disabled:hover:bg-[#146BFF] transition-colors"
                  aria-label="Next timeline stage"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>
          </div>

          {/* Quick Overview Grid below */}
          <div className="grid grid-cols-6 gap-3 mt-8">
            {items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`text-left p-3 rounded-2xl border transition-all text-xs ${
                  index === activeStep 
                    ? 'bg-[#EAF2FF] border-[#146BFF] shadow-xs' 
                    : 'bg-white border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <span className="font-mono font-bold text-[#146BFF] block">{item.step}</span>
                <span className="font-bold text-[#091D35] block truncate mt-0.5">{item.title}</span>
              </button>
            ))}
          </div>

        </div>

        {/* ================= MOBILE TIMELINE (Vertical Stack Layout) ================= */}
        <div className="block lg:hidden space-y-6">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-[#146BFF]/30 space-y-8">
            {items.map((item, index) => (
              <div key={item.id} className="relative group">
                
                {/* Node indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-8 h-8 rounded-full bg-[#146BFF] text-white flex items-center justify-center font-display font-bold text-xs ring-4 ring-[#F5F7FA] shadow-xs">
                  {item.step}
                </div>

                <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[11px] font-bold text-[#146BFF] uppercase tracking-wider">
                      {item.role}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Phase {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-[#091D35]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  {item.highlights && (
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-100">
                      {item.highlights.map((h, i) => (
                        <span key={i} className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
