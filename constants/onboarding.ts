import { MapPin, Zap, Gift, Users } from 'lucide-react';

export const ONBOARDING_STEPS = [
  {
    id: 1,
    icon: MapPin,
    title: 'Discover Nearby Rewards',
    description: 'EmberX automatically shows you rewards from brands near your location. No searching required.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    icon: Zap,
    title: 'Auto-Collect Your Rewards',
    description: 'Walk within 8 meters of a reward and it\'s automatically added to your wallet. Zero friction.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    icon: Gift,
    title: 'Redeem Instantly',
    description: 'Show your QR code at checkout to redeem rewards. Simple, fast, and contactless.',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 4,
    icon: Users,
    title: 'Compete & Share',
    description: 'Join leaderboards, share achievements, and earn bonus rewards for referring friends.',
    color: 'from-green-500 to-emerald-500',
  },
];

export const ONBOARDING_FEATURES = [
  'No scanning or manual check-ins',
  'Privacy controls at every level',
  'Works in background mode',
  'Smart notifications for high-value rewards',
  'Customizable brand preferences',
  'Real-time reward tracking',
];

export const ONBOARDING_BUTTONS = {
  skip: 'Skip Tour',
  next: 'Next',
  previous: 'Previous',
  getStarted: 'Get Started',
};
