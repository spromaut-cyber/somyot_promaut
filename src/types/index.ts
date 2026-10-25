export interface Slide {
  id: number;
  tag: string;
  slideTitleShort: string;
  headline: string;
  subheadline: string;
  bullets: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  deviceTitle: string;
  deviceSub: string;
  colorAccent: string;
  bgImage?: string;
  bgGradient?: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  recommendedFor: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  priceNumber: number;
  badge?: string;
  isPopular?: boolean;
  targetAudience: string;
  features: string[];
  deliveryTime: string;
  revisions: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'all' | 'property' | 'food' | 'tech';
  categoryLabel: string;
  type: string;
  description: string;
  metrics: {
    label1: string;
    value1: string;
    label2: string;
    value2: string;
  };
  client: string;
  year: string;
  challenge: string;
  solution: string;
  features: string[];
  techStack: string[];
  previewUrl: string;
  themeColor: string;
  accentBg: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleEn: string;
  experience: string;
  bio: string;
  initials: string;
  avatarBg: string;
}

export interface CustomerReview {
  id: string;
  quote: string;
  author: string;
  role: string;
  business: string;
  rating: number;
  projectType: string;
  initials: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}
