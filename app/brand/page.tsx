"use client";
import { useState } from "react";

import { 
  Users,
  DollarSign,
  Target,
  TrendingUp,
  MapPin,
  Calendar,
  BarChart3,
  Plus,
  Crown,
  Lock,
  Eye,
  Clock,
  Navigation,
  ShoppingBag,
  Activity,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface BrandDashboardProps {
  brandName: string;
}

function BrandDashboard({ brandName }: BrandDashboardProps) {
  const [campaigns] = useState([
    {
      id: 1,
      name: "Holiday Rewards",
      status: "active",
      budget: 5000,
      spent: 3200,
      collected: 847,
      locations: 12,
      endDate: "2024-12-31",
      analytics: {
        basic: {
          views: 12400,
          collections: 847,
          conversionRate: 6.8,
          avgTimeToCollect: "2.3 mins",
        },
        detailed: {
          demographics: {
            ageGroups: { "18-24": 28, "25-34": 35, "35-44": 22, "45+": 15 },
            genderSplit: { male: 48, female: 52 },
          },
          footFlow: {
            peakHours: ["12:00-14:00", "17:00-19:00"],
            avgDwellTime: "4.2 mins",
            returnVisitRate: 23,
          },
          deviceData: {
            ios: 62,
            android: 38,
          },
        },
        enhanced: {
          purchaseBehavior: {
            postCollectionSpend: "$42.50",
            categoryPreference: ["Food & Drink", "Retail", "Services"],
            loyaltyImpact: "+18% repeat visits",
          },
          locationIntelligence: {
            heatmapData: "Available",
            competitorAnalysis: "McDonald's nearby reduces collections by 12%",
            optimalPlacement: "Move 50m east for +15% collections",
          },
          realTimeInsights: {
            currentActivity: "High",
            predictedCollections: "12-15 in next hour",
            weatherImpact: "Rain decreases collections by 8%",
          },
        },
      },
    },
    {
      id: 2,
      name: "New Customer Bonus",
      status: "active",
      budget: 2500,
      spent: 1800,
      collected: 423,
      locations: 8,
      endDate: "2024-11-30",
      analytics: {
        basic: {
          views: 6200,
          collections: 423,
          conversionRate: 6.8,
          avgTimeToCollect: "1.8 mins",
        },
        detailed: {
          demographics: {
            ageGroups: { "18-24": 42, "25-34": 31, "35-44": 18, "45+": 9 },
            genderSplit: { male: 51, female: 49 },
          },
          footFlow: {
            peakHours: ["11:00-13:00", "16:00-18:00"],
            avgDwellTime: "3.1 mins",
            returnVisitRate: 31,
          },
          deviceData: {
            ios: 58,
            android: 42,
          },
        },
        enhanced: {
          purchaseBehavior: {
            postCollectionSpend: "$67.20",
            categoryPreference: ["Fashion", "Electronics", "Food & Drink"],
            loyaltyImpact: "+24% new customer acquisition",
          },
          locationIntelligence: {
            heatmapData: "Available",
            competitorAnalysis: "Starbucks proximity increases collections by 8%",
            optimalPlacement: "Current placement optimal",
          },
          realTimeInsights: {
            currentActivity: "Medium",
            predictedCollections: "8-10 in next hour",
            weatherImpact: "Sunny weather increases collections by 5%",
          },
        },
      },
    },
    {
      id: 3,
      name: "Weekend Special",
      status: "paused",
      budget: 1500,
      spent: 450,
      collected: 89,
      locations: 5,
      endDate: "2024-11-15",
      analytics: {
        basic: {
          views: 2100,
          collections: 89,
          conversionRate: 4.2,
          avgTimeToCollect: "3.1 mins",
        },
        detailed: {
          demographics: {
            ageGroups: { "18-24": 25, "25-34": 38, "35-44": 25, "45+": 12 },
            genderSplit: { male: 45, female: 55 },
          },
          footFlow: {
            peakHours: ["10:00-12:00", "14:00-16:00"],
            avgDwellTime: "5.8 mins",
            returnVisitRate: 15,
          },
          deviceData: {
            ios: 65,
            android: 35,
          },
        },
        enhanced: {
          purchaseBehavior: {
            postCollectionSpend: "$28.90",
            categoryPreference: ["Food & Drink", "Entertainment", "Retail"],
            loyaltyImpact: "+8% weekend visit increase",
          },
          locationIntelligence: {
            heatmapData: "Available",
            competitorAnalysis: "Low competition area",
            optimalPlacement: "Consider shopping center placement",
          },
          realTimeInsights: {
            currentActivity: "Paused",
            predictedCollections: "N/A",
            weatherImpact: "Historical: Clear weather +12%",
          },
        },
      },
    },
  ]);

  const [analyticsTier, setAnalyticsTier] = useState<"basic" | "detailed" | "enhanced">("basic");

  const totalBudget = campaigns.reduce((sum, campaign) => sum + campaign.budget, 0);
  const totalSpent = campaigns.reduce((sum, campaign) => sum + campaign.spent, 0);
  const totalCollected = campaigns.reduce((sum, campaign) => sum + campaign.collected, 0);
  const activeCampaigns = campaigns.filter((c) => c.status === "active").length;

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome back to {brandName}</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Here's an overview of your EmberX campaigns</p>
        </div>
        <Button className="bg-[#FF6900] hover:bg-[#E55A00] text-white">
          <Plus className="w-4 h-4 mr-2" />
          New Campaign
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeCampaigns}</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalBudget.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Across all campaigns</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Amount Spent</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalSpent.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">{Math.round((totalSpent / totalBudget) * 100)}% of total budget</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Collections</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCollected.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Rewards collected by users</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Campaign Analytics
            </CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                <Eye className="w-3 h-3 mr-1" />
                {analyticsTier === "basic" ? "Basic (Free)" : analyticsTier === "detailed" ? "Detailed (Premium)" : "Enhanced (Pro)"}
              </Badge>
              <div className="flex border rounded-lg overflow-hidden">
                <Button variant={analyticsTier === "basic" ? "default" : "ghost"} size="sm" onClick={() => setAnalyticsTier("basic")} className="rounded-none">Basic</Button>
                <Button variant={analyticsTier === "detailed" ? "default" : "ghost"} size="sm" onClick={() => setAnalyticsTier("detailed")} className="rounded-none" disabled={analyticsTier === "basic"}>
                  <Crown className="w-3 h-3 mr-1" /> Detailed
                </Button>
                <Button variant={analyticsTier === "enhanced" ? "default" : "ghost"} size="sm" onClick={() => setAnalyticsTier("enhanced")} className="rounded-none" disabled={analyticsTier === "basic" || analyticsTier === "detailed"}>
                  <Zap className="w-3 h-3 mr-1" /> Enhanced
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="border rounded-lg p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{campaign.name}</h3>
                  <Badge variant={campaign.status === "active" ? "default" : "secondary"} className={campaign.status === "active" ? "bg-green-100 text-green-800" : ""}>
                    {campaign.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {campaign.locations} locations
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> Ends {campaign.endDate}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Eye className="w-4 h-4 text-blue-500" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">Views</p>
                  </div>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">{campaign.analytics.basic.views.toLocaleString()}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Target className="w-4 h-4 text-green-500" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">Collections</p>
                  </div>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">{campaign.analytics.basic.collections}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <TrendingUp className="w-4 h-4 text-purple-500" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">Conversion</p>
                  </div>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">{campaign.analytics.basic.conversionRate}%</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <p className="text-sm text-gray-600 dark:text-gray-400">Avg. Time</p>
                  </div>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">{campaign.analytics.basic.avgTimeToCollect}</p>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Budget Progress</p>
                <Progress value={(campaign.spent / campaign.budget) * 100} className="mb-2" />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>${campaign.spent.toLocaleString()} spent</span>
                  <span>${campaign.budget.toLocaleString()} total</span>
                </div>
              </div>

              {analyticsTier === "detailed" || analyticsTier === "enhanced" ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Crown className="w-4 h-4 text-yellow-500" />
                    <h4 className="font-medium text-gray-900 dark:text-white">Detailed Insights</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium text-gray-900 dark:text-white mb-3">Demographics</h5>
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Age Groups</p>
                          <div className="grid grid-cols-2 gap-1 text-xs mt-1">
                            {Object.entries(campaign.analytics.detailed.demographics.ageGroups).map(([age, percent]) => (
                              <div key={age} className="flex justify-between">
                                <span>{age}:</span>
                                <span className="font-medium">{percent}%</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Gender Split</p>
                          <div className="flex justify-between text-xs mt-1">
                            <span>M: {campaign.analytics.detailed.demographics.genderSplit.male}%</span>
                            <span>F: {campaign.analytics.detailed.demographics.genderSplit.female}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium text-gray-900 dark:text-white mb-3">Foot Flow</h5>
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Peak Hours</p>
                          <div className="text-xs mt-1">{campaign.analytics.detailed.footFlow.peakHours.join(", ")}</div>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Avg. Dwell Time</p>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{campaign.analytics.detailed.footFlow.avgDwellTime}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Return Rate</p>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{campaign.analytics.detailed.footFlow.returnVisitRate}%</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium text-gray-900 dark:text-white mb-3">Device Split</h5>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">iOS:</span>
                          <span className="font-medium">{campaign.analytics.detailed.deviceData.ios}%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Android:</span>
                          <span className="font-medium">{campaign.analytics.detailed.deviceData.android}%</span>
                        </div>
                        <Progress value={campaign.analytics.detailed.deviceData.ios} className="mt-2" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-center">
                  <Lock className="w-8 h-8 mx-auto mb-3 text-gray-400" />
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Detailed Analytics</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Unlock demographics, foot flow patterns, and device insights</p>
                  <Button size="sm" className="bg-[#FF6900] hover:bg-[#E55A00] text-white">
                    <Crown className="w-4 h-4 mr-2" /> Upgrade to Premium
                  </Button>
                </div>
              )}

              {analyticsTier === "enhanced" ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-4 h-4 text-blue-500" />
                    <h4 className="font-medium text-gray-900 dark:text-white">Enhanced Intelligence</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
                      <h5 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4" /> Purchase Behavior
                      </h5>
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Post-Collection Spend</p>
                          <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">{campaign.analytics.enhanced.purchaseBehavior.postCollectionSpend}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Loyalty Impact</p>
                          <p className="text-sm font-medium text-green-600 dark:text-green-400">{campaign.analytics.enhanced.purchaseBehavior.loyaltyImpact}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
                      <h5 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <Navigation className="w-4 h-4" /> Location Intelligence
                      </h5>
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Competitor Analysis</p>
                          <p className="text-xs text-gray-700 dark:text-gray-300">{campaign.analytics.enhanced.locationIntelligence.competitorAnalysis}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Optimization</p>
                          <p className="text-xs font-medium text-green-600 dark:text-green-400">{campaign.analytics.enhanced.locationIntelligence.optimalPlacement}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20">
                      <h5 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <Activity className="w-4 h-4" /> Real-Time Insights
                      </h5>
                      <div className="space-y-2">
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Current Activity</p>
                          <Badge variant="outline" className={
                            campaign.analytics.enhanced.realTimeInsights.currentActivity === "High"
                              ? "border-green-500 text-green-600"
                              : campaign.analytics.enhanced.realTimeInsights.currentActivity === "Medium"
                              ? "border-yellow-500 text-yellow-600"
                              : "border-gray-500 text-gray-600"
                          }>
                            {campaign.analytics.enhanced.realTimeInsights.currentActivity}
                          </Badge>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Predictions</p>
                          <p className="text-xs font-medium text-purple-600 dark:text-purple-400">{campaign.analytics.enhanced.realTimeInsights.predictedCollections}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">Weather Impact</p>
                          <p className="text-xs text-gray-700 dark:text-gray-300">{campaign.analytics.enhanced.realTimeInsights.weatherImpact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : analyticsTier === "detailed" ? (
                <div className="p-6 border-2 border-dashed border-blue-300 dark:border-blue-600 rounded-lg text-center">
                  <Zap className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Enhanced Intelligence</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Unlock purchase behavior, location intelligence, and real-time predictions</p>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Zap className="w-4 h-4 mr-2" /> Upgrade to Pro
                  </Button>
                </div>
              ) : (
                <div className="p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-center">
                  <Zap className="w-8 h-8 mx-auto mb-3 text-gray-400" />
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Enhanced Intelligence</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Advanced analytics with AI-powered insights and real-time predictions</p>
                  <Button size="sm" disabled className="bg-gray-400 text-white cursor-not-allowed">
                    <Lock className="w-4 h-4 mr-2" /> Requires Premium & Pro
                  </Button>
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center">
            <Plus className="w-8 h-8 mx-auto mb-3 text-[#FF6900]" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Create Campaign</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Set up a new reward campaign</p>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center">
            <BarChart3 className="w-8 h-8 mx-auto mb-3 text-[#FF6900]" />
            <h3 className="font-semibold text-gray-900 dark:text-white">View Analytics</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Detailed performance metrics</p>
          </CardContent>
        </Card>
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-6 text-center">
            <MapPin className="w-8 h-8 mx-auto mb-3 text-[#FF6900]" />
            <h3 className="font-semibold text-gray-900 dark:text-white">Manage Locations</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Add or edit drop locations</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function BrandPage() {
  return (
    <div className="flex-1 overflow-auto">
      <BrandDashboard brandName="Starbucks" />
    </div>
  );
}
