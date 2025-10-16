"use client"

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';
import { WebsiteHeader } from '@/components/website/website-header';
import { WebsiteFooter } from '@/components/website/website-footer';
import { 
  MapPin, 
  Smartphone, 
  Coins, 
  Store, 
  Users, 
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Award,
  Download,
  Search,
  Gift,
  BarChart3,
  Shield,
  Zap,
  Target
} from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  const features = [
    {
      icon: MapPin,
      title: 'Location-Based Discovery',
      description: 'Find rewards near you with our advanced location technology. From 500m to 200 miles radius.'
    },
    {
      icon: Smartphone,
      title: 'Auto-Collect Technology',
      description: 'Automatically collect rewards when you\'re within 8 meters. No scanning, no hassle.'
    },
    {
      icon: Coins,
      title: 'EmberX Token Economy',
      description: 'Earn EmberX tokens and brand-specific tokens. Redeem for real rewards and experiences.'
    },
    {
      icon: Store,
      title: 'Brand Partnerships',
      description: 'Partner with thousands of brands from local cafes to global retailers.'
    }
  ];

  const businessFeatures = [
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Track campaign performance with detailed analytics and insights.'
    },
    {
      icon: Users,
      title: 'Customer Engagement',
      description: 'Drive foot traffic and build customer loyalty with targeted rewards.'
    }
  ];

  const stats = [
    { value: '1M+', label: 'Active Users' },
    { value: '50K+', label: 'Partner Businesses' },
    { value: '$10M+', label: 'Rewards Distributed' },
    { value: '500+', label: 'Cities Worldwide' }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Coffee Enthusiast',
      content: 'I\'ve discovered so many amazing local cafes through EmberX. The auto-collect feature is genius!',
      rating: 5
    },
    {
      name: 'Mike Rodriguez',
      role: 'Restaurant Owner',
      content: 'EmberX has increased our foot traffic by 40%. The analytics help us understand our customers better.',
      rating: 5
    },
    {
      name: 'Emily Johnson',
      role: 'Frequent Traveler',
      content: 'Perfect for exploring new cities. I always find great local deals wherever I go.',
      rating: 5
    }
  ];

  return (
    <div className="overflow-hidden bg-background text-foreground">
      <WebsiteHeader />
      
      {/* Hero Section */}
      <section className="relative bg-hero text-hero-foreground overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 mb-6">
                🚀 Now available worldwide
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-hero-foreground">
                  The Future of
                </span>
                <span className="block text-hero-foreground">
                  Location-Based
                </span>
                <span className="block text-hero-foreground">
                  Rewards
                </span>
              </h1>
              <p className="text-xl text-hero-foreground/80 mb-8 max-w-lg">
                Discover, collect, and redeem rewards from your favorite brands 
                while exploring your city. Join millions of users earning EmberX tokens every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-3 font-semibold transition-colors duration-200"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-3 font-semibold transition-colors duration-200"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image 
                src="/imgs/bg.png"
                alt="EmberX Mobile App"
                className="w-full h-full"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose EmberX?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Revolutionary technology meets user-friendly design to create the ultimate rewards experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-card border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Getting started with EmberX is simple and rewarding
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Download & Sign Up',
                description: 'Get the EmberX app and create your account in seconds. Choose your privacy level and preferences.'
              },
              {
                step: '2',
                title: 'Explore & Discover',
                description: 'Use our map to find rewards near you. Set your search radius from 500m to 200 miles.'
              },
              {
                step: '3',
                title: 'Collect & Redeem',
                description: 'Auto-collect rewards when you\'re nearby, or manually collect them. Redeem for amazing deals and experiences.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary-foreground font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Businesses Section */}
      <section id="business" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">
                For Businesses
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Drive Customer Engagement Like Never Before
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of businesses using EmberX to increase foot traffic, 
                build customer loyalty, and track performance with precision analytics.
              </p>
              
              <div className="space-y-6 mb-8">
                {businessFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Start Your Campaign
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <ImageWithFallback 
                src="/imgs/bg.png"
                alt="Business team collaboration"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Join millions of satisfied users and businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Start Earning Rewards?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join millions of users discovering amazing rewards in their city. 
            Download EmberX today and start your rewarding journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-3 font-semibold"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                document.getElementById('features')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-3 font-semibold transition-all duration-200"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <WebsiteFooter />
    </div>
  );
}