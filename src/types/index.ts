export interface TimelineItem {
  id: string;
  step: string;
  title: string;
  role: string;
  description: string;
  period?: string;
  highlights?: string[];
}

export interface LeadershipPillar {
  id: string;
  title: string;
  focus: string;
  description: string;
  icon: string;
  metrics?: string;
}

export interface LegacyInitiative {
  id: string;
  number: string;
  title: string;
  focus: string;
  summary: string;
  initiatives: string[];
  ctaText: string;
  icon: string;
  badge?: string;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  department: string;
  level: string;
  role?: string;
  isPlaceholder?: boolean;
}

export interface SiteConfig {
  name: string;
  nickname: string;
  title: string;
  brand: string;
  tagline: string;
  alternativeTagline: string;
  institution: string;
  facultyOrDept: string;
  heroHeadline: string;
  heroHeadlineHighlight: string;
  heroBio: string;
  aboutIntro: string;
  aboutBelief: string;
  aboutImpact: string;
  quote: string;
  quoteAuthor: string;
  personalWebsiteUrl: string;
  contactEmail: string;
  contactWhatsApp: string;
  socials: {
    instagram: string;
    facebook: string;
    linkedin: string;
    tiktok: string;
    x: string;
    whatsapp: string;
    youtube?: string;
  };
  roles: string[];
  timeline: TimelineItem[];
  leadershipPillars: LeadershipPillar[];
  legacyTenureIntro: string;
  legacyInitiatives: LegacyInitiative[];
  whyMattersStatement: string;
  whyMattersPillars: {
    title: string;
    description: string;
    icon: string;
  }[];
  values: CoreValue[];
  testimonials: Testimonial[];
}

export interface JoinFormData {
  fullName: string;
  department: string;
  level: string;
  email: string;
  whatsAppNumber: string;
  areaOfInterest: string;
  contribution: string;
  message: string;
}
