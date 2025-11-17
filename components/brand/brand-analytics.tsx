"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Target, ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { StatCard } from './stat-card';
import { CollectionChart, PerformanceChart, LocationChart, KeyInsightsCard } from './analytics-charts';
import { COLLECTION_DATA, CAMPAIGN_PERFORMANCE, LOCATION_DATA, CHART_COLORS, TIME_RANGES, ANALYTICS_PAGE } from '../../constants';

interface BrandAnalyticsProps {
  brandName: string;
}

export function BrandAnalytics({ brandName }: BrandAnalyticsProps) {
  const [timeRange, setTimeRange] = useState('7d');

  const stats = [
    {
      label: ANALYTICS_PAGE.stats.totalCollections.label,
      value: ANALYTICS_PAGE.stats.totalCollections.value,
      change: ANALYTICS_PAGE.stats.totalCollections.change,
      icon: Target,
      color: 'from-[#FF6900] to-[#FF8533]'
    },
    {
      label: ANALYTICS_PAGE.stats.totalViews.label,
      value: ANALYTICS_PAGE.stats.totalViews.value,
      change: ANALYTICS_PAGE.stats.totalViews.change,
      icon: Users,
      color: 'from-gray-900 to-gray-700'
    },
    {
      label: ANALYTICS_PAGE.stats.avgConversion.label,
      value: ANALYTICS_PAGE.stats.avgConversion.value,
      change: ANALYTICS_PAGE.stats.avgConversion.change,
      icon: TrendingUp,
      color: 'from-gray-600 to-gray-500'
    },
    {
      label: ANALYTICS_PAGE.stats.totalSpent.label,
      value: ANALYTICS_PAGE.stats.totalSpent.value,
      change: ANALYTICS_PAGE.stats.totalSpent.change,
      icon: DollarSign,
      color: 'from-[#FF6900] to-[#FF8533]'
    }
  ];

  return (
    <div className="p-8 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <StatCard {...stat} />
          </motion.div>
        ))}
      </div>

      {/* Time Range Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <Card className="p-6 bg-card border-border">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-foreground">{ANALYTICS_PAGE.header.title}</h3>
            <div className="flex items-center gap-2">
              {TIME_RANGES.map((range) => (
                <button
                  key={range.value}
                  onClick={() => setTimeRange(range.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    timeRange === range.value
                      ? 'bg-[#FF6900] text-white shadow-sm'
                      : 'bg-muted text-foreground hover:bg-accent'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <CollectionChart data={COLLECTION_DATA} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <PerformanceChart data={CAMPAIGN_PERFORMANCE} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <LocationChart data={LOCATION_DATA} colors={CHART_COLORS} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <KeyInsightsCard />
        </motion.div>
      </div>
    </div>
  );
}
