import React from 'react';
import { Quote } from 'lucide-react';

interface PersonalPhilosophyProps {
  quote: string;
  author: string;
}

export const PersonalPhilosophy: React.FC<PersonalPhilosophyProps> = ({ 
  quote, 
  author 
}) => {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] text-[#111827] border-b border-[#E5E7EB]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="w-12 h-12 rounded-full bg-[#EAF2FF] text-[#155EEF] flex items-center justify-center mx-auto mb-8">
          <Quote className="w-6 h-6 fill-[#155EEF]/20" />
        </div>

        <blockquote className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B1F3A] tracking-tight leading-tight max-w-3xl mx-auto">
          "{quote}"
        </blockquote>

        {/* Subtle royal blue line */}
        <div className="w-20 h-1 bg-[#155EEF] rounded-full mx-auto my-8" />

        <p className="text-base sm:text-lg font-bold text-[#0B1F3A]">
          — {author}
        </p>
        <span className="text-xs text-[#667085] mt-1 block uppercase tracking-wider font-semibold">
          Department of Computer Science • OOU
        </span>

      </div>
    </section>
  );
};
