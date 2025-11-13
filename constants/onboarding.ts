import { MapPin, Zap, Gift, Shield } from 'lucide-react';

export const ONBOARDING_HEADER = {
  logoText: 'EmberX',
  subtitle: 'Location-Based Rewards',
};

export const ONBOARDING_STEPS = [
  {
    icon: MapPin,
    title: 'Discover Rewards Nearby',
    description: 'Find exclusive deals and rewards from local businesses just by being in the right place at the right time.',
  },
  {
    icon: Zap,
    title: 'Collect EmberX Tokens',
    description: 'Earn EmberX tokens automatically when you\'re within 8 meters of participating locations. No scanning required!',
  },
  {
    icon: Gift,
    title: 'Redeem Amazing Deals',
    description: 'Use your tokens to unlock vouchers, discounts, and exclusive offers from your favorite brands.',
  },
  {
    icon: Shield,
    title: 'Your Privacy Matters',
    description: 'Choose your privacy level from fully public with leaderboards to completely anonymous. You\'re in control.',
  },
];

export const ONBOARDING_BUTTONS = {
  skip: 'Skip Introduction',
  next: 'Next',
  back: 'Back',
  getStarted: 'Get Started',
};

export const ONBOARDING_NAVIGATION = {
  alreadyHaveAccount: 'Already have an account?',
  backToHome: 'Back to Home',
};
