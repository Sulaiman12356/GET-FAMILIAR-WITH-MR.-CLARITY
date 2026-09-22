import React, { useState, useEffect } from 'react';
import { initialConfig } from './data/config';
import { SiteConfig } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhoIsMrClarity } from './components/WhoIsMrClarity';
import { TheStory } from './components/TheStory';
import { LeadershipExperience } from './components/LeadershipExperience';
import { TurningPoint } from './components/TurningPoint';
import { LegacyTenure } from './components/LegacyTenure';
import { HumanSide } from './components/HumanSide';
import { Values } from './components/Values';
import { WhyAuspiciousEra } from './components/WhyAuspiciousEra';
import { PersonalPhilosophy } from './components/PersonalPhilosophy';
import { JoinMovement } from './components/JoinMovement';
import { PersonalWebsiteCallout } from './components/PersonalWebsiteCallout';
import { Footer } from './components/Footer';
import { MobileBottomCTA } from './components/MobileBottomCTA';
import { ContentCustomizerModal } from './components/ContentCustomizerModal';

export default function App() {
  const [config, setConfig] = useState<SiteConfig>(() => {
    try {
      const saved = localStorage.getItem('auspicious_era_v2_config');
      if (saved) {
        return { ...initialConfig, ...JSON.parse(saved) };
      }
    } catch {
      // fallback
    }
    return initialConfig;
  });

  const [heroImage, setHeroImage] = useState<string>(() => {
    try {
      return localStorage.getItem('auspicious_era_v2_hero_image') || '';
    } catch {
      return '';
    }
  });

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  // Persistence
  useEffect(() => {
    try {
      localStorage.setItem('auspicious_era_v2_config', JSON.stringify(config));
    } catch (e) {
      console.warn('Could not persist config to localStorage', e);
    }
  }, [config]);

  useEffect(() => {
    try {
      localStorage.setItem('auspicious_era_v2_hero_image', heroImage);
    } catch (e) {
      console.warn('Could not persist hero image to localStorage', e);
    }
  }, [heroImage]);

  const handleSaveConfig = (updated: SiteConfig) => {
    setConfig(updated);
  };

  const handleResetDefaults = () => {
    setConfig(initialConfig);
    setHeroImage('');
    localStorage.removeItem('auspicious_era_v2_config');
    localStorage.removeItem('auspicious_era_v2_hero_image');
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] flex flex-col font-sans selection:bg-[#155EEF] selection:text-white">
      
      {/* 03 — Navigation */}
      <Navbar 
        whatsAppNumber={config.whatsAppNumber}
        brandName={config.brand}
        name={config.name}
      />

      <main className="flex-1 pb-16 md:pb-0">
        
        {/* 04 — Hero Section (Pure White, Presidential, Direct WhatsApp) */}
        <Hero
          config={config}
          heroImageUrl={heroImage}
          onUploadPortrait={() => setIsCustomizerOpen(true)}
        />

        {/* 05 — Introduction (Beyond The Name: Who Is Mr. Clarity?) */}
        <WhoIsMrClarity 
          config={config}
        />

        {/* 06 — The Story (The Journey: Desires to help & Prominent Quote) */}
        <TheStory 
          config={config}
        />

        {/* 07 — Leadership Experience (Leadership Is More Than A Title) */}
        <LeadershipExperience 
          pillars={config.leadershipPillars}
        />

        {/* 08 — The Turning Point (Leadership Should Not End With A Position) */}
        <TurningPoint 
          config={config}
        />

        {/* 09 — The Legacy Tenure (5 Initiatives: Something Students Can Benefit From) */}
        <LegacyTenure
          headline={config.legacyTenureHeadline}
          intro={config.legacyTenureIntro}
          initiatives={config.legacyInitiatives}
          whatsAppNumber={config.whatsAppNumber}
        />

        {/* 10 — The Human Side (Because Every Student Has A Story) */}
        <HumanSide 
          config={config}
        />

        {/* 11 — What I Believe (The Values Behind The Vision) */}
        <Values 
          values={config.values}
        />

        {/* 12 — Why "The Auspicious Era"? */}
        <WhyAuspiciousEra 
          config={config}
        />

        {/* 13 — My Personal Philosophy */}
        <PersonalPhilosophy
          quote={config.philosophyQuote}
          author={config.philosophyAuthor}
        />

        {/* 14 — Join The Movement (Main Conversion Section: WhatsApp Direct) */}
        <JoinMovement 
          whatsAppNumber={config.whatsAppNumber}
        />

        {/* 16 — Beyond The Auspicious Era: Personal Website */}
        <PersonalWebsiteCallout
          url={config.personalWebsiteUrl}
          onConfigureClick={() => setIsCustomizerOpen(true)}
        />

      </main>

      {/* 17 — Footer */}
      <Footer
        whatsAppNumber={config.whatsAppNumber}
        brandName={config.brand}
        name={config.name}
        nickname={config.nickname}
        socials={config.socials}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* 21 — Mobile Fixed Bottom CTA */}
      <MobileBottomCTA 
        whatsAppNumber={config.whatsAppNumber}
      />

      {/* 24 — Configuration & Media Modal */}
      <ContentCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        config={config}
        onSaveConfig={handleSaveConfig}
        onResetDefaults={handleResetDefaults}
        heroImage={heroImage}
        onUpdateHeroImage={(img) => setHeroImage(img)}
      />

    </div>
  );
}
