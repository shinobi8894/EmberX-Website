"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { WebsiteHeader } from '@/components/website/website-header';
import { WebsiteFooter } from '@/components/website/website-footer';
import {
  Target,
  Users,
  Shield,
  Zap,
  Award,
  ArrowRight,
  MapPin,
  Heart,
  Sparkles,
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "Creating meaningful connections between businesses and customers through innovative technology.",
    },
    {
      icon: Users,
      title: "User-Centric",
      description:
        "Every feature is designed with our users' needs and privacy at the forefront.",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description:
        "Your data belongs to you. We provide comprehensive privacy controls and transparency.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Pushing boundaries with location-based technology and reward systems.",
    },
  ];

  const features = [
    "Location-based reward discovery",
    "Auto-collection within 8 meters",
    "Brand-specific token systems",
    "Real-time campaign tracking",
  ];

  return (
    <div className="overflow-hidden bg-white dark:bg-zinc-950">
      <WebsiteHeader />
      
      {/* Hero Section - Full Screen with Background Image */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611416370495-50fac9e1b382?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbmlnaHQlMjB1cmJhbnxlbnwxfHx8fDE3NjIzOTg3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="City night"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="inline-flex items-center gap-2 bg-[#FF6900]/20 backdrop-blur-sm border border-[#FF6900]/30 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-4 h-4 text-[#FF6900]" />
              <span className="text-sm uppercase tracking-wider text-white/90">
                About EmberX
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold leading-[0.9] mb-8 uppercase max-w-5xl text-white">
              <span className="block">redefining</span>
              <span className="block text-[#FF6900]">
                rewards
              </span>
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl text-white/80 max-w-3xl leading-relaxed mb-12">
              We're building the future of location-based
              experiences, connecting millions of people with
              brands they love through innovative technology
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl">
              {[
                { number: "1M+", label: "Active Users" },
                { number: "50K+", label: "Partner Brands" },
                { number: "500+", label: "Cities Worldwide" },
                {
                  number: "$10M+",
                  label: "Rewards Distributed",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-[#FF6900] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/70 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Mobile App Showcase Section */}
      <section className="relative py-32 bg-zinc-100 dark:bg-zinc-950">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mobile Mockup */}
            <div className="relative">
              <div className="relative max-w-md mx-auto">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-[#FF6900]/20 blur-[100px] rounded-full" />

                {/* Phone Frame */}
                <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[3rem] p-3 shadow-2xl border border-zinc-800">
                  <div className="bg-black rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                    {/* Status Bar */}
                    <div className="bg-zinc-900 px-6 py-3 flex items-center justify-between">
                      <span className="text-white text-xs">
                        9:41
                      </span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4 bg-white/20 rounded-sm" />
                        <div className="w-4 h-4 bg-white/20 rounded-sm" />
                        <div className="w-4 h-4 bg-white/20 rounded-sm" />
                      </div>
                    </div>

                    {/* App Content Preview */}
                    <div className="relative h-full bg-gradient-to-b from-zinc-900 to-black p-6">
                      {/* Map Preview */}
                      <div className="bg-zinc-800 rounded-2xl h-48 mb-4 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6900]/20 to-transparent" />
                        <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-full p-3">
                          <MapPin className="w-5 h-5 text-[#FF6900]" />
                        </div>
                      </div>

                      {/* Reward Card */}
                      <div className="bg-gradient-to-br from-[#FF6900] to-[#FF3399] rounded-2xl p-4 shadow-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-white/20 rounded-full" />
                          <div>
                            <div className="h-3 w-20 bg-white/30 rounded mb-1" />
                            <div className="h-2 w-16 bg-white/20 rounded" />
                          </div>
                        </div>
                        <div className="h-6 w-32 bg-white/40 rounded-lg mt-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-block bg-[#FF6900] text-white px-4 py-2 rounded-lg mb-6 uppercase tracking-wider text-sm">
                The Experience
              </div>

              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] mb-8 uppercase">
                <span className="block text-zinc-900 dark:text-white">
                  discover
                </span>
                <span className="block text-zinc-900 dark:text-white">
                  rewards
                </span>
                <span className="block text-[#FF6900]">
                  everywhere
                </span>
              </h2>

              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                EmberX transforms how you interact with brands.
                Our mobile app uses advanced location technology
                to show you rewards within walking distance,
                making every step potentially rewarding.
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-[#FF6900] rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-zinc-700 dark:text-white/80">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/coming-soon">
                <Button
                  size="lg"
                  className="bg-[#FF6900] hover:bg-[#E55A00] text-white px-10 h-14 rounded-full shadow-lg group"
                >
                  Download Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-32 bg-white dark:bg-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-bold mb-6 uppercase leading-tight">
              <span className="block text-zinc-900 dark:text-white">
                our
              </span>
              <span className="block text-[#FF6900]">
                values
              </span>
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-900 dark:to-black border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 h-full hover:border-[#FF6900]/50 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FF6900] to-[#FF8533] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjIzNjUzMjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#FF6900] text-white px-4 py-2 rounded-lg mb-6 uppercase tracking-wider text-sm">
              Our Mission
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] mb-10 uppercase text-white">
              <span className="block">bringing</span>
              <span className="block">communities</span>
              <span className="block text-[#FF6900]">
                together
              </span>
            </h2>

            <div className="space-y-6 text-xl text-white/80 leading-relaxed mb-12">
              <p>
                To create a world where discovering and
                supporting local businesses is effortless,
                rewarding, and meaningful. We believe that
                technology should bring people closer to their
                communities, not further apart.
              </p>
              <p>
                Through EmberX, we're building bridges between
                businesses and customers, creating win-win
                relationships that benefit entire communities.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-[#FF6900] hover:bg-[#E55A00] text-white px-10 h-14 rounded-full shadow-lg group"
                >
                  Join Our Mission
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative py-32 bg-zinc-100 dark:bg-zinc-950">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-bold mb-6 uppercase leading-tight">
              <span className="block text-zinc-900 dark:text-white">
                our
              </span>
              <span className="block text-[#FF6900]">
                journey
              </span>
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Building the future, one milestone at a time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                year: "2023",
                title: "Founded",
                desc: "EmberX was born",
                stat: "Day 1",
              },
              {
                year: "2024",
                title: "Global Launch",
                desc: "500+ cities worldwide",
                stat: "500+",
              },
              {
                year: "2024",
                title: "Growth",
                desc: "First million users",
                stat: "1M+",
              },
              {
                year: "2025",
                title: "Impact",
                desc: "Rewards distributed",
                stat: "$10M+",
              },
            ].map((milestone, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-900 dark:to-black border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 h-full hover:border-[#FF6900]/50 transition-all duration-300">
                  <div className="text-6xl font-bold text-[#FF6900] mb-4 opacity-20 group-hover:opacity-100 transition-opacity">
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                    {milestone.desc}
                  </p>
                  <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="text-4xl font-bold text-zinc-900 dark:text-white">
                      {milestone.stat}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519662978799-2f05096d3636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYyMzg4NDk2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Modern architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#FF6900]/20 backdrop-blur-sm border border-[#FF6900]/30 rounded-full px-6 py-3 mb-8">
            <Heart className="w-4 h-4 text-[#FF6900]" />
            <span className="text-sm uppercase tracking-wider text-white/90">
              Join Us
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] mb-8 uppercase">
            <span className="block text-white">
              ready to be
            </span>
            <span className="block text-[#FF6900]">
              part of the future?
            </span>
          </h2>

          <p className="text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
            Join millions of users and thousands of brands
            building the future of location-based rewards
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-[#FF6900] hover:bg-[#E55A00] text-white px-12 h-16 rounded-full shadow-lg group"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-12 h-16 rounded-full"
            >
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      <WebsiteFooter />
    </div>
  );
}
