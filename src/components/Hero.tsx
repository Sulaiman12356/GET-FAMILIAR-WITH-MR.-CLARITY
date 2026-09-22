import React from 'react';
import { ArrowRight, Play, Sparkles, BookOpen, Compass } from 'lucide-react';
import { SiteConfig } from '../types';
import { HeroPortrait } from './Visuals';

interface HeroProps {
  config: SiteConfig;
  heroImageUrl?: string;
  onOpenStory: () => void;
  onUploadPortrait?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  config, 
  heroImageUrl, 
  onOpenStory,
  onUploadPortrait 
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#061426] text-white overflow-hidden flex items-center"
    >
      {/* Background ambient lighting and subtle university grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#146BFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#0F2B4E]/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand & Messaging */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 sm:space-y-8">
            
            {/* Small uppercase label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#146BFF]/15 border border-[#146BFF]/30 w-fit text-blue-200 text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#146BFF] animate-pulse" />
              <span>{config.brand}</span>
              <span className="text-white/40">•</span>
              <span className="text-white/80">{config.institution}</span>
            </div>

            {/* Large headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight font-display text-white leading-[1.08]">
                {config.heroHeadline}
                <br />
                <span className="text-[#146BFF] inline-block mt-1">
                  {config.heroHeadlineHighlight}
                </span>
              </h1>
            </div>

            {/* Supporting text */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
              <strong className="text-white font-semibold">{config.name}</strong>, popularly known as{' '}
              <span className="text-[#146BFF] font-semibold underline decoration-blue-500/50 underline-offset-4">
                {config.nickname}
              </span>
              , is a Computer Science student, student leader, digital strategist and community builder focused on helping students discover opportunities, develop useful skills and create meaningful impact.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => scrollTo('about')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-[#146BFF] hover:bg-blue-600 active:scale-98 transition-all shadow-lg shadow-[#146BFF]/30 focus:outline-none focus:ring-2 focus:ring-[#146BFF]"
                id="hero-primary-cta"
              >
                <span>Explore My Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('legacy')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-white/10 hover:bg-white/15 hover:text-white border border-white/15 transition-all focus:outline-none focus:ring-2 focus:ring-white/20"
                id="hero-secondary-cta"
              >
                <Compass className="w-4 h-4 text-[#146BFF]" />
                <span>Discover The Legacy Tenure</span>
              </button>

              {/* Story Video / Audio Trigger button */}
              <button
                type="button"
                onClick={onOpenStory}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white transition-colors"
                id="hero-story-btn"
                title="Read Sulaiman's short leadership perspective"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#146BFF]">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Watch Story <span className="text-xs text-slate-400 font-mono">(1 min)</span></span>
              </button>
            </div>

            {/* Credibility mini bar */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#146BFF]" />
                <span>Computer Science Department</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#146BFF]" />
                <span>Former General Secretary Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#146BFF]" />
                <span>Student Mentorship & Tech Builder</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual & Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroPortrait 
              customUrl={heroImageUrl} 
              onUploadClick={onUploadPortrait}
            />
          </div>

        </div>
      </div>
    </section>
  );
};
