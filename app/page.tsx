"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { WebsiteHeader } from '@/components/website/website-header';
import { WebsiteFooter } from '@/components/website/website-footer';
import {
  MapPin,
  Smartphone,
  Store,
  Users,
  TrendingUp,
  Star,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Target,
  Navigation,
  Award,
  Bell
} from 'lucide-react';

export default function HomePage() {
  const faqData = [
    {
      question: "How does EmberX work?",
      answer: "EmberX uses your location to automatically discover rewards from nearby brands. Simply walk around your city, and when you get within 8 meters of a reward, it is automatically collected to your wallet."
    },
    {
      question: "Is EmberX free to use?",
      answer: "Yes! EmberX is completely free for users. We make money by charging brands for campaign placements, allowing us to offer the service at no cost to you."
    },
    {
      question: "How do I redeem my rewards?",
      answer: "Simply open your wallet, select the reward you want to use, and show the QR code to the brand partner at checkout. It is that easy!"
    },
    {
      question: "What about my privacy?",
      answer: "Privacy is our top priority. You have complete control over your data with multiple privacy levels - from public leaderboard participation to completely anonymous mode. Your location is never shared with brands without your explicit permission."
    },
    {
      question: "Can I choose which brands I see?",
      answer: "Absolutely! EmberX offers brand opt-out functionality, allowing you to customize which brands appear in your feed. You are in complete control of your experience."
    },
    {
      question: "How far can I filter rewards?",
      answer: "Our advanced filtering system lets you search for rewards from 500 meters up to 200 miles away, giving you flexibility whether you are exploring your neighborhood or planning trips across the city."
    }
  ];

  const features = [
    {
      number: '01',
      icon: MapPin,
      title: 'Location Intelligence',
      description: 'Advanced filtering from 500m to 200 miles. Find exactly what you need, when you need it.'
    },
    {
      number: '02',
      icon: Zap,
      title: 'Auto-Collect',
      description: 'Zero-friction rewards. Get within 8 meters and rewards are yours automatically.'
    },
    {
      number: '03',
      icon: Shield,
      title: 'Privacy Control',
      description: 'From leaderboards to complete anonymity. Total control over your data.'
    },
    {
      number: '04',
      icon: Clock,
      title: 'Smart Timers',
      description: 'AI-powered prioritization ensures you never miss high-value opportunities.'
    }
  ];

  const businessFeatures = [
    {
      number: '01',
      title: 'Real-time Analytics',
      description: 'Track performance metrics as they happen',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'Audience Targeting',
      description: 'Reach users based on location and behavior',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      title: 'Campaign Manager',
      description: 'Deploy, monitor, and optimize campaigns',
      color: 'from-orange-500 to-red-500'
    },
    {
      number: '04',
      title: 'ROI Tracking',
      description: 'Measure every dollar spent and earned',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="bg-white dark:bg-zinc-950 overflow-hidden">
      <WebsiteHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 pb-20 bg-white dark:bg-zinc-950 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left: Bold Typography */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h1 className="text-[5rem] sm:text-[6rem] lg:text-[8rem] font-bold leading-[0.9] tracking-tight uppercase">
                  <span className="block text-zinc-900 dark:text-white">discover</span>
                  <span className="block text-[#FF6900]">rewards</span>
                </h1>
              </div>

              <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed">
                Location-based rewards that find you. Collect automatically, earn effortlessly, redeem instantly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="bg-[#FF6900] hover:bg-[#E55A00] text-white px-10 h-14 rounded-full shadow-lg group"
                  >
                    Start earning now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 px-10 h-14 rounded-full"
                >
                  How it works
                </Button>
              </div>

              {/* Mini Stats */}
              <div className="flex items-center gap-8 pt-8">
                <div>
                  <div className="text-3xl font-bold text-zinc-900 dark:text-white">1M+</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">Users</div>
                </div>
                <div className="w-px h-12 bg-zinc-200 dark:bg-zinc-800" />
                <div>
                  <div className="text-3xl font-bold text-zinc-900 dark:text-white">50K+</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">Brands</div>
                </div>
                <div className="w-px h-12 bg-zinc-200 dark:bg-zinc-800" />
                <div>
                  <div className="text-3xl font-bold text-[#FF6900]">$10M+</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">Rewards</div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1575655273633-6ac40769c587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBob2xkaW5nJTIwc21hcnRwaG9uZSUyMGNpdHl8ZW58MXx8fHwxNzYyNDM1NTgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Person using EmberX app"
                  className="w-full h-[600px] lg:h-[700px] object-cover"
                />
                {/* Floating Badge */}
                <div className="absolute top-8 right-8 bg-white dark:bg-zinc-900 rounded-2xl px-6 py-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF6900] to-[#FF8533] rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500 dark:text-zinc-400">Auto-collect in</div>
                      <div className="text-xl font-bold text-zinc-900 dark:text-white">8 meters</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bold Statement Section */}
      <section className="relative py-32 bg-zinc-900 dark:bg-zinc-950 text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <div className="w-2 h-2 bg-[#FF6900] rounded-full animate-pulse" />
              <span className="text-sm font-medium">Live now</span>
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              We believe the best way to earn rewards is to{' '}
              <span className="text-zinc-400">stop searching</span>{' '}
              and{' '}
              <span className="text-[#FF6900]">start discovering</span>
            </h2>

            <p className="text-xl sm:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
              EmberX uses your location to surface relevant rewards automatically.
              No more hunting through apps or scanning codes. Just walk, collect, and enjoy.
            </p>
          </div>
        </div>
      </section>

      {/* Features - Numbered Grid */}
      <section className="relative py-32 bg-zinc-950 dark:bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#FF6900]/20 via-transparent to-transparent" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <h2 className="text-5xl lg:text-7xl font-bold mb-4 uppercase leading-tight">
              <span className="block">who our</span>
              <span className="block text-[#FF6900]">services</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl">
              Everything you need to discover and collect rewards effortlessly
            </p>
          </div>

          {/* All 6 features in one consistent grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...features,
            {
              number: '05',
              icon: Bell,
              title: 'Smart Notifications',
              description: 'Multi-level alerts keep you informed without overwhelming you.'
            },
            {
              number: '06',
              icon: Target,
              title: 'Brand Opt-Out',
              description: 'Complete control over which brands appear in your feed.'
            }
            ].map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="relative group"
                >
                  {/* Numbered Card with gradient background */}
                  <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-[#FF6900]/50 transition-all duration-300 h-full overflow-hidden">
                    {/* Large Number Background */}
                    <div className="absolute -top-8 -right-6 text-[140px] font-bold text-white/5 leading-none">
                      {feature.number}
                    </div>
                    {/* Hover indicator - top right arrow */}
                    <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-[#FF6900]/20 flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-[#FF6900] -rotate-45" />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="relative z-10 space-y-4">
                      {/* Number Badge */}
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#FF6900] to-[#FF8533] rounded-2xl group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>


                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 bg-zinc-950 dark:bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#FF6900]/20 via-transparent to-transparent" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-left mb-16">
            <h2 className="text-5xl lg:text-7xl font-bold mb-4 uppercase leading-tight">
              <span className="block">data that</span>
              <span className="block">proves</span>
              <span className="block text-[#FF6900]">our impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '1M+', label: 'Active Users', sublabel: 'Growing daily' },
              { number: '50K+', label: 'Partner Brands', sublabel: 'Worldwide' },
              { number: '$10M+', label: 'Rewards Earned', sublabel: 'And counting' },
              { number: '95%', label: 'User Satisfaction', sublabel: 'Rated 4.9/5' }
            ].map((stat, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-white text-zinc-900 rounded-3xl p-8 hover:scale-105 transition-all duration-300 h-full">
                  <div className="space-y-3">
                    <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-br from-[#FF6900] to-[#FF8533] bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div>
                      <div className="text-xl font-bold mb-1">
                        {stat.label}
                      </div>
                      <div className="text-sm text-zinc-600">
                        {stat.sublabel}
                      </div>
                    </div>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-[#FF6900]/10 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase - Clean Professional Design */}
      <section className="relative py-32 bg-white dark:bg-zinc-950 overflow-hidden">
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-20">
            <div className="max-w-3xl">
              <h2 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 uppercase">
                <span className="block text-zinc-900 dark:text-white">creatives that</span>
                <span className="block text-[#FF6900]">work for you</span>
              </h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Your personal reward engine that learns what you love and surfaces opportunities automatically.
              </p>
            </div>
          </div>

          {/* Clean Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 - White card with stats */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">Distance Filtering</div>
                  <div className="text-5xl font-bold text-zinc-900 dark:text-white mb-2">500m</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">to 200 miles range</div>
                </div>
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="text-3xl font-bold text-[#FF6900] mb-1">95%</div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">Location accuracy</div>
                </div>
              </div>
            </div>

            {/* Card 2 - Gradient card */}
            <div className="bg-gradient-to-br from-[#FF6900] to-[#FF3399] rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow text-white">
              <div className="flex items-start justify-between mb-6">
                <div className="text-6xl font-bold">01</div>
                <Zap className="w-8 h-8 opacity-80" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Auto-Collect Technology</h3>
              <p className="text-white/90">Rewards automatically collected within 8 meters. Zero friction, maximum convenience.</p>
            </div>

            {/* Card 3 - White card with icon */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-zinc-900 dark:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">Privacy First</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Complete control over your data with multiple privacy levels.</p>
            </div>

            {/* Card 4 - White card with metrics */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">Active Users</div>
              <div className="text-6xl font-bold text-[#FF6900] mb-4">1M+</div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <div>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white">50K+</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">Brands</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white">$10M+</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">Rewards</div>
                </div>
              </div>
            </div>

            {/* Card 5 - White card with icon */}
            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-6">
                <Bell className="w-7 h-7 text-zinc-900 dark:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">Smart Notifications</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Multi-level alerts keep you informed without overwhelming.</p>
            </div>

            {/* Card 6 - Gradient card */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow text-white">
              <div className="flex items-start justify-between mb-6">
                <div className="text-6xl font-bold">02</div>
                <Target className="w-8 h-8 opacity-80" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Brand Control</h3>
              <p className="text-white/90">Choose which brands appear in your feed with opt-out functionality.</p>
            </div>
          </div>

          {/* Large Feature Image */}
          <div className="mt-6 relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px] group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB1c2luZyUyMHBob25lJTIwY2l0eXxlbnwxfHx8fDE3NjI0MzYxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="EmberX in action"
              className="w-full h-full object-cover"
            />

            {/* Overlay Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
              <div className="p-8 lg:p-12 w-full">
                <div className="max-w-2xl">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Experience rewards like never before</h3>
                  <p className="text-lg text-white/90 mb-6">Join millions of users discovering and collecting rewards effortlessly.</p>
                  <div className="flex items-center gap-8">
                    <div>
                      <div className="text-3xl font-bold text-[#FF6900]">$250K+</div>
                      <div className="text-sm text-white/70">Claimed Today</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#FF6900]">8m</div>
                      <div className="text-sm text-white/70">Auto-collect Range</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#FF6900]">24/7</div>
                      <div className="text-sm text-white/70">Always Active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section - Dark with Numbered Features */}
      <section className="relative py-32 bg-zinc-900 dark:bg-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#FF6900]/10 via-transparent to-transparent" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <Store className="w-4 h-4 text-[#FF6900]" />
                <span className="text-sm font-semibold">Brand Console</span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 uppercase">
                <span className="block">our work</span>
                <span className="block text-[#FF6900]">speaks for us</span>
              </h2>

              <p className="text-xl text-zinc-300 leading-relaxed mb-8">
                Deploy campaigns, track performance, and drive measurable results.
                The platform trusted by 50,000+ brands worldwide.
              </p>

              <Link href="/brand">
                <Button
                  size="lg"
                  className="bg-[#FF6900] hover:bg-[#E55A00] text-white px-8 h-14 rounded-full shadow-lg"
                >
                  Access Console
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjIxNjUyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Brand Console Dashboard"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Business Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {businessFeatures.map((feature, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                  {/* Number with gradient */}
                  <div className={`text-7xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent mb-4`}>
                    {feature.number}
                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 text-lg">
                    {feature.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-[#FF6900]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-32 bg-zinc-950 dark:bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF6900]/20 via-transparent to-transparent" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <h2 className="text-5xl lg:text-7xl font-bold mb-6 uppercase leading-tight">
              <span className="block">the team behind</span>
              <span className="block text-[#FF6900]">your success</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                name: "Sarah Chen",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop"
              },
              {
                name: "Mike Rodriguez",
                role: "CTO",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop"
              },
              {
                name: "Emily Johnson",
                role: "Head of Design",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop"
              },
              {
                name: "David Kim",
                role: "Head of Growth",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop"
              }
            ].map((member, index) => (
              <div key={index} className="group relative">
                {/* Image container with gradient overlay */}
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Pink accent card that appears on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-gradient-to-br from-[#FF6900] to-[#FF3399] rounded-xl p-4">
                      <div className="font-bold text-lg mb-1">{member.name}</div>
                      <div className="text-sm text-white/80">{member.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats bar below team */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-white/10">
            {[
              { number: '50+', label: 'Team Members' },
              { number: '10+', label: 'Countries' },
              { number: '5yrs', label: 'Experience' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#FF6900] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-zinc-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Full Width with Dramatic Design */}
      <section className="relative py-32 bg-white dark:bg-zinc-950">

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Dramatic Header */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-6xl sm:text-7xl lg:text-9xl font-bold mb-8 uppercase leading-[0.9]">
                <span className="block text-zinc-900 dark:text-white">common</span>
                <span className="block text-[#FF6900]">questions</span>
              </h2>
              <p className="text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                Everything you need to know about EmberX
              </p>
            </div>
          </div>

          {/* Full Width Accordion */}
          <div className="max-w-full">
            <Accordion type="single" collapsible className="space-y-0 border-t border-zinc-200 dark:border-zinc-800">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-8 px-8 group">
                    <div className="flex items-center gap-6 w-full">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#FF6900]/10 flex items-center justify-center group-hover:bg-[#FF6900] transition-colors">
                        <span className="text-lg font-bold text-[#FF6900] group-hover:text-white transition-colors">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <span className="text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white pr-8">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-600 dark:text-zinc-400 pb-8 px-8 pl-[7rem] text-lg leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

      </section>

      {/* Final CTA - Creative Typography */}
      <section className="relative py-32 bg-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#FF6900]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#FF6900]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-8 uppercase">
              <span className="block">ready to</span>
              <span className="block text-[#FF6900]">get started?</span>
            </h2>

            <p className="text-2xl text-zinc-300 mb-12 max-w-2xl">
              Join over 1 million users earning rewards effortlessly
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-[#FF6900] hover:bg-[#E55A00] text-white px-10 h-14 rounded-full shadow-xl group"
                >
                  Get started free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-zinc-900 px-10 h-14 rounded-full"
              >
                Schedule a demo
              </Button>
            </div>

            <div className="flex items-center gap-12 mt-12">
              <div>
                <div className="text-4xl font-bold text-[#FF6900] mb-1">1M+</div>
                <div className="text-sm text-zinc-400">Active users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#FF6900] mb-1">50K+</div>
                <div className="text-sm text-zinc-400">Partner brands</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#FF6900] mb-1">$10M+</div>
                <div className="text-sm text-zinc-400">Rewards distributed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WebsiteFooter />
    </div>
  );
}