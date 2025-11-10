export const BRAND_NAME = 'Starbucks';

// Campaign Data
export const CAMPAIGNS = [
  {
    id: 1,
    name: 'Holiday Rewards',
    status: 'active' as const,
    budget: 5000,
    spent: 3200,
    collected: 847,
    locations: 12,
    rewardAmount: 10,
    startDate: 'Nov 1, 2024',
    endDate: 'Dec 31, 2024',
    views: 12400,
    conversionRate: 6.8,
  },
  {
    id: 2,
    name: 'New Customer Bonus',
    status: 'active' as const,
    budget: 2500,
    spent: 1800,
    collected: 423,
    locations: 8,
    rewardAmount: 15,
    startDate: 'Oct 15, 2024',
    endDate: 'Nov 30, 2024',
    views: 6200,
    conversionRate: 6.8,
  },
  {
    id: 3,
    name: 'Weekend Special',
    status: 'paused' as const,
    budget: 1500,
    spent: 450,
    collected: 89,
    locations: 5,
    rewardAmount: 5,
    startDate: 'Oct 1, 2024',
    endDate: 'Nov 15, 2024',
    views: 2100,
    conversionRate: 4.2,
  },
  {
    id: 4,
    name: 'Flash Sale Campaign',
    status: 'scheduled' as const,
    budget: 3000,
    spent: 0,
    collected: 0,
    locations: 15,
    rewardAmount: 20,
    startDate: 'Dec 15, 2024',
    endDate: 'Dec 20, 2024',
    views: 0,
    conversionRate: 0,
  },
];

// Analytics Data
export const COLLECTION_DATA = [
  { date: 'Nov 1', collections: 45, views: 680 },
  { date: 'Nov 2', collections: 67, views: 920 },
  { date: 'Nov 3', collections: 89, views: 1240 },
  { date: 'Nov 4', collections: 52, views: 840 },
  { date: 'Nov 5', collections: 78, views: 1120 },
  { date: 'Nov 6', collections: 95, views: 1450 },
  { date: 'Nov 7', collections: 123, views: 1680 },
];

export const CAMPAIGN_PERFORMANCE = [
  { name: 'Holiday', collections: 847 },
  { name: 'New Customer', collections: 423 },
  { name: 'Weekend', collections: 89 },
];

export const LOCATION_DATA = [
  { name: 'Downtown', value: 234, percentage: 35 },
  { name: 'Mall', value: 187, percentage: 28 },
  { name: 'Airport', value: 145, percentage: 22 },
  { name: 'Suburban', value: 98, percentage: 15 },
];

export const CHART_COLORS = ['#FF6900', '#000000', '#666666', '#CCCCCC'];

export const TIME_RANGES = [
  { value: '7d', label: 'Last 7 Days' },
  { value: '30d', label: 'Last 30 Days' },
  { value: '90d', label: 'Last 3 Months' },
  { value: '1y', label: 'Last Year' },
];

// Sidebar Quick Stats
export const SIDEBAR_STATS = {
  activeCampaigns: 12,
  totalSpend: 5430,
  collections: 1359,
};

// Team Members
export const TEAM_MEMBERS = [
  { id: 1, name: 'John Smith', email: 'john@starbucks.com', role: 'Admin', status: 'active' },
  { id: 2, name: 'Sarah Johnson', email: 'sarah@starbucks.com', role: 'Manager', status: 'active' },
  { id: 3, name: 'Mike Wilson', email: 'mike@starbucks.com', role: 'Viewer', status: 'active' },
];

// Billing Info
export const BILLING_INFO = {
  currentPlan: 'Professional',
  monthlySpend: 5430,
  billingCycle: 'Monthly',
  paymentMethod: '•••• •••• •••• 4242',
  nextBilling: 'Dec 1, 2024',
};

// Default Company Info
export const DEFAULT_COMPANY_INFO = {
  name: 'Starbucks',
  description: 'Premium coffee and beverage retailer',
  website: 'https://starbucks.com',
  email: 'campaigns@starbucks.com',
  phone: '+1 (555) 123-4567',
  address: '123 Business Ave, Seattle, WA 98101',
};

// Default Notification Settings
export const DEFAULT_NOTIFICATIONS = {
  campaignAlerts: true,
  lowBudgetWarnings: true,
  weeklyReports: true,
  monthlyAnalytics: true,
  systemUpdates: false,
};

// Notification Settings Options
export const NOTIFICATION_SETTINGS = [
  {
    key: 'campaignAlerts',
    title: 'Campaign Alerts',
    description: 'Get notified when campaigns start or end',
  },
  {
    key: 'lowBudgetWarnings',
    title: 'Low Budget Warnings',
    description: 'Alert when campaign budget is running low',
  },
  {
    key: 'weeklyReports',
    title: 'Weekly Reports',
    description: 'Receive weekly performance summaries',
  },
  {
    key: 'monthlyAnalytics',
    title: 'Monthly Analytics',
    description: 'Get detailed monthly analytics reports',
  },
  {
    key: 'systemUpdates',
    title: 'System Updates',
    description: 'Updates about new features and improvements',
  },
];
