"use client";
import { useState } from 'react';
import { Users, DollarSign, Target, TrendingUp, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StatCard } from './stat-card';
import { CampaignCard } from './campaign-card';
import { CAMPAIGNS } from '../../constants';

interface BrandDashboardProps {
  brandName: string;
}

export function BrandDashboard({ brandName }: BrandDashboardProps) {
  const [campaigns] = useState(CAMPAIGNS);

  const totalBudget = campaigns.reduce((sum, campaign) => sum + campaign.budget, 0);
  const totalSpent = campaigns.reduce((sum, campaign) => sum + campaign.spent, 0);
  const totalCollected = campaigns.reduce((sum, campaign) => sum + campaign.collected, 0);
  const activeCampaigns = campaigns.filter(c => c.status === 'active').length;

  const stats = [
    {
      label: 'Active Campaigns',
      value: activeCampaigns,
      icon: Target,
      change: '+2',
      color: 'from-[#FF6900] to-[#FF8533]'
    },
    {
      label: 'Total Budget',
      value: `$${totalBudget.toLocaleString()}`,
      icon: DollarSign,
      change: '+12%',
      color: 'from-gray-900 to-gray-700'
    },
    {
      label: 'Amount Spent',
      value: `$${totalSpent.toLocaleString()}`,
      icon: TrendingUp,
      change: '+8%',
      color: 'from-gray-600 to-gray-500'
    },
    {
      label: 'Total Collections',
      value: totalCollected.toLocaleString(),
      icon: Users,
      change: '+24%',
      color: 'from-[#FF6900] to-[#FF8533]'
    }
  ];

  return (
    <div className="p-8 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Campaigns Section */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-foreground">Active Campaigns</h3>
          <p className="text-sm text-muted-foreground">Manage and monitor your campaigns</p>
        </div>
        <Button className="bg-[#FF6900] hover:bg-[#E55A00] text-white shadow-sm">
          <Plus className="w-4 h-4 mr-2" />
          New Campaign
        </Button>
      </div>

      {/* Campaign Cards */}
      <div className="grid gap-6">
        {campaigns.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </div>
    </div>
  );
}
