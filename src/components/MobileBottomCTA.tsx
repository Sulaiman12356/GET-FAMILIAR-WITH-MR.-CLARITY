import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface MobileBottomCTAProps {
  whatsAppNumber: string;
}

export const MobileBottomCTA: React.FC<MobileBottomCTAProps> = ({ whatsAppNumber }) => {
  const whatsAppUrl = getWhatsAppUrl(whatsAppNumber);

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E5E7EB] p-3 shadow-lg">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="text-left leading-tight pl-1">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#155EEF]">
            The Auspicious Era
          </p>
          <p className="text-xs font-bold text-[#0B1F3A]">
            Connect on WhatsApp
          </p>
        </div>

        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#155EEF] active:bg-[#1048B5] text-white font-bold text-xs shadow-sm shrink-0"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-white/20" />
          <span>JOIN THE MOVEMENT</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
