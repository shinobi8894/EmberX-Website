"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Wallet, Gift, Shield, Zap } from 'lucide-react';

const onboardingSteps = [
  {
    icon: MapPin,
    title: "Discover Rewards Nearby",
    description: "Find exclusive deals and rewards from local businesses just by being in the right place at the right time."
  },
  {
    icon: Wallet,
    title: "Collect EmberX Tokens",
    description: "Earn EmberX tokens automatically when you're within 8 meters of participating locations. No scanning required!"
  },
  {
    icon: Gift,
    title: "Redeem Amazing Deals",
    description: "Use your tokens to unlock vouchers, discounts, and exclusive offers from your favorite brands."
  },
  {
    icon: Shield,
    title: "Your Privacy Matters",
    description: "Choose your privacy level from fully public with leaderboards to completely anonymous. You're in control."
  }
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Redirect to coming soon page after onboarding
      window.location.href = '/coming-soon';
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const skipOnboarding = () => {
    window.location.href = '/coming-soon';
  };

  const step = onboardingSteps[currentStep];
  const IconComponent = step.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF6900] via-[#FF8533] to-[#FFA166] flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
        {/* Logo */}
        <div className="text-center mb-8 sm:mb-12">
          <Link href="/" className="inline-block">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/30">
              <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </Link>
          <h1 className="text-white text-2xl sm:text-3xl font-bold">EmberX</h1>
          <p className="text-white/90 text-base sm:text-lg mt-1">Location-Based Rewards</p>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-2 mb-6 sm:mb-8">
          {onboardingSteps.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentStep
                  ? 'bg-white w-8'
                  : index < currentStep
                  ? 'bg-white/70 w-2'
                  : 'bg-white/30 w-2'
              }`}
            />
          ))}
        </div>

        {/* Content Card */}
        <Card className="bg-white border-white/20 shadow-xl">
          <CardContent className="p-6 sm:p-8 text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FF6900]/10 flex items-center justify-center mx-auto mb-6">
              <IconComponent size={28} className="text-[#FF6900]" />
            </div>
            
            <h2 className="text-gray-900 text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{step.title}</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">{step.description}</p>
            
            <div className="flex gap-3">
              {currentStep > 0 && (
                <Button
                  variant="outline"
                  onClick={prevStep}
                  className="flex-1 border-[#FF6900]/30 text-[#FF6900] hover:bg-[#FF6900]/10"
                >
                  Back
                </Button>
              )}
              <Button
                onClick={nextStep}
                className="flex-1 bg-[#FF6900] text-white hover:bg-[#E55A00]"
              >
                {currentStep === onboardingSteps.length - 1 ? 'Get Started' : 'Next'}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Skip Option */}
        <button
          onClick={skipOnboarding}
          className="w-full mt-4 sm:mt-6 text-white/80 hover:text-white text-sm transition-colors"
        >
          Skip Introduction
        </button>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-4 mt-6">
          <Link
            href="/signin"
            className="text-white/80 hover:text-white text-sm transition-colors"
          >
            Already have an account?
          </Link>
          <span className="text-white/50">•</span>
          <Link
            href="/"
            className="text-white/80 hover:text-white text-sm transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}