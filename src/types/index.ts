export interface LeadershipPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  highlights?: string[];
}

export interface LegacyInitiative {
  id: string;
  number: string;
  title: string;
  summary: string;
  areas: string[];
  icon: string;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  nickname: string;
  brand: string;
  institution: string;
  whatsAppNumber: string;
  whatsAppDefaultMessage: string;
  personalWebsiteUrl: string;
  heroHeadlineTop: string;
  heroHeadlineHighlight: string;
  heroBio1: string;
  heroBio2: string;
  beyondNameSubtitle: string;
  whoIsIntro: string;
  whoIsPhilosophy: string;
  identityTags: string[];
  storyHeadline: string;
  storyQuote: string;
  storyParagraphs: string[];
  leadershipPillars: LeadershipPillar[];
  turningPointHeadline: string;
  turningPointParagraphs: string[];
  legacyTenureHeadline: string;
  legacyTenureIntro: string;
  legacyInitiatives: LegacyInitiative[];
  humanSideHeadline: string;
  humanSideLines: string[];
  humanSideConclusion: string;
  valuesHeadline: string;
  values: CoreValue[];
  whyEraHeadline: string;
  whyEraParagraphs: string[];
  whyEraCallout: string;
  philosophyQuote: string;
  philosophyAuthor: string;
  socials: {
    instagram: string;
    tiktok: string;
    linkedin: string;
    facebook: string;
    x: string;
  };
}
