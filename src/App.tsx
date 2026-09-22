import React, { useState, useEffect } from 'react';
import { initialConfig } from './data/config';
import { SiteConfig, Testimonial, JoinFormData } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Timeline } from './components/Timeline';
import { LeadershipExperience } from './components/LeadershipExperience';
import { LegacyTenure } from './components/LegacyTenure';
import { WhyThisMatters } from './components/WhyThisMatters';
import { Values } from './components/Values';
import { StudentStories } from './components/StudentStories';
import { GetInvolved } from './components/GetInvolved';
import { PersonalWebsiteCallout } from './components/PersonalWebsiteCallout';
import { SocialSection } from './components/SocialSection';
import { Footer } from './components/Footer';
import { StoryModal } from './components/StoryModal';
import { ContentCustomizerModal } from './components/ContentCustomizerModal';

export default function App() {
  const [config, setConfig] = useState<SiteConfig>(() => {
    try {
      const saved = localStorage.getItem('auspicious_era_config');
      if (saved) {
        return { ...initialConfig, ...JSON.parse(saved) };
      }
    } catch {
      // fallback to initialConfig
    }
    return initialConfig;
  });

  const [images, setImages] = useState<{ hero?: string; about?: string; campus?: string }>(() => {
    try {
      const savedImages = localStorage.getItem('auspicious_era_images');
      if (savedImages) {
        return JSON.parse(savedImages);
      }
    } catch {
      // fallback
    }
    return {};
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    try {
      const saved = localStorage.getItem('auspicious_era_testimonials');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return initialConfig.testimonials;
  });

  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  // Persistence
  useEffect(() => {
    try {
      localStorage.setItem('auspicious_era_config', JSON.stringify(config));
    } catch (e) {
      console.warn('Could not persist config to localStorage', e);
    }
  }, [config]);

  useEffect(() => {
    try {
      localStorage.setItem('auspicious_era_images', JSON.stringify(images));
    } catch (e) {
      console.warn('Could not persist images to localStorage', e);
    }
  }, [images]);

  useEffect(() => {
    try {
      localStorage.setItem('auspicious_era_testimonials', JSON.stringify(testimonials));
    } catch (e) {
      console.warn('Could not persist testimonials to localStorage', e);
    }
  }, [testimonials]);

  const handleSaveConfig = (updated: SiteConfig) => {
    setConfig(updated);
  };

  const handleResetDefaults = () => {
    setConfig(initialConfig);
    setImages({});
    setTestimonials(initialConfig.testimonials);
    localStorage.removeItem('auspicious_era_config');
    localStorage.removeItem('auspicious_era_images');
    localStorage.removeItem('auspicious_era_testimonials');
  };

  const handleAddTestimonial = (newTestimonial: Testimonial) => {
    setTestimonials(prev => [newTestimonial, ...prev]);
  };

  const handleJoinSubmission = (formData: JoinFormData) => {
    console.log('New community member connected:', formData);
  };

  const scrollToGetInvolved = () => {
    const el = document.getElementById('get-involved');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#111827] flex flex-col font-sans selection:bg-[#146BFF] selection:text-white">
      
      {/* Sticky Navigation */}
      <Navbar 
        onOpenGetInvolved={scrollToGetInvolved} 
        brandName={config.brand}
      />

      <main className="flex-1">
        
        {/* Session 3: Hero Section */}
        <Hero
          config={config}
          heroImageUrl={images.hero}
          onOpenStory={() => setIsStoryModalOpen(true)}
          onUploadPortrait={() => setIsCustomizerOpen(true)}
        />

        {/* Session 4: About Me Section */}
        <AboutMe
          config={config}
          profileImageUrl={images.about}
          onUploadPhoto={() => setIsCustomizerOpen(true)}
        />

        {/* Session 5: My Journey (The Journey So Far) */}
        <Timeline 
          items={config.timeline}
        />

        {/* Session 6: Leadership Experience (More Than A Title) */}
        <LeadershipExperience 
          pillars={config.leadershipPillars}
        />

        {/* Session 7: The Legacy Tenure (5 Major Initiatives) */}
        <LegacyTenure
          intro={config.legacyTenureIntro}
          initiatives={config.legacyInitiatives}
          onOpenJoin={scrollToGetInvolved}
        />

        {/* Session 8: Why This Matters */}
        <WhyThisMatters
          statement={config.whyMattersStatement}
          pillars={config.whyMattersPillars}
          campusImageUrl={images.campus}
          onUploadCampusPhoto={() => setIsCustomizerOpen(true)}
          onJoinClick={scrollToGetInvolved}
        />

        {/* Session 9: My Values (What I Stand For) */}
        <Values 
          values={config.values}
        />

        {/* Session 10: Student Stories / Social Proof */}
        <StudentStories
          testimonials={testimonials}
          onAddTestimonial={handleAddTestimonial}
        />

        {/* Session 11: Join / Get Involved */}
        <GetInvolved
          onSuccessSubmission={handleJoinSubmission}
        />

        {/* Session 12: Personal Website Callout */}
        <PersonalWebsiteCallout
          url={config.personalWebsiteUrl}
          onConfigureClick={() => setIsCustomizerOpen(true)}
        />

        {/* Session 13: Social Media */}
        <SocialSection 
          socials={config.socials}
        />

      </main>

      {/* Session 14: Footer */}
      <Footer
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        brandName={config.brand}
        name={config.name}
        nickname={config.nickname}
      />

      {/* Interactive Story Modal */}
      <StoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
        config={config}
      />

      {/* Content & Media Management Customizer Modal */}
      <ContentCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        config={config}
        onSaveConfig={handleSaveConfig}
        onResetDefaults={handleResetDefaults}
        heroImage={images.hero}
        aboutImage={images.about}
        campusImage={images.campus}
        onUpdateImages={(updated) => setImages(prev => ({ ...prev, ...updated }))}
      />

    </div>
  );
}
