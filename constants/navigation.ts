import { 
  LayoutDashboard, 
  Megaphone, 
  BarChart3, 
  Settings 
} from 'lucide-react';

// Public website navigation
export const WEBSITE_NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/legal', label: 'Legal' },
  { href: '/coming-soon', label: 'Download' },
];

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

// Campaign filters
export const CAMPAIGN_FILTERS = [
  { id: 'all', label: 'All Campaigns' },
  { id: 'active', label: 'Active' },
  { id: 'paused', label: 'Paused' },
  { id: 'scheduled', label: 'Scheduled' },
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
