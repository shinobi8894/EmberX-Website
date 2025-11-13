export const BRAND_NAME = 'Starbucks';

// Dashboard Section
export const DASHBOARD_SECTION = {
  title: 'Active Campaigns',
  subtitle: 'Manage and monitor your campaigns',
  newCampaignButton: 'New Campaign',
  statsLabels: {
    activeCampaigns: 'Active Campaigns',
    totalBudget: 'Total Budget',
    amountSpent: 'Amount Spent',
    totalCollections: 'Total Collections',
  },
};

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

// Campaign Filters
export const CAMPAIGN_FILTERS = [
  { id: 'all', label: 'All Campaigns' },
  { id: 'active', label: 'Active' },
  { id: 'paused', label: 'Paused' },
  { id: 'scheduled', label: 'Scheduled' },
];

// Campaigns Page Content
export const CAMPAIGNS_PAGE = {
  header: {
    title: 'Campaign Manager',
    subtitle: 'Create and manage your reward campaigns',
    createButton: 'Create Campaign',
  },
  search: {
    placeholder: 'Search campaigns...',
    filtersButton: 'Filters',
  },
  emptyState: {
    title: 'No campaigns found',
    subtitleWithSearch: 'Try adjusting your search',
    subtitleNoSearch: 'Create your first campaign to get started',
    createButton: 'Create Campaign',
  },
};

// Campaign Card Labels
export const CAMPAIGN_CARD = {
  locations: 'locations',
  ends: 'Ends',
  buttons: {
    pause: 'Pause',
    resume: 'Resume',
  },
  stats: {
    views: 'Views',
    collected: 'Collected',
    conversion: 'Conversion',
    spent: 'Spent',
    budget: 'Budget',
  },
};

// Analytics Page Content
export const ANALYTICS_PAGE = {
  header: {
    title: 'Analytics Overview',
  },
  stats: {
    totalCollections: {
      label: 'Total Collections',
      value: '1,359',
      change: '+12.5%',
    },
    totalViews: {
      label: 'Total Views',
      value: '20,700',
      change: '+8.2%',
    },
    avgConversion: {
      label: 'Avg. Conversion',
      value: '6.6%',
      change: '+0.4%',
    },
    totalSpent: {
      label: 'Total Spent',
      value: '$5,450',
      change: '+15.3%',
    },
  },
};

// Settings Page Content
export const SETTINGS_PAGE = {
  tabs: {
    company: { id: 'company', label: 'Company Info' },
    notifications: { id: 'notifications', label: 'Notifications' },
    team: { id: 'team', label: 'Team' },
    billing: { id: 'billing', label: 'Billing' },
  },
  company: {
    title: 'Company Information',
    subtitle: 'Update your brand details and contact information',
    fields: {
      companyName: 'Company Name',
      description: 'Description',
      website: 'Website',
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
    },
    saveButton: 'Save Changes',
  },
  notifications: {
    title: 'Notification Preferences',
    subtitle: 'Manage how you receive updates and alerts',
  },
  team: {
    title: 'Team Members',
    subtitle: 'Manage your team access and permissions',
    addButton: 'Add Member',
    badges: {
      active: 'ACTIVE',
    },
    buttons: {
      edit: 'Edit',
      delete: 'Delete',
    },
  },
  billing: {
    title: 'Billing & Subscription',
    subtitle: 'Manage your subscription and payment details',
    currentPlan: 'Current Plan',
    billedLabel: 'Billed',
    monthlySpendLabel: 'Monthly Spend',
    nextBillingLabel: 'Next Billing Date',
    paymentMethodLabel: 'Payment Method',
    upgradeButton: 'Upgrade Plan',
    updateButton: 'Update',
  },
};

// Brand Header Content
export const BRAND_HEADER = {
  defaultTitle: 'Dashboard',
  subtitle: 'Manage your EmberX campaigns',
  searchPlaceholder: 'Search...',
};

// Brand Sidebar Content
export const BRAND_SIDEBAR = {
  logoText: 'EmberX',
  consoleText: 'Brand Console',
  quickStatsTitle: 'This Month',
  quickStats: {
    activeCampaigns: 'Active Campaigns',
    totalSpend: 'Total Spend',
    collections: 'Collections',
  },
  userRole: 'Manager',
  logoutButton: 'Logout',
};
