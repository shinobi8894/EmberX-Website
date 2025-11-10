"use client"

import { useState } from 'react';
import { WebsiteHeader } from '@/components/website/website-header';
import { WebsiteFooter } from '@/components/website/website-footer';
import { 
  Shield, 
  FileText, 
  Building2, 
  Cookie,
  ArrowRight,
  Check,
  Lock,
  Eye,
  Database
} from 'lucide-react';

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState('privacy');

  const legalDocs = [
    {
      id: 'privacy',
      title: 'Privacy Policy',
      icon: Shield,
      number: '01'
    },
    {
      id: 'terms',
      title: 'Terms of Service',
      icon: FileText,
      number: '02'
    },
    {
      id: 'business',
      title: 'Business Terms',
      icon: Building2,
      number: '03'
    },
    {
      id: 'cookies',
      title: 'Cookie Policy',
      icon: Cookie,
      number: '04'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <WebsiteHeader />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#FF6900]/10 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div className="inline-block bg-[#FF6900]/20 backdrop-blur-sm border border-[#FF6900]/30 rounded-full px-6 py-3 mb-8">
            <span className="text-sm uppercase tracking-wider text-[#FF6900]">Legal Documents</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold leading-[0.9] mb-8 uppercase">
            <span className="block text-white">transparency</span>
            <span className="block text-[#FF6900]">& trust</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-12">
            We believe in complete transparency. Read our policies and understand 
            how we protect your data and privacy.
          </p>

          {/* Scroll Indicator */}
          <div className="animate-bounce mt-16">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2 mx-auto">
              <div className="w-1.5 h-3 bg-white/50 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Document Selector Section */}
      <section className="relative py-20 bg-zinc-950">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {legalDocs.map((doc) => {
              const Icon = doc.icon;
              const isActive = activeTab === doc.id;
              
              return (
                <button
                  key={doc.id}
                  onClick={() => setActiveTab(doc.id)}
                  className={`relative group text-left transition-all duration-300 ${
                    isActive ? 'scale-105' : 'hover:scale-105'
                  }`}
                >
                  <div className={`relative rounded-3xl p-8 overflow-hidden ${
                    isActive 
                      ? 'bg-gradient-to-br from-[#FF6900] to-[#FF3399]' 
                      : 'bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 hover:border-[#FF6900]/50'
                  }`}>
                    {/* Number Background */}
                    <div className={`absolute -top-4 -right-4 text-[120px] font-bold leading-none ${
                      isActive ? 'text-white/10' : 'text-white/5'
                    }`}>
                      {doc.number}
                    </div>
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                        isActive ? 'bg-white/20' : 'bg-[#FF6900]/20'
                      }`}>
                        <Icon className={`w-8 h-8 ${isActive ? 'text-white' : 'text-[#FF6900]'}`} />
                      </div>
                      
                      <h3 className={`text-2xl font-bold mb-2 ${isActive ? 'text-white' : 'text-white'}`}>
                        {doc.title}
                      </h3>
                      
                      <div className={`text-sm ${isActive ? 'text-white/80' : 'text-zinc-400'}`}>
                        Click to view details
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Privacy Policy */}
          {activeTab === 'privacy' && (
            <div className="animate-fadeIn">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF6900] to-[#FF3399] rounded-2xl flex items-center justify-center">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h2 className="text-5xl font-bold text-white">Privacy Policy</h2>
                  <p className="text-zinc-400 mt-2">Last updated: December 1, 2024</p>
                </div>
              </div>

              <div className="space-y-12">
                {/* Information We Collect */}
                <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 hover:border-[#FF6900]/30 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#FF6900]/20 rounded-xl flex items-center justify-center">
                      <Database className="w-8 h-8 text-[#FF6900]" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Information We Collect</h3>
                  </div>
                  <p className="text-zinc-300 text-lg mb-6">
                    At EmberX, we collect information to provide you with the best location-based rewards experience.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: 'Location Data', desc: 'Precise location to show nearby rewards and enable auto-collection' },
                      { title: 'Account Information', desc: 'Email, name, and profile details you provide during signup' },
                      { title: 'Usage Data', desc: 'How you interact with the app and rewards collected' },
                      { title: 'Device Information', desc: 'Device type, OS, and app version for compatibility' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-zinc-900/50 rounded-xl p-4">
                        <div className="w-6 h-6 bg-[#FF6900] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                          <p className="text-zinc-400 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Privacy Controls */}
                <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 hover:border-[#FF6900]/30 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#FF6900]/20 rounded-xl flex items-center justify-center">
                      <Lock className="w-8 h-8 text-[#FF6900]" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Privacy Controls</h3>
                  </div>
                  <p className="text-zinc-300 text-lg mb-6">
                    You have comprehensive control over your privacy settings.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Location sharing levels',
                      'Notification preferences',
                      'Data access requests',
                      'Account deletion',
                      'Brand opt-out controls',
                      'Profile visibility'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-zinc-900/50 rounded-xl p-4">
                        <Check className="w-5 h-5 text-[#FF6900] flex-shrink-0" />
                        <span className="text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Data Security */}
                <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 hover:border-[#FF6900]/30 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-[#FF6900]/20 rounded-xl flex items-center justify-center">
                      <Eye className="w-8 h-8 text-[#FF6900]" />
                    </div>
                    <h3 className="text-3xl font-bold text-white">Data Security</h3>
                  </div>
                  <p className="text-zinc-300 text-lg mb-6">
                    We use industry-standard security measures to protect your information including 
                    end-to-end encryption, regular security audits, and secure cloud infrastructure with 99.9% uptime.
                  </p>
                  <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                      {[
                        { value: '256-bit', label: 'Encryption' },
                        { value: '99.9%', label: 'Uptime' },
                        { value: '24/7', label: 'Monitoring' }
                      ].map((stat, idx) => (
                        <div key={idx}>
                          <div className="text-4xl font-bold text-[#FF6900] mb-2">{stat.value}</div>
                          <div className="text-zinc-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Terms of Service */}
          {activeTab === 'terms' && (
            <div className="animate-fadeIn">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF6900] to-[#FF3399] rounded-2xl flex items-center justify-center">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h2 className="text-5xl font-bold text-white">Terms of Service</h2>
                  <p className="text-zinc-400 mt-2">Last updated: December 1, 2024</p>
                </div>
              </div>

              <div className="space-y-12">
                {[
                  {
                    title: 'Acceptance of Terms',
                    content: 'By accessing or using EmberX, you agree to be bound by these Terms of Service. If you don\'t agree, please don\'t use our platform.'
                  },
                  {
                    title: 'User Accounts',
                    items: [
                      'You must be 13 or older to create an account',
                      'Provide accurate and complete information',
                      'Keep your account credentials secure',
                      'One account per person'
                    ]
                  },
                  {
                    title: 'EmberX Tokens',
                    items: [
                      'Tokens have no monetary value outside the platform',
                      'Tokens cannot be transferred between users',
                      'We may adjust token values or expiration policies'
                    ]
                  }
                ].map((section, idx) => (
                  <div key={idx} className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 hover:border-[#FF6900]/30 transition-colors">
                    <h3 className="text-3xl font-bold text-white mb-6">{section.title}</h3>
                    {section.content && <p className="text-zinc-300 text-lg">{section.content}</p>}
                    {section.items && (
                      <div className="space-y-3 mt-4">
                        {section.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#FF6900] flex-shrink-0 mt-1" />
                            <span className="text-zinc-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Business Terms */}
          {activeTab === 'business' && (
            <div className="animate-fadeIn">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF6900] to-[#FF3399] rounded-2xl flex items-center justify-center">
                  <Building2 className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h2 className="text-5xl font-bold text-white">Business Terms</h2>
                  <p className="text-zinc-400 mt-2">Last updated: December 1, 2024</p>
                </div>
              </div>

              <div className="space-y-12">
                {[
                  {
                    title: 'Eligibility',
                    items: [
                      'Be authorized to represent the business',
                      'Provide accurate business information',
                      'Have a legitimate business presence'
                    ]
                  },
                  {
                    title: 'Campaign Management',
                    items: [
                      'Responsible for campaign content and compliance',
                      'Campaigns must follow content guidelines',
                      'Cannot create misleading offers'
                    ]
                  },
                  {
                    title: 'Fees & Payments',
                    items: [
                      'Setup fees as outlined in your agreement',
                      'Performance fees based on collections',
                      'All fees are non-refundable'
                    ]
                  }
                ].map((section, idx) => (
                  <div key={idx} className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8">
                    <h3 className="text-3xl font-bold text-white mb-6">{section.title}</h3>
                    <div className="space-y-3">
                      {section.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#FF6900] flex-shrink-0 mt-1" />
                          <span className="text-zinc-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cookie Policy */}
          {activeTab === 'cookies' && (
            <div className="animate-fadeIn">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF6900] to-[#FF3399] rounded-2xl flex items-center justify-center">
                  <Cookie className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h2 className="text-5xl font-bold text-white">Cookie Policy</h2>
                  <p className="text-zinc-400 mt-2">Last updated: December 1, 2024</p>
                </div>
              </div>

              <div className="space-y-12">
                <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8">
                  <h3 className="text-3xl font-bold text-white mb-6">What Are Cookies</h3>
                  <p className="text-zinc-300 text-lg">
                    Cookies are small text files stored on your device to help us provide a better experience and understand how you use our platform.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: 'Essential Cookies',
                      desc: 'Required for platform functionality',
                      examples: ['Authentication', 'Security', 'Performance']
                    },
                    {
                      title: 'Analytics Cookies',
                      desc: 'Help us understand usage',
                      examples: ['Page views', 'Feature usage', 'Error tracking']
                    },
                    {
                      title: 'Preference Cookies',
                      desc: 'Remember your settings',
                      examples: ['Theme', 'Language', 'Notifications']
                    },
                    {
                      title: 'Marketing Cookies',
                      desc: 'Personalized content',
                      examples: ['Recommendations', 'Campaigns', 'Integrations']
                    }
                  ].map((type, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-6 hover:border-[#FF6900]/30 transition-colors">
                      <h4 className="text-xl font-bold text-white mb-2">{type.title}</h4>
                      <p className="text-zinc-400 mb-4">{type.desc}</p>
                      <div className="space-y-2">
                        {type.examples.map((ex, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#FF6900] rounded-full" />
                            <span className="text-zinc-300 text-sm">{ex}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-32 bg-gradient-to-br from-[#FF6900] to-[#FF3399]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 uppercase text-white">
            Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Our legal team is here to help clarify any questions about our policies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center bg-white text-[#FF6900] hover:bg-zinc-100 px-10 h-14 rounded-full font-semibold transition-colors shadow-lg group">
              Contact Legal Team
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#FF6900] px-10 h-14 rounded-full font-semibold transition-colors">
              Privacy Questions
            </button>
          </div>
        </div>
      </section>

      <WebsiteFooter />
    </div>
  );
}
