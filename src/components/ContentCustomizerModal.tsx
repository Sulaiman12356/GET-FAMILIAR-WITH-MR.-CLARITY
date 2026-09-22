import React, { useState } from 'react';
import { X, Save, RotateCcw, Image, Link as LinkIcon, User, Globe, Check } from 'lucide-react';
import { SiteConfig } from '../types';

interface CustomizerProps {
  isOpen: boolean;
  onClose: () => void;
  config: SiteConfig;
  onSaveConfig: (updated: SiteConfig) => void;
  onResetDefaults: () => void;
  heroImage?: string;
  aboutImage?: string;
  campusImage?: string;
  onUpdateImages: (images: { hero?: string; about?: string; campus?: string }) => void;
}

export const ContentCustomizerModal: React.FC<CustomizerProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
  onResetDefaults,
  heroImage,
  aboutImage,
  campusImage,
  onUpdateImages,
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'profile' | 'images' | 'links'>('profile');
  const [formData, setFormData] = useState<SiteConfig>({ ...config });
  const [imagesState, setImagesState] = useState({
    hero: heroImage || '',
    about: aboutImage || '',
    campus: campusImage || '',
  });
  const [savedNotice, setSavedNotice] = useState(false);

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'hero' | 'about' | 'campus'
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setImagesState(prev => ({ ...prev, [type]: base64 }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSaveConfig(formData);
    onUpdateImages(imagesState);
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 1000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#091D35] border border-white/20 rounded-3xl p-6 sm:p-8 text-white shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-xs uppercase font-bold tracking-wider text-[#146BFF]">
            Platform Content Management (Session 18)
          </span>
          <h3 className="text-2xl font-bold font-display text-white mt-1">
            Customize Content & Media
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Edit text values, update real photography, or change URLs. Changes persist locally.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/10 mb-6 gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('profile')}
            className={`pb-2.5 px-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'profile'
                ? 'border-[#146BFF] text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Identity & Bio</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('images')}
            className={`pb-2.5 px-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'images'
                ? 'border-[#146BFF] text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Image className="w-3.5 h-3.5" />
            <span>Portraits & Imagery</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('links')}
            className={`pb-2.5 px-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'links'
                ? 'border-[#146BFF] text-white'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <LinkIcon className="w-3.5 h-3.5" />
            <span>Socials & Portfolio</span>
          </button>
        </div>

        {/* Tab 1: Profile */}
        {activeTab === 'profile' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#061426] border border-white/15 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#146BFF]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Nickname / Moniker
                </label>
                <input
                  type="text"
                  value={formData.nickname}
                  onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#061426] border border-white/15 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#146BFF]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Project Identity / Brand Name
              </label>
              <input
                type="text"
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#061426] border border-white/15 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#146BFF]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Hero Supporting Bio
              </label>
              <textarea
                rows={3}
                value={formData.heroBio}
                onChange={(e) => setFormData({ ...formData, heroBio: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#061426] border border-white/15 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#146BFF] resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Personal Leadership Quote
              </label>
              <input
                type="text"
                value={formData.quote}
                onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#061426] border border-white/15 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#146BFF]"
              />
            </div>
          </div>
        )}

        {/* Tab 2: Images */}
        {activeTab === 'images' && (
          <div className="space-y-6">
            {/* Hero Image */}
            <div className="p-4 rounded-2xl bg-[#061426] border border-white/10 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#146BFF]">
                1. Hero Portrait Photo
              </h4>
              <p className="text-xs text-slate-400">
                Provide an image URL or upload an image file from your device.
              </p>
              <input
                type="text"
                placeholder="Paste Image URL (https://...)"
                value={imagesState.hero}
                onChange={(e) => setImagesState({ ...imagesState, hero: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-[#091D35] border border-white/15 text-xs text-white"
              />
              <div className="flex items-center gap-3">
                <label className="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-slate-200">
                  <Image className="w-3.5 h-3.5" />
                  <span>Upload File</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, 'hero')}
                    className="hidden"
                  />
                </label>
                {imagesState.hero && (
                  <button
                    type="button"
                    onClick={() => setImagesState({ ...imagesState, hero: '' })}
                    className="text-xs text-red-400 hover:underline"
                  >
                    Clear custom hero image
                  </button>
                )}
              </div>
            </div>

            {/* About Image */}
            <div className="p-4 rounded-2xl bg-[#061426] border border-white/10 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#146BFF]">
                2. About Me Profile Photo
              </h4>
              <input
                type="text"
                placeholder="Paste Image URL (https://...)"
                value={imagesState.about}
                onChange={(e) => setImagesState({ ...imagesState, about: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-[#091D35] border border-white/15 text-xs text-white"
              />
              <div className="flex items-center gap-3">
                <label className="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-slate-200">
                  <Image className="w-3.5 h-3.5" />
                  <span>Upload File</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, 'about')}
                    className="hidden"
                  />
                </label>
                {imagesState.about && (
                  <button
                    type="button"
                    onClick={() => setImagesState({ ...imagesState, about: '' })}
                    className="text-xs text-red-400 hover:underline"
                  >
                    Clear custom about image
                  </button>
                )}
              </div>
            </div>

            {/* Campus Image */}
            <div className="p-4 rounded-2xl bg-[#061426] border border-white/10 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#146BFF]">
                3. Campus Banner Photo
              </h4>
              <input
                type="text"
                placeholder="Paste Image URL (https://...)"
                value={imagesState.campus}
                onChange={(e) => setImagesState({ ...imagesState, campus: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-[#091D35] border border-white/15 text-xs text-white"
              />
              <div className="flex items-center gap-3">
                <label className="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-slate-200">
                  <Image className="w-3.5 h-3.5" />
                  <span>Upload File</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, 'campus')}
                    className="hidden"
                  />
                </label>
                {imagesState.campus && (
                  <button
                    type="button"
                    onClick={() => setImagesState({ ...imagesState, campus: '' })}
                    className="text-xs text-red-400 hover:underline"
                  >
                    Clear custom campus image
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
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Personal Portfolio Website URL (PERSONAL_WEBSITE_URL)
              </label>
              <input
                type="url"
                value={formData.personalWebsiteUrl}
                onChange={(e) => setFormData({ ...formData, personalWebsiteUrl: e.target.value })}
                placeholder="https://onifadesulaiman.dev"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#061426] border border-white/15 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#146BFF]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  X / Twitter URL
                </label>
                <input
                  type="url"
                  value={formData.socials.x}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    socials: { ...formData.socials, x: e.target.value } 
                  })}
                  className="w-full px-3 py-2 rounded-xl bg-[#061426] border border-white/15 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Instagram URL
                </label>
                <input
                  type="url"
                  value={formData.socials.instagram}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    socials: { ...formData.socials, instagram: e.target.value } 
                  })}
                  className="w-full px-3 py-2 rounded-xl bg-[#061426] border border-white/15 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  value={formData.socials.linkedin}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    socials: { ...formData.socials, linkedin: e.target.value } 
                  })}
                  className="w-full px-3 py-2 rounded-xl bg-[#061426] border border-white/15 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  TikTok URL
                </label>
                <input
                  type="url"
                  value={formData.socials.tiktok}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    socials: { ...formData.socials, tiktok: e.target.value } 
                  })}
                  className="w-full px-3 py-2 rounded-xl bg-[#061426] border border-white/15 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  WhatsApp Community Link
                </label>
                <input
                  type="url"
                  value={formData.socials.whatsapp}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    socials: { ...formData.socials, whatsapp: e.target.value } 
                  })}
                  className="w-full px-3 py-2 rounded-xl bg-[#061426] border border-white/15 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Facebook URL
                </label>
                <input
                  type="url"
                  value={formData.socials.facebook}
                  onChange={(e) => setFormData({ 
                    ...formData, 
                    socials: { ...formData.socials, facebook: e.target.value } 
                  })}
                  className="w-full px-3 py-2 rounded-xl bg-[#061426] border border-white/15 text-xs text-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* Footer actions */}
        <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onResetDefaults}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Defaults</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#146BFF] hover:bg-blue-600 text-white text-xs font-bold shadow-md shadow-[#146BFF]/30 transition-all"
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
