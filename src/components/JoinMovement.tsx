import React, { useState } from 'react';
import { ArrowRight, MessageSquare, Check, Copy } from 'lucide-react';
import { getWhatsAppUrl, DEFAULT_PREFILLED_MESSAGE } from '../utils/whatsapp';

interface JoinMovementProps {
  whatsAppNumber: string;
}

export const JoinMovement: React.FC<JoinMovementProps> = ({ whatsAppNumber }) => {
  const whatsAppUrl = getWhatsAppUrl(whatsAppNumber);
  const [copied, setCopied] = useState(false);

  const handleCopyMessage = () => {
    navigator.clipboard?.writeText(DEFAULT_PREFILLED_MESSAGE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="join" 
      className="py-20 lg:py-32 bg-[#F6F9FF] text-[#111827] border-b border-[#E5E7EB]/80 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#EAF2FF] text-[#155EEF] mb-4">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>JOIN THE MOVEMENT</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-[#0B1F3A]">
          Do You Want To Be Part Of The Journey?
        </h2>

        {/* Copy */}
        <p className="mt-4 text-base sm:text-lg text-[#667085] leading-relaxed max-w-2xl mx-auto">
          The Auspicious Era is bigger than one person. It is about students who believe that better ideas, better information, stronger communities and meaningful opportunities can create a better student experience.
        </p>

        {/* Conversion Action Box */}
        <div className="mt-10 bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB] shadow-lg max-w-xl mx-auto">
          
          <span className="text-xs font-bold uppercase tracking-widest text-[#155EEF] block mb-2">
            DIRECT WHATSAPP CONNECTION
          </span>

          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B1F3A] mb-5">
            JOIN THE MOVEMENT
          </h3>

          {/* Direct WhatsApp CTA Button */}
          <div className="space-y-3">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 py-4 px-8 rounded-xl bg-[#155EEF] hover:bg-[#1048B5] text-white font-bold text-base tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.99] group"
            >
              <MessageSquare className="w-5 h-5 fill-white/20" />
              <span>JOIN THE MOVEMENT</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-xs text-[#667085] font-medium pt-1">
              Simply send your name and department. That's all.
            </p>
          </div>

          {/* Pre-filled Message Preview Pill */}
          <div className="mt-6 pt-6 border-t border-slate-100 text-left">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#667085]">
                Pre-Filled Message Template:
              </span>
              <button
                type="button"
                onClick={handleCopyMessage}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#155EEF] hover:text-[#1048B5]"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy text'}</span>
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-[#F6F9FF] border border-[#E5E7EB] text-xs sm:text-sm text-[#111827] italic font-normal">
              "{DEFAULT_PREFILLED_MESSAGE}"
            </div>
            
            <p className="text-[11px] text-[#667085] mt-2">
              * When WhatsApp opens, simply replace [Name] and [Department] with your details and press send.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
