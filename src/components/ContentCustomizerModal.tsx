import React, { useState } from 'react';
import { X, Save, RotateCcw, Image, Link as LinkIcon, User, MessageSquare, Check } from 'lucide-react';
import { SiteConfig } from '../types';

interface CustomizerProps {
  isOpen: boolean;
  onClose: () => void;
  config: SiteConfig;
  onSaveConfig: (updated: SiteConfig) => void;
  onResetDefaults: () => void;
  heroImage?: string;
  onUpdateHeroImage: (image: string) => void;
}

export const ContentCustomizerModal: React.FC<CustomizerProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
  onResetDefaults,
  heroImage,
  onUpdateHeroImage,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'profile' | 'image' | 'links'>('profile');
  const [formData, setFormData] = useState<SiteConfig>({ ...config });
  const [currentHeroImage, setCurrentHeroImage] = useState(heroImage || '');
  const [savedNotice, setSavedNotice] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setCurrentHeroImage(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSaveConfig(formData);
    onUpdateHeroImage(currentHeroImage);
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 800);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-8 text-[#111827] shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#667085] hover:text-[#0B1F3A] hover:bg-[#F6F9FF] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs uppercase font-bold tracking-wider text-[#155EEF]">
            PLATFORM CONFIGURATION (SECTION 24)
          </span>
          <h3 className="text-2xl font-bold font-display text-[#0B1F3A] mt-1">
            Site Settings & WhatsApp
          </h3>
          <p className="text-xs text-[#667085] mt-1">
            Quickly update your WhatsApp number, portrait photo, or social handles.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#E5E7EB] mb-6 gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('profile')}
            className={`pb-2.5 px-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'profile'
                ? 'border-[#155EEF] text-[#155EEF]'
                : 'border-transparent text-[#667085] hover:text-[#0B1F3A]'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Profile & WhatsApp</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('image')}
            className={`pb-2.5 px-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'image'
                ? 'border-[#155EEF] text-[#155EEF]'
                : 'border-transparent text-[#667085] hover:text-[#0B1F3A]'
            }`}
          >
            <Image className="w-3.5 h-3.5" />
            <span>Portrait Photo</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('links')}
            className={`pb-2.5 px-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'links'
                ? 'border-[#155EEF] text-[#155EEF]'
                : 'border-transparent text-[#667085] hover:text-[#0B1F3A]'
            }`}
          >
            <LinkIcon className="w-3.5 h-3.5" />
            <span>Socials & Website</span>
          </button>
        </div>

        {/* Tab 1: Profile & WhatsApp */}
        {activeTab === 'profile' && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#0B1F3A] mb-1">
                WhatsApp Phone Number (for JOIN THE MOVEMENT CTA)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.whatsAppNumber}
                  onChange={(e) => setFormData({ ...formData, whatsAppNumber: e.target.value })}
                  placeholder="2348051780169"
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
                />
                <MessageSquare className="w-4 h-4 text-[#155EEF] absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
              <p className="text-[11px] text-[#667085] mt-1">
                Enter international digits format without '+' (e.g. 2348051780169)
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#0B1F3A] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#0B1F3A] mb-1">
                  Nickname / Moniker
                </label>
                <input
                  type="text"
                  value={formData.nickname}
                  onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#0B1F3A] mb-1">
                Project Identity / Brand Name
              </label>
              <input
                type="text"
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
              />
            </div>
          </div>
        )}

        {/* Tab 2: Portrait Image */}
        {activeTab === 'image' && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-[#F6F9FF] border border-[#E5E7EB] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#155EEF]">
                Portrait Headshot
              </h4>
              <p className="text-xs text-[#667085]">
                Paste an image URL or upload your actual portrait photograph from your phone/computer.
              </p>
              
              <input
                type="text"
                placeholder="https://example.com/portrait.jpg"
                value={currentHeroImage}
                onChange={(e) => setCurrentHeroImage(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#E5E7EB] text-xs text-[#111827]"
              />

              <div className="flex items-center gap-3">
                <label className="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#E5E7EB] hover:border-[#155EEF] text-xs font-semibold text-[#0B1F3A]">
                  <Image className="w-3.5 h-3.5 text-[#155EEF]" />
                  <span>Choose Image File</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>

                {currentHeroImage && (
                  <button
                    type="button"
                    onClick={() => setCurrentHeroImage('')}
                    className="text-xs text-red-500 hover:underline"
                  >
                    Clear custom image
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Links */}
        {activeTab === 'links' && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#0B1F3A] mb-1">
                Personal Portfolio Website URL (PERSONAL_WEBSITE_URL)
              </label>
              <input
                type="url"
                value={formData.personalWebsiteUrl}
                onChange={(e) => setFormData({ ...formData, personalWebsiteUrl: e.target.value })}
                placeholder="https://onifadesulaiman.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-[#667085] mb-1">
                  X / Twitter URL
                </label>
                <input
                  type="url"
                  value={formData.socials.x}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    socials: { ...formData.socials, x: e.target.value } 
                  })}
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#E5E7EB] text-xs text-[#111827]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#667085] mb-1">
                  Instagram URL
                </label>
                <input
                  type="url"
                  value={formData.socials.instagram}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    socials: { ...formData.socials, instagram: e.target.value } 
                  })}
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#E5E7EB] text-xs text-[#111827]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#667085] mb-1">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  value={formData.socials.linkedin}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    socials: { ...formData.socials, linkedin: e.target.value } 
                  })}
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#E5E7EB] text-xs text-[#111827]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#667085] mb-1">
                  TikTok URL
                </label>
                <input
                  type="url"
                  value={formData.socials.tiktok}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    socials: { ...formData.socials, tiktok: e.target.value } 
                  })}
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#E5E7EB] text-xs text-[#111827]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#667085] mb-1">
                  Facebook URL
                </label>
                <input
                  type="url"
                  value={formData.socials.facebook}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    socials: { ...formData.socials, facebook: e.target.value } 
                  })}
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#E5E7EB] text-xs text-[#111827]"
                />
              </div>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="mt-8 pt-5 border-t border-[#E5E7EB] flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onResetDefaults}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#667085] hover:text-[#0B1F3A] bg-[#F6F9FF] border border-[#E5E7EB]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-[#667085] hover:text-[#0B1F3A]"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#155EEF] hover:bg-[#1048B5] text-white text-xs font-bold shadow-xs transition-colors"
            >
              {savedNotice ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
