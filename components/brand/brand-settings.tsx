"use client";
import { useState } from 'react';
import { 
  Building2,
  Bell,
  Users,
  CreditCard,
  Mail,
  Phone,
  Globe,
  Save,
  User,
  MapPin,
  Plus,
  Edit,
  Trash
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';

interface BrandSettingsProps {
  brandName: string;
}

export function BrandSettings({ brandName }: BrandSettingsProps) {
  const [activeTab, setActiveTab] = useState('company');
  const [companyInfo, setCompanyInfo] = useState({
    name: brandName,
    description: 'Premium coffee and beverage retailer',
    website: 'https://starbucks.com',
    email: 'campaigns@starbucks.com',
    phone: '+1 (555) 123-4567',
    address: '123 Business Ave, Seattle, WA 98101'
  });

  const [notifications, setNotifications] = useState({
    campaignAlerts: true,
    lowBudgetWarnings: true,
    weeklyReports: true,
    monthlyAnalytics: true,
    systemUpdates: false
  });

  const [billing] = useState({
    currentPlan: 'Professional',
    monthlySpend: 5430,
    billingCycle: 'Monthly',
    paymentMethod: '•••• •••• •••• 4242',
    nextBilling: 'Dec 1, 2024'
  });

  const [teamMembers] = useState([
    { id: 1, name: 'John Smith', email: 'john@starbucks.com', role: 'Admin', status: 'active' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@starbucks.com', role: 'Manager', status: 'active' },
    { id: 3, name: 'Mike Wilson', email: 'mike@starbucks.com', role: 'Viewer', status: 'active' }
  ]);

  const tabs = [
    { id: 'company', label: 'Company Info', icon: Building2 },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'billing', label: 'Billing', icon: CreditCard },
  ];

  const notificationSettings = [
    { 
      key: 'campaignAlerts', 
      title: 'Campaign Alerts', 
      description: 'Get notified when campaigns start or end' 
    },
    { 
      key: 'lowBudgetWarnings', 
      title: 'Low Budget Warnings', 
      description: 'Alert when campaign budget is running low' 
    },
    { 
      key: 'weeklyReports', 
      title: 'Weekly Reports', 
      description: 'Receive weekly performance summaries' 
    },
    { 
      key: 'monthlyAnalytics', 
      title: 'Monthly Analytics', 
      description: 'Get detailed monthly analytics reports' 
    },
    { 
      key: 'systemUpdates', 
      title: 'System Updates', 
      description: 'Updates about new features and improvements' 
    },
  ];

  return (
    <div className="p-8 space-y-6">
      <Card className="p-2 bg-card border-border">
        <div className="flex items-center gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-[#FF6900] text-white shadow-sm'
                    : 'text-foreground hover:bg-accent'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </Card>

      {activeTab === 'company' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">Company Information</h3>
            <p className="text-sm text-muted-foreground">Update your brand details and contact information</p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <Card className="p-6 bg-card border-border">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="company-name" className="text-foreground">Company Name</Label>
                  <Input
                    id="company-name"
                    value={companyInfo.name}
                    onChange={(e) => setCompanyInfo({...companyInfo, name: e.target.value})}
                    className="mt-2 bg-muted border-border"
                  />
                </div>

                <div>
                  <Label htmlFor="description" className="text-foreground">Description</Label>
                  <Textarea
                    id="description"
                    value={companyInfo.description}
                    onChange={(e) => setCompanyInfo({...companyInfo, description: e.target.value})}
                    className="mt-2 bg-muted border-border"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="website" className="text-foreground flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Website
                  </Label>
                  <Input
                    id="website"
                    value={companyInfo.website}
                    onChange={(e) => setCompanyInfo({...companyInfo, website: e.target.value})}
                    className="mt-2 bg-muted border-border"
                  />
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={companyInfo.email}
                    onChange={(e) => setCompanyInfo({...companyInfo, email: e.target.value})}
                    className="mt-2 bg-muted border-border"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={companyInfo.phone}
                    onChange={(e) => setCompanyInfo({...companyInfo, phone: e.target.value})}
                    className="mt-2 bg-muted border-border"
                  />
                </div>

                <div>
                  <Label htmlFor="address" className="text-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Address
                  </Label>
                  <Textarea
                    id="address"
                    value={companyInfo.address}
                    onChange={(e) => setCompanyInfo({...companyInfo, address: e.target.value})}
                    className="mt-2 bg-muted border-border"
                    rows={3}
                  />
                </div>
              </div>
            </Card>
          </div>

          <div className="flex justify-end">
            <Button className="bg-[#FF6900] hover:bg-[#E55A00] text-white shadow-sm">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      )}

      {activeTab === 'notifications' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">Notification Preferences</h3>
            <p className="text-sm text-muted-foreground">Manage how you receive updates and alerts</p>
          </div>

          <div className="grid gap-4">
            {notificationSettings.map((setting) => (
              <Card key={setting.key} className="p-6 bg-card border-border">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-1">{setting.title}</h4>
                    <p className="text-sm text-muted-foreground">{setting.description}</p>
                  </div>
                  <Switch
                    checked={notifications[setting.key as keyof typeof notifications]}
                    onCheckedChange={(checked) => setNotifications({...notifications, [setting.key]: checked})}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'team' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">Team Members</h3>
              <p className="text-sm text-muted-foreground">Manage your team access and permissions</p>
            </div>
            <Button className="bg-[#FF6900] hover:bg-[#E55A00] text-white shadow-sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Member
            </Button>
          </div>

          <div className="grid gap-4">
            {teamMembers.map((member) => (
              <Card key={member.id} className="p-6 bg-card border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF6900] to-[#FF8533] rounded-full flex items-center justify-center shadow-sm">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{member.name}</h4>
                    <p className="text-sm text-muted-foreground">{member.email}</p>
                  </div>
                  <Badge className="bg-muted text-foreground border-0">
                    {member.role}
                  </Badge>
                  <Badge className={`${
                    member.status === 'active'
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                      : 'bg-muted text-muted-foreground'
                  } border-0`}>
                    {member.status.toUpperCase()}
                  </Badge>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="border-border">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="border-border text-red-600 hover:text-red-700">
                      <Trash className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'billing' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1">Billing & Subscription</h3>
            <p className="text-sm text-muted-foreground">Manage your subscription and payment details</p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <Card className="p-8 bg-gradient-to-br from-[#FF6900] to-[#FF8533] text-white border-0 shadow-xl">
              <div className="space-y-4">
                <div>
                  <p className="text-sm opacity-80 mb-1">Current Plan</p>
                  <h3 className="text-3xl font-bold">{billing.currentPlan}</h3>
                </div>
                <div>
                  <p className="text-sm opacity-80">Billed {billing.billingCycle}</p>
                </div>
                <Button variant="secondary" className="w-full bg-white text-[#FF6900] hover:bg-gray-100">
                  Upgrade Plan
                </Button>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Monthly Spend</p>
                  <h3 className="text-3xl font-bold text-foreground">${billing.monthlySpend.toLocaleString()}</h3>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <Card className="p-6 bg-card border-border">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Next Billing Date</p>
                  <p className="text-xl font-bold text-foreground">{billing.nextBilling}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Payment Method</p>
                    <p className="text-xl font-bold text-foreground">{billing.paymentMethod}</p>
                  </div>
                  <Button variant="outline" size="sm" className="border-border">
                    <Edit className="w-4 h-4 mr-2" />
                    Update
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
