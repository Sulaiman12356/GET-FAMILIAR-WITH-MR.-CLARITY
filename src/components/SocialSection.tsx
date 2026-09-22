import React from 'react';
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  Phone, 
  Share2, 
  ExternalLink 
} from 'lucide-react';

interface SocialSectionProps {
  socials: {
    instagram: string;
    facebook: string;
    linkedin: string;
    tiktok: string;
    x: string;
    whatsapp: string;
    youtube?: string;
  };
}

export const SocialSection: React.FC<SocialSectionProps> = ({ socials }) => {
  // Custom recognizable SVG icons for X and TikTok
  const XIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  const TikTokIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );

  const platforms = [
    {
      name: 'X (Twitter)',
      handle: '@MrClarity_OOU',
      url: socials.x || 'https://x.com',
      icon: <XIcon />,
      color: 'hover:bg-slate-900 hover:text-white',
    },
    {
      name: 'Instagram',
      handle: '@mr.clarity_',
      url: socials.instagram || 'https://instagram.com',
      icon: <Instagram className="w-5 h-5" />,
      color: 'hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:text-white',
    },
    {
      name: 'LinkedIn',
      handle: 'Onifade Sulaiman',
      url: socials.linkedin || 'https://linkedin.com',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'hover:bg-[#0A66C2] hover:text-white',
    },
    {
      name: 'TikTok',
      handle: '@mrclarity_official',
      url: socials.tiktok || 'https://tiktok.com',
      icon: <TikTokIcon />,
      color: 'hover:bg-black hover:text-white',
    },
    {
      name: 'WhatsApp',
      handle: 'Community Chat',
      url: socials.whatsapp || 'https://wa.me/2348000000000',
      icon: <Phone className="w-5 h-5" />,
      color: 'hover:bg-[#25D366] hover:text-white',
    },
    {
      name: 'Facebook',
      handle: 'Onifade Sulaiman',
      url: socials.facebook || 'https://facebook.com',
      icon: <Facebook className="w-5 h-5" />,
      color: 'hover:bg-[#1877F2] hover:text-white',
    }
  ];

  return (
    <section 
      id="social" 
      className="py-16 sm:py-20 bg-[#FFFFFF] text-[#111827] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#EAF2FF] text-[#146BFF] mb-3">
            <Share2 className="w-3.5 h-3.5" />
            <span>STAY CONNECTED</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-[#091D35]">
            Connect With Mr. Clarity
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Join the conversation, receive direct updates, and engage across your preferred social platforms.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {platforms.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-2xl bg-[#F5F7FA] border border-slate-200 flex flex-col items-center justify-center text-center transition-all duration-300 group shadow-xs ${item.color}`}
            >
              <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-transparent flex items-center justify-center text-slate-700 group-hover:text-inherit mb-2 shadow-xs transition-colors">
                {item.icon}
              </div>
              <span className="font-bold text-xs sm:text-sm text-[#091D35] group-hover:text-inherit">
                {item.name}
              </span>
              <span className="text-[10px] text-slate-500 group-hover:text-white/80 mt-0.5 truncate max-w-[120px]">
                {item.handle}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
