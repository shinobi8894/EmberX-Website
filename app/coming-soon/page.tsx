"use client"

import { useState } from 'react';
import { Mail, MapPin, Gift, Smartphone, Users, Zap, Bell, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // In a real app, this would submit to a backend
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const features = [
    {
      icon: MapPin,
      title: 'Location-Based Rewards',
      description: 'Discover exclusive deals and rewards as you explore your city'
    },
    {
      icon: Gift,
      title: 'Brand Partnerships',
      description: 'Collect from your favorite brands like Starbucks, Nike, and local businesses'
    },
    {
      icon: Zap,
      title: 'Auto-Collect Technology',
      description: 'Rewards automatically collected when you\'re within 8 meters'
    },
    {
      icon: Users,
      title: 'Social Rewards',
      description: 'Share with friends and earn together through our referral program'
    }
  ];

  const brands = [
    { name: 'Starbucks', emoji: '☕' },
    { name: 'Nike', emoji: '👟' },
    { name: 'McDonald\'s', emoji: '🍔' },
    { name: 'Chipotle', emoji: '🌯' },
    { name: 'Nero Caffè', emoji: '☕' },
    { name: 'West Ham', emoji: '⚽' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-orange-900/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6900]/10 to-purple-600/10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FF6900] rounded-2xl mb-4">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Ember<span className="text-[#FF6900]">X</span>
            </h1>
          </div>

          {/* Status Badge */}
          <Badge className="bg-[#FF6900] text-white hover:bg-[#E55A00] text-lg px-6 py-2 mb-8">
            <Bell className="w-4 h-4 mr-2" />
            Coming Soon
          </Badge>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 max-w-4xl mx-auto leading-tight">
            The Future of Location-Based Rewards is Almost Here
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover, collect, and redeem exclusive rewards from your favorite brands as you explore your city. 
            No more hunting for deals – they find you.
          </p>

          {/* Email Signup */}
          <Card className="max-w-md mx-auto mb-12">
            <CardContent className="p-6">
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block mb-2">
                    Get notified when we launch
                  </label>
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1"
                      required
                    />
                    <Button 
                      type="submit" 
                      className="bg-[#FF6900] hover:bg-[#E55A00] whitespace-nowrap"
                      disabled={isSubmitted}
                    >
                      {isSubmitted ? 'Added!' : 'Notify Me'}
                      {!isSubmitted && <ArrowRight className="w-4 h-4 ml-2" />}
                    </Button>
                  </div>
                </div>
                {isSubmitted && (
                  <p className="text-green-600 text-sm">✓ You'll be the first to know when we launch!</p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF6900]">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Partner Brands</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF6900]">50K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Reward Locations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF6900]">200mi</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Discovery Range</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF6900]">8m</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Auto-Collect</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              How EmberX Works
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A revolutionary approach to discovering and collecting rewards that makes every journey rewarding
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FF6900]/10 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-[#FF6900]" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Partner Brands Section */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Partner Brands
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            Collect rewards from the brands you love
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg px-6 py-4 shadow-sm">
                <span className="text-2xl">{brand.emoji}</span>
                <span className="font-medium text-gray-900 dark:text-white">{brand.name}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-500 dark:text-gray-400 mt-8 text-sm">
            + hundreds more local and international brands
          </p>
        </div>
      </div>

      {/* App Preview Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Experience the Future of Rewards
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            EmberX combines location technology, blockchain rewards, and social features 
            to create the most engaging reward experience ever built.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-left">
              <CardContent className="p-6">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-4 h-4 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Smart Discovery</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  AI-powered location intelligence finds the best rewards near you, with filtering from 500m to 200 miles.
                </p>
              </CardContent>
            </Card>

            <Card className="text-left">
              <CardContent className="p-6">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-4 h-4 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Seamless Experience</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Screen-lock map display and auto-collect technology make earning rewards effortless.
                </p>
              </CardContent>
            </Card>

            <Card className="text-left">
              <CardContent className="p-6">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-4 h-4 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Social Rewards</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Share with friends, build streaks with brands, and climb leaderboards together.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Final CTA */}
          <Card className="max-w-lg mx-auto bg-gradient-to-r from-[#FF6900] to-orange-600 text-white">
            <CardContent className="p-8 text-center">
              <h4 className="text-xl font-bold mb-2">Be Among the First</h4>
              <p className="mb-4 opacity-90">
                Join thousands of early adopters who will transform how they discover and collect rewards.
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-[#FF6900] hover:bg-gray-100"
                onClick={() => {
                  const emailSection = document.querySelector('input[type="email"]');
                  emailSection?.scrollIntoView({ behavior: 'smooth' });
                  (emailSection as HTMLInputElement)?.focus();
                }}
              >
                Get Early Access
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#FF6900] rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold">EmberX</span>
          </div>
          <p className="text-gray-400 mb-4">
            The future of location-based rewards
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 EmberX. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}