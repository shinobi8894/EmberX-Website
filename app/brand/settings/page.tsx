"use client";
import { useState } from "react";

import {
  Settings as SettingsIcon,
  Building2,
  Bell,
  Shield,
  CreditCard,
  Users,
  MapPin,
  Globe,
  Save,
  AlertCircle,
  Gift,
  Clock,
  Zap,
  Brain,
  TrendingUp,
  Plus,
  Edit,
  Trash2,
  Sparkles,
  Target,
  DollarSign,
  Timer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

function BrandSettings({ brandName }: { brandName: string }) {
  const [companyInfo, setCompanyInfo] = useState({
    name: brandName,
    description: "Premium coffee and beverage retailer",
    website: "https://starbucks.com",
    email: "campaigns@starbucks.com",
    phone: "+1 (555) 123-4567",
    address: "123 Business Ave, Seattle, WA 98101",
  });

  const [notifications, setNotifications] = useState({
    campaignAlerts: true,
    lowBudgetWarnings: true,
    weeklyReports: true,
    monthlyAnalytics: true,
    systemUpdates: false,
  });

  const [preferences, setPreferences] = useState({
    autoApprove: false,
    defaultBudget: 1000,
    defaultDuration: 30,
    requireApproval: true,
  });

  const [billing] = useState({
    currentPlan: "Professional",
    monthlySpend: 5430,
    billingCycle: "Monthly",
    paymentMethod: "•••• •••• •••• 4242",
    nextBilling: "2024-12-01",
  });

  const [rewardCollections, setRewardCollections] = useState<any[]>([
    {
      id: "1",
      name: "Coffee Rewards",
      type: "discount",
      value: 15,
      valueType: "percentage",
      collectTimer: 24,
      spendTimer: 72,
      description: "Percentage discount on coffee purchases",
      status: "active",
    },
    {
      id: "2",
      name: "Free Drink Voucher",
      type: "voucher",
      value: 6.5,
      valueType: "fixed",
      collectTimer: 8,
      spendTimer: 168,
      description: "Free beverage up to $6.50",
      status: "active",
    },
  ]);

  const [showAiModal, setShowAiModal] = useState(false);
  const [showRewardModal, setShowRewardModal] = useState(false);
  const [editingReward, setEditingReward] = useState<any>(null);
  const [aiSuggestions] = useState({
    suggestions: [
      {
        title: "Optimize Collection Timer",
        description:
          "Reduce coffee reward collection timer from 24h to 6h during peak hours (7-9 AM, 2-4 PM) to increase urgency and collection rates.",
        impact: "+23% collection rate",
        type: "timer",
      },
      {
        title: "Dynamic Value Adjustment",
        description:
          "Increase reward value to 20% during slow periods (weekdays 2-4 PM) to drive foot traffic.",
        impact: "+18% foot traffic",
        type: "value",
      },
    ],
    insights: {
      bestPerformingReward: "Free Drink Voucher",
      optimalCollectionTime: "6-8 hours",
      recommendedSpendWindow: "48-72 hours",
      peakRedemptionHours: "7-9 AM, 12-2 PM, 5-7 PM",
    },
  });

  const [newReward, setNewReward] = useState<any>({
    name: "",
    type: "discount",
    value: 0,
    valueType: "percentage",
    collectTimer: 24,
    spendTimer: 72,
    description: "",
  });

  const handleSave = () => {
    console.log("Saving settings...", { companyInfo, notifications, preferences });
  };

  const handleAddReward = () => {
    const reward = { id: Date.now().toString(), ...newReward, status: "active" };
    setRewardCollections([...rewardCollections, reward]);
    setNewReward({ name: "", type: "discount", value: 0, valueType: "percentage", collectTimer: 24, spendTimer: 72, description: "" });
    setShowRewardModal(false);
  };

  const handleEditReward = (reward: any) => {
    setEditingReward(reward);
    setNewReward(reward);
    setShowRewardModal(true);
  };

  const handleDeleteReward = (id: string) => {
    setRewardCollections(rewardCollections.filter((r) => r.id !== id));
  };

  const handleUpdateReward = () => {
    setRewardCollections(
      rewardCollections.map((r) => (r.id === editingReward.id ? { ...newReward, id: r.id, status: r.status } : r))
    );
    setEditingReward(null);
    setNewReward({ name: "", type: "discount", value: 0, valueType: "percentage", collectTimer: 24, spendTimer: 72, description: "" });
    setShowRewardModal(false);
  };

  const applyAiSuggestion = (suggestion: any) => {
    switch (suggestion.type) {
      case "timer":
        setRewardCollections((prev) => prev.map((reward) => (reward.name === "Coffee Rewards" ? { ...reward, collectTimer: 6 } : reward)));
        break;
      case "value":
        setRewardCollections((prev) => prev.map((reward) => (reward.type === "discount" ? { ...reward, value: 20 } : reward)));
        break;
    }
    setShowAiModal(false);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Brand Settings</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Manage your {brandName} account and preferences</p>
        </div>
        <Button onClick={handleSave} className="bg-[#FF6900] hover:bg-[#E55A00] text-white">
          <Save className="w-4 h-4 mr-2" /> Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Gift className="w-5 h-5" /> Reward Collections
                </CardTitle>
                <div className="flex gap-2">
                  <Dialog open={showAiModal} onOpenChange={setShowAiModal}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Brain className="w-4 h-4" /> AI Optimize
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-auto">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-[#FF6900]" /> AI Campaign Optimization
                        </DialogTitle>
                      </DialogHeader>
                      <Tabs defaultValue="suggestions" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 bg-gray-800/30 border border-white/20">
                          <TabsTrigger value="suggestions" className="text-gray-300 data-[state=active]:bg-[#FF6900]/20 data-[state=active]:text-[#FF6900] hover:text-white transition-colors">Smart Suggestions</TabsTrigger>
                          <TabsTrigger value="insights" className="text-gray-300 data-[state=active]:bg-[#FF6900]/20 data-[state=active]:text-[#FF6900] hover:text-white transition-colors">Performance Insights</TabsTrigger>
                        </TabsList>
                        <TabsContent value="suggestions" className="space-y-4">
                          <Alert>
                            <TrendingUp className="w-4 h-4" />
                            <AlertDescription>
                              Based on your campaign performance and industry trends, here are AI-powered optimization suggestions:
                            </AlertDescription>
                          </Alert>
                          {aiSuggestions.suggestions.map((s: any, i: number) => (
                            <Card key={i} className="border-l-4 border-l-[#FF6900]">
                              <CardContent className="p-4">
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{s.title}</h4>
                                    <p className="text-gray-600 dark:text-gray-400 mb-3">{s.description}</p>
                                    <Badge variant="outline" className="text-green-600 border-green-600">{s.impact}</Badge>
                                  </div>
                                  <Button onClick={() => applyAiSuggestion(s)} className="bg-[#FF6900] hover:bg-[#E55A00] text-white ml-4">Apply</Button>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </TabsContent>
                        <TabsContent value="insights" className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card>
                              <CardContent className="p-4">
                                <div className="flex items-center gap-2 mb-2">
                                  <Target className="w-4 h-4 text-[#FF6900]" />
                                  <span className="font-medium">Best Performing Reward</span>
                                </div>
                                <p className="text-lg font-semibold">{aiSuggestions.insights.bestPerformingReward}</p>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardContent className="p-4">
                                <div className="flex items-center gap-2 mb-2">
                                  <Clock className="w-4 h-4 text-[#FF6900]" />
                                  <span className="font-medium">Optimal Collection Time</span>
                                </div>
                                <p className="text-lg font-semibold">{aiSuggestions.insights.optimalCollectionTime}</p>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardContent className="p-4">
                                <div className="flex items-center gap-2 mb-2">
                                  <Timer className="w-4 h-4 text-[#FF6900]" />
                                  <span className="font-medium">Recommended Spend Window</span>
                                </div>
                                <p className="text-lg font-semibold">{aiSuggestions.insights.recommendedSpendWindow}</p>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardContent className="p-4">
                                <div className="flex items-center gap-2 mb-2">
                                  <TrendingUp className="w-4 h-4 text-[#FF6900]" />
                                  <span className="font-medium">Peak Redemption Hours</span>
                                </div>
                                <p className="text-lg font-semibold">{aiSuggestions.insights.peakRedemptionHours}</p>
                              </CardContent>
                            </Card>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </DialogContent>
                  </Dialog>
                  <Dialog open={showRewardModal} onOpenChange={setShowRewardModal}>
                    <DialogTrigger asChild>
                      <Button size="sm" className="bg-[#FF6900] hover:bg-[#E55A00] gap-2">
                        <Plus className="w-4 h-4" /> Add Reward
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>{editingReward ? "Edit Reward" : "Create New Reward"}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">Reward Name</label>
                            <Input value={newReward.name} onChange={(e) => setNewReward({ ...newReward, name: e.target.value })} placeholder="e.g., Coffee Discount" className="mt-1" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Reward Type</label>
                            <Select value={newReward.type} onValueChange={(v) => setNewReward({ ...newReward, type: v })}>
                              <SelectTrigger className="mt-1">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="discount">Discount</SelectItem>
                                <SelectItem value="voucher">Voucher</SelectItem>
                                <SelectItem value="points">Points</SelectItem>
                                <SelectItem value="free_item">Free Item</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">Value</label>
                            <Input type="number" value={newReward.value} onChange={(e) => setNewReward({ ...newReward, value: parseFloat(e.target.value) || 0 })} className="mt-1" />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Value Type</label>
                            <Select value={newReward.valueType} onValueChange={(v) => setNewReward({ ...newReward, valueType: v })}>
                              <SelectTrigger className="mt-1">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="percentage">Percentage (%)</SelectItem>
                                <SelectItem value="fixed">Fixed Amount ($)</SelectItem>
                                <SelectItem value="points">Points</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">Collection Timer (hours)</label>
                            <Input type="number" value={newReward.collectTimer} onChange={(e) => setNewReward({ ...newReward, collectTimer: parseInt(e.target.value) || 0 })} className="mt-1" />
                            <p className="text-xs text-gray-500 mt-1">Time limit to collect reward after appearing</p>
                          </div>
                          <div>
                            <label className="text-sm font-medium">Spending Timer (hours)</label>
                            <Input type="number" value={newReward.spendTimer} onChange={(e) => setNewReward({ ...newReward, spendTimer: parseInt(e.target.value) || 0 })} className="mt-1" />
                            <p className="text-xs text-gray-500 mt-1">Time limit to use reward after collection</p>
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Description</label>
                          <Input value={newReward.description} onChange={(e) => setNewReward({ ...newReward, description: e.target.value })} placeholder="Brief description of the reward" className="mt-1" />
                        </div>
                        <div className="flex gap-2 pt-4">
                          <Button onClick={editingReward ? handleUpdateReward : handleAddReward} className="bg-[#FF6900] hover:bg-[#E55A00] text-white">
                            {editingReward ? "Update Reward" : "Create Reward"}
                          </Button>
                          <Button variant="outline" onClick={() => { setShowRewardModal(false); setEditingReward(null); }}>Cancel</Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {rewardCollections.map((reward) => (
                  <Card key={reward.id} className="border-l-4 border-l-[#FF6900]">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold text-gray-900 dark:text-white">{reward.name}</h4>
                            <Badge variant={reward.status === "active" ? "default" : "secondary"}>{reward.status}</Badge>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-3">{reward.description}</p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-gray-500">Value:</span>
                              <p className="font-medium">
                                {reward.value}
                                {reward.valueType === "percentage" ? "%" : reward.valueType === "fixed" ? "$" : " pts"}
                              </p>
                            </div>
                            <div>
                              <span className="text-gray-500">Type:</span>
                              <p className="font-medium capitalize">{reward.type.replace("_", " ")}</p>
                            </div>
                            <div>
                              <span className="text-gray-500">Collect:</span>
                              <p className="font-medium">{reward.collectTimer}h</p>
                            </div>
                            <div>
                              <span className="text-gray-500">Spend:</span>
                              <p className="font-medium">{reward.spendTimer}h</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button variant="outline" size="sm" onClick={() => handleEditReward(reward)}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleDeleteReward(reward.id)} className="text-red-600 hover:text-red-700">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {rewardCollections.length === 0 && (
                  <div className="text-center py-8 text-gray-500">No rewards configured yet. Click "Add Reward" to get started.</div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5" /> Company Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Company Name</label>
                  <Input value={companyInfo.name} onChange={(e) => setCompanyInfo({ ...companyInfo, name: e.target.value })} className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium">Website</label>
                  <Input value={companyInfo.website} onChange={(e) => setCompanyInfo({ ...companyInfo, website: e.target.value })} className="mt-1" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <Input value={companyInfo.description} onChange={(e) => setCompanyInfo({ ...companyInfo, description: e.target.value })} className="mt-1" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Contact Email</label>
                  <Input type="email" value={companyInfo.email} onChange={(e) => setCompanyInfo({ ...companyInfo, email: e.target.value })} className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input value={companyInfo.phone} onChange={(e) => setCompanyInfo({ ...companyInfo, phone: e.target.value })} className="mt-1" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Business Address</label>
                <Input value={companyInfo.address} onChange={(e) => setCompanyInfo({ ...companyInfo, address: e.target.value })} className="mt-1" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <SettingsIcon className="w-5 h-5" /> Campaign Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Auto-approve campaigns</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Automatically approve campaigns under default budget</p>
                </div>
                <Switch checked={preferences.autoApprove} onCheckedChange={(checked) => setPreferences({ ...preferences, autoApprove: checked })} />
              </div>
              <Separator />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Default Budget ($)</label>
                  <Input type="number" value={preferences.defaultBudget} onChange={(e) => setPreferences({ ...preferences, defaultBudget: parseInt(e.target.value) || 0 })} className="mt-1" />
                </div>
                <div>
                  <label className="text-sm font-medium">Default Duration (days)</label>
                  <Input type="number" value={preferences.defaultDuration} onChange={(e) => setPreferences({ ...preferences, defaultDuration: parseInt(e.target.value) || 0 })} className="mt-1" />
                </div>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Require approval for high-budget campaigns</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Manual approval required for campaigns over $5,000</p>
                </div>
                <Switch checked={preferences.requireApproval} onCheckedChange={(checked) => setPreferences({ ...preferences, requireApproval: checked })} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" /> Notification Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Campaign alerts</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Get notified when campaigns start, pause, or end</p>
                </div>
                <Switch checked={notifications.campaignAlerts} onCheckedChange={(checked) => setNotifications({ ...notifications, campaignAlerts: checked })} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Low budget warnings</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Alert when campaign budget reaches 80%</p>
                </div>
                <Switch checked={notifications.lowBudgetWarnings} onCheckedChange={(checked) => setNotifications({ ...notifications, lowBudgetWarnings: checked })} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Weekly reports</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Receive weekly performance summaries</p>
                </div>
                <Switch checked={notifications.weeklyReports} onCheckedChange={(checked) => setNotifications({ ...notifications, weeklyReports: checked })} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Monthly analytics</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Detailed monthly analytics reports</p>
                </div>
                <Switch checked={notifications.monthlyAnalytics} onCheckedChange={(checked) => setNotifications({ ...notifications, monthlyAnalytics: checked })} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">System updates</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Platform updates and new features</p>
                </div>
                <Switch checked={notifications.systemUpdates} onCheckedChange={(checked) => setNotifications({ ...notifications, systemUpdates: checked })} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-[#FF6900] bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#FF6900]">
                <Brain className="w-5 h-5" /> AI Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Optimization Score</span>
                <Badge className="bg-[#FF6900] text-white">87%</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Collection Rate</span>
                <span className="text-sm font-semibold text-green-600">+12%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Revenue Impact</span>
                <span className="text-sm font-semibold text-green-600">+$2,340</span>
              </div>
              <Button onClick={() => setShowAiModal(true)} className="w-full bg-[#FF6900] hover:bg-[#E55A00] text-white">
                <Sparkles className="w-4 h-4 mr-2" /> View Suggestions
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" /> Account Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Account Type</span>
                <Badge className="bg-[#FF6900] text-white">Professional</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Verification</span>
                <Badge variant="outline" className="text-green-600 border-green-600">Verified</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">API Access</span>
                <Badge variant="outline">Enabled</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" /> Billing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Current Plan</p>
                <p className="font-semibold">{billing.currentPlan}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Monthly Spend</p>
                <p className="font-semibold">${billing.monthlySpend.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Payment Method</p>
                <p className="font-semibold">{billing.paymentMethod}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Next Billing</p>
                <p className="font-semibold">{billing.nextBilling}</p>
              </div>
              <Button variant="outline" className="w-full">Manage Billing</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Users className="w-4 h-4 mr-2" /> Manage Team
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <MapPin className="w-4 h-4 mr-2" /> Location Settings
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Globe className="w-4 h-4 mr-2" /> API Documentation
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5" /> Need Help?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Contact our support team for assistance with your campaigns.</p>
              <Button variant="outline" className="w-full">Contact Support</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function SettingsPage() {
  return (
    <div className="flex-1 overflow-auto">
      <BrandSettings brandName="Starbucks" />
    </div>
  );
}
