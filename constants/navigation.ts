import { 
  LayoutDashboard, 
  Megaphone, 
  BarChart3, 
  Settings 
} from 'lucide-react';

// Website Header & Footer
export const HEADER = {
  brandName: 'EmberX',
  navigation: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/legal', label: 'Legal' },
    { href: '/coming-soon', label: 'Download' },
  ],
  buttons: {
    signin: 'Sign in',
    getStarted: 'Get Started',
  },
};

export const FOOTER = {
  brandName: 'EmberX',
  tagline: 'The future of location-based rewards. Discover, collect, and redeem from your favorite brands.',
  newsletter: {
    title: 'Stay updated',
    placeholder: 'Enter your email',
  },
  sections: {
    product: {
      title: 'Product',
      links: [
        { href: '#features', label: 'Features' },
        { href: '#how-it-works', label: 'How it Works' },
        { href: '/brand', label: 'For Businesses' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { href: '#careers', label: 'Careers' },
        { href: '#contact', label: 'Contact' },
      ],
    },
    resources: {
      title: 'Resources',
      links: [
        { href: '#help', label: 'Help Center' },
        { href: '#community', label: 'Community' },
        { href: '#docs', label: 'Documentation' },
        { href: '#api', label: 'API' },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { href: '/legal', label: 'Privacy' },
        { href: '/legal', label: 'Terms' },
        { href: '/legal', label: 'Cookies' },
      ],
    },
  },
  social: {
    twitter: '#twitter',
    linkedin: '#linkedin',
    instagram: '#instagram',
    github: '#github',
    email: 'mailto:hello@emberx.com',
  },
  copyright: '© 2025 EmberX. All rights reserved.',
};

// Public website navigation (legacy)
export const WEBSITE_NAV_ITEMS = HEADER.navigation;

// Brand console navigation
export const BRAND_NAV_ITEMS = [
  { href: '/brand', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/brand/campaigns', label: 'Campaigns', icon: Megaphone },
  { href: '/brand/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/brand/settings', label: 'Settings', icon: Settings },
];

// Brand settings tabs
export const BRAND_SETTINGS_TABS = [
  { id: 'company', label: 'Company Info' },
  { id: 'notifications', label: 'Notifications' },
  { id: 'team', label: 'Team' },
  { id: 'billing', label: 'Billing' },
];

// Navigation routes
export const ROUTES = {
  home: '/',
  about: '/about',
  legal: '/legal',
  comingSoon: '/coming-soon',
  signin: '/signin',
  signup: '/signup',
  onboarding: '/onboarding',
  brand: {
    dashboard: '/brand',
    campaigns: '/brand/campaigns',
    analytics: '/brand/analytics',
    settings: '/brand/settings',
  },
};
