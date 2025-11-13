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
import { 
  HOME_HERO, 
  HOME_FEATURES, 
  HOME_FAQ, 
  BUSINESS_FEATURES,
  HOME_STATEMENT,
  HOME_FEATURES_SECTION,
  HOME_STATS_SECTION,
  HOME_PRODUCT_SHOWCASE,
  HOME_BUSINESS_SECTION,
  HOME_TEAM_SECTION,
  HOME_FAQ_SECTION,
  HOME_FINAL_CTA,
} from '@/constants';

export default function HomePage() {
  const faqData = HOME_FAQ;

  const features = HOME_FEATURES;

  const businessFeatures = BUSINESS_FEATURES;

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
                  <span className="block text-zinc-900 dark:text-white">{HOME_HERO.titleLine1}</span>
                  <span className="block text-[#FF6900]">{HOME_HERO.titleLine2}</span>
                </h1>
              </div>

              <p className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed">
                {HOME_HERO.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="bg-[#FF6900] hover:bg-[#E55A00] text-white px-10 h-14 rounded-full shadow-lg group"
                  >
                    {HOME_HERO.cta.primary}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 px-10 h-14 rounded-full"
                >
                  {HOME_HERO.cta.secondary}
                </Button>
              </div>

              {/* Mini Stats */}
              <div className="flex items-center gap-8 pt-8">
                {HOME_HERO.stats.map((stat, index) => (
                  <>
                    {index > 0 && <div key={`divider-${index}`} className="w-px h-12 bg-zinc-200 dark:bg-zinc-800" />}
                    <div key={stat.label}>
                      <div className="text-3xl font-bold text-zinc-900 dark:text-white">{stat.value}</div>
                      <div className="text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</div>
                    </div>
                  </>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={HOME_HERO.image.src}
                  alt={HOME_HERO.image.alt}
                  className="w-full h-[600px] lg:h-[700px] object-cover"
                />
                {/* Floating Badge */}
                <div className="absolute top-8 right-8 bg-white dark:bg-zinc-900 rounded-2xl px-6 py-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FF6900] to-[#FF8533] rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500 dark:text-zinc-400">{HOME_HERO.floatingBadge.label}</div>
                      <div className="text-xl font-bold text-zinc-900 dark:text-white">{HOME_HERO.floatingBadge.value}</div>
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
              <span className="text-sm font-medium">{HOME_STATEMENT.badge}</span>
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              {HOME_STATEMENT.title.line1}{' '}
              <span className="text-zinc-400">{HOME_STATEMENT.title.line2}</span>{' '}
              {HOME_STATEMENT.title.line3}{' '}
              <span className="text-[#FF6900]">{HOME_STATEMENT.title.line4}</span>
            </h2>

            <p className="text-xl sm:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
              {HOME_STATEMENT.subtitle}
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
              <span className="block">{HOME_FEATURES_SECTION.title.line1}</span>
              <span className="block text-[#FF6900]">{HOME_FEATURES_SECTION.title.line2}</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl">
              {HOME_FEATURES_SECTION.subtitle}
            </p>
          </div>

          {/* All 6 features in one consistent grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...features].map((feature, index) => {
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
              <span className="block">{HOME_STATS_SECTION.title.line1}</span>
              <span className="block">{HOME_STATS_SECTION.title.line2}</span>
              <span className="block text-[#FF6900]">{HOME_STATS_SECTION.title.line3}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOME_STATS_SECTION.stats.map((stat, index) => (
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
                <span className="block text-zinc-900 dark:text-white">{HOME_PRODUCT_SHOWCASE.title.line1}</span>
                <span className="block text-[#FF6900]">{HOME_PRODUCT_SHOWCASE.title.line2}</span>
              </h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {HOME_PRODUCT_SHOWCASE.subtitle}
              </p>
            </div>
          </div>

          {/* How It Works - Step by Step Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOME_PRODUCT_SHOWCASE.cards.map((card, index) => (
              <div key={index} className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-zinc-200 dark:border-zinc-800">
                <div className="mb-6">
                  <div className="text-7xl font-bold text-[#FF6900]">{card.number}</div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white">{card.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>

          {/* Large Feature Image */}
          <div className="mt-6 relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px] group">
            <ImageWithFallback
              src={HOME_PRODUCT_SHOWCASE.largeFeature.image.src}
              alt={HOME_PRODUCT_SHOWCASE.largeFeature.image.alt}
              className="w-full h-full object-cover"
            />

            {/* Overlay Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
              <div className="p-8 lg:p-12 w-full">
                <div className="max-w-2xl">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">{HOME_PRODUCT_SHOWCASE.largeFeature.title}</h3>
                  <p className="text-lg text-white/90 mb-6">{HOME_PRODUCT_SHOWCASE.largeFeature.subtitle}</p>
                  <div className="flex items-center gap-8">
                    {HOME_PRODUCT_SHOWCASE.largeFeature.stats.map((stat, index) => (
                      <div key={index}>
                        <div className="text-3xl font-bold text-[#FF6900]">{stat.value}</div>
                        <div className="text-sm text-white/70">{stat.label}</div>
                      </div>
                    ))}
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
                <span className="text-sm font-semibold">{HOME_BUSINESS_SECTION.badge}</span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 uppercase">
                <span className="block">{HOME_BUSINESS_SECTION.title.line1}</span>
                <span className="block text-[#FF6900]">{HOME_BUSINESS_SECTION.title.line2}</span>
              </h2>

              <p className="text-xl text-zinc-300 leading-relaxed mb-8">
                {HOME_BUSINESS_SECTION.subtitle}
              </p>

              <Link href={HOME_BUSINESS_SECTION.ctaLink}>
                <Button
                  size="lg"
                  className="bg-[#FF6900] hover:bg-[#E55A00] text-white px-8 h-14 rounded-full shadow-lg"
                >
                  {HOME_BUSINESS_SECTION.ctaText}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={HOME_BUSINESS_SECTION.image.src}
                alt={HOME_BUSINESS_SECTION.image.alt}
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Business Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {businessFeatures.map((feature, index) => {
              // Define gradient classes for each number
              const gradientClasses = [
                'bg-gradient-to-r from-blue-500 to-cyan-500',
                'bg-gradient-to-r from-purple-500 to-pink-500',
                'bg-gradient-to-r from-orange-500 to-red-500',
                'bg-gradient-to-r from-green-500 to-emerald-500',
                'bg-gradient-to-r from-yellow-500 to-amber-500',
                'bg-gradient-to-r from-red-500 to-rose-500',
              ];

              return (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                    {/* Number with gradient */}
                    <div className={`text-7xl font-bold ${gradientClasses[index]} bg-clip-text text-transparent mb-4`}>
                      {feature.number}
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-white">
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-32 bg-zinc-950 dark:bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF6900]/20 via-transparent to-transparent" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <h2 className="text-5xl lg:text-7xl font-bold mb-6 uppercase leading-tight">
              <span className="block">{HOME_TEAM_SECTION.title.line1}</span>
              <span className="block text-[#FF6900]">{HOME_TEAM_SECTION.title.line2}</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {HOME_TEAM_SECTION.members.map((member, index) => (
              <div key={index} className="group relative">
                {/* Image container */}
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />

                  {/* Full-width black bar at bottom on hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
                    <div className="font-bold text-lg mb-1 text-white">{member.name}</div>
                    <div className="text-sm text-white/80">{member.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats bar below team */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-white/10">
            {HOME_TEAM_SECTION.statsBar.map((stat, index) => (
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
                <span className="block text-zinc-900 dark:text-white">{HOME_FAQ_SECTION.title.line1}</span>
                <span className="block text-[#FF6900]">{HOME_FAQ_SECTION.title.line2}</span>
              </h2>
              <p className="text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                {HOME_FAQ_SECTION.subtitle}
              </p>
            </div>
          </div>

          {/* Full Width Accordion */}
          <div className="max-w-full">
            <Accordion type="single" collapsible className="space-y-0 border-t border-zinc-200 dark:border-zinc-800" >
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-zinc-200 dark:border-zinc-800"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-8 px-8 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors group">
                    <div className="flex items-center gap-6 flex-1">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#FF6900]/10 flex items-center justify-center group-hover:bg-[#FF6900] transition-colors">
                        <span className="text-lg font-bold text-[#FF6900] group-hover:text-white transition-colors">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <span className="text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white">
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
              <span className="block">{HOME_FINAL_CTA.title.line1}</span>
              <span className="block text-[#FF6900]">{HOME_FINAL_CTA.title.line2}</span>
            </h2>

            <p className="text-2xl text-zinc-300 mb-12 max-w-2xl">
              {HOME_FINAL_CTA.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup">
                <Button
                  size="lg"
                  className="bg-[#FF6900] hover:bg-[#E55A00] text-white px-10 h-14 rounded-full shadow-xl group"
                >
                  {HOME_FINAL_CTA.cta.primary}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-zinc-900 px-10 h-14 rounded-full"
              >
                {HOME_FINAL_CTA.cta.secondary}
              </Button>
            </div>

            <div className="flex items-center gap-12 mt-12">
              {HOME_FINAL_CTA.stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-[#FF6900] mb-1">{stat.value}</div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WebsiteFooter />
    </div>
  );
}