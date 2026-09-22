import React, { useState } from 'react';
import { 
  X, 
  Save, 
  RotateCcw, 
  Image, 
  Link as LinkIcon, 
  User, 
  MessageSquare, 
  Check, 
  Lock, 
  Unlock, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  KeyRound, 
  Download, 
  Copy, 
  AlertCircle,
  Globe,
  Smartphone
} from 'lucide-react';
import { SiteConfig } from '../types';

interface CustomizerProps {
  isOpen: boolean;
  onClose: () => void;
  config: SiteConfig;
  onSaveConfig: (updated: SiteConfig, newPassword?: string, sessionPassword?: string) => Promise<boolean>;
  onResetDefaults: () => void;
  heroImage?: string;
  onUpdateHeroImage: (image: string) => void;
  adminPassword?: string;
}

export const ContentCustomizerModal: React.FC<CustomizerProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
  onResetDefaults,
  heroImage,
  onUpdateHeroImage,
  adminPassword,
}) => {
  if (!isOpen) return null;

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [sessionPassword, setSessionPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  // Form State
  const [activeTab, setActiveTab] = useState<'profile' | 'image' | 'links' | 'security'>('profile');
  const [formData, setFormData] = useState<SiteConfig>({ ...config });
  const [currentHeroImage, setCurrentHeroImage] = useState(heroImage || '');
  const [isSaving, setIsSaving] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);
  const [saveError, setSaveError] = useState('');
  const [copiedNotice, setCopiedNotice] = useState(false);

  // Password update inside security tab
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordChangeSuccess, setPasswordChangeSuccess] = useState(false);

  // Verify password to unlock
  const handleAuthenticate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!passwordInput.trim()) {
      setAuthError('Please enter the administrator password.');
      return;
    }

    setIsVerifying(true);
    setAuthError('');

    try {
      // Try verifying with the server API
      const res = await fetch('/api/auth/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput.trim() }),
      });

      if (res.ok) {
        setIsAuthenticated(true);
        setSessionPassword(passwordInput.trim());
        setAuthError('');
      } else {
        // Fallback check against prop or default password
        if (passwordInput.trim() === (adminPassword || 'clarity2026')) {
          setIsAuthenticated(true);
          setSessionPassword(passwordInput.trim());
          setAuthError('');
        } else {
          setAuthError('Incorrect administrator password. Access denied.');
        }
      }
    } catch {
      // Network/offline fallback
      if (passwordInput.trim() === (adminPassword || 'clarity2026')) {
        setIsAuthenticated(true);
        setSessionPassword(passwordInput.trim());
        setAuthError('');
      } else {
        setAuthError('Incorrect administrator password. Access denied.');
      }
    } finally {
      setIsVerifying(false);
    }
  };

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

  const handleSave = async () => {
    setIsSaving(true);
    setSaveError('');

    // Check if user is updating password
    let pwdToUpdate: string | undefined = undefined;
    if (newPassword.trim()) {
      if (newPassword !== confirmPassword) {
        setSaveError('New password and confirmation do not match.');
        setIsSaving(false);
        return;
      }
      pwdToUpdate = newPassword.trim();
    }

    try {
      onUpdateHeroImage(currentHeroImage);
      const success = await onSaveConfig(formData, pwdToUpdate, sessionPassword);

      if (success) {
        setSavedNotice(true);
        if (pwdToUpdate) {
          setPasswordChangeSuccess(true);
          setSessionPassword(pwdToUpdate);
          setNewPassword('');
          setConfirmPassword('');
        }
        setTimeout(() => {
          setSavedNotice(false);
        }, 3000);
      } else {
        setSaveError('Unable to broadcast changes to the server. Local changes preserved.');
      }
    } catch (err: any) {
      setSaveError(err?.message || 'Error saving changes.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleExportJson = () => {
    const exportData = {
      config: formData,
      heroImage: currentHeroImage,
      lastExported: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'auspicious-era-platform-config.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopyJson = () => {
    const exportData = {
      config: formData,
      heroImage: currentHeroImage
    };
    navigator.clipboard.writeText(JSON.stringify(exportData, null, 2));
    setCopiedNotice(true);
    setTimeout(() => setCopiedNotice(false), 2000);
  };

  const handleLock = () => {
    setIsAuthenticated(false);
    setPasswordInput('');
    setSessionPassword('');
    setAuthError('');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white border border-[#E5E7EB] rounded-3xl p-6 sm:p-8 text-[#111827] shadow-2xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#667085] hover:text-[#0B1F3A] hover:bg-[#F6F9FF] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* SECURITY GATE: LOCKED VIEW */}
        {!isAuthenticated ? (
          <div className="py-6 sm:py-8 max-w-md mx-auto text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#EAF2FF] text-[#155EEF] flex items-center justify-center mx-auto shadow-sm">
              <Lock className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#EAF2FF] text-[#155EEF]">
                <KeyRound className="w-3.5 h-3.5" />
                <span>Protected Configuration</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-[#0B1F3A]">
                Administrator Password
              </h3>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                To prevent public exposure and accidental tampering, please enter the administrator password before making changes.
              </p>
            </div>

            <form onSubmit={handleAuthenticate} className="space-y-4 pt-2 text-left">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-1.5">
                  Admin Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={passwordInput}
                    onChange={(e) => {
                      setPasswordInput(e.target.value);
                      if (authError) setAuthError('');
                    }}
                    placeholder="Enter admin password..."
                    autoFocus
                    className="w-full pl-4 pr-11 py-3 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#155EEF] focus:border-transparent transition-all shadow-xs"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#667085] hover:text-[#0B1F3A]"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {authError && (
                  <p className="mt-2 text-xs font-semibold text-red-600 flex items-center gap-1.5 animate-in fade-in">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{authError}</span>
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isVerifying}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#155EEF] hover:bg-[#1048B5] text-white font-bold text-sm shadow-sm transition-all active:scale-[0.99] disabled:opacity-70"
                >
                  {isVerifying ? (
                    <span>Verifying...</span>
                  ) : (
                    <>
                      <Unlock className="w-4 h-4" />
                      <span>Unlock & Configure Platform</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-3 p-3.5 rounded-xl bg-[#F6F9FF] border border-[#E5E7EB] text-center">
                <p className="text-xs text-[#667085] flex items-center justify-center gap-1.5 font-medium">
                  <Lock className="w-3.5 h-3.5 text-[#155EEF]" />
                  <span>Authorized administrator access only. Tampering attempts are restricted.</span>
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* UNLOCKED VIEW: FULL CONFIGURATION & CROSS-DEVICE PERSISTENCE */
          <div className="space-y-6">
            
            {/* Header with Admin Status */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#E5E7EB]">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#ECFDF3] text-[#027A48] border border-[#A6F4C5]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Admin Authorized</span>
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-[#155EEF] bg-[#EAF2FF] px-2.5 py-1 rounded-full">
                    <Globe className="w-3 h-3" />
                    <span>Syncs Across All Devices</span>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleLock}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#667085] hover:text-red-600 transition-colors px-2 py-1 rounded-lg hover:bg-[#F6F9FF]"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Lock Session</span>
                </button>
              </div>

              <div className="mt-3">
                <h3 className="text-2xl font-black font-display text-[#0B1F3A]">
                  Platform Content & Identity
                </h3>
                <p className="text-xs text-[#667085] mt-0.5">
                  Any changes saved here will be stored on the platform and immediately reflect on all devices (mobile phones, laptops, tablets).
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-[#E5E7EB] gap-1 overflow-x-auto pb-1">
              <button
                type="button"
                onClick={() => setActiveTab('profile')}
                className={`pb-2.5 px-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 shrink-0 ${
                  activeTab === 'profile'
                    ? 'border-[#155EEF] text-[#155EEF]'
                    : 'border-transparent text-[#667085] hover:text-[#0B1F3A]'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Profile & Identity</span>
              </button>
              
              <button
                type="button"
                onClick={() => setActiveTab('image')}
                className={`pb-2.5 px-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 shrink-0 ${
                  activeTab === 'image'
                    ? 'border-[#155EEF] text-[#155EEF]'
                    : 'border-transparent text-[#667085] hover:text-[#0B1F3A]'
                }`}
              >
                <Image className="w-3.5 h-3.5" />
                <span>Portrait Headshot</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('links')}
                className={`pb-2.5 px-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 shrink-0 ${
                  activeTab === 'links'
                    ? 'border-[#155EEF] text-[#155EEF]'
                    : 'border-transparent text-[#667085] hover:text-[#0B1F3A]'
                }`}
              >
                <LinkIcon className="w-3.5 h-3.5" />
                <span>Portfolio & Socials</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('security')}
                className={`pb-2.5 px-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 shrink-0 ${
                  activeTab === 'security'
                    ? 'border-[#155EEF] text-[#155EEF]'
                    : 'border-transparent text-[#667085] hover:text-[#0B1F3A]'
                }`}
              >
                <KeyRound className="w-3.5 h-3.5" />
                <span>Security & Export</span>
              </button>
            </div>

            {/* TAB 1: Profile & Identity */}
            {activeTab === 'profile' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#0B1F3A] mb-1">
                    WhatsApp Phone Number (for "JOIN THE MOVEMENT" CTA)
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
                    Enter country code digits without '+' (e.g. <span className="font-mono">2348051780169</span>). This directs all campus members to your WhatsApp.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0B1F3A] mb-1">
                      Full Official Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0B1F3A] mb-1">
                      Popular Moniker / Nickname
                    </label>
                    <input
                      type="text"
                      value={formData.nickname}
                      onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111827] font-bold text-[#155EEF] focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B1F3A] mb-1">
                    Era / Brand Name
                  </label>
                  <input
                    type="text"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0B1F3A] mb-1">
                    Default WhatsApp Pre-filled Message
                  </label>
                  <textarea
                    rows={2}
                    value={formData.whatsAppDefaultMessage}
                    onChange={(e) => setFormData({ ...formData, whatsAppDefaultMessage: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#E5E7EB] text-xs text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
                  />
                </div>
              </div>
            )}

            {/* TAB 2: Portrait Headshot */}
            {activeTab === 'image' && (
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#F6F9FF] border border-[#E5E7EB] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#155EEF]">
                    <Smartphone className="w-4 h-4" />
                    <span>Cross-Platform Portrait Headshot</span>
                  </div>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    Upload your high-definition portrait photograph or provide an image link. When saved, it displays prominently in the Hero section across all devices.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
                    {currentHeroImage ? (
                      <div className="relative w-28 h-36 rounded-xl overflow-hidden border-2 border-[#155EEF] shadow-sm shrink-0 bg-white">
                        <img 
                          src={currentHeroImage} 
                          alt="Portrait Preview" 
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => setCurrentHeroImage('')}
                          className="absolute top-1 right-1 p-1 rounded-full bg-black/70 text-white hover:bg-black transition-colors"
                          title="Remove image"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <div className="w-28 h-36 rounded-xl border-2 border-dashed border-[#E5E7EB] flex flex-col items-center justify-center p-2 text-center text-[#667085] shrink-0 bg-white">
                        <Image className="w-6 h-6 text-[#155EEF] mb-1" />
                        <span className="text-[10px] font-medium">No photo uploaded</span>
                      </div>
                    )}

                    <div className="space-y-2.5 w-full">
                      <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#155EEF] text-white text-xs font-bold shadow-xs hover:bg-[#1048B5] transition-colors">
                        <Image className="w-4 h-4" />
                        <span>Upload Photo From Device</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>

                      <div>
                        <span className="text-[11px] font-semibold text-[#667085] block mb-1">
                          Or paste image direct URL:
                        </span>
                        <input
                          type="text"
                          placeholder="https://images.example.com/portrait.jpg"
                          value={currentHeroImage}
                          onChange={(e) => setCurrentHeroImage(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-white border border-[#E5E7EB] text-xs text-[#111827]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Portfolio Website & Social Links */}
            {activeTab === 'links' && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#F6F9FF] border border-[#E5E7EB]">
                  <label className="block text-xs font-bold text-[#0B1F3A] mb-1">
                    Personal Portfolio Website URL (PERSONAL_WEBSITE_URL)
                  </label>
                  <input
                    type="url"
                    value={formData.personalWebsiteUrl}
                    onChange={(e) => setFormData({ ...formData, personalWebsiteUrl: e.target.value })}
                    placeholder="https://onifadesulaiman.com or https://portfolio.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
                  />
                  <p className="text-[11px] text-[#667085] mt-1">
                    When configured, a prominent "Explore Personal Portfolio Website" section will appear with direct links across all devices.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-xs font-bold text-[#667085] mb-1">
                      X (Twitter) Profile URL
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
                    <label className="block text-xs font-bold text-[#667085] mb-1">
                      Instagram Profile URL
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
                    <label className="block text-xs font-bold text-[#667085] mb-1">
                      LinkedIn Profile URL
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
                    <label className="block text-xs font-bold text-[#667085] mb-1">
                      TikTok Profile URL
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

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-[#667085] mb-1">
                      Facebook Profile URL
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

            {/* TAB 4: Security & Export */}
            {activeTab === 'security' && (
              <div className="space-y-5">
                <div className="p-4 rounded-2xl bg-[#F6F9FF] border border-[#E5E7EB] space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#155EEF] flex items-center gap-1.5">
                    <KeyRound className="w-3.5 h-3.5" />
                    <span>Change Administrator Password</span>
                  </h4>
                  <p className="text-xs text-[#667085]">
                    Set a new security password for protecting the website configuration from public access.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1F3A] mb-1">
                        New Password
                      </label>
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                        className="w-full px-3 py-2 rounded-xl bg-white border border-[#E5E7EB] text-xs text-[#111827]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0B1F3A] mb-1">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Repeat new password"
                        className="w-full px-3 py-2 rounded-xl bg-white border border-[#E5E7EB] text-xs text-[#111827]"
                      />
                    </div>
                  </div>

                  {passwordChangeSuccess && (
                    <p className="text-xs font-bold text-[#027A48] flex items-center gap-1.5 pt-1">
                      <Check className="w-3.5 h-3.5" />
                      <span>Password successfully updated! Remember your new password.</span>
                    </p>
                  )}
                </div>

                {/* Export / Backup options */}
                <div className="p-4 rounded-2xl bg-white border border-[#E5E7EB] space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">
                    Permanent Codebase Export & Backup
                  </h4>
                  <p className="text-xs text-[#667085]">
                    Download or copy the platform configuration JSON to commit to your GitHub repository or Vercel static build.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <button
                      type="button"
                      onClick={handleExportJson}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F6F9FF] border border-[#E5E7EB] hover:border-[#155EEF] text-xs font-bold text-[#0B1F3A] transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 text-[#155EEF]" />
                      <span>Download JSON Backup</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyJson}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#F6F9FF] border border-[#E5E7EB] hover:border-[#155EEF] text-xs font-bold text-[#0B1F3A] transition-colors"
                    >
                      <Copy className="w-3.5 h-3.5 text-[#155EEF]" />
                      <span>{copiedNotice ? 'Copied to Clipboard!' : 'Copy Config JSON'}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {saveError && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{saveError}</span>
              </div>
            )}

            {/* Success Message */}
            {savedNotice && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 flex items-center gap-2 animate-in fade-in">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Saved successfully! Changes are active on the platform and live across all devices.</span>
              </div>
            )}

            {/* Modal Footer Controls */}
            <div className="mt-8 pt-5 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={onResetDefaults}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#667085] hover:text-[#0B1F3A] bg-[#F6F9FF] border border-[#E5E7EB] transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset System Defaults</span>
              </button>

              <div className="w-full sm:w-auto flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-[#667085] hover:text-[#0B1F3A] transition-colors"
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={handleSave}
                  disabled={isSaving}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#155EEF] hover:bg-[#1048B5] text-white text-xs sm:text-sm font-black shadow-md hover:shadow-lg transition-all active:scale-[0.98] disabled:opacity-75"
                >
                  {isSaving ? (
                    <span>Broadcasting Changes...</span>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      <span>Save & Sync to All Devices</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
