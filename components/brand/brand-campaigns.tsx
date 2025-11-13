"use client";
import { useState } from 'react';
import { Plus, Search, Filter, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CampaignCard } from './campaign-card';
import { CAMPAIGNS, CAMPAIGN_FILTERS, CAMPAIGNS_PAGE } from '../../constants';

interface BrandCampaignsProps {
  brandName: string;
}

export function BrandCampaigns({ brandName }: BrandCampaignsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [campaigns] = useState(CAMPAIGNS);

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'all' || campaign.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    all: campaigns.length,
    active: campaigns.filter(c => c.status === 'active').length,
    paused: campaigns.filter(c => c.status === 'paused').length,
    scheduled: campaigns.filter(c => c.status === 'scheduled').length
  };

  const filtersWithCounts = CAMPAIGN_FILTERS.map(filter => ({
    ...filter,
    count: stats[filter.id as keyof typeof stats]
  }));

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-foreground">{CAMPAIGNS_PAGE.header.title}</h3>
          <p className="text-sm text-muted-foreground">{CAMPAIGNS_PAGE.header.subtitle}</p>
        </div>
        <Button className="bg-[#FF6900] hover:bg-[#E55A00] text-white shadow-sm">
          <Plus className="w-4 h-4 mr-2" />
          {CAMPAIGNS_PAGE.header.createButton}
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder={CAMPAIGNS_PAGE.search.placeholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-muted border-border"
            />
          </div>
          <Button variant="outline" className="border-border">
            <Filter className="w-4 h-4 mr-2" />
            {CAMPAIGNS_PAGE.search.filtersButton}
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mt-4">
          {filtersWithCounts.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-[#FF6900] text-white shadow-sm'
                  : 'bg-muted text-foreground hover:bg-accent'
              }`}
            >
              {filter.label}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                activeFilter === filter.id 
                  ? 'bg-white text-[#FF6900]' 
                  : 'bg-muted'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>
      </Card>

      {/* Campaign List */}
      <div className="grid gap-6">
        {filteredCampaigns.length === 0 ? (
          <Card className="p-12 bg-card border-border">
            <div className="text-center">
              <Target className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-bold text-foreground mb-2">{CAMPAIGNS_PAGE.emptyState.title}</h3>
              <p className="text-muted-foreground mb-6">
                {searchQuery ? CAMPAIGNS_PAGE.emptyState.subtitleWithSearch : CAMPAIGNS_PAGE.emptyState.subtitleNoSearch}
              </p>
              <Button className="bg-[#FF6900] hover:bg-[#E55A00] text-white">
                <Plus className="w-4 h-4 mr-2" />
                {CAMPAIGNS_PAGE.emptyState.createButton}
              </Button>
            </div>
          </Card>
        ) : (
          filteredCampaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))
        )}
      </div>
    </div>
  );
}
