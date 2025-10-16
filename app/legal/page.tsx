"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { WebsiteHeader } from '@/components/website/website-header';
import { WebsiteFooter } from '@/components/website/website-footer';
import { 
  Shield, 
  FileText, 
  Building2, 
  Cookie,
  Calendar,
  Mail
} from 'lucide-react';

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState('privacy');

  const legalDocs = [
    {
      id: 'privacy',
      title: 'Privacy Policy',
      icon: Shield,
      lastUpdated: 'December 1, 2024',
      description: 'How we collect, use, and protect your personal information'
    },
    {
      id: 'terms',
      title: 'Terms of Service',
      icon: FileText,
      lastUpdated: 'December 1, 2024',
      description: 'Terms and conditions for using the EmberX platform'
    },
    {
      id: 'business',
      title: 'Business Terms',
      icon: Building2,
      lastUpdated: 'December 1, 2024',
      description: 'Additional terms for business accounts and brand partnerships'
    },
    {
      id: 'cookies',
      title: 'Cookie Policy',
      icon: Cookie,
      lastUpdated: 'December 1, 2024',
      description: 'How we use cookies and similar technologies'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <WebsiteHeader />
      
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Legal Documents
            </h1>
            <p className="text-xl text-muted-foreground">
              Transparency and trust are at the core of everything we do
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {/* Document Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {legalDocs.map((doc) => {
                const Icon = doc.icon;
                return (
                  <Card 
                    key={doc.id}
                    className={`cursor-pointer transition-all hover:shadow-lg bg-card border-border ${
                      activeTab === doc.id ? 'ring-2 ring-primary bg-primary/5' : ''
                    }`}
                    onClick={() => setActiveTab(doc.id)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 ${
                        activeTab === doc.id ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {doc.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        Updated {doc.lastUpdated}
                      </p>
                      <p className="text-xs text-muted-foreground/80">
                        {doc.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Privacy Policy */}
            <TabsContent value="privacy">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Shield className="w-5 h-5 text-primary" />
                    Privacy Policy
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    Last updated: December 1, 2024
                  </div>
                </CardHeader>
                <CardContent className="prose max-w-none text-muted-foreground">
                  <h3 className="text-foreground text-xl font-semibold mb-4">1. Information We Collect</h3>
                  <p className="mb-4">
                    At EmberX, we collect information to provide you with the best location-based rewards experience:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li><strong className="text-foreground">Location Data:</strong> We collect precise location information to show you nearby rewards and enable auto-collection features.</li>
                    <li><strong className="text-foreground">Account Information:</strong> Email, name, and profile details you provide during signup.</li>
                    <li><strong className="text-foreground">Usage Data:</strong> How you interact with the app, rewards collected, and preferences.</li>
                    <li><strong className="text-foreground">Device Information:</strong> Device type, operating system, and app version for compatibility.</li>
                  </ul>

                  <h3 className="text-foreground text-xl font-semibold mb-4">2. How We Use Your Information</h3>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>Provide location-based reward discovery and collection</li>
                    <li>Personalize your experience and recommend relevant rewards</li>
                    <li>Process transactions and manage your EmberX token balance</li>
                    <li>Send notifications about nearby rewards (with your permission)</li>
                    <li>Improve our services and develop new features</li>
                    <li>Ensure platform security and prevent fraud</li>
                  </ul>

                  <h3 className="text-foreground text-xl font-semibold mb-4">3. Information Sharing</h3>
                  <p className="mb-4">
                    We respect your privacy and only share information in limited circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li><strong className="text-foreground">With Partners:</strong> Anonymous, aggregated data to help brands understand campaign performance</li>
                    <li><strong className="text-foreground">Service Providers:</strong> Trusted third parties who help us operate the platform</li>
                    <li><strong className="text-foreground">Legal Requirements:</strong> When required by law or to protect our rights</li>
                    <li><strong className="text-foreground">With Your Consent:</strong> Any other sharing requires your explicit permission</li>
                  </ul>

                  <h3 className="text-foreground text-xl font-semibold mb-4">4. Your Privacy Controls</h3>
                  <p className="mb-4">
                    You have comprehensive control over your privacy:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li><strong className="text-foreground">Location Sharing:</strong> Choose from fully public to completely anonymous profiles</li>
                    <li><strong className="text-foreground">Notifications:</strong> Customize what notifications you receive</li>
                    <li><strong className="text-foreground">Data Access:</strong> Request a copy of your personal data</li>
                    <li><strong className="text-foreground">Data Deletion:</strong> Delete your account and associated data</li>
                    <li><strong className="text-foreground">Brand Opt-out:</strong> Choose which brands can show you rewards</li>
                  </ul>

                  <h3 className="text-foreground text-xl font-semibold mb-4">5. Contact Us</h3>
                  <p>
                    Questions about this Privacy Policy? Contact us at privacy@emberx.com or through the app.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Terms of Service */}
            <TabsContent value="terms">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <FileText className="w-5 h-5 text-primary" />
                    Terms of Service
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    Last updated: December 1, 2024
                  </div>
                </CardHeader>
                <CardContent className="prose max-w-none text-muted-foreground">
                  <h3 className="text-foreground text-xl font-semibold mb-4">1. Acceptance of Terms</h3>
                  <p className="mb-6">
                    By accessing or using EmberX, you agree to be bound by these Terms of Service. If you don't agree, please don't use our platform.
                  </p>

                  <h3 className="text-foreground text-xl font-semibold mb-4">2. Description of Service</h3>
                  <p className="mb-4">
                    EmberX is a location-based rewards platform that connects users with businesses through digital rewards and tokens. Our services include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>Location-based reward discovery</li>
                    <li>Auto-collection of rewards within 8 meters</li>
                    <li>EmberX token earning and redemption</li>
                    <li>Brand-specific token systems</li>
                    <li>Campaign management tools for businesses</li>
                  </ul>

                  <h3 className="text-foreground text-xl font-semibold mb-4">3. User Accounts</h3>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>You must be 13 or older to create an account</li>
                    <li>Provide accurate and complete information</li>
                    <li>Keep your account credentials secure</li>
                    <li>You're responsible for all activities under your account</li>
                    <li>One account per person</li>
                  </ul>

                  <h3 className="text-foreground text-xl font-semibold mb-4">4. EmberX Tokens</h3>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>EmberX tokens have no monetary value outside the platform</li>
                    <li>Tokens cannot be transferred between users</li>
                    <li>We may adjust token values or expiration policies</li>
                    <li>Tokens are forfeited if your account is suspended</li>
                  </ul>

                  <h3 className="text-foreground text-xl font-semibold mb-4">5. Contact Us</h3>
                  <p>
                    Questions about these terms? Contact us at legal@emberx.com.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Business Terms */}
            <TabsContent value="business">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Building2 className="w-5 h-5 text-primary" />
                    Business Terms
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    Last updated: December 1, 2024
                  </div>
                </CardHeader>
                <CardContent className="prose max-w-none text-muted-foreground">
                  <h3 className="text-foreground text-xl font-semibold mb-4">1. Business Account Eligibility</h3>
                  <p className="mb-4">
                    To create a business account, you must:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>Be authorized to represent the business</li>
                    <li>Provide accurate business information</li>
                    <li>Have a legitimate business presence</li>
                    <li>Comply with local laws and regulations</li>
                  </ul>

                  <h3 className="text-foreground text-xl font-semibold mb-4">2. Campaign Management</h3>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>You're responsible for campaign content and compliance</li>
                    <li>Campaigns must follow our content guidelines</li>
                    <li>You cannot create misleading or fraudulent offers</li>
                    <li>We reserve the right to review and approve campaigns</li>
                    <li>Campaign budgets are binding once approved</li>
                  </ul>

                  <h3 className="text-foreground text-xl font-semibold mb-4">3. Fees and Payments</h3>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>Campaign setup fees apply as outlined in your agreement</li>
                    <li>Performance fees are charged based on successful collections</li>
                    <li>Premium features may require additional subscription fees</li>
                    <li>All fees are non-refundable unless specified otherwise</li>
                    <li>Late payments may result in account suspension</li>
                  </ul>

                  <h3 className="text-foreground text-xl font-semibold mb-4">4. Data and Analytics</h3>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>You receive aggregated, anonymized user data</li>
                    <li>Individual user data is not shared without consent</li>
                    <li>You may use analytics data only for your business purposes</li>
                    <li>Data sharing with third parties requires our approval</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Cookie Policy */}
            <TabsContent value="cookies">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Cookie className="w-5 h-5 text-primary" />
                    Cookie Policy
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    Last updated: December 1, 2024
                  </div>
                </CardHeader>
                <CardContent className="prose max-w-none text-muted-foreground">
                  <h3 className="text-foreground text-xl font-semibold mb-4">1. What Are Cookies</h3>
                  <p className="mb-6">
                    Cookies are small text files stored on your device when you visit our website. They help us provide a better experience and understand how you use our platform.
                  </p>

                  <h3 className="text-foreground text-xl font-semibold mb-4">2. Types of Cookies We Use</h3>
                  
                  <h4 className="text-foreground text-lg font-semibold mb-3">Essential Cookies</h4>
                  <p className="mb-3">Required for the platform to function properly:</p>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>Authentication and session management</li>
                    <li>Security and fraud prevention</li>
                    <li>Load balancing and performance</li>
                  </ul>

                  <h4 className="text-foreground text-lg font-semibold mb-3">Analytics Cookies</h4>
                  <p className="mb-3">Help us understand how users interact with our platform:</p>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>Page views and user journeys</li>
                    <li>Feature usage and engagement</li>
                    <li>Error tracking and debugging</li>
                  </ul>

                  <h3 className="text-foreground text-xl font-semibold mb-4">3. Managing Cookies</h3>
                  <p className="mb-4">
                    You can control cookies through:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li><strong className="text-foreground">Browser Settings:</strong> Most browsers allow you to block or delete cookies</li>
                    <li><strong className="text-foreground">App Preferences:</strong> Manage cookie preferences in your account settings</li>
                    <li><strong className="text-foreground">Opt-out Tools:</strong> Use industry opt-out tools for marketing cookies</li>
                  </ul>

                  <h3 className="text-foreground text-xl font-semibold mb-4">4. Contact Information</h3>
                  <p>
                    Questions about our use of cookies? Contact us at privacy@emberx.com.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Contact Section */}
          <Card className="mt-8 bg-card border-border">
            <CardContent className="p-6 text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Have Questions About Our Policies?
              </h3>
              <p className="text-muted-foreground mb-4">
                Our legal team is here to help clarify any questions about our terms, privacy practices, or business policies.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href="mailto:legal@emberx.com"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg transition-colors"
                >
                  Contact Legal Team
                </a>
                <a 
                  href="mailto:privacy@emberx.com"
                  className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-2 rounded-lg transition-colors"
                >
                  Privacy Questions
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <WebsiteFooter />
    </div>
  );
}