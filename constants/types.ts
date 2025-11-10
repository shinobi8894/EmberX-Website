// Type Definitions

export type CampaignStatus = 'active' | 'paused' | 'scheduled';

export interface Campaign {
  id: number;
  name: string;
  status: CampaignStatus;
  budget: number;
  spent: number;
  collected: number;
  locations: number;
  rewardAmount?: number;
  startDate: string;
  endDate: string;
  views: number;
  conversionRate: number;
}

export interface CollectionDataPoint {
  date: string;
  collections: number;
  views: number;
}

export interface CampaignPerformance {
  name: string;
  collections: number;
}

export interface LocationData {
  name: string;
  value: number;
  percentage: number;
}

export interface TimeRange {
  value: string;
  label: string;
}

export interface TeamMember {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

export interface BillingInfo {
  currentPlan: string;
  monthlySpend: number;
  billingCycle: string;
  paymentMethod: string;
  nextBilling: string;
}

export interface CompanyInfo {
  name: string;
  description: string;
  website: string;
  email: string;
  phone: string;
  address: string;
}

export interface NotificationSettings {
  [key: string]: boolean;
}

export interface NotificationOption {
  key: string;
  title: string;
  description: string;
}

export interface SocialLink {
  name: string;
  label: string;
}

export interface Stat {
  value: string | number;
  label: string;
}
